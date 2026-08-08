import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Play,
  Sparkles,
} from "lucide-react";

export default function HeroContent() {
  return (
    <div className="relative z-10">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-sm font-semibold text-green-300">
        <Sparkles className="h-4 w-4" />
        Trusted Digital Innovation Partner
      </div>

      {/* Heading */}
      <h1 className="mt-7 max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
        Build Powerful
        <span className="block bg-gradient-to-r from-green-300 via-emerald-400 to-green-500 bg-clip-text text-transparent">
          Digital Solutions
        </span>
        For Modern Businesses
      </h1>

      {/* Description */}
      <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
        Geekyace Digital Hub helps startups, entrepreneurs, and growing
        businesses build modern websites, AI-powered solutions, mobile
        applications, and business automation systems that help them grow.
      </p>

      {/* CTA Buttons */}
      <div className="mt-9 flex flex-wrap gap-4">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-green-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-green-400 hover:shadow-xl hover:shadow-green-500/25"
        >
          Start Your Project
          <ArrowRight className="h-4 w-4" />
        </Link>

        <Link
          href="/showcase"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-200 hover:border-green-400/40 hover:bg-white/10"
        >
          <Play className="h-4 w-4 fill-current" />
          View Our Work
        </Link>
      </div>

      {/* Trust features */}
      <div className="mt-10 grid max-w-2xl gap-x-8 gap-y-4 sm:grid-cols-2">
        <div className="flex items-center gap-3 text-sm text-slate-300">
          <CheckCircle2 className="h-5 w-5 shrink-0 text-green-400" />
          Custom Software Development
        </div>

        <div className="flex items-center gap-3 text-sm text-slate-300">
          <CheckCircle2 className="h-5 w-5 shrink-0 text-green-400" />
          AI Automation Solutions
        </div>

        <div className="flex items-center gap-3 text-sm text-slate-300">
          <CheckCircle2 className="h-5 w-5 shrink-0 text-green-400" />
          Mobile App Development
        </div>

        <div className="flex items-center gap-3 text-sm text-slate-300">
          <CheckCircle2 className="h-5 w-5 shrink-0 text-green-400" />
          Ongoing Technical Support
        </div>
      </div>

      {/* Stats */}
      <div className="mt-12 flex flex-wrap gap-x-10 gap-y-6 border-t border-slate-800 pt-7">
        <div>
          <p className="text-2xl font-extrabold text-white sm:text-3xl">
            50+
          </p>
          <p className="mt-1 text-sm text-slate-400">
            Successful Projects
          </p>
        </div>

        <div>
          <p className="text-2xl font-extrabold text-white sm:text-3xl">
            10+
          </p>
          <p className="mt-1 text-sm text-slate-400">
            Industries Served
          </p>
        </div>

        <div>
          <p className="text-2xl font-extrabold text-white sm:text-3xl">
            24/7
          </p>
          <p className="mt-1 text-sm text-slate-400">
            Customer Support
          </p>
        </div>
      </div>
    </div>
  );
}