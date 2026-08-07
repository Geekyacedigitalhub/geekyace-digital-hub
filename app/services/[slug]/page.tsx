import { notFound } from "next/navigation";

import MainLayout from "../../layouts/MainLayout";
import { services } from "../../data/serviceDetails";

import ServiceHero from "../../components/ServiceHero";
import FeatureList from "../../components/FeatureList";
import ProcessTimeline from "../../components/ProcessTimeline";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    notFound();
  }

  return (
    <MainLayout>

      <ServiceHero
        title={service.title}
        subtitle={service.shortDescription}
        description={service.fullDescription}
      />

      <FeatureList
        title="What We Offer"
        items={service.features}
      />

      <FeatureList
        title="Technologies We Use"
        items={service.technologies}
      />

      <ProcessTimeline
        steps={service.process}
      />

    </MainLayout>
  );
}