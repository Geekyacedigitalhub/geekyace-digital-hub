interface StatCardProps {
  value: string;
  label: string;
}

export default function StatCard({
  value,
  label,
}: StatCardProps) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

      <h3 className="text-5xl font-extrabold text-green-600">
        {value}
      </h3>

      <p className="mt-4 text-lg font-medium text-gray-600">
        {label}
      </p>

    </div>
  );
}