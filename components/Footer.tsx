import Link from "next/link";
import PhoneLink from "./PhoneLink";
import { SECURITY_LINE } from "@/lib/trust";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link className="brand" href="/" aria-label="Fidura home">
              <svg className="brand-mark" viewBox="0 0 34 34" fill="none" aria-hidden="true" focusable="false">
                <rect x="1" y="1" width="32" height="32" rx="9" fill="#fff" />
                <path d="M17 6.5l7 2.5v4.8c0 4.3-2.9 7.6-7 8.7-4.1-1.1-7-4.4-7-8.7V9L17 6.5z" fill="#27AE60" />
                <path d="M13.7 15.4l2.3 2.3 4-4.3" stroke="#fff" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="brand-word">Fidura</span>
            </Link>
            <p>
              Certified money, familiar as a check. An identity-verified, funds-certified digital check for the
              people who still rely on the trust of a check.
            </p>
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
                <Link href="/caregivers">Caregivers &amp; Fiduciaries</Link>
              </li>
              <li>
                <Link href="/seniors">Seniors</Link>
              </li>
            </ul>
          </div>
          <div className="footer-sec">
            <p className="flab">Partners</p>
            <ul>
              <li>
                <Link href="/partners">Become a Partner</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer-sec footer-contact">
            <p className="flab">Contact</p>
            <PhoneLink placement="footer" tone="navy" />
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
          <span className="legal-links">
            <Link href="/terms">Terms of Service</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
