"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: (index % 12) * 0.04, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <Link href={`/showcase/${project.slug}`} className="block">
        <div className="group/img relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-slate-100 ring-1 ring-slate-200 transition duration-500 group-hover:ring-slate-900">
          <div className="absolute inset-0 transition duration-700 group-hover/img:scale-[1.03]">
            <ProjectImage src={project.image} alt={project.title} priority={priority} />
          </div>
          <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4">
            <span className="rounded-sm bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-900">{project.category}</span>
            <span className="font-mono text-[10px] text-white/80 mix-blend-difference">{num}</span>
          </div>
        </div>
      </Link>

      <div className="pt-5">
        <div className="flex items-baseline justify-between gap-4 border-b border-slate-900/10 pb-3">
          <h3 className="truncate font-serif text-[22px] font-normal italic tracking-tight text-slate-950 transition-colors group-hover:text-green-700">
            {project.title}
          </h3>
          <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">{project.year}</span>
        </div>

        <p className="mt-3 line-clamp-2 text-[13px] leading-6 text-slate-600">{project.shortDescription}</p>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1.5">
            {technologies.slice(0, 3).map((t) => (
              <span key={t} className="text-[10px] font-medium uppercase tracking-wider text-slate-500">{t}{t !== technologies[Math.min(2,technologies.length-1)] && <span className="mx-1 text-slate-300">·</span>}</span>
            ))}
            {remaining > 0 && <span className="text-[10px] font-semibold uppercase tracking-wider text-green-700">+{remaining}</span>}
          </div>
          <Link href={`/showcase/${project.slug}`} className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-900 transition group-hover:gap-2 group-hover:text-green-700">
            View <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
