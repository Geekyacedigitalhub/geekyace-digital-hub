"use client";

import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import FadeUp from "../animations/FadeUp";

import { technologies } from "@/app/data/technologies";

export default function TechStack() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <FadeUp>
          <SectionHeading
            badge="MODERN TECHNOLOGY STACK"
            title="Built with Industry-Leading Technologies"
            description="We use trusted frameworks, cloud platforms, AI technologies, and modern development tools to build secure, scalable, and high-performance digital products."
          />
        </FadeUp>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {technologies.map((tech, index) => (
            <FadeUp
              key={tech.id}
              delay={index * 0.05}
            >
              <div className="group rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-xl">
                <h3 className="text-xl font-bold text-slate-900">
                  {tech.name}
                </h3>

                <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-green-600">
                  {tech.category}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}