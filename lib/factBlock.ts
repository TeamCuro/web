// Single source of truth for company facts shown in the footer, /contact, /about and the Organization JSON-LD (WEB 08.2, FE-124).
export const BRAND_NAME = "Fidura";

// Former brand, listed as Organization alternateName while people still search it. Never "Curo" alone.
export const FORMER_NAME = "CuroPay";

// Legal name still open. Set it once confirmed: the footer fact line and Organization legalName then appear. null hides both.
export const LEGAL_NAME: string | null = null;

export const MAILING_ADDRESS = {
  recipient: "Curo Co LLC",
  street: "600 Boulevard South, Ste 104",
  city: "Huntsville",
  region: "AL",
  postalCode: "35802",
  country: "US",
} as const;

// Official profiles (BE-104). Emitted as Organization sameAs once non-empty.
export const SOCIAL_PROFILES: readonly string[] = [];

export const FACT_BLOCK: string | null = LEGAL_NAME
  ? `${LEGAL_NAME} · ${MAILING_ADDRESS.street}, ${MAILING_ADDRESS.city}, ${MAILING_ADDRESS.region} ${MAILING_ADDRESS.postalCode}`
  : null;
