// schema.org JSON-LD builders. Plain objects; render with components/JsonLd.tsx.
import { SITE_URL } from "@/lib/register";
import { SUPPORT_EMAIL, SUPPORT_PHONE } from "@/lib/contact";

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

// Hours are ET; schema.org OpeningHoursSpecification has no timezone field.
export const SUPPORT_CONTACT_POINT = {
  "@type": "ContactPoint",
  contactType: "customer support",
  telephone: SUPPORT_PHONE.e164,
  email: SUPPORT_EMAIL.address,
  areaServed: "US",
  availableLanguage: "English",
  hoursAvailable: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "20:00",
  },
} as const;

// No logo: public/logo.png is the old CuroPay mark. Add one once a Fidura logo asset exists.
export function organizationNode() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: "Fidura",
    alternateName: "CuroPay", // former brand name; never "Curo"
    legalName: "Curo Co LLC",
    url: `${SITE_URL}/`,
    email: SUPPORT_EMAIL.address,
    telephone: SUPPORT_PHONE.e164,
    address: {
      "@type": "PostalAddress",
      streetAddress: "600 Boulevard South, Ste 104",
      addressLocality: "Huntsville",
      addressRegion: "AL",
      postalCode: "35802",
      addressCountry: "US",
    },
    contactPoint: [SUPPORT_CONTACT_POINT],
  };
}

// No SearchAction: the site has no search.
export function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: `${SITE_URL}/`,
    name: "Fidura",
    inLanguage: "en-US",
    publisher: { "@id": ORG_ID },
  };
}

// Sitewide graph, rendered once in app/layout.tsx.
export function siteGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationNode(), websiteNode()],
  };
}

// /contact. contactPoint is inlined so the page validates standalone with phone and email.
export function contactPageSchema({ name, description }: { name: string; description: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${SITE_URL}/contact#webpage`,
    url: `${SITE_URL}/contact`,
    name,
    description,
    inLanguage: "en-US",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    mainEntity: {
      "@type": "Organization",
      "@id": ORG_ID,
      name: "Fidura",
      url: `${SITE_URL}/`,
      telephone: SUPPORT_PHONE.e164,
      email: SUPPORT_EMAIL.address,
      contactPoint: [SUPPORT_CONTACT_POINT],
    },
  };
}

export type FaqItem = { question: string; answer: string };

// /pricing FAQ. Text must match the visible Q&As exactly.
export function faqPageSchema(items: readonly FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/pricing#faq`,
    mainEntity: items.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer },
    })),
  };
}
