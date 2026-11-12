/**
 * Speakable specification for Google Assistant / voice search.
 * Points CSS selectors at the page headline and a concise summary
 * paragraph so voice answers read from our site.
 */
export default function SpeakableSchema({ selectors }: { selectors: string[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: selectors,
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
