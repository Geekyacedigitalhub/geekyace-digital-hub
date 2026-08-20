import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, EyeOff, FileCheck2, ShieldCheck } from "lucide-react";
import Container from "@/app/components/ui/Container";
import { proofCaseStudies, type ProofStatus } from "@/app/data/v32GrowthOS";
import { getStudio } from "@/app/data/studios";
import { getCaseStudyProofLabel } from "@/app/lib/caseStudyProof";

export const metadata: Metadata = {
  title: "Proof Library & Case Studies",
  description:
    "Explore GeekyAce work with transparent labels for verified client work, confidential engagements, and capability concepts.",
  alternates: { canonical: "/case-studies" },
};

const statusIcons: Record<ProofStatus, typeof CheckCircle2> = {
  VERIFIED: CheckCircle2,
  CONFIDENTIAL: EyeOff,
  CONCEPT: FileCheck2,
};

const statusStyles: Record<ProofStatus, string> = {
  VERIFIED: "border-green-200 bg-green-50 text-green-800",
  CONFIDENTIAL: "border-violet-200 bg-violet-50 text-violet-800",
  CONCEPT: "border-amber-200 bg-amber-50 text-amber-900",
};

export default function CaseStudiesPage() {
  const published = proofCaseStudies.filter((study) => study.published);

  return (
    <main className="bg-white">
      <section className="premium-noise relative overflow-hidden bg-[#07110c] py-24 text-white sm:py-28 lg:py-32">
        <div aria-hidden="true" className="premium-grid absolute inset-0 opacity-60" />
        <div aria-hidden="true" className="absolute left-1/2 top-0 h-[34rem] w-[58rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500/20 blur-3xl" />
        <Container>
          <div className="relative mx-auto max-w-5xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-green-300/20 bg-green-300/10 px-5 py-2 text-xs font-black uppercase tracking-[0.2em] text-green-300">
              <ShieldCheck className="h-4 w-4" /> Proof before promotion
            </span>
            <h1 className="text-balance mt-7 text-5xl font-black leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
              Work you can evaluate. <span className="block text-green-400">Claims you can understand.</span>
            </h1>
            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              Every entry is labeled as verified client work, a confidential engagement, or a capability concept—so buyers never have to guess what they are seeing.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="#proof-library" className="inline-flex items-center justify-center gap-2 rounded-full bg-green-400 px-7 py-4 font-black text-slate-950 transition hover:-translate-y-1 hover:bg-green-300">
                Explore the proof library <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/proposal" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 font-black text-white transition hover:bg-white/10">
                Request a scoped proposal
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20">
        <Container>
          <div className="grid gap-5 lg:grid-cols-3">
            {([
              ["VERIFIED", "Verified client work", "Published only after an evidence source and client permission are recorded."],
              ["CONFIDENTIAL", "Confidential engagement", "Real work described without exposing the buyer, private assets, or sensitive metrics."],
              ["CONCEPT", "Capability concept", "An honest demonstration of approach and craft—not represented as commissioned client work."],
            ] as const).map(([status, title, description]) => {
              const Icon = statusIcons[status];
              return (
                <article key={status} className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm">
                  <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl border ${statusStyles[status]}`}><Icon className="h-5 w-5" /></span>
                  <h2 className="mt-5 text-xl font-black text-slate-950">{title}</h2>
                  <p className="mt-3 leading-7 text-slate-600">{description}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section id="proof-library" className="scroll-mt-24 py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <span className="brand-eyebrow">The proof library</span>
              <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Evidence-aware stories, not anonymous promises.</h2>
            </div>
            <p className="max-w-xl leading-7 text-slate-600">Verified entries will appear only after evidence and publication permission are recorded. Until then, the labels stay visible.</p>
          </div>

          <div className="mt-12 grid gap-7 lg:grid-cols-2">
            {published.map((study) => {
              const Icon = statusIcons[study.proofStatus];
              const studio = getStudio(study.studioId);
              return (
                <article key={study.slug} className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:border-green-300 hover:shadow-2xl">
                  <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                    <Image src={study.heroImageUrl} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
                    <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <span className={`absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-black ${statusStyles[study.proofStatus]}`}><Icon className="h-4 w-4" />{getCaseStudyProofLabel(study.proofStatus)}</span>
                    <span className="absolute bottom-5 left-5 text-xs font-black uppercase tracking-[0.18em] text-white">{studio.name}</span>
                  </div>
                  <div className="p-7 sm:p-9">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-green-700">{study.engagement}</p>
                    <h3 className="mt-3 text-3xl font-black tracking-tight text-slate-950">{study.title}</h3>
                    <p className="mt-4 leading-7 text-slate-600">{study.summary}</p>
                    <div className="mt-6 flex flex-wrap gap-2">{study.industries.map((industry) => <span key={industry} className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600">{industry}</span>)}</div>
                    <Link href={`/case-studies/${study.slug}`} className="mt-7 inline-flex items-center gap-2 font-black text-green-700 transition hover:gap-3">Read the evidence-aware story <ArrowRight className="h-4 w-4" /></Link>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>
    </main>
  );
}
