import type { ReactNode } from "react";

interface LegalSummaryProps {
  /** Anchor id; other pages link to it (e.g. /privacy#collect). Do not rename. */
  id: string;
  title: string;
  /** Document name used in the lead line, e.g. "Terms" or "policy". */
  docName: string;
  children: ReactNode;
}

/** Plain-language summary box at the top of a legal page (FE-120). Not part of the TOC. */
export default function LegalSummary({ id, title, docName, children }: LegalSummaryProps) {
  return (
    <aside id={id} aria-labelledby={`${id}-title`} className="legal-summary">
      <h2 id={`${id}-title`}>{title}</h2>
      <p className="legal-summary-lead">A plain-language summary. The full {docName} below is what applies.</p>
      {children}
    </aside>
  );
}
