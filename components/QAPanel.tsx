import type { ReactNode } from "react";

interface QAPanelProps {
  eyebrow?: string;
  question: ReactNode;
  leftLabel: string;
  leftBody: ReactNode;
  rightLabel: string;
  rightBody: ReactNode;
  className?: string;
  /** Stack the two columns instead of placing them side by side, for the Seniors accessibility treatment. */
  singleColumn?: boolean;
  /** Bump body copy to a larger size, for the Seniors accessibility treatment. */
  large?: boolean;
}

export default function QAPanel({
  eyebrow = "THE QUESTION EVERYONE ASKS",
  question,
  leftLabel,
  leftBody,
  rightLabel,
  rightBody,
  className = "bg-secondary-50",
  singleColumn = false,
  large = false,
}: QAPanelProps) {
  const bodyClass = large ? "text-body-lg" : "text-body-md";
  return (
    <section className={`py-24 sm:py-32 ${className}`}>
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-body font-bold text-accent-600 mb-2 uppercase tracking-wide">{eyebrow}</p>
          <h2 className="font-heading text-secondary-900">{question}</h2>
        </div>
        <div
          className={`grid grid-cols-1 rounded-2xl border border-secondary-200 bg-white shadow-sm overflow-hidden ${
            singleColumn ? "" : "md:grid-cols-2"
          }`}
        >
          <div
            className={`p-8 sm:p-10 border-b ${singleColumn ? "" : "md:border-b-0 md:border-r"} border-secondary-200`}
          >
            <p className="text-body-sm font-bold text-secondary-500 mb-3 uppercase tracking-wide">{leftLabel}</p>
            <div className={`${bodyClass} ${large ? "text-secondary-700" : "text-secondary-500"}`}>{leftBody}</div>
          </div>
          <div className="p-8 sm:p-10 bg-success-50">
            <p className="text-body-sm font-bold text-success-700 mb-3 uppercase tracking-wide">{rightLabel}</p>
            <div className={`${bodyClass} text-secondary-700`}>{rightBody}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
