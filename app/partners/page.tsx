import type { Metadata } from "next";
import Footer from "@/components/Footer";
import PartnerForm from "@/components/PartnerForm";
import PartnerNav from "@/components/PartnerNav";

export const metadata: Metadata = {
  title: "Partners | CuroPay",
  description:
    "CuroPay partners with elder-law attorneys, CPAs, fiduciaries, community banks, and credit unions to protect the clients and members they already serve.",
};

function CheckSvg() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M5 12l4 4L19 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function PartnersPage() {
  return (
    <div className="curopay-site">
      <PartnerNav />
      <main>
        {/* HERO */}
        <section className="partner-hero">
          <div className="wrap">
            <div className="partner-hero-grid">
              <div>
                <span className="eyebrow">Partner with CuroPay</span>
                <h1>Protect the clients who trust you — and grow the relationship while you do it.</h1>
                <p>
                  CuroPay is a certified digital-check platform for the caregivers, fiduciaries, and older clients
                  you already serve. Recommend it with confidence, cut the fraud and paperwork that lands back on
                  your desk, and stay the name your clients count on.
                </p>
                <div className="cta-row">
                  <a className="btn btn-secondary btn-lg" href="#tracks">
                    Explore partnership
                  </a>
                  <a className="btn btn-outline-light btn-lg" href="#refer">
                    Refer a client
                  </a>
                </div>
              </div>
              <div className="hero-media hero-scene">
                <div
                  className="scene-check"
                  role="img"
                  aria-label="A CuroPay certified digital check made out to Riverside Home Care for $1,250.00, marked identity-verified with a QR code."
                >
                  <div className="sc-top">
                    <span className="sc-brand">CuroPay</span>
                    <span className="sc-cert">CERTIFIED</span>
                  </div>
                  <div className="sc-line">
                    <span className="sc-lbl">Pay to the order of</span>
                    <span className="sc-val">Riverside Home Care</span>
                  </div>
                  <div className="sc-line">
                    <span className="sc-lbl">Amount</span>
                    <span className="sc-num">$1,250.00</span>
                  </div>
                  <div className="sc-foot">
                    <div className="sc-qr"></div>
                    <div className="sc-sign">
                      <CheckSvg />
                      Identity-verified
                    </div>
                  </div>
                  <span className="scene-badge">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Verified &amp; certified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TWO PARTNER TRACKS */}
        <section className="sec" id="tracks">
          <div className="wrap">
            <div className="sec-head" style={{ marginBottom: 44 }}>
              <span className="eyebrow">Two ways to partner</span>
              <h2>Built around what you&rsquo;re trying to do.</h2>
              <p>Whether you advise families or serve members, the partnership starts from your goal — not our product.</p>
            </div>
            <div className="tracks">
              <div className="track">
                <p className="t-label">Attorneys, fiduciaries &amp; CPAs</p>
                <h3>Give clients a defensible way to move money.</h3>
                <div className="kv">
                  <span className="lbl">Your goal</span>
                  <p>Protect clients and keep clean, defensible records — without the work landing back on your desk.</p>
                </div>
                <div className="kv">
                  <span className="lbl">Today</span>
                  <p>Client money-movement turns into chased paper, reconstructed accountings, and elder-fraud exposure you can&rsquo;t see.</p>
                </div>
                <p className="with-label">With CuroPay</p>
                <ul className="tlist">
                  <li>
                    <CheckSvg />
                    Every transfer arrives audit-ready, so the annual accounting takes a fraction of the time.
                  </li>
                  <li>
                    <CheckSvg />
                    Role-based approvals and thresholds give you a defensible trail for the file.
                  </li>
                  <li>
                    <CheckSvg />
                    Concierge onboarding handles the client&rsquo;s first transfer, so support calls don&rsquo;t route to you.
                  </li>
                  <li>
                    <CheckSvg />
                    Recommending a fraud-protected tool deepens the trusted-advisor relationship.
                  </li>
                </ul>
                <a className="btn btn-outline" href="#refer">
                  Become a referral partner
                </a>
              </div>
              <div className="track">
                <p className="t-label">Community banks &amp; credit unions</p>
                <h3>Offer families a safer check — without building it.</h3>
                <div className="kv">
                  <span className="lbl">Your goal</span>
                  <p>Deepen relationships with aging members and their families, and cut the fraud losses that come with paper.</p>
                </div>
                <div className="kv">
                  <span className="lbl">Today</span>
                  <p>Check fraud and elder exploitation drive losses and compliance work, while caregivers and adult children drift to other institutions.</p>
                </div>
                <p className="with-label">With CuroPay</p>
                <ul className="tlist">
                  <li>
                    <CheckSvg />
                    Give members a modern, certified-check capability you didn&rsquo;t have to build.
                  </li>
                  <li>
                    <CheckSvg />
                    Identity-verified, QR-backed checks cut mail-theft and forged-check losses.
                  </li>
                  <li>
                    <CheckSvg />
                    Payouts can settle by ACH — helping keep funds in your institution.
                  </li>
                  <li>
                    <CheckSvg />
                    Co-branded materials position your branch as the safe choice for families.
                  </li>
                </ul>
                <a className="btn btn-outline" href="#refer">
                  Start a conversation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* MUTUAL BENEFIT */}
        <section className="sec bg-tint">
          <div className="wrap">
            <div className="sec-head center" style={{ margin: "0 auto 40px" }}>
              <span className="eyebrow" style={{ justifyContent: "center" }}>
                A partnership that works both ways
              </span>
              <h2>Everyone gains — including the client in the middle.</h2>
            </div>
            <div className="value-grid">
              <div className="value-col">
                <p className="vl">What your clients get</p>
                <p>Safer payments, human support, and proof on every transfer — from a name they already trust: yours.</p>
              </div>
              <div className="value-col">
                <p className="vl">What you get</p>
                <p>Stronger relationships, fewer fraud headaches, and a service you can stand behind — at no cost to recommend.</p>
              </div>
            </div>
            <div className="why-row">
              <div className="why">
                <CheckSvg />
                <span>
                  <b>Referral-first.</b> No quotas, no lock-in — recommend when it fits the client.
                </span>
              </div>
              <div className="why">
                <CheckSvg />
                <span>
                  <b>Free to recommend.</b> Partnering costs you nothing to set up.
                </span>
              </div>
              <div className="why">
                <CheckSvg />
                <span>
                  <b>Built for your clients.</b> Designed for fiduciary and older-adult money movement.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* HOW THE PARTNERSHIP WORKS */}
        <section className="sec" id="refer">
          <div className="wrap">
            <div className="sec-head" style={{ marginBottom: 48 }}>
              <span className="eyebrow">How it works</span>
              <h2>Referral &amp; co-marketing, kept simple.</h2>
            </div>
            <div className="flow">
              <div className="flow-step">
                <span className="f-n"></span>
                <h3>Refer or introduce</h3>
                <p>
                  Share a co-branded link or a printed hand-off card. Clients land on a page written for someone
                  arriving through a trusted advisor — not a cold ad.
                </p>
              </div>
              <div className="flow-step">
                <span className="f-n"></span>
                <h3>We onboard your client</h3>
                <p>
                  CuroPay&rsquo;s guided setup and concierge phone support walk your client through their first
                  transfer, so the work doesn&rsquo;t come back to your office.
                </p>
              </div>
              <div className="flow-step">
                <span className="f-n"></span>
                <h3>Grow together</h3>
                <p>
                  Optional joint materials for your office, branch, or seminars — comparison flyers, counter
                  collateral, referral tracking, and elder-fraud education.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT TO TELL A CLIENT */}
        <section className="sec bg-tint">
          <div className="wrap">
            <div style={{ display: "grid", gridTemplateColumns: ".9fr 1.1fr", gap: 56, alignItems: "center" }}>
              <div>
                <span className="eyebrow">What to tell a client</span>
                <h2 style={{ marginBottom: 18 }}>A recommendation you can make with confidence.</h2>
                <p className="lede" style={{ color: "var(--fg-3)" }}>
                  When a client is weighing how to handle a parent&rsquo;s bills or a trust&rsquo;s outflows, CuroPay
                  gives them proof and control built into the transfer — the same accountability you&rsquo;d want
                  documented for the annual accounting.
                </p>
              </div>
              <div className="script-card">
                <p className="s-label">Suggested language</p>
                <blockquote>
                  &ldquo;CuroPay lets you move money on someone else&rsquo;s behalf with approvals, verified
                  identity, and an audit-ready record on every transfer — so there&rsquo;s a clean trail for me and
                  for the CPA when we review it.&rdquo;
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* CREDIBILITY SIGNALS */}
        <section className="sec">
          <div className="wrap">
            <div className="sec-head" style={{ marginBottom: 40 }}>
              <span className="eyebrow">Credibility signals</span>
              <h2>Only what we can stand behind.</h2>
              <p>We keep partner-facing claims factual and checkable.</p>
            </div>
            <ul className="cred-list">
              <li>
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                No account or routing number is ever exposed
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M4 20c0-3.3 3.6-5 8-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
                Identity verification on senders and recipients
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M8 5h9a2 2 0 012 2v12a2 2 0 01-2 2H8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M8 3v18l-3-2-3 2V3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                </svg>
                Audit-ready records on every transfer
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M5 12l4 4 10-10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Role-based approvals and spending thresholds
              </li>
            </ul>
          </div>
        </section>

        {/* CTA BAND */}
        <section className="sec-sm">
          <div className="wrap">
            <div className="cta-band">
              <h2>Let&rsquo;s build a referral relationship.</h2>
              <p>
                Elder-law / POA attorneys, CPAs, and community banks &amp; credit unions are our primary partner
                channel. Tell us about your clients and we&rsquo;ll take it from there.
              </p>
              <PartnerForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
