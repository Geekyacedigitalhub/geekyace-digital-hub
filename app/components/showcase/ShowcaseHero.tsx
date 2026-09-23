import Button from "../Button";
import Container from "../ui/Container";
import { ArrowRight, Code2, Layers3, ShoppingBag, Sparkles } from "lucide-react";

const stats = [
  { number: "10+", label: "Featured builds" },
  { number: "6+", label: "Solution areas" },
  { number: "20+", label: "Technologies used" },
  { number: "1", label: "Unified portfolio" },
];

const categories = [
  { label: "Full-Stack", icon: Layers3 },
  { label: "Shopify", icon: ShoppingBag },
  { label: "AI", icon: Sparkles },
  { label: "Developer Tools", icon: Code2 },
];

export default function ShowcaseHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-24 lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-green-500/15 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 bottom-0 h-[32rem] w-[32rem] rounded-full bg-emerald-400/10 blur-3xl" />

      <Container>
        <div className="relative grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-sm font-bold text-green-300">
              <Sparkles className="h-4 w-4" />
              Full-Stack Portfolio
            </span>

            <h1 className="mt-7 max-w-4xl text-4xl font-black tracking-tight sm:text-5xl lg:text-7xl">
              Real projects.
              <span className="block text-green-400">Real engineering.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Explore production-oriented web apps, SaaS products, Shopify
              systems, AI applications, and developer tools built by GeekyAce
              Digital Hub.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="/contact" size="lg">Start a Project</Button>
              <a href="#projects" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-bold text-white hover:bg-white/10">
                Browse Projects <ArrowRight size={17} />
              </a>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-300">Portfolio snapshot</p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-3xl font-black text-white sm:text-4xl">{stat.number}</p>
                  <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <span key={category.label} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-300">
                    <Icon size={14} className="text-green-400" /> {category.label}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}