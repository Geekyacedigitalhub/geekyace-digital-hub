export default function ArticleJsonLd({
  title, description, url, images, datePublished, authorName,
}: {
  title: string;
  description: string;
  url: string;
  images: string[];
  datePublished: string;
  authorName: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url,
    image: images,
    datePublished,
    author: { "@type": "Person", name: authorName },
    publisher: {
      "@type": "Organization",
      name: "GeekyAce Digital Hub",
      logo: { "@type": "ImageObject", url: "https://geekyacedigitalhub.com/logo.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
