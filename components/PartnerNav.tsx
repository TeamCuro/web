"use client";

import { useState } from "react";
import Header from "./Header";
import PartnerModal from "./PartnerModal";

export default function PartnerNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Header showSignIn={false} ctaLabel="Become a partner" onCtaClick={() => setOpen(true)} />
      <PartnerModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
