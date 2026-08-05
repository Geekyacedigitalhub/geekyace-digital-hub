import Image from "next/image";
import {
  Mail,
  Phone,
  Globe,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white mt-24">
      <div className="max-w-screen-xl mx-auto px-8 py-20">

        <div className="grid md:grid-cols-4 gap-12">

          {/* Company */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Geekyace Digital Hub"
              width={220}
              height={60}
              className="bg-white rounded-lg p-2 w-auto h-20 mb-6"
              priority
            />

            <p className="text-gray-400 leading-8">
              Building smart digital solutions through website development,
              AI automation, branding, graphic design and CAD drafting.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>

            <ul className="space-y-4 text-gray-400">
              <li>Website Development</li>
              <li>AI Solutions</li>
              <li>Business Automation</li>
              <li>Graphic Design</li>
              <li>CAD Drafting</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-bold mb-6">Company</h3>

            <ul className="space-y-4 text-gray-400">
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

            <div className="space-y-5">

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-green-500" />
                <span className="text-gray-400">
                  hello@geekyacedigitalhub.com
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-500" />
                <span className="text-gray-400">
                  +234 8028793121
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-green-500" />
                <span className="text-gray-400">
                  Worldwide
                </span>
              </div>

            </div>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 flex justify-between items-center">

          <p className="text-gray-500">
            © 2026 Geekyace Digital Hub. All Rights Reserved.
          </p>

          <a
            href="#"
            className="flex items-center gap-2 text-green-400 hover:text-green-300"
          >
            Back to Top
            <ArrowUp className="w-5 h-5" />
          </a>

        </div>

      </div>
    </footer>
  );
}