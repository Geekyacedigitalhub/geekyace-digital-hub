import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import CountUp from "@/app/components/ui/CountUp";

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
        <span className="gradient-text-animated block">
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
          className="btn-glass glass-shine inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-[0_12px_32px_-8px_rgba(34,197,94,0.55)] transition hover:-translate-y-0.5 hover:bg-green-400 hover:shadow-[0_20px_48px_-12px_rgba(34,197,94,0.7)]"
        >
          Start a Project
          <ArrowRight className="h-4 w-4" />
        </Link>

        <Link
          href="/portfolio"
          className="glass-dark glass-shine inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-green-400/40 hover:bg-white/10"
        >
          Explore My Portfolio
        </Link>

        <a
          href="https://github.com/Geekyacedigitalhub"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-dark glass-shine inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-5 py-3.5 text-sm font-bold text-slate-200 transition hover:-translate-y-0.5 hover:border-slate-400/40 hover:bg-white/10"
        >
          <FaGithub className="h-4 w-4" />
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

      <div className="mt-12 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/10 pt-7">
        <div className="glass-dark group relative overflow-hidden rounded-2xl px-4 py-3 transition hover:-translate-y-1 hover:border-green-400/30">
          <div aria-hidden="true" className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-green-400/10 blur-xl transition-opacity group-hover:opacity-100 opacity-60" />
          <p className="text-2xl font-extrabold text-white sm:text-3xl">
            <CountUp end={10} suffix="+" />
          </p>
          <p className="mt-1 text-xs text-slate-400 sm:text-sm">Shipped products</p>
        </div>
        <div className="glass-dark group relative overflow-hidden rounded-2xl px-4 py-3 transition hover:-translate-y-1 hover:border-green-400/30">
          <div aria-hidden="true" className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-emerald-400/10 blur-xl opacity-60" />
          <p className="text-2xl font-extrabold text-white sm:text-3xl">
            <CountUp end={6} suffix="+" />
          </p>
          <p className="mt-1 text-xs text-slate-400 sm:text-sm">Solution areas</p>
        </div>
        <div className="glass-dark group relative overflow-hidden rounded-2xl px-4 py-3 transition hover:-translate-y-1 hover:border-green-400/30">
          <div aria-hidden="true" className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-teal-400/10 blur-xl opacity-60" />
          <p className="text-2xl font-extrabold text-white sm:text-3xl">
            <CountUp end={99} suffix="%" />
          </p>
          <p className="mt-1 text-xs text-slate-400 sm:text-sm">Client satisfaction</p>
        </div>
      </div>
    </div>
  );
}
