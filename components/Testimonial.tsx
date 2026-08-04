import type { ReactNode } from "react";

export interface TestimonialProps {
  /** Leave undefined until a real named quote is available. */
  name?: string;
  role: string;
  quote: string;
}

export function Testimonial({ name, role, quote }: TestimonialProps) {
  const isPlaceholder = !name;

  return (
    <div
      className={`rounded-2xl p-8 h-full flex flex-col ${
        isPlaceholder
          ? "border-2 border-dashed border-secondary-200 bg-secondary-50"
          : "border border-secondary-200 bg-white shadow-sm"
      }`}
    >
      {isPlaceholder && (
        <p className="text-body-sm font-bold text-accent-600 mb-4 uppercase tracking-wide">
          Awaiting named testimonial
        </p>
      )}
      <p className="text-body text-secondary-500 italic grow">&ldquo;{quote}&rdquo;</p>
      <div className="mt-6 flex items-center gap-3">
        <div className="h-11 w-11 rounded-full bg-secondary-200 shrink-0" aria-hidden="true" />
        <div>
          <p className="text-body-sm font-bold text-secondary-900">{name ?? "[Name]"}</p>
          <p className="text-body-sm text-secondary-400">{role}</p>
        </div>
      </div>
    </div>
  );
}

interface TestimonialsSectionProps {
  eyebrow?: string;
  heading: ReactNode;
  description: string;
  testimonials: TestimonialProps[];
  className?: string;
}

export default function TestimonialsSection({
  eyebrow = "TRUSTED BY THE PEOPLE THEY ANSWER TO",
  heading,
  description,
  testimonials,
  className = "bg-white",
}: TestimonialsSectionProps) {
  return (
    <section className={`py-24 sm:py-32 ${className}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-body font-bold text-accent-600 mb-2 uppercase tracking-wide">{eyebrow}</p>
          <h2 className="font-heading text-secondary-900">{heading}</h2>
          <p className="mt-6 text-body-lg text-secondary-400">{description}</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Testimonial key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
