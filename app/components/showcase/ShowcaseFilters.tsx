"use client";

import { Search, RotateCcw } from "lucide-react";

interface ShowcaseFiltersProps {
  search: string;
  setSearch: (value: string) => void;

  category: string;
  setCategory: (value: string) => void;

  industry: string;
  setIndustry: (value: string) => void;

  service: string;
  setService: (value: string) => void;

  categories: string[];
  industries: string[];
  services: string[];

  onReset: () => void;
}

export default function ShowcaseFilters({
  search,
  setSearch,
  category,
  setCategory,
  industry,
  setIndustry,
  service,
  setService,
  categories,
  industries,
  services,
  onReset,
}: ShowcaseFiltersProps) {
  return (
    <section className="mt-10">
      {/* Filters */}
      <div className="grid gap-6 lg:grid-cols-5">
        {/* Search */}
        <div className="relative lg:col-span-2">
          <label htmlFor="project-search" className="sr-only">
            Search projects
          </label>

          <Search
            size={20}
            aria-hidden="true"
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            id="project-search"
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-12 pr-4 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
          />
        </div>

        {/* Category */}
        <div>
          <label htmlFor="project-category" className="sr-only">
            Filter by category
          </label>

          <select
            id="project-category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-700 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
          >
            <option value="">All Categories</option>

            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* Industry */}
        <div>
          <label htmlFor="project-industry" className="sr-only">
            Filter by industry
          </label>

          <select
            id="project-industry"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-700 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
          >
            <option value="">All Industries</option>

            {industries.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* Service */}
        <div>
          <label htmlFor="project-service" className="sr-only">
            Filter by service
          </label>

          <select
            id="project-service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-700 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
          >
            <option value="">All Services</option>

            {services.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Reset Filters */}
      <div className="mt-6 flex justify-end">
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 font-semibold text-gray-700 transition hover:border-green-500 hover:bg-green-50 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-500/20"
        >
          <RotateCcw size={18} aria-hidden="true" />
          Reset Filters
        </button>
      </div>
    </section>
  );
}