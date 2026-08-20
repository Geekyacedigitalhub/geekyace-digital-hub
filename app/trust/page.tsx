import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, FileCheck2, KeyRound, LockKeyhole, MessagesSquare, Scale, ShieldCheck } from "lucide-react";
import Container from "@/app/components/ui/Container";

export const metadata: Metadata = {
  title: "Trust & Delivery Standards",
  description: "Review how GeekyAce scopes work, communicates progress, handles access, protects confidential information, and prepares project handover.",
};

const standards = [
  { icon: FileCheck2, title: "Clear scope", copy: "We define deliverables, milestones, assumptions, responsibilities, and acceptance points before work begins." },
  { icon: MessagesSquare, title: "Progress communication", copy: "You receive updates at agreed checkpoints, including decisions needed, risks, and the next action." },
  { icon: LockKeyhole, title: "Confidential handling", copy: "Project information is used only for the agreed engagement and shared only with the people who need it." },
  { icon: KeyRound, title: "Controlled access", copy: "We ask for the minimum practical access, avoid sharing credentials in public channels, and support secure handover." },
  { icon: Scale, title: "Ownership clarity", copy: "Usage rights, source files, account ownership, and handover expectations are written into the agreed scope." },
  { icon: ShieldCheck, title: "Platform flexibility", copy: "Work can begin directly or through an agreed marketplace when its contract and payment protection suit the project." },
];

const flow = ["Discovery and fit", "Written scope", "Milestone delivery", "Review and acceptance", "Handover and support"];

export default function TrustPage() {
  return (
    <main className="bg-slate-50">
      <section className="premium-noise relative overflow-hidden bg-[#07110c] py-24 text-white sm:py-28 lg:py-32">
        <div aria-hidden="true" className="premium-grid absolute inset-0 opacity-60" />
        <Container>
          <div className="relative grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-green-300/20 bg-green-300/10 px-5 py-2 text-xs font-black uppercase tracking-[0.2em] text-green-300"><ShieldCheck className="h-4 w-4" />Trust & delivery standards</span>
              <h1 className="text-balance mt-7 text-5xl font-black leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">Know how the work will run before you hire us.</h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">Professional delivery is more than the final design. It is clear scope, accountable communication, responsible access, and a usable handover.</p>
            </div>
            <div className="glass-panel rounded-[2rem] p-7 sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-green-300">What you can expect</p>
              <div className="mt-6 space-y-4">{["No hidden promise presented as a guarantee", "No test project presented as verified client proof", "No unclear handover at the end of delivery"].map((item) => <div key={item} className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-300" /><span className="font-bold text-slate-200">{item}</span></div>)}</div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center"><span className="brand-eyebrow">The working standard</span><h2 className="mt-5 text-4xl font-black text-slate-950 sm:text-5xl">Six commitments that reduce project risk.</h2></div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{standards.map((item) => { const Icon = item.icon; return <article key={item.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-green-50 text-green-700"><Icon className="h-5 w-5" /></span><h3 className="mt-6 text-xl font-black text-slate-950">{item.title}</h3><p className="mt-3 leading-7 text-slate-600">{item.copy}</p></article>; })}</div>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div><span className="brand-eyebrow">Typical engagement flow</span><h2 className="mt-5 text-4xl font-black text-slate-950">A visible path from first call to final handover.</h2><p className="mt-5 leading-8 text-slate-600">The exact process adapts to the project, but responsibility and decision points should always remain visible.</p></div>
            <ol className="grid gap-3 sm:grid-cols-5">{flow.map((item, index) => <li key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-5"><span className="text-xs font-black text-green-700">0{index + 1}</span><p className="mt-3 font-black text-slate-950">{item}</p></li>)}</ol>
          </div>
        </Container>
      </section>

      <section className="bg-slate-950 py-20 text-white"><Container><div className="mx-auto max-w-4xl text-center"><h2 className="text-4xl font-black sm:text-5xl">Start with a brief both sides can understand.</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">AceMatch turns your goal, stage, timing, and budget range into a reusable starting brief.</p><Link href="/project-planner" className="mt-8 inline-flex items-center gap-2 rounded-full bg-green-400 px-7 py-4 font-black text-slate-950 transition hover:bg-green-300">Build my brief <ArrowRight className="h-4 w-4" /></Link></div></Container></section>
    </main>
  );
}
