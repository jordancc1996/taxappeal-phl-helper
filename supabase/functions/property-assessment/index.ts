import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const PHILLY_TAX_RATE = 0.013998; // 2025 Tax Rate (1.3998%)

interface PropertyData {
  assessedValue: number;
  marketValue: number;
  potentialSavings: number;
  isOverAssessed: boolean;
  address: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const jsonResponse = (payload: unknown, status = 200) =>
    new Response(JSON.stringify(payload), {
      status,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  try {
    const body = await req.json().catch(() => ({}));
    const address = typeof body?.address === "string" ? body.address.trim() : "";

    if (!address) {
      return jsonResponse({ error: "Please provide a valid address." });
    }

    const RENTCAST_API_KEY = Deno.env.get("RENTCAST_API_KEY");

    console.log(`Looking up property: ${address}`);

    // --- STEP 1: GET THE 2025 CITY VALUE FROM PHILLY CARTO API ---
    // Clean the address: take first part before comma, uppercase, trim
    const cleanAddr = address.split(',')[0].toUpperCase().trim();
    console.log(`Cleaned address for CARTO: ${cleanAddr}`);

    // Query the assessments table via Philadelphia's open data API
    const sqlQuery = `
      SELECT market_value 
      FROM assessments 
      WHERE parcel_number IN (
          SELECT parcel_number 
          FROM opa_properties_public 
          WHERE location = '${cleanAddr}'
      )
      ORDER BY year DESC 
      LIMIT 1
    `;

    const cityUrl = `https://phl.carto.com/api/v2/sql?q=${encodeURIComponent(sqlQuery)}`;
    console.log(`Fetching city assessment from: ${cityUrl}`);

    const cityRes = await fetch(cityUrl);
    const cityData = await cityRes.json();

    let cityValue = 0;
    if (cityData.rows && cityData.rows.length > 0) {
      cityValue = cityData.rows[0].market_value;
      console.log(`Found city assessed value: ${cityValue}`);
    } else {
      console.log("No city data found for address:", cleanAddr);
      return jsonResponse({
        error: "We couldn't find that address in the Philadelphia records. Try entering just the street number and name (e.g. 888 N 26TH ST)."
      });
    }

    // --- STEP 2: GET MARKET VALUE (RENTCAST) ---
    let marketValue = 0;

    if (RENTCAST_API_KEY) {
      try {
        const rentCastUrl = `https://api.rentcast.io/v1/avm/value?address=${encodeURIComponent(address)}&propertyType=Single%20Family`;
        console.log(`Fetching market value from RentCast: ${rentCastUrl}`);
        
        const marketRes = await fetch(rentCastUrl, {
          headers: { "X-Api-Key": RENTCAST_API_KEY }
        });
        
        if (marketRes.ok) {
          const marketData = await marketRes.json();
          marketValue = marketData.price || marketData.priceRangeLow || 0;
          console.log(`RentCast market value: ${marketValue}`);
        } else {
          console.log(`RentCast API failed with status: ${marketRes.status}`);
        }
      } catch (rentcastErr) {
        console.error("RentCast error:", rentcastErr);
      }
    } else {
      console.log("No RENTCAST_API_KEY configured");
    }

    // If RentCast failed, use a reasonable estimate based on city value
    if (!marketValue) {
      // Fallback: estimate market value as 85% of assessed (conservative)
      marketValue = Math.round(cityValue * 0.85);
      console.log(`Using estimated market value: ${marketValue}`);
    }

    // --- STEP 3: CALCULATE SAVINGS ---
    const diff = cityValue - marketValue;
    const annualSavings = diff > 0 ? Math.round(diff * PHILLY_TAX_RATE) : 0;

    const result: PropertyData = {
      assessedValue: Math.round(cityValue),
      marketValue: Math.round(marketValue),
      potentialSavings: annualSavings,
      isOverAssessed: diff > 0,
      address: cleanAddr,
    };

    console.log("Returning result:", result);
    return jsonResponse(result);

  } catch (error) {
    console.error("Error processing request:", error);
    return jsonResponse({ 
      error: "An error occurred while fetching data. Please try again." 
    }, 500);
  }
});
