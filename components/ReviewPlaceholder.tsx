import { WarningIcon } from "./icons";

interface ReviewPlaceholderProps {
  /** Short badge text shown to visitors, e.g. "Pending compliance review" */
  label?: string;
  /** The underlying claim this stands in for, shown in the title tooltip and to screen readers */
  detail?: string;
  className?: string;
}

/**
 * COMPLIANCE REVIEW NEEDED: renders as a visually distinct, clearly-labeled
 * placeholder wherever the design calls out a trust/security or pricing claim
 * that hasn't cleared legal/compliance sign-off (e.g. "Bank-Level Security",
 * "FDIC-Insured Partners", firm pricing figures). Swap the content this
 * wraps for approved copy once sign-off lands — do not ship this badge
 * to a page that has cleared review.
 */
export default function ReviewPlaceholder({
  label = "Pending compliance review",
  detail,
  className = "",
}: ReviewPlaceholderProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border-2 border-dashed border-accent-400 bg-accent-50 px-3 py-1.5 text-body-sm font-semibold text-accent-700 ${className}`}
      title={detail ? `Placeholder pending compliance review: ${detail}` : "Placeholder pending compliance review"}
    >
      <WarningIcon className="h-4 w-4 shrink-0" />
      {label}
    </span>
  );
}
