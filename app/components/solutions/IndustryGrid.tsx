"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

import { industries } from "@/app/data/industries";

export default function IndustryGrid() {
  return (
    <section className="bg-white py-24">
      <Container>
        <SectionHeading
          badge="INDUSTRIES WE SERVE"
          title="Solutions Tailored to Your Industry"
          description="Every industry has unique challenges. Explore solutions designed specifically for your business sector."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {industries.map((industry) => (
            <Link
              key={industry.id}
              href={`/solutions/${industry.slug}`}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-xl"
            >
              <div className="text-5xl">
                {industry.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {industry.name}
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                {industry.description}
              </p>

              <div className="mt-8 inline-flex items-center gap-2 font-semibold text-green-600 transition-all duration-300 group-hover:gap-3">
                Explore Solutions
                <ArrowRight size={18} />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}