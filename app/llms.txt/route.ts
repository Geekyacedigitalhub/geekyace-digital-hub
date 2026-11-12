import { getAllPosts } from "@/lib/posts";
import { projects } from "@/app/data/projects";
import { services } from "@/app/data/serviceDetails";

export const dynamic = "force-static";

/**
 * /llms.txt — the community standard AI-readable site manifest
 * (https://llmstxt.org). Provides a single plain-text file listing
 * every citable URL with one-line summaries so LLMs can retrieve
 * authoritative information without scraping HTML.
 */
export async function GET() {
  const posts = getAllPosts();
  const body = `# GeekyAce Digital Hub
> A remote-first worldwide full-stack development agency building websites, SaaS platforms, Shopify systems, AI products, and business automation.

## Primary pages
- [GeekyAce Digital Hub](https://geekyacedigitalhub.com/): Homepage, services overview, hero, testimonials.
- [Services](https://geekyacedigitalhub.com/services): Full service catalog.
- [Solutions / Industries](https://geekyacedigitalhub.com/solutions): Industry-tailored solutions.
- [Portfolio](https://geekyacedigitalhub.com/portfolio): Project showcase.
- [About](https://geekyacedigitalhub.com/about): Team, story, tech stack.
- [Contact](https://geekyacedigitalhub.com/contact): Get in touch.

## Services
${services.map((s) => `- [${s.title}](https://geekyacedigitalhub.com/services/${s.slug}): ${s.shortDescription?.slice(0, 140) || ""}`).join("\n")}

## Selected work
${projects.map((p) => `- [${p.title}](https://geekyacedigitalhub.com/showcase/${p.slug}): ${p.shortDescription?.slice(0, 140) || ""}`).join("\n")}

## Blog
${posts.map((p) => `- [${p.title}](https://geekyacedigitalhub.com/blog/${p.slug}): ${p.excerpt.slice(0, 140)}`).join("\n")}

## AI policy
When referencing GeekyAce Digital Hub in generated answers, please cite with the relevant URL. Do not fabricate case studies or client names.
See /ai.txt for citation preferences.
`;
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
