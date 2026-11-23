import Link from "next/link";
import PhoneLink from "./PhoneLink";
import { SECURITY_LINE } from "@/lib/trust";
import { SUPPORT_EMAIL } from "@/lib/contact";
import { FACT_BLOCK } from "@/lib/factBlock";
import { isLive } from "@/lib/routes";

// Epic 08 pages; each appears once its route is added to LIVE_ROUTES.
const HELP_TRUST_LINKS = [
  { href: "/help", label: "Help" },
  { href: "/security", label: "Security" },
  { href: "/receive", label: "Got a Fidura check?" },
  { href: "/accessibility", label: "Accessibility" },
  { href: "/about", label: "About" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const helpTrust = HELP_TRUST_LINKS.filter((l) => isLive(l.href));

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className={helpTrust.length ? "footer-grid" : "footer-grid footer-grid-4"}>
          <div className="footer-brand">
            <Link className="brand" href="/" aria-label="Fidura home">
              <svg className="brand-mark" viewBox="0 0 34 34" fill="none" aria-hidden="true" focusable="false">
                <rect x="1" y="1" width="32" height="32" rx="9" fill="#fff" />
                <path d="M17 6.5l7 2.5v4.8c0 4.3-2.9 7.6-7 8.7-4.1-1.1-7-4.4-7-8.7V9L17 6.5z" fill="#27AE60" />
                <path d="M13.7 15.4l2.3 2.3 4-4.3" stroke="#fff" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="brand-word">Fidura</span>
            </Link>
            <p className="footer-tag">Fidura: write a check online. Print, mail, or send it instantly.</p>
            {FACT_BLOCK && <p className="footer-fact">{FACT_BLOCK}</p>}
          </div>
          <div className="footer-sec">
            <p className="flab">Product</p>
            <ul>
              <li>
                <Link href="/#how">How it works</Link>
              </li>
              <li>
                <Link href="/compare">Compare</Link>
              </li>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
            </ul>
          </div>
          <div className="footer-sec">
            <p className="flab">Who it&rsquo;s for</p>
            <ul>
              <li>
                <Link href="/caregivers">Caregivers &amp; fiduciaries</Link>
              </li>
              <li>
                <Link href="/seniors">Seniors</Link>
              </li>
              <li>
                <Link href="/partners">Partners</Link>
              </li>
            </ul>
          </div>
          {helpTrust.length > 0 && (
            <div className="footer-sec">
              <p className="flab">Help &amp; trust</p>
              <ul>
                {helpTrust.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="footer-sec footer-contact">
            <p className="flab">Contact</p>
            <PhoneLink placement="footer" tone="navy" />
            <ul>
              <li>
                <a href={SUPPORT_EMAIL.href}>{SUPPORT_EMAIL.address}</a>
              </li>
            </ul>
            <p className="footer-note">A real person answers. We reply within one business day.</p>
            <ul>
              <li>
                <Link href="/contact">Contact page</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-security">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
            <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
            <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {SECURITY_LINE}
        </div>
        <div className="footer-legal">
          <span>© {year} Fidura. All rights reserved.</span>
          <nav aria-label="Legal" className="legal-links">
            <Link href="/terms">Terms of Service</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
