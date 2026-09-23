import { ArrowRight, CheckCircle2, Code2, LockKeyhole, Rocket } from "lucide-react";
import Link from "next/link";

const proofPoints = [
  {
    icon: Code2,
    title: "Production-minded engineering",
    text: "Projects are presented around architecture, features, technologies, and the business problem being solved.",
  },
  {
    icon: Rocket,
    title: "Built for real workflows",
    text: "The portfolio includes SaaS, Shopify, AI, commerce intelligence, finance, and developer tooling projects.",
  },
  {
    icon: LockKeyhole,
    title: "Private work stays private",
    text: "Private repositories are represented as case studies without exposing source code or protected implementation details.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-700">Engineering Approach</span>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">Show the work. Explain the work.</h2>
          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            Instead of relying on generic claims, the portfolio is designed to let prospective clients inspect the products, stacks, and problem-solving approach behind the work.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {proofPoints.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-green-300 hover:shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-700"><Icon size={23} /></div>
                <h3 className="mt-6 text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="/showcase" className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-slate-800">
            Inspect the Portfolio <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}