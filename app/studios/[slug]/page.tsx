import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, BriefcaseBusiness, CheckCircle2, Clapperboard, Code2, Palette, Sparkles, TrendingUp, Users } from "lucide-react";
import Container from "@/app/components/ui/Container";
import { studios, type Studio } from "@/app/data/studios";
import { getStudioPage } from "@/app/data/studioPages";

interface StudioPageProps { params: Promise<{ slug: string }> }

const icons = { technology: Code2, creative: Palette, growth: TrendingUp, video: Clapperboard, support: BriefcaseBusiness };

function getEntry(slug: string) {
  const studio = studios.find((item) => item.id === slug);
  if (!studio) return null;
  const page = getStudioPage(studio.id);
  return page ? { studio, page } : null;
}

export function generateStaticParams() {
  return studios.map((studio) => ({ slug: studio.id }));
}

export async function generateMetadata({ params }: StudioPageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getEntry(slug);
  if (!entry) return { title: "Studio Not Found" };
  return { title: `${entry.studio.name} Studio`, description: entry.page.subheadline };
}

export default async function StudioDetailPage({ params }: StudioPageProps) {
  const { slug } = await params;
  const entry = getEntry(slug);
  if (!entry) notFound();
  const { studio, page } = entry;
  const Icon = icons[studio.id as Studio["id"]];
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL?.trim();
  const bookingHref = bookingUrl?.startsWith("https://") ? bookingUrl : `/contact?studio=${studio.id}&intent=consultation#contact-form`;
  const externalBooking = bookingHref.startsWith("https://");

  return (
    <main className="bg-white">
      <section className="premium-noise relative overflow-hidden bg-[#07110c] py-24 text-white sm:py-28 lg:py-32">
        <div aria-hidden="true" className="premium-grid absolute inset-0 opacity-60" />
        <div aria-hidden="true" className="absolute left-1/2 top-0 h-[34rem] w-[54rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500/20 blur-3xl" />
        <Container>
          <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-green-300/20 bg-green-300/10 px-5 py-2 text-xs font-black uppercase tracking-[0.2em] text-green-300"><Icon className="h-4 w-4" />{studio.number} · {studio.shortName}</span>
              <h1 className="text-balance mt-7 text-5xl font-black leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">{page.headline}</h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">{page.subheadline}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href={`/project-planner?studio=${studio.id}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-green-400 px-7 py-4 font-black text-slate-950 transition hover:-translate-y-1 hover:bg-green-300">Build my squad <ArrowRight className="h-4 w-4" /></Link>
                <a href={bookingHref} target={externalBooking ? "_blank" : undefined} rel={externalBooking ? "noopener noreferrer" : undefined} className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 font-black text-white transition hover:bg-white/10">Request a consultation</a>
              </div>
            </div>
            <div className="glass-panel rounded-[2rem] p-7 sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-green-300">Strong fit for</p>
              <div className="mt-6 space-y-4">{page.idealFor.map((item) => <div key={item} className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-300" /><span className="font-bold text-slate-200">{item}</span></div>)}</div>
              <div className="mt-7 border-t border-white/10 pt-6"><p className="text-sm leading-7 text-slate-400"><strong className="text-white">How pricing works:</strong> scope, timing, complexity, and squad composition are confirmed after discovery. No hidden fixed package is presented as a universal quote.</p></div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24"><Container><div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr]"><div><span className="brand-eyebrow">When this studio helps</span><h2 className="mt-5 text-4xl font-black text-slate-950 sm:text-5xl">Problems buyers usually bring us.</h2><p className="mt-5 leading-8 text-slate-600">A useful engagement starts with the constraint, not a pre-selected tool or deliverable.</p></div><div className="grid gap-4 sm:grid-cols-2">{page.problems.map((problem, index) => <article key={problem} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm"><span className="text-xs font-black text-green-700">0{index + 1}</span><p className="mt-4 text-lg font-black leading-7 text-slate-950">{problem}</p></article>)}</div></div></Container></section>

      <section className="py-20 sm:py-24"><Container><div className="mx-auto max-w-3xl text-center"><span className="brand-eyebrow">Possible deliverables</span><h2 className="mt-5 text-4xl font-black text-slate-950 sm:text-5xl">A scope assembled around the outcome.</h2><p className="mt-5 text-lg leading-8 text-slate-600">Your project may use one capability or combine several. The final deliverable list is written into the agreed scope.</p></div><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{page.deliverables.map((item) => <div key={item} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-green-50 text-green-700"><CheckCircle2 className="h-5 w-5" /></span><span className="font-black text-slate-900">{item}</span></div>)}</div><div className="mt-10 grid gap-4 md:grid-cols-3">{page.outcomes.map((outcome) => <div key={outcome} className="rounded-2xl bg-slate-950 p-6 text-white"><Sparkles className="h-5 w-5 text-green-300" /><p className="mt-4 font-black leading-7">{outcome}</p></div>)}</div></Container></section>

      <section className="bg-[#07110c] py-20 text-white sm:py-24"><Container><div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]"><div><span className="text-xs font-black uppercase tracking-[0.2em] text-green-300">Ways to engage</span><h2 className="mt-5 text-4xl font-black sm:text-5xl">Choose the level of support—not a mystery package.</h2><p className="mt-5 leading-8 text-slate-300">Each model is a starting structure. Deliverables and commercial terms are confirmed in writing.</p></div><div className="grid gap-4 md:grid-cols-3">{page.packages.map((item, index) => <article key={item.name} className={`flex min-h-[28rem] flex-col rounded-[1.75rem] border p-6 ${index === 1 ? "border-green-300/35 bg-green-300/10" : "border-white/10 bg-white/5"}`}><span className="font-mono text-xs font-black text-green-300">0{index + 1}</span><h3 className="mt-6 text-2xl font-black">{item.name}</h3><p className="mt-3 text-sm leading-6 text-slate-400">Best for: {item.bestFor}</p><ul className="mt-7 space-y-3">{item.includes.map((included) => <li key={included} className="flex items-start gap-2 text-sm font-bold text-slate-200"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-300" />{included}</li>)}</ul><div className="mt-auto border-t border-white/10 pt-5"><p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">Typical rhythm</p><p className="mt-2 font-black text-white">{item.timing}</p></div></article>)}</div></div></Container></section>

      <section className="bg-white py-20 sm:py-24"><Container><div className="mx-auto max-w-3xl text-center"><span className="brand-eyebrow">The delivery path</span><h2 className="mt-5 text-4xl font-black text-slate-950 sm:text-5xl">Visible stages and decision points.</h2></div><div className="mt-12 grid gap-4 md:grid-cols-4">{page.phases.map((phase, index) => <article key={phase.title} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6"><span className="grid h-10 w-10 place-items-center rounded-full bg-slate-950 text-sm font-black text-green-300">{index + 1}</span><h3 className="mt-6 text-xl font-black text-slate-950">{phase.title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{phase.description}</p></article>)}</div><div className="mt-12 rounded-[2rem] border border-green-200 bg-green-50 p-7 sm:p-9"><div className="grid gap-7 lg:grid-cols-[0.7fr_1.3fr] lg:items-center"><div><Users className="h-7 w-7 text-green-700" /><h3 className="mt-4 text-2xl font-black text-slate-950">Suggested specialist roles</h3><p className="mt-3 leading-7 text-slate-600">The final squad depends on scope and availability.</p></div><div className="flex flex-wrap gap-3">{page.roles.map((role) => <span key={role} className="rounded-full border border-green-200 bg-white px-4 py-2 text-sm font-black text-green-800">{role}</span>)}</div></div></div></Container></section>

      <section className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24"><Container><div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]"><div><span className="brand-eyebrow">Buyer questions</span><h2 className="mt-5 text-4xl font-black text-slate-950">Useful answers before the first call.</h2></div><div className="space-y-4">{page.faqs.map((faq) => <details key={faq.question} className="group rounded-2xl border border-slate-200 bg-white p-6"><summary className="cursor-pointer list-none pr-8 text-lg font-black text-slate-950">{faq.question}</summary><p className="mt-4 leading-8 text-slate-600">{faq.answer}</p></details>)}</div></div></Container></section>

      <section className="bg-green-600 py-20 text-white"><Container><div className="mx-auto max-w-4xl text-center"><h2 className="text-4xl font-black sm:text-5xl">Bring the outcome. We’ll help shape the scope.</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-green-50">Use AceMatch for a reusable brief or request a consultation for a human review.</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Link href={`/project-planner?studio=${studio.id}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-black text-green-700">Build my squad <ArrowRight className="h-4 w-4" /></Link><a href={bookingHref} target={externalBooking ? "_blank" : undefined} rel={externalBooking ? "noopener noreferrer" : undefined} className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-7 py-4 font-black text-white">Request consultation</a></div></div></Container></section>
    </main>
  );
}
