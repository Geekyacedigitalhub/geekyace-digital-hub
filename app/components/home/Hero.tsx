import Container from "@/app/components/ui/Container";
import HeroContent from "./HeroContent";
import HeroDashboard from "./HeroDashboard";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 lg:py-32">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-violet-600/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
    </div>

      <Container>
        <div className="relative grid items-center gap-16 lg:grid-cols-2">
          {/* Left Side */}
          <HeroContent />

          {/* Right Side */}
          <HeroDashboard />
        </div>
      </Container>
    </section>
  );
}