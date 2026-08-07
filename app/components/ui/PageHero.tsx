import Container from "./Container";

interface PageHeroProps {
  badge?: string;
  title: string;
  description: string;
  centered?: boolean;
  children?: React.ReactNode;
}

export default function PageHero({
  badge,
  title,
  description,
  centered = true,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-28">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-green-300/20 blur-3xl" />

      <Container>
        <div
          className={`relative z-10 ${
            centered
              ? "mx-auto max-w-4xl text-center"
              : "max-w-4xl"
          }`}
        >
          {badge && (
            <span className="inline-flex rounded-full border border-green-200 bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
              {badge}
            </span>
          )}

          <h1 className="mt-8 text-5xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-6xl lg:text-7xl">
            {title}
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600">
            {description}
          </p>

          {children && <div className="mt-12">{children}</div>}
        </div>
      </Container>
    </section>
  );
}