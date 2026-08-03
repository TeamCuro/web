import { CheckCircleIcon, LockIcon } from "./icons";
import ReviewPlaceholder from "./ReviewPlaceholder";

interface BuiltOnBadgesProps {
  /** Text color for the "BUILT ON" label and icons — light pages use secondary-500, dark sections use primary-100. */
  tone?: "light" | "dark";
}

export default function BuiltOnBadges({ tone = "light" }: BuiltOnBadgesProps) {
  const textClass = tone === "dark" ? "text-primary-100" : "text-secondary-500";

  return (
    <div className={`flex flex-wrap items-center gap-3 ${textClass}`}>
      <span className="text-body-sm font-bold uppercase tracking-wide">Built on</span>
      <span className="inline-flex items-center gap-1.5 text-body-sm">
        <CheckCircleIcon className="h-4 w-4" /> SOC 2 Compliant
      </span>
      <span className="inline-flex items-center gap-1.5 text-body-sm">
        <LockIcon className="h-4 w-4" /> 256-bit SSL
      </span>
      {/* COMPLIANCE REVIEW NEEDED: replaces a "Bank-Level Security" / "FDIC-Insured Partners" style claim pending legal sign-off */}
      <ReviewPlaceholder detail='"Bank-Level Security" / "FDIC-Insured Partners" style trust claim' />
    </div>
  );
}
