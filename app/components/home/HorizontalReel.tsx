"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";

type Item = {
  title: string;
  tag: string;
  img: string;
  href: string;
};

const items: Item[] = [
  { title: "StoreScout", tag: "Commerce Intelligence", img: "/images/showcase/products/store-scout.jpg", href: "/portfolio/store-scout" },
  { title: "Store Guardian", tag: "Shopify Monitoring", img: "/images/showcase/products/store-guardian.jpg", href: "/portfolio/store-guardian" },
  { title: "BuyerReply AI", tag: "AI Seller Assistant", img: "/images/showcase/products/buyerreply-ai.jpg", href: "/portfolio/buyerreply-ai" },
  { title: "Website Doctor", tag: "AI Diagnostics", img: "/images/showcase/products/website-doctor.jpg", href: "/portfolio/geekyace-website-doctor" },
  { title: "MerchantOS", tag: "Shopify Theme", img: "/images/showcase/products/merchantos.jpg", href: "/portfolio/merchantos-shopify-theme" },
];

export default function HorizontalReel() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-72%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute left-5 top-24 z-10 sm:left-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-600 dark:text-green-400">Selected work</p>
          <h2 className="mt-3 max-w-xl text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
            Real products,
            <span className="gradient-text-animated block">real outcomes.</span>
          </h2>
        </div>
        <motion.div style={{ x }} className="flex gap-8 pl-[5vw] pr-[50vw] pt-24">
          {items.map((it, i) => (
            <Link
              key={it.title}
              href={it.href}
              className="group relative block h-[62vh] w-[78vw] shrink-0 overflow-hidden rounded-3xl border border-slate-200/60 bg-slate-100 shadow-[0_30px_60px_-20px_rgba(15,23,42,0.25)] transition-shadow hover:shadow-[0_40px_80px_-20px_rgba(22,163,74,0.4)] sm:w-[60vw] lg:w-[44vw]"
            >
              <Image src={it.img} alt={it.title} fill sizes="44vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-bold text-slate-800 backdrop-blur">0{i + 1} · {it.tag}</div>
              <div className="absolute inset-x-6 bottom-6 flex items-end justify-between text-white">
                <div>
                  <p className="text-2xl font-extrabold sm:text-3xl">{it.title}</p>
                  <p className="mt-1 text-xs text-white/70">View case study →</p>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 backdrop-blur transition group-hover:bg-green-500">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>
            </Link>
          ))}
          {/* End card */}
          <div className="flex h-[62vh] w-[50vw] shrink-0 items-center justify-center rounded-3xl border border-slate-200/60 bg-gradient-to-br from-green-50 to-emerald-50 p-10 dark:border-white/10 dark:from-green-500/10 dark:to-emerald-500/5">
            <div className="text-center">
              <p className="text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl">+ more in the portfolio</p>
              <Link href="/portfolio" className="btn-glass glass-shine mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-bold text-white hover:-translate-y-0.5 dark:bg-white dark:text-slate-900">
                Browse all <ExternalLink className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
