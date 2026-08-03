import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import IntroBanner from "@/components/IntroBanner";
import FeatureGrid from "@/components/FeatureGrid";
import QAPanel from "@/components/QAPanel";
import ProductVisualPlaceholder from "@/components/ProductVisualPlaceholder";
import TestimonialsSection from "@/components/Testimonial";
import WaitlistForm from "@/components/WaitlistForm";
import IconBadge from "@/components/IconBadge";
import ReviewPlaceholder from "@/components/ReviewPlaceholder";
import { ApprovalIcon, DocumentIcon, ShieldIcon, CheckCircleIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Caregivers & Fiduciaries | Curo",
  description:
    "Move money for someone else with proof and control. Role-based approvals, audit-ready receipts, and identity- and funds-certified transfers for trustees, POAs, and family caregivers.",
  keywords: [
    "caregiver payments",
    "trustee payments",
    "power of attorney money management",
    "fiduciary approvals",
    "audit-ready receipts",
    "digital checks",
  ],
};

function TransferBadges({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <span
        className={`text-body-sm font-bold uppercase tracking-wide ${
          tone === "dark" ? "text-primary-100" : "text-secondary-500"
        }`}
      >
        Every transfer is
      </span>
      <IconBadge icon={<CheckCircleIcon className="h-4 w-4 text-success-500" />} label="Identity-verified" tone={tone} />
      <IconBadge icon={<CheckCircleIcon className="h-4 w-4 text-success-500" />} label="Funds-certified" tone={tone} />
      <ReviewPlaceholder detail='"Bank-Level Security" / "FDIC-Insured Partners" style trust claim' />
    </div>
  );
}

export default function CaregiversPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header ctaLabel="Set up approvals" activeHref="/caregivers" />

      <main className="pt-20">
        <PageHero
          eyebrow="For Caregivers & Fiduciaries"
          title="Move money for someone else, with proof and control."
          description={
            <>
              If your attorney, CPA, or bank pointed you here — you&rsquo;re in the right place. Curo is built for
              trustees, POAs, and caregivers who move money on someone else&rsquo;s behalf and have to account for
              every dollar.
            </>
          }
          primaryCta={{ label: "Set up approvals for your family's money", href: "#get-started" }}
          badges={<TransferBadges />}
          visual={
            <ProductVisualPlaceholder caption="an approval request awaiting sign-off, with role labels (Approver / Viewer) and a spending threshold" />
          }
        />

        <IntroBanner>
          Managing money for someone else is a real responsibility. Curo is built to make it easier — so
          &ldquo;who approved what&rdquo; stops being a family argument and becomes an automatic answer.
        </IntroBanner>

        <FeatureGrid
          eyebrow="The Proof Points"
          heading="Everything a fiduciary needs, built into the transfer."
          items={[
            {
              icon: <ApprovalIcon className="h-7 w-7" />,
              title: "Role-based approvals & thresholds",
              description:
                "Set who can approve, who can only view, and the dollar amount that requires sign-off. Funds never move without the right approval — siblings and co-trustees stay in the loop, not in the dark.",
            },
            {
              icon: <DocumentIcon className="h-7 w-7" />,
              title: "Audit-ready receipts",
              description:
                "Every payment produces the record your attorney and CPA can act on — no more stitching together cashier's checks, email threads, and shared folders before the annual accounting.",
            },
            {
              icon: <ShieldIcon className="h-7 w-7" />,
              title: "Identity & funds certification",
              description:
                "Both are verified and certified on every transfer, before the money moves — the level of proof and recourse neither paper checks nor P2P apps were built to provide.",
            },
          ]}
        />

        <QAPanel
          question={<>&ldquo;Is this safe and legitimate?&rdquo;</>}
          leftLabel="The Concern"
          leftBody={
            <p>
              You&rsquo;re moving money that isn&rsquo;t yours, and you may have to defend the decision later. It has
              to be safe — and it has to be legitimate enough for a trust, an attorney, and the IRS.
            </p>
          }
          rightLabel="The Answer"
          rightBody={
            <div className="space-y-3">
              <p>
                Certified funds, verified identity, and an audit trail are built into every transfer — not bolted on
                afterward. That means the money is accounted for before anyone has to ask, and there&rsquo;s a clean,
                exportable record whenever someone does.
              </p>
              <ReviewPlaceholder detail="specific certification & security claims pending legal sign-off" />
            </div>
          }
        />

        {/* Built for the accountability problem */}
        <section className="py-24 sm:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <ProductVisualPlaceholder caption="recurring outflows (home care, rent, prescriptions) with per-payee approval status and an exportable ledger" />
              <div>
                <p className="text-body font-bold text-accent-600 mb-2 uppercase tracking-wide">
                  Built for the Accountability Problem
                </p>
                <h2 className="font-heading text-secondary-900 mb-6">
                  Replace the cashier&rsquo;s checks, email threads, and shared folders.
                </h2>
                <p className="text-body-lg text-secondary-500 mb-8">
                  Coordinate recurring outflows — home care, rent, prescriptions — and one-off expenses, while
                  staying accountable to siblings, attorneys, and CPAs. Disputes over &ldquo;who approved what&rdquo;
                  don&rsquo;t happen after the money&rsquo;s gone, because approval happens before it moves.
                </p>
                <Link href="#get-started" className="btn btn-primary btn-normal">
                  Set up approvals for your family's money
                </Link>
              </div>
            </div>
          </div>
        </section>

        <TestimonialsSection
          eyebrow="From the People Who Answer for the Money"
          heading="From the people who answer for the money."
          description="Named quotes from the early-access cohort will appear here as they're available."
          className="bg-secondary-50"
          testimonials={[
            {
              role: "Elder-law attorney / Trustee",
              quote: "Quote about defensible approvals and a clean record for the annual accounting.",
            },
            {
              role: "CPA",
              quote: "Quote about reconciling a client's trust without chasing paper receipts.",
            },
            {
              role: "Family caregiver / POA",
              quote: "Quote about keeping siblings in sync and ending the “who approved what” arguments.",
            },
          ]}
        />

        {/* Partner cross-link */}
        <section className="py-12 bg-white border-t border-secondary-200">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <p className="text-body-md text-secondary-500 mb-4">
              Are you an elder-law attorney, POA, or community bank sending a client here?
            </p>
            <Link href="/partners" className="btn btn-outline btn-sm">
              See our partner program
            </Link>
          </div>
        </section>

        <WaitlistForm
          heading="Set up approvals for your family's money."
          subheading="Get the controls, the certification, and the record — in one account you can share with the people who need to see it."
          submitLabel="Create your account"
          defaultUseCase="trustee-caregiver"
          badges={<TransferBadges tone="dark" />}
        />
      </main>

      <Footer />
    </div>
  );
}
