import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="curopay-site">
      <Header active="/" />
      <main>
        {/* HERO */}
        <section className="hero">
          <div className="wrap">
            <div style={{ display: "grid", gridTemplateColumns: "1.05fr .95fr", gap: 56, alignItems: "center" }}>
              <div>
                <span className="tagline">Certified money, familiar as a check</span>
                <h1 className="promise">The trust of a certified check, brought to digital money.</h1>
                <p className="lede">
                  CuroPay replaces the paper check with an identity-verified, funds-certified digital equivalent —
                  printable, mailable, or sent instantly — without ever exposing an account or routing number.
                </p>
                <div className="cta-row" id="signup">
                  <a className="btn btn-primary btn-lg" href="https://app.getcuro.com/register">
                    Create your account
                  </a>
                  <a className="btn btn-outline" href="#how">
                    See how it works
                  </a>
                </div>
              </div>
              <div className="appshot">
                <div
                  className="appwin"
                  role="img"
                  aria-label="CuroPay 'Send a Check' screen: entering a $250.00 amount with the memo 'Home care — March', ready to continue to delivery."
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
                      <span className="fl">Memo (optional)</span>Home care — March
                    </div>
                    <div className="aw-btns">
                      <span className="aw-btn ghost">Cancel</span>
                      <span className="aw-btn green">Next →</span>
                    </div>
                  </div>
                </div>
                <p className="appshot-cap">
                  <CheckSvg />
                  Create a check in a few steps — amount, memo, and who it&rsquo;s for.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEGMENT ROUTER */}
        <section className="sec-sm bg-tint">
          <div className="wrap">
            <div className="sec-head center" style={{ marginBottom: 44 }}>
              <h2>Which one sounds like you?</h2>
              <p>CuroPay works a little differently depending on why you&rsquo;re moving money. Start where you fit.</p>
            </div>
            <div className="router" style={{ gridTemplateColumns: "repeat(2,1fr)", maxWidth: 760, margin: "0 auto" }}>
              <Link className="router-card featured" href="/caregivers">
                <span className="r-tag">Most common</span>
                <span className="r-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M12 13a4 4 0 100-8 4 4 0 000 8z" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M4 20c0-3.3 3.6-5 8-5s8 1.7 8 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </span>
                <h3>I&rsquo;m managing money for someone else</h3>
                <p>
                  You&rsquo;re a trustee, POA, or caregiver moving money for a parent or relative — and you need
                  approvals, roles, and a clean record.
                </p>
                <span className="r-go">
                  Caregivers &amp; Fiduciaries
                  <svg viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
              <Link className="router-card" href="/seniors">
                <span className="r-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M3 10h18" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M7 14h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </span>
                <h3>I mail my own checks</h3>
                <p>
                  You still send checks for bills and gifts. Keep the check you trust — printed, mailed, or handed
                  over — now with verified identity behind it.
                </p>
                <span className="r-go">
                  For Seniors
                  <svg viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            </div>
            <div className="also-note" style={{ maxWidth: 760, marginLeft: "auto", marginRight: "auto" }}>
              <span className="an-ic">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M4 12h5l2 5 3-10 2 5h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <p>
                <b>Also works for everyday money.</b> Splitting rent with roommates, or paying a bill without a bank
                account — collect or send with certified funds and a real receipt every time.
              </p>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="sec" id="how">
          <div className="wrap">
            <div className="sec-head center" style={{ marginBottom: 52 }}>
              <span className="eyebrow">How it works</span>
              <h2>Three steps, and it behaves like the check you already know.</h2>
            </div>
            <div className="steps">
              <div className="step">
                <span className="step-n"></span>
                <h3>Create</h3>
                <p>
                  Enter the amount and who it&rsquo;s for. CuroPay verifies your identity and certifies the funds
                  before anything moves — no account or routing number is ever exposed.
                </p>
              </div>
              <div className="step">
                <span className="step-n"></span>
                <h3>Send securely</h3>
                <p>
                  Print it, mail it, or send it instantly. Every check carries a secure QR code, so the recipient can
                  claim it without opening an account.
                </p>
              </div>
              <div className="step">
                <span className="step-n"></span>
                <h3>Track &amp; confirm</h3>
                <p>
                  Watch it clear in real time and keep an audit-ready record automatically. When it&rsquo;s done,
                  you&rsquo;ll see: <b>Your payment is confirmed.</b>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CURO */}
        <section className="sec bg-tint">
          <div className="wrap">
            <div className="sec-head" style={{ marginBottom: 48 }}>
              <span className="eyebrow">Why CuroPay</span>
              <h2>Proof and control, built into the money itself.</h2>
            </div>
            <div className="proof-grid">
              <div className="proof">
                <span className="p-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <h3>Certified funds</h3>
                <p>Funds are verified and certified before a payment moves — so both sides get proof, not a promise.</p>
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
                <p>Every sender&rsquo;s identity is verified, so recipients know exactly who a payment came from.</p>
              </div>
              <div className="proof">
                <span className="p-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M8 5h9a2 2 0 012 2v12a2 2 0 01-2 2H8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M8 3v18l-3-2-3 2V3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                    <path d="M11 9h6M11 13h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </span>
                <h3>Full audit trail</h3>
                <p>
                  Approvals, roles, and receipts are recorded on every transfer — the record a family member,
                  attorney, or CPA can act on.
                </p>
              </div>
              <div className="proof">
                <span className="p-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M8 8h3v3H8zM8 13h3v3H8zM13 8h3v3h-3zM13 13h3v3h-3z" stroke="currentColor" strokeWidth="1.4" />
                  </svg>
                </span>
                <h3>QR-secured checks</h3>
                <p>A printable, mailable check backed by a secure QR code — the familiar artifact, now fraud-protected.</p>
              </div>
              <div className="proof">
                <span className="p-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M4 12h5l2 5 3-10 2 5h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <h3>No account required</h3>
                <p>Recipients can claim what you send without opening an account, then choose ACH or instant debit.</p>
              </div>
              <div className="proof">
                <span className="p-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <h3>Flexible payout</h3>
                <p>Send instantly or on a schedule; recipients get paid by ACH or instant debit, whichever they prefer.</p>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCT SHOWCASE */}
        <section className="sec">
          <div className="wrap">
            <div className="sec-head center" style={{ margin: "0 auto 56px" }}>
              <span className="eyebrow" style={{ justifyContent: "center" }}>
                See it in action
              </span>
              <h2>The app that does the work behind the check.</h2>
            </div>
            <div className="showcase">
              <div className="appshot">
                <div
                  className="appwin"
                  role="img"
                  aria-label="CuroPay Payees screen listing verified recipients — Riverside Home Care, City Utilities, and Meadow Pharmacy — with trust and status labels."
                >
                  <div className="awtop">
                    <i></i>
                    <i></i>
                    <i></i>
                    <b>app.curopay.com — Payees</b>
                  </div>
                  <div className="awbody">
                    <div className="aw-head">
                      <div>
                        <div className="aw-eyebrow">Payees</div>
                        <div className="aw-title">Your saved recipients</div>
                      </div>
                      <span className="aw-btn blue">+ Create payee</span>
                    </div>
                    <div className="aw-tbl">
                      <div className="aw-trow hd">
                        <span>Name</span>
                        <span>Trust</span>
                        <span>Status</span>
                      </div>
                      <div className="aw-trow">
                        <span className="aw-name">
                          <span className="aw-ava">R</span>Riverside Home Care
                        </span>
                        <span className="aw-pill known">Known</span>
                        <span className="aw-pill ok">Active</span>
                      </div>
                      <div className="aw-trow">
                        <span className="aw-name">
                          <span className="aw-ava">C</span>City Utilities
                        </span>
                        <span className="aw-pill known">Known</span>
                        <span className="aw-pill ok">Active</span>
                      </div>
                      <div className="aw-trow">
                        <span className="aw-name">
                          <span className="aw-ava">M</span>Meadow Pharmacy
                        </span>
                        <span className="aw-pill warn">Unverified</span>
                        <span className="aw-pill ok">Active</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="appshot-cap">
                  <CheckSvg />
                  Send to a saved, identity-checked payee — never a bare phone number.
                </p>
              </div>
              <div>
                <span className="eyebrow">Send securely</span>
                <h2 style={{ marginBottom: 18 }}>You always know exactly who it&rsquo;s going to.</h2>
                <p className="lede" style={{ color: "var(--fg-3)" }}>
                  Every recipient is a saved payee with a trust status you can see at a glance. Print the check, mail
                  it, or send it instantly — the account and routing numbers never appear on it.
                </p>
              </div>
            </div>
            <div className="showcase" style={{ marginTop: 64 }}>
              <div>
                <span className="eyebrow">Track &amp; confirm</span>
                <h2 style={{ marginBottom: 18 }}>Watch it clear, with the record already made.</h2>
                <p className="lede" style={{ color: "var(--fg-3)" }}>
                  See what you&rsquo;ve sent, received, and what&rsquo;s still in flight. Every payment keeps an
                  audit-ready record automatically — so when someone asks, the answer is already there.
                </p>
              </div>
              <div className="appshot">
                <div
                  className="appwin"
                  role="img"
                  aria-label="CuroPay dashboard showing sent $3,941.00, received $37.00, $3,795.00 pending payouts, and zero unclaimed checks."
                >
                  <div className="awtop">
                    <i></i>
                    <i></i>
                    <i></i>
                    <b>app.curopay.com — Dashboard</b>
                  </div>
                  <div className="awbody">
                    <div className="aw-head">
                      <div>
                        <div className="aw-eyebrow">Dashboard</div>
                        <div className="aw-title">Welcome back, Morgan</div>
                        <div className="aw-sub">Here&rsquo;s what&rsquo;s happening with your payments.</div>
                      </div>
                      <div className="aw-seg">
                        <span>7d</span>
                        <span className="on">30d</span>
                        <span>90d</span>
                      </div>
                    </div>
                    <div className="aw-cards">
                      <div className="aw-card">
                        <div className="k">
                          Sent <em>↗ 100%</em>
                        </div>
                        <div className="v">$3,941.00</div>
                        <div className="d">13 checks</div>
                      </div>
                      <div className="aw-card">
                        <div className="k">
                          Received <em>↗ 100%</em>
                        </div>
                        <div className="v">$37.00</div>
                        <div className="d">2 checks</div>
                      </div>
                      <div className="aw-card">
                        <div className="k">Pending</div>
                        <div className="v">$3,795.00</div>
                        <div className="d">7 in flight</div>
                      </div>
                      <div className="aw-card">
                        <div className="k">Unclaimed</div>
                        <div className="v">0</div>
                        <div className="d">All claimed</div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="appshot-cap">
                  <CheckSvg />
                  Sent, received, and in-flight totals — each with an audit-ready record.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="sec bg-tint">
          <div className="wrap">
            <div className="sec-head center" style={{ margin: "0 auto 44px" }}>
              <span className="eyebrow" style={{ justifyContent: "center" }}>
                What people tell us
              </span>
              <h2>Built for the people who answer for the money.</h2>
            </div>
            <div className="tstack">
              <figure className="tcard" style={{ borderStyle: "solid", borderColor: "var(--border-default)", background: "#fff" }}>
                <blockquote className="t-quote" style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "var(--fg-2)", lineHeight: 1.62, margin: 0 }}>
                  &ldquo;Before CuroPay, every payment for my mom meant a text to my brother and a folder of
                  receipts. Now the approval happens before the money moves, and my sister sees exactly what cleared
                  — the arguments stopped.&rdquo;
                </blockquote>
                <figcaption className="t-who">
                  <span className="t-avatar"></span>
                  <span className="t-role" style={{ fontSize: 13.5 }}>
                    Family caregiver / POA
                  </span>
                </figcaption>
              </figure>
              <figure className="tcard" style={{ borderStyle: "solid", borderColor: "var(--border-default)", background: "#fff" }}>
                <blockquote className="t-quote" style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "var(--fg-2)", lineHeight: 1.62, margin: 0 }}>
                  &ldquo;I can hand a client a clean, exportable record at the annual accounting instead of
                  reconstructing it from cashier&rsquo;s checks and email threads.&rdquo;
                </blockquote>
                <figcaption className="t-who">
                  <span className="t-avatar"></span>
                  <span className="t-role" style={{ fontSize: 13.5 }}>
                    Elder-law attorney / Trustee
                  </span>
                </figcaption>
              </figure>
              <figure className="tcard" style={{ borderStyle: "solid", borderColor: "var(--border-default)", background: "#fff" }}>
                <blockquote className="t-quote" style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "var(--fg-2)", lineHeight: 1.62, margin: 0 }}>
                  &ldquo;Reconciling a client&rsquo;s trust used to mean chasing paper. Every transfer already
                  carries the record I need, so the review takes a fraction of the time.&rdquo;
                </blockquote>
                <figcaption className="t-who">
                  <span className="t-avatar"></span>
                  <span className="t-role" style={{ fontSize: 13.5 }}>
                    CPA
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* CTA BAND */}
        <section className="sec-sm">
          <div className="wrap">
            <div className="cta-band">
              <h2>Ready to move money with proof attached?</h2>
              <p>
                Managing money — for yourself or for someone else — is a real responsibility. CuroPay is built to
                make it easier.
              </p>
              <div className="cta-row" style={{ justifyContent: "center" }}>
                <a className="btn btn-white btn-lg" href="https://app.getcuro.com/register">
                  Create your account
                </a>
              </div>
              <div className="trust-row" style={{ justifyContent: "center" }}>
                <span className="badge">
                  <svg className="badge-check" viewBox="0 0 20 20" fill="none">
                    <path d="M16.5 5.5L8 14L4 10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  No account or routing number exposed
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

function CheckSvg() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M5 12l4 4L19 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
