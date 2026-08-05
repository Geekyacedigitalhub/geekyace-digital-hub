const projects = [
  {
    icon: "🌐",
    title: "Business Website",
    description: "Modern websites designed for businesses and startups.",
  },
  {
    icon: "🤖",
    title: "AI Chatbot",
    description: "Custom AI assistants for customer support and automation.",
  },
  {
    icon: "🎨",
    title: "Brand Identity",
    description: "Professional logos, branding, and marketing materials.",
  },
  {
    icon: "📐",
    title: "CAD Drafting",
    description: "2D and 3D technical drafting for engineering projects.",
  },
];

export default function Portfolio() {
  return (
    <section className="mt-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center">
          Our Portfolio
        </h2>

        <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
          A selection of projects showcasing our expertise across multiple industries.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-xl border p-8 transition duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer bg-white"
            >
              <h3 className="text-2xl font-bold">
                {project.icon} {project.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}