import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import Container from "../ui/Container";

export default function CTA() {
  return (
    <section className="section-ambient relative overflow-hidden bg-slate-950 py-20 sm:py-24 lg:py-28">
      {/* Animated glass blobs */}
      <div
        className="glass-blob animate-blob pointer-events-none -left-32 -top-32 h-96 w-96 bg-green-500/30"
        aria-hidden="true"
      />

      <div
        className="glass-blob animate-float-slow pointer-events-none -bottom-32 -right-32 h-96 w-96 bg-emerald-500/25"
        aria-hidden="true"
      />

      <div
        className="glass-blob animate-float-reverse pointer-events-none left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 bg-teal-400/15"
        aria-hidden="true"
      />

      <Container>
        <div className="relative z-10">
          <div className="glass-dark glass-shine relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] px-6 py-14 text-center shadow-[0_30px_80px_-20px_rgba(22,163,74,0.35)] sm:px-12 lg:px-16 lg:py-20">
            {/* Glossy highlight */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/[0.08] to-transparent" />

            <div className="relative">
              {/* Label */}
              <span className="inline-flex items-center gap-2 rounded-full border border-green-400/25 bg-green-400/10 px-4 py-2 text-sm font-semibold text-green-300 backdrop-blur">
                <Sparkles size={14} /> Let&apos;s Build Something Great
              </span>

              {/* Heading */}
              <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Ready to Turn Your Idea Into{" "}
                <span className="gradient-text-animated">Reality?</span>
              </h2>

              {/* Description */}
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                Whether you need a website, AI solution, mobile application,
                automation system, branding, or another digital product,
                Geekyace Digital Hub is ready to help you build it.
              </p>

              {/* Buttons */}
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="btn-glass glass-shine inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 px-7 py-4 font-bold text-slate-950 shadow-[0_12px_40px_-10px_rgba(34,197,94,0.7)] transition-all duration-300 hover:-translate-y-1 hover:bg-green-400 hover:shadow-[0_20px_60px_-10px_rgba(34,197,94,0.8)]"
                >
                  Start Your Project
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>

                <Link
                  href="/portfolio"
                  className="glass-dark glass-shine inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-7 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:border-green-400/40 hover:bg-white/10"
                >
                  Explore Our Work
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
