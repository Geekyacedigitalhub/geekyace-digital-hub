export type SiteData = {
  name: string;
  url: string;
  title: string;
  titleTemplate: string;
  description: string;
  email: string;
  phone: string;
  address: { street: string; city: string; region: string; country: string };
  geo: { lat: number; lng: number };
  social: string[];
  keywords: string[];
};

export const site: SiteData = {
  name: "GeekyAce Digital Hub",
  url: "https://geekyacedigitalhub.com",
  title: "GeekyAce Digital Hub | Full-Stack Development Agency",
  titleTemplate: "%s | GeekyAce Digital Hub",
  description:
    "GeekyAce Digital Hub is a worldwide full-stack development agency building production-ready web apps, Shopify themes and apps, AI products, SaaS platforms, and business automation for founders and teams globally.",
  email: "hello@geekyacedigitalhub.com",
  phone: "+234-800-000-0000",
  address: {
    street: "Lekki Phase 1",
    city: "Lagos",
    region: "Lagos",
    country: "NG",
  },
  geo: { lat: 6.4654, lng: 3.4064 },
  social: [
    "https://github.com/Geekyacedigitalhub",
    "https://www.linkedin.com/company/geekyace-digital-hub",
    "https://x.com/geekyacehub",
  ],
  keywords: [
    "full stack development agency",
    "Next.js development agency",
    "React development company",
    "Shopify app developer",
    "Shopify theme development agency",
    "AI development company",
    "AI app development agency",
    "SaaS development agency",
    "custom software development company",
    "web application development agency",
    "business automation agency",
    "TypeScript development",
    "Prisma PostgreSQL developer",
    "ecommerce development agency",
    "MVP development for startups",
    "AI integration services",
    "design engineering studio",
    "product development studio",
    "GeekyAce Digital Hub",
  ],
};
