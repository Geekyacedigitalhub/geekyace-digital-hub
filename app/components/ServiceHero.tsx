import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
    <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28">
      {/* Background Effects */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-green-200/30 blur-3xl"
        aria-hidden="true"
      />

      <Container>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          {/* Eyebrow */}
          <span className="inline-flex rounded-full border border-green-200 bg-green-100 px-5 py-2 text-sm font-bold text-green-700">
            {eyebrow}
          </span>

          {/* Title */}
          <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="mx-auto mt-5 max-w-3xl text-xl font-semibold leading-8 text-green-600 sm:text-2xl">
              {subtitle}
            </p>
          )}

          {/* Description */}
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9">
            {description}
          </p>

          {/* Actions */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-7 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-xl"
            >
              Start Your Project

              <ArrowRight
                size={18}
                aria-hidden="true"
              />
            </Link>

            <Link
              href="/showcase"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-4 font-bold text-slate-800 transition-all duration-300 hover:-translate-y-1 hover:border-green-500 hover:text-green-600 hover:shadow-lg"
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