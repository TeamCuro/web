import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ComparisonBlock from "@/components/ComparisonBlock";
import ReviewPlaceholder from "@/components/ReviewPlaceholder";
import WaitlistForm from "@/components/WaitlistForm";
import BuiltOnBadges from "@/components/BuiltOnBadges";

export const metadata: Metadata = {
  title: "Curo vs. the Alternatives | Curo",
  description:
    "See how Curo compares to cashier's checks and money orders, Venmo and Zelle, and True Link — identity-verified, funds-certified transfers with the proof and control the alternatives leave out.",
  keywords: [
    "Curo vs Venmo",
    "Curo vs Zelle",
    "Curo vs cashier's check",
    "Curo vs True Link",
    "digital check comparison",
    "secure payment alternatives",
  ],
};

export default function ComparePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header ctaLabel="Create account" activeHref="/compare" />

      <main className="pt-20">
        <PageHero
          eyebrow="Curo vs. the Alternatives"
          title="How Curo compares to what you use today."
          description="The same familiar check — but identity-verified, funds-certified, and built with the proof and control the alternatives leave out."
        />

        <section className="pb-24 sm:pb-32 bg-white">
          <div className="mx-auto max-w-6xl px-6 lg:px-8 space-y-10">
            <ComparisonBlock
              title="Curo vs. cashier's checks & money orders"
              subtitle="The same familiar artifact — without the trip, the exposed account details, or the fraud risk."
              competitorName="Cashier's Checks & Money Orders"
              competitorPoints={[
                "A trip to the bank or store, and a fee, every time",
                "Account and routing numbers printed in the open",
                "No way to verify who's really sending or receiving",
                "Vulnerable to mail theft and loss",
              ]}
              curoPoints={[
                "Print at home, mail, or send instantly — no trip",
                "Account and routing numbers are never exposed",
                "Identity-verified and funds-certified on every check",
                "QR-backed, so a stolen check can't simply be cashed",
              ]}
            />

            <ComparisonBlock
              title="Curo vs. Venmo & Zelle"
              subtitle="Instant P2P is fine between friends. It was never built to move money for someone else, with proof."
              competitorName="Venmo / Zelle"
              competitorPoints={[
                "No co-signing and no role-based approvals",
                "No identity verification of the other party",
                "They tell you to only send to people you already trust",
                "Little recourse if something goes wrong",
              ]}
              curoPoints={[
                "Co-signing and role-based approvals built in",
                "Identity verified on both sides of the transfer",
                "Certified funds — proof, not just a promise",
                "A real receipt and audit trail on every payment",
              ]}
            />

            <ComparisonBlock
              title="Curo vs. True Link"
              subtitle="The closest option built for this job — but a different tool. True Link is a prepaid card; Curo is a certified payment rail."
              competitorName="True Link (Prepaid Card)"
              competitorPoints={[
                "A prepaid-card model, built around card spending",
                "Not designed for recurring bill-pay, rent, or reimbursement",
                "No printable, mailable check for those who still need one",
              ]}
              curoPoints={[
                "A certified check / payment rail, not a card",
                "Built for recurring bill-pay, rent, and reimbursement",
                "Keeps the printable, QR-backed check people still rely on",
                "Approvals and an audit trail for fiduciary use",
              ]}
            />

            <p className="text-center text-body-sm text-secondary-400 flex flex-wrap items-center justify-center gap-2">
              Any pricing comparison shown here uses a
              <ReviewPlaceholder label="Pricing not yet set" detail="[PRICING TBD]" />
              placeholder — Curo pricing is not yet locked.
            </p>
          </div>
        </section>

        <section className="bg-primary-600 py-16">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <p className="text-body-lg text-primary-100">
              Paper checks and money orders mean fraud, delays, and exposed account numbers. P2P apps offer no
              verification and no recourse. Curo is the only one built to move the money itself —{" "}
              <strong className="font-bold text-white">certified, verified, and controlled.</strong>
            </p>
          </div>
        </section>

        <WaitlistForm
          heading="See the difference on your next payment."
          subheading="Move money the way you already do — with proof and control the alternatives don't offer."
          submitLabel="Create your account"
          secondaryLink={{ label: "I'm managing money for someone", href: "/caregivers" }}
          badges={<BuiltOnBadges tone="dark" />}
        />
      </main>

      <Footer />
    </div>
  );
}
