import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  CircleHelp,
  Layers3,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import Container from "@/app/components/ui/Container";
import {
  engagementModels,
  getMarketplaceService,
  marketplaceServices,
  type MarketplaceService,
} from "@/app/data/serviceMarketplace";
import { getServiceBuyerGuide } from "@/app/data/serviceBuyerGuides";
import { getStudio } from "@/app/data/studios";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

function getFaqs(service: MarketplaceService) {
  const specificFaqs = getServiceBuyerGuide(service.slug)?.faqs;
  if (specificFaqs?.length) return specificFaqs;

  return [
    {
      question: `What should I provide before ${service.shortTitle.toLowerCase()} work begins?`,
      answer: "Share the business goal, intended audience, current materials, preferred platforms, known constraints, examples, and the person responsible for consolidated feedback. Discovery will identify anything still missing.",
    },
    {
      question: "How are timing and cost confirmed?",
      answer: "They are confirmed only after the scope identifies deliverables, dependencies, review rounds, responsibilities, third-party costs, and the specialist availability required for the work.",
    },
    {
      question: "Can this service be combined with another GeekyAce studio?",
      answer: "Yes. Cross-discipline work is coordinated through one brief and delivery plan so product, creative, growth, motion, and operational tasks do not become disconnected projects.",
    },
    {
      question: "What will we receive at handover?",
      answer: "The agreed scope lists every source file, export, credential responsibility, instruction, training item, and post-delivery support boundary before work begins.",
    },
  ];
}

function getBriefQuestions(service: MarketplaceService) {
  const specificQuestions = getServiceBuyerGuide(service.slug)?.questions;
  if (specificQuestions?.length) return specificQuestions;

  return [
    `What business or user outcome should ${service.shortTitle.toLowerCase()} support?`,
    "Who is the intended audience and what should they understand or do?",
    "Which source materials, systems, examples, and constraints already exist?",
    "Who approves the work, and how should feedback and revisions be consolidated?",
  ];
}

export function generateStaticParams() {
  return marketplaceServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getMarketplaceService(slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} Services`,
    description: `${service.summary} ${service.outcome}`,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} | GeekyAce Digital Hub`,
      description: service.summary,
      url: `/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getMarketplaceService(slug);
  if (!service) notFound();

  const studio = getStudio(service.studioId);
  const faqs = getFaqs(service);
  const briefQuestions = getBriefQuestions(service);
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    serviceType: service.marketplaceCategory,
    provider: {
      "@type": "Organization",
      name: "GeekyAce Digital Hub",
      url: "https://geekyacedigitalhub.com",
    },
    areaServed: "Worldwide",
    url: `https://geekyacedigitalhub.com/services/${service.slug}`,
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }} />

      <section className="premium-noise relative overflow-hidden bg-[#07110c] pb-24 pt-16 text-white sm:pb-28 sm:pt-20">
        <div aria-hidden="true" className="premium-grid absolute inset-0 opacity-70" />
        <div aria-hidden="true" className="absolute -right-40 top-0 h-[520px] w-[520px] rounded-full bg-green-500/18 blur-3xl" />
        <Container>
          <div className="relative">
            <Link href="/services#service-marketplace" className="inline-flex items-center gap-2 text-sm font-black text-slate-400 transition hover:text-green-300">
              <ArrowLeft className="h-4 w-4" />
              Service marketplace
            </Link>

            <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full border border-green-300/20 bg-green-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-green-300">{studio.shortName}</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-slate-300">{service.marketplaceCategory}</span>
                </div>
                <h1 className="text-balance mt-6 text-5xl font-black leading-[0.98] sm:text-6xl lg:text-7xl">{service.title}</h1>
                <p className="mt-7 max-w-3xl text-xl leading-9 text-slate-300">{service.summary}</p>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-green-300">Intended outcome</p>
                <p className="mt-4 text-xl font-black leading-8 text-white">{service.outcome}</p>
                <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  <Link href={`/project-planner?studio=${service.studioId}&service=${service.slug}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-green-400 px-5 py-3.5 text-sm font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-green-300">
                    Match my squad
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href={`/contact?service=${encodeURIComponent(service.title)}#contact-form`} className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3.5 text-sm font-black text-white transition hover:border-green-300/40 hover:bg-green-300/10">
                    Request scope
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-12 grid gap-3 sm:grid-cols-3">
              {[
                { label: "Studio ownership", value: studio.name },
                { label: "Commercial approach", value: "Scoped after brief" },
                { label: "Delivery options", value: `${service.engagements.length} engagement models` },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                  <p className="text-[11px] font-black uppercase tracking-[0.15em] text-slate-500">{item.label}</p>
                  <p className="mt-2 font-black text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <span className="brand-eyebrow">
                <Target className="h-4 w-4" />
                Buyer fit
              </span>
              <h2 className="text-balance mt-5 text-4xl font-black leading-tight text-slate-950 sm:text-5xl">Is this the right starting service?</h2>
              <p className="mt-5 leading-8 text-slate-600">The final scope can narrow this service or combine it with another studio when the outcome crosses categories.</p>
              <Link href={studio.route} className="mt-7 inline-flex items-center gap-2 font-black text-green-700 hover:text-green-900">
                Explore {studio.name}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {service.idealFor.map((item, index) => (
                <article key={item} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-green-100 font-mono text-xs font-black text-green-800">0{index + 1}</span>
                  <p className="mt-5 text-lg font-black leading-7 text-slate-950">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="brand-eyebrow">
              <CircleHelp className="h-4 w-4" />
              Before scope
            </span>
            <h2 className="text-balance mt-5 text-4xl font-black text-slate-950 sm:text-5xl">Questions a professional brief should answer.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {briefQuestions.map((question, index) => (
              <article key={question} className="rounded-[1.75rem] border border-slate-200 p-7 sm:p-8">
                <span className="font-mono text-xs font-black text-green-700">0{index + 1}</span>
                <p className="mt-5 text-xl font-black leading-8 text-slate-950">{question}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <span className="brand-eyebrow">
                <PackageCheck className="h-4 w-4" />
                Handover-ready
              </span>
              <h2 className="mt-5 text-4xl font-black text-slate-950">Possible project deliverables.</h2>
              <p className="mt-5 leading-8 text-slate-600">The final list is selected and written into the agreed scope. Marketplace labels never silently add or remove work.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {service.deliverables.map((item) => (
                <div key={item} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-green-100 text-green-700"><CheckCircle2 className="h-5 w-5" /></span>
                  <span className="font-black text-slate-900">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="premium-noise relative overflow-hidden bg-[#07110c] py-20 text-white sm:py-24">
        <div aria-hidden="true" className="premium-grid absolute inset-0 opacity-60" />
        <Container>
          <div className="relative grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-green-300"><Users className="h-4 w-4" />Squad architecture</span>
              <h2 className="mt-5 text-4xl font-black sm:text-5xl">Specialists matched to the scope—not just the category.</h2>
              <p className="mt-5 leading-8 text-slate-300">These are the typical starting roles. AceMatch and discovery determine the actual team based on complexity, timing, and available expertise.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {service.specialistRoles.map((role, index) => (
                <article key={role} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                  <span className="font-mono text-xs font-black text-green-300">0{index + 1}</span>
                  <h3 className="mt-5 text-xl font-black leading-7 text-white">{role}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">Named expert and availability confirmed after scope review.</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="brand-eyebrow"><Layers3 className="h-4 w-4" />Delivery path</span>
            <h2 className="mt-5 text-4xl font-black text-slate-950 sm:text-5xl">A visible process from uncertainty to handover.</h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-5">
            {service.process.map((step, index) => (
              <article key={step} className="relative rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                <span className="font-mono text-xs font-black text-green-700">0{index + 1}</span>
                <h3 className="mt-5 text-xl font-black text-slate-950">{step}</h3>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="brand-eyebrow"><ShieldCheck className="h-4 w-4" />Engagement options</span>
            <h2 className="mt-5 text-4xl font-black text-slate-950 sm:text-5xl">Start at the level of certainty you have.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {service.engagements.map((model, index) => {
              const engagement = engagementModels[model];
              return (
                <article key={model} className={`rounded-[1.75rem] border p-7 ${index === 1 ? "border-green-300 bg-green-50 shadow-lg shadow-green-900/5" : "border-slate-200 bg-white"}`}>
                  <span className="font-mono text-xs font-black text-green-700">0{index + 1}</span>
                  <h3 className="mt-6 text-2xl font-black text-slate-950">{engagement.title}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{engagement.description}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <span className="brand-eyebrow">Service FAQ</span>
              <h2 className="mt-5 text-4xl font-black text-slate-950">Know what to clarify before hiring.</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 open:bg-white open:shadow-lg open:shadow-slate-900/5">
                  <summary className="cursor-pointer list-none text-lg font-black text-slate-950">{faq.question}</summary>
                  <p className="mt-4 leading-8 text-slate-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-green-600 py-20 text-white">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <Sparkles className="mx-auto h-7 w-7" />
            <h2 className="mt-5 text-4xl font-black sm:text-5xl">Turn {service.shortTitle.toLowerCase()} into a clear buyer brief.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-green-50">AceMatch will carry this service into the questionnaire and recommend the starting squad, phases, and scope conversation.</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href={`/project-planner?studio=${service.studioId}&service=${service.slug}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-black text-green-700">
                Build my squad
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/services#service-marketplace" className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-7 py-4 font-black text-white">Compare services</Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
