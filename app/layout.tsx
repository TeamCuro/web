import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fidura | The Trust of a Certified Check, Brought to Digital Money",
  description:
    "Fidura replaces the paper check with an identity-verified, funds-certified digital equivalent — printable, mailable, or sent instantly — without ever exposing an account or routing number.",
  keywords: ["digital checks", "e-checks", "secure payments", "trustee payments", "caregiver payments", "QR check"],
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
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
