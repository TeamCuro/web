"use client";

import { SUPPORT_PHONE } from "@/lib/contact";
import { trackEvent } from "@/lib/analytics";

interface PhoneLinkProps {
  /** Analytics label, e.g. "header", "mobile_menu", "footer", "seniors_hero", "cta_band". */
  placement: string;
  tone?: "light" | "navy";
  size?: "compact" | "default" | "lg";
  /** Full-width bordered button style (mobile menu). */
  block?: boolean;
  showHours?: boolean;
  className?: string;
}

export default function PhoneLink({
  placement,
  tone = "light",
  size = "default",
  block = false,
  showHours = true,
  className,
}: PhoneLinkProps) {
  const classes = [
    "phone-link",
    tone === "navy" && "phone-link-navy",
    size === "compact" && "phone-link-compact",
    size === "lg" && "phone-link-lg",
    block && "phone-link-block",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const label = block ? `Call ${SUPPORT_PHONE.display}` : SUPPORT_PHONE.display;

  return (
    <a href={SUPPORT_PHONE.href} className={classes} onClick={() => trackEvent("phone_click", { placement })}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
      </svg>
      <span>
        <b>{label}</b>
        {showHours && <small className="phone-link-hours">{SUPPORT_PHONE.hours}</small>}
      </span>
    </a>
  );
}
