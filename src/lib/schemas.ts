// Centralized schema.org definitions for all pages

const baseOrganization = {
  "@type": "LocalBusiness",
  "@id": "https://www.phillytaxappeals.com/#organization",
  "name": "Philly Tax Appeals",
  "url": "https://www.phillytaxappeals.com",
  "logo": "https://www.phillytaxappeals.com/favicon.png",
  "description": "Professional property tax appeal services in Philadelphia and surrounding counties. We help homeowners and businesses reduce their property tax burden with no upfront costs.",
  "priceRange": "$$",
  "telephone": "(267) 632-3162",
  "email": "jordan@phillytaxappeals.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Philadelphia",
    "addressRegion": "PA",
    "addressCountry": "US"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Philadelphia",
      "containedInPlace": { "@type": "State", "name": "Pennsylvania" }
    },
    {
      "@type": "AdministrativeArea",
      "name": "Bucks County",
      "containedInPlace": { "@type": "State", "name": "Pennsylvania" }
    },
    {
      "@type": "AdministrativeArea",
      "name": "Delaware County",
      "containedInPlace": { "@type": "State", "name": "Pennsylvania" }
    },
    {
      "@type": "AdministrativeArea",
      "name": "Montgomery County",
      "containedInPlace": { "@type": "State", "name": "Pennsylvania" }
    }
  ],
  "knowsAbout": [
    "Property Tax Appeals",
    "Real Estate Tax Assessment",
    "Property Valuation",
    "Tax Reduction Services"
  ]
};

const baseWebsite = {
  "@type": "WebSite",
  "@id": "https://www.phillytaxappeals.com/#website",
  "url": "https://www.phillytaxappeals.com",
  "name": "Philly Tax Appeals",
  "publisher": { "@id": "https://www.phillytaxappeals.com/#organization" }
};

export const homePageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    baseOrganization,
    {
      "@type": "ProfessionalService",
      "@id": "https://www.phillytaxappeals.com/#service",
      "name": "Property Tax Appeal Services",
      "provider": { "@id": "https://www.phillytaxappeals.com/#organization" },
      "serviceType": "Property Tax Appeal",
      "description": "Expert property tax appeal representation with no upfront costs. We analyze your property assessment and file appeals to reduce your tax burden.",
      "areaServed": ["Philadelphia, PA", "Bucks County, PA", "Delaware County, PA", "Montgomery County, PA"],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Tax Appeal Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Residential Property Tax Appeal" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Property Tax Appeal" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Property Assessment Analysis" } }
        ]
      }
    },
    baseWebsite
  ]
};

export const articlesPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    baseOrganization,
    {
      "@type": "CollectionPage",
      "@id": "https://www.phillytaxappeals.com/news#page",
      "url": "https://www.phillytaxappeals.com/news",
      "name": "Property Tax Appeal News & Insights",
      "description": "Expert insights on property tax appeals, assessment processes, and strategies to reduce your tax burden in the Philadelphia area.",
      "isPartOf": { "@id": "https://www.phillytaxappeals.com/#website" },
      "about": { "@id": "https://www.phillytaxappeals.com/#organization" }
    },
    baseWebsite
  ]
};

export const createCountyPageSchema = (county: string, url: string) => ({
  "@context": "https://schema.org",
  "@graph": [
    baseOrganization,
    {
      "@type": "Service",
      "@id": `${url}#service`,
      "name": `${county} Property Tax Appeal Services`,
      "provider": { "@id": "https://www.phillytaxappeals.com/#organization" },
      "serviceType": "Property Tax Appeal",
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": county,
        "containedInPlace": { "@type": "State", "name": "Pennsylvania" }
      },
      "description": `Expert property tax appeal services for ${county}, Pennsylvania. We help property owners reduce their tax burden with no upfront costs.`
    },
    {
      "@type": "WebPage",
      "@id": `${url}#page`,
      "url": url,
      "name": `${county} Property Tax Appeals`,
      "isPartOf": { "@id": "https://www.phillytaxappeals.com/#website" },
      "about": { "@id": `${url}#service` },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Philly Tax Appeals", "item": "https://www.phillytaxappeals.com" },
          { "@type": "ListItem", "position": 2, "name": `${county} Property Tax Appeals`, "item": url }
        ]
      }
    },
    baseWebsite
  ]
});

export const contactPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    baseOrganization,
    {
      "@type": "ContactPage",
      "@id": "https://www.phillytaxappeals.com/contact#page",
      "url": "https://www.phillytaxappeals.com/contact",
      "name": "Contact Philly Tax Appeals",
      "description": "Get a free property tax assessment evaluation. Contact our team of property tax appeal experts serving Philadelphia and surrounding counties.",
      "isPartOf": { "@id": "https://www.phillytaxappeals.com/#website" },
      "about": { "@id": "https://www.phillytaxappeals.com/#organization" }
    },
    baseWebsite
  ]
};

export const privacyPolicySchema = {
  "@context": "https://schema.org",
  "@graph": [
    baseOrganization,
    {
      "@type": "WebPage",
      "@id": "https://www.phillytaxappeals.com/privacy-policy#page",
      "url": "https://www.phillytaxappeals.com/privacy-policy",
      "name": "Privacy Policy | Philly Tax Appeals",
      "description": "Privacy policy for Philly Tax Appeals. Learn how we collect, use, and protect your personal information.",
      "isPartOf": { "@id": "https://www.phillytaxappeals.com/#website" }
    },
    baseWebsite
  ]
};
