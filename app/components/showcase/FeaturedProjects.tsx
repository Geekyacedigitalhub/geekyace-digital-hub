"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Container from "../ui/Container";
import ProjectCard from "./ProjectCard";
import ShowcaseFilters from "./ShowcaseFilters";
import { projects, categories, industries, services } from "@/app/data/projects";

export default function FeaturedProjects() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [industry, setIndustry] = useState("");
  const [service, setService] = useState("");

  const filteredProjects = useMemo(() => {
    const searchTerm = search.trim().toLowerCase();
    return projects.filter((project) => {
      const haystack = [
        project.title,
        project.category,
        project.industry,
        project.service,
        project.shortDescription,
        ...project.technologies,
      ].join(" ").toLowerCase();

      return (
        (!searchTerm || haystack.includes(searchTerm)) &&
        (!category || project.category === category) &&
        (!industry || project.industry === industry) &&
        (!service || project.service === service)
      );
    });
  }, [search, category, industry, service]);

  function resetFilters() {
    setSearch("");
    setCategory("");
    setIndustry("");
    setService("");
  }

  return (
    <section id="projects" className="scroll-mt-24 py-20 lg:py-28">
      <Container>
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            Project Library
          </span>
          <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Explore the Work
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Search by product type, industry, service, or technology to see
            how the portfolio is structured.
          </p>
        </div>

        <ShowcaseFilters
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          industry={industry}
          setIndustry={setIndustry}
          service={service}
          setService={setService}
          categories={categories}
          industries={industries}
          services={services}
          onReset={resetFilters}
        />

        <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm font-semibold text-slate-600">
            Showing <span className="text-slate-950">{filteredProjects.length}</span> project{filteredProjects.length === 1 ? "" : "s"}
          </p>
          <p className="text-xs text-slate-500">
            Public repositories link to GitHub; private work is shown as a case study.
          </p>
        </div>

        {filteredProjects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="glass-card rounded-3xl py-24 text-center"
          >
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-600">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">No matching projects — yet</h3>
            <p className="mt-3 text-slate-600 dark:text-slate-400">Try another keyword, clear a filter, or reset everything.</p>
            <button
              type="button"
              onClick={resetFilters}
              className="btn-glass glass-shine mt-6 inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3 text-sm font-bold text-white hover:-translate-y-0.5"
            >
              Reset filters
            </button>
          </motion.div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} priority={index < 3} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}