"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Crown,
  ExternalLink,
  Globe,
  Mail,
} from "lucide-react";
import {
  FaBehance,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

type SocialPlatform = {
  name: string;
  description: string;
  href?: string;
  available: boolean;
  icon: React.ReactNode;
};

const socialPlatforms: SocialPlatform[] = [
  {
    name: "LinkedIn",
    description: "GeekyAce Digital Hub",
    href: "https://www.linkedin.com/company/geekyace-digital-hub",
    available: true,
    icon: <FaLinkedinIn className="h-5 w-5" />,
  },
  {
    name: "GitHub",
    description: "Code & projects",
    href: "https://github.com/Geekyacedigitalhub",
    available: true,
    icon: <FaGithub className="h-5 w-5" />,
  },
  {
    name: "Instagram",
    description: "Visual updates",
    href: "https://www.instagram.com/geekyacedigitalhub/",
    available: true,
    icon: <FaInstagram className="h-5 w-5" />,
  },
  {
    name: "X",
    description: "Updates & insights",
    href: "https://x.com/GEEKYACEDIGITAL",
    available: true,
    icon: <FaXTwitter className="h-5 w-5" />,
  },
  {
    name: "Behance",
    description: "Creative portfolio",
    href: "https://www.behance.net/geekyacedigital",
    available: true,
    icon: <FaBehance className="h-5 w-5" />,
  },
  {
    name: "Fiverr",
    description: "Freelance services",
    available: false,
    icon: <span className="text-[13px] font-black">fi</span>,
  },
  {
    name: "Upwork",
    description: "Freelance profile",
    available: false,
    icon: <span className="text-[13px] font-black">up</span>,
  },
];

export default function FounderProfile() {
  return (
    <section
      id="founder"
      className="relative overflow-hidden border-y border-slate-200 bg-white py-20 md:py-28"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-green-100/50 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-emerald-100/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-bold text-green-700">
            <Crown size={15} />
            Meet the Founder
          </span>

          <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            The Person Behind
            <span className="block text-green-600">
              GeekyAce Digital Hub
            </span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Building the vision, leading the technology, and creating digital
            solutions that help ideas become reality.
          </p>
        </div>

        {/* Founder Main Card */}
        <div className="mt-14 overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-sm">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            {/* Founder Identity */}
            <div className="relative overflow-hidden bg-gradient-to-br from-green-700 via-green-600 to-emerald-700 p-8 text-white md:p-12">
              <div
                aria-hidden="true"
                className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl"
              />

              <div className="relative">
                {/* Founder Photo */}
                <div className="relative h-48 w-48 overflow-hidden rounded-[2rem] bg-white shadow-2xl ring-8 ring-white/10 sm:h-56 sm:w-56">
                  <Image
                    src="/images/opeyemi-ajose-founder.png"
                    alt="Opeyemi Ajose, Founder and CEO of GeekyAce Digital Hub"
                    fill
                    priority
                    sizes="(max-width: 640px) 192px, 224px"
                    className="object-cover object-top"
                  />
                </div>

                <div className="mt-8">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-bold backdrop-blur-sm">
                    <Crown size={15} />
                    Founder & CEO
                  </div>

                  <h3 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
                    Opeyemi Ajose
                  </h3>

                  <p className="mt-3 text-lg font-medium text-green-50">
                    Founder & CEO — GeekyAce Digital Hub
                  </p>

                  <p className="mt-6 max-w-md leading-8 text-green-50/90">
                    Digital entrepreneur, developer, technology enthusiast,
                    and the driving force behind the GeekyAce Digital Hub
                    vision.
                  </p>
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                  <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
                    Digital Technology
                  </span>

                  <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
                    Web Development
                  </span>

                  <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
                    Digital Entrepreneurship
                  </span>
                </div>
              </div>
            </div>

            {/* Founder Bio & Message */}
            <div className="bg-white p-8 md:p-12">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
                  About Opeyemi
                </p>

                <h3 className="mt-3 text-3xl font-extrabold text-slate-900">
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
                    and problem-solving to create practical solutions designed
                    around real business needs.
                  </p>

                  <p>
                    His vision is to build a recognized digital brand that
                    people and businesses can trust whenever they need
                    technology, creativity, and digital solutions.
                  </p>
                </div>
              </div>

              {/* Founder Message */}
              <div className="mt-10 rounded-3xl border border-green-100 bg-green-50/70 p-6 md:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-600 text-white">
                    <BriefcaseBusiness size={19} />
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

              {/* Founder Contact */}
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <a
                  href="mailto:Hello@geekyacedigitalhub.com"
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-green-300 hover:bg-green-50"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-600 text-white">
                    <Mail size={19} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Business Email
                    </p>

                    <p className="mt-1 truncate text-sm font-bold text-slate-900 group-hover:text-green-700">
                      Hello@geekyacedigitalhub.com
                    </p>
                  </div>
                </a>

                <Link
                  href="/contact"
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-green-300 hover:bg-green-50"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white">
                    <Globe size={19} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Work With GeekyAce
                    </p>

                    <p className="mt-1 text-sm font-bold text-slate-900 group-hover:text-green-700">
                      Start a Project
                    </p>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="text-slate-400 transition group-hover:text-green-600"
                  />
                </Link>
              </div>

              {/* Social Profiles */}
              <div className="mt-10 border-t border-slate-100 pt-8">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wider text-slate-500">
                      Connect
                    </p>

                    <p className="mt-1 font-bold text-slate-900">
                      Follow Opeyemi&apos;s work
                    </p>
                  </div>

                  <ExternalLink size={18} className="text-slate-400" />
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {socialPlatforms.map((platform) => {
                    if (!platform.available || !platform.href) {
                      return (
                        <div
                          key={platform.name}
                          className="flex cursor-default items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3 text-slate-400"
                        >
                          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-200 text-slate-500">
                            {platform.icon}
                          </span>

                          <span className="min-w-0">
                            <span className="block text-sm font-bold">
                              {platform.name}
                            </span>

                            <span className="block text-xs">
                              Profile coming soon
                            </span>
                          </span>
                        </div>
                      );
                    }

                    return (
                      <a
                        key={platform.name}
                        href={platform.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit GeekyAce Digital Hub on ${platform.name}`}
                        className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 text-slate-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-green-300 hover:bg-green-50 hover:text-green-700 hover:shadow-sm"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-white transition-colors group-hover:bg-green-600">
                          {platform.icon}
                        </span>

                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-bold">
                            {platform.name}
                          </span>

                          <span className="block text-xs text-slate-500 group-hover:text-green-600">
                            {platform.description}
                          </span>
                        </span>

                        <ArrowUpRight
                          size={15}
                          className="shrink-0 text-slate-300 transition group-hover:text-green-600"
                        />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}