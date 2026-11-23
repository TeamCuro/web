"use client";

import { useEffect, useRef, useState } from "react";

export interface LegalTocItem {
  id: string;
  title: string;
}

interface LegalTocProps {
  items: LegalTocItem[];
  /** Count shown on the phone disclosure button, e.g. "On this page (18 sections)". */
  count: number;
}

// A heading counts as "current" once its top passes this line (sticky header + scroll-padding 92px, plus slack).
const ACTIVE_LINE = 100;

/**
 * Legal page table of contents (FE-119 · Design 2 §5).
 * Desktop: sticky left column with the current section highlighted while scrolling.
 * Phone (≤900px): a disclosure button, open on first load, that collapses the list.
 */
export default function LegalToc({ items, count }: LegalTocProps) {
  const [open, setOpen] = useState(true);
  const [current, setCurrent] = useState(items[0]?.id);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const headings = items
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (headings.length === 0) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      let active = headings[0].id;
      for (const el of headings) {
        if (el.getBoundingClientRect().top - ACTIVE_LINE <= 0) active = el.id;
        else break;
      }
      setCurrent(active);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [items]);

  // Desktop TOC scrolls internally when taller than the viewport: keep the current entry in view.
  useEffect(() => {
    const nav = navRef.current;
    if (!nav || nav.scrollHeight <= nav.clientHeight) return;
    const link = nav.querySelector<HTMLElement>('a[aria-current="true"]');
    if (!link) return;
    const pad = 16;
    if (link.offsetTop < nav.scrollTop + pad) nav.scrollTop = link.offsetTop - pad;
    else if (link.offsetTop + link.offsetHeight > nav.scrollTop + nav.clientHeight - pad)
      nav.scrollTop = link.offsetTop + link.offsetHeight - nav.clientHeight + pad;
  }, [current]);

  return (
    <nav ref={navRef} className="legal-toc" aria-label="On this page">
      <p className="legal-toc-title">On this page</p>
      <button
        type="button"
        className="legal-toc-toggle"
        aria-expanded={open}
        aria-controls="legal-toc-list"
        onClick={() => setOpen((v) => !v)}
      >
        On this page ({count} sections)
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden="true"
          focusable="false"
        >
          {open ? <path d="M5 12h14" /> : <path d="M12 5v14M5 12h14" />}
        </svg>
      </button>
      <ol id="legal-toc-list" className={open ? undefined : "is-closed"}>
        {items.map(({ id, title }) => (
          <li key={id}>
            <a href={`#${id}`} aria-current={current === id ? "true" : undefined}>
              {title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
