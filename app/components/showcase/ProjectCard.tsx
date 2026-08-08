import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Layers3,
} from "lucide-react";

import { Project } from "@/app/types/project";
import ProjectImage from "./ProjectImage";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export default function ProjectCard({
  project,
  priority = false,
}: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
        <ProjectImage
          src={project.image}
          alt={project.title}
          priority={priority}
        />

        <div className="absolute left-5 top-5">
          <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-gray-800 backdrop-blur">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        {/* Industry & Service */}
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
            {project.industry}
          </span>

          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
            {project.service}
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-6 text-2xl font-bold text-gray-900 transition group-hover:text-green-700">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-4 leading-8 text-gray-600">
          {project.shortDescription}
        </p>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium text-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-6">
          <div className="space-y-2 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{project.year}</span>
            </div>

            <div className="flex items-center gap-2">
              <Layers3 size={16} />
              <span>{project.duration}</span>
            </div>
          </div>

          <Link
            href={`/showcase/${project.slug}`}
            className="inline-flex items-center gap-2 font-semibold text-green-600 transition-all duration-300 hover:gap-3 hover:text-green-700"
          >
            View Case Study
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </article>
  );
}