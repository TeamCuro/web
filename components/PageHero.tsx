import Link from "next/link";
import type { ReactNode } from "react";

interface HeroCta {
  label: string;
  href: string;
}

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
  badges?: ReactNode;
  visual?: ReactNode;
  variant?: "light" | "dark";
  /** Widen the base type sizes and raise text contrast, for the Seniors accessibility treatment. */
  large?: boolean;
  /** Stack the visual below the copy at every breakpoint instead of side-by-side, for the Seniors accessibility treatment. */
  singleColumn?: boolean;
}

export default function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  badges,
  visual,
  variant = "light",
  large = false,
  singleColumn = false,
}: PageHeroProps) {
  const dark = variant === "dark";
  const sideBySide = Boolean(visual) && !singleColumn;

  return (
    <section className={dark ? "bg-primary-600" : "bg-gradient-to-b from-secondary-50 to-white"}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 sm:py-28">
        <div className={`grid grid-cols-1 gap-12 items-center ${sideBySide ? "lg:grid-cols-2 lg:gap-8" : ""}`}>
          <div className={sideBySide ? "" : "mx-auto max-w-3xl text-center"}>
            <p
              className={`text-body-sm font-bold uppercase tracking-wide mb-4 ${
                dark ? "text-accent-300" : "text-accent-600"
              }`}
            >
              {eyebrow}
            </p>
            <h1 className={`font-heading mb-6 ${dark ? "text-white" : "text-secondary-900"}`}>{title}</h1>
            <p
              className={`mb-8 ${large ? "text-body-lg sm:text-2xl" : "text-body-lg"} ${
                dark ? "text-primary-100" : large ? "text-secondary-700" : "text-secondary-500"
              }`}
            >
              {description}
            </p>
            {(primaryCta || secondaryCta) && (
              <div className={`flex flex-col sm:flex-row gap-4 mb-6 ${sideBySide ? "" : "justify-center"}`}>
                {primaryCta && (
                  <Link href={primaryCta.href} className={`btn btn-md ${dark ? "btn-secondary" : "btn-primary"}`}>
                    {primaryCta.label}
                  </Link>
                )}
                {secondaryCta && (
                  <Link
                    href={secondaryCta.href}
                    className={`btn btn-md ${
                      dark ? "border-2 border-white text-white hover:bg-white/10" : "btn-outline"
                    }`}
                  >
                    {secondaryCta.label}
                  </Link>
                )}
              </div>
            )}
            {badges && (
              <div className={`flex flex-wrap items-center gap-4 ${sideBySide ? "" : "justify-center"}`}>{badges}</div>
            )}
          </div>
          {visual && <div className={sideBySide ? "" : "mx-auto max-w-xl w-full"}>{visual}</div>}
        </div>
      </div>
    </section>
  );
}
