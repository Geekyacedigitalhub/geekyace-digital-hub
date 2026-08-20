"use client";

import { useMemo, useState } from "react";

import Container from "../ui/Container";
import ProjectCard from "./ProjectCard";
import ShowcaseFilters from "./ShowcaseFilters";

import {
  projects,
  categories,
  industries,
  services,
} from "@/app/data/projects";

export default function FeaturedProjects() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [industry, setIndustry] = useState("");
  const [service, setService] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const searchTerm = search.toLowerCase();

      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm) ||
        project.shortDescription.toLowerCase().includes(searchTerm);

      const matchesCategory =
        !category || project.category === category;

      const matchesIndustry =
        !industry || project.industry === industry;

      const matchesService =
        !service || project.service === service;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesIndustry &&
        matchesService
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
    <section className="py-20 lg:py-28">
      <Container>
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            Digital Showcase
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-gray-900">
            Browse Our Digital Solutions
          </h2>

          <p className="mt-6 text-xl leading-9 text-gray-600">
            Discover concept projects across websites,
            mobile applications, AI, automation,
            branding and creative solutions.
          </p>
        </div>

        {/* Filters */}
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

        {/* Results Count */}
        <div className="mb-10 flex items-center justify-between">
          <h3 className="text-2xl font-bold text-gray-900">
            {filteredProjects.length} Showcase Item
            {filteredProjects.length !== 1 && "s"} Found
          </h3>
        </div>

        {/* Projects */}
        {filteredProjects.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-gray-300 bg-white py-24 text-center">
            <h3 className="text-3xl font-bold text-gray-900">
              No projects found
            </h3>

            <p className="mt-4 text-gray-600">
              Try changing your search or filters.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                priority={index < 3}
              />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
