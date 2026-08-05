import {
  Globe,
  Bot,
  Settings,
  Palette,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Modern, responsive websites built with the latest technologies.",
  },
  {
    icon: Bot,
    title: "AI Solutions",
    description:
      "AI-powered tools that improve productivity and customer experience.",
  },
  {
    icon: Settings,
    title: "Business Automation",
    description:
      "Automate repetitive business processes and save valuable time.",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description:
      "Creative branding, social media graphics, and marketing materials.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-white"
    >
      <div className="max-w-screen-xl mx-auto px-8">

        <div className="text-center mb-16">

          <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
            Our Services
          </span>

          <h2 className="text-5xl font-bold mt-6 text-gray-900">
            What We Can Do For You
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            We provide modern digital solutions that help businesses
            build, automate, grow, and stay ahead of the competition.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex items-center justify-between">

                  <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">

                    <Icon className="w-7 h-7 text-green-600" />

                  </div>

                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-500 group-hover:translate-x-1 transition" />

                </div>

                <h3 className="text-2xl font-bold mt-8 text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-8">
                  {service.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}