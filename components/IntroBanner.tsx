import type { ReactNode } from "react";

interface IntroBannerProps {
  children: ReactNode;
  /** Bump text size and contrast further, for the Seniors accessibility treatment. */
  large?: boolean;
}

export default function IntroBanner({ children, large = false }: IntroBannerProps) {
  return (
    <section className="bg-secondary-50 py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
        <p className={large ? "text-2xl text-secondary-700" : "text-body-lg text-secondary-500"}>{children}</p>
      </div>
    </section>
  );
}
