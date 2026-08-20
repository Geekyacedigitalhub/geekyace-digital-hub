import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Clapperboard, Code2, Palette, Sparkles, TrendingUp, Users } from "lucide-react";
import Container from "@/app/components/ui/Container";
import PublicTeamRoster from "@/app/components/about/PublicTeamRoster";
import { studios } from "@/app/data/studios";
import { expertProfiles } from "@/app/data/v32GrowthOS";

export const metadata: Metadata = {
  title: "Experts & Specialist Studios",
  description: "Meet the GeekyAce expert network and explore five coordinated studios covering technology, creative, growth, video, and business support.",
};

const icons = { technology: Code2, creative: Palette, growth: TrendingUp, video: Clapperboard, support: BriefcaseBusiness };

export default function ExpertsPage() {
  return (
    <main className="bg-white">
      <section className="premium-noise relative overflow-hidden bg-[#07110c] py-24 text-white sm:py-28 lg:py-32">
        <div aria-hidden="true" className="premium-grid absolute inset-0 opacity-60" />
        <div aria-hidden="true" className="absolute left-1/2 top-0 h-[34rem] w-[54rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500/20 blur-3xl" />
        <Container>
          <div className="relative mx-auto max-w-5xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-green-300/20 bg-green-300/10 px-5 py-2 text-xs font-black uppercase tracking-[0.2em] text-green-300"><Users className="h-4 w-4" />The expert network</span>
            <h1 className="text-balance mt-7 text-5xl font-black leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-8xl">The right specialists. <span className="block text-green-400">One project standard.</span></h1>
            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">GeekyAce brings specialists together as a coordinated project squad, so strategy, design, delivery, and support move in the same direction.</p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/project-planner" className="inline-flex items-center justify-center gap-2 rounded-full bg-green-400 px-7 py-4 font-black text-slate-950 transition hover:-translate-y-1 hover:bg-green-300">Build my expert squad <ArrowRight className="h-4 w-4" /></Link>
              <Link href="#team-directory" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 font-black text-white transition hover:bg-white/10">Browse the team</Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-slate-200 bg-white py-20 sm:py-24">
        <Container>
          <div className="grid items-center gap-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-9 lg:grid-cols-[.72fr_1.28fr] lg:p-12">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-slate-900">
              <Image src={expertProfiles[0].imageUrl} alt={`${expertProfiles[0].name}, ${expertProfiles[0].role}`} fill sizes="(min-width: 1024px) 32vw, 90vw" className="object-cover object-top" />
            </div>
            <div>
              <span className="brand-eyebrow">Featured leadership profile</span>
              <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">{expertProfiles[0].name}</h2>
              <p className="mt-3 text-xl font-black text-green-700">{expertProfiles[0].role}</p>
              <p className="mt-5 text-lg leading-8 text-slate-600">{expertProfiles[0].headline}</p>
              <div className="mt-6 flex flex-wrap gap-2">{expertProfiles[0].expertise.map((item) => <span key={item} className="rounded-full bg-white px-3.5 py-2 text-sm font-bold text-slate-600 ring-1 ring-slate-200">{item}</span>)}</div>
              <Link href={`/experts/${expertProfiles[0].slug}`} className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 font-black text-white transition hover:-translate-y-1 hover:bg-green-700">Open full profile <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="brand-eyebrow">Five specialist studios</span>
            <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">A flexible team built around the outcome.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">Your squad can combine multiple studios without forcing you to manage separate vendors.</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {studios.map((studio) => {
              const Icon = icons[studio.id];
              return (
                <article key={studio.id} className="group flex min-h-[27rem] flex-col rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-green-300 hover:shadow-xl">
                  <div className="flex items-start justify-between"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-green-300"><Icon className="h-5 w-5" /></span><span className="font-mono text-xs font-black text-slate-300">{studio.number}</span></div>
                  <p className="mt-7 text-xs font-black uppercase tracking-[0.18em] text-green-700">{studio.shortName}</p>
                  <h3 className="mt-2 text-2xl font-black text-slate-950">{studio.name}</h3>
                  <p className="mt-4 text-sm leading-6 text-slate-600">{studio.description}</p>
                  <ul className="mt-6 space-y-2 text-sm font-bold text-slate-700">{studio.services.map((service) => <li key={service}>— {service}</li>)}</ul>
                  <p className="mt-auto border-t border-slate-100 pt-5 text-xs font-black uppercase tracking-[0.14em] text-slate-500">{studio.outcome}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <div id="team-directory" className="scroll-mt-24"><PublicTeamRoster /></div>

      <section className="bg-green-600 py-20 text-white">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <Sparkles className="mx-auto h-8 w-8" />
            <h2 className="mt-5 text-4xl font-black sm:text-5xl">Not sure which expert you need?</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-green-50">Describe the result. AceMatch will recommend a studio, project phases, and a practical starting squad.</p>
            <Link href="/project-planner" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-black text-green-700 transition hover:-translate-y-1 hover:bg-green-50">Try AceMatch <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
