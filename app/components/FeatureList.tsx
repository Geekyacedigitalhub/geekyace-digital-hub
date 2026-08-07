import { CheckCircle } from "lucide-react";

interface FeatureListProps {
  title: string;
  items: string[];
}

export default function FeatureList({
  title,
  items,
}: FeatureListProps) {
  return (
    <section className="py-20">

      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-10 text-4xl font-bold">
          {title}
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {items.map((item) => (

            <div
              key={item}
              className="flex items-center gap-4 rounded-2xl border bg-white p-6 shadow-sm"
            >

              <CheckCircle className="h-6 w-6 text-green-600" />

              <span className="font-medium">
                {item}
              </span>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}