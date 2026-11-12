type Step = { name: string; text: string; url?: string };

/**
 * HowTo schema — AI engines and Google use this for step-by-step answers
 * to "how do I hire an agency / start a project" queries.
 */
export default function HowToSchema({ name, description, steps }: { name: string; description: string; steps: Step[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    totalTime: "P3D",
    estimatedCost: { "@type": "MonetaryAmount", currency: "USD", value: "0" },
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
      url: s.url,
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
