"use client";

import type { MouseEventHandler, ReactNode } from "react";
import { REGISTER_CTA_LABEL, type Persona } from "@/lib/register";
import { useRegisterHref } from "@/lib/utm";

interface RegisterLinkProps {
  persona?: Persona;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  children?: ReactNode;
}

export default function RegisterLink({ persona, className, onClick, children = REGISTER_CTA_LABEL }: RegisterLinkProps) {
  return (
    <a className={className} href={useRegisterHref(persona)} onClick={onClick}>
      {children}
    </a>
  );
}
