import Button from "../Button";
import Container from "./Container";

interface CTASectionProps {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTASection({
  title,
  description,
  primaryLabel = "Start Your Project",
  primaryHref = "/contact",
  secondaryLabel = "Explore Showcase",
  secondaryHref = "/showcase",
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-700 via-green-600 to-emerald-700 py-24 text-white">

      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

      <Container>

        <div className="relative mx-auto max-w-4xl text-center">

          <h2 className="text-5xl font-extrabold leading-tight">
            {title}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-green-100">
            {description}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <Button
              href={primaryHref}
              variant="secondary"
              size="lg"
            >
              {primaryLabel}
            </Button>

            <Button
              href={secondaryHref}
              variant="outline"
              size="lg"
              className="border-white text-white hover:border-white hover:bg-white hover:text-green-700"
            >
              {secondaryLabel}
            </Button>

          </div>

        </div>

      </Container>

    </section>
  );
}