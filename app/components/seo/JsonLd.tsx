import type { SiteData } from "@/app/data/site-meta";

/**
 * Renders JSON-LD structured data (Schema.org) into a <script> tag.
 * One component combines Organization + WebSite + ProfessionalService
 * so Google understands entity, search box, service area, and services.
 */
export default function JsonLd({ site }: { site: SiteData }) {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      logo: `${site.url}/logo.png`,
      image: `${site.url}/logo.png`,
      description: site.description,
      email: site.email,
      telephone: site.phone,
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        addressLocality: site.address.city,
        addressRegion: site.address.region,
        addressCountry: site.address.country,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: site.geo.lat,
        longitude: site.geo.lng,
      },
      areaServed: "Worldwide",
      sameAs: site.social,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Development Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Full-Stack Web Development" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Shopify App & Theme Development" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Product Development" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "SaaS Platform Engineering" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business Automation & Integrations" } },
        ],
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "47",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      publisher: { "@id": `${site.url}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: `${site.url}/portfolio?search={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
