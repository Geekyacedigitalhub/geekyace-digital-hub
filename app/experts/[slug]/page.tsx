import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, Globe2, Languages, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import Container from "@/app/components/ui/Container";
import { getStudio } from "@/app/data/studios";
import { expertProfiles, getExpertProfile as getSeedExpertProfile, type ExpertProfile } from "@/app/data/v32GrowthOS";
import { prisma } from "@/app/lib/prisma";

type PageProps = { params: Promise<{ slug: string }> };

type PublicExpertRecord = { slug: string | null; name: string; role: string; headline: string | null; studioId: string | null; bio: string; imageUrl: string | null; location: string | null; availability: string; yearsExperience: number | null; skills: string; expertise: string; platforms: string; languages: string | null; portfolioUrl: string | null; published: boolean };
type TeamMemberDelegate = { findFirst(args: unknown): Promise<PublicExpertRecord | null> };
const teamMemberStore = (prisma as unknown as { teamMember: TeamMemberDelegate }).teamMember;
const toList = (value?: string | null) => String(value || "").split(",").map((item) => item.trim()).filter(Boolean);

async function findExpertProfile(slug: string): Promise<ExpertProfile | undefined> {
  const seed = getSeedExpertProfile(slug);
  if (seed) return seed;
  try {
    const member = await teamMemberStore.findFirst({ where: { slug, published: true } });
    if (!member?.slug) return undefined;
    const expertise = toList(member.expertise);
    return {
      slug: member.slug, name: member.name, role: member.role, headline: member.headline || `${member.role} supporting buyer outcomes through the GeekyAce expert network.`, studioId: (["technology", "creative", "growth", "video", "support"].includes(member.studioId || "") ? member.studioId : "support") as ExpertProfile["studioId"], bio: member.bio, imageUrl: member.imageUrl || "/images/logo.png", location: member.location || "Worldwide · Remote", availability: member.availability, yearsExperience: member.yearsExperience || undefined, skills: toList(member.skills), expertise, platforms: toList(member.platforms), languages: toList(member.languages), portfolioUrl: member.portfolioUrl || undefined, buyerFit: expertise.slice(0, 3).map((item) => `Projects that need ${item.toLowerCase()}`), workingStyle: ["Clarify the outcome before delivery begins", "Keep decisions and ownership visible", "Use milestone-based review and feedback"], featured: false,
    };
  } catch { return undefined; }
}

export function generateStaticParams() {
  return expertProfiles.map((profile) => ({ slug: profile.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const profile = await findExpertProfile(slug);
  if (!profile) return { title: "Expert Profile Not Found" };
  return {
    title: `${profile.name} — ${profile.role}`,
    description: profile.headline,
    alternates: { canonical: `/experts/${profile.slug}` },
    openGraph: { title: `${profile.name} — ${profile.role}`, description: profile.headline, images: [profile.imageUrl] },
  };
}

export default async function ExpertProfilePage({ params }: PageProps) {
  const { slug } = await params;
  const profile = await findExpertProfile(slug);
  if (!profile) notFound();
  const studio = getStudio(profile.studioId);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    description: profile.headline,
    image: `https://geekyacedigitalhub.com${profile.imageUrl}`,
    worksFor: { "@type": "Organization", name: "GeekyAce Digital Hub" },
    url: `https://geekyacedigitalhub.com/experts/${profile.slug}`,
  };

  return (
    <main className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <section className="premium-noise relative overflow-hidden bg-[#07110c] py-20 text-white sm:py-24">
        <div aria-hidden="true" className="premium-grid absolute inset-0 opacity-60" />
        <Container>
          <div className="relative">
            <Link href="/experts" className="inline-flex items-center gap-2 text-sm font-black text-slate-300 transition hover:text-green-300"><ArrowLeft className="h-4 w-4" /> Expert network</Link>
            <div className="mt-10 grid items-center gap-10 lg:grid-cols-[.8fr_1.2fr]">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2.25rem] border border-white/10 bg-slate-900 shadow-2xl">
                <Image src={profile.imageUrl} alt={`${profile.name}, ${profile.role} at GeekyAce Digital Hub`} fill priority sizes="(min-width: 1024px) 38vw, 90vw" className="object-cover object-top" />
                <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#07110c] to-transparent" />
                <span className="absolute bottom-6 left-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-950/75 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-green-300 backdrop-blur-xl"><ShieldCheck className="h-4 w-4" /> Founder profile</span>
              </div>
              <div>
                <div className="flex flex-wrap gap-3"><span className="rounded-full border border-green-300/20 bg-green-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-green-300">{studio.name}</span><span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-slate-300">{profile.availability}</span></div>
                <h1 className="mt-7 text-5xl font-black leading-[.95] tracking-[-0.05em] sm:text-7xl">{profile.name}</h1>
                <p className="mt-4 text-2xl font-black text-green-400">{profile.role}</p>
                <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-300">{profile.headline}</p>
                <div className="mt-7 flex flex-wrap gap-3 text-sm text-slate-300"><span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2"><MapPin className="h-4 w-4 text-green-400" />{profile.location}</span><span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2"><Languages className="h-4 w-4 text-green-400" />{profile.languages.join(" · ")}</span></div>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Link href={`/proposal?expert=${profile.slug}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-green-400 px-7 py-4 font-black text-slate-950 transition hover:-translate-y-1 hover:bg-green-300">Request this expertise <ArrowRight className="h-4 w-4" /></Link>{profile.portfolioUrl ? <a href={profile.portfolioUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 font-black text-white transition hover:bg-white/10">View public portfolio <ArrowUpRight className="h-4 w-4" /></a> : null}</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24"><Container><div className="grid gap-12 lg:grid-cols-[1.15fr_.85fr]">
        <div><span className="brand-eyebrow">Professional profile</span><h2 className="mt-5 text-4xl font-black text-slate-950 sm:text-5xl">Leadership shaped around clear outcomes.</h2><p className="mt-6 text-lg leading-8 text-slate-600">{profile.bio}</p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2"><div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-7"><h3 className="font-black text-slate-950">Buyer fit</h3><ul className="mt-5 space-y-3">{profile.buyerFit.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-700" />{item}</li>)}</ul></div><div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-7"><h3 className="font-black text-slate-950">Working style</h3><ul className="mt-5 space-y-3">{profile.workingStyle.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-700" />{item}</li>)}</ul></div></div>
        </div>
        <aside className="space-y-5"><div className="rounded-[1.75rem] bg-[#07110c] p-7 text-white"><h3 className="flex items-center gap-2 font-black"><Sparkles className="h-5 w-5 text-green-400" />Expertise</h3><div className="mt-5 flex flex-wrap gap-2">{profile.expertise.map((item) => <span key={item} className="rounded-full border border-green-400/20 bg-green-400/10 px-3 py-2 text-sm font-bold text-green-300">{item}</span>)}</div></div><div className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm"><h3 className="font-black text-slate-950">Skills and platforms</h3><div className="mt-5 flex flex-wrap gap-2">{[...profile.skills, ...profile.platforms].map((item) => <span key={item} className="rounded-full bg-slate-100 px-3 py-2 text-sm font-bold text-slate-600">{item}</span>)}</div></div><div className="rounded-[1.75rem] border border-green-200 bg-green-50 p-7"><Globe2 className="h-6 w-6 text-green-700" /><h3 className="mt-4 font-black text-slate-950">Built for remote collaboration</h3><p className="mt-2 text-sm leading-6 text-slate-600">Briefs, milestones, decisions, and feedback stay visible through the GeekyAce client workspace.</p></div></aside>
      </div></Container></section>

      <section className="bg-green-600 py-20 text-white"><Container><div className="mx-auto max-w-4xl text-center"><h2 className="text-4xl font-black sm:text-5xl">Build a squad around the goal—not a job title.</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-green-50">AceMatch combines the right studio, roles, phases, and deliverables before the first call.</p><Link href="/project-planner" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-black text-green-700">Build my squad <ArrowRight className="h-4 w-4" /></Link></div></Container></section>
    </main>
  );
}
