import { Sparkles } from "lucide-react";
import Container from "./Container";

interface PageHeroProps {
  badge?: string;
  title: string;
  description: string;
  centered?: boolean;
  children?: React.ReactNode;
}

export default function PageHero({ badge = "GeekyAce Digital Hub", title, description, centered = true, children }: PageHeroProps) {
  return (
    <section className="premium-noise relative overflow-hidden bg-[#07110c] py-24 text-white sm:py-28 lg:py-32">
      <div aria-hidden="true" className="premium-grid absolute inset-0 opacity-70" />
      <div aria-hidden="true" className="absolute left-[15%] top-0 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-green-500/20 blur-3xl" />
      <div aria-hidden="true" className="absolute bottom-0 right-[8%] h-[360px] w-[360px] translate-y-1/2 rounded-full bg-emerald-400/10 blur-3xl" />
      <Container>
        <div className={`relative z-10 ${centered ? "mx-auto max-w-5xl text-center" : "max-w-4xl"}`}>
          <span className="inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-green-300 backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />{badge}
          </span>
          <h1 className="text-balance mt-7 text-4xl font-black leading-[1.02] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">{title}</h1>
          <p className={`${centered ? "mx-auto" : ""} mt-7 max-w-3xl text-base leading-8 text-slate-300 sm:text-xl sm:leading-9`}>{description}</p>
          {children && <div className="mt-10">{children}</div>}
        </div>
      </Container>
    </section>
  );
}
