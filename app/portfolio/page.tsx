import PortfolioHero from "@/app/components/portfolio/PortfolioHero";
import PortfolioCategories from "@/app/components/portfolio/PortfolioCategories";
import PortfolioGrid from "@/app/components/portfolio/PortfolioGrid";

export default function PortfolioPage() {
  return (
    <main>
      <PortfolioHero />

      <PortfolioCategories />

      <PortfolioGrid />
    </main>
  );
}