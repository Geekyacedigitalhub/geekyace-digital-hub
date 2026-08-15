import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";

import Container from "./ui/Container";

const services = [
  { name: "Website Development", href: "/services" },
  { name: "Mobile Applications", href: "/services" },
  { name: "AI Solutions", href: "/services" },
  { name: "Business Automation", href: "/services" },
];

const company = [
  { name: "About Us", href: "/about" },
  { name: "Solutions", href: "/solutions" },
  { name: "Showcase", href: "/showcase" },
  { name: "Contact", href: "/contact" },
];

const resources = [
  { name: "Resources", href: "/resources" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300">
      <Container>
        <div className="grid gap-16 py-20 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="relative inline-flex h-16 w-[200px] items-center"
              aria-label="GeekyAce Digital Hub Home"
            >
              <Image
                src="/images/logo.png"
                alt="GeekyAce Digital Hub"
                fill
                sizes="200px"
                className="object-contain object-left"
              />
            </Link>

            <p className="mt-6 max-w-sm leading-8 text-gray-400">
              GeekyAce Digital Hub builds websites, mobile apps, AI
              solutions, automation systems, and modern digital
              experiences that help businesses grow.
            </p>

            {/* Business Email */}
            <div className="mt-7">
              <p className="text-sm font-semibold uppercase tracking-wider text-white">
                Business Email
              </p>

              <a
                href="mailto:hello@geekyacedigitalhub.com"
                className="mt-3 inline-flex items-center gap-2 text-green-400 transition hover:text-green-300"
              >
                <Mail size={17} />

                <span>hello@geekyacedigitalhub.com</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Services
            </h3>

            <ul className="space-y-4">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="transition hover:text-green-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Company
            </h3>

            <ul className="space-y-4">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="transition hover:text-green-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Resources
            </h3>

            <ul className="space-y-4">
              {resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="transition hover:text-green-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-8 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} GeekyAce Digital Hub. All
            rights reserved.
          </p>

          <div className="flex flex-wrap gap-5">
            <Link
              href="/privacy"
              className="transition hover:text-green-400"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-green-400"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}