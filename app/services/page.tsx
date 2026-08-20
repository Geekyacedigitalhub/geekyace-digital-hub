import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  Layers3,
  SearchCheck,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Container from "@/app/components/ui/Container";
import ServiceMarketplace from "@/app/components/services/ServiceMarketplace";
import { marketplaceServices } from "@/app/data/serviceMarketplace";
import { studios } from "@/app/data/studios";

export const metadata: Metadata = {
  title: "Service Marketplace & Expert Capabilities",
  description:
    "Explore GeekyAce specialist services across technology, AI, design, growth, video, writing, data, and business support. Search by buyer goal, deliverable, or platform.",
  alternates: { canonical: "/services" },
};

const buyerPaths = [
  {
    icon: SearchCheck,
    eyebrow: "I know the service",
    title: "Search the marketplace",
    description: "Filter by studio, marketplace category, platform, deliverable, or specialist capability.",
    href: "#service-marketplace",
    cta: "Browse services",
  },
  {
    icon: Compass,
    eyebrow: "I know the outcome",
    title: "Use AceMatch",
    description: "Describe the goal and receive a recommended studio, starting squad, delivery path, and buyer brief.",
    href: "/project-planner",
    cta: "Build my squad",
  },
  {
    icon: Layers3,
    eyebrow: "The work crosses categories",
    title: "Request a coordinated scope",
    description: "Bring product, creative, growth, motion, and operations together under one accountable project plan.",
    href: "/contact?intent=consultation#contact-form",
    cta: "Talk through the brief",
  },
];

const scopeStandards = [
  "The business outcome and intended audience",
  "Included deliverables and explicit exclusions",
  "Milestones, review points, and decision ownership",
  "Access, content, platform, and third-party responsibilities",
  "Handover files, operating guidance, and next steps",
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="premium-noise relative overflow-hidden bg-[#07110c] pb-28 pt-20 text-white sm:pb-32 sm:pt-24">
        <div aria-hidden="true" className="premium-grid absolute inset-0 opacity-70" />
        <div aria-hidden="true" className="absolute left-1/2 top-0 h-[620px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500/18 blur-3xl" />
        <Container>
          <div className="relative mx-auto max-w-5xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-green-300/20 bg-green-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-green-300">
              <Sparkles className="h-4 w-4" />
              GeekyAce Service Marketplace · v3.2
            </span>
            <h1 className="text-balance mt-7 text-5xl font-black leading-[0.98] sm:text-6xl lg:text-7xl">
              One marketplace. Five studios. A clearer way to hire.
            </h1>
            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              Find a specialist service when you know what you need—or begin with the outcome and let AceMatch shape the right cross-discipline squad.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="#service-marketplace" className="inline-flex items-center justify-center gap-2 rounded-full bg-green-400 px-7 py-4 font-black text-slate-950 transition hover:-translate-y-1 hover:bg-green-300">
                Explore the marketplace
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/project-planner" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 font-black text-white backdrop-blur-xl transition hover:border-green-300/40 hover:bg-green-300/10">
                Start with my goal
              </Link>
            </div>
          </div>

          <div className="relative mx-auto mt-14 grid max-w-4xl gap-3 sm:grid-cols-3">
            {[
              { value: marketplaceServices.length, label: "buyer-ready service guides" },
              { value: studios.length, label: "accountable expert studios" },
              { value: 3, label: "flexible engagement models" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-5 text-left backdrop-blur-xl sm:text-center">
                <p className="text-3xl font-black text-green-300">{stat.value}</p>
                <p className="mt-1 text-sm font-bold text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative -mt-14 pb-12">
        <Container>
          <div className="grid gap-5 lg:grid-cols-3">
            {buyerPaths.map((path, index) => {
              const Icon = path.icon;
              return (
                <article key={path.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-[0_25px_70px_-45px_rgba(2,8,23,.5)]">
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-green-100 text-green-800">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-xs font-black text-slate-300">0{index + 1}</span>
                  </div>
                  <p className="mt-6 text-xs font-black uppercase tracking-[0.16em] text-green-700">{path.eyebrow}</p>
                  <h2 className="mt-2 text-2xl font-black text-slate-950">{path.title}</h2>
                  <p className="mt-3 leading-7 text-slate-600">{path.description}</p>
                  <Link href={path.href} className="mt-6 inline-flex items-center gap-2 font-black text-slate-950 transition hover:text-green-700">
                    {path.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <ServiceMarketplace />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <span className="brand-eyebrow">
                <ShieldCheck className="h-4 w-4" />
                Scope before promise
              </span>
              <h2 className="text-balance mt-5 text-4xl font-black leading-tight text-slate-950 sm:text-5xl">
                A service title is the starting point—not the contract.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
                Timelines and commercial terms become responsible only after the team understands the goal, source materials, integrations, review process, and buyer responsibilities.
              </p>
              <Link href="/trust" className="mt-7 inline-flex items-center gap-2 font-black text-green-700 hover:text-green-900">
                Read our delivery standards
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 sm:p-9">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">Every confirmed scope should state</p>
              <div className="mt-6 grid gap-4">
                {scopeStandards.map((standard, index) => (
                  <div key={standard} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-slate-950 text-xs font-black text-green-300">0{index + 1}</span>
                    <div className="flex items-start gap-3 pt-1.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                      <p className="font-black leading-6 text-slate-800">{standard}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
