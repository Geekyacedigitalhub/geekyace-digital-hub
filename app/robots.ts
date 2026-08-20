import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/dashboard/", "/api/", "/client-portal"],
    },
    sitemap: "https://geekyacedigitalhub.com/sitemap.xml",
  };
}
