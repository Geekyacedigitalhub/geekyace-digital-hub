"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Clapperboard,
  Code2,
  Filter,
  Palette,
  Search,
  Sparkles,
  TrendingUp,
  X,
  type LucideIcon,
} from "lucide-react";
import { marketplaceCategories, marketplaceServices } from "@/app/data/serviceMarketplace";
import { studios, type Studio } from "@/app/data/studios";

type StudioFilter = "all" | Studio["id"];

const studioIcons: Record<Studio["id"], LucideIcon> = {
  technology: Code2,
  creative: Palette,
  growth: TrendingUp,
  video: Clapperboard,
  support: BriefcaseBusiness,
};

const studioStyles: Record<Studio["id"], { icon: string; badge: string; glow: string }> = {
  technology: {
    icon: "bg-emerald-100 text-emerald-800",
    badge: "border-emerald-200 bg-emerald-50 text-emerald-800",
    glow: "from-emerald-400/20",
  },
  creative: {
    icon: "bg-violet-100 text-violet-800",
    badge: "border-violet-200 bg-violet-50 text-violet-800",
    glow: "from-violet-400/20",
  },
  growth: {
    icon: "bg-cyan-100 text-cyan-800",
    badge: "border-cyan-200 bg-cyan-50 text-cyan-800",
    glow: "from-cyan-400/20",
  },
  video: {
    icon: "bg-amber-100 text-amber-800",
    badge: "border-amber-200 bg-amber-50 text-amber-900",
    glow: "from-amber-400/20",
  },
  support: {
    icon: "bg-rose-100 text-rose-800",
    badge: "border-rose-200 bg-rose-50 text-rose-800",
    glow: "from-rose-400/20",
  },
};

export default function ServiceMarketplace() {
  const [query, setQuery] = useState("");
  const [studioFilter, setStudioFilter] = useState<StudioFilter>("all");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const filteredServices = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return marketplaceServices.filter((service) => {
      const matchesStudio = studioFilter === "all" || service.studioId === studioFilter;
      const matchesCategory = categoryFilter === "all" || service.marketplaceCategory === categoryFilter;
      const searchable = [
        service.title,
        service.shortTitle,
        service.marketplaceCategory,
        service.summary,
        service.outcome,
        ...service.idealFor,
        ...service.deliverables,
        ...service.searchTerms,
      ]
        .join(" ")
        .toLowerCase();

      return matchesStudio && matchesCategory && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [categoryFilter, query, studioFilter]);

  const hasFilters = Boolean(query || studioFilter !== "all" || categoryFilter !== "all");
  const clearFilters = () => {
    setQuery("");
    setStudioFilter("all");
    setCategoryFilter("all");
  };

  return (
    <section id="service-marketplace" className="relative overflow-hidden bg-slate-50 py-20 sm:py-24">
      <div aria-hidden="true" className="absolute left-1/2 top-0 h-80 w-[54rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-200/45 blur-3xl" />
      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-7 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <span className="brand-eyebrow">
              <Sparkles className="h-4 w-4" />
              Buyer service marketplace
            </span>
            <h2 className="text-balance mt-5 text-4xl font-black leading-tight text-slate-950 sm:text-5xl">
              Find the capability your project actually needs.
            </h2>
          </div>
          <div className="lg:pl-8">
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Search by service, platform, deliverable, or buyer problem. Every capability belongs to an accountable studio and begins with written scope—not a vague package promise.
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_24px_70px_-42px_rgba(2,8,23,.42)] sm:p-7">
          <div className="grid gap-4 lg:grid-cols-[1fr_290px]">
            <label className="relative block">
              <span className="sr-only">Search services</span>
              <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Try “Shopify”, “logo”, “lead generation”, or “podcast”…"
                className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-13 pr-5 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-100"
              />
            </label>

            <label className="relative block">
              <span className="sr-only">Filter by marketplace category</span>
              <Filter className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <select
                value={categoryFilter}
                onChange={(event) => setCategoryFilter(event.target.value)}
                className="h-14 w-full appearance-none rounded-2xl border border-slate-200 bg-slate-50 pl-13 pr-10 font-bold text-slate-700 outline-none transition focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-100"
              >
                <option value="all">All marketplace categories</option>
                {marketplaceCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="mt-5 flex flex-wrap gap-2" aria-label="Filter services by expert studio">
            <button
              type="button"
              onClick={() => setStudioFilter("all")}
              className={`rounded-full border px-4 py-2.5 text-sm font-black transition ${studioFilter === "all" ? "border-slate-950 bg-slate-950 text-white" : "border-slate-200 bg-white text-slate-600 hover:border-green-300 hover:text-green-800"}`}
            >
              All studios
            </button>
            {studios.map((studio) => {
              const Icon = studioIcons[studio.id];
              const active = studioFilter === studio.id;
              return (
                <button
                  key={studio.id}
                  type="button"
                  onClick={() => setStudioFilter(studio.id)}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-black transition ${active ? "border-green-600 bg-green-600 text-white" : "border-slate-200 bg-white text-slate-600 hover:border-green-300 hover:text-green-800"}`}
                >
                  <Icon className="h-4 w-4" />
                  {studio.shortName.replace(" Studio", "")}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <p aria-live="polite" className="font-bold text-slate-600">
            <span className="text-slate-950">{filteredServices.length}</span> specialist services found
          </p>
          {hasFilters && (
            <button type="button" onClick={clearFilters} className="inline-flex items-center gap-2 text-sm font-black text-green-700 hover:text-green-900">
              <X className="h-4 w-4" />
              Clear filters
            </button>
          )}
        </div>

        {filteredServices.length > 0 ? (
          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredServices.map((service) => {
              const studio = studios.find((item) => item.id === service.studioId) ?? studios[0];
              const Icon = studioIcons[service.studioId];
              const styles = studioStyles[service.studioId];

              return (
                <article key={service.slug} className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-46px_rgba(2,8,23,.55)] transition duration-500 hover:-translate-y-1.5 hover:border-green-300 hover:shadow-[0_28px_70px_-40px_rgba(22,163,74,.35)] sm:p-7">
                  <div aria-hidden="true" className={`absolute inset-x-0 top-0 h-28 bg-gradient-to-b ${styles.glow} to-transparent opacity-0 transition duration-500 group-hover:opacity-100`} />
                  <div className="relative">
                    <div className="flex items-start justify-between gap-4">
                      <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${styles.icon}`}>
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className={`rounded-full border px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.12em] ${styles.badge}`}>
                        {studio.shortName}
                      </span>
                    </div>

                    <p className="mt-6 text-xs font-black uppercase tracking-[0.16em] text-slate-400">{service.marketplaceCategory}</p>
                    <h3 className="mt-2 text-2xl font-black leading-tight text-slate-950">{service.title}</h3>
                    <p className="mt-4 min-h-21 leading-7 text-slate-600">{service.summary}</p>

                    <div className="mt-6 border-t border-slate-100 pt-5">
                      <p className="text-[11px] font-black uppercase tracking-[0.16em] text-slate-400">Common deliverables</p>
                      <ul className="mt-3 space-y-2.5">
                        {service.deliverables.slice(0, 3).map((deliverable) => (
                          <li key={deliverable} className="flex items-start gap-2 text-sm font-bold leading-6 text-slate-700">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-7 grid grid-cols-2 gap-3">
                      <Link href={`/services/${service.slug}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-4 py-3 text-sm font-black text-white transition hover:bg-green-600">
                        Buyer guide
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                      <Link href={`/project-planner?studio=${service.studioId}&service=${service.slug}`} className="inline-flex items-center justify-center rounded-full border border-slate-200 px-4 py-3 text-sm font-black text-slate-700 transition hover:border-green-300 hover:bg-green-50 hover:text-green-800">
                        Match a squad
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="mt-6 rounded-[2rem] border border-dashed border-slate-300 bg-white p-10 text-center sm:p-16">
            <Search className="mx-auto h-8 w-8 text-slate-400" />
            <h3 className="mt-5 text-2xl font-black text-slate-950">No exact match yet.</h3>
            <p className="mx-auto mt-3 max-w-xl leading-7 text-slate-600">Clear the filters or describe the outcome in AceMatch. A coordinated scope can combine services across studios.</p>
            <button type="button" onClick={clearFilters} className="mt-6 rounded-full bg-green-600 px-6 py-3 font-black text-white hover:bg-green-500">Show all services</button>
          </div>
        )}

        <div className="premium-noise relative mt-12 overflow-hidden rounded-[2rem] bg-[#07110c] p-7 text-white sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div aria-hidden="true" className="premium-grid absolute inset-0 opacity-60" />
          <div className="relative max-w-3xl">
            <span className="text-xs font-black uppercase tracking-[0.18em] text-green-300">Multi-service brief?</span>
            <h3 className="mt-3 text-3xl font-black sm:text-4xl">Start with the business outcome, not a shopping list.</h3>
            <p className="mt-4 leading-7 text-slate-300">AceMatch can combine product, creative, growth, motion, and operations into one starting squad and one reusable brief.</p>
          </div>
          <Link href="/project-planner" className="relative mt-7 inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-green-400 px-7 py-4 font-black text-slate-950 transition hover:-translate-y-1 hover:bg-green-300 lg:mt-0">
            Build my expert squad
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
