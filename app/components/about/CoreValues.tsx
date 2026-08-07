"use client";

import {
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Users,
} from "lucide-react";

import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const values = [
  {
    icon: HeartHandshake,
    title: "Integrity",
    description:
      "We build lasting relationships through honesty, transparency, and accountability in every project.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We embrace modern technologies and creative thinking to solve complex business challenges.",
  },
  {
    icon: ShieldCheck,
    title: "Quality",
    description:
      "Every solution is designed with performance, security, scalability, and long-term reliability in mind.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We work closely with our clients, treating every project as a partnership focused on shared success.",
  },
];

export default function CoreValues() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <SectionHeading
          badge="OUR CORE VALUES"
          title="The Principles That Guide Everything We Build"
          description="Our values shape how we collaborate, innovate, and deliver exceptional digital solutions for every client."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-700 transition-transform duration-300 group-hover:scale-110">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {value.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}