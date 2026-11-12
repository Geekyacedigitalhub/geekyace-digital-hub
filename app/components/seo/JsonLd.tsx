import type { SiteData } from "@/app/data/site-meta";

/**
 * JSON-LD structured data (Schema.org):
 *  - Organization (global agency)
 *  - ProfessionalService with worldwide areaServed + global services
 *  - WebSite with SearchAction (Google sitelinks search box)
 *
 * The address is kept as the HQ (Lagos) but areaServed is Worldwide so
 * Google understands this is a remote/global agency, not a local-only shop.
 */
export default function JsonLd({ site }: { site: SiteData }) {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      logo: `${site.url}/logo.png`,
      image: `${site.url}/logo.png`,
      description: site.description,
      email: site.email,
      telephone: site.phone,
      foundingLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: site.address.city,
          addressRegion: site.address.region,
          addressCountry: site.address.country,
        },
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        addressLocality: site.address.city,
        addressRegion: site.address.region,
        addressCountry: site.address.country,
      },
      areaServed: {
        "@type": "GeoCircle",
        geoMidpoint: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
        geoRadius: "20000 km",
        description: "Worldwide — remote-first",
      },
      availableLanguage: ["English"],
      sameAs: site.social,
      serviceType: [
        "Full-Stack Web Development",
        "Shopify App & Theme Development",
        "AI Product Development",
        "SaaS Platform Engineering",
        "Business Automation & Integrations",
        "Product Design & UI/UX",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Development Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Full-Stack Web Development", serviceType: "Web Development" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Shopify App & Theme Development", serviceType: "E-commerce Development" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Product Development", serviceType: "AI Solutions" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "SaaS Platform Engineering", serviceType: "SaaS Development" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business Automation & Integrations", serviceType: "Automation" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "MVP Development for Startups", serviceType: "Startup Engineering" } },
        ],
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "47",
        bestRating: "5",
        worstRating: "1",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      inLanguage: "en",
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
