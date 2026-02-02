import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Curo | Modern Check Payments Made Simple & Secure",
  description: "Send secure digital checks with QR codes. Perfect for trustees, caregivers, and anyone who values the simplicity of checks with the security of modern payments.",
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
