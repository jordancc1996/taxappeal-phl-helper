import { useEffect } from "react";

const SchemaMarkup = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "schema-markup";
    
    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LocalBusiness",
          "@id": "https://www.phillytaxappeals.com/#organization",
          "name": "Philly Tax Appeals",
          "url": "https://www.phillytaxappeals.com",
          "logo": "https://www.phillytaxappeals.com/favicon.png",
          "description": "Professional property tax appeal services in Philadelphia and surrounding counties. We help homeowners and businesses reduce their property tax burden with no upfront costs.",
          "priceRange": "$$",
          "areaServed": [
            {
              "@type": "City",
              "name": "Philadelphia",
              "containedInPlace": {
                "@type": "State",
                "name": "Pennsylvania"
              }
            },
            {
              "@type": "AdministrativeArea",
              "name": "Bucks County",
              "containedInPlace": {
                "@type": "State",
                "name": "Pennsylvania"
              }
            },
            {
              "@type": "AdministrativeArea",
              "name": "Delaware County",
              "containedInPlace": {
                "@type": "State",
                "name": "Pennsylvania"
              }
            },
            {
              "@type": "AdministrativeArea",
              "name": "Montgomery County",
              "containedInPlace": {
                "@type": "State",
                "name": "Pennsylvania"
              }
            }
          ],
          "knowsAbout": [
            "Property Tax Appeals",
            "Real Estate Tax Assessment",
            "Property Valuation",
            "Tax Reduction Services"
          ]
        },
        {
          "@type": "ProfessionalService",
          "@id": "https://www.phillytaxappeals.com/#service",
          "name": "Property Tax Appeal Services",
          "provider": {
            "@id": "https://www.phillytaxappeals.com/#organization"
          },
          "serviceType": "Property Tax Appeal",
          "description": "Expert property tax appeal representation with no upfront costs. We analyze your property assessment and file appeals to reduce your tax burden.",
          "areaServed": [
            "Philadelphia, PA",
            "Bucks County, PA",
            "Delaware County, PA",
            "Montgomery County, PA"
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Tax Appeal Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Residential Property Tax Appeal"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Commercial Property Tax Appeal"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Property Assessment Analysis"
                }
              }
            ]
          }
        },
        {
          "@type": "WebSite",
          "@id": "https://www.phillytaxappeals.com/#website",
          "url": "https://www.phillytaxappeals.com",
          "name": "Philly Tax Appeals",
          "publisher": {
            "@id": "https://www.phillytaxappeals.com/#organization"
          }
        }
      ]
    };

    script.textContent = JSON.stringify(schemaData);
    
    // Remove existing schema if present
    const existingScript = document.getElementById("schema-markup");
    if (existingScript) {
      existingScript.remove();
    }
    
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById("schema-markup");
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return null;
};

export default SchemaMarkup;
