import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FeatureGrid from "@/components/FeatureGrid";
import ReviewPlaceholder from "@/components/ReviewPlaceholder";
import WaitlistForm from "@/components/WaitlistForm";
import IconBadge from "@/components/IconBadge";
import { CheckCircleIcon, LockIcon, DocumentIcon, IdCardIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "For Attorneys & Community Banks/CUs | Curo",
  description:
    "Give clients a safer way to move money and stay the trusted name that recommended it. A referral and co-marketing partnership for elder-law and POA attorneys and community bank / credit union partners.",
  keywords: [
    "elder law attorney referral",
    "POA attorney partnership",
    "community bank partnership",
    "credit union partnership",
    "referral program",
    "digital check platform for attorneys",
  ],
};

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header ctaLabel="Become a partner" ctaHref="#get-started" />

      <main className="pt-20">
        <PageHero
          eyebrow="For Attorneys & Community Banks/CUs"
          title="Give clients a safer way to move money — and stay the trusted name that recommended it."
          description="Curo is a certified digital-check platform for the caregivers, fiduciaries, and older clients you already advise. This page is for elder-law and POA attorneys and community bank / credit-union partners considering a referral or co-marketing relationship."
          primaryCta={{ label: "Start a partner conversation", href: "#get-started" }}
          secondaryCta={{ label: "See the client-facing page", href: "/caregivers" }}
          variant="dark"
        />

        {/* What to tell a client */}
        <section className="py-24 sm:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-start">
              <div>
                <p className="text-body font-bold text-accent-600 mb-2 uppercase tracking-wide">
                  What to Tell a Client
                </p>
                <h2 className="font-heading text-secondary-900 mb-6">
                  A recommendation you can make with confidence.
                </h2>
                <p className="text-body-lg text-secondary-500">
                  When a client is weighing how to handle a parent&rsquo;s bills or a trust&rsquo;s outflows, Curo
                  gives them proof and control built into the transfer — the same accountability you&rsquo;d want
                  documented for the annual accounting.
                </p>
              </div>
              <div className="rounded-2xl border border-secondary-200 bg-secondary-50 p-8 sm:p-10">
                <p className="text-body-sm font-bold text-accent-600 mb-4 uppercase tracking-wide">
                  Suggested Language
                </p>
                <p className="text-body-lg text-secondary-700 italic">
                  &ldquo;Curo lets you move money on someone else&rsquo;s behalf with approvals, verified identity,
                  and an audit-ready record on every transfer — so there&rsquo;s a clean trail for me and for the CPA
                  when we review it.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </section>

        <FeatureGrid
          eyebrow="How It Works"
          heading="Referral & co-marketing, kept simple."
          className="bg-secondary-50"
          items={[
            {
              icon: <span className="text-xl font-bold">1</span>,
              title: "Refer a client",
              description:
                "Share a co-branded link or a printed hand-off card. Clients land on a page written for someone arriving through a trusted advisor — not a cold ad.",
            },
            {
              icon: <span className="text-xl font-bold">2</span>,
              title: "We handle onboarding",
              description:
                "Curo's guided setup and concierge phone support walk your client through their first transfer, so the work doesn't come back to your office.",
            },
            {
              icon: <span className="text-xl font-bold">3</span>,
              title: "Co-market together",
              description:
                "Optional joint materials for your office, branch, or seminars — comparison flyers, counter collateral, and educational content on elder-fraud protection.",
            },
          ]}
        />

        {/* Credibility signals */}
        <section className="py-24 sm:py-32 bg-white">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="mb-12">
              <p className="text-body font-bold text-accent-600 mb-2 uppercase tracking-wide">Credibility Signals</p>
              <h2 className="font-heading text-secondary-900 mb-4">Only what we can stand behind.</h2>
              <p className="text-body-lg text-secondary-500">
                We keep partner-facing claims factual and checkable. Broader security language is held until it
                clears compliance review.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: <CheckCircleIcon className="h-5 w-5 text-success-500" />, label: "SOC 2 Compliant" },
                { icon: <LockIcon className="h-5 w-5 text-primary-600" />, label: "256-bit SSL encryption" },
                {
                  icon: <DocumentIcon className="h-5 w-5 text-primary-600" />,
                  label: "Audit-ready records on every transfer",
                },
                {
                  icon: <IdCardIcon className="h-5 w-5 text-primary-600" />,
                  label: "Identity verification on senders and recipients",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-xl border border-secondary-200 px-5 py-4"
                >
                  {item.icon}
                  <span className="text-body-md font-medium text-secondary-700">{item.label}</span>
                </div>
              ))}
            </div>
            <ReviewPlaceholder
              label="Additional trust marks pending review"
              detail={
                'additional trust marks (e.g. insured-partner language) are intentionally withheld here until legal sign-off. We don’t use "bank-level" claims in partner materials.'
              }
            />
          </div>
        </section>

        <WaitlistForm
          heading="Let's build a referral relationship."
          subheading="Elder-law / POA attorneys and community banks & credit unions are our primary partner channel. Tell us about your clients and we'll take it from there."
          submitLabel="Start a partner conversation"
          defaultUseCase="partner"
          badges={
            <>
              <span className="text-body-sm font-bold uppercase tracking-wide text-primary-100">Verified &amp;</span>
              <IconBadge
                icon={<CheckCircleIcon className="h-4 w-4 text-success-400" />}
                label="SOC 2 Compliant"
                tone="dark"
              />
              <IconBadge icon={<LockIcon className="h-4 w-4" />} label="256-bit SSL" tone="dark" />
            </>
          }
        />
      </main>

      <Footer />
    </div>
  );
}
