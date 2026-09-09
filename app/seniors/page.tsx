import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "For Seniors | CuroPay",
  description:
    "Keep sending checks exactly the way you always have — now with a verified identity behind every one, and a real person to call if anything is unclear.",
};

function CheckSvg() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M5 12l4 4L19 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function SeniorsPage() {
  return (
    <div className="curopay-site senior">
      <Header active="/seniors" ctaLabel="Get started" />
      <main>
        {/* HERO */}
        <section className="hero">
          <div className="wrap">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
              <div>
                <span className="eyebrow">For Seniors</span>
                <h1 className="promise">The same check you trust — just safer.</h1>
                <p className="lede">
                  Keep sending checks exactly the way you always have. Print one, mail it, or hand it over — now with
                  a verified identity behind every one, and a real person to call if anything is unclear.
                </p>
                <div className="cta-row" id="signup">
                  <a className="btn btn-primary btn-lg" href="https://app.getcuro.com/register">
                    Create your account
                  </a>
                </div>
              </div>
              <div className="appshot">
                <div
                  className="appwin"
                  role="img"
                  aria-label="CuroPay 'Send a Check' screen: entering a $250.00 amount with a memo, ready to continue — the account number never appears on the check."
                >
                  <div className="awtop">
                    <i></i>
                    <i></i>
                    <i></i>
                    <b>app.curopay.com — Send a Check</b>
                  </div>
                  <div className="awbody">
                    <div className="aw-steps">
                      <span className="on">Amount</span>
                      <span>Delivery</span>
                      <span>Payee</span>
                      <span>Funding</span>
                      <span>Review</span>
                    </div>
                    <div>
                      <div className="aw-eyebrow">Step 1 of 5</div>
                      <div className="aw-title">How much are you sending?</div>
                      <div className="aw-sub">Enter the check amount and an optional memo.</div>
                    </div>
                    <div className="aw-amount">
                      <span className="cur">$</span>
                      <span className="amt">250.00</span>
                    </div>
                    <div className="aw-field">
                      <span className="fl">Memo (optional)</span>Rent — October
                    </div>
                    <div className="aw-btns">
                      <span className="aw-btn ghost">Cancel</span>
                      <span className="aw-btn green">Next →</span>
                    </div>
                  </div>
                </div>
                <p className="appshot-cap">
                  <CheckSvg />
                  Write your check — who it&rsquo;s for and the amount. Your account number stays private.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS (simplified, larger) */}
        <section className="sec">
          <div className="wrap">
            <div className="sec-head center" style={{ marginBottom: 56 }}>
              <h2>Three simple steps.</h2>
            </div>
            <div className="steps">
              <div className="step">
                <span className="step-n"></span>
                <h3>Write your check</h3>
                <p>Enter who it&rsquo;s for and the amount. Your account number stays private — it&rsquo;s never printed on the check.</p>
              </div>
              <div className="step">
                <span className="step-n"></span>
                <h3>Print or mail it</h3>
                <p>Print it at home and mail it, or hand it over in person. Each check has a QR mark that proves it&rsquo;s real.</p>
              </div>
              <div className="step">
                <span className="step-n"></span>
                <h3>Know it arrived</h3>
                <p>You&rsquo;ll see a clear confirmation when it&rsquo;s claimed. No more wondering whether it cleared.</p>
              </div>
            </div>
          </div>
        </section>

        {/* PROOF POINTS */}
        <section className="sec bg-tint">
          <div className="wrap">
            <div className="sec-head center" style={{ marginBottom: 48 }}>
              <span className="eyebrow" style={{ justifyContent: "center" }}>
                Why it&rsquo;s safer
              </span>
              <h2>What every CuroPay check gives you.</h2>
            </div>
            <div className="proof-grid">
              <div className="proof">
                <span className="p-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M8 8h3v3H8zM13 13h3v3h-3zM13 8h3M8 13v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </span>
                <h3>A printable, QR-backed check</h3>
                <p>The familiar paper artifact you already trust — now with a secure code that proves it&rsquo;s genuine.</p>
              </div>
              <div className="proof">
                <span className="p-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M4 20c0-3.3 3.6-5 8-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M16.5 18.5l1.8 1.8 3.2-3.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <h3>Verified identity</h3>
                <p>Every check is tied to a verified identity, so a stolen check can&rsquo;t simply be cashed by someone else.</p>
              </div>
              <div className="proof">
                <span className="p-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4 6.5A2.5 2.5 0 016.5 4h1.7c.5 0 .9.3 1 .8l.7 2.4c.1.5-.1 1-.5 1.2l-1.2.8a11 11 0 004.6 4.6l.8-1.2c.3-.4.8-.6 1.2-.5l2.4.7c.5.1.8.5.8 1v1.7a2.5 2.5 0 01-2.5 2.5A13.5 13.5 0 014 6.5z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <h3>A real person to call</h3>
                <p>Not sure about something? Call and talk to a person. We&rsquo;ll walk you through it, step by step.</p>
              </div>
            </div>
          </div>
        </section>

        {/* OBJECTION */}
        <section className="sec">
          <div className="wrap">
            <div className="sec-head center" style={{ marginBottom: 44 }}>
              <h2>&ldquo;Is this still safe, the way a check is safe?&rdquo;</h2>
            </div>
            <div className="objection">
              <div className="q">
                <p className="q-label">A fair question</p>
                <p>
                  You&rsquo;ve trusted checks your whole life. You want to know this is the same thing — not a
                  confusing new app that could go wrong.
                </p>
              </div>
              <div className="a">
                <p className="a-label">Yes — and safer</p>
                <p>
                  It&rsquo;s the same familiar check you already know how to use. The difference is that it&rsquo;s
                  now fraud-protected and identity-verified, so it&rsquo;s far harder to steal or fake. And if you
                  ever get stuck, a real person is one phone call away.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA BAND */}
        <section className="sec-sm">
          <div className="wrap">
            <div className="cta-band">
              <h2>Print your first verified check.</h2>
              <p>Keep the check you trust. Add the protection it never had.</p>
              <div className="cta-row">
                <a className="btn btn-white btn-lg" href="https://app.getcuro.com/register">
                  Get started
                </a>
              </div>
              <div className="trust-row">
                <span className="badge">
                  <svg className="badge-check" viewBox="0 0 20 20" fill="none">
                    <path d="M16.5 5.5L8 14L4 10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Verified identity
                </span>
                <span className="badge">
                  <svg viewBox="0 0 20 20" fill="none">
                    <path
                      d="M4 6.5A2.5 2.5 0 016.5 4h1.7c.5 0 .9.3 1 .8l.7 2.4c.1.5-.1 1-.5 1.2l-1.2.8a11 11 0 004.6 4.6l.8-1.2c.3-.4.8-.6 1.2-.5l2.4.7c.5.1.8.5.8 1v1.7a2.5 2.5 0 01-2.5 2.5A13.5 13.5 0 014 6.5z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                  </svg>
                  A real person to call
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
