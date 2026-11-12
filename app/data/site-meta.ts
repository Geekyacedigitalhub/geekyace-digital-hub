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
  title: "GeekyAce Digital Hub | Full-Stack Developer",
  titleTemplate: "%s | GeekyAce Digital Hub",
  description:
    "GeekyAce Digital Hub builds production-ready full-stack web apps, Shopify themes and apps, AI products, SaaS platforms, and business automation for founders and teams in Lagos and worldwide.",
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
    "full stack developer Nigeria",
    "Next.js developer Lagos",
    "React developer Nigeria",
    "Shopify developer Lagos",
    "Shopify app developer",
    "AI development company",
    "SaaS development agency",
    "web application development Nigeria",
    "business automation Lagos",
    "custom software developer",
    "GeekyAce Digital Hub",
    "full-stack engineer Lagos",
    "TypeScript developer",
    "Prisma PostgreSQL developer",
    "ecommerce developer Nigeria",
  ],
};
