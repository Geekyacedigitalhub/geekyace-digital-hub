export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-green-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-8">

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
            Let's discuss how Geekyace Digital Hub can help bring
            your ideas to life.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Contact Form */}

          <div className="bg-white rounded-3xl shadow-xl p-10">

            <h3 className="text-3xl font-bold mb-8">
              Send Us a Message
            </h3>

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              <textarea
                rows={6}
                placeholder="Tell us about your project..."
                className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-xl transition"
              >
                Send Message
              </button>

            </form>

          </div>

          {/* Contact Information */}

          <div>

            <h3 className="text-3xl font-bold mb-8">
              Contact Information
            </h3>

            <div className="space-y-8">

              <div className="bg-white rounded-2xl shadow p-6">
                <h4 className="font-bold text-xl mb-2">
                  📧 Email
                </h4>

                <p className="text-gray-600">
                  hello@geekyacedigitalhub.com
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow p-6">
                <h4 className="font-bold text-xl mb-2">
                  📱 Phone
                </h4>

                <p className="text-gray-600">
                  +234 8028793121
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow p-6">
                <h4 className="font-bold text-xl mb-2">
                  🌍 Location
                </h4>

                <p className="text-gray-600">
                  Worldwide (Remote Services)
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow p-6">
                <h4 className="font-bold text-xl mb-2">
                  ⏰ Response Time
                </h4>

                <p className="text-gray-600">
                  We usually respond within 24 hours.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}