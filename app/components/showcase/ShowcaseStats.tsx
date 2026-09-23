import { Code2, Layers3, LockKeyhole, Sparkles } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const stats = [
  { value: "10+", label: "Portfolio projects", description: "Public and private builds represented as case studies.", icon: Layers3 },
  { value: "6+", label: "Solution areas", description: "Full-stack, Shopify, AI, SaaS, tooling, and web products.", icon: Code2 },
  { value: "20+", label: "Technologies", description: "Modern frontend, backend, data, cloud, and AI tooling.", icon: Sparkles },
  { value: "Private", label: "Active products", description: "Selected products remain protected while in active development.", icon: LockKeyhole },
];

export default function ShowcaseStats() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24">
      <Container>
        <SectionHeading title="What the portfolio covers" description="A structured view of the technologies and product categories represented across the GeekyAce development portfolio." />
        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return <div key={stat.label} className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-green-300 hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-700"><Icon size={23} /></div>
              <p className="mt-7 text-4xl font-black text-slate-950">{stat.value}</p>
              <h3 className="mt-2 text-lg font-bold text-slate-900">{stat.label}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{stat.description}</p>
            </div>;
          })}
        </div>
      </Container>
    </section>
  );
}