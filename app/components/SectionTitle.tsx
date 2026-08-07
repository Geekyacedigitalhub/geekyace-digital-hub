type SectionTitleProps = {
  badge: string;
  title: string;
  description: string;
  center?: boolean;
};

export default function SectionTitle({
  badge,
  title,
  description,
  center = true,
}: SectionTitleProps) {
  return (
    <div
      className={`mb-16 ${
        center ? "text-center" : "text-left"
      }`}
    >
      <span className="inline-block rounded-full bg-green-100 px-4 py-2 font-semibold text-green-700">
        {badge}
      </span>

      <h2 className="mt-6 text-5xl font-bold text-gray-900">
        {title}
      </h2>

      <p
        className={`mt-6 text-lg leading-8 text-gray-600 ${
          center ? "mx-auto max-w-3xl" : "max-w-3xl"
        }`}
      >
        {description}
      </p>
    </div>
  );
}