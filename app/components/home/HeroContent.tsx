import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  WandSparkles,
} from "lucide-react";

export default function HeroContent() {
  return (
    <div className="relative z-10">
      {/* Badge */}
      <div className="inline-flex items-center gap-3 rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-green-300 backdrop-blur-sm">
        <span className="pulse-dot h-2 w-2 rounded-full bg-green-400 text-green-400" />
        Five expert studios · One accountable team
      </div>

      {/* Heading */}
      <h1 className="text-balance mt-7 max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl xl:text-[4.8rem]">
        One expert team for your
        <span className="block bg-gradient-to-r from-green-300 via-green-400 to-emerald-500 bg-clip-text text-transparent">
          next digital move.
        </span>
      </h1>

      {/* Description */}
      <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
        GeekyAce assembles the right mix of strategy, creative, technology,
        growth, video, and operational expertise around one clear business
        outcome.
      </p>

      {/* CTA Buttons */}
      <div className="mt-9 flex flex-wrap gap-4">
        <Link
          href="/project-planner"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-7 py-4 text-sm font-black text-slate-950 shadow-lg shadow-green-500/20 transition-all duration-200 hover:-translate-y-1 hover:bg-green-400 hover:shadow-xl hover:shadow-green-500/25"
        >
          Build My Expert Squad
          <ArrowRight className="h-4 w-4" />
        </Link>

        <Link
          href="/showcase"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-black text-white backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:border-green-400/40 hover:bg-white/10"
        >
          <WandSparkles className="h-4 w-4" />
          Explore Our Capabilities
        </Link>
      </div>

      {/* Trust features */}
      <div className="mt-10 grid max-w-2xl gap-x-8 gap-y-4 border-t border-white/10 pt-8 sm:grid-cols-2">
        <div className="flex items-center gap-3 text-sm text-slate-300">
          <CheckCircle2 className="h-5 w-5 shrink-0 text-green-400" />
          A squad shaped around your brief
        </div>

        <div className="flex items-center gap-3 text-sm text-slate-300">
          <CheckCircle2 className="h-5 w-5 shrink-0 text-green-400" />
          Clear milestones and ownership
        </div>

        <div className="flex items-center gap-3 text-sm text-slate-300">
          <CheckCircle2 className="h-5 w-5 shrink-0 text-green-400" />
          Cross-discipline delivery
        </div>

        <div className="flex items-center gap-3 text-sm text-slate-300">
          <CheckCircle2 className="h-5 w-5 shrink-0 text-green-400" />
          Support beyond handover
        </div>
      </div>

      {/* Stats */}
      <div className="mt-10 flex flex-wrap gap-x-10 gap-y-6">
        <div>
          <p className="text-2xl font-extrabold text-white sm:text-3xl">
            Multi-skill
          </p>
          <p className="mt-1 text-sm text-slate-400">
            One integrated team
          </p>
        </div>

        <div>
          <p className="text-2xl font-extrabold text-white sm:text-3xl">
            End-to-end
          </p>
          <p className="mt-1 text-sm text-slate-400">
            From strategy to launch
          </p>
        </div>

        <div>
          <p className="text-2xl font-extrabold text-white sm:text-3xl">
            Built to last
          </p>
          <p className="mt-1 text-sm text-slate-400">
            Support beyond delivery
          </p>
        </div>
      </div>
    </div>
  );
}
