"use client";

import Link from "next/link";
import { useState } from "react";

const links = [["Home", "/"], ["For Caregivers", "/caregivers"], ["For Seniors", "/seniors"], ["Compare", "/compare"]] as const;

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return <Link className={`brand ${inverse ? "brand-inverse" : ""}`} href="/" aria-label="CuroPay home">
    <span className="brand-mark" aria-hidden="true"><svg viewBox="0 0 34 34" fill="none"><rect x="1" y="1" width="32" height="32" rx="9" fill="currentColor" /><path d="M17 6.5 24 9v4.8c0 4.3-2.9 7.6-7 8.7-4.1-1.1-7-4.4-7-8.7V9l7-2.5Z" fill="#27AE60" /><path d="m13.7 15.4 2.3 2.3 4-4.3" stroke="#fff" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
    <span>CuroPay</span>
  </Link>;
}

export default function Header({ activeHref }: { activeHref?: string }) {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="wrap nav-inner">
    <Brand />
    <nav className={open ? "nav-menu open" : "nav-menu"} aria-label="Primary">
      {links.map(([label, href]) => <Link key={href} href={href} aria-current={activeHref === href ? "page" : undefined} onClick={() => setOpen(false)}>{label}</Link>)}
      <div className="nav-mobile-actions"><Link href="https://app.getcuro.com/login">Sign in</Link><Link className="button button-primary" href="https://app.getcuro.com/register">Create account</Link></div>
    </nav>
    <div className="nav-actions"><Link className="signin" href="https://app.getcuro.com/login">Sign in</Link><Link className="button button-primary button-small" href="https://app.getcuro.com/register">Create account</Link></div>
    <button className="nav-toggle" type="button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /><span /></button>
  </div></header>;
}
