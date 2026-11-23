"use client";

import { SUPPORT_PHONE } from "@/lib/contact";
import { trackEvent } from "@/lib/analytics";
import { FLAGS } from "@/lib/flags";

interface TrustRowProps {
  /** Analytics label for the phone link, e.g. "home_hero", "cta_band". */
  placement: string;
  tone?: "light" | "navy";
  layout?: "row" | "stack";
  /** "Not a bank" disclosure line. Defaults to FLAGS.notABankDisclosure. */
  showDisclosure?: boolean;
  className?: string;
}

const iconProps = {
  className: "ic",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.8",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: "false",
} as const;

export default function TrustRow({
  placement,
  tone = "light",
  layout = "row",
  showDisclosure = FLAGS.notABankDisclosure,
  className,
}: TrustRowProps) {
  const listClasses = ["trust", tone === "navy" && "trust-navy", layout === "stack" && "stack"]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={["trust-wrap", className].filter(Boolean).join(" ")}>
      <ul className={listClasses} aria-label="Why you can trust Fidura">
        <li>
          <svg {...iconProps}>
            <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
            <path d="M9 12l2 2 4-4" />
          </svg>
          <span>Payments processed by Stripe</span>
        </li>
        <li>
          <svg {...iconProps}>
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" />
          </svg>
          <span>
            Every sender&rsquo;s ID verified{FLAGS.identityChecksLive ? "" : " at launch"}
          </span>
        </li>
        <li>
          <svg {...iconProps}>
            <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
          </svg>
          <span>
            Real people:{" "}
            <a href={SUPPORT_PHONE.href} onClick={() => trackEvent("phone_click", { placement })}>
              {SUPPORT_PHONE.display}
            </a>
          </span>
        </li>
      </ul>
      {showDisclosure && (
        <p className="disclose">
          Fidura is not a bank. Payments are processed by Stripe and held with its partner financial institutions.
        </p>
      )}
    </div>
  );
}
