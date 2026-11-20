"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MenuIcon, CloseIcon } from "./icons";
import PhoneLink from "./PhoneLink";

// `short` is the tablet label (901-1180px); the full label stays the accessible name.
const navLinks: { label: string; short?: string; href: string }[] = [
  { label: "For Caregivers", short: "Caregivers", href: "/caregivers" },
  { label: "For Seniors", short: "Seniors", href: "/seniors" },
  { label: "Compare", href: "/compare" },
  { label: "Pricing", href: "/pricing" },
];

// Phone menu (FE-113): full labels plus Home, Partners and Contact.
const menuLinks: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  ...navLinks.map(({ label, href }) => ({ label, href })),
  { label: "Partners", href: "/partners" },
  { label: "Contact", href: "/contact" },
];

interface HeaderProps {
  active?: string;
  ctaLabel?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
}

function ChevronRightIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      style={{ color: "var(--fg-2)", flex: "none" }}
    >
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

export default function Header({
  active,
  ctaLabel = "Create account",
  ctaHref = "https://app.getcuro.com/register",
  onCtaClick,
}: HeaderProps) {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Keyboard while open: focus the first link, Escape closes, Tab/Shift+Tab stay inside [toggle, ...panel].
  useEffect(() => {
    if (!open) return;
    const firstLink = () => panelRef.current?.querySelector<HTMLElement>(".nav-links a[href]") ?? null;
    firstLink()?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (event.key !== "Tab") return;
      const toggle = toggleRef.current;
      const panel = panelRef.current;
      if (!toggle || !panel) return;
      const items: HTMLElement[] = [
        toggle,
        ...Array.from(panel.querySelectorAll<HTMLElement>("a[href], button:not([disabled])")),
      ];
      const index = items.indexOf(document.activeElement as HTMLElement);
      event.preventDefault();
      if (index === -1) {
        firstLink()?.focus();
        return;
      }
      const next = event.shiftKey
        ? (index - 1 + items.length) % items.length
        : (index + 1) % items.length;
      items[next].focus();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // While open: lock page scroll, close past 900px, close on pointerdown outside the header.
  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const prevOverflow = root.style.overflow;
    root.style.overflow = "hidden";

    const mql = window.matchMedia("(min-width: 901px)");
    function onViewportChange(event: MediaQueryListEvent) {
      if (event.matches) setOpen(false);
    }
    mql.addEventListener("change", onViewportChange);

    function onPointerDown(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);

    return () => {
      root.style.overflow = prevOverflow;
      mql.removeEventListener("change", onViewportChange);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

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
    <header className="site-nav" ref={headerRef}>
      <div className="wrap nav-inner">
        <Link className="brand" href="/" aria-label="Fidura home">
          <svg className="brand-mark" viewBox="0 0 34 34" fill="none" aria-hidden="true" focusable="false">
            <rect x="1" y="1" width="32" height="32" rx="9" fill="#092C4C" />
            <path d="M17 6.5l7 2.5v4.8c0 4.3-2.9 7.6-7 8.7-4.1-1.1-7-4.4-7-8.7V9L17 6.5z" fill="#27AE60" />
            <path d="M13.7 15.4l2.3 2.3 4-4.3" stroke="#fff" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="brand-word">Fidura</span>
        </Link>
        <nav aria-label="Primary">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active === link.href ? "page" : undefined}
                  aria-label={link.short ? link.label : undefined}
                >
                  {link.short ? (
                    <>
                      <span className="nl-full">{link.label}</span>
                      <span className="nl-short">{link.short}</span>
                    </>
                  ) : (
                    link.label
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav-right">
          <PhoneLink placement="header" size="compact" />
          <a className="nav-signin" href="https://app.getcuro.com/login">
            Sign in
          </a>
          {cta}
        </div>
        <button
          type="button"
          ref={toggleRef}
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
      <div id="mobile-nav" ref={panelRef} className={`mobile-nav${open ? " open" : ""}`}>
        <div className="wrap">
          <ul className="nav-links">
            {menuLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} aria-current={active === link.href ? "page" : undefined} onClick={() => setOpen(false)}>
                  {link.label}
                  <ChevronRightIcon />
                </Link>
              </li>
            ))}
          </ul>
          <div className="nav-right">
            <PhoneLink placement="mobile_menu" block />
            {onCtaClick ? (
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  setOpen(false);
                  onCtaClick();
                }}
              >
                {ctaLabel}
              </button>
            ) : (
              <a className="btn btn-primary" href={ctaHref} onClick={() => setOpen(false)}>
                {ctaLabel}
              </a>
            )}
            <a className="btn btn-outline" href="https://app.getcuro.com/login" onClick={() => setOpen(false)}>
              Sign in
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
