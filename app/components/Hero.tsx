export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-white via-green-50 to-white">
      <div className="max-w-7xl mx-auto px-8 py-24 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div>

          <div className="inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-green-700 font-medium mb-8">
            🚀 Building the Future with AI & Digital Innovation
          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight text-gray-900">
            Smart Digital Solutions
            <span className="block text-green-500">
              That Help Businesses Grow
            </span>
          </h1>

          <p className="mt-8 text-xl text-gray-600 leading-9 max-w-xl">
            Geekyace Digital Hub helps businesses transform ideas into
            successful digital products through website development,
            AI automation, graphic design, branding, and CAD drafting.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="#contact"
              className="rounded-full bg-green-500 px-8 py-4 text-white font-semibold hover:bg-green-600 transition"
            >
              Get Started
            </a>

            <a
              href="#portfolio"
              className="rounded-full border border-gray-300 px-8 py-4 font-semibold hover:bg-gray-100 transition"
            >
              View Portfolio
            </a>

          </div>

          {/* Statistics */}

          <div className="grid grid-cols-3 gap-8 mt-16">

            <div>
              <h2 className="text-4xl font-bold text-green-500">
                50+
              </h2>
              <p className="text-gray-600 mt-2">
                Projects
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-green-500">
                20+
              </h2>
              <p className="text-gray-600 mt-2">
                Happy Clients
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-green-500">
                24/7
              </h2>
              <p className="text-gray-600 mt-2">
                Support
              </p>
            </div>

          </div>

        </div>

        {/* Right Side */}

        <div className="bg-white rounded-3xl shadow-2xl p-10 border border-green-100">

          <h2 className="text-3xl font-bold mb-8">
            Why Choose Geekyace?
          </h2>

          <div className="space-y-8">

            <div className="flex gap-4">
              <div className="text-3xl">⚡</div>

              <div>
                <h3 className="font-bold text-xl">
                  Fast Development
                </h3>

                <p className="text-gray-600 mt-2">
                  Modern websites built with the latest technologies.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl">🤖</div>

              <div>
                <h3 className="font-bold text-xl">
                  AI Integration
                </h3>

                <p className="text-gray-600 mt-2">
                  Smart AI tools that automate work and improve productivity.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl">📈</div>

              <div>
                <h3 className="font-bold text-xl">
                  Business Growth
                </h3>

                <p className="text-gray-600 mt-2">
                  Digital solutions designed to help your business scale.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}