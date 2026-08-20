import type { Metadata } from "next";

import ShowcaseHero from "@/app/components/showcase/ShowcaseHero";
import ShowcaseStats from "@/app/components/showcase/ShowcaseStats";
import FeaturedCaseStudy from "@/app/components/showcase/FeaturedCaseStudy";
import FeaturedProjects from "@/app/components/showcase/FeaturedProjects";
import ShowcaseProofStandards from "@/app/components/showcase/ShowcaseProofStandards";

export const metadata: Metadata = {
  title: "Work & Capability Showcase",
  description:
    "Explore clearly labeled capability concepts and verified work across websites, AI, mobile applications, automation, branding, and digital products.",
};

export default function ShowcasePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <ShowcaseHero />

      <ShowcaseProofStandards />

      {/* Statistics */}
      <ShowcaseStats />

      {/* Featured Case Study */}
      <FeaturedCaseStudy />

      {/* Project Portfolio */}
      <FeaturedProjects />
    </main>
  );
}
