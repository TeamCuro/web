import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/components/LegalPage";
import LegalSummary from "@/components/LegalSummary";
import { LEGAL_EMAIL, SUPPORT_EMAIL, SUPPORT_PHONE } from "@/lib/contact";
import { IDENTITY_CHECKS_LIVE, TERMS_UPDATED } from "@/lib/legal";
import { SITE_URL } from "@/lib/register";
import { SECURITY_LINE } from "@/lib/trust";

export const metadata: Metadata = {
  title: "Terms of Service | Fidura",
  description: "Terms of Service for Fidura's early-access payment platform",
  alternates: { canonical: `${SITE_URL}/terms` },
  robots: { index: true, follow: true },
};

const sections: LegalSection[] = [
  { id: "t-overview", title: "Overview",
    body: (
      <>
        <p>These Terms of Service (“Terms”) govern access to and use of the website, waitlist, and early-access services offered by Curo Co LLC (“Fidura,” “we,” “us,” or “our”) at FiduraPay.com (the “Platform”). Fidura is currently making the Platform available on an early-access basis. Certain features described in these Terms — including check creation, payment processing, and payout functionality — are not yet available to all users and will be enabled in phases as described in Section 1. Throughout these Terms, “you” and “your” refer to you as a user of the Platform.</p>
        <p>By accessing or using the Platform — including by submitting your information through our waitlist or account form — you agree to be bound by these Terms. If you do not agree to these Terms, do not use the Platform.</p>
      </>
    ),
  },
  { id: "t-1", title: "1. Description of Services; Early Access",
    body: (
      <>
        <h3>1.1 Planned Services</h3>
        <p>Fidura is developing a payment platform intended to enable users to:</p>
        <ul>
          <li>Create and send digital checks (e-checks) with QR codes</li>
          <li>Send physical checks with QR codes via mail</li>
          <li>Receive and claim payments through QR-code verification</li>
          <li>Process payments via ACH bank transfer or instant debit card deposit</li>
          <li>Manage delegated payment access for trustees, caregivers, and other authorized representatives</li>
          <li>Track payment status and maintain transaction history</li>
        </ul>
        <h3>1.2 Current Availability</h3>
        <p>As of the date above, the Platform is in early access. Submitting the account-creation form on the Platform places you on a waitlist and/or creates a preliminary profile; it does not, by itself, enable you to send or receive funds. We will notify you when payment features become available to you, and additional or updated terms may apply at that time.</p>
      </>
    ),
  },
  { id: "t-2", title: "2. Eligibility",
    body: (
      <>
        <p>To use Fidura&apos;s Services, you must:</p>
        <ul>
          <li>Be at least 18 years of age</li>
          <li>Have the legal capacity to enter into binding contracts</li>
          <li>Reside in the United States</li>
          <li>Provide accurate and complete information during registration</li>
          <li>Comply with all applicable laws and regulations</li>
        </ul>
        <p>You may not use the Services if:</p>
        <ul>
          <li>You are prohibited by law from using financial services</li>
          <li>You have previously been suspended or terminated from Fidura</li>
          <li>You are located in, or are a national of, a country or region subject to comprehensive U.S. economic sanctions, or you are listed on any U.S. government restricted- or denied-party list</li>
        </ul>
      </>
    ),
  },
  { id: "t-3", title: "3. Account Registration and Security",
    body: (
      <>
        <h3>3.1 Waitlist and Account Creation</h3>
        <p>Creating a waitlist entry requires only a name and email address. Activating full account functionality — including the ability to send or receive payments — requires:</p>
        <ul>
          <li>Valid email address and phone number</li>
          <li>Full legal name and mailing address</li>
          <li>Identity verification information (for KYC/AML compliance)</li>
          <li>Bank account or debit card information (for funding or receiving payments)</li>
        </ul>
        <h3>3.2 Identity Verification</h3>
        <p>Before you may send or receive payments, we are required by law to verify your identity. You agree to provide:</p>
        <ul>
          <li>Government-issued photo ID</li>
          <li>Social Security Number or Tax Identification Number</li>
          <li>Additional documentation as needed for compliance</li>
        </ul>
        <p>Failure to complete verification may result in account limitations, delay, or closure.</p>
        <h3>3.3 Account Security</h3>
        <p>You are responsible for:</p>
        <ul>
          <li>Maintaining the confidentiality of your account credentials</li>
          <li>All activity that occurs under your account</li>
          <li>Notifying us immediately of any unauthorized access</li>
        </ul>
        <p>{SECURITY_LINE} We recommend using a strong, unique password, enabling two-factor authentication where available, and not sharing your account access with others.</p>
      </>
    ),
  },
  { id: "t-4", title: "4. Sending Payments",
    body: (
      <>
        <p>Once payment features are enabled for your account, when you create a check you must specify the amount, recipient information, delivery method (email, SMS, or mail), funding source, and any required memo or notes.</p>
        <p>By submitting a payment, you authorize us and our payment processor(s) to debit your selected funding source, process the payment, send payment notifications to the recipient, and facilitate the recipient&apos;s claim and payout process.</p>
        <h3>4.1 ACH Authorization</h3>
        <p>By selecting ACH bank transfer as a funding source or payout method, you authorize Fidura and its payment processor(s) (currently Stripe, Inc.) to initiate debit and/or credit entries to the bank account you designate, in accordance with the NACHA Operating Rules. This authorization remains in effect until you revoke it through your account settings or by contacting <a href={SUPPORT_EMAIL.href}>{SUPPORT_EMAIL.address}</a>, subject to any transactions already in progress at the time of revocation.</p>
        <p>You may cancel a payment before the recipient claims it, subject to timing restrictions and payment status. Once a payment is claimed and processed, it cannot be cancelled.</p>
      </>
    ),
  },
  { id: "t-5", title: "5. Receiving Payments",
    body: (
      <>
        <p>To receive a payment, access it via the QR code or link provided, verify your identity, select your payout method (ACH bank transfer or instant debit), and provide the required banking information.</p>
        <p>Recipients are not required to create a Fidura account to claim payments, though creating an account provides additional features.</p>
        <p><strong>Payout Methods:</strong> ACH Bank Transfer (2–3 business days: $1; 1 business day: $3; same-day: $7) or Instant Debit Card Payout ($1, or free with an active subscription).</p>
      </>
    ),
  },
  { id: "t-6", title: "6. Delegated Access (Trustees and Caregivers)",
    body: (
      <>
        <p>Account owners may grant delegated access to trustees, caregivers, or other authorized representatives to send payments on their behalf, view transaction history, manage payees, and perform other authorized actions. Delegates may be assigned specific permission scopes, spending limits, and approval requirements for transactions above certain thresholds.</p>
        <p>Where a delegate is acting under a power of attorney, guardianship, conservatorship, or similar legal authority, Fidura does not currently require submission of supporting documentation before granting delegated access, but reserves the right to request such documentation, including a power of attorney, guardianship order, or similar proof of authority, at any time. Fidura intends to introduce a feature allowing delegates to upload supporting documentation directly to their profile.</p>
        <p>Fidura does not independently verify the continued legal validity of any power of attorney or similar authority, and is not responsible for a delegate&apos;s authority having been limited, revoked, or terminated by operation of law or otherwise, except as required by applicable law.</p>
        <p>Account owners are responsible for vetting and authorizing delegates, setting appropriate permission levels, monitoring delegate activity, and revoking access when appropriate. All delegated actions are logged and visible to the account owner. Account owners are liable for actions taken by their delegates within authorized permissions.</p>
      </>
    ),
  },
  { id: "t-7", title: "7. Fees and Pricing",
    body: (
      <>
        <p>To begin, Fidura&apos;s payout fees are: ACH Bank Transfer — 2–3 business days: $1; 1 business day: $3; same-day: $7. Instant Debit Card Payout — $1, or free with an active subscription. Additional pricing displayed on the Platform is illustrative and subject to change. We will disclose applicable fees to you before you are charged, and we reserve the right to modify fees with advance notice. Fees are deducted from your funding source along with the payment amount.</p>
      </>
    ),
  },
  { id: "t-8", title: "8. Third-Party Payment Processors",
    body: (
      <>
        <p>Fidura uses Stripe, Inc. and its affiliates (“Stripe”) to process payments on the Platform, and may add or change payment processors in the future. Your use of payment features is also subject to the Stripe Services Agreement and any other terms required by our processors.</p>
        <p>Fidura currently processes payments through Stripe Connect. Under this structure, Fidura does not take custody or control of funds at any point; funds are held and transferred by Stripe and its partner financial institutions until disbursed to the recipient.</p>
      </>
    ),
  },
  { id: "t-9", title: "9. Disputes and Chargebacks",
    body: (
      <>
        <p>If you dispute a payment, contact us immediately at <a href={SUPPORT_EMAIL.href}>{SUPPORT_EMAIL.address}</a> with all relevant information. We will investigate disputes and may request additional information, temporarily hold funds, or reverse payments if warranted.</p>
        <p>For payouts made via debit card, if you believe an error occurred or a transaction was unauthorized, contact us within 60 days of the date the relevant transaction notification was made available to you. We will investigate and, where required by Regulation E, determine whether an error occurred within the applicable statutory timeframe and provisionally credit your account pending investigation as required by law.</p>
        <p><strong>Important:</strong> If you initiate a chargeback with your bank instead of contacting us first, your Fidura account may be suspended or terminated, and you may be liable for related fees and damages.</p>
      </>
    ),
  },
  { id: "t-10", title: "10. Prohibited Activities",
    body: (
      <>
        <p>You may not use Fidura to:</p>
        <ul>
          <li>Send or receive payments for illegal goods or services</li>
          <li>Engage in fraudulent or deceptive practices</li>
          <li>Violate any laws, including money laundering regulations</li>
          <li>Send unsolicited or unauthorized payments</li>
          <li>Impersonate another person or entity</li>
          <li>Bypass verification requirements</li>
          <li>Use stolen or unauthorized payment methods</li>
          <li>Engage in any activity that harms Fidura or other users</li>
        </ul>
      </>
    ),
  },
  { id: "t-11", title: "11. Compliance with Laws; Money Transmission",
    body: (
      <>
        <p>You agree to comply with all applicable laws, including Anti-Money Laundering (AML) regulations, Know Your Customer (KYC) requirements, the Bank Secrecy Act (BSA), the USA PATRIOT Act, OFAC regulations, and applicable state money transmission laws. We may report suspicious activity to relevant authorities as required by law.</p>
        <p>Because Fidura processes payments through Stripe Connect and does not take custody or control of funds, Fidura does not currently hold state money transmitter licenses. If Fidura&apos;s payment processing structure changes — including through the addition of other processors or a change in how funds are held — Fidura will evaluate its licensing obligations at that time.</p>
      </>
    ),
  },
  { id: "t-12", title: "12. Disclaimers and Limitations of Liability",
    body: (
      <>
        <div className="legal-callout">
          <p>THE SERVICES ARE PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED.</p>
        </div>
        <p>We do not guarantee uninterrupted or error-free service, specific processing times, compatibility with all devices or systems, or prevention of all unauthorized access or fraud.</p>
        <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, Fidura shall not be liable for indirect, incidental, consequential, or punitive damages, lost profits, data loss, third-party actions, or delays beyond our reasonable control. Our total liability for any claim shall not exceed the greater of $100 or the amount of fees you paid us in the 12 months preceding the claim.</p>
        <p>Notwithstanding the foregoing, for claims arising from a delegated access transaction under Section 6 (Delegated Access), our total liability shall not exceed the greater of $5,000 or the amount of fees paid in the 12 months preceding the claim.</p>
      </>
    ),
  },
  { id: "t-13", title: "13. Indemnification",
    body: (
      <>
        <p>You agree to indemnify, defend, and hold harmless Fidura, its officers, employees, and affiliates from and against any third-party claims, losses, liabilities, damages, and expenses (including reasonable attorneys&apos; fees) arising out of or related to your breach of these Terms, your misuse of the Platform, your violation of any law, or your infringement of any third party&apos;s rights, except to the extent caused by Fidura&apos;s own gross negligence or willful misconduct.</p>
      </>
    ),
  },
  { id: "t-14", title: "14. Termination",
    body: (
      <>
        <p>You may close your account at any time by contacting customer support. We may suspend or terminate your account for violation of these Terms, suspected fraud, failure to complete identity verification, chargebacks, inactivity, or at our discretion.</p>
        <p>Upon termination, your access to the Services will end, pending payments may be cancelled or processed, and you remain liable for all obligations incurred before termination.</p>
      </>
    ),
  },
  { id: "t-15", title: "15. Governing Law and Venue",
    body: (
      <>
        <p>These Terms are governed by the laws of the State of Alabama, without regard to conflict-of-law principles. You agree that any dispute arising out of or relating to these Terms or the Services shall be brought exclusively in the state or federal courts located in Alabama, and you consent to the personal jurisdiction of those courts.</p>
      </>
    ),
  },
  { id: "t-16", title: "16. Electronic Communications",
    body: (
      <>
        <p>You consent to receive communications from us electronically, including notices, disclosures, and agreements, via email, SMS, or postings on the Platform. You agree that electronic communications satisfy any legal requirement that such communications be in writing.</p>
      </>
    ),
  },
  { id: "t-17", title: "17. Changes to Terms",
    body: (
      <>
        <p>We may modify these Terms at any time. We will post updated Terms on the Platform, update the “Last updated” date, and notify you of material changes. Continued use of the Services after changes constitutes acceptance of the new Terms.</p>
      </>
    ),
  },
  { id: "t-18", title: "18. Contact Information",
    body: (
      <>
        <p>For questions about these Terms, contact us:</p>
        <div className="legal-contact">
          <p><strong>Email:</strong> <a href={LEGAL_EMAIL.href}>{LEGAL_EMAIL.address}</a></p>
          <p><strong>Support:</strong> <a href={SUPPORT_EMAIL.href}>{SUPPORT_EMAIL.address}</a></p>
          <p><strong>Mail:</strong> Curo Co LLC, 600 Boulevard South, Ste 104, Huntsville, AL 35802</p>
          <p><strong>Phone:</strong> <a href={SUPPORT_PHONE.href}>{SUPPORT_PHONE.display}</a></p>
        </div>
      </>
    ),
  },
];

export default function TermsOfService() {
  return (
    <LegalPage
      title="Terms of Service"
      updated={TERMS_UPDATED}
      sections={sections}
      summary={
        <LegalSummary id="short-version" title="The short version" docName="Terms">
          <ul>
            {!IDENTITY_CHECKS_LIVE && <li>Fidura is in early access. Some features are still being turned on.</li>}
            <li>Fidura is not a bank. Payments are handled by our payment processors.</li>
            <li>Before you send or receive money, the law requires us to verify your identity with a photo ID and your Social Security number or TIN.</li>
            <li>You&apos;ll see every fee before you confirm a payment.</li>
          </ul>
          <p>
            Questions? Call <a href={SUPPORT_PHONE.href}>{SUPPORT_PHONE.display}</a> or email{" "}
            <a href={LEGAL_EMAIL.href}>{LEGAL_EMAIL.address}</a>.
          </p>
        </LegalSummary>
      }
    />
  );
}
