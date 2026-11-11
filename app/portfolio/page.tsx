import type { Metadata } from "next";

import ShowcaseHero from "@/app/components/showcase/ShowcaseHero";
import ShowcaseStats from "@/app/components/showcase/ShowcaseStats";
import FeaturedCaseStudy from "@/app/components/showcase/FeaturedCaseStudy";
import FeaturedProjects from "@/app/components/showcase/FeaturedProjects";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies | Geekyace Digital Hub",
  description:
    "Explore websites, AI solutions, mobile applications, automation systems, and digital products built by Geekyace Digital Hub.",
  alternates: {
    canonical: "/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white">
      <ShowcaseHero />
      <ShowcaseStats />
      <FeaturedCaseStudy />
      <FeaturedProjects />
    </main>
  );
}
