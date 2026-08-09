"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import Container from "../ui/Container";

import { industries } from "@/app/data/industries";

export default function IndustryGrid() {
  return (
    <section className="bg-white py-20 md:py-24">
      <Container>
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            Industries We Serve
          </span>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Digital Solutions for Different Industries
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 md:text-xl">
            We build practical digital solutions around the unique needs,
            challenges, and goals of businesses across different industries.
          </p>
        </div>

        {/* Industry Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {industries.map((industry) => (
            <Link
              key={industry.id}
              href={`/solutions/${industry.slug}`}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-500 hover:bg-white hover:shadow-xl"
            >
              {/* Decorative Background */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-green-100/60 transition-transform duration-500 group-hover:scale-150" />

              {/* Icon */}
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-4xl shadow-sm ring-1 ring-slate-200 transition-all duration-300 group-hover:bg-green-100 group-hover:ring-green-200">
                {industry.icon}
              </div>

              {/* Content */}
              <div className="relative flex flex-1 flex-col">
                <h3 className="mt-7 text-2xl font-bold text-slate-900">
                  {industry.name}
                </h3>

                <p className="mt-4 flex-1 leading-8 text-slate-600">
                  {industry.description}
                </p>

                {/* Benefit Indicator */}
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-slate-500">
                  <CheckCircle2
                    size={17}
                    className="text-green-600"
                    aria-hidden="true"
                  />
                  Tailored digital solutions
                </div>

                {/* CTA */}
                <div className="mt-8 inline-flex items-center gap-2 font-semibold text-green-600 transition-all duration-300 group-hover:gap-3">
                  Explore Solutions
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="mx-auto mt-16 max-w-3xl text-center">
          <p className="text-lg leading-8 text-slate-600">
            Don't see your industry? We can still build a solution around
            your specific business model and requirements.
          </p>

          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 font-semibold text-green-600 transition hover:gap-3 hover:text-green-700"
          >
            Discuss Your Project
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}