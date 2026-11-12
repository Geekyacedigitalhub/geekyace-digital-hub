import type { Metadata } from "next";

import ShowcaseHero from "@/app/components/showcase/ShowcaseHero";
import FeaturedCaseStudy from "@/app/components/showcase/FeaturedCaseStudy";
import FeaturedProjects from "@/app/components/showcase/FeaturedProjects";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies | GeekyAce Digital Hub",
  description:
    "A curated index of production web applications, Shopify themes and apps, AI products, SaaS platforms, and business automation built by GeekyAce Digital Hub for founders and teams worldwide.",
 alternates: {
    canonical: "/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white">
      <ShowcaseHero />
      <FeaturedCaseStudy />
      <FeaturedProjects />
    </main>
  );
}
