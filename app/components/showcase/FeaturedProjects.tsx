"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Container from "../ui/Container";
import ProjectCard from "./ProjectCard";
import ChipPills from "./ChipPills";
import { projects, categories, industries, services } from "@/app/data/projects";

export default function FeaturedProjects() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [industry, setIndustry] = useState("");
  const [service, setService] = useState("");

  const filteredProjects = useMemo(() => {
    const term = search.trim().toLowerCase();
    return projects.filter((p) => {
      const haystack = [p.title, p.category, p.industry, p.service, p.shortDescription, ...p.technologies].join(" ").toLowerCase();
      return (!term || haystack.includes(term)) &&
        (!category || p.category === category) &&
        (!industry || p.industry === industry) &&
        (!service || p.service === service);
    });
  }, [search, category, industry, service]);

  function reset() { setSearch(""); setCategory(""); setIndustry(""); setService(""); }

  return (
    <section id="projects" className="scroll-mt-24 bg-white py-20 lg:py-28">
      <Container>
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-green-700">Project index</span>
          <h2 className="mt-4 font-serif text-4xl font-black italic tracking-tight text-slate-950 sm:text-5xl">
            Explore the work
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Filter by discipline, industry, or service to narrow the index. Click any project for its case study.
          </p>
        </div>

        <section aria-label="Project filters" className="mb-10 border-y border-slate-900/10 py-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto]">
            <div>
              <label htmlFor="q" className="block text-[10px] font-bold uppercase tracking-[0.24em] text-slate-500">Search</label>
              <input
                id="q"
                type="search"
                placeholder="Search projects, technologies…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="mt-2 w-full border-0 border-b border-slate-900/20 bg-transparent py-2 text-base font-medium text-slate-900 placeholder:text-slate-400 focus:border-green-600 focus:outline-none"
              />
            </div>
            <button onClick={reset} className="self-end rounded-sm border border-slate-900/20 px-4 py-2 text-xs font-bold uppercase tracking-widest text-slate-600 transition hover:border-slate-900 hover:text-slate-900">
              Reset
            </button>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <ChipPills label="Discipline" options={categories} value={category} onChange={setCategory} allLabel="All" />
            <ChipPills label="Industry"  options={industries}  value={industry}  onChange={setIndustry} allLabel="All" />
            <ChipPills label="Service"   options={services}    value={service}   onChange={setService} allLabel="All" />
          </div>
        </section>

        <div className="mb-8 flex items-baseline justify-between border-b border-slate-900/10 pb-3 text-xs font-medium uppercase tracking-widest text-slate-500">
          <span>Showing <span className="font-bold text-slate-950">{filteredProjects.length}</span> project{filteredProjects.length === 1 ? "" : "s"}</span>
          <span>GeekyAce Digital Hub · 2021–2026</span>
        </div>

        {filteredProjects.length === 0 ? (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="border border-slate-900/10 bg-slate-50 py-24 text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-slate-500">No results</p>
            <h3 className="mt-4 font-serif text-3xl font-black italic text-slate-950">Nothing matches that — yet.</h3>
            <p className="mt-3 text-slate-600">Try another keyword, clear a filter, or reset everything.</p>
            <button onClick={reset} className="mt-6 inline-flex items-center gap-2 rounded-sm bg-slate-950 px-6 py-3 text-sm font-bold text-white hover:bg-green-700">
              Reset filters
            </button>
          </motion.div>
        ) : (
          <div className="grid gap-x-10 gap-y-16 border-t border-slate-900/10 pt-10 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} priority={index < 3} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
