import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Cpu,
  Crown,
  ExternalLink,
  Globe2,
  Layers3,
  Lightbulb,
  Mail,
  MessageSquare,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
  FaYoutube,
  FaPinterestP,
  FaReddit,
  FaTelegramPlane,
  FaWhatsapp,
  FaDiscord,
  FaGithub,
  FaGitlab,
  FaBehance,
  FaDribbble,
  FaMedium,
  FaSnapchatGhost,
} from "react-icons/fa";
import { FaXTwitter, FaThreads } from "react-icons/fa6";

import PublicTeamRoster from "@/app/components/about/PublicTeamRoster";
import { publicLinks } from "@/app/lib/publicLinks";

export const metadata: Metadata = {
  title: "About GeekyAce",
  description: "Learn how GeekyAce Digital Hub combines specialist expertise, coordinated delivery, and practical technology around business goals.",
};

const values = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We believe strong digital partnerships are built on honesty, transparency, accountability, and doing what is right for every project.",
  },
  {
    number: "02",
    icon: Target,
    title: "Innovation",
    description:
      "We continuously explore better technologies, smarter processes, and creative approaches that help businesses move forward.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Quality",
    description:
      "Every solution should be purposeful, polished, reliable, and built with attention to the details that matter.",
  },
  {
    number: "04",
    icon: Users,
    title: "Collaboration",
    description:
      "We work closely with clients and partners so every solution reflects real needs rather than assumptions.",
  },
];

const experienceStats = [
  {
    value: "5",
    label: "Expert Studios",
    description: "Coordinated around each brief",
    icon: Layers3,
  },
  {
    value: "Multi-skill",
    label: "Squad Model",
    description: "Specialists selected for the outcome",
    icon: Cpu,
  },
  {
    value: "Global-ready",
    label: "Digital Delivery",
    description: "Remote collaboration across time zones",
    icon: Globe2,
  },
  {
    value: "Clear",
    label: "Handover",
    description: "Ownership and next steps documented",
    icon: Target,
  },
];

const technologies = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Modern websites and web applications designed for performance, usability, and growth.",
  },
  {
    icon: Bot,
    title: "AI Solutions",
    description:
      "Practical AI-powered systems that help businesses automate work and create better experiences.",
  },
  {
    icon: Workflow,
    title: "Business Automation",
    description:
      "Connected workflows that reduce repetitive tasks and make business operations more efficient.",
  },
  {
    icon: Rocket,
    title: "Digital Products",
    description:
      "Purpose-driven digital products and experiences built around specific business opportunities.",
  },
  {
    icon: MessageSquare,
    title: "Digital Experiences",
    description:
      "Professional interfaces and customer experiences that communicate clearly and build trust.",
  },
  {
    icon: Zap,
    title: "Technology Integration",
    description:
      "Smart connections between platforms, tools, services, and business systems.",
  },
];

const workingPrinciples = [
  {
    icon: MessageSquare,
    title: "We Listen First",
    description:
      "Every project begins by understanding your idea, business, challenges, audience, and goals.",
  },
  {
    icon: Lightbulb,
    title: "We Think Strategically",
    description:
      "We identify the right technology and approach instead of simply building for the sake of building.",
  },
  {
    icon: Code2,
    title: "We Build Carefully",
    description:
      "We focus on clean execution, practical functionality, professional design, and long-term usability.",
  },
];

const teamApproach = [
  {
    icon: Users,
    title: "Collaborative Team",
    description:
      "Different skills and perspectives come together to help each project move forward.",
  },
  {
    icon: Target,
    title: "Purpose-Driven",
    description:
      "We keep the client's objectives at the center of our decisions throughout the project.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Client Partnership",
    description:
      "We aim to become a reliable technology partner rather than simply another service provider.",
  },
];

const founderCapabilities = [
  "Digital Technology",
  "Web Development",
  "AI Solutions",
  "Business Automation",
  "Digital Entrepreneurship",
  "Creative Technology",
];

/* =========================================================
   SOCIAL MEDIA & PROFESSIONAL NETWORKS
   ========================================================= */

const socialPlatforms = [
  {
    name: "Facebook",
    category: "Social Media",
    description:
      "Follow GeekyAce Digital Hub for updates, projects, announcements, and business content.",
    url: "https://www.facebook.com/geekyacedigitalhub",
    icon: FaFacebook,
  },
  {
    name: "Instagram",
    category: "Social Media",
    description:
      "Explore GeekyAce Digital Hub's creative work, projects, digital services, and visual updates.",
    url: "https://www.instagram.com/geekyacedigitalhub/",
    icon: FaInstagram,
  },
  {
    name: "TikTok",
    category: "Social Media",
    description:
      "Watch short-form technology, business, digital, and creative content.",
    url: "https://www.tiktok.com/@geekyacedigitalhub",
    icon: FaTiktok,
  },
  {
    name: "LinkedIn",
    category: "Professional Network",
    description:
      "Connect with GeekyAce Digital Hub professionally and follow company updates.",
    url: "https://www.linkedin.com/company/geekyace-digital-hub",
    icon: FaLinkedinIn,
  },
  {
    name: "X",
    category: "Social Media",
    description:
      "Follow GeekyAce Digital Hub for technology updates, announcements, and insights.",
    url: "https://x.com/GEEKYACEDIGITAL",
    icon: FaXTwitter,
  },
  {
    name: "YouTube",
    category: "Video Platform",
    description:
      "Watch tutorials, technology content, digital projects, and educational videos.",
    url: "https://www.youtube.com/@geekyacedigitalhub",
    icon: FaYoutube,
  },
  {
    name: "Threads",
    category: "Social Media",
    description:
      "Join the conversation and follow GeekyAce Digital Hub's latest digital updates.",
    url: "https://www.threads.net/@geekyacedigitalhub",
    icon: FaThreads,
  },
  {
    name: "Pinterest",
    category: "Visual Discovery",
    description:
      "Discover our creative ideas, digital designs, inspiration, and projects.",
    url: "https://www.pinterest.com/geekyacedigitalhub/",
    icon: FaPinterestP,
  },
  {
    name: "Reddit",
    category: "Community",
    description:
      "Connect with us through technology and digital communities.",
    url: "https://www.reddit.com/user/geekyacedigitalhub/",
    icon: FaReddit,
  },
  {
    name: "Telegram",
    category: "Community & Messaging",
    description:
      "Connect with GeekyAce Digital Hub and receive updates through Telegram.",
    url: "https://t.me/geekyacedigitalhub",
    icon: FaTelegramPlane,
  },
  {
    name: "WhatsApp",
    category: "Messaging",
    description:
      "Chat directly with GeekyAce Digital Hub about your project or service.",
    url: publicLinks.whatsapp,
    icon: FaWhatsapp,
  },
  {
    name: "Discord",
    category: "Community",
    description: "Connect with our digital and technology community.",
    url: publicLinks.discord,
    icon: FaDiscord,
  },
  {
    name: "GitHub",
    category: "Development",
    description:
      "Explore GeekyAce Digital Hub's development projects, repositories, and technical work.",
    url: "https://github.com/Geekyacedigitalhub",
    icon: FaGithub,
  },
  {
    name: "GitLab",
    category: "Development",
    description: "Explore development repositories, projects, and technical work.",
    url: "https://gitlab.com/geekyacedigitalhub",
    icon: FaGitlab,
  },
  {
    name: "Behance",
    category: "Creative Portfolio",
    description:
      "Explore GeekyAce Digital Hub's creative work, branding, digital designs, and portfolio.",
    url: "https://www.behance.net/geekyacedigital",
    icon: FaBehance,
  },
  {
    name: "Dribbble",
    category: "Design",
    description: "Explore UI, UX, interface designs, and creative digital work.",
    url: "https://dribbble.com/geekyacedigitalhub",
    icon: FaDribbble,
  },
  {
    name: "Medium",
    category: "Articles & Insights",
    description: "Read our technology, business, development, and digital insights.",
    url: "https://medium.com/@geekyacedigitalhub",
    icon: FaMedium,
  },
  {
    name: "Snapchat",
    category: "Social Media",
    description: "Follow GeekyAce Digital Hub for social updates and content.",
    url: "https://www.snapchat.com/add/geekyacedigitalhub",
    icon: FaSnapchatGhost,
  },
];

const configuredSocialPlatforms = socialPlatforms.filter(
  (platform) => platform.url.startsWith("https://") && !platform.url.includes("YOUR_")
);

/* =========================================================
   FREELANCING & PROFESSIONAL MARKETPLACES
   ========================================================= */

const freelancingPlatforms = [
  {
    name: "Fiverr",
    description:
      "Hire GeekyAce Digital Hub for websites, AI, automation, design, and digital services.",
    url: publicLinks.fiverr,
    short: "fi",
  },
  {
    name: "Upwork",
    description:
      "Work with us on professional technology, development, AI, and digital projects.",
    url: publicLinks.upwork,
    short: "up",
  },
  {
    name: "Freelancer",
    description:
      "Find our freelance services and professional project work.",
    url: "https://freelancer.com/u/YOUR_USERNAME",
    short: "fr",
  },
  {
    name: "PeoplePerHour",
    description:
      "Hire us for digital projects, development, design, and professional services.",
    url: "https://peopleperhour.com/freelancer/YOUR_USERNAME",
    short: "pp",
  },
  {
    name: "Guru",
    description:
      "Connect with GeekyAce Digital Hub for professional freelance projects.",
    url: "https://guru.com/freelancers/YOUR_USERNAME",
    short: "gu",
  },
  {
    name: "Contra",
    description:
      "Explore our independent digital services and professional work.",
    url: "https://contra.com/YOUR_USERNAME",
    short: "co",
  },
  {
    name: "Workana",
    description:
      "Connect with us for digital, technology, and creative projects.",
    url: "https://workana.com/freelancer/YOUR_USERNAME",
    short: "wo",
  },
  {
    name: "99designs",
    description:
      "Explore our professional creative and design services.",
    url: "https://99designs.com/profiles/YOUR_USERNAME",
    short: "99",
  },
  {
    name: "DesignCrowd",
    description:
      "Discover our creative, branding, and design services.",
    url: "https://designcrowd.com/profile/YOUR_USERNAME",
    short: "dc",
  },
  {
    name: "Truelancer",
    description:
      "Hire us for digital, technology, development, and creative projects.",
    url: "https://truelancer.com/freelancer/YOUR_USERNAME",
    short: "tr",
  },
  {
    name: "Hubstaff Talent",
    description:
      "Find GeekyAce Digital Hub for remote digital and technology projects.",
    url: "https://talent.hubstaff.com/YOUR_USERNAME",
    short: "ht",
  },
  {
    name: "LinkedIn Services",
    description:
      "Explore our professional digital services and company offerings.",
    url: "https://linkedin.com/services",
    short: "ls",
  },
  {
    name: "Malt",
    description:
      "Connect with us for professional freelance and technology projects.",
    url: "https://malt.com/profile/YOUR_USERNAME",
    short: "ma",
  },
  {
    name: "Toptal",
    description:
      "Professional technology and freelance talent network.",
    url: "https://www.toptal.com",
    short: "to",
  },
  {
    name: "Codeable",
    description:
      "Professional WordPress development and technical services.",
    url: "https://codeable.io",
    short: "cd",
  },
  {
    name: "Gun.io",
    description:
      "Professional software development and engineering network.",
    url: "https://gun.io",
    short: "gi",
  },
  {
    name: "Arc",
    description:
      "Professional remote technology and development network.",
    url: "https://arc.dev",
    short: "ar",
  },
];

const marketplaceDirectoryUrls = new Set([
  "https://linkedin.com/services",
  "https://www.toptal.com",
  "https://codeable.io",
  "https://gun.io",
  "https://arc.dev",
]);

function hasLiveMarketplaceProfile(url: string) {
  return url.startsWith("https://") && !url.includes("YOUR_") && !marketplaceDirectoryUrls.has(url);
}

const networkTones = [
  {
    card: "hover:border-sky-300/45 hover:shadow-[0_26px_80px_-42px_rgba(56,189,248,0.9)]",
    icon: "bg-sky-400/10 text-sky-300 ring-sky-300/20 group-hover:bg-sky-300 group-hover:text-slate-950",
    wash: "from-sky-400/20 via-sky-400/[0.03] to-transparent",
  },
  {
    card: "hover:border-fuchsia-300/45 hover:shadow-[0_26px_80px_-42px_rgba(232,121,249,0.85)]",
    icon: "bg-fuchsia-400/10 text-fuchsia-300 ring-fuchsia-300/20 group-hover:bg-fuchsia-300 group-hover:text-slate-950",
    wash: "from-fuchsia-400/20 via-fuchsia-400/[0.03] to-transparent",
  },
  {
    card: "hover:border-amber-300/45 hover:shadow-[0_26px_80px_-42px_rgba(252,211,77,0.8)]",
    icon: "bg-amber-400/10 text-amber-300 ring-amber-300/20 group-hover:bg-amber-300 group-hover:text-slate-950",
    wash: "from-amber-400/20 via-amber-400/[0.03] to-transparent",
  },
  {
    card: "hover:border-emerald-300/45 hover:shadow-[0_26px_80px_-42px_rgba(52,211,153,0.85)]",
    icon: "bg-emerald-400/10 text-emerald-300 ring-emerald-300/20 group-hover:bg-emerald-300 group-hover:text-slate-950",
    wash: "from-emerald-400/20 via-emerald-400/[0.03] to-transparent",
  },
];

const orbitPositions = [
  "left-1/2 top-3 -translate-x-1/2",
  "right-3 top-1/2 -translate-y-1/2",
  "bottom-3 left-1/2 -translate-x-1/2",
  "left-3 top-1/2 -translate-y-1/2",
];

const engagementPaths = [
  {
    label: "Direct studio partnership",
    title: "Build something ambitious with our full team.",
    description:
      "The clearest route for complete websites, digital products, AI solutions, automation systems, and transformation projects.",
    bestFor: "Products, platforms & transformations",
    cta: "Plan a project",
    href: "/project-planner",
    icon: Rocket,
  },
  {
    label: "Marketplace contract",
    title: "Work through a platform you already trust.",
    description:
      "Choose a familiar freelance marketplace for defined deliverables, protected milestones, and platform-managed contracts.",
    bestFor: "Focused tasks & fixed milestones",
    cta: "Choose a platform",
    href: "#marketplace-directory",
    icon: BriefcaseBusiness,
  },
  {
    label: "Ongoing collaboration",
    title: "Keep a capable digital team within reach.",
    description:
      "Create an ongoing partnership for continuous improvements, technical support, creative production, and growth experiments.",
    bestFor: "Retainers & continuous support",
    cta: "Discuss a partnership",
    href: "/contact",
    icon: Workflow,
  },
];

/* =========================================================
   PAGE
   ========================================================= */

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden bg-slate-50 text-slate-900">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="premium-noise relative order-[-20] overflow-hidden bg-[#07110c] py-24 text-white sm:py-28 lg:py-32">
        <div aria-hidden="true" className="premium-grid absolute inset-0 opacity-70" />
        <div
          aria-hidden="true"
          className="absolute -left-40 top-0 h-[30rem] w-[30rem] rounded-full bg-green-500/15 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-emerald-400/10 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute left-1/2 top-20 h-40 w-40 -translate-x-1/2 rounded-full bg-green-300/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/10 px-5 py-2 text-xs font-black uppercase tracking-[0.18em] text-green-300">
              <Sparkles className="h-4 w-4" />
              About GeekyAce Digital Hub
            </span>

            <h1 className="text-balance mt-7 text-5xl font-black leading-[1.02] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
              We Build Digital Solutions
              <span className="block text-green-600">
                That Move Businesses Forward
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              GeekyAce Digital Hub is a technology and digital solutions
              agency focused on helping individuals, entrepreneurs, startups,
              and businesses turn ideas into useful, professional, and
              scalable digital experiences.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-7 py-4 font-black text-slate-950 shadow-lg shadow-green-500/20 transition hover:-translate-y-1 hover:bg-green-400 hover:shadow-xl"
              >
                Start a Conversation
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 font-black text-white transition hover:-translate-y-1 hover:border-green-300 hover:bg-white/10"
              >
                Explore Our Services
                <ArrowUpRight className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-5 sm:grid-cols-3">
            <div className="glass-panel rounded-2xl p-6 text-center">
              <Code2 className="mx-auto h-6 w-6 text-green-600" />
              <p className="mt-3 font-bold text-white">
                Technology
              </p>
              <p className="mt-1 text-sm text-slate-400">
                Built around real business needs
              </p>
            </div>

            <div className="glass-panel rounded-2xl p-6 text-center">
              <Target className="mx-auto h-6 w-6 text-green-600" />
              <p className="mt-3 font-bold text-white">
                Purpose
              </p>
              <p className="mt-1 text-sm text-slate-400">
                Every solution has a clear goal
              </p>
            </div>

            <div className="glass-panel rounded-2xl p-6 text-center">
              <Rocket className="mx-auto h-6 w-6 text-green-600" />
              <p className="mt-3 font-bold text-white">
                Growth
              </p>
              <p className="mt-1 text-sm text-slate-400">
                Technology designed to move you forward
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          OUR STORY / TECHNOLOGY
      ========================================================= */}
      <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <span className="inline-flex rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-bold text-green-700">
                Who We Are
              </span>

              <h2 className="mt-6 max-w-2xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
                Technology That Solves Real Business Problems
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                GeekyAce Digital Hub exists to make technology more useful,
                approachable, and accessible to businesses and individuals
                looking to grow in a digital world.
              </p>

              <p className="mt-5 max-w-2xl leading-8 text-slate-600">
                We bring together development, creativity, artificial
                intelligence, automation, digital strategy, and problem-solving
                to create solutions that are not only visually professional but
                also useful in the real world.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-green-700">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="font-bold text-slate-900">
                        Practical Solutions
                      </p>
                      <p className="text-sm text-slate-500">
                        Built for real needs
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-green-700">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="font-bold text-slate-900">
                        Modern Technology
                      </p>
                      <p className="text-sm text-slate-500">
                        Designed for today
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/services"
                className="mt-8 inline-flex items-center gap-2 font-bold text-green-700 transition hover:text-green-600"
              >
                Explore what we build
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-green-100/60 blur-2xl" />

              <div className="relative rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
                <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-700">
                      <Code2 className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="font-bold text-slate-900">
                        GeekyAce Digital Hub
                      </p>
                      <p className="text-xs text-slate-500">
                        Digital solutions
                      </p>
                    </div>
                  </div>

                  <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-700">
                    Building
                  </span>
                </div>

                <div className="mt-6 rounded-2xl bg-slate-950 p-6 text-white">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-400">
                    Our Approach
                  </p>

                  <h3 className="mt-4 text-2xl font-black">
                    Ideas → Technology → Results
                  </h3>

                  <p className="mt-3 leading-7 text-slate-300">
                    We transform ideas into digital experiences designed to
                    solve problems, improve operations, and create new
                    opportunities.
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-slate-200 p-5">
                    <p className="text-sm font-bold text-green-600">
                      01
                    </p>
                    <p className="mt-2 font-bold text-slate-900">
                      Understand
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Understand the challenge.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 p-5">
                    <p className="text-sm font-bold text-green-600">
                      02
                    </p>
                    <p className="mt-2 font-bold text-slate-900">
                      Plan
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Choose the right approach.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 p-5">
                    <p className="text-sm font-bold text-green-600">
                      03
                    </p>
                    <p className="mt-2 font-bold text-slate-900">
                      Build
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Turn the plan into reality.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 p-5">
                    <p className="text-sm font-bold text-green-600">
                      04
                    </p>
                    <p className="mt-2 font-bold text-slate-900">
                      Improve
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Refine and move forward.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          VALUES
      ========================================================= */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
              Our Core Values
            </span>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              The Principles Behind Our Work
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The way we work matters just as much as what we build.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-400 hover:shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-700 transition group-hover:bg-green-600 group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="text-sm font-black text-slate-300">
                      {value.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-extrabold text-slate-950">
                    {value.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          EXPERIENCE / STATS
      ========================================================= */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
              Experience That Keeps Growing
            </span>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Built to Keep Learning, Building & Growing
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              GeekyAce Digital Hub continues to expand its capabilities while
              staying focused on useful technology and quality digital
              solutions.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {experienceStats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-slate-200 bg-white p-7 text-center shadow-sm"
                >
                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-700">
                    <Icon className="h-5 w-5" />
                  </div>

                  <p className="mt-5 text-3xl font-black text-green-600">
                    {stat.value}
                  </p>

                  <h3 className="mt-2 font-bold text-slate-900">
                    {stat.label}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {stat.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-7 rounded-2xl border border-green-100 bg-green-50 px-6 py-5 text-center">
            <p className="font-semibold text-green-800">
              Our experience continues to grow because technology never
              stops evolving.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          TECHNOLOGY / CAPABILITIES
      ========================================================= */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
              What We Do
            </span>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Modern Tools. Better Digital Products.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              We combine modern technologies and creative problem-solving to
              deliver digital solutions for different types of businesses.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((technology) => {
              const Icon = technology.icon;

              return (
                <article
                  key={technology.title}
                  className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-400 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-900 transition group-hover:bg-green-600 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-6 text-xl font-extrabold text-slate-950">
                    {technology.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {technology.description}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-green-100 bg-green-50 px-6 py-5 text-center">
            <p className="font-semibold text-green-800">
              Technology changes quickly. Our goal is to keep learning so we
              can keep building better solutions.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOUNDER
      ========================================================= */}
      <section
        id="founder"
        className="relative overflow-hidden border-y border-slate-200 bg-slate-50 py-20 sm:py-24 lg:py-28"
      >
        <div
          aria-hidden="true"
          className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-green-100/60 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-emerald-100/50 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-bold text-green-700">
              <Crown className="h-4 w-4" />
              Meet the Founder
            </span>

            <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              The Person Behind
              <span className="block text-green-600">
                GeekyAce Digital Hub
              </span>
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Building the vision, leading the technology, and creating
              digital solutions that help ideas become reality.
            </p>
          </div>

          <div className="mt-14 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
              <div className="relative overflow-hidden bg-gradient-to-br from-green-700 via-green-600 to-emerald-700 p-8 text-white sm:p-10 lg:p-12">
                <div
                  aria-hidden="true"
                  className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-2xl"
                />

                <div className="relative">
                  <div className="overflow-hidden rounded-[2rem] bg-white/10 p-2 shadow-2xl ring-1 ring-white/20">
                    <div className="relative aspect-square w-full overflow-hidden rounded-[1.5rem] bg-white/10">
                      <Image
                        src="/images/opeyemi-ajose-founder.png"
                        alt="Opeyemi Ajose, Founder and CEO of GeekyAce Digital Hub"
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>

                  <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-bold backdrop-blur-sm">
                    <Crown className="h-4 w-4" />
                    Founder & CEO
                  </div>

                  <h3 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
                    Opeyemi Ajose
                  </h3>

                  <p className="mt-3 text-lg font-semibold text-green-50">
                    Founder & CEO — GeekyAce Digital Hub
                  </p>

                  <p className="mt-6 max-w-md leading-8 text-green-50/90">
                    Digital entrepreneur, developer, technology enthusiast,
                    and the driving force behind the GeekyAce Digital Hub
                    vision.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {founderCapabilities.slice(0, 3).map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-white/10 px-3 py-2 text-sm font-semibold backdrop-blur-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 sm:p-10 lg:p-12">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
                  About Opeyemi
                </p>

                <h3 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                  Building with purpose. Creating with technology.
                </h3>

                <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
                  <p>
                    Opeyemi Ajose is the Founder and CEO of GeekyAce Digital
                    Hub, a digital agency focused on helping individuals,
                    entrepreneurs, startups, and businesses turn ideas into
                    professional digital solutions.
                  </p>

                  <p>
                    Through GeekyAce Digital Hub, he brings together
                    technology, creativity, development, digital services,
                    artificial intelligence, automation, and problem-solving
                    to create practical solutions designed around real
                    business needs.
                  </p>

                  <p>
                    His vision is to build a recognized digital brand that
                    people and businesses can trust whenever they need
                    technology, creativity, and digital solutions.
                  </p>
                </div>

                <div className="mt-10 rounded-3xl border border-green-100 bg-green-50/70 p-6 sm:p-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-600 text-white">
                      <BriefcaseBusiness className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-sm font-bold uppercase tracking-wider text-green-700">
                        Founder&apos;s Message
                      </p>

                      <p className="font-bold text-slate-900">
                        A message from Opeyemi Ajose
                      </p>
                    </div>
                  </div>

                  <blockquote className="mt-5 text-lg font-medium leading-8 text-slate-700">
                    “At GeekyAce Digital Hub, I believe technology should do
                    more than look good — it should solve problems, create
                    opportunities, and move people and businesses forward. My
                    goal is to build a digital brand known for professionalism,
                    creativity, reliability, and meaningful results.”
                  </blockquote>

                  <p className="mt-5 font-bold text-green-700">
                    — Opeyemi Ajose
                  </p>
                </div>

                <div className="mt-8">
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">
                    Areas of Focus
                  </p>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {founderCapabilities.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-green-600" />
                        <span className="text-sm font-semibold text-slate-700">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3 font-bold text-white transition hover:bg-green-500"
                  >
                    Work With GeekyAce
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3 font-bold text-slate-700 transition hover:border-green-300 hover:text-green-700"
                  >
                    Explore Services
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Existing simple connection card */}
          <div className="mx-auto mt-8 max-w-4xl rounded-3xl border border-slate-200 bg-white p-7 text-center shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
              Stay Connected
            </p>

            <h3 className="mt-3 text-2xl font-black text-slate-950">
              Follow GeekyAce Digital Hub&apos;s Work
            </h3>

            <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-600">
              Follow GeekyAce Digital Hub for digital projects, technology
              insights, creative work, and updates from the brand.
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-xl border border-green-200 bg-green-50 px-5 py-3 font-bold text-green-700 transition hover:bg-green-100"
            >
              <Mail className="h-4 w-4" />
              Connect With GeekyAce Digital Hub
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          SOCIAL MEDIA & FREELANCING PLATFORMS
      ========================================================= */}
      <section className="relative isolate overflow-hidden bg-[#02060f] py-20 text-white sm:py-24 lg:py-32">
        <div aria-hidden="true" className="premium-grid absolute inset-0 opacity-30" />
        <div
          aria-hidden="true"
          className="absolute left-[-14rem] top-[-8rem] h-[34rem] w-[34rem] rounded-full bg-cyan-500/10 blur-[110px]"
        />
        <div
          aria-hidden="true"
          className="absolute right-[-12rem] top-[14rem] h-[32rem] w-[32rem] rounded-full bg-fuchsia-500/10 blur-[120px]"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-[-14rem] left-1/3 h-[34rem] w-[34rem] rounded-full bg-emerald-500/10 blur-[120px]"
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-emerald-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full motion-safe:animate-ping rounded-full bg-emerald-300 opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
                </span>
                GeekyAce, everywhere
              </span>

              <h2 className="mt-7 max-w-4xl text-4xl font-black leading-[0.96] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
                One studio. Every digital{" "}
                <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-fuchsia-300 bg-clip-text text-transparent">
                  touchpoint.
                </span>
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                Follow the work, join the conversation, or begin a project.
                GeekyAce brings strategy, creativity, and technology together
                across the platforms where modern business moves.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/project-planner"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400 px-6 py-3.5 text-sm font-black text-slate-950 shadow-[0_18px_50px_-18px_rgba(52,211,153,0.95)] transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  Start a project
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link
                  href="/showcase"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-bold text-white transition duration-300 hover:border-white/30 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  Explore our work
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-10 grid max-w-2xl grid-cols-3 border-y border-white/10 py-5">
                {[
                  { value: String(configuredSocialPlatforms.length), label: "Live channels" },
                  { value: String(engagementPaths.length), label: "Ways to engage" },
                  { value: "Global", label: "Reach" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="border-white/10 px-3 first:pl-0 [&:not(:first-child)]:border-l sm:px-6"
                  >
                    <p className="text-xl font-black text-white sm:text-2xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-slate-500 sm:text-xs">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[32rem]">
              <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-cyan-400/10 via-transparent to-fuchsia-400/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/[0.055] p-5 shadow-[0_40px_120px_-45px_rgba(0,0,0,0.95)] backdrop-blur-xl sm:p-7">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div>
                    <p className="text-[0.65rem] font-black uppercase tracking-[0.22em] text-slate-500">
                      Digital presence
                    </p>
                    <p className="mt-1 font-extrabold text-white">
                      The GeekyAce network
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1.5 text-[0.65rem] font-black uppercase tracking-[0.16em] text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                    Live
                  </span>
                </div>

                <div className="relative mx-auto my-7 aspect-square max-w-[22rem]">
                  <div aria-hidden="true" className="absolute inset-2 rounded-full border border-white/[0.06]" />
                  <div aria-hidden="true" className="absolute inset-11 rounded-full border border-dashed border-white/15 motion-safe:animate-[spin_24s_linear_infinite]" />
                  <div aria-hidden="true" className="absolute inset-[5.5rem] rounded-full border border-emerald-300/15 shadow-[0_0_60px_rgba(52,211,153,0.12)]" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full border border-emerald-300/25 bg-[#06120e] shadow-[0_0_70px_rgba(52,211,153,0.18)]">
                      <Globe2 className="h-7 w-7 text-emerald-300" />
                      <span className="mt-2 text-2xl font-black text-white">
                        {configuredSocialPlatforms.length}
                      </span>
                      <span className="text-[0.58rem] font-black uppercase tracking-[0.2em] text-slate-500">
                        Channels
                      </span>
                    </div>
                  </div>

                  {socialPlatforms.slice(0, 4).map((platform, index) => {
                    const Icon = platform.icon;
                    const tone = networkTones[index];

                    return (
                      <a
                        key={platform.name}
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit GeekyAce on ${platform.name}`}
                        className={`group absolute z-10 flex h-14 w-14 items-center justify-center rounded-2xl ring-1 backdrop-blur-md transition duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${orbitPositions[index]} ${tone.icon}`}
                      >
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </a>
                    );
                  })}
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {[
                    ["Strategy", "Clear"],
                    ["Creative", "Active"],
                    ["Technology", "Connected"],
                  ].map(([label, status]) => (
                    <div
                      key={label}
                      className="rounded-xl border border-white/[0.07] bg-black/20 px-3 py-3"
                    >
                      <p className="text-[0.6rem] font-bold uppercase tracking-[0.14em] text-slate-600">
                        {label}
                      </p>
                      <p className="mt-1 text-xs font-extrabold text-slate-200">
                        {status}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* SOCIAL MEDIA */}
          <div className="mt-24 rounded-[2.5rem] border border-white/10 bg-white/[0.035] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-sm sm:p-8 lg:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-emerald-300">
                  01 / Social & professional
                </p>
                <h3 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
                  Choose your channel.
                </h3>
              </div>
              <p className="max-w-xl text-sm leading-7 text-slate-400 lg:text-right">
                Follow launches, practical technology insights, behind-the-scenes
                creative work, and conversations shaping our next digital move.
              </p>
            </div>

            <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {socialPlatforms.map((platform, index) => {
                const Icon = platform.icon;
                const tone = networkTones[index % networkTones.length];
                const isConfigured = platform.url.startsWith("https://") && !platform.url.includes("YOUR_");

                return (
                  <a
                    key={platform.name}
                    href={isConfigured ? platform.url : "/contact"}
                    target={isConfigured ? "_blank" : undefined}
                    rel={isConfigured ? "noopener noreferrer" : undefined}
                    className={`group relative flex min-h-72 flex-col overflow-hidden rounded-[1.6rem] border border-white/[0.08] bg-[#070c18]/90 p-6 transition duration-300 motion-safe:hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 ${tone.card}`}
                  >
                    <div
                      aria-hidden="true"
                      className={`absolute inset-0 bg-gradient-to-br opacity-60 transition-opacity duration-300 group-hover:opacity-100 ${tone.wash}`}
                    />
                    <div className="relative flex items-start justify-between gap-4">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ring-1 transition duration-300 ${tone.icon}`}>
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <span className="font-mono text-[0.65rem] font-bold tracking-widest text-slate-600">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="relative mt-8">
                      <p className="text-[0.62rem] font-black uppercase tracking-[0.2em] text-slate-500">
                        {platform.category}
                      </p>
                      <h4 className="mt-2 text-xl font-black text-white">
                        {platform.name}
                      </h4>
                      <p className="mt-3 text-sm leading-6 text-slate-400">
                        {platform.description}
                      </p>
                    </div>

                    <span className="relative mt-auto flex items-center justify-between border-t border-white/[0.07] pt-5 text-xs font-black uppercase tracking-[0.12em] text-slate-300 transition group-hover:text-white">
                      {isConfigured ? "Open channel" : "Ask about access"}
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] transition group-hover:border-white/20 group-hover:bg-white/10">
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* FREELANCING */}
          <div className="relative mt-8 overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#050a13] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] sm:p-8 lg:p-10">
            <div aria-hidden="true" className="absolute -left-32 -top-40 h-96 w-96 rounded-full bg-cyan-400/10 blur-[110px]" />
            <div aria-hidden="true" className="absolute -right-32 top-24 h-96 w-96 rounded-full bg-violet-500/10 blur-[110px]" />

            <div className="relative flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
                  02 / Work with GeekyAce
                </p>
                <h3 className="mt-3 text-3xl font-black tracking-[-0.035em] text-white sm:text-5xl">
                  Choose the engagement that fits your ambition.
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 lg:max-w-sm lg:justify-end">
                <span className="rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-xs font-bold text-slate-300">
                  {engagementPaths.length} engagement models
                </span>
                <span className="rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-4 py-2 text-xs font-bold text-cyan-200">
                  {freelancingPlatforms.length}+ platform options
                </span>
              </div>
            </div>

            <div className="relative mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
              {engagementPaths.map((path, index) => {
                const Icon = path.icon;
                const isPrimary = index === 0;

                return (
                  <Link
                    key={path.title}
                    href={path.href}
                    className={`group relative flex min-h-[22rem] flex-col overflow-hidden rounded-[1.75rem] p-6 transition duration-300 motion-safe:hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 sm:p-7 ${
                      isPrimary
                        ? "sm:col-span-2 lg:col-span-6 bg-gradient-to-br from-emerald-300 via-emerald-400 to-cyan-400 text-slate-950 shadow-[0_30px_90px_-45px_rgba(52,211,153,0.9)]"
                        : "border border-white/[0.09] bg-white/[0.045] text-white hover:border-white/20 hover:bg-white/[0.07] sm:col-span-1 lg:col-span-3"
                    }`}
                  >
                    <div
                      aria-hidden="true"
                      className={`absolute rounded-full blur-3xl transition duration-500 group-hover:scale-125 ${
                        isPrimary
                          ? "-right-16 -top-20 h-64 w-64 bg-white/25"
                          : "-right-20 -top-20 h-56 w-56 bg-cyan-400/10"
                      }`}
                    />

                    <div className="relative flex items-start justify-between gap-4">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                          isPrimary
                            ? "bg-slate-950 text-emerald-300 shadow-xl"
                            : "border border-white/10 bg-white/[0.06] text-cyan-300"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <span
                        className={`font-mono text-xs font-black tracking-[0.18em] ${
                          isPrimary ? "text-slate-950/45" : "text-slate-600"
                        }`}
                      >
                        0{index + 1}
                      </span>
                    </div>

                    <div className="relative mt-10">
                      <p
                        className={`text-[0.65rem] font-black uppercase tracking-[0.2em] ${
                          isPrimary ? "text-slate-950/55" : "text-cyan-300"
                        }`}
                      >
                        {path.label}
                      </p>
                      <h4 className={`mt-3 font-black tracking-tight ${isPrimary ? "max-w-md text-3xl sm:text-4xl" : "text-2xl"}`}>
                        {path.title}
                      </h4>
                      <p className={`mt-4 text-sm leading-7 ${isPrimary ? "max-w-xl text-slate-900/75" : "text-slate-400"}`}>
                        {path.description}
                      </p>
                    </div>

                    <div className={`relative mt-auto flex items-end justify-between gap-4 border-t pt-5 ${isPrimary ? "border-slate-950/15" : "border-white/[0.08]"}`}>
                      <div>
                        <p className={`text-[0.58rem] font-black uppercase tracking-[0.16em] ${isPrimary ? "text-slate-950/45" : "text-slate-600"}`}>
                          Best for
                        </p>
                        <p className={`mt-1 text-xs font-extrabold ${isPrimary ? "text-slate-950" : "text-slate-300"}`}>
                          {path.bestFor}
                        </p>
                      </div>
                      <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition group-hover:rotate-45 ${isPrimary ? "bg-slate-950 text-white" : "border border-white/10 bg-white/[0.05] text-white"}`}>
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>

            <div id="marketplace-directory" className="relative mt-12 scroll-mt-32 border-t border-white/10 pt-10">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[0.65rem] font-black uppercase tracking-[0.22em] text-violet-300">
                    Platform directory
                  </p>
                  <h4 className="mt-2 text-2xl font-black text-white">
                    Already have a preferred marketplace?
                  </h4>
                </div>
                <p className="max-w-lg text-sm leading-6 text-slate-500 sm:text-right">
                  Open an available network or ask us to arrange your project
                  through a platform whose GeekyAce profile is still being prepared.
                </p>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {freelancingPlatforms.map((platform, index) => {
                  const tone = networkTones[(index + 2) % networkTones.length];
                  const isConfigured = hasLiveMarketplaceProfile(platform.url);

                  return (
                    <a
                      key={platform.name}
                      href={isConfigured ? platform.url : "/contact"}
                      target={isConfigured ? "_blank" : undefined}
                      rel={isConfigured ? "noopener noreferrer" : undefined}
                      className={`group flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 transition duration-300 hover:border-white/15 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${tone.card}`}
                    >
                      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xs font-black uppercase ring-1 transition duration-300 ${tone.icon}`}>
                        {platform.short}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-extrabold text-white">
                          {platform.name}
                        </p>
                        <p className={`mt-1 truncate text-[0.6rem] font-black uppercase tracking-[0.14em] ${isConfigured ? "text-emerald-300" : "text-slate-600"}`}>
                          {isConfigured ? "Explore network" : "Request access"}
                        </p>
                      </div>
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.08] text-slate-600 transition group-hover:border-white/20 group-hover:text-white">
                        {isConfigured ? (
                          <ExternalLink className="h-3.5 w-3.5" />
                        ) : (
                          <ArrowRight className="h-3.5 w-3.5" />
                        )}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="relative mt-10 flex flex-col gap-6 overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-gradient-to-r from-white/[0.055] to-white/[0.025] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
              <div aria-hidden="true" className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl" />
              <div className="relative flex max-w-2xl items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-slate-950">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-black text-white">Not sure which route fits?</h4>
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    Start with the project planner. We will recommend the simplest engagement model for your scope and goals.
                  </p>
                </div>
              </div>
              <Link
                href="/project-planner"
                className="relative inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-emerald-100"
              >
                Get a recommendation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TEAM APPROACH
      ========================================================= */}
      <section className="relative order-[-10] overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
        <div aria-hidden="true" className="absolute left-1/2 top-0 h-72 w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-100/70 blur-3xl" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
              Our Team
            </span>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              A Team Focused on Your Digital Growth
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Great digital solutions are rarely about one person. They come
              from collaboration, expertise, communication, and a shared
              commitment to the goal.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {teamApproach.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-400 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-700">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-6 text-xl font-extrabold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>

          <PublicTeamRoster />
        </div>
      </section>

      {/* =========================================================
          TEAM / FOUNDER RECOGNITION
      ========================================================= */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
              Leadership
            </span>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Meet the Founder Behind GeekyAce Digital Hub
            </h2>
          </div>

          <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-5">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-green-100 bg-green-50">
                  <Image
                    src="/images/opeyemi-ajose-founder.png"
                    alt="Opeyemi Ajose"
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-2xl font-black text-slate-950">
                      Opeyemi Ajose
                    </h3>

                    <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                      <Crown className="h-3 w-3" />
                      Founder
                    </span>
                  </div>

                  <p className="mt-1 font-semibold text-green-600">
                    Founder & CEO — GeekyAce Digital Hub
                  </p>

                  <p className="mt-2 text-sm text-slate-500">
                    Digital entrepreneur, developer & technology enthusiast
                  </p>
                </div>
              </div>

              <Link
                href="#founder"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-green-200 bg-green-50 px-5 py-3 font-bold text-green-700 transition hover:bg-green-100"
              >
                Founder Profile
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-7 border-t border-slate-100 pt-7">
              <p className="leading-8 text-slate-600">
                Opeyemi Ajose leads GeekyAce Digital Hub with a focus on
                technology, digital services, creativity, problem-solving, and
                the long-term growth of the brand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WORKING PRINCIPLES
      ========================================================= */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
              How We Work
            </span>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              More Than a Team — Your Technology Partner
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              From the first conversation to launch and beyond, we focus on
              building solutions that are useful, reliable, and aligned with
              your long-term goals.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {workingPrinciples.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-400 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 text-xl font-black text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          CLOSING STATEMENT
      ========================================================= */}
      <section className="bg-slate-950 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <span className="inline-flex rounded-full border border-green-400/30 bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-400">
            Built Around Your Goals
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">
            Your Success Is the Goal Behind Every Project
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            We take time to understand your business, recommend the right
            approach, and build technology that helps you move forward with
            confidence.
          </p>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-green-700 py-20 sm:py-24">
        <div
          aria-hidden="true"
          className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-green-500/30 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl"
        />

        <div className="relative mx-auto max-w-4xl px-6 text-center text-white lg:px-8">
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-bold backdrop-blur-sm">
            Have an Idea?
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">
            Let&apos;s Turn It Into Reality.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-green-50">
            Whether you need a website, application, AI solution, automation
            system, or another digital product, GeekyAce Digital Hub is ready
            to help you take the next step.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 font-black text-green-700 shadow-xl transition hover:-translate-y-1 hover:bg-green-50"
            >
              Start a Project
              <ArrowRight className="h-5 w-5" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              View Our Services
              <ArrowUpRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-green-100">
            <Mail className="h-4 w-4" />
            <span>Hello@geekyacedigitalhub.com</span>
          </div>
        </div>
      </section>
    </main>
  );
}
