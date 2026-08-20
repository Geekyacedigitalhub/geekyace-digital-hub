import dynamic from "next/dynamic";

import Hero from "@/app/components/home/Hero";
import TrustedCompanies from "@/app/components/home/TrustedCompanies";
import PlannerTeaser from "@/app/components/home/PlannerTeaser";
import ExpertStudios from "@/app/components/home/ExpertStudios";
import BuyerConfidence from "@/app/components/home/BuyerConfidence";

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

const FeaturedCaseStudies = dynamic(
  () => import("@/app/components/home/FeaturedCaseStudies"),
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

      <TrustedCompanies />

      <ExpertStudios />

      <PlannerTeaser />

      <Services />

      <WhyChooseUs />

      <Process />

      <FeaturedCaseStudies />

      <BuyerConfidence />

      <TechStack />

      <FinalCTA />
    </main>
  );
}
