import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CalendarDays, Clock } from "lucide-react";
import { getAllPosts, getAllSlugs, getPost } from "@/lib/posts";
import Container from "@/app/components/ui/Container";
import { marked } from "marked";
import { Metadata } from "next";

marked.setOptions({ gfm: true, breaks: false });

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  return { title: `${p.title} — GeekyAce Insights`, description: p.excerpt };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const html = marked.parse(post.content) as string;

  const others = getAllPosts().filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <main className="pt-28 sm:pt-36">
      <Container>
        <article className="mx-auto max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-green-600 dark:text-slate-400">
            <ArrowLeft className="h-4 w-4" /> Back to insights
          </Link>

          <span className="mt-6 inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-green-700 dark:bg-green-500/10 dark:text-green-300">{post.tag}</span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl dark:text-white">{post.title}</h1>
          <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">{post.excerpt}</p>
          <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
            <span className="inline-flex items-center gap-1"><CalendarDays className="h-4 w-4" />{post.date}</span>
            <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4" />{post.read}</span>
          </div>

          <div
            className="prose prose-slate mt-12 max-w-none dark:prose-invert prose-headings:font-extrabold prose-headings:tracking-tight prose-a:text-green-600 prose-a:no-underline hover:prose-a:underline prose-pre:rounded-xl prose-pre:bg-slate-900"
            dangerouslySetInnerHTML={{ __html: html }}
          />

          <div className="mt-16 rounded-3xl border border-slate-200/60 bg-gradient-to-br from-green-50 to-emerald-50 p-8 dark:border-green-400/20 dark:from-green-500/10 dark:to-emerald-500/5">
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">Want us to run this playbook on your product?</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Book a free strategy call — no pitch deck, just a 20-minute audit.</p>
            <Link href="/contact" className="mt-4 inline-flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-sm font-bold text-white hover:-translate-y-0.5">
              Start a conversation <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </article>

        {others.length > 0 && (
          <div className="mx-auto mt-20 max-w-5xl">
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">Keep reading</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {others.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="glass-card group rounded-2xl p-6 transition hover:-translate-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-green-700 dark:text-green-300">{p.tag}</span>
                  <h3 className="mt-2 text-lg font-extrabold text-slate-900 group-hover:text-green-700 dark:text-white dark:group-hover:text-green-300">{p.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-slate-600 dark:text-slate-400">{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>
      <div className="h-24" />
    </main>
  );
}
