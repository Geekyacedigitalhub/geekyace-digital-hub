"use client";

import Link from "next/link";

import Container from "../ui/Container";
import Logo from "./Logo";

import { navigation } from "@/app/data/navigation";

const services = [
  "Website Development",
  "AI Solutions",
  "Business Automation",
  "Mobile Applications",
  "UI / UX Design",
  "Cloud Solutions",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <Container>
        <div className="grid gap-16 py-20 md:grid-cols-2 xl:grid-cols-4">
          {/* Company */}
          <div>
            <Logo />

            <p className="mt-6 leading-8 text-slate-400">
              Geekyace Digital Hub helps businesses grow through
              websites, AI solutions, automation, mobile apps,
              branding, and modern digital experiences.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-6 text-lg font-bold">
              Navigation
            </h3>

            <ul className="space-y-4">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-400 transition hover:text-green-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-lg font-bold">
              Services
            </h3>

            <ul className="space-y-4">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-slate-400"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-lg font-bold">
              Contact
            </h3>

            <ul className="space-y-4 text-slate-400">
              <li>
                <a
                  href="mailto:hello@geekyacedigitalhub.com"
                  className="transition hover:text-green-400"
                >
                  hello@geekyacedigitalhub.com
                </a>
              </li>

              <li>
                <a
                  href="tel:+2348028793121"
                  className="transition hover:text-green-400"
                >
                  +234 802 879 3121
                </a>
              </li>

              <li>Worldwide (Remote Services)</li>

              <li>Response within 24 Hours</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-800 py-8 text-sm text-slate-500 md:flex-row">
          <p>
            © {currentYear} Geekyace Digital Hub. All rights reserved.
          </p>

          <div className="flex gap-6">
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