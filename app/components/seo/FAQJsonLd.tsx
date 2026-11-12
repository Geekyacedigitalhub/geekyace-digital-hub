type QA = { question: string; answer: string };

/**
 * FAQPage structured data — Google shows these directly as a rich FAQ
 * snippet in results AND AI engines (Perplexity, Gemini, ChatGPT Browse)
 * pull from them heavily when answering service questions.
 */
export default function FAQJsonLd({ items }: { items: QA[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((qa) => ({
      "@type": "Question",
      name: qa.question,
      acceptedAnswer: { "@type": "Answer", text: qa.answer },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
