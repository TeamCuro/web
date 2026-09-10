"use client";

import { useState } from "react";
import Link from "next/link";
import { MenuIcon, CloseIcon } from "./icons";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "For Caregivers", href: "/caregivers" },
  { label: "For Seniors", href: "/seniors" },
  { label: "Compare", href: "/compare" },
];

interface HeaderProps {
  active?: string;
  ctaLabel?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
  showSignIn?: boolean;
}

export default function Header({
  active,
  ctaLabel = "Create account",
  ctaHref = "https://app.getcuro.com/register",
  onCtaClick,
  showSignIn = true,
}: HeaderProps) {
  const [open, setOpen] = useState(false);

  const cta = onCtaClick ? (
    <button type="button" className="btn btn-primary btn-sm" onClick={onCtaClick}>
      {ctaLabel}
    </button>
  ) : (
    <a className="btn btn-primary btn-sm" href={ctaHref}>
      {ctaLabel}
    </a>
  );

  return (
    <header className="site-nav">
      <div className="wrap nav-inner">
        <Link className="brand" href="/" aria-label="CuroPay home">
          <svg className="brand-mark" viewBox="0 0 34 34" fill="none" aria-hidden="true">
            <rect x="1" y="1" width="32" height="32" rx="9" fill="#092C4C" />
            <path d="M17 6.5l7 2.5v4.8c0 4.3-2.9 7.6-7 8.7-4.1-1.1-7-4.4-7-8.7V9L17 6.5z" fill="#27AE60" />
            <path d="M13.7 15.4l2.3 2.3 4-4.3" stroke="#fff" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="brand-word">CuroPay</span>
        </Link>
        <nav aria-label="Primary">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} aria-current={active === link.href ? "page" : undefined}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav-right">
          {showSignIn && (
            <a className="nav-signin" href="https://app.getcuro.com/login">
              Sign in
            </a>
          )}
          {cta}
        </div>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
      <div id="mobile-nav" className={`mobile-nav${open ? " open" : ""}`}>
        <div className="wrap">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} aria-current={active === link.href ? "page" : undefined} onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="nav-right">
            {showSignIn && (
              <a className="nav-signin" href="https://app.getcuro.com/login">
                Sign in
              </a>
            )}
            {onCtaClick ? (
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={() => {
                  setOpen(false);
                  onCtaClick();
                }}
              >
                {ctaLabel}
              </button>
            ) : (
              <a className="btn btn-primary btn-sm" href={ctaHref}>
                {ctaLabel}
              </a>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
