import Button from "../Button";
import Container from "../ui/Container";

export default function ShowcaseHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-100 py-24">

      {/* Background Effects */}

      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-green-300/20 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-green-200/20 blur-3xl" />

      <Container>

        <div className="relative grid items-center gap-20 lg:grid-cols-2">

          {/* Left */}

          <div>

            <span className="inline-flex rounded-full border border-green-200 bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
              🚀 Portfolio Showcase
            </span>

            <h1 className="mt-8 text-5xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-7xl">

              Digital Products

              <br />

              <span className="text-green-600">
                That Create Results
              </span>

            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-gray-600">
              Explore our growing collection of websites,
              AI solutions, mobile applications,
              automation systems and branding projects
              designed to help businesses innovate,
              scale and succeed.
            </p>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row">

              <Button href="/contact" size="lg">
                Start Your Project
              </Button>

              <Button
                href="/services"
                variant="secondary"
                size="lg"
              >
                Explore Services
              </Button>

            </div>

          </div>

          {/* Right */}

          <div className="space-y-6">

            {/* Main Card */}

            <div className="rounded-[32px] border border-gray-200 bg-white p-8 shadow-2xl">

              <div className="grid grid-cols-2 gap-8">

                <div>

                  <h3 className="text-5xl font-extrabold text-green-600">
                    50+
                  </h3>

                  <p className="mt-2 font-semibold text-gray-900">
                    Projects
                  </p>

                </div>

                <div>

                  <h3 className="text-5xl font-extrabold text-green-600">
                    15+
                  </h3>

                  <p className="mt-2 font-semibold text-gray-900">
                    Industries
                  </p>

                </div>

                <div>

                  <h3 className="text-5xl font-extrabold text-green-600">
                    20+
                  </h3>

                  <p className="mt-2 font-semibold text-gray-900">
                    Technologies
                  </p>

                </div>

                <div>

                  <h3 className="text-5xl font-extrabold text-green-600">
                    6
                  </h3>

                  <p className="mt-2 font-semibold text-gray-900">
                    Core Services
                  </p>

                </div>

              </div>

            </div>

            {/* Categories */}

            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">

              <h3 className="text-lg font-bold text-gray-900">
                Project Categories
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">

                <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                  Websites
                </span>

                <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                  Mobile Apps
                </span>

                <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
                  AI Solutions
                </span>

                <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
                  Automation
                </span>

                <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-700">
                  Branding
                </span>

                <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
                  CAD
                </span>

              </div>

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
}