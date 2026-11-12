import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      // AI search/citation engines — explicitly allowed so Perplexity /
      // ChatGPT Browse / Bing Copilot / Gemini can index and cite us.
      {
        userAgent: [
          "Googlebot",
          "Googlebot-Image",
          "Googlebot-Video",
          "Google-Extended",
          "Google-InspectionTool",
          "GoogleOther",
          "Bingbot",
          "BingPreview",
          "Slurp",
          "DuckDuckBot",
          "Baiduspider",
          "YandexBot",
          "facebookexternalhit",
          "ia_archiver",
          "PerplexityBot",
          "ClaudeBot",
          "Claude-Web",
          "Amazonbot",
          "Applebot-Extended",
          "Bytespider",
          "GPTBot",
          "ChatGPT-User",
          "Cohere-AI",
          "Omgilibot",
          "omgili",
          "Diffbot",
          "YouBot",
          "Pinterestbot",
          "LinkedInBot",
          "WhatsApp",
          "TelegramBot",
          "Discordbot",
        ],
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://geekyacedigitalhub.com/sitemap.xml",
    host: "https://geekyacedigitalhub.com",
  };
}
