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
    <section className="mb-16 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">

      <div className="grid gap-6 lg:grid-cols-5">

        {/* Search */}

        <div className="relative lg:col-span-2">

          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-gray-200 py-3 pl-12 pr-4 outline-none transition focus:border-green-500"
          />

        </div>

        {/* Category */}

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-green-500"
        >
          <option value="">All Categories</option>

          {categories.map((item) => (
            <option
              key={item}
              value={item}
            >
              {item}
            </option>
          ))}

        </select>

        {/* Industry */}

        <select
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
          className="rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-green-500"
        >
          <option value="">All Industries</option>

          {industries.map((item) => (
            <option
              key={item}
              value={item}
            >
              {item}
            </option>
          ))}

        </select>

        {/* Service */}

        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-green-500"
        >
          <option value="">All Services</option>

          {services.map((item) => (
            <option
              key={item}
              value={item}
            >
              {item}
            </option>
          ))}

        </select>

      </div>

      <div className="mt-6 flex justify-end">

        <button
          onClick={onReset}
          className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-5 py-3 font-semibold text-gray-700 transition hover:border-green-500 hover:text-green-600"
        >
          <RotateCcw size={18} />

          Reset Filters

        </button>

      </div>

    </section>
  );
}