import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Container from "../ui/Container";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-20 sm:py-24 lg:py-28">
      {/* Background Effects */}
      <div
        className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-green-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl"
        aria-hidden="true"
      />

      <Container>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          {/* Label */}
          <span className="inline-flex rounded-full border border-green-400/20 bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-400">
            Let's Build Something Great
          </span>

          {/* Heading */}
          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Ready to Turn Your Idea Into Reality?
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
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-7 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-xl"
            >
              Start Your Project
              <ArrowRight size={18} aria-hidden="true" />
            </Link>

            <Link
              href="/showcase"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-600 bg-slate-800 px-7 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:border-green-500 hover:bg-slate-700"
            >
              Explore Our Work
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}