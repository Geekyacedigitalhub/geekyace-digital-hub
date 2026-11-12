"use client";

import Link from "next/link";
import { ArrowUpRight, Clock, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";

type Post = { title: string; excerpt: string; tag: string; date: string; read: string; href: string };
const posts: Post[] = [
  {
    title: "How we cut LCP from 4.1s to 0.9s on a Next.js storefront",
    excerpt: "The exact bundle, image, and streaming changes that moved a client from failing Core Web Vitals to a 98 Lighthouse score.",
    tag: "Performance",
    date: "Nov 4, 2026",
    read: "7 min read",
    href: "/blog/lcp-playbook",
  },
  {
    title: "Shipping an AI support bot in 9 days without burning retraining budget",
    excerpt: "Using retrieval-augmented generation over a client's existing FAQ + tickets to launch a model that answers 70% of questions on day one.",
    tag: "AI",
    date: "Oct 22, 2026",
    read: "11 min read",
    href: "/blog/ai-support-9-days",
  },
  {
    title: "Shopify app store launch checklist: the 12 things we won't skip",
    excerpt: "Billing, webhook idempotency, embedded App Bridge routing, GDPR webhooks — the gotchas we've learned from three live listings.",
    tag: "Shopify",
    date: "Oct 10, 2026",
    read: "9 min read",
    href: "/blog/shopify-launch-checklist",
  },
];

export default function BlogTeaser() {
  return (
    <section id="blog" className="relative bg-slate-50 py-20 dark:bg-slate-900 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-600 dark:text-green-400">Insights</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
              Field notes from the <span className="gradient-text-animated">build.</span>
            </h2>
          </motion.div>
          <Link href="/blog" className="hidden items-center gap-1 text-sm font-bold text-green-600 hover:gap-2 dark:text-green-400 sm:inline-flex">
            All posts <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.08 * i }}
            >
              <Link href={p.href} className="glass-card spotlight-hover group block h-full rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(22,163,74,0.35)]">
                <span className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-green-700 dark:bg-green-500/10 dark:text-green-300">
                  {p.tag}
                </span>
                <h3 className="mt-4 text-lg font-extrabold leading-snug text-slate-900 transition-colors group-hover:text-green-700 dark:text-white dark:group-hover:text-green-300">
                  {p.title}
                </h3>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600 dark:text-slate-400">{p.excerpt}</p>
                <div className="mt-5 flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                  <span className="inline-flex items-center gap-1"><CalendarDays className="h-3.5 w-3.5" />{p.date}</span>
                  <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{p.read}</span>
                </div>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-green-600 transition group-hover:gap-2 dark:text-green-400">
                  Read post <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link href="/blog" className="btn-glass inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-bold text-white dark:bg-white dark:text-slate-900">
            View all posts <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
