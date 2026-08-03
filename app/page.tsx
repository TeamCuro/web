import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SegmentPicker from "@/components/SegmentPicker";
import HowItWorks from "@/components/HowItWorks";
import WhyCuro from "@/components/WhyCuro";
import TestimonialsSection from "@/components/Testimonial";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { PersonIcon, MailIcon, PeopleIcon } from "@/components/icons";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header ctaLabel="Create account" activeHref="/" />

      <main className="pt-20">
        <Hero />

        <SegmentPicker
          heading="Which one sounds like you?"
          description="Curo works a little differently depending on why you're moving money. Start where you fit."
          segments={[
            {
              icon: <PersonIcon className="h-6 w-6" />,
              badge: "Most common",
              title: "I'm managing money for someone else",
              description:
                "You're a trustee, POA, or caregiver moving money for a parent or relative — and you need approvals, roles, and a clean record.",
              linkLabel: "Caregivers & Fiduciaries",
              href: "/caregivers",
            },
            {
              icon: <MailIcon className="h-6 w-6" />,
              title: "I mail my own checks",
              description:
                "You still send checks for bills and gifts. Keep the check you trust — printed, mailed, or handed over — now with verified identity behind it.",
              linkLabel: "For Seniors",
              href: "/seniors",
            },
            {
              icon: <PeopleIcon className="h-6 w-6" />,
              title: "I split rent with roommates",
              description:
                "Collect what you're owed with certified funds and a real receipt every time — proof, not promises.",
              linkLabel: "See rent splitting",
              href: "/seniors#roommates",
            },
          ]}
        />

        <HowItWorks />
        <WhyCuro />

        <TestimonialsSection
          heading="Real names, real roles — coming soon."
          description={
            'We’re moving away from generic “+50 families” counters. These slots hold named quotes from the early-access cohort once available.'
          }
          testimonials={[
            {
              role: "CPA",
              quote: "Quote about audit-ready receipts and reconciling a client's trust without chasing paper.",
            },
            {
              role: "Attorney / Trustee",
              quote: "Quote about approvals and control when moving a trust's money.",
            },
            {
              role: "Family caregiver",
              quote: "Quote about keeping siblings and the attorney in sync without arguments.",
            },
          ]}
        />

        <CTA />
      </main>

      <Footer />
    </div>
  );
}
