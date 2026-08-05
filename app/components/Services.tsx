const services = [
  {
    icon: "🌐",
    title: "Website Development",
    description:
      "Modern, responsive websites built with the latest technologies.",
  },
  {
    icon: "🤖",
    title: "AI Solutions",
    description:
      "AI-powered tools that improve productivity and customer experience.",
  },
  {
    icon: "⚙️",
    title: "Business Automation",
    description:
      "Automate repetitive business processes and save valuable time.",
  },
  {
    icon: "🎨",
    title: "Graphic Design",
    description:
      "Creative branding, social media graphics, and marketing materials.",
  },
];

export default function Services() {
  return (
    <section className="mt-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center">
          Our Services
        </h2>

        <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
          We provide innovative digital solutions to help businesses grow.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl border p-8 transition duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer bg-white"
            >
              <h3 className="text-2xl font-bold">
                {service.icon} {service.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}