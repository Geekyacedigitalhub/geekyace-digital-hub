import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "../ui/Container";
import ProjectImage from "./ProjectImage";
import { featuredProjects } from "@/app/data/projects";

export default function FeaturedCaseStudy() {
  if (!featuredProjects.length) return null;
  const [primary, ...others] = featuredProjects.slice(0, 4);

  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        {/* Eyebrow */}
        <div className="flex items-end justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-green-700">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              Featured build
            </span>
            <h2 className="mt-4 font-serif text-4xl font-black italic leading-tight tracking-tight text-slate-950 sm:text-5xl">
              {primary.title}
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              {primary.shortDescription}
            </p>
          </div>
          <Link href={`/showcase/${primary.slug}`} className="hidden shrink-0 items-center gap-2 text-sm font-bold text-green-700 hover:gap-3 sm:inline-flex">
            Read case study <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Big editorial hero */}
        <div className="mt-10 grid gap-10 lg:grid-cols-5 lg:gap-12">
          <Link href={`/showcase/${primary.slug}`} className="group relative col-span-3 block">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-slate-100 ring-1 ring-slate-200 transition group-hover:ring-slate-900">
              <div className="absolute inset-0 transition duration-700 group-hover:scale-[1.02]">
                <ProjectImage src={primary.image} alt={primary.title} priority />
              </div>
            </div>
            <div className="mt-4 flex items-baseline justify-between gap-4 border-b border-slate-900/10 pb-2">
              <h3 className="font-serif text-3xl font-black italic text-slate-950">{primary.title}</h3>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">{primary.category}</span>
            </div>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">{primary.overview}</p>
          </Link>

          <div className="col-span-2 flex flex-col justify-between gap-6 border-l border-slate-900/10 pl-8">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500">The approach</p>
              <p className="mt-4 text-[15px] leading-7 text-slate-700">{primary.solution || "Modern engineering, considered UX, and production-grade reliability from day one."}</p>
            </div>

            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500">Stack</p>
              <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1.5">
                {primary.technologies.slice(0, 8).map((t) => (
                  <span key={t} className="text-[11px] font-medium uppercase tracking-wider text-slate-600">{t}</span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 border-t border-slate-900/10 pt-5">
              <div>
                <p className="font-serif text-3xl font-black text-slate-950">{primary.year}</p>
                <p className="mt-1 text-[10px] uppercase tracking-widest text-slate-500">Year</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-black text-slate-950">{primary.duration}</p>
                <p className="mt-1 text-[10px] uppercase tracking-widest text-slate-500">Engagement</p>
              </div>
            </div>

            <Link
              href={`/showcase/${primary.slug}`}
              className="inline-flex items-center gap-2 border-b border-slate-950 pb-0.5 text-sm font-bold text-slate-950 transition hover:border-green-700 hover:text-green-700"
            >
              Read the case study <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        {/* Secondary featured strip */}
        {others.length > 0 && (
          <>
            <div className="mt-20 flex items-end justify-between border-t border-slate-900/10 pt-6">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.24em] text-slate-500">Also shipped</h3>
              <Link href="/portfolio#projects" className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-widest text-slate-900 hover:gap-2 hover:text-green-700">All projects <ArrowUpRight size={12}/></Link>
            </div>
            <div className="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((p, i) => (
                <Link key={p.slug} href={`/showcase/${p.slug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-slate-100 ring-1 ring-slate-200 transition group-hover:ring-slate-900">
                    <ProjectImage src={p.image} alt={p.title} />
                  </div>
                  <div className="mt-3 flex items-baseline justify-between gap-4 border-b border-slate-900/10 pb-2">
                    <h4 className="font-serif text-lg font-normal italic text-slate-950 group-hover:text-green-700">{p.title}</h4>
                    <span className="font-mono text-[10px] text-slate-400">0{i + 2}</span>
                  </div>
                  <p className="mt-2 line-clamp-2 text-[12px] leading-5 text-slate-600">{p.shortDescription}</p>
                </Link>
              ))}
            </div>
          </>
        )}
      </Container>
    </section>
  );
}
