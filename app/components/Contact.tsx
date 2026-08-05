import {
  Mail,
  Phone,
  Globe,
  Clock,
  ArrowRight,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@geekyacedigitalhub.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+234 8028793121",
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

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-green-50 to-white"
    >
      <div className="max-w-screen-xl mx-auto px-8">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
            Contact Us
          </span>

          <h2 className="text-5xl font-bold mt-6 text-gray-900">
            Let's Build Something Amazing
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear about it.
            Let's discuss how Geekyace Digital Hub can help
            turn your ideas into reality.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Form */}

          <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-200">

            <h3 className="text-3xl font-bold mb-8">
              Send Us a Message
            </h3>

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition"
              />

              <textarea
                rows={6}
                placeholder="Tell us about your project..."
                className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition resize-none"
              />

              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-xl flex justify-center items-center gap-2 transition"
              >
                Send Message
                <ArrowRight className="w-5 h-5" />
              </button>

            </form>

          </div>

          {/* Contact Info */}

          <div>

            <h3 className="text-3xl font-bold mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">

              {contactInfo.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition p-6"
                  >
                    <div className="flex items-center gap-4">

                      <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">

                        <Icon className="w-6 h-6 text-green-600" />

                      </div>

                      <div>

                        <h4 className="font-bold text-lg">
                          {item.title}
                        </h4>

                        <p className="text-gray-600">
                          {item.value}
                        </p>

                      </div>

                    </div>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}