import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Compare | CuroPay",
  description:
    "How CuroPay compares to cashier's checks and money orders, Venmo & Zelle, and True Link — the same familiar check, identity-verified and funds-certified.",
};

function NoSvg() {
  return (
    <svg className="ic-no" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8.5 8.5l7 7M15.5 8.5l-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function YesSvg() {
  return (
    <svg className="ic-yes" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 12l2.5 2.5L16 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BrandTag() {
  return (
    <p className="c-tag">
      <svg className="brand-mark" style={{ width: 22, height: 22 }} viewBox="0 0 34 34" fill="none">
        <rect x="1" y="1" width="32" height="32" rx="9" fill="#092C4C" />
        <path d="M17 6.5l7 2.5v4.8c0 4.3-2.9 7.6-7 8.7-4.1-1.1-7-4.4-7-8.7V9L17 6.5z" fill="#27AE60" />
        <path d="M13.7 15.4l2.3 2.3 4-4.3" stroke="#fff" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      CuroPay
    </p>
  );
}

export default function ComparePage() {
  return (
    <div className="curopay-site">
      <Header active="/compare" />
      <main>
        {/* HERO */}
        <section className="hero" style={{ paddingBottom: 48 }}>
          <div className="wrap wrap-narrow center" style={{ margin: "0 auto" }}>
            <span className="eyebrow" style={{ justifyContent: "center" }}>
              CuroPay vs. the alternatives
            </span>
            <h1 className="promise" style={{ maxWidth: "none" }}>
              How CuroPay compares to what you use today.
            </h1>
            <p className="lede" style={{ margin: "0 auto" }}>
              The same familiar check — but identity-verified, funds-certified, and built with the proof and control
              the alternatives leave out.
            </p>
          </div>
        </section>

        <section className="sec-tight" style={{ paddingTop: 8 }}>
          <div className="wrap">
            {/* BLOCK 1 */}
            <div className="cmp">
              <div className="cmp-head">
                <h3>CuroPay vs. cashier&rsquo;s checks &amp; money orders</h3>
                <p>The same familiar artifact — without the trip, the exposed account details, or the fraud risk.</p>
              </div>
              <div className="cmp-grid">
                <div className="cmp-col them">
                  <p className="c-tag">Cashier&rsquo;s checks &amp; money orders</p>
                  <ul className="clist">
                    <li>
                      <NoSvg />A trip to the bank or store, and a fee, every time
                    </li>
                    <li>
                      <NoSvg />Account and routing numbers printed in the open
                    </li>
                    <li>
                      <NoSvg />No way to verify who&rsquo;s really sending or receiving
                    </li>
                    <li>
                      <NoSvg />Vulnerable to mail theft and loss
                    </li>
                  </ul>
                </div>
                <div className="cmp-col us">
                  <BrandTag />
                  <ul className="clist">
                    <li>
                      <YesSvg />
                      Print at home, mail, or send instantly — no trip
                    </li>
                    <li>
                      <YesSvg />
                      Account and routing numbers are never exposed
                    </li>
                    <li>
                      <YesSvg />
                      Identity-verified and funds-certified on every check
                    </li>
                    <li>
                      <YesSvg />
                      QR-backed, so a stolen check can&rsquo;t simply be cashed
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* BLOCK 2 */}
            <div className="cmp">
              <div className="cmp-head">
                <h3>CuroPay vs. Venmo &amp; Zelle</h3>
                <p>Instant P2P is fine between friends. It was never built to move money for someone else, with proof.</p>
              </div>
              <div className="cmp-grid">
                <div className="cmp-col them">
                  <p className="c-tag">Venmo / Zelle</p>
                  <ul className="clist">
                    <li>
                      <NoSvg />No co-signing and no role-based approvals
                    </li>
                    <li>
                      <NoSvg />No identity verification of the other party
                    </li>
                    <li>
                      <NoSvg />They tell you to only send to people you already trust
                    </li>
                    <li>
                      <NoSvg />Little recourse if something goes wrong
                    </li>
                  </ul>
                </div>
                <div className="cmp-col us">
                  <BrandTag />
                  <ul className="clist">
                    <li>
                      <YesSvg />
                      Co-signing and role-based approvals built in
                    </li>
                    <li>
                      <YesSvg />
                      Identity verified on both sides of the transfer
                    </li>
                    <li>
                      <YesSvg />
                      Certified funds — proof, not just a promise
                    </li>
                    <li>
                      <YesSvg />A real receipt and audit trail on every payment
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* BLOCK 3 */}
            <div className="cmp">
              <div className="cmp-head">
                <h3>CuroPay vs. True Link</h3>
                <p>The closest option built for this job — but a different tool. True Link is a prepaid card; CuroPay is a certified payment rail.</p>
              </div>
              <div className="cmp-grid">
                <div className="cmp-col them">
                  <p className="c-tag">True Link (prepaid card)</p>
                  <ul className="clist">
                    <li>
                      <NoSvg />A prepaid-card model, built around card spending
                    </li>
                    <li>
                      <NoSvg />Not designed for recurring bill-pay, rent, or reimbursement
                    </li>
                    <li>
                      <NoSvg />No printable, mailable check for those who still need one
                    </li>
                  </ul>
                </div>
                <div className="cmp-col us">
                  <BrandTag />
                  <ul className="clist">
                    <li>
                      <YesSvg />A certified check / payment rail, not a card
                    </li>
                    <li>
                      <YesSvg />
                      Built for recurring bill-pay, rent, and reimbursement
                    </li>
                    <li>
                      <YesSvg />
                      Keeps the printable, QR-backed check people still rely on
                    </li>
                    <li>
                      <YesSvg />
                      Approvals and an audit trail for fiduciary use
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ONE-LINE FRAME */}
        <section className="sec bg-navy">
          <div className="wrap wrap-narrow center" style={{ margin: "0 auto" }}>
            <p className="lede" style={{ color: "#cdd9e4", margin: 0 }}>
              Paper checks and money orders mean fraud, delays, and exposed account numbers. P2P apps offer no
              verification and no recourse. CuroPay is the only one built to move the money itself —{" "}
              <strong style={{ color: "#fff" }}>certified, verified, and controlled.</strong>
            </p>
          </div>
        </section>

        {/* CTA BAND */}
        <section className="sec-sm">
          <div className="wrap">
            <div className="cta-band">
              <h2>See the difference on your next payment.</h2>
              <p>Move money the way you already do — with proof and control the alternatives don&rsquo;t offer.</p>
              <div className="cta-row" style={{ justifyContent: "center" }}>
                <a className="btn btn-white btn-lg" href="https://app.getcuro.com/register">
                  Create your account
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
