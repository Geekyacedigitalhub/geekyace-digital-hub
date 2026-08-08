import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Container from "@/app/components/ui/Container";
import ProjectCard from "@/app/components/showcase/ProjectCard";

import { getFeaturedProjects } from "@/app/data/projects";

export default function FeaturedCaseStudies() {
  const featuredProjects = getFeaturedProjects(3);

  return (
    <section className="bg-slate-50 py-24 sm:py-28">
      <Container>
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-700">
            Featured Work
          </span>

          <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Projects Built to Solve Real Business Problems
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            Explore selected digital projects created by Geekyace Digital Hub
            across websites, applications, AI solutions, and business systems.
          </p>
        </div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 ? (
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>
        ) : (
          <div className="mt-16 rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
            <h3 className="text-xl font-bold text-slate-900">
              Projects Coming Soon
            </h3>

            <p className="mx-auto mt-3 max-w-xl text-slate-600">
              We're preparing our featured case studies. Check back soon to
              explore our latest work.
            </p>
          </div>
        )}

        {/* View All */}
        <div className="mt-14 flex justify-center">
          <Link
            href="/showcase"
            className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-700 hover:shadow-lg"
          >
            View All Case Studies
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}