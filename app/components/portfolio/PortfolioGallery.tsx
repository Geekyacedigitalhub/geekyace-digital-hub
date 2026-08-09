"use client";

import Image from "next/image";
import Link from "next/link";

import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { projects } from "@/app/data/projects";

export default function PortfolioGallery() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          title="Explore Our Digital Showcase"
          description="Browse a selection of websites, mobile applications, AI solutions, business automation, branding, and creative digital experiences."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/showcase/${project.slug}`}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-400 hover:shadow-2xl"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden bg-slate-100 sm:h-72">
                <Image
                  src={project.image}
                  alt={`${project.title} project preview`}
                  fill
                  quality={80}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Category */}
                <div className="absolute left-5 top-5">
                  <span className="rounded-full border border-white/40 bg-white/90 px-4 py-2 text-xs font-bold text-slate-800 shadow-sm backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                {/* View Project */}
                <div className="absolute bottom-5 right-5 translate-y-3 rounded-full bg-green-600 px-4 py-2 text-sm font-bold text-white opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  View Project →
                </div>
              </div>

              {/* Project Content */}
              <div className="p-7 sm:p-8">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-700">
                    {project.industry}
                  </span>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
                    {project.service}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-green-600">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {project.shortDescription}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Details */}
                <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-6">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-slate-500">
                      {project.year}
                    </p>

                    <p className="text-sm font-medium text-slate-500">
                      {project.duration}
                    </p>
                  </div>

                  <span className="font-semibold text-green-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-green-700">
                    Case Study →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}