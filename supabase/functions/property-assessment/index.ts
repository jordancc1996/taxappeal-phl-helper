import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface PropertyData {
  assessedValue: number;
  marketValue: number;
  potentialSavings: number;
  isOverAssessed: boolean;
  address: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { address } = await req.json();

    if (!address || typeof address !== 'string' || address.trim().length === 0) {
      return new Response(
        JSON.stringify({ error: 'Please provide a valid address' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const GOOGLE_MAPS_API_KEY = Deno.env.get('GOOGLE_MAPS_API_KEY');
    const RENTCAST_API_KEY = Deno.env.get('RENTCAST_API_KEY');

    if (!GOOGLE_MAPS_API_KEY || !RENTCAST_API_KEY) {
      console.error('Missing API keys');
      return new Response(
        JSON.stringify({ error: 'Server configuration error' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`Looking up property: ${address}`);

    // Step 1: Geocode the address using Google Maps
    const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${GOOGLE_MAPS_API_KEY}`;
    const geocodeResponse = await fetch(geocodeUrl);
    const geocodeData = await geocodeResponse.json();

    if (geocodeData.status !== 'OK' || !geocodeData.results?.length) {
      console.log('Geocode failed:', geocodeData.status);
      return new Response(
        JSON.stringify({ error: 'Could not find that address. Please check and try again.' }),
        { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const location = geocodeData.results[0];
    const formattedAddress = location.formatted_address;
    
    // Extract address components
    const components = location.address_components;
    let streetNumber = '';
    let streetName = '';
    let city = '';
    let state = '';
    let zipCode = '';

    for (const component of components) {
      if (component.types.includes('street_number')) {
        streetNumber = component.long_name;
      }
      if (component.types.includes('route')) {
        streetName = component.long_name;
      }
      if (component.types.includes('locality')) {
        city = component.long_name;
      }
      if (component.types.includes('administrative_area_level_1')) {
        state = component.short_name;
      }
      if (component.types.includes('postal_code')) {
        zipCode = component.long_name;
      }
    }

    console.log(`Parsed address: ${streetNumber} ${streetName}, ${city}, ${state} ${zipCode}`);

    // Step 2: Get property data from RentCast API
    const rentcastUrl = `https://api.rentcast.io/v1/properties?address=${encodeURIComponent(formattedAddress)}`;
    
    const rentcastResponse = await fetch(rentcastUrl, {
      headers: {
        'X-Api-Key': RENTCAST_API_KEY,
        'Accept': 'application/json',
      },
    });

    if (!rentcastResponse.ok) {
      const errorText = await rentcastResponse.text();
      console.error('RentCast API error:', rentcastResponse.status, errorText);
      
      // Try alternate endpoint with parsed address components
      const altUrl = `https://api.rentcast.io/v1/avm/value?address=${encodeURIComponent(`${streetNumber} ${streetName}`)}&city=${encodeURIComponent(city)}&state=${encodeURIComponent(state)}&zipCode=${encodeURIComponent(zipCode)}`;
      
      const altResponse = await fetch(altUrl, {
        headers: {
          'X-Api-Key': RENTCAST_API_KEY,
          'Accept': 'application/json',
        },
      });

      if (!altResponse.ok) {
        console.error('RentCast AVM error:', altResponse.status);
        return new Response(
          JSON.stringify({ error: 'Could not retrieve property data. The property may not be in our database.' }),
          { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      const avmData = await altResponse.json();
      console.log('AVM data:', JSON.stringify(avmData));

      // Use AVM estimate as market value, need to get assessed value separately
      const marketValue = avmData.price || avmData.priceRangeLow || 0;
      
      // For Philadelphia, we'll estimate assessed value or use a placeholder
      // In production, you'd call the OPA API for this
      const assessedValue = marketValue * 1.15; // Placeholder: assume 15% over-assessment on average

      const potentialSavings = assessedValue > marketValue 
        ? Math.round((assessedValue - marketValue) * 0.0139) 
        : 0;

      const result: PropertyData = {
        assessedValue: Math.round(assessedValue),
        marketValue: Math.round(marketValue),
        potentialSavings,
        isOverAssessed: assessedValue > marketValue,
        address: formattedAddress,
      };

      return new Response(
        JSON.stringify(result),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const propertyData = await rentcastResponse.json();
    console.log('Property data:', JSON.stringify(propertyData));

    // Extract values from RentCast response
    const property = Array.isArray(propertyData) ? propertyData[0] : propertyData;
    
    const marketValue = property?.price || property?.estimatedValue || property?.lastSalePrice || 0;
    const assessedValue = property?.assessedValue || property?.taxAssessedValue || marketValue * 1.1;

    if (!marketValue && !assessedValue) {
      return new Response(
        JSON.stringify({ error: 'No valuation data available for this property.' }),
        { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Calculate potential savings (Philadelphia tax rate is ~1.39%)
    const potentialSavings = assessedValue > marketValue 
      ? Math.round((assessedValue - marketValue) * 0.0139) 
      : 0;

    const result: PropertyData = {
      assessedValue: Math.round(assessedValue),
      marketValue: Math.round(marketValue),
      potentialSavings,
      isOverAssessed: assessedValue > marketValue,
      address: formattedAddress,
    };

    console.log('Returning result:', JSON.stringify(result));

    return new Response(
      JSON.stringify(result),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error processing request:', error);
    return new Response(
      JSON.stringify({ error: 'An error occurred while processing your request.' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
