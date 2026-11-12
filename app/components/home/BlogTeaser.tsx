import Link from "next/link";
import { ArrowUpRight, Clock, CalendarDays } from "lucide-react";
import { getAllPosts } from "@/lib/posts";
import BlogReveal from "./BlogReveal";

export default function BlogTeaser() {
  const posts = getAllPosts().slice(0, 3);
  return (
    <section id="blog" className="relative bg-slate-50 py-20 dark:bg-slate-900 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-600 dark:text-green-400">Insights</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
              Field notes from the <span className="gradient-text-animated">build.</span>
            </h2>
          </div>
          <Link href="/blog" className="hidden items-center gap-1 text-sm font-bold text-green-600 hover:gap-2 dark:text-green-400 sm:inline-flex">
            All posts <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((p, i) => (
            <BlogReveal key={p.slug} delay={0.08 * i}>
              <Link href={`/blog/${p.slug}`} className="glass-card spotlight-hover group block h-full rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(22,163,74,0.35)]">
                <span className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-green-700 dark:bg-green-500/10 dark:text-green-300">{p.tag}</span>
                <h3 className="mt-4 text-lg font-extrabold leading-snug text-slate-900 transition-colors group-hover:text-green-700 dark:text-white dark:group-hover:text-green-300">{p.title}</h3>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600 dark:text-slate-400">{p.excerpt}</p>
                <div className="mt-5 flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                  <span className="inline-flex items-center gap-1"><CalendarDays className="h-3.5 w-3.5" />{p.date}</span>
                  <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{p.read}</span>
                </div>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-green-600 transition group-hover:gap-2 dark:text-green-400">
                  Read post <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            </BlogReveal>
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
