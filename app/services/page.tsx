import PageHero from "../components/ui/PageHero";
import CTASection from "../components/ui/CTASection";
import Container from "../components/ui/Container";

import ServicesPreview from "../components/home/ServicesPreview";

import {
  Search,
  PenTool,
  Code2,
  Rocket,
} from "lucide-react";

const process = [
  {
    icon: Search,
    title: "Discover",
    description:
      "We learn about your business, audience and objectives before writing a single line of code.",
  },
  {
    icon: PenTool,
    title: "Design",
    description:
      "We create intuitive user experiences and modern interfaces tailored to your brand.",
  },
  {
    icon: Code2,
    title: "Develop",
    description:
      "Using modern technologies, we build secure, scalable and high-performing digital products.",
  },
  {
    icon: Rocket,
    title: "Launch",
    description:
      "We deploy, optimize and continue supporting your project as your business grows.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        badge="Geekyace Digital Hub"
        title="Digital Solutions Built Around Your Business"
        description="We help startups, businesses and organizations build modern websites, AI solutions, mobile applications, automation systems and digital experiences that create measurable results."
      />

      {/* Services */}
      <section className="py-24">
        <Container>
          <ServicesPreview />
        </Container>
      </section>

      {/* Process */}
      <section className="bg-gray-50 py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
              Our Process
            </span>

            <h2 className="mt-6 text-5xl font-extrabold tracking-tight text-gray-900">
              How We Bring Ideas to Life
            </h2>

            <p className="mt-6 text-xl leading-8 text-gray-600">
              Every successful project follows a proven process that keeps
              communication clear and development moving forward.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {process.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-700">
                    <Icon size={30} aria-hidden="true" />
                  </div>

                  <span className="mt-6 block text-sm font-semibold uppercase tracking-widest text-green-600">
                    Step {index + 1}
                  </span>

                  <h3 className="mt-2 text-2xl font-bold text-gray-900">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-8 text-gray-600">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Start Your Project?"
        description="Whether you need a website, AI solution, mobile application or business automation system, Geekyace Digital Hub is ready to help transform your ideas into reality."
      />
    </>
  );
}