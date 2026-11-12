import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "../ui/Container";
import ProjectImage from "./ProjectImage";
import { featuredProjects } from "@/app/data/projects";

export default function FeaturedCaseStudy() {
  if (!featuredProjects.length) return null;
  const [primary, ...others] = featuredProjects.slice(0, 4);

  return (
    <section className="relative border-y border-slate-200/70 bg-white py-20 sm:py-28">
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
        <div className="mt-10 grid gap-8 lg:grid-cols-5">
          <Link href={`/showcase/${primary.slug}`} className="group relative col-span-3 overflow-hidden rounded-3xl ring-1 ring-slate-200/70 transition hover:ring-green-300">
            <div className="relative aspect-[4/3] w-full bg-slate-100">
              <ProjectImage src={primary.image} alt={primary.title} priority />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6 text-white">
              <div className="flex flex-wrap items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white/80">
                <span className="rounded-full bg-white/15 px-2.5 py-1 backdrop-blur">{primary.category}</span>
                <span>{primary.year} · {primary.duration}</span>
              </div>
              <h3 className="mt-3 text-2xl font-extrabold">{primary.title}</h3>
              <p className="mt-1 max-w-xl text-sm leading-6 text-white/80 line-clamp-2">{primary.overview}</p>
            </div>
          </Link>

          <div className="col-span-2 flex flex-col justify-between gap-4 rounded-3xl bg-slate-950 p-8 text-white">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-green-400">The approach</p>
              <p className="mt-4 text-lg leading-8 text-slate-200">{primary.solution || "Modern engineering, considered UX, and production-grade reliability from day one."}</p>
            </div>

            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-400">Stack</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {primary.technologies.slice(0, 8).map((t) => (
                  <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-slate-200">{t}</span>
                ))}
              </div>
            </div>

            <Link
              href={`/showcase/${primary.slug}`}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 px-5 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-green-400"
            >
              View case study <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* Secondary featured strip */}
        {others.length > 0 && (
          <>
            <div className="mt-16 flex items-end justify-between">
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">More shipped work</h3>
              <Link href="/portfolio" className="inline-flex items-center gap-1 text-xs font-bold text-green-700 hover:gap-2">See all <ArrowUpRight size={13}/></Link>
            </div>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((p) => (
                <Link key={p.slug} href={`/showcase/${p.slug}`} className="group block">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200/70 transition group-hover:ring-green-300">
                    <ProjectImage src={p.image} alt={p.title} />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <span className="rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-800">{p.category}</span>
                    </div>
                  </div>
                  <div className="mt-3 flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-base font-bold text-slate-950 group-hover:text-green-700">{p.title}</h4>
                      <p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-500">{p.shortDescription}</p>
                    </div>
                    <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-green-600"/>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </Container>
    </section>
  );
}
