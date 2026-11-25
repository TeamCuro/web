import type { Metadata } from "next";
import "./globals.css";
import { SITE_URL } from "@/lib/register";
import { defaultOpenGraph, defaultTwitter } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // "./" resolves against each page's own pathname, so every page gets a self-referencing canonical.
  alternates: { canonical: "./" },
  title: "Write a Check Online | Print, Mail, or Send | Fidura",
  description:
    "Write a check online and print, mail, or send it instantly. Your account number never appears on it, and the person you pay needs no Fidura account.",
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: defaultOpenGraph,
  twitter: defaultTwitter,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
