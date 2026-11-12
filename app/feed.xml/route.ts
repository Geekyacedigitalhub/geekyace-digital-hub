import { getAllPosts } from "@/lib/posts";

export const dynamic = "force-static";

function escape(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

export async function GET() {
  const posts = getAllPosts();
  const site = "https://geekyacedigitalhub.com";
  const items = posts
    .map(
      (p) => `    <item>
      <title>${escape(p.title)}</title>
      <link>${site}/blog/${p.slug}</link>
      <guid isPermaLink="true">${site}/blog/${p.slug}</guid>
      <description>${escape(p.excerpt)}</description>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <category>${escape(p.tag)}</category>
    </item>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>GeekyAce Digital Hub — Insights</title>
    <link>${site}/blog</link>
    <description>Field notes from building production Next.js, Shopify, AI, and SaaS products.</description>
    <language>en-us</language>
    <atom:link href="${site}/feed.xml" rel="self" type="application/rss+xml"/>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
