import type { Metadata } from "next";

export type OgImage = { url: string; width: number; height: number; alt: string };

// Interim branded card. Swap url/alt to the Fidura check render when WEB 11.2 delivers (everything inherits from here).
export const DEFAULT_OG_IMAGE: OgImage = {
  url: "/og/fidura-default.png",
  width: 1200,
  height: 630,
  alt: "Fidura: the trust of a certified check, brought to digital money.",
};

export const PARTNERS_OG_IMAGE: OgImage = {
  url: "/og/fidura-partners.png",
  width: 1200,
  height: 630,
  alt: "Fidura partner program for elder law attorneys, CPAs, fiduciaries, and community banks.",
};

// No title/description: Next fills them from each page's own metadata.
// url "./" resolves against each page's pathname (canonical URL).
export const defaultOpenGraph = {
  siteName: "Fidura",
  type: "website",
  locale: "en_US",
  url: "./",
  images: [DEFAULT_OG_IMAGE],
} satisfies NonNullable<Metadata["openGraph"]>;

export const defaultTwitter = {
  card: "summary_large_image",
  images: [DEFAULT_OG_IMAGE],
} satisfies NonNullable<Metadata["twitter"]>;

// Per-page image override. Spreads defaults because Next replaces openGraph/twitter objects
// wholesale; title/description/url still inherit from the page.
export function socialImage(image: OgImage): Pick<Metadata, "openGraph" | "twitter"> {
  return {
    openGraph: { ...defaultOpenGraph, images: [image] },
    twitter: { ...defaultTwitter, images: [image] },
  };
}
