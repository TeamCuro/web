import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalToc from "@/components/LegalToc";

export interface LegalSection {
  /** Stable anchor id, e.g. "t-3". Linked from the TOC and from other pages; do not rename. */
  id: string;
  title: string;
  body: ReactNode;
}

interface LegalPageProps {
  title: string;
  updated: string;
  sections: LegalSection[];
}

/**
 * Standard template for /terms and /privacy (FE-119 · Design 2 §5): shared Header and Footer,
 * a table of contents built from `sections`, stable heading ids, and "Back to top" after each section.
 */
export default function LegalPage({ title, updated, sections }: LegalPageProps) {
  // TOC button count: numbered sections when the document is numbered (Terms: 18, Overview excluded),
  // otherwise every section (Privacy: 13).
  const numbered = sections.filter((s) => /^\d+\./.test(s.title)).length;
  const count = numbered || sections.length;

  return (
    <div className="curopay-site">
      <Header />
      <main id="main" tabIndex={-1} className="legal">
        <div className="wrap legal-grid">
          <div className="legal-head">
            <h1>{title}</h1>
            <p className="legal-updated">Last updated: {updated}</p>
          </div>
          <LegalToc items={sections.map(({ id, title }) => ({ id, title }))} count={count} />
          <div className="legal-body">
            {sections.map(({ id, title, body }) => (
              <section key={id} aria-labelledby={id}>
                <h2 id={id}>{title}</h2>
                {body}
                <a href="#main" className="legal-backtop">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M12 19V5M6 11l6-6 6 6" />
                  </svg>
                  Back to top
                </a>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
