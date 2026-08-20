import Link from "next/link";
import { ArrowRight, CheckCircle2, FileCheck2, LockKeyhole, MessagesSquare, ShieldCheck } from "lucide-react";
import Container from "@/app/components/ui/Container";

const commitments = [
  { icon: FileCheck2, title: "Scope before work", copy: "Deliverables, milestones, responsibilities, and acceptance criteria are made clear before delivery begins." },
  { icon: MessagesSquare, title: "Visible progress", copy: "You know what is being worked on, what needs your input, and what comes next." },
  { icon: LockKeyhole, title: "Confidential by design", copy: "Project information and access are handled only for the agreed work and shared on a need-to-know basis." },
  { icon: ShieldCheck, title: "Ownership made clear", copy: "Handover, source files, credentials, and usage rights are documented for the engagement." },
];

export default function BuyerConfidence() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="overflow-hidden rounded-[2.25rem] border border-slate-200 bg-white shadow-[0_30px_100px_-55px_rgba(2,8,23,.45)]">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            <div className="premium-noise relative overflow-hidden bg-slate-950 p-8 text-white sm:p-10 lg:p-12">
              <div aria-hidden="true" className="premium-grid absolute inset-0 opacity-60" />
              <div className="relative">
                <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-green-300"><CheckCircle2 className="h-4 w-4" />Buyer confidence</span>
                <h2 className="mt-5 text-4xl font-black leading-tight">Professional delivery should feel clear before it feels impressive.</h2>
                <p className="mt-5 leading-8 text-slate-300">Our process is designed to reduce the uncertainty that makes digital projects difficult to buy.</p>
                <Link href="/trust" className="mt-8 inline-flex items-center gap-2 rounded-full bg-green-400 px-5 py-3 font-black text-slate-950 transition hover:bg-green-300">Review our trust standards <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </div>
            <div className="grid gap-px bg-slate-200 sm:grid-cols-2">
              {commitments.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="bg-white p-7 sm:p-8">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-green-50 text-green-700"><Icon className="h-5 w-5" /></span>
                    <h3 className="mt-6 text-xl font-black text-slate-950">{item.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{item.copy}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
