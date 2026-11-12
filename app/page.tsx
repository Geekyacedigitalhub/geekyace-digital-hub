import dynamic from "next/dynamic";

import Hero from "@/app/components/home/Hero";
import Marquee from "@/app/components/home/Marquee";
import TrustedCompanies from "@/app/components/home/TrustedCompanies";
import AutoFixConsole from "@/app/components/home/AutoFixConsole";
import Transformation from "@/app/components/home/Transformation";
import MetricsRibbon from "@/app/components/home/MetricsRibbon";
import Lighthouse from "@/app/components/home/Lighthouse";

const SectionLoader = () => (
  <div
    aria-hidden="true"
    className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-6 lg:py-24"
  >
    <div className="mx-auto max-w-3xl animate-pulse text-center">
      <div className="mx-auto h-4 w-28 rounded-full bg-slate-200" />
      <div className="mx-auto mt-6 h-10 max-w-xl rounded-xl bg-slate-200" />
      <div className="mx-auto mt-4 h-5 max-w-2xl rounded-lg bg-slate-100" />
    </div>
  </div>
);

const Services = dynamic(
  () => import("@/app/components/home/Services"),
  {
    loading: () => <SectionLoader />,
  }
);

const WhyChooseUs = dynamic(
  () => import("@/app/components/home/WhyChooseUs"),
  {
    loading: () => <SectionLoader />,
  }
);

const Process = dynamic(
  () => import("@/app/components/home/Process"),
  {
    loading: () => <SectionLoader />,
  }
);

const TechStack = dynamic(
  () => import("@/app/components/home/TechStack"),
  {
    loading: () => <SectionLoader />,
  }
);

const FeaturedReel = dynamic(
  () => import("@/app/components/home/FeaturedReel"),
  {
    loading: () => <SectionLoader />,
  }
);

const TestimonialCarousel = dynamic(
  () => import("@/app/components/home/TestimonialCarousel"),
  {
    loading: () => <SectionLoader />,
  }
);

const BlogTeaser = dynamic(
  () => import("@/app/components/home/BlogTeaser"),
  {
    loading: () => <SectionLoader />,
  }
);
const FinalCTA = dynamic(
  () => import("@/app/components/home/FinalCTA"),
  {
    loading: () => <SectionLoader />,
  }
);

export default function HomePage() {
  return (
    <main>
      <Hero />

      {/* Infinite tech marquee — premium touch under hero */}
      <section className="section-ambient relative border-y border-slate-200/60 bg-gradient-to-b from-white to-slate-50/60">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <Marquee />
        </div>
      </section>

      <div id="solutions"><TrustedCompanies /></div>

      <div id="services"><Services /></div>

      <WhyChooseUs />

      <AutoFixConsole />

      <Transformation />

      <div id="process"><Process /></div>

      <div id="tech"><TechStack /></div>

      <Lighthouse />

      <div id="work">
        <FeaturedReel />
      </div>

      <div id="testimonials"><TestimonialCarousel /></div>

      <MetricsRibbon />

      <BlogTeaser />
      <FinalCTA />
    </main>
  );
}