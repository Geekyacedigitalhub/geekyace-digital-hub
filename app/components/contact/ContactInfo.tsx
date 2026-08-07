"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  Globe,
  Clock,
} from "lucide-react";

const contactInfo = [
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
      <h3 className="mb-8 text-3xl font-bold text-slate-900">
        Contact Information
      </h3>

      <div className="space-y-6">
        {contactInfo.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-500 hover:shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-700">
                  <Icon size={26} />
                </div>

                <div>
                  <h4 className="text-lg font-bold text-slate-900">
                    {item.title}
                  </h4>

                  {item.href ? (
                    <Link
                      href={item.href}
                      className="text-slate-600 transition hover:text-green-600"
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