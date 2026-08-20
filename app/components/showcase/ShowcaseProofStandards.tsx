import Link from "next/link";
import { ArrowRight, BadgeCheck, FileCheck2, FlaskConical, ShieldCheck } from "lucide-react";
import Container from "@/app/components/ui/Container";

const proofTypes = [
  { icon: BadgeCheck, title: "Verified client work", copy: "Used only when the project has a valid evidence link and permission to identify the work." },
  { icon: FlaskConical, title: "Capability concept", copy: "A clearly labeled scenario created to demonstrate thinking, design, technology, or delivery capability." },
  { icon: FileCheck2, title: "Result evidence", copy: "Metrics should name the measurement period and evidence source instead of presenting an unsupported number." },
];

export default function ShowcaseProofStandards() {
  return (
    <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <div><span className="brand-eyebrow"><ShieldCheck className="h-4 w-4" />Proof standard</span><h2 className="mt-5 text-3xl font-black text-slate-950 sm:text-4xl">Judge the work by the right label.</h2><p className="mt-4 leading-7 text-slate-600">We separate demonstrated capability from verified client evidence so buyers can evaluate the showcase accurately.</p><Link href="/trust" className="mt-6 inline-flex items-center gap-2 font-black text-green-700">Review our trust standards <ArrowRight className="h-4 w-4" /></Link></div>
          <div className="grid gap-4 md:grid-cols-3">{proofTypes.map((item) => { const Icon = item.icon; return <article key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6"><span className="grid h-11 w-11 place-items-center rounded-xl bg-slate-950 text-green-300"><Icon className="h-5 w-5" /></span><h3 className="mt-5 font-black text-slate-950">{item.title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{item.copy}</p></article>; })}</div>
        </div>
      </Container>
    </section>
  );
}
