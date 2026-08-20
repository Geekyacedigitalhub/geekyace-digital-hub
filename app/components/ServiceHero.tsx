import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import Container from "./ui/Container";

interface ServiceHeroProps {
  title: string;
  subtitle?: string;
  description: string;
  eyebrow?: string;
}

export default function ServiceHero({
  title,
  subtitle,
  description,
  eyebrow = "Digital Solutions",
}: ServiceHeroProps) {
  return (
    <section className="premium-noise relative overflow-hidden bg-[#07110c] py-24 text-white sm:py-28 lg:py-32">
      {/* Background Effects */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500/20 blur-3xl"
        aria-hidden="true"
      />

      <Container>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          {/* Eyebrow */}
          <span className="inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/10 px-5 py-2 text-xs font-black uppercase tracking-[0.18em] text-green-300">
            <Sparkles className="h-4 w-4" />{eyebrow}
          </span>

          {/* Title */}
          <h1 className="text-balance mt-7 text-5xl font-black leading-[1.02] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="mx-auto mt-5 max-w-3xl text-xl font-bold leading-8 text-green-400 sm:text-2xl">
              {subtitle}
            </p>
          )}

          {/* Description */}
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">
            {description}
          </p>

          {/* Actions */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/project-planner"
              className="inline-flex items-center gap-2 rounded-full bg-green-500 px-7 py-4 font-black text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-green-400 hover:shadow-xl"
            >
              Plan This Project

              <ArrowRight
                size={18}
                aria-hidden="true"
              />
            </Link>

            <Link
              href="/showcase"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 font-black text-white transition-all duration-300 hover:-translate-y-1 hover:border-green-400 hover:bg-white/10 hover:text-green-300"
            >
              Explore Our Work

              <ArrowRight
                size={18}
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
