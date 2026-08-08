import dynamic from "next/dynamic";

import Hero from "@/app/components/home/Hero";
import TrustedCompanies from "@/app/components/home/TrustedCompanies";

const Services = dynamic(
  () => import("@/app/components/home/Services"),
  {
    loading: () => null,
  }
);

const WhyChooseUs = dynamic(
  () => import("@/app/components/home/WhyChooseUs"),
  {
    loading: () => null,
  }
);

const Process = dynamic(
  () => import("@/app/components/home/Process"),
  {
    loading: () => null,
  }
);

const TechStack = dynamic(
  () => import("@/app/components/home/TechStack"),
  {
    loading: () => null,
  }
);

const FeaturedCaseStudies = dynamic(
  () => import("@/app/components/home/FeaturedCaseStudies"),
  {
    loading: () => null,
  }
);

const Testimonials = dynamic(
  () => import("@/app/components/home/Testimonials"),
  {
    loading: () => null,
  }
);

const FinalCTA = dynamic(
  () => import("@/app/components/home/FinalCTA"),
  {
    loading: () => null,
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