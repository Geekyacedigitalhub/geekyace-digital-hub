import Button from "../Button";
import PageHero from "../ui/PageHero";
import { ArrowRight, Code2, ShoppingBag, Sparkles } from "lucide-react";

export default function SolutionsHero() {
  return (
    <PageHero
      title="Technology Built Around the Problem You Need to Solve"
      description="GeekyAce Digital Hub designs and develops full-stack applications, Shopify systems, AI products, automation workflows, and custom digital experiences around real business requirements."
    >
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Button href="/contact" variant="primary" size="lg">
          Start a Project <ArrowRight className="h-4 w-4" />
        </Button>
        <Button href="/showcase" variant="secondary" size="lg">
          Explore the Portfolio
        </Button>
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {[
          [Code2, "Full-Stack"],
          [ShoppingBag, "Shopify"],
          [Sparkles, "AI"],
        ].map(([Icon, label]) => (
          <span key={label as string} className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-2 text-xs font-bold text-green-700">
            <Icon size={14} /> {label as string}
          </span>
        ))}
      </div>
    </PageHero>
  );
}