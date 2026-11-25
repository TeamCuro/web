// Single source of truth for the support phone line. Change the number here only.
const E164 = "+12562131733";

export const SUPPORT_PHONE = {
  display: "(256) 213-1733",
  e164: E164, // tel: href and Organization schema telephone (WEB 03.4-5)
  href: `tel:${E164}`,
  hours: "Mon–Fri 8am–8pm ET", // en dashes, matches design
  // Same hours for the Organization contactPoint (FE-124). Keep in sync with `hours`.
  days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  opens: "08:00",
  closes: "20:00",
} as const;

export const SUPPORT_EMAIL = {
  address: "support@fidurapay.com",
  href: "mailto:support@fidurapay.com",
} as const;

export const LEGAL_EMAIL = {
  address: "legal@fidurapay.com",
  href: "mailto:legal@fidurapay.com",
} as const;

export const PRIVACY_EMAIL = {
  address: "privacy@fidurapay.com",
  href: "mailto:privacy@fidurapay.com",
} as const;
