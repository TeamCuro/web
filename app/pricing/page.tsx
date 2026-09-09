import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Fees | CuroPay",
  description:
    "Simple, transparent fees. Send by bank for free. Pay only when using card-based or faster payment options.",
};

function CheckSvg() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M5 12l4 4L19 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function PricingPage() {
  return (
    <div className="curopay-site">
      <Header />
      <main>
        {/* HERO */}
        <section className="hero" style={{ paddingBottom: 40 }}>
          <div className="wrap wrap-narrow center" style={{ margin: "0 auto" }}>
            <span className="eyebrow" style={{ justifyContent: "center" }}>
              Fees
            </span>
            <h1 className="promise" style={{ maxWidth: "none" }}>
              Simple, transparent fees.
            </h1>
            <p className="lede" style={{ margin: "0 auto" }}>
              Send by bank for free. Pay only when using card-based or faster payment options.
            </p>
          </div>
        </section>

        {/* HIGHLIGHTS + TABLE */}
        <section className="sec-sm" style={{ paddingTop: 8 }}>
          <div className="wrap">
            <div className="hl-row">
              <div className="hl">
                <div className="big">$0 to send by bank</div>
                <p>Bank-funded checks and standard ACH payouts are always free.</p>
              </div>
              <div className="hl">
                <div className="big">No subscriptions</div>
                <p>No monthly plans and no signup fee — you only pay per transaction when you choose a card or instant option.</p>
              </div>
            </div>

            <div className="table-wrap">
              <table className="fees">
                <thead>
                  <tr>
                    <th style={{ width: "44%" }}>Method</th>
                    <th style={{ width: "28%" }}>Fee</th>
                    <th style={{ width: "28%" }}>Who pays</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="method">
                      Bank-funded check
                      <small>Fund a check from a linked bank account (ACH)</small>
                    </td>
                    <td className="fee">
                      <span className="fee-free">
                        <CheckSvg />
                        Free
                      </span>
                    </td>
                    <td className="who">—</td>
                  </tr>
                  <tr>
                    <td className="method">
                      Card-funded check
                      <small>Fund a check with a debit or prepaid card</small>
                    </td>
                    <td className="fee">
                      2.9% + $0.30
                      <small style={{ display: "block", fontWeight: 400, color: "var(--fg-4)", fontFamily: "var(--font-body)", fontSize: 13 }}>
                        per transaction
                      </small>
                    </td>
                    <td className="who">Sender, when funding by card</td>
                  </tr>
                  <tr>
                    <td className="method">
                      Standard payout
                      <small>Recipient receives funds by ACH</small>
                    </td>
                    <td className="fee">
                      <span className="fee-free">
                        <CheckSvg />
                        Free
                      </span>
                    </td>
                    <td className="who">—</td>
                  </tr>
                  <tr>
                    <td className="method">
                      Instant payout
                      <small>Recipient chooses instant delivery to a debit card</small>
                    </td>
                    <td className="fee">1.5%</td>
                    <td className="who">Recipient — deducted from their payment</td>
                  </tr>
                  <tr>
                    <td className="method">
                      CuroPay Wallet payout <span className="tag soon">Coming soon</span>
                      <small>Recipient keeps funds in a CuroPay Wallet</small>
                    </td>
                    <td className="fee">
                      <span className="fee-free">
                        <CheckSvg />
                        Free
                      </span>
                    </td>
                    <td className="who">Recipient</td>
                  </tr>
                  <tr>
                    <td className="method">
                      Physical check delivery <span className="tag tbd">Pricing coming soon</span>
                      <small>We print and mail a check on your behalf</small>
                    </td>
                    <td className="fee" style={{ color: "var(--fg-4)", fontWeight: 600 }}>
                      Not yet published
                    </td>
                    <td className="who">You&rsquo;ll see the exact fee before you confirm</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="fees-note">Fees are shown before confirmation and may change.</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="sec bg-tint">
          <div className="wrap">
            <div className="sec-head center" style={{ margin: "0 auto 44px" }}>
              <span className="eyebrow" style={{ justifyContent: "center" }}>
                Questions about fees
              </span>
              <h2>No signup, monthly, or hidden fees.</h2>
            </div>
            <div className="faq">
              <div className="faq-item">
                <h3>Is there a signup or monthly fee?</h3>
                <p>
                  No. There&rsquo;s no signup fee, no monthly fee, and no subscription. You only pay the
                  per-transaction fees listed above — and only when you choose a card-based or instant option.
                </p>
              </div>
              <div className="faq-item">
                <h3>Are there any hidden fees?</h3>
                <p>No. Every fee is shown before you confirm a payment, so you always see the exact cost up front.</p>
              </div>
              <div className="faq-item">
                <h3>What&rsquo;s the cheapest way to send?</h3>
                <p>
                  Fund the check from a linked bank account and let the recipient take a standard ACH payout. Both
                  are free — start to finish, at no cost.
                </p>
              </div>
              <div className="faq-item">
                <h3>Who pays the instant-payout fee?</h3>
                <p>
                  The recipient. The 1.5% is deducted from their payment only if they choose instant delivery to a
                  debit card. The standard payout is always free.
                </p>
              </div>
              <div className="faq-item">
                <h3>What about physical check delivery?</h3>
                <p>We&rsquo;re not publishing that fee yet. When it&rsquo;s available, you&rsquo;ll see the exact cost before you confirm the payment.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA BAND */}
        <section className="sec-sm">
          <div className="wrap">
            <div className="cta-band">
              <h2>Start sending for free.</h2>
              <p>Send by bank at no cost, and pay only when you choose a card or instant option.</p>
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
