import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Clapperboard,
  Code2,
  Palette,
  TrendingUp,
} from "lucide-react";
import Container from "@/app/components/ui/Container";
import { studios } from "@/app/data/studios";

const icons = {
  technology: Code2,
  creative: Palette,
  growth: TrendingUp,
  video: Clapperboard,
  support: BriefcaseBusiness,
};

export default function ExpertStudios() {
  return (
    <section className="premium-noise relative overflow-hidden bg-[#07110c] py-20 text-white sm:py-24 lg:py-28">
      <div aria-hidden="true" className="premium-grid absolute inset-0 opacity-55" />
      <div aria-hidden="true" className="absolute left-1/2 top-0 h-80 w-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-400/15 blur-3xl" />
      <Container>
        <div className="relative">
          <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <span className="inline-flex rounded-full border border-green-300/20 bg-green-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-green-300">
                Five expert studios. One accountable team.
              </span>
              <h2 className="text-balance mt-6 text-4xl font-black leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                Assemble the capabilities your project actually needs.
              </h2>
            </div>
            <div className="lg:pb-2">
              <p className="max-w-2xl text-lg leading-8 text-slate-300 lg:ml-auto">
                Instead of hiring disconnected freelancers, work with a coordinated squad drawn from strategy, creative, technology, growth, video, and operations.
              </p>
              <Link href="/experts" className="mt-6 inline-flex items-center gap-2 font-black text-green-300 transition hover:text-green-200">
                Meet the expert network <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {studios.map((studio) => {
              const Icon = icons[studio.id];
              return (
                <article key={studio.id} className="group relative min-h-[25rem] overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-6 transition duration-500 hover:-translate-y-2 hover:border-green-300/35 hover:bg-white/[0.07]">
                  <div aria-hidden="true" className={`absolute inset-0 bg-gradient-to-br ${studio.accent} opacity-70`} />
                  <div className="relative flex h-full flex-col">
                    <div className="flex items-start justify-between">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-slate-950/60 text-green-300">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-mono text-xs font-black tracking-[0.18em] text-slate-600">{studio.number}</span>
                    </div>
                    <p className="mt-8 text-[0.65rem] font-black uppercase tracking-[0.18em] text-green-300">{studio.shortName}</p>
                    <h3 className="mt-2 text-2xl font-black leading-tight">{studio.name}</h3>
                    <p className="mt-4 text-sm leading-6 text-slate-400">{studio.description}</p>
                    <ul className="mt-6 space-y-2 text-xs font-bold text-slate-300">
                      {studio.services.slice(0, 3).map((service) => <li key={service}>— {service}</li>)}
                    </ul>
                    <Link href={studio.route} className="mt-auto flex items-center justify-between border-t border-white/10 pt-5 text-sm font-black text-white">
                      Explore studio
                      <span className="grid h-9 w-9 place-items-center rounded-full border border-white/10 transition group-hover:rotate-45 group-hover:bg-green-300 group-hover:text-slate-950"><ArrowRight className="h-4 w-4" /></span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
