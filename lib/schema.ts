// schema.org JSON-LD builders (FE-124). Every value comes from lib/factBlock, lib/contact and lib/register.
// Never add Review, AggregateRating, Product, or Offer markup for our own testimonials or fees:
// self-serving review markup and fee "offers" break Google's structured data guidelines.
import { SITE_URL } from "@/lib/register";
import { SUPPORT_EMAIL, SUPPORT_PHONE } from "@/lib/contact";
import { BRAND_NAME, FORMER_NAME, LEGAL_NAME, MAILING_ADDRESS, SOCIAL_PROFILES } from "@/lib/factBlock";

const CONTEXT = "https://schema.org";
const HOME_URL = `${SITE_URL}/`;

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: BRAND_NAME,
    alternateName: FORMER_NAME,
    ...(LEGAL_NAME ? { legalName: LEGAL_NAME } : {}),
    url: HOME_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/fidura-logo.png`,
      width: 512,
      height: 512,
    },
    telephone: SUPPORT_PHONE.e164,
    email: SUPPORT_EMAIL.address,
    address: {
      "@type": "PostalAddress",
      streetAddress: MAILING_ADDRESS.street,
      addressLocality: MAILING_ADDRESS.city,
      addressRegion: MAILING_ADDRESS.region,
      postalCode: MAILING_ADDRESS.postalCode,
      addressCountry: MAILING_ADDRESS.country,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: SUPPORT_PHONE.e164,
        email: SUPPORT_EMAIL.address,
        areaServed: "US",
        availableLanguage: "English",
        // schema.org times carry no zone and Huntsville is Central time, so `description` carries the visible "ET" hours.
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: SUPPORT_PHONE.days,
          opens: SUPPORT_PHONE.opens,
          closes: SUPPORT_PHONE.closes,
          description: SUPPORT_PHONE.hours,
        },
      },
    ],
    ...(SOCIAL_PROFILES.length > 0 ? { sameAs: SOCIAL_PROFILES } : {}),
  };
}

// No SearchAction: the site has no search.
export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: BRAND_NAME,
    url: HOME_URL,
    inLanguage: "en-US",
    publisher: { "@id": ORG_ID },
  };
}

// Sitewide graph rendered once by app/layout.tsx.
export function siteGraph() {
  return {
    "@context": CONTEXT,
    "@graph": [organizationSchema(), websiteSchema()],
  };
}

export function contactPageSchema({ name, description }: { name: string; description: string }) {
  return {
    "@context": CONTEXT,
    "@type": "ContactPage",
    "@id": `${SITE_URL}/contact#webpage`,
    url: `${SITE_URL}/contact`,
    name,
    description,
    inLanguage: "en-US",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
  };
}

export type FaqItem = { question: string; answer: string };

// Only for FAQs rendered visibly on the same page from the same items.
export function faqPageSchema(items: readonly FaqItem[]) {
  return {
    "@context": CONTEXT,
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.question,
      acceptedAnswer: { "@type": "Answer", text: i.answer },
    })),
  };
}
