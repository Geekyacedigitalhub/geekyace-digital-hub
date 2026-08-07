interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  description,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : ""}>
      {badge && (
        <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
          {badge}
        </span>
      )}

      <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-gray-600 md:text-xl">
          {description}
        </p>
      )}
    </div>
  );
}