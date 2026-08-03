"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CloseIcon, MenuIcon } from "./icons";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "For Caregivers", href: "/caregivers" },
  { label: "For Seniors", href: "/seniors" },
  { label: "Compare", href: "/compare" },
];

interface HeaderProps {
  ctaLabel?: string;
  ctaHref?: string;
  activeHref?: string;
}

export default function Header({ ctaLabel = "Get Started", ctaHref = "#get-started", activeHref }: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-secondary-200">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Curo" width={160} height={67} className="h-12 w-auto" priority />
          </Link>

          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={activeHref === link.href ? "page" : undefined}
                  className={`text-body font-medium transition-colors ${
                    activeHref === link.href ? "text-primary-600 font-bold" : "text-secondary-500 hover:text-primary-600"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center">
            <Link href={ctaHref} className="btn btn-primary btn-sm">
              {ctaLabel}
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-md text-secondary-500 hover:bg-secondary-50"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="lg:hidden border-t border-secondary-200 bg-white">
          <ul className="px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={activeHref === link.href ? "page" : undefined}
                  className={`flex items-center min-h-11 py-3 text-body font-medium ${
                    activeHref === link.href ? "text-primary-600 font-bold" : "text-secondary-700 hover:text-primary-600"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2 pb-2">
              <Link href={ctaHref} onClick={() => setOpen(false)} className="btn btn-primary btn-full btn-normal">
                {ctaLabel}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
