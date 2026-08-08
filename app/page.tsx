import dynamic from "next/dynamic";

import Hero from "@/app/components/home/Hero";
import TrustedCompanies from "@/app/components/home/TrustedCompanies";

const Services = dynamic(
  () => import("@/app/components/home/Services"),
  {
    loading: () => (
      <section className="h-96 animate-pulse bg-white" />
    ),
  }
);

const WhyChooseUs = dynamic(
  () => import("@/app/components/home/WhyChooseUs"),
  {
    loading: () => (
      <section className="h-96 animate-pulse bg-slate-50" />
    ),
  }
);

const Process = dynamic(
  () => import("@/app/components/home/Process"),
  {
    loading: () => (
      <section className="h-96 animate-pulse bg-white" />
    ),
  }
);

const TechStack = dynamic(
  () => import("@/app/components/home/TechStack"),
  {
    loading: () => (
      <section className="h-80 animate-pulse bg-slate-50" />
    ),
  }
);

const FeaturedCaseStudies = dynamic(
  () => import("@/app/components/home/FeaturedCaseStudies"),
  {
    loading: () => (
      <section className="h-[700px] animate-pulse bg-white" />
    ),
  }
);

const Testimonials = dynamic(
  () => import("@/app/components/home/Testimonials"),
  {
    loading: () => (
      <section className="h-80 animate-pulse bg-slate-50" />
    ),
  }
);

const FinalCTA = dynamic(
  () => import("@/app/components/home/FinalCTA"),
  {
    loading: () => (
      <section className="h-72 animate-pulse bg-green-50" />
    ),
  }
);

export default function HomePage() {
  return (
    <main>
      <Hero />

      <TrustedCompanies />

      <Services />

      <WhyChooseUs />

      <Process />

      <TechStack />

      <FeaturedCaseStudies />

      <Testimonials />

      <FinalCTA />
    </main>
  );
}