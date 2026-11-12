"use client";

import { Search, RotateCcw } from "lucide-react";
import ChipPills from "./ChipPills";

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
  search, setSearch, category, setCategory,
  industry, setIndustry, service, setService,
  categories, industries, services, onReset,
}: ShowcaseFiltersProps) {
  const hasFilter = search || category || industry || service;
  return (
    <section aria-label="Project filters" className="glass-strong glass-shine mb-12 rounded-3xl p-5 shadow-[0_16px_40px_-20px_rgba(15,23,42,0.12)] sm:p-6">
      <div className="relative">
        <Search size={19} aria-hidden className="pointer-events-none absolute left-4 top-11 text-slate-400" />
        <label htmlFor="project-search" className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-500">Search</label>
        <input
          id="project-search"
          type="search"
          placeholder="Search projects, technologies…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 dark:border-white/10 dark:bg-white/5 dark:text-white"
        />
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-3">
        <ChipPills label="Category" options={categories} value={category} onChange={setCategory} />
        <ChipPills label="Industry" options={industries} value={industry} onChange={setIndustry} />
        <ChipPills label="Service"  options={services}   value={service}  onChange={setService} />
      </div>

      <div className="mt-5 flex items-center justify-between">
        <p className="text-xs text-slate-500">
          {hasFilter ? "Filters applied — click a green pill again to clear it." : "Tip: click a pill to filter."}
        </p>
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-green-500 hover:bg-green-50 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-500/20 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-green-500/10"
        >
          <RotateCcw size={15} aria-hidden /> Reset
        </button>
      </div>
    </section>
  );
}
