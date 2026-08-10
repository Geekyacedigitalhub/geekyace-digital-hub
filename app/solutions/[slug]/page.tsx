import { notFound } from "next/navigation";

import MainLayout from "../../layouts/MainLayout";
import Container from "../../components/ui/Container";
import Button from "../../components/Button";

import { industries } from "@/app/data/industries";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }));
}

export default async function IndustryPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const industry = industries.find(
    (item) => item.slug === slug
  );

  if (!industry) {
    notFound();
  }

  return (
    <MainLayout>
      {/* Hero */}

      <section className="bg-gradient-to-br from-green-50 via-white to-green-100 py-24">
        <Container>
          <div className="max-w-4xl">
            <div className="text-6xl">
              {industry.icon}
            </div>

            <h1 className="mt-6 text-5xl font-bold text-gray-900">
              {industry.name} Solutions
            </h1>

            <p className="mt-6 text-xl leading-9 text-gray-600">
              {industry.description}
            </p>
          </div>
        </Container>
      </section>

      {/* Challenges */}

      <section className="py-24">
        <Container>
          <h2 className="mb-10 text-4xl font-bold">
            Industry Challenges
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {industry.challenges.map((challenge) => (
              <div
                key={challenge}
                className="rounded-2xl border border-gray-200 p-6"
              >
                {challenge}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Solutions */}

      <section className="bg-gray-50 py-24">
        <Container>
          <h2 className="mb-10 text-4xl font-bold">
            Our Solutions
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {industry.solutions.map((solution) => (
              <div
                key={solution}
                className="rounded-2xl bg-white p-6 shadow"
              >
                {solution}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Services */}

      <section className="py-24">
        <Container>
          <h2 className="mb-10 text-4xl font-bold">
            Recommended Services
          </h2>

          <div className="flex flex-wrap gap-4">
            {industry.services.map((service) => (
              <span
                key={service}
                className="rounded-full bg-green-100 px-5 py-3 font-medium text-green-700"
              >
                {service}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}

      <section className="bg-green-600 py-24 text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-5xl font-bold">
              Ready to Transform Your Business?
            </h2>

            <p className="mt-6 text-xl">
              Let&apos;s build a digital solution tailored for your industry.
            </p>

            <div className="mt-10">
              <Button href="/contact">
                Start Your Project
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </MainLayout>
  );
}