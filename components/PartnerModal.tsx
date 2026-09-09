"use client";

import { useEffect } from "react";
import PartnerForm from "./PartnerForm";

export default function PartnerModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="modal-overlay"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="modal-card" role="dialog" aria-modal="true" aria-labelledby="pm-title">
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
