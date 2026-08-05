export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-white via-blue-50 to-indigo-100 py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div>

          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium mb-6">
            🚀 Welcome to Geekyace Digital Hub
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
            Building Smart Digital Solutions for Modern Businesses
          </h1>

          <p className="mt-8 text-xl text-gray-600 leading-9">
            We help businesses transform ideas into successful digital
            products through website development, AI solutions,
            automation, graphic design, and CAD drafting.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <a
              href="#services"
              className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition font-semibold"
            >
              Get Started
            </a>

            <a
              href="#portfolio"
              className="border border-gray-300 px-8 py-4 rounded-full hover:bg-gray-100 transition font-semibold"
            >
              View Portfolio
            </a>

          </div>

        </div>

        {/* Right Side */}
        <div className="bg-white rounded-3xl shadow-2xl p-10">

          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Why Choose Geekyace?
          </h2>

          <div className="space-y-6">

            <div className="flex items-center gap-4">
              <span className="text-3xl">⚡</span>
              <div>
                <h3 className="font-bold">Fast Development</h3>
                <p className="text-gray-600">
                  High-performance websites built with modern technologies.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-3xl">🤖</span>
              <div>
                <h3 className="font-bold">AI Integration</h3>
                <p className="text-gray-600">
                  Smart AI tools that improve productivity and customer experience.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-3xl">📈</span>
              <div>
                <h3 className="font-bold">Business Growth</h3>
                <p className="text-gray-600">
                  Digital solutions designed to help your business grow.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}