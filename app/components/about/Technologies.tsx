import Container from "../ui/Container";

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Flutter",
  "Tailwind CSS",
  "OpenAI",
  "Node.js",
  "Supabase",
  "PostgreSQL",
  "Firebase",
  "AWS",
  "Figma",
];

export default function Technologies() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            Technology Stack
          </span>

          <h2 className="mt-6 text-5xl font-bold text-gray-900">
            Built with Modern Technologies
          </h2>

          <p className="mt-6 text-xl text-gray-600">
            We use trusted tools and frameworks to build fast,
            scalable and secure digital products.
          </p>

        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-4">

          {technologies.map((tech) => (
            <div
              key={tech}
              className="rounded-full border border-gray-200 bg-white px-6 py-3 font-semibold shadow-sm transition hover:border-green-500 hover:bg-green-50"
            >
              {tech}
            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}