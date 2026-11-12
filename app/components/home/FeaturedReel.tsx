"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

type Item = {
  title: string;
  tag: string;
  img: string;
  href: string;
  tech: string[];
};

const items: Item[] = [
  { title: "StoreScout",       tag: "Commerce Intelligence", img: "/images/showcase/products/store-scout.jpg",       href: "/portfolio/store-scout",                 tech: ["Next.js", "PostgreSQL", "Prisma"] },
  { title: "Store Guardian",  tag: "Shopify Monitoring",    img: "/images/showcase/products/store-guardian.jpg",   href: "/portfolio/store-guardian",              tech: ["Shopify", "Webhooks", "Render"] },
  { title: "BuyerReply AI",   tag: "AI Seller Assistant",   img: "/images/showcase/products/buyerreply-ai.jpg",    href: "/portfolio/buyerreply-ai",               tech: ["AI", "Supabase", "Multimodal"] },
  { title: "Website Doctor",  tag: "AI Diagnostics",        img: "/images/showcase/products/website-doctor.jpg",   href: "/portfolio/geekyace-website-doctor",     tech: ["Next.js", "Scoring", "Reports"] },
  { title: "MerchantOS",      tag: "Shopify Theme",         img: "/images/showcase/products/merchantos.jpg",       href: "/portfolio/merchantos-shopify-theme",    tech: ["Liquid", "JS", "CSS"] },
];

export default function FeaturedReel() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.85), behavior: "smooth" });
  };
  return (
    <section className="relative bg-gradient-to-b from-white to-slate-50 py-20 dark:from-slate-950 dark:to-slate-900 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-600 dark:text-green-400">Selected work</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
              Products that <span className="gradient-text-animated">shipped.</span>
            </h2>
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <button aria-label="Previous" onClick={() => scrollBy(-1)} className="glass-card flex h-11 w-11 items-center justify-center rounded-full text-slate-700 transition hover:-translate-y-0.5 hover:text-green-700 dark:text-slate-200">
              <ArrowUpRight className="h-5 w-5 rotate-[-135deg]" />
            </button>
            <button aria-label="Next" onClick={() => scrollBy(1)} className="glass-card flex h-11 w-11 items-center justify-center rounded-full text-slate-700 transition hover:-translate-y-0.5 hover:text-green-700 dark:text-slate-200">
              <ArrowUpRight className="h-5 w-5 rotate-45" />
            </button>
          </div>
        </div>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">Swipe or scroll to explore →</p>

        <div
          ref={scrollerRef}
          className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((it, i) => (
            <Link
              key={it.title}
              href={it.href}
              className="group relative block h-[420px] w-[85vw] shrink-0 overflow-hidden rounded-3xl border border-slate-200/60 bg-slate-100 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.2)] transition-shadow hover:shadow-[0_30px_70px_-20px_rgba(22,163,74,0.4)] snap-start sm:w-[60vw] lg:w-[420px] dark:border-white/10"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image src={it.img} alt={it.title} fill sizes="420px" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold text-slate-800 backdrop-blur">0{i + 1} · {it.tag}</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-extrabold text-slate-900 transition-colors group-hover:text-green-700 dark:text-white dark:group-hover:text-green-300">{it.title}</h3>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {it.tech.map((t) => (
                    <span key={t} className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-600 dark:bg-white/5 dark:text-slate-300">{t}</span>
                  ))}
                </div>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-green-600 transition group-hover:gap-2 dark:text-green-400">
                  View case study <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 text-center">
          <Link href="/portfolio" className="btn-glass glass-shine inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 dark:bg-white dark:text-slate-900">
            Browse all projects <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
