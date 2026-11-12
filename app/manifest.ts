import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "GeekyAce Digital Hub | Full-Stack Developer",
    short_name: "GeekyAce",
    description:
      "Full-stack web development, Shopify engineering, AI products, and business automation by GeekyAce Digital Hub.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f172a",
    theme_color: "#16a34a",
    orientation: "portrait-primary",
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { src: "/logo.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
    categories: ["business", "developer", "productivity"],
  };
}
