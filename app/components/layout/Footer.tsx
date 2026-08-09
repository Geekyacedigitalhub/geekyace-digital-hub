"use client";

import Link from "next/link";
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

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
    <footer className="bg-slate-950 text-white">
      <Container>
        {/* Main Footer */}
        <div className="grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:py-20">
          {/* Company */}
          <div className="max-w-md">
            <Logo />

            <p className="mt-6 leading-8 text-slate-400">
              Geekyace Digital Hub helps businesses grow through
              websites, AI solutions, automation, mobile apps,
              branding, and modern digital experiences.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-green-700 hover:shadow-lg"
            >
              Start Your Project

              <ArrowRight
                className="h-4 w-4"
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-6 text-lg font-bold text-white">
              Navigation
            </h3>

            <ul className="space-y-4">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-400 transition-colors duration-200 hover:text-green-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-lg font-bold text-white">
              Services
            </h3>

            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/solutions"
                    className="text-slate-400 transition-colors duration-200 hover:text-green-400"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-lg font-bold text-white">
              Contact Us
            </h3>

            <ul className="space-y-5">
              <li>
                <a
                  href="mailto:hello@geekyacedigitalhub.com"
                  className="group flex items-start gap-3 text-slate-400 transition-colors duration-200 hover:text-green-400"
                >
                  <Mail
                    className="mt-1 h-5 w-5 shrink-0 text-green-500"
                    aria-hidden="true"
                  />

                  <span>
                    hello@geekyacedigitalhub.com
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="tel:+2348028793121"
                  className="group flex items-start gap-3 text-slate-400 transition-colors duration-200 hover:text-green-400"
                >
                  <Phone
                    className="mt-1 h-5 w-5 shrink-0 text-green-500"
                    aria-hidden="true"
                  />

                  <span>
                    +234 802 879 3121
                  </span>
                </a>
              </li>

              <li className="flex items-start gap-3 text-slate-400">
                <MapPin
                  className="mt-1 h-5 w-5 shrink-0 text-green-500"
                  aria-hidden="true"
                />

                <span>
                  Worldwide
                  <br />
                  Remote Services
                </span>
              </li>

              <li className="rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-slate-400">
                We usually respond within 24 hours.
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col gap-6 border-t border-slate-800 py-8 text-sm md:flex-row md:items-center md:justify-between">
          <p className="text-center text-slate-500 md:text-left">
            © {currentYear} Geekyace Digital Hub. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-6 md:justify-end">
            <Link
              href="/privacy"
              className="text-slate-500 transition-colors duration-200 hover:text-green-400"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-slate-500 transition-colors duration-200 hover:text-green-400"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}