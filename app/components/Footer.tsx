import Image from "next/image";
import Link from "next/link";

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

            <Image
              src="/images/logo.png"
              alt="Geekyace Digital Hub"
              width={180}
              height={50}
              className="h-12 w-auto brightness-0 invert"
            />

            <p className="mt-6 leading-8 text-gray-400">
              Geekyace Digital Hub builds websites, mobile apps,
              AI solutions, automation systems and modern digital
              experiences that help businesses grow.
            </p>

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

          {/* Contact */}

          <div>

            <h3 className="mb-6 text-lg font-semibold text-white">
              Contact
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>📧 geekyacedigital@gmail.com</li>

              <li>🌍 Philippines</li>

              <li>💼 Geekyace Digital Hub</li>

            </ul>

          </div>

        </div>

        {/* Bottom Bar */}

        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-800 py-8 md:flex-row">

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Geekyace Digital Hub.
            All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm">

            {resources.map((item) => (

              <Link
                key={item.name}
                href={item.href}
                className="transition hover:text-green-400"
              >
                {item.name}
              </Link>

            ))}

          </div>

        </div>

      </Container>

    </footer>
  );
}