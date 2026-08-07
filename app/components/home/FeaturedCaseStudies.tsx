"use client";

import Link from "next/link";

import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../showcase/ProjectCard";

import { getFeaturedProjects } from "@/app/data/projects";

export default function FeaturedCaseStudies() {
  const featuredProjects = getFeaturedProjects(3);

  return (
    <section className="bg-white py-24">
      <Container>
        <SectionHeading
          badge="FEATURED CASE STUDIES"
          title="See the Digital Experiences We Build"
          description="Explore a selection of websites, mobile applications, AI solutions, and business automation projects that help businesses grow."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/showcase"
            className="inline-flex rounded-xl bg-green-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-xl"
          >
            View All Case Studies
          </Link>
        </div>
      </Container>
    </section>
  );
}