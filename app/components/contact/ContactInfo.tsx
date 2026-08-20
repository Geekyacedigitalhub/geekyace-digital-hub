"use client";

import Link from "next/link";
import {
  CalendarCheck2,
  Mail,
  Phone,
  Globe,
  Clock,
} from "lucide-react";
import { isExternalPublicLink, publicLinks } from "@/app/lib/publicLinks";

const contactInfo = [
  {
    icon: CalendarCheck2,
    title: "Consultation",
    value: "Request a project-fit conversation",
    href: publicLinks.booking,
  },
  {
    icon: Mail,
    title: "Email",
    value: "hello@geekyacedigitalhub.com",
    href: "mailto:hello@geekyacedigitalhub.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+234 802 879 3121",
    href: "tel:+2348028793121",
  },
  {
    icon: Globe,
    title: "Location",
    value: "Worldwide (Remote Services)",
  },
  {
    icon: Clock,
    title: "Response Time",
    value: "Within 24 Hours",
  },
];

export default function ContactInfo() {
  return (
    <div>
      <span className="brand-eyebrow">Get In Touch</span>

      <h2 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
        Contact Information
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        Have a project in mind or need help with a digital solution?
        Reach out to Geekyace Digital Hub and let&apos;s discuss how
        we can help your business grow.
      </p>

      <div className="mt-10 space-y-6">
        {contactInfo.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="premium-card group rounded-[1.75rem] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-500"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-green-400 transition group-hover:bg-green-600 group-hover:text-white">
                  <Icon size={26} />
                </div>

                <div className="min-w-0">
                  <h4 className="text-lg font-bold text-slate-900">
                    {item.title}
                  </h4>

                  {item.href ? (
                    <Link
                      href={item.href}
                      target={isExternalPublicLink(item.href) ? "_blank" : undefined}
                      rel={isExternalPublicLink(item.href) ? "noopener noreferrer" : undefined}
                      className="break-all text-slate-600 transition hover:text-green-600"
                    >
                      {item.value}
                    </Link>
                  ) : (
                    <p className="text-slate-600">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
