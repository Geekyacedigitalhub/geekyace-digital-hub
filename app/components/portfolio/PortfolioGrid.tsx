"use client";

import { projects } from "@/app/data/projects";

import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import PortfolioCard from "./PortfolioCard";

export default function PortfolioGrid() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <Container>
        <SectionHeading
          title="Featured Projects"
          description="Take a closer look at selected projects and digital solutions created to help businesses improve their online presence, operations, and customer experience."
        />

        {projects.length > 0 ? (
          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <PortfolioCard
                key={project.slug}
                slug={project.slug}
                title={project.title}
                category={project.category}
                description={project.shortDescription}
                image={project.image}
                technologies={project.technologies}
              />
            ))}
          </div>
        ) : (
          <div className="mt-14 rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
            <h3 className="text-2xl font-bold text-slate-900">
              Portfolio Coming Soon
            </h3>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-600">
              We are currently preparing our project portfolio. Check back
              soon to explore our latest digital solutions and creative work.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}