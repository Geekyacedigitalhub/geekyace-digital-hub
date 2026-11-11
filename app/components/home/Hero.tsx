import Container from "@/app/components/ui/Container";
import HeroContent from "./HeroContent";
import HeroDashboard from "./HeroDashboard";

export default function Hero() {
  return (
    <section className="section-ambient relative overflow-hidden bg-slate-950">
      {/* Animated glass blobs */}
      <div
        aria-hidden="true"
        className="glass-blob animate-blob -left-40 top-20 h-96 w-96 bg-green-500/30"
      />

      <div
        aria-hidden="true"
        className="glass-blob animate-float-slow -right-40 top-10 h-[500px] w-[500px] bg-emerald-400/25"
      />

      <div
        aria-hidden="true"
        className="glass-blob animate-float-reverse bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 bg-teal-400/20"
      />

      <div
        aria-hidden="true"
        className="glass-blob animate-float-slower right-1/3 top-1/2 h-80 w-80 bg-lime-400/15"
      />

      {/* Subtle grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <Container>
        <div className="relative grid items-center gap-14 py-20 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-28">
          {/* Left side */}
          <HeroContent />

          {/* Right side */}
          <HeroDashboard />
        </div>
      </Container>
    </section>
  );
}