import { ArrowUpRight, Sparkles } from "lucide-react";
import Button from "../Button";
import Container from "./Container";

interface CTASectionProps {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTASection({ title, description, primaryLabel = "Start Your Project", primaryHref = "/contact", secondaryLabel = "Try Project Planner", secondaryHref = "/project-planner" }: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      <Container>
        <div className="premium-noise relative overflow-hidden rounded-[2.25rem] bg-[#07110c] px-6 py-16 text-center text-white shadow-[0_35px_90px_-35px_rgba(2,8,23,.65)] sm:px-12 lg:py-20">
          <div aria-hidden="true" className="premium-grid absolute inset-0 opacity-70" />
          <div aria-hidden="true" className="absolute left-1/2 top-0 h-[360px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500/25 blur-3xl" />
          <div className="relative mx-auto max-w-4xl">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-green-400"><Sparkles className="h-4 w-4" />Build what comes next</span>
            <h2 className="text-balance mt-5 text-3xl font-black leading-tight sm:text-5xl lg:text-6xl">{title}</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">{description}</p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href={primaryHref} size="lg" className="rounded-full">{primaryLabel}<ArrowUpRight className="ml-2 h-5 w-5" /></Button>
              <Button href={secondaryHref} variant="outline" size="lg" className="rounded-full border-white/20 text-white hover:border-green-400 hover:bg-white/10 hover:text-green-300">{secondaryLabel}</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
