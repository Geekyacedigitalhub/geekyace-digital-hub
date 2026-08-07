import Hero from "@/app/components/home/Hero";
import TrustedCompanies from "@/app/components/home/TrustedCompanies";
import Services from "@/app/components/home/Services";
import WhyChooseUs from "@/app/components/home/WhyChooseUs";
import Process from "@/app/components/home/Process";
import TechStack from "@/app/components/home/TechStack";
import FeaturedCaseStudies from "@/app/components/home/FeaturedCaseStudies";
import Testimonials from "@/app/components/home/Testimonials";
import FinalCTA from "@/app/components/home/FinalCTA";

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