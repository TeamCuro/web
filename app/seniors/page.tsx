import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import IntroBanner from "@/components/IntroBanner";
import FeatureGrid from "@/components/FeatureGrid";
import QAPanel from "@/components/QAPanel";
import ProductVisualPlaceholder from "@/components/ProductVisualPlaceholder";
import WaitlistForm from "@/components/WaitlistForm";
import IconBadge from "@/components/IconBadge";
import { CheckCircleIcon, PhoneIcon, QrIcon, IdCardIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "For Seniors | Curo",
  description:
    "Keep sending checks exactly the way you always have. Print one, mail it, or hand it over — now with a verified identity behind every check, and a real person to call if anything is unclear.",
  keywords: [
    "checks for seniors",
    "safe checks",
    "printable checks",
    "QR verified check",
    "fraud protection for seniors",
    "digital checks",
  ],
};

export default function SeniorsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header ctaLabel="Get started" activeHref="/seniors" />

      <main className="pt-20">
        <PageHero
          eyebrow="For Seniors"
          title="The same check you trust — just safer."
          description="Keep sending checks exactly the way you always have. Print one, mail it, or hand it over — now with a verified identity behind every one, and a real person to call if anything is unclear."
          primaryCta={{ label: "Print your first verified check", href: "#get-started" }}
          badges={
            <>
              <IconBadge icon={<CheckCircleIcon className="h-5 w-5 text-success-500" />} label="Verified identity" />
              <IconBadge icon={<PhoneIcon className="h-5 w-5 text-primary-600" />} label="A real person to call" />
            </>
          }
          visual={<ProductVisualPlaceholder caption="a printed check with a QR verification mark, ready to mail" />}
          large
          singleColumn
        />

        <IntroBanner large>
          Nothing about how you pay has to change. Curo keeps the check itself — it just makes it much harder to
          steal, and much easier to know it arrived.
        </IntroBanner>

        <FeatureGrid
          heading="Three simple steps."
          items={[
            {
              icon: <span className="text-xl font-bold">1</span>,
              title: "Write your check",
              description:
                "Enter who it's for and the amount. Your account number stays private — it's never printed on the check.",
            },
            {
              icon: <span className="text-xl font-bold">2</span>,
              title: "Print or mail it",
              description:
                "Print it at home and mail it, or hand it over in person. Each check has a QR mark that proves it's real.",
            },
            {
              icon: <span className="text-xl font-bold">3</span>,
              title: "Know it arrived",
              description: "You'll see a clear confirmation when it's claimed. No more wondering whether it cleared.",
            },
          ]}
          singleColumn
          large
          className="bg-white"
        />

        <FeatureGrid
          items={[
            {
              icon: <QrIcon className="h-7 w-7" />,
              title: "A printable, QR-backed check",
              description:
                "The familiar paper artifact you already trust — now with a secure code that proves it's genuine.",
            },
            {
              icon: <IdCardIcon className="h-7 w-7" />,
              title: "Verified identity",
              description:
                "Every check is tied to a verified identity, so a stolen check can't simply be cashed by someone else.",
            },
            {
              icon: <PhoneIcon className="h-7 w-7" />,
              title: "A real person to call",
              description: "Not sure about something? Call and talk to a person. We'll walk you through it, step by step.",
            },
          ]}
          singleColumn
          large
          className="bg-secondary-50"
        />

        <QAPanel
          eyebrow="A Fair Question"
          question={<>&ldquo;Is this still safe, the way a check is safe?&rdquo;</>}
          leftLabel="A Fair Question"
          leftBody={
            <p>
              You&rsquo;ve trusted checks your whole life. You want to know this is the same thing — not a confusing
              new app that could go wrong.
            </p>
          }
          rightLabel="Yes — and safer"
          rightBody={
            <p>
              It&rsquo;s the same familiar check you already know how to use. The difference is that it&rsquo;s now
              fraud-protected and identity-verified, so it&rsquo;s far harder to steal or fake. And if you ever get
              stuck, a real person is one phone call away.
            </p>
          }
          className="bg-white"
          singleColumn
          large
        />

        {/* Call callout */}
        <section className="bg-secondary-50 py-10">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center flex items-center justify-center gap-3">
            <PhoneIcon className="h-6 w-6 text-success-500 shrink-0" />
            <p className="text-2xl text-secondary-700">
              Prefer to talk it through? Call us — a real person answers.
            </p>
          </div>
        </section>

        <WaitlistForm
          id="get-started"
          heading="Print your first verified check."
          subheading="Keep the check you trust. Add the protection it never had."
          submitLabel="Get started"
          defaultUseCase="personal"
          badges={
            <>
              <IconBadge
                icon={<CheckCircleIcon className="h-5 w-5 text-success-400" />}
                label="Verified identity"
                tone="dark"
              />
              <IconBadge icon={<PhoneIcon className="h-5 w-5" />} label="A real person to call" tone="dark" />
            </>
          }
        />

        {/* Also great for: roommates & no-bank-account */}
        <section className="py-24 sm:py-32 bg-white">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-body font-bold text-accent-600 mb-2 uppercase tracking-wide">Also Great For</p>
              <h2 className="font-heading text-secondary-900">A couple of other ways people use Curo.</h2>
            </div>
            <div className="grid grid-cols-1 gap-8">
              <div id="roommates" className="scroll-mt-24 rounded-2xl border border-secondary-200 bg-secondary-50 p-8">
                <p className="text-body-sm font-bold text-accent-600 mb-2 uppercase tracking-wide">Splitting Rent</p>
                <h3 className="font-heading text-secondary-900 mb-3" style={{ fontSize: "1.5rem", lineHeight: 1.2 }}>
                  Also great for splitting rent with roommates
                </h3>
                <p className="text-body-lg text-secondary-700">
                  Collect what you&rsquo;re owed with certified funds and a real receipt every time — proof you paid,
                  or proof you were paid, without chasing anyone down.
                </p>
              </div>
              <div
                id="no-bank-account"
                className="scroll-mt-24 rounded-2xl border border-secondary-200 bg-secondary-50 p-8"
              >
                <p className="text-body-sm font-bold text-accent-600 mb-2 uppercase tracking-wide">No Bank Account</p>
                <h3 className="font-heading text-secondary-900 mb-3" style={{ fontSize: "1.5rem", lineHeight: 1.2 }}>
                  No bank account required
                </h3>
                <p className="text-body-lg text-secondary-700">
                  Pay rent your landlord will accept without a checking account — load funds, print a verified check,
                  and walk away with a receipt. One clear fee, no surprises.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
