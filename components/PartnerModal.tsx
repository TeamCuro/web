"use client";

import { useEffect, useRef } from "react";
import PartnerForm from "./PartnerForm";

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]):not([type=hidden]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

function isVisible(el: HTMLElement) {
  return el.isConnected && el.getClientRects().length > 0;
}

function focusables(root: HTMLElement) {
  return Array.from(root.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
    (el) => !el.classList.contains("honeypot") && !el.closest(".honeypot") && el.getClientRects().length > 0,
  );
}

export default function PartnerModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null);
  // Read onClose via a ref so focus setup/restore runs only on open/close, not on parent re-renders.
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    document.body.style.overflow = "hidden";
    cardRef.current?.querySelector<HTMLElement>(".modal-close")?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onCloseRef.current();
        return;
      }
      if (event.key !== "Tab") return;
      const card = cardRef.current;
      if (!card) return;
      const items = focusables(card);
      if (items.length === 0) {
        event.preventDefault();
        return;
      }
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;
      if (!(active instanceof HTMLElement) || !card.contains(active)) {
        event.preventDefault();
        first.focus();
      } else if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
      if (previous && isVisible(previous)) {
        previous.focus();
      } else {
        const toggle = document.querySelector<HTMLElement>(".nav-toggle");
        if (toggle && isVisible(toggle)) toggle.focus();
      }
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="modal-overlay"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div ref={cardRef} className="modal-card" role="dialog" aria-modal="true" aria-labelledby="pm-title">
        <button type="button" className="modal-close" aria-label="Close" onClick={onClose}>
          ×
        </button>
        <h2 id="pm-title">Let&rsquo;s build a referral relationship.</h2>
        <p>Tell us about your clients and we&rsquo;ll take it from there.</p>
        <PartnerForm />
      </div>
    </div>
  );
}
