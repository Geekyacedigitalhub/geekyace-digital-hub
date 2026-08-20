import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, EyeOff, ExternalLink, FileCheck2, ShieldCheck } from "lucide-react";
import Container from "@/app/components/ui/Container";
import { getMarketplaceService } from "@/app/data/serviceMarketplace";
import { getStudio } from "@/app/data/studios";
import { getProofCaseStudy, proofCaseStudies, type ProofStatus } from "@/app/data/v32GrowthOS";
import { getCaseStudyProofLabel } from "@/app/lib/caseStudyProof";

type PageProps = { params: Promise<{ slug: string }> };

const statusIcons: Record<ProofStatus, typeof CheckCircle2> = { VERIFIED: CheckCircle2, CONFIDENTIAL: EyeOff, CONCEPT: FileCheck2 };

export function generateStaticParams() {
  return proofCaseStudies.filter((study) => study.published).map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getProofCaseStudy(slug);
  if (!study) return { title: "Case Study Not Found" };
  return {
    title: study.title,
    description: study.summary,
    alternates: { canonical: `/case-studies/${study.slug}` },
    openGraph: { title: study.title, description: study.summary, images: [study.heroImageUrl] },
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getProofCaseStudy(slug);
  if (!study || !study.published) notFound();

  const studio = getStudio(study.studioId);
  const StatusIcon = statusIcons[study.proofStatus];
  const services = study.serviceSlugs.map(getMarketplaceService).filter(Boolean);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: study.title,
    description: study.summary,
    creator: { "@type": "Organization", name: "GeekyAce Digital Hub" },
    image: study.heroImageUrl,
    url: `https://geekyacedigitalhub.com/case-studies/${study.slug}`,
  };

  return (
    <main className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <section className="premium-noise relative overflow-hidden bg-[#07110c] py-20 text-white sm:py-24">
        <div aria-hidden="true" className="premium-grid absolute inset-0 opacity-60" />
        <Container>
          <div className="relative">
            <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm font-black text-slate-300 transition hover:text-green-300"><ArrowLeft className="h-4 w-4" /> Proof library</Link>
            <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
              <div>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-green-300/20 bg-green-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-green-300"><StatusIcon className="h-4 w-4" />{getCaseStudyProofLabel(study.proofStatus)}</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-slate-300">{studio.name}</span>
                </div>
                <h1 className="text-balance mt-7 text-5xl font-black leading-[1] tracking-[-0.05em] sm:text-6xl">{study.title}</h1>
                <p className="mt-6 text-lg leading-8 text-slate-300">{study.summary}</p>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 shadow-2xl">
                <Image src={study.heroImageUrl} alt="" fill priority sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_22rem]">
            <div className="space-y-12">
              {[["The challenge", study.challenge], ["The approach", study.approach], ["The outcome", study.outcome]].map(([title, body], index) => (
                <article key={title} className="border-b border-slate-200 pb-12 last:border-0">
                  <span className="font-mono text-xs font-black text-green-700">0{index + 1}</span>
                  <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">{title}</h2>
                  <p className="mt-5 text-lg leading-8 text-slate-600">{body}</p>
                </article>
              ))}
            </div>

            <aside className="space-y-6">
              <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-7">
                <h2 className="flex items-center gap-2 font-black text-slate-950"><ShieldCheck className="h-5 w-5 text-green-700" /> Evidence statement</h2>
                <ul className="mt-5 space-y-3">{study.evidenceNotes.map((note) => <li key={note} className="flex gap-3 text-sm leading-6 text-slate-600"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-700" />{note}</li>)}</ul>
                {study.proofStatus === "VERIFIED" && study.proofUrl ? <a href={study.proofUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-black text-green-700">Open proof source <ExternalLink className="h-4 w-4" /></a> : null}
              </div>
              <div className="rounded-[1.75rem] bg-[#07110c] p-7 text-white">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-green-400">Deliverables</p>
                <ul className="mt-5 space-y-3">{study.deliverables.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-400" />{item}</li>)}</ul>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-20">
        <Container>
          <div className="max-w-3xl"><span className="brand-eyebrow">Related service guides</span><h2 className="mt-5 text-4xl font-black text-slate-950">Understand the scope behind the story.</h2></div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">{services.map((service) => service ? <Link key={service.slug} href={`/services/${service.slug}`} className="group rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-green-300"><p className="text-xs font-black uppercase tracking-[0.16em] text-green-700">{service.marketplaceCategory}</p><h3 className="mt-2 text-2xl font-black text-slate-950">{service.title}</h3><span className="mt-5 inline-flex items-center gap-2 font-black text-green-700">Open buyer guide <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span></Link> : null)}</div>
        </Container>
      </section>

      <section className="bg-green-600 py-20 text-white"><Container><div className="mx-auto max-w-4xl text-center"><h2 className="text-4xl font-black sm:text-5xl">Want a plan shaped around your own evidence and goals?</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-green-50">Share the context and we will define the scope, responsibilities, proof points, and commercial model before delivery begins.</p><Link href="/proposal" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-black text-green-700">Request a scoped proposal <ArrowRight className="h-4 w-4" /></Link></div></Container></section>
    </main>
  );
}
