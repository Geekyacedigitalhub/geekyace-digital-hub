"use client";

import { projects } from "@/app/data/projects";

import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import PortfolioCard from "./PortfolioCard";

export default function PortfolioGrid() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <SectionHeading
          badge="OUR WORK"
          title="Explore Our Portfolio"
          description="Browse a collection of digital solutions we've designed and developed across websites, AI, mobile applications, automation, branding, and more."
        />

        <div className="mt-16 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
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
      </Container>
    </section>
  );
}