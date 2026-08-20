import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Layers3,
} from "lucide-react";

import { Project } from "@/app/types/project";
import ProjectImage from "./ProjectImage";
import { isVerifiedProject } from "@/app/lib/projectProof";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export default function ProjectCard({
  project,
  priority = false,
}: ProjectCardProps) {
  const isVerified = isVerifiedProject(project);
  const technologies = project.technologies.slice(0, 4);
  const remainingTechnologies =
    project.technologies.length - technologies.length;

  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-2xl">
      {/* Image */}
      <Link
        href={`/showcase/${project.slug}`}
        className="block"
        aria-label={`View ${project.title} ${isVerified ? "case study" : "capability concept"}`}
      >
        <div className="relative h-64 overflow-hidden bg-slate-100 sm:h-72">
          <ProjectImage
            src={project.image}
            alt={project.title}
            priority={priority}
          />

          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />

          <div className="absolute left-5 top-5">
            <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-slate-800 shadow-sm backdrop-blur">
              {project.category}
            </span>
          </div>
          <div className="absolute right-5 top-5">
            <span className={`rounded-full px-3 py-2 text-[0.65rem] font-black uppercase tracking-[0.12em] shadow-sm backdrop-blur ${isVerified ? "bg-green-500 text-white" : "border border-white/30 bg-slate-950/80 text-slate-100"}`}>
              {isVerified ? "Verified work" : "Capability concept"}
            </span>
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="p-7 sm:p-8">
        {/* Industry & Service */}
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
            {project.industry}
          </span>

          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
            {project.service}
          </span>
        </div>

        {/* Title */}
        <Link href={`/showcase/${project.slug}`}>
          <h3 className="mt-6 text-2xl font-bold text-slate-900 transition-colors duration-200 group-hover:text-green-700">
            {project.title}
          </h3>
        </Link>

        {/* Description */}
        <p className="mt-4 leading-8 text-slate-600">
          {project.shortDescription}
        </p>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700"
            >
              {tech}
            </span>
          ))}

          {remainingTechnologies > 0 && (
            <span className="rounded-lg bg-green-50 px-3 py-2 text-sm font-semibold text-green-700">
              +{remainingTechnologies}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="mt-8 flex items-end justify-between gap-4 border-t border-slate-100 pt-6">
          <div className="space-y-2 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <Calendar
                size={16}
                className="text-green-600"
                aria-hidden="true"
              />
              <span>{project.year}</span>
            </div>

            <div className="flex items-center gap-2">
              <Layers3
                size={16}
                className="text-green-600"
                aria-hidden="true"
              />
              <span>{project.duration}</span>
            </div>
          </div>

          <Link
            href={`/showcase/${project.slug}`}
            className="inline-flex shrink-0 items-center gap-2 font-semibold text-green-600 transition-all duration-300 hover:gap-3 hover:text-green-700"
          >
            <span className="hidden sm:inline">
              {isVerified ? "View Case Study" : "Explore Concept"}
            </span>

            <span className="sm:hidden">
              View
            </span>

            <ArrowRight
              size={18}
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}
