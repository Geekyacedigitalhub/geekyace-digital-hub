import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-24">
      <div className="max-w-7xl mx-auto px-8 py-16">

        <div className="grid md:grid-cols-4 gap-12">

          {/* Company */}
          <div>

            <Image
  src="/images/logo.png"
  alt="Geekyace Digital Hub"
  width={320}
  height={90}
  className="mb-6 h-20 w-auto"
/>

            <p className="text-gray-400 leading-8">
              Building smart digital solutions through
              websites, AI, automation, branding,
              and CAD drafting.
            </p>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-xl font-bold mb-6">
              Services
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>Website Development</li>
              <li>AI Solutions</li>
              <li>Business Automation</li>
              <li>Graphic Design</li>
              <li>CAD Drafting</li>

            </ul>

          </div>

          {/* Company */}

          <div>

            <h3 className="text-xl font-bold mb-6">
              Company
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>About Us</li>
              <li>Portfolio</li>
              <li>Contact</li>
              <li>Privacy Policy</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-bold mb-6">
              Contact
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>📧 hello@geekyacedigitalhub.com</li>
              <li>📱 +234 8028793121</li>
              <li>🌍 Worldwide</li>

            </ul>

          </div>

        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500">

          © 2026 Geekyace Digital Hub.
          All Rights Reserved.

        </div>

      </div>
    </footer>
  );
}