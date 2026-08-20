import Container from "@/app/components/ui/Container";
import HeroContent from "./HeroContent";
import HeroDashboard from "./HeroDashboard";

export default function Hero() {
  return (
    <section className="premium-noise relative overflow-hidden bg-[#07110c]">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-[520px] w-[520px] rounded-full bg-green-500/15 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 h-[620px] w-[620px] rounded-full bg-emerald-400/12 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-green-300/5 blur-3xl"
      />

      {/* Subtle grid */}
      <div
        aria-hidden="true"
        className="premium-grid pointer-events-none absolute inset-0 opacity-80"
      />

      <Container>
        <div className="relative grid min-h-[calc(88svh-76px)] items-center gap-12 py-14 sm:py-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:py-20">
          {/* Left side */}
          <HeroContent />

          {/* Right side */}
          <HeroDashboard />
        </div>
      </Container>
    </section>
  );
}
