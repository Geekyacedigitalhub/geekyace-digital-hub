"use client";

import Link from "next/link";
import { ArrowRight, CalendarDays, Layers3, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";

import { Project } from "@/app/types/project";
import ProjectImage from "./ProjectImage";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
  index?: number;
}

export default function ProjectCard({ project, priority = false, index = 0 }: ProjectCardProps) {
  const technologies = project.technologies.slice(0, 5);
  const remaining = project.technologies.length - technologies.length;
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: (index % 9) * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <Link href={`/showcase/${project.slug}`} className="block">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200/60 transition duration-500 group-hover:shadow-[0_30px_60px_-25px_rgba(15,23,42,0.25)] group-hover:ring-green-400/40">
          <ProjectImage src={project.image} alt={project.title} priority={priority} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent" />
          <div className="absolute left-4 top-4 flex gap-2">
            <span className="rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-900 shadow-sm backdrop-blur">{project.category}</span>
          </div>
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/80">{project.industry} · {project.service}</span>
            <span className="font-mono text-xs text-white/60">{num}</span>
          </div>
        </div>
      </Link>

      <div className="pt-6">
        <div className="flex items-start justify-between gap-6">
          <div className="min-w-0 flex-1">
            <h3 className="truncate text-xl font-bold tracking-tight text-slate-950 transition-colors group-hover:text-green-700 sm:text-2xl">
              {project.title}
            </h3>
            <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">{project.shortDescription}</p>
          </div>
          <ArrowRight className="mt-1 h-5 w-5 shrink-0 translate-x-0 text-slate-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-green-600" />
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {technologies.map((t) => (
            <span key={t} className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-[11px] font-semibold text-slate-600">{t}</span>
          ))}
          {remaining > 0 && <span className="rounded-md bg-green-50 px-2 py-0.5 text-[11px] font-bold text-green-700">+{remaining}</span>}
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-500">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5"><CalendarDays size={13} className="text-green-600" />{project.year}</span>
            <span className="inline-flex items-center gap-1.5"><Layers3 size={13} className="text-green-600" />{project.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`${project.title} on GitHub`} className="rounded-md p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-900" onClick={(e) => e.stopPropagation()}>
                <FaGithub size={14} />
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} live`} className="rounded-md p-1.5 text-slate-500 hover:bg-green-50 hover:text-green-700" onClick={(e) => e.stopPropagation()}>
                <ExternalLink size={14} />
              </a>
            )}
            <Link href={`/showcase/${project.slug}`} className="ml-1 inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-widest text-green-700 hover:text-green-900">
              Case study
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
