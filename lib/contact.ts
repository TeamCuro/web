// Single source of truth for the support phone line. Change the number here only.
const E164 = "+12562131733";

export const SUPPORT_PHONE = {
  display: "(256) 213-1733",
  e164: E164, // tel: href and Organization schema telephone (WEB 03.4-5)
  href: `tel:${E164}`,
  hours: "Mon–Fri 8am–8pm ET", // en dashes, matches design
  schemaHours: "Mo-Fr 08:00-20:00", // schema.org openingHours, for the Organization schema ticket
} as const;
