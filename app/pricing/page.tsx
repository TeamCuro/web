import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PhoneLink from "@/components/PhoneLink";
import ResponsiveTable from "@/components/ResponsiveTable";

export const metadata: Metadata = {
  title: "Fees | Fidura",
  description:
    "Simple, transparent fees. Send by bank for free. Pay only when using card-based or faster payment options.",
};

export default function PricingPage() {
  return (
    <div className="curopay-site">
      <Header active="/pricing" />
      <main id="main" tabIndex={-1}>
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
            <h2 className="rt-sr">Fees at a glance</h2>
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

            <ResponsiveTable
              caption="What each way of paying costs"
              rowHeader="How you pay or get paid"
              columns={[
                { key: "fee", label: "Fee" },
                { key: "who", label: "Who pays" },
              ]}
              groups={[
                {
                  rows: [
                    {
                      key: "bank-check",
                      title: "Bank-funded check",
                      sub: "Fund a check from a linked bank account (ACH)",
                      cells: { fee: <span className="rt-strong rt-free">$0</span>, who: "Free for both" },
                    },
                    {
                      key: "card-check",
                      title: "Card-funded check",
                      sub: "Fund a check with a debit or prepaid card",
                      cells: {
                        fee: (
                          <>
                            <span className="rt-strong">2.9% + $0.30</span>
                            <small>per transaction</small>
                          </>
                        ),
                        who: "Sender, when funding by card",
                      },
                    },
                    {
                      key: "standard-payout",
                      title: "Standard payout",
                      sub: "Recipient receives funds by ACH",
                      cells: { fee: <span className="rt-strong rt-free">$0</span>, who: "Free for both" },
                    },
                    {
                      key: "instant-payout",
                      title: "Instant payout",
                      sub: "Recipient chooses instant delivery to a debit card",
                      cells: {
                        fee: <span className="rt-strong">1.5%</span>,
                        who: "Recipient \u2014 deducted from their payment",
                      },
                    },
                  ],
                },
                {
                  label: "Coming later",
                  rows: [
                    {
                      key: "wallet-payout",
                      title: "Fidura Wallet payout",
                      badge: "Coming later",
                      sub: "Recipient keeps funds in a Fidura Wallet",
                      cells: { fee: <span className="rt-strong rt-free">$0</span>, who: "Free for both" },
                    },
                    {
                      key: "physical-check",
                      title: "Physical check delivery",
                      badge: "Coming later",
                      sub: "We print and mail a check on your behalf",
                      cells: {
                        fee: "Not yet published",
                        who: "You\u2019ll see the exact fee before you confirm",
                      },
                    },
                  ],
                },
              ]}
            />
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
              <div className="cta-phone"><PhoneLink placement="cta_band" tone="navy" /></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
