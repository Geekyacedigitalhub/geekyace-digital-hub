import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Clapperboard, Code2, Palette, Sparkles, TrendingUp } from "lucide-react";
import Container from "../ui/Container";

const signals = [
  { icon: Code2, label: "Product" },
  { icon: Palette, label: "Creative" },
  { icon: TrendingUp, label: "Growth" },
  { icon: Clapperboard, label: "Motion" },
  { icon: BriefcaseBusiness, label: "Operations" },
];

export default function PlannerTeaser() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div aria-hidden="true" className="absolute left-1/2 top-0 h-72 w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-100/70 blur-3xl" />
      <Container>
        <div className="relative grid overflow-hidden rounded-[2.25rem] border border-slate-200 bg-slate-50 shadow-[0_35px_90px_-42px_rgba(2,8,23,.38)] lg:grid-cols-[1.05fr_0.95fr]">
          <div className="p-8 sm:p-12 lg:p-16">
            <span className="brand-eyebrow"><Sparkles className="h-4 w-4" />AceMatch expert squad builder</span>
            <h2 className="text-balance mt-6 text-4xl font-black leading-tight text-slate-950 sm:text-5xl">Describe the outcome. Get the starting squad.</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">AceMatch turns your goal, audience, stage, timing, budget range, and project context into a recommended studio, delivery path, and reusable buyer brief.</p>
            <Link href="/project-planner" className="group mt-8 inline-flex items-center gap-3 rounded-full bg-green-600 px-7 py-4 font-black text-white shadow-lg shadow-green-600/20 transition hover:-translate-y-1 hover:bg-green-500">Build my squad in 90 seconds <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" /></Link>
          </div>

          <div className="premium-noise relative flex min-h-[420px] items-center justify-center overflow-hidden bg-[#07110c] p-8 sm:p-12">
            <div aria-hidden="true" className="premium-grid absolute inset-0 opacity-70" />
            <div aria-hidden="true" className="absolute h-72 w-72 rounded-full border border-green-400/15" />
            <div aria-hidden="true" className="absolute h-52 w-52 rounded-full border border-green-400/20" />
            <div className="relative grid w-full max-w-md gap-3 sm:grid-cols-2">
              {signals.map((signal, index) => {
                const Icon = signal.icon;
                return <div key={signal.label} className={`glass-panel rounded-2xl p-5 ${index === signals.length - 1 ? "sm:col-span-2" : index % 2 === 0 ? "sm:-translate-y-3" : "sm:translate-y-3"}`}><div className="grid h-11 w-11 place-items-center rounded-xl bg-green-400/10 text-green-400"><Icon className="h-5 w-5" /></div><p className="mt-4 font-black text-white">{signal.label}</p><div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10"><div className="h-full w-full rounded-full bg-gradient-to-r from-green-500 to-green-300" /></div></div>;
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
