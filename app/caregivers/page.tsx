import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "For Caregivers & Fiduciaries | CuroPay",
  description:
    "CuroPay is built for trustees, POAs, and caregivers who move money on someone else's behalf — with role-based approvals, audit-ready receipts, and verified identity on every transfer.",
};

function CheckSvg() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M5 12l4 4L19 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function CaregiversPage() {
  return (
    <div className="curopay-site">
      <Header active="/caregivers" />
      <main>
        {/* HERO — written for someone arriving via a trusted referral */}
        <section className="hero">
          <div className="wrap">
            <div style={{ display: "grid", gridTemplateColumns: "1.05fr .95fr", gap: 56, alignItems: "center" }}>
              <div>
                <span className="eyebrow">For Caregivers &amp; Fiduciaries</span>
                <h1 className="promise">Move money for someone else, with proof and control.</h1>
                <p className="lede">
                  If your attorney, CPA, or bank pointed you here — you&rsquo;re in the right place. CuroPay is built
                  for trustees, POAs, and caregivers who move money on someone else&rsquo;s behalf and have to
                  account for every dollar.
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
                  aria-label="CuroPay Limits & Approvals screen: a rule requiring the owner's approval for any single payout over $1,000, a co-sign rule for shared splits, and a delegate limited to $500."
                >
                  <div className="awtop">
                    <i></i>
                    <i></i>
                    <i></i>
                    <b>app.curopay.com — Limits &amp; Approvals</b>
                  </div>
                  <div className="awbody">
                    <div className="aw-tabs">
                      <span className="on">Limits</span>
                      <span>Approvals</span>
                    </div>
                    <div className="aw-eyebrow">Approval rules for everyone</div>
                    <div className="aw-toggle">
                      <span className="aw-sw on"></span>
                      <div>
                        <div className="tt">Require my approval for any single payout over a set amount</div>
                        <div className="td">Applies to every helper, even within their own limit.</div>
                      </div>
                      <span className="aw-over">$1,000</span>
                    </div>
                    <div className="aw-toggle">
                      <span className="aw-sw on"></span>
                      <div>
                        <div className="tt">Co-payer must co-sign changes to shared splits</div>
                        <div className="td">Keeps household changes from happening one-sided.</div>
                      </div>
                    </div>
                    <div className="aw-mem" style={{ borderTop: "1px solid var(--awbord)", paddingTop: 13 }}>
                      <span className="aw-ava">J</span>
                      <div>
                        <div className="mn">Jordan</div>
                        <div className="mr">Can move up to $500 on their own</div>
                      </div>
                      <span className="aw-pill known">Delegate</span>
                    </div>
                  </div>
                </div>
                <p className="appshot-cap">
                  <CheckSvg />
                  Role-based approvals &amp; thresholds — funds don&rsquo;t move without the right sign-off.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROOF POINTS */}
        <section className="sec">
          <div className="wrap">
            <div className="sec-head" style={{ marginBottom: 48 }}>
              <span className="eyebrow">The proof points</span>
              <h2>Everything a fiduciary needs, built into the transfer.</h2>
            </div>
            <div className="proof-grid">
              <div className="proof">
                <span className="p-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M5 12l4 4 10-10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3 12a9 9 0 019-9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </span>
                <h3>Role-based approvals &amp; thresholds</h3>
                <p>
                  Set who can approve, who can only view, and the dollar amount that requires sign-off. Funds never
                  move without the right approval — siblings and co-trustees stay in the loop, not in the dark.
                </p>
              </div>
              <div className="proof">
                <span className="p-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M8 5h9a2 2 0 012 2v12a2 2 0 01-2 2H8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M8 3v18l-3-2-3 2V3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                    <path d="M11 9h6M11 13h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </span>
                <h3>Audit-ready receipts</h3>
                <p>
                  Every payment produces the record your attorney and CPA can act on — no more stitching together
                  cashier&rsquo;s checks, email threads, and shared folders before the annual accounting.
                </p>
              </div>
              <div className="proof">
                <span className="p-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <h3>Identity &amp; funds certification</h3>
                <p>
                  Both are verified and certified on every transfer, before the money moves — the level of proof and
                  recourse neither paper checks nor P2P apps were built to provide.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* OBJECTION / REBUTTAL */}
        <section className="sec bg-tint">
          <div className="wrap">
            <div className="sec-head center" style={{ marginBottom: 40 }}>
              <span className="eyebrow" style={{ justifyContent: "center" }}>
                The question everyone asks
              </span>
              <h2>&ldquo;Is this safe and legitimate?&rdquo;</h2>
            </div>
            <div className="objection">
              <div className="q">
                <p className="q-label">The concern</p>
                <p>
                  You&rsquo;re moving money that isn&rsquo;t yours, and you may have to defend the decision later. It
                  has to be safe — and it has to be legitimate enough for a trust, an attorney, and the IRS.
                </p>
              </div>
              <div className="a">
                <p className="a-label">The answer</p>
                <p>
                  Certified funds, verified identity, and an audit trail are built into <em>every</em> transfer — not
                  bolted on afterward. That means the money is accounted for before anyone has to ask, and
                  there&rsquo;s a clean, exportable record whenever someone does.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT FITS THE REAL WORKFLOW */}
        <section className="sec">
          <div className="wrap">
            <div style={{ display: "grid", gridTemplateColumns: ".95fr 1.05fr", gap: 56, alignItems: "center" }}>
              <div className="appshot">
                <div
                  className="appwin"
                  role="img"
                  aria-label="CuroPay dashboard showing sent $3,941.00, received $37.00, $3,795.00 pending payouts, and zero unclaimed checks — each with an audit-ready record."
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
                  Audit-ready receipts — every payment produces the record your attorney and CPA can act on.
                </p>
              </div>
              <div>
                <span className="eyebrow">Built for the accountability problem</span>
                <h2 style={{ marginBottom: 20 }}>Replace the cashier&rsquo;s checks, email threads, and shared folders.</h2>
                <p className="lede" style={{ marginBottom: 24 }}>
                  Coordinate recurring outflows — home care, rent, prescriptions — and one-off expenses, while
                  staying accountable to siblings, attorneys, and CPAs. Disputes over &ldquo;who approved what&rdquo;
                  don&rsquo;t happen after the money&rsquo;s gone, because approval happens before it moves.
                </p>
                <div className="cta-row">
                  <a className="btn btn-primary btn-lg" href="https://app.getcuro.com/register">
                    Create your account
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOUSEHOLD / KEEP EVERYONE IN THE LOOP */}
        <section className="sec">
          <div className="wrap">
            <div className="showcase">
              <div>
                <span className="eyebrow">Everyone in the loop</span>
                <h2 style={{ marginBottom: 18 }}>Keep siblings and co-trustees in the loop.</h2>
                <p className="lede" style={{ color: "var(--fg-3)" }}>
                  Add the people who share the responsibility as owners, co-payers, or view-only. Each one sees
                  what&rsquo;s shared and what cleared — so nobody&rsquo;s left guessing, and no change happens
                  one-sided.
                </p>
              </div>
              <div className="appshot">
                <div
                  className="appwin"
                  role="img"
                  aria-label="CuroPay Household group 'Elm Street House' with an owner and two co-payers who can pay and approve shared payments."
                >
                  <div className="awtop">
                    <i></i>
                    <i></i>
                    <i></i>
                    <b>app.curopay.com — Household group</b>
                  </div>
                  <div className="awbody">
                    <div className="aw-head">
                      <div>
                        <div className="aw-eyebrow">Household group</div>
                        <div className="aw-title">Elm Street House</div>
                        <div className="aw-sub">3 members · Owner: You</div>
                      </div>
                      <span className="aw-btn blue">+ Add member</span>
                    </div>
                    <div>
                      <div className="aw-mem">
                        <span className="aw-ava">J</span>
                        <div>
                          <div className="mn">Jordan</div>
                          <div className="mr">Can pay and approve shared payments</div>
                        </div>
                        <span className="aw-pill known">Co-payer</span>
                      </div>
                      <div className="aw-mem">
                        <span className="aw-ava">A</span>
                        <div>
                          <div className="mn">Alex</div>
                          <div className="mr">Can pay and approve shared payments</div>
                        </div>
                        <span className="aw-pill known">Co-payer</span>
                      </div>
                      <div className="aw-mem">
                        <span className="aw-ava">Y</span>
                        <div>
                          <div className="mn">You</div>
                          <div className="mr">Full control. Manages members &amp; roles.</div>
                        </div>
                        <span className="aw-pill ok">Owner</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="appshot-cap">
                  <CheckSvg />
                  Owners, co-payers, and view-only roles — everyone sees what&rsquo;s shared.
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
                From the people who answer for the money
              </span>
              <h2>A recommendation they can stand behind.</h2>
            </div>
            <div className="tstack">
              <figure className="tcard" style={{ borderStyle: "solid", borderColor: "var(--border-default)", background: "#fff" }}>
                <blockquote className="t-quote" style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "var(--fg-2)", lineHeight: 1.62, margin: 0 }}>
                  &ldquo;I can hand a client a clean, exportable record at the annual accounting instead of
                  reconstructing it from cashier&rsquo;s checks and email threads.&rdquo;
                </blockquote>
                <figcaption className="t-who">
                  <span className="t-avatar"></span>
                  <span className="t-role">Elder-law attorney / Trustee</span>
                </figcaption>
              </figure>
              <figure className="tcard" style={{ borderStyle: "solid", borderColor: "var(--border-default)", background: "#fff" }}>
                <blockquote className="t-quote" style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "var(--fg-2)", lineHeight: 1.62, margin: 0 }}>
                  &ldquo;Reconciling a client&rsquo;s trust used to mean chasing paper. Every transfer already
                  carries the record I need, so the review takes a fraction of the time.&rdquo;
                </blockquote>
                <figcaption className="t-who">
                  <span className="t-avatar"></span>
                  <span className="t-role">CPA</span>
                </figcaption>
              </figure>
              <figure className="tcard" style={{ borderStyle: "solid", borderColor: "var(--border-default)", background: "#fff" }}>
                <blockquote className="t-quote" style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "var(--fg-2)", lineHeight: 1.62, margin: 0 }}>
                  &ldquo;Before CuroPay, every payment for my mom meant a text to my brother and a folder of
                  receipts. Now the approval happens before the money moves, and my sister sees exactly what cleared
                  — the arguments stopped.&rdquo;
                </blockquote>
                <figcaption className="t-who">
                  <span className="t-avatar"></span>
                  <span className="t-role">Family caregiver / POA</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* REFERRAL / PARTNER CROSSLINK */}
        <section className="sec-sm">
          <div className="wrap wrap-narrow center">
            <p className="lede" style={{ margin: "0 0 20px", color: "var(--fg-2)" }}>
              Are you an elder-law attorney, POA, or community bank sending a client here?
            </p>
            <Link className="btn btn-outline" href="/partners">
              See our partner program
            </Link>
          </div>
        </section>

        {/* CTA BAND */}
        <section className="sec-sm">
          <div className="wrap">
            <div className="cta-band">
              <h2>Set up approvals for your family&rsquo;s money.</h2>
              <p>Get the controls, the certification, and the record — in one account you can share with the people who need to see it.</p>
              <div className="cta-row">
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
