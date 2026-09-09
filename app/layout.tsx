import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://getcuro.com"),
  title: "CuroPay | Certified Money, Familiar as a Check",
  description: "Identity-verified, funds-certified digital checks you can print, mail, or send instantly — without exposing account details.",
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
        {children}
      </body>
    </html>
  );
}
