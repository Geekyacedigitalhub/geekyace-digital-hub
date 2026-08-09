import type { Metadata } from "next";

import ShowcaseHero from "@/app/components/showcase/ShowcaseHero";
import ShowcaseStats from "@/app/components/showcase/ShowcaseStats";
import FeaturedCaseStudy from "@/app/components/showcase/FeaturedCaseStudy";
import FeaturedProjects from "@/app/components/showcase/FeaturedProjects";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies | Geekyace Digital Hub",
  description:
    "Explore websites, AI solutions, mobile applications, automation systems, and digital products built by Geekyace Digital Hub.",
};

export default function ShowcasePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <ShowcaseHero />

      {/* Statistics */}
      <ShowcaseStats />

      {/* Featured Case Study */}
      <FeaturedCaseStudy />

      {/* Project Portfolio */}
      <FeaturedProjects />
    </main>
  );
}