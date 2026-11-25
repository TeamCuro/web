import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Write a Check Online | Print, Mail, or Send | Fidura",
  description:
    "Write a check online and print, mail, or send it instantly. Your account number never appears on it, and the person you pay needs no Fidura account.",
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
