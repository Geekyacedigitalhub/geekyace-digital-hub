import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "../ui/Container";

export default function ShowcaseHero() {
  return (
    <section className="border-b border-slate-900/10 bg-white pt-28 pb-20 sm:pt-36 sm:pb-24">
      <Container>
        <div className="grid items-end gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-green-700">Selected work</span>
            <h1 className="mt-6 max-w-4xl font-serif text-5xl font-black italic leading-[1.02] tracking-tight text-slate-950 sm:text-6xl lg:text-[5.5rem]">
              Real projects.
              <span className="block not-italic text-green-700">Real engineering.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
              A curated selection of production web applications, Shopify themes and apps,
              AI products, SaaS platforms, and business automation — built for founders
              and teams around the world.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-sm bg-slate-950 px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-green-700">
                Start a project <ArrowRight size={15} />
              </Link>
              <a href="#projects" className="inline-flex items-center gap-2 border-b border-slate-950 pb-0.5 text-sm font-bold text-slate-950 transition hover:border-green-700 hover:text-green-700">
                Browse projects
              </a>
            </div>
          </div>

          <div className="border-l border-slate-900/10 pl-0 lg:pl-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-slate-500">Snapshot</p>
            <dl className="mt-6 grid grid-cols-2 gap-y-6 text-sm">
              {[
                ["40+", "Products shipped"],
                ["6", "Core disciplines"],
                ["12", "Countries served"],
                ["5 yr", "In business"],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="font-serif text-4xl font-black text-slate-950">{v}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-widest text-slate-500">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
