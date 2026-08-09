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
    <section
      aria-label="Project filters"
      className="mb-12 rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-6"
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Search */}
        <div className="relative lg:col-span-1">
          <label
            htmlFor="project-search"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Search
          </label>

          <Search
            size={19}
            aria-hidden="true"
            className="pointer-events-none absolute left-4 top-[calc(50%+12px)] -translate-y-1/2 text-slate-400"
          />

          <input
            id="project-search"
            type="search"
            placeholder="Search projects..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
          />
        </div>

        {/* Category */}
        <div>
          <label
            htmlFor="project-category"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Category
          </label>

          <select
            id="project-category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-slate-700 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
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
          <label
            htmlFor="project-industry"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Industry
          </label>

          <select
            id="project-industry"
            value={industry}
            onChange={(event) => setIndustry(event.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-slate-700 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
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
          <label
            htmlFor="project-service"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Service
          </label>

          <select
            id="project-service"
            value={service}
            onChange={(event) => setService(event.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-slate-700 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
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

      {/* Reset */}
      <div className="mt-5 flex justify-end">
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:border-green-500 hover:bg-green-50 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-500/20"
        >
          <RotateCcw size={17} aria-hidden="true" />
          Reset Filters
        </button>
      </div>
    </section>
  );
}