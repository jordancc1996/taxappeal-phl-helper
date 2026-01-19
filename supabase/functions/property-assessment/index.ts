import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface PropertyData {
  assessedValue: number;
  marketValue: number;
  potentialSavings: number;
  isOverAssessed: boolean;
  address: string;
}

type GeocodeOk = {
  formattedAddress: string;
  streetNumber: string;
  streetName: string;
  city: string;
  state: string;
  zipCode: string;
};

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
      // NOTE: return 200 so the client can read the JSON error
      return jsonResponse({ error: "Please provide a valid address." });
    }

    const GOOGLE_MAPS_API_KEY = Deno.env.get("GOOGLE_MAPS_API_KEY");
    const RENTCAST_API_KEY = Deno.env.get("RENTCAST_API_KEY");

    if (!RENTCAST_API_KEY) {
      console.error("Missing RENTCAST_API_KEY");
      return jsonResponse({ error: "Server configuration error" }, 500);
    }

    const rentcastHeaders = {
      "X-Api-Key": RENTCAST_API_KEY,
      Accept: "application/json",
    };

    const calcResult = (marketValue: number, assessedValue: number, resultAddress: string): PropertyData => {
      const potentialSavings = assessedValue > marketValue
        ? Math.round((assessedValue - marketValue) * 0.0139)
        : 0;

      return {
        assessedValue: Math.round(assessedValue),
        marketValue: Math.round(marketValue),
        potentialSavings,
        isOverAssessed: assessedValue > marketValue,
        address: resultAddress,
      };
    };

    const tryRentcastProperties = async (addr: string) => {
      const url = `https://api.rentcast.io/v1/properties?address=${encodeURIComponent(addr)}`;
      const res = await fetch(url, { headers: rentcastHeaders });
      const text = await res.text();
      if (!res.ok) return { ok: false as const, status: res.status, text };
      const json = JSON.parse(text);
      return { ok: true as const, json };
    };

    const tryRentcastAvm = async (params: {
      addressLine: string;
      city?: string;
      state?: string;
      zipCode?: string;
    }) => {
      const qs = new URLSearchParams();
      qs.set("address", params.addressLine);
      if (params.city) qs.set("city", params.city);
      if (params.state) qs.set("state", params.state);
      if (params.zipCode) qs.set("zipCode", params.zipCode);

      const url = `https://api.rentcast.io/v1/avm/value?${qs.toString()}`;
      const res = await fetch(url, { headers: rentcastHeaders });
      const text = await res.text();
      if (!res.ok) return { ok: false as const, status: res.status, text };
      const json = JSON.parse(text);
      return { ok: true as const, json };
    };

    const geocodeWithGoogle = async (input: string): Promise<GeocodeOk | { error: string; statusHint?: string }> => {
      if (!GOOGLE_MAPS_API_KEY) {
        return { error: "Geocoding is not configured." };
      }

      const geocodeUrl =
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(input)}&key=${GOOGLE_MAPS_API_KEY}`;

      const res = await fetch(geocodeUrl);
      const data = await res.json();

      if (data.status !== "OK" || !data.results?.length) {
        const status = String(data.status ?? "UNKNOWN");
        const msg = String(data.error_message ?? "");

        // Log detail for debugging, but don't leak secrets.
        console.log("Geocode failed:", status, msg);

        if (status === "ZERO_RESULTS") {
          return { error: "Could not find that address. Please check and try again.", statusHint: status };
        }

        // Common causes: API not enabled, billing disabled, or key is restricted (e.g. HTTP referrer restriction)
        return {
          error:
            `Geocoding request was denied (${status}). ` +
            "Please ensure the Geocoding API is enabled, billing is active, and the key has no HTTP referrer restrictions.",
          statusHint: status,
        };
      }

      const location = data.results[0];
      const formattedAddress = location.formatted_address as string;

      const components = location.address_components as Array<{ long_name: string; short_name: string; types: string[] }>;
      let streetNumber = "";
      let streetName = "";
      let city = "";
      let state = "";
      let zipCode = "";

      for (const component of components) {
        if (component.types.includes("street_number")) streetNumber = component.long_name;
        if (component.types.includes("route")) streetName = component.long_name;
        if (component.types.includes("locality")) city = component.long_name;
        if (component.types.includes("administrative_area_level_1")) state = component.short_name;
        if (component.types.includes("postal_code")) zipCode = component.long_name;
      }

      return { formattedAddress, streetNumber, streetName, city, state, zipCode };
    };

    console.log(`Looking up property: ${address}`);

    // 1) Try RentCast directly with the user's input (no geocoding required)
    const directProps = await tryRentcastProperties(address);
    if (directProps.ok) {
      const propertyData = directProps.json;
      const property = Array.isArray(propertyData) ? propertyData[0] : propertyData;

      const marketValue = property?.price || property?.estimatedValue || property?.lastSalePrice || 0;
      const assessedValue = property?.assessedValue || property?.taxAssessedValue || marketValue * 1.1;

      if (!marketValue && !assessedValue) {
        return jsonResponse({ error: "No valuation data available for this property." });
      }

      return jsonResponse(calcResult(marketValue, assessedValue, address));
    } else {
      console.log("RentCast properties failed:", directProps.status, directProps.text);
    }

    // 2) Try RentCast AVM with the user's input
    const directAvm = await tryRentcastAvm({ addressLine: address });
    if (directAvm.ok) {
      const avmData = directAvm.json;
      const marketValue = avmData.price || avmData.priceRangeLow || 0;

      if (!marketValue) {
        return jsonResponse({ error: "No valuation data available for this property." });
      }

      // NOTE: assessed value is currently estimated (placeholder)
      const assessedValue = marketValue * 1.15;
      return jsonResponse(calcResult(marketValue, assessedValue, address));
    } else {
      console.log("RentCast AVM failed:", directAvm.status, directAvm.text);
    }

    // 3) If direct lookups fail, try Google geocoding to normalize address + extract city/state/zip
    if (GOOGLE_MAPS_API_KEY) {
      const geo = await geocodeWithGoogle(address);
      if ("error" in geo) {
        // Return 200 so the client can show the real message.
        return jsonResponse({ error: geo.error });
      }

      const normalizedProps = await tryRentcastProperties(geo.formattedAddress);
      if (normalizedProps.ok) {
        const propertyData = normalizedProps.json;
        const property = Array.isArray(propertyData) ? propertyData[0] : propertyData;

        const marketValue = property?.price || property?.estimatedValue || property?.lastSalePrice || 0;
        const assessedValue = property?.assessedValue || property?.taxAssessedValue || marketValue * 1.1;

        if (!marketValue && !assessedValue) {
          return jsonResponse({ error: "No valuation data available for this property." });
        }

        return jsonResponse(calcResult(marketValue, assessedValue, geo.formattedAddress));
      } else {
        console.log("RentCast normalized properties failed:", normalizedProps.status, normalizedProps.text);
      }

      // Last fallback: AVM with parsed components
      const addressLine = `${geo.streetNumber} ${geo.streetName}`.trim() || address;
      const parsedAvm = await tryRentcastAvm({
        addressLine,
        city: geo.city,
        state: geo.state,
        zipCode: geo.zipCode,
      });

      if (parsedAvm.ok) {
        const avmData = parsedAvm.json;
        const marketValue = avmData.price || avmData.priceRangeLow || 0;

        if (!marketValue) {
          return jsonResponse({ error: "No valuation data available for this property." });
        }

        // NOTE: assessed value is currently estimated (placeholder)
        const assessedValue = marketValue * 1.15;
        return jsonResponse(calcResult(marketValue, assessedValue, geo.formattedAddress));
      }

      console.log("RentCast parsed AVM failed:", parsedAvm.status, parsedAvm.text);
    }

    return jsonResponse({
      error: "Could not retrieve property data for this address. Please double-check the address and try again.",
    });

  } catch (error) {
    console.error("Error processing request:", error);
    return new Response(JSON.stringify({ error: "An error occurred while processing your request." }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
