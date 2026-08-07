"use client";

import Link from "next/link";
import { ArrowRight, Play, Sparkles, CheckCircle2 } from "lucide-react";

export default function HeroContent() {
  return (
    <div className="flex flex-col justify-center">
      {/* Badge */}
      <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2">
        <Sparkles className="h-4 w-4 text-blue-400" />
        <span className="text-sm font-medium text-blue-400">
          Trusted Digital Innovation Partner
        </span>
      </div>

      {/* Heading */}
      <h1 className="max-w-3xl text-5xl font-extrabold leading-tight tracking-tight text-white lg:text-6xl">
        Build Powerful
        <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
          Digital Solutions
        </span>
        For Modern Businesses
      </h1>

      {/* Description */}
      <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
        Geekyace Digital Hub helps startups, entrepreneurs, and growing
        businesses create modern websites, AI-powered solutions, mobile
        applications, and business automation systems that drive measurable
        growth.
      </p>

      {/* CTA Buttons */}
      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-500"
        >
          Start Your Project
          <ArrowRight className="h-5 w-5" />
        </Link>

        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-6 py-3 font-semibold text-slate-200 transition-all duration-300 hover:border-slate-500"
        >
          <Play className="h-5 w-5" />
          View Portfolio
        </Link>
      </div>

      {/* Trust Features */}
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        <div className="flex items-center gap-3">
          <CheckCircle2 className="h-5 w-5 text-emerald-400" />
          <span className="text-slate-300">
            Custom Software Development
          </span>
        </div>

        <div className="flex items-center gap-3">
          <CheckCircle2 className="h-5 w-5 text-emerald-400" />
          <span className="text-slate-300">
            AI Automation Solutions
          </span>
        </div>

        <div className="flex items-center gap-3">
          <CheckCircle2 className="h-5 w-5 text-emerald-400" />
          <span className="text-slate-300">
            Mobile App Development
          </span>
        </div>

        <div className="flex items-center gap-3">
          <CheckCircle2 className="h-5 w-5 text-emerald-400" />
          <span className="text-slate-300">
            Ongoing Technical Support
          </span>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="mt-14 flex flex-wrap gap-10">
        <div>
          <h2 className="text-3xl font-bold text-white">50+</h2>
          <p className="text-slate-400">Successful Projects</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-white">10+</h2>
          <p className="text-slate-400">Industries Served</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-white">24/7</h2>
          <p className="text-slate-400">Customer Support</p>
        </div>
      </div>
    </div>
  );
}