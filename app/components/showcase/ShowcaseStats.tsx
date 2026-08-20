"use client";

import {
  BriefcaseBusiness,
  Building2,
  Layers3,
  Trophy,
} from "lucide-react";

import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { projects, categories, industries } from "@/app/data/projects";

const stats = [
  {
    icon: BriefcaseBusiness,
    value: String(projects.length),
    label: "Capability Concepts",
    description:
      "Websites, AI solutions, automation systems, mobile apps, and digital products.",
  },
  {
    icon: Building2,
    value: String(industries.length),
    label: "Industry Scenarios",
    description:
      "Experience delivering solutions across multiple business sectors.",
  },
  {
    icon: Layers3,
    value: String(categories.length),
    label: "Capability Categories",
    description:
      "Modern frameworks, cloud platforms, databases, AI, and development tools.",
  },
  {
    icon: Trophy,
    value: "100%",
    label: "Commitment",
    description:
      "Focused on quality, innovation, performance, and long-term client success.",
  },
];

export default function ShowcaseStats() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24">
      <Container>
        <SectionHeading
          title="Our Capabilities"
          description="A transparent view of the scenarios we can solve. Items are labeled as concepts or verified work so buyers can judge them accurately."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="group rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-xl"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-700 transition-transform duration-300 group-hover:scale-110">
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-5xl font-extrabold text-green-600">
                  {stat.value}
                </h3>

                <h4 className="mt-4 text-xl font-bold text-slate-900">
                  {stat.label}
                </h4>

                <p className="mt-4 leading-7 text-slate-600">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
