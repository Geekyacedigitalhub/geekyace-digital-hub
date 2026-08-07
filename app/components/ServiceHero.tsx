import Container from "./ui/Container";
import Button from "./Button";

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  description: string;
}

export default function ServiceHero({
  title,
  subtitle,
  description,
}: ServiceHeroProps) {
  return (
    <section className="bg-gradient-to-br from-green-50 via-white to-green-100 py-24">

      <Container>

        <div className="max-w-3xl">

          <span className="inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            Geekyace Digital Hub
          </span>

          <h1 className="mt-6 text-5xl font-extrabold text-gray-900">
            {title}
          </h1>

          <h2 className="mt-4 text-2xl font-semibold text-green-600">
            {subtitle}
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            {description}
          </p>

          <div className="mt-10 flex gap-4">

            <Button href="/contact">
              Start Your Project
            </Button>

            <Button href="/portfolio" variant="secondary">
              View Portfolio
            </Button>

          </div>

        </div>

      </Container>

    </section>
  );
}