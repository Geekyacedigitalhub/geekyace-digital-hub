import ShowcaseHero from "@/app/components/showcase/ShowcaseHero";
import ShowcaseStats from "@/app/components/showcase/ShowcaseStats";
import FeaturedCaseStudy from "@/app/components/showcase/FeaturedCaseStudy";
import FeaturedProjects from "@/app/components/showcase/FeaturedProjects";

export default function ShowcasePage() {
  return (
    <main>
      <ShowcaseHero />

      <ShowcaseStats />

      <FeaturedCaseStudy />

      <FeaturedProjects />
    </main>
  );
}