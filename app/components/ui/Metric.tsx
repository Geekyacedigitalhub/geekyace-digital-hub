interface MetricProps {
  value: string;
  label: string;
  description?: string;
  align?: "left" | "center";
}

export default function Metric({
  value,
  label,
  description,
  align = "left",
}: MetricProps) {
  return (
    <div
      className={`${
        align === "center" ? "text-center" : ""
      }`}
    >
      <h3 className="text-4xl font-extrabold text-green-600 md:text-5xl">
        {value}
      </h3>

      <h4 className="mt-3 text-lg font-bold text-gray-900">
        {label}
      </h4>

      {description && (
        <p className="mt-2 text-sm leading-6 text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
}