import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ResponsiveTable, { Verdict } from "@/components/ResponsiveTable";

export const metadata: Metadata = {
  title: "Compare | Fidura",
  description:
    "How Fidura compares to cashier's checks and money orders, Venmo & Zelle, and True Link — the same familiar check, identity-verified and funds-certified.",
};

const Y = (n: string) => <Verdict value="yes">{n}</Verdict>;
const N = (n: string) => <Verdict value="no">{n}</Verdict>;

export default function ComparePage() {
  return (
    <div className="curopay-site">
      <Header active="/compare" />
      <main id="main" tabIndex={-1}>
        {/* HERO */}
        <section className="hero" style={{ paddingBottom: 48 }}>
          <div className="wrap wrap-narrow center" style={{ margin: "0 auto" }}>
            <span className="eyebrow" style={{ justifyContent: "center" }}>
              Fidura vs. the alternatives
            </span>
            <h1 className="promise" style={{ maxWidth: "none" }}>
              How Fidura compares to what you use today.
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
                <h2>Fidura vs. cashier&rsquo;s checks &amp; money orders</h2>
                <p>The same familiar artifact — without the trip, the exposed account details, or the fraud risk.</p>
              </div>
              <div className="rt-cmp-body">
                <ResponsiveTable
                  flush
                  captionHidden
                  cardHeading="h3"
                  caption="Fidura vs. cashier’s checks &amp; money orders"
                  rowHeader="What you get"
                  columns={[
                    { key: "alt", label: "Cashier’s checks & money orders" },
                    { key: "us", label: "Fidura" },
                  ]}
                  groups={[
                    {
                      rows: [
                          { key: "r0", title: "No trip to the bank or store", cells: { alt: N("A trip and a fee every time"), us: Y("Print at home, mail, or send instantly") } },
                          { key: "r1", title: "Account numbers kept private", cells: { alt: N("Account and routing numbers printed in the open"), us: Y("Never exposed") } },
                          { key: "r2", title: "Sender and receiver verified", cells: { alt: N("No way to verify who\u2019s really sending or receiving"), us: Y("Identity-verified and funds-certified on every check") } },
                          { key: "r3", title: "Protected if stolen in the mail", cells: { alt: N("Vulnerable to mail theft and loss"), us: Y("QR-backed, so a stolen check can\u2019t simply be cashed") } },
                      ],
                    },
                  ]}
                />
              </div>
            </div>

            {/* BLOCK 2 */}
            <div className="cmp">
              <div className="cmp-head">
                <h2>Fidura vs. Venmo &amp; Zelle</h2>
                <p>Instant P2P is fine between friends. It was never built to move money for someone else, with proof.</p>
              </div>
              <div className="rt-cmp-body">
                <ResponsiveTable
                  flush
                  captionHidden
                  cardHeading="h3"
                  caption="Fidura vs. Venmo &amp; Zelle"
                  rowHeader="What you get"
                  columns={[
                    { key: "alt", label: "Venmo / Zelle" },
                    { key: "us", label: "Fidura" },
                  ]}
                  groups={[
                    {
                      rows: [
                          { key: "r0", title: "Co-signing and approvals", cells: { alt: N("No co-signing or role-based approvals"), us: Y("Role-based approvals built in") } },
                          { key: "r1", title: "Other person\u2019s identity verified", cells: { alt: N("No identity check of the other party"), us: Y("Verified on both sides of the transfer") } },
                          { key: "r2", title: "Safe to pay someone new", cells: { alt: N("They tell you to only send to people you already trust"), us: Y("Certified funds: proof, not just a promise") } },
                          { key: "r3", title: "Help if something goes wrong", cells: { alt: N("Little recourse"), us: Y("A real receipt and audit trail on every payment") } },
                      ],
                    },
                  ]}
                />
              </div>
            </div>

            {/* BLOCK 3 */}
            <div className="cmp">
              <div className="cmp-head">
                <h2>Fidura vs. True Link</h2>
                <p>The closest option built for this job — but a different tool. True Link is a prepaid card; Fidura is a certified payment rail.</p>
              </div>
              <div className="rt-cmp-body">
                <ResponsiveTable
                  flush
                  captionHidden
                  cardHeading="h3"
                  caption="Fidura vs. True Link"
                  rowHeader="What you get"
                  columns={[
                    { key: "alt", label: "True Link (prepaid card)" },
                    { key: "us", label: "Fidura" },
                  ]}
                  groups={[
                    {
                      rows: [
                          { key: "r0", title: "What it is", cells: { alt: "A prepaid card, built around card spending", us: "A certified check and payment rail, with approvals and an audit trail for fiduciary use" } },
                          { key: "r1", title: "Recurring bill-pay, rent, and reimbursement", cells: { alt: N("Not designed for it"), us: Y("Built for it") } },
                          { key: "r2", title: "Printable, mailable check", cells: { alt: N("Not offered"), us: Y("QR-backed, for people who still rely on one") } },
                      ],
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ONE-LINE FRAME */}
        <section className="sec bg-navy">
          <div className="wrap wrap-narrow center" style={{ margin: "0 auto" }}>
            <p className="lede" style={{ color: "var(--fg-on-navy-strong)", margin: 0 }}>
              Paper checks and money orders mean fraud, delays, and exposed account numbers. P2P apps offer no
              verification and no recourse. Fidura is the only one built to move the money itself —{" "}
              <strong style={{ color: "var(--color-white)" }}>certified, verified, and controlled.</strong>
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
