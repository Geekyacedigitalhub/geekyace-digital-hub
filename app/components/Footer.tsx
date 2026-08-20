"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import Container from "./ui/Container";
import { publicLinks } from "@/app/lib/publicLinks";

const columns = [
  { title: "Expert studios", links: [
    { name: "Technology & product", href: "/studios/technology" },
    { name: "Brand & creative", href: "/studios/creative" },
    { name: "Marketing & growth", href: "/studios/growth" },
    { name: "Video & motion", href: "/studios/video" },
  ]},
  { title: "Explore", links: [
    { name: "Service marketplace", href: "/services" },
    { name: "Proof library", href: "/case-studies" },
    { name: "Solutions", href: "/solutions" },
    { name: "Showcase", href: "/showcase" },
    { name: "Experts", href: "/experts" },
    { name: "About GeekyAce", href: "/about" },
    { name: "Resources", href: "/resources" },
  ]},
  { title: "Start here", links: [
    { name: "Project planner", href: "/project-planner" },
    { name: "Book consultation", href: publicLinks.booking },
    { name: "Request proposal", href: "/proposal" },
    { name: "Client workspace", href: "/client-portal" },
    { name: "Contact us", href: "/contact" },
    { name: "Trust standards", href: "/trust" },
    { name: "Privacy policy", href: "/privacy" },
    { name: "Terms of service", href: "/terms" },
  ]},
];

export default function Footer() {
  const pathname = usePathname();
  if (["/admin", "/dashboard"].some((route) => pathname.startsWith(route))) return null;

  return (
    <footer className="relative overflow-hidden bg-[#07110c] text-slate-300">
      <div aria-hidden="true" className="premium-grid absolute inset-0 opacity-50" />
      <div aria-hidden="true" className="absolute -right-40 top-0 h-[520px] w-[520px] rounded-full bg-green-500/10 blur-3xl" />
      <Container>
        <div className="relative border-b border-white/10 py-16 sm:py-20">
          <div className="glass-panel grid items-center gap-8 rounded-[2rem] p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:p-12">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-green-400"><Sparkles className="h-4 w-4" />Your next move</span>
              <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight text-white sm:text-5xl">Build the expert squad your next idea deserves.</h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-400">Use AceMatch to get a recommended studio, starting squad, delivery phases, and a reusable project brief.</p>
            </div>
            <Link href="/project-planner" className="group inline-flex items-center justify-center gap-3 rounded-full bg-green-500 px-7 py-4 font-extrabold text-slate-950 transition hover:-translate-y-1 hover:bg-green-400">
              Build my expert squad <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="relative grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="relative block h-14 w-[190px] rounded-lg bg-white px-3" aria-label="GeekyAce Digital Hub home">
              <Image src="/images/logo.png" alt="GeekyAce Digital Hub" fill sizes="190px" className="object-contain p-2" />
            </Link>
            <p className="mt-6 max-w-sm leading-7 text-slate-400">Five expert studios, one accountable delivery team, and digital work designed around real business goals.</p>
            <a href="mailto:hello@geekyacedigitalhub.com" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-green-400 transition hover:text-green-300"><Mail className="h-4 w-4" />hello@geekyacedigitalhub.com</a>
          </div>
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-black uppercase tracking-[0.15em] text-white">{column.title}</h3>
              <ul className="mt-5 space-y-3.5">
                {column.links.map((item) => <li key={item.name}><Link href={item.href} className="text-sm text-slate-400 transition hover:translate-x-1 hover:text-green-400">{item.name}</Link></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="relative flex flex-col gap-3 border-t border-white/10 py-7 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} GeekyAce Digital Hub. Built with purpose.</p>
          <p>Strategy · Design · Technology · Growth</p>
        </div>
      </Container>
    </footer>
  );
}
