import Link from "next/link";
import { ArrowUpRight, CalendarDays, Clock } from "lucide-react";
import { getAllPosts } from "@/lib/posts";
import Container from "@/app/components/ui/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights & Field Notes",
  description:
    "Engineering deep-dives, AI case studies, Shopify lessons, and build logs from the GeekyAce Digital Hub team.",
};

export default function BlogIndex() {
  const posts = getAllPosts();
  return (
    <main className="pt-28 sm:pt-36">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-green-600 dark:text-green-400">Insights</p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
            Field notes from the <span className="gradient-text-animated">build.</span>
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Performance playbooks, AI teardowns, Shopify launch lessons, and the occasional rant about web vitals.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="glass-card spotlight-hover group flex h-full flex-col rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-[0_25px_60px_-20px_rgba(22,163,74,0.35)]"
            >
              <span className="inline-flex w-fit items-center rounded-full bg-green-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-green-700 dark:bg-green-500/10 dark:text-green-300">{p.tag}</span>
              <h2 className="mt-4 text-xl font-extrabold leading-snug text-slate-900 transition-colors group-hover:text-green-700 dark:text-white dark:group-hover:text-green-300">{p.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-400">{p.excerpt}</p>
              <div className="mt-5 flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                <span className="inline-flex items-center gap-1"><CalendarDays className="h-3.5 w-3.5" />{p.date}</span>
                <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{p.read}</span>
              </div>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-green-600 transition group-hover:gap-2 dark:text-green-400">
                Read post <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
      <div className="h-24" />
    </main>
  );
}
