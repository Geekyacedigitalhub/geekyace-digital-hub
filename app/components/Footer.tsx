import Image from "next/image";
import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import Container from "./ui/Container";

const services = [
  { name: "Website & SaaS Development", href: "/services" },
  { name: "Shopify Development", href: "/services" },
  { name: "AI Applications", href: "/services" },
  { name: "Automation & Integrations", href: "/services" },
];

const company = [
  { name: "About", href: "/about" },
  { name: "Solutions", href: "/solutions" },
  { name: "Showcase", href: "/showcase" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:py-20">
          <div>
            <Link href="/" className="relative inline-flex h-14 w-[190px]" aria-label="GeekyAce Digital Hub Home">
              <Image src="/images/logo.png" alt="GeekyAce Digital Hub" fill sizes="190px" className="object-contain object-left" />
            </Link>
            <p className="mt-5 max-w-md leading-7 text-slate-400">
              Full-stack web development, Shopify engineering, AI products, and automation systems built around real business needs.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://github.com/Geekyacedigitalhub" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm font-semibold transition hover:border-green-500/40 hover:text-green-400">
                <FaGithub size={16} /> GitHub
              </a>
              <a href="https://www.linkedin.com/company/geekyace-digital-hub" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm font-semibold transition hover:border-green-500/40 hover:text-green-400">
                <FaLinkedinIn size={16} /> LinkedIn
              </a>
            </div>
            <a href="mailto:hello@geekyacedigitalhub.com" className="mt-6 inline-flex items-center gap-2 text-green-400 hover:text-green-300">
              <Mail size={17} /> hello@geekyacedigitalhub.com
            </a>
          </div>

          <div>
            <h3 className="mb-5 font-bold text-white">Services</h3>
            <ul className="space-y-3.5">{services.map((item) => <li key={item.name}><Link href={item.href} className="transition hover:text-green-400">{item.name}</Link></li>)}</ul>
          </div>

          <div>
            <h3 className="mb-5 font-bold text-white">Company</h3>
            <ul className="space-y-3.5">{company.map((item) => <li key={item.name}><Link href={item.href} className="transition hover:text-green-400">{item.name}</Link></li>)}</ul>
          </div>

          <div>
            <h3 className="mb-5 font-bold text-white">Resources</h3>
            <ul className="space-y-3.5">
              <li><Link href="/resources" className="transition hover:text-green-400">Resources</Link></li>
              <li><Link href="/privacy" className="transition hover:text-green-400">Privacy Policy</Link></li>
              <li><Link href="/terms" className="transition hover:text-green-400">Terms of Service</Link></li>
              <li><a href="mailto:hello@geekyacedigitalhub.com" className="inline-flex items-center gap-2 transition hover:text-green-400">Contact us <ArrowUpRight size={15}/></a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} GeekyAce Digital Hub. All rights reserved.</p>
          <p>Built with Next.js, TypeScript & modern web technologies.</p>
        </div>
      </Container>
    </footer>
  );
}
