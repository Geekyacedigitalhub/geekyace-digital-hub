import { notFound } from "next/navigation";

import MainLayout from "../../layouts/MainLayout";
import Container from "../../components/ui/Container";
import Button from "../../components/Button";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles, TriangleAlert } from "lucide-react";

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

      <section className="premium-noise relative overflow-hidden bg-[#07110c] py-24 text-white sm:py-28">
        <div aria-hidden="true" className="premium-grid absolute inset-0 opacity-70" />
        <div aria-hidden="true" className="absolute left-1/2 top-0 h-[520px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500/20 blur-3xl" />
        <Container>
          <div className="relative max-w-4xl">
            <Link href="/solutions" className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 transition hover:text-green-400"><ArrowLeft className="h-4 w-4" />All industry solutions</Link>
            <div className="mt-10 text-6xl">
              {industry.icon}
            </div>

            <h1 className="text-balance mt-6 text-5xl font-black leading-[1.03] text-white sm:text-7xl">
              {industry.name} Solutions
            </h1>

            <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-300">
              {industry.description}
            </p>
            <div className="mt-9 flex flex-wrap gap-3"><Link href="/project-planner" className="inline-flex items-center gap-2 rounded-full bg-green-500 px-7 py-4 font-black text-slate-950 transition hover:-translate-y-1 hover:bg-green-400">Plan a solution <ArrowRight className="h-4 w-4" /></Link><Link href="/showcase" className="rounded-full border border-white/15 bg-white/5 px-7 py-4 font-black text-white transition hover:border-green-400 hover:bg-white/10">See our work</Link></div>
          </div>
        </Container>
      </section>

      {/* Challenges */}

      <section className="relative overflow-hidden bg-white py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start"><div className="lg:sticky lg:top-28"><span className="brand-eyebrow">What gets in the way</span><h2 className="text-balance mt-5 text-4xl font-black text-slate-950 sm:text-5xl">Industry Challenges</h2><p className="mt-5 leading-8 text-slate-600">The right solution starts by understanding where customer experience, operations, or growth is losing momentum.</p></div>

          <div className="grid gap-5 md:grid-cols-2">
            {industry.challenges.map((challenge) => (
              <div
                key={challenge}
                className="premium-card flex items-start gap-4 rounded-[1.75rem] p-6 transition hover:-translate-y-1 hover:border-green-400"
              >
                <TriangleAlert className="mt-0.5 h-5 w-5 shrink-0 text-green-600" /><span className="font-bold leading-7 text-slate-800">{challenge}</span>
              </div>
            ))}
          </div>
          </div>
        </Container>
      </section>

      {/* Solutions */}

      <section className="relative overflow-hidden bg-slate-50 py-24">
        <div aria-hidden="true" className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-green-100/80 blur-3xl" />
        <Container>
          <span className="brand-eyebrow">Designed around the outcome</span>
          <h2 className="mb-10 mt-5 text-4xl font-black text-slate-950 sm:text-5xl">
            Our Solutions
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {industry.solutions.map((solution) => (
              <div
                key={solution}
                className="group flex items-start gap-4 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-green-400 hover:shadow-xl"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" /><span className="font-bold leading-7 text-slate-800">{solution}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Services */}

      <section className="bg-[#07110c] py-24 text-white">
        <Container>
          <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-green-400"><Sparkles className="h-4 w-4" />Connected capabilities</span>
          <h2 className="mb-10 mt-5 text-4xl font-black text-white sm:text-5xl">
            Recommended Services
          </h2>

          <div className="flex flex-wrap gap-4">
            {industry.services.map((service) => (
              <span
                key={service}
                className="rounded-full border border-green-400/20 bg-green-400/10 px-5 py-3 font-bold text-green-300"
              >
                {service}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}

      <section className="relative overflow-hidden bg-white py-24 text-slate-950">
        <Container>
          <div className="premium-card mx-auto max-w-5xl rounded-[2rem] p-8 text-center sm:p-14">
            <h2 className="text-balance text-4xl font-black sm:text-5xl">
              Ready to Transform Your Business?
            </h2>

            <p className="mt-6 text-xl text-slate-600">
              Let&apos;s build a digital solution tailored for your industry.
            </p>

            <div className="mt-10">
              <Button href="/project-planner" size="lg" className="rounded-full">
                Build Your Project Brief
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </MainLayout>
  );
}
