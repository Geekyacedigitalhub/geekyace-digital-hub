"use client";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { confettiBurst } from "@/app/components/ui/Confetti";

export default function CTA() {
  return (
    <section className="section-ambient relative bg-slate-950 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/40 px-6 py-16 text-center shadow-[0_30px_80px_-20px_rgba(22,163,74,0.35)] backdrop-blur-2xl backdrop-saturate-150 sm:px-12 lg:px-20">
          {/* glossy top highlight */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/[0.08] to-transparent" />
          {/* Animated blobs */}
          <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 animate-blob rounded-full bg-green-500/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -right-24 h-72 w-72 animate-float-slow rounded-full bg-emerald-500/20 blur-3xl" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 animate-float-reverse -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-400/15 blur-3xl" />

          <div className="relative">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-sm font-semibold text-green-300">
              <MessageCircle className="h-4 w-4" />
              Let's Build Something Great
            </span>

            {/* Heading */}
            <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Ready to Turn Your Idea Into a{" "}
              <span className="text-green-400">Digital Solution?</span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Whether you need a modern website, AI-powered solution, mobile
              application, or business automation system, Geekyace Digital Hub
              can help you build it.
            </p>

            {/* Benefits */}
            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3">
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                Custom Solutions
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                Modern Technology
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                Business-Focused
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                onClick={() => confettiBurst()}
                className="btn-glass glass-shine inline-flex items-center gap-2 rounded-xl bg-green-500 px-7 py-3.5 font-bold text-slate-950 shadow-[0_12px_40px_-10px_rgba(34,197,94,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-400 hover:shadow-[0_20px_60px_-10px_rgba(34,197,94,0.8)]"
              >
                Start Your Project
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href="/portfolio"
                className="glass-dark glass-shine inline-flex items-center gap-2 rounded-xl border border-white/15 px-7 py-3.5 font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-green-400/50 hover:bg-white/10"
              >
                Explore Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}