import SolutionsHero from "@/app/components/solutions/SolutionsHero";
import IndustryGrid from "@/app/components/solutions/IndustryGrid";
import ServicesGrid from "@/app/components/solutions/ServicesGrid";
import TechnologyStack from "@/app/components/solutions/TechnologyStack";
import DevelopmentProcess from "@/app/components/solutions/DevelopmentProcess";
import FAQ from "@/app/components/solutions/FAQ";
import CTA from "@/app/components/solutions/CTA";

export default function SolutionsPage() {
  return (
    <main>
      <SolutionsHero />
      <IndustryGrid />
      <ServicesGrid />
      <TechnologyStack />
      <DevelopmentProcess />
      <FAQ />
      <CTA />
    </main>
  );
}