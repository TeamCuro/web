import type { ReactNode } from "react";

export interface FeatureGridItem {
  icon: ReactNode;
  title: string;
  description: string;
}

interface FeatureGridProps {
  id?: string;
  eyebrow?: string;
  heading?: ReactNode;
  description?: string;
  items: FeatureGridItem[];
  columns?: 2 | 3;
  /** Force a single column regardless of viewport width, for the Seniors accessibility treatment. */
  singleColumn?: boolean;
  /** Bump body copy size and contrast, for the Seniors accessibility treatment. */
  large?: boolean;
  className?: string;
}

export default function FeatureGrid({
  id,
  eyebrow,
  heading,
  description,
  items,
  columns = 3,
  singleColumn = false,
  large = false,
  className = "bg-white",
}: FeatureGridProps) {
  const gridCols = singleColumn
    ? "grid-cols-1 max-w-2xl mx-auto"
    : columns === 2
      ? "grid-cols-1 sm:grid-cols-2"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section id={id} className={`scroll-mt-20 py-24 sm:py-32 ${className}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {(eyebrow || heading) && (
          <div className="mx-auto max-w-2xl text-center mb-16">
            {eyebrow && <p className="text-body font-bold text-accent-600 mb-2 uppercase tracking-wide">{eyebrow}</p>}
            {heading && <h2 className="font-heading text-secondary-900">{heading}</h2>}
            {description && (
              <p className={`mt-6 ${large ? "text-2xl text-secondary-700" : "text-body-lg text-secondary-400"}`}>
                {description}
              </p>
            )}
          </div>
        )}
        <div className={`grid gap-8 ${gridCols}`}>
          {items.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-secondary-200 bg-white p-8 shadow-sm hover:shadow-lg hover:border-primary-300 transition-all duration-300"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-600 text-white shadow-lg">
                {item.icon}
              </div>
              <h3 className="mt-6 font-heading text-secondary-900" style={{ fontSize: "1.5rem", lineHeight: 1.15 }}>
                {item.title}
              </h3>
              <p className={`mt-4 ${large ? "text-body-lg text-secondary-700" : "text-body-md text-secondary-400"}`}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
