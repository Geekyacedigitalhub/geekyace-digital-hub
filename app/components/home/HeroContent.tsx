import Link from "next/link";
import { ArrowRight, CheckCircle2, Github, Sparkles } from "lucide-react";

const trustPoints = [
  "Full-stack web applications",
  "Shopify & e-commerce systems",
  "AI-powered products",
  "Automation & integrations",
];

export default function HeroContent() {
  return (
    <div className="relative z-10">
      <div className="inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-sm font-semibold text-green-300">
        <Sparkles className="h-4 w-4" />
        Full-Stack Development • AI • Shopify
      </div>

      <h1 className="mt-7 max-w-4xl text-4xl font-extrabold leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
        I build
        <span className="block bg-gradient-to-r from-green-300 via-emerald-400 to-green-500 bg-clip-text text-transparent">
          digital products
        </span>
        that solve real problems.
      </h1>

      <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
        GeekyAce Digital Hub designs and develops production-ready websites,
        SaaS platforms, Shopify systems, AI applications, and business
        automation with modern full-stack technologies.
      </p>

      <div className="mt-9 flex flex-wrap gap-4">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-green-500/20 transition hover:-translate-y-0.5 hover:bg-green-400"
        >
          Start a Project
          <ArrowRight className="h-4 w-4" />
        </Link>

        <Link
          href="/showcase"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:border-green-400/40 hover:bg-white/10"
        >
          Explore My Work
        </Link>

        <a
          href="https://github.com/Geekyacedigitalhub"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-white/5 px-5 py-3.5 text-sm font-bold text-slate-200 transition hover:border-slate-500 hover:bg-white/10"
        >
          <Github className="h-4 w-4" />
          GitHub
        </a>
      </div>

      <div className="mt-10 grid max-w-2xl gap-x-8 gap-y-4 sm:grid-cols-2">
        {trustPoints.map((point) => (
          <div key={point} className="flex items-center gap-3 text-sm text-slate-300">
            <CheckCircle2 className="h-5 w-5 shrink-0 text-green-400" />
            {point}
          </div>
        ))}
      </div>

      <div className="mt-12 grid max-w-2xl grid-cols-3 gap-4 border-t border-slate-800 pt-7">
        <div>
          <p className="text-2xl font-extrabold text-white sm:text-3xl">10+</p>
          <p className="mt-1 text-xs text-slate-400 sm:text-sm">Showcase projects</p>
        </div>
        <div>
          <p className="text-2xl font-extrabold text-white sm:text-3xl">6+</p>
          <p className="mt-1 text-xs text-slate-400 sm:text-sm">Core solution areas</p>
        </div>
        <div>
          <p className="text-2xl font-extrabold text-white sm:text-3xl">Modern</p>
          <p className="mt-1 text-xs text-slate-400 sm:text-sm">Full-stack stack</p>
        </div>
      </div>
    </div>
  );
}