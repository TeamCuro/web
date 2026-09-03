import Link from "next/link";

export const metadata = {
  title: "Terms of Service | Curo",
  description: "Terms of Service for Curo's early-access payment platform",
};

const sectionClass = "mb-12";
const headingClass = "text-2xl font-bold text-secondary-900 mb-4";
const subheadingClass = "text-xl font-semibold text-secondary-900 mb-3";
const paragraphClass = "text-secondary-700 leading-relaxed mb-4";
const listClass = "list-disc pl-6 space-y-2 text-secondary-700 mb-6";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-secondary-200">
        <nav className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-20 items-center justify-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="h-10 w-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="text-2xl font-bold text-secondary-900">Curo</span>
            </Link>
          </div>
        </nav>
      </header>

      <main className="pt-32 pb-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8 font-medium">
            <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>

          <h1 className="text-4xl font-bold text-secondary-900 mb-4">Terms of Service</h1>
          <p className="text-lg text-secondary-600 mb-12">Last updated: September 3, 2026</p>

          <div className="prose prose-lg max-w-none">
            <section className={sectionClass}>
              <h2 className={headingClass}>Overview</h2>
              <p className={paragraphClass}>These Terms of Service (“Terms”) govern access to and use of the website, waitlist, and early-access services offered by Curo Co LLC (“Curo,” “we,” “us,” or “our”) at GetCuro.com (the “Platform”). Curo is currently making the Platform available on an early-access basis. Certain features described in these Terms — including check creation, payment processing, and payout functionality — are not yet available to all users and will be enabled in phases as described in Section 1. Throughout these Terms, “you” and “your” refer to you as a user of the Platform.</p>
              <p className="text-secondary-700 leading-relaxed">By accessing or using the Platform — including by submitting your information through our waitlist or account form — you agree to be bound by these Terms. If you do not agree to these Terms, do not use the Platform.</p>
            </section>

            <section className={sectionClass}>
              <h2 className={headingClass}>1. Description of Services; Early Access</h2>
              <h3 className={subheadingClass}>1.1 Planned Services</h3>
              <p className={paragraphClass}>Curo is developing a payment platform intended to enable users to:</p>
              <ul className={listClass}>
                <li>Create and send digital checks (e-checks) with QR codes</li>
                <li>Send physical checks with QR codes via mail</li>
                <li>Receive and claim payments through QR-code verification</li>
                <li>Process payments via ACH bank transfer or instant debit card deposit</li>
                <li>Manage delegated payment access for trustees, caregivers, and other authorized representatives</li>
                <li>Track payment status and maintain transaction history</li>
              </ul>
              <h3 className={subheadingClass}>1.2 Current Availability</h3>
              <p className="text-secondary-700 leading-relaxed">As of the date above, the Platform is in early access. Submitting the account-creation form on the Platform places you on a waitlist and/or creates a preliminary profile; it does not, by itself, enable you to send or receive funds. We will notify you when payment features become available to you, and additional or updated terms may apply at that time.</p>
            </section>

            <section className={sectionClass}>
              <h2 className={headingClass}>2. Eligibility</h2>
              <p className={paragraphClass}>To use Curo&apos;s Services, you must:</p>
              <ul className={listClass}>
                <li>Be at least 18 years of age</li>
                <li>Have the legal capacity to enter into binding contracts</li>
                <li>Reside in the United States</li>
                <li>Provide accurate and complete information during registration</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
              <p className={paragraphClass}>You may not use the Services if:</p>
              <ul className={listClass}>
                <li>You are prohibited by law from using financial services</li>
                <li>You have previously been suspended or terminated from Curo</li>
                <li>You are located in, or are a national of, a country or region subject to comprehensive U.S. economic sanctions, or you are listed on any U.S. government restricted- or denied-party list</li>
              </ul>
            </section>

            <section className={sectionClass}>
              <h2 className={headingClass}>3. Account Registration and Security</h2>
              <h3 className={subheadingClass}>3.1 Waitlist and Account Creation</h3>
              <p className={paragraphClass}>Creating a waitlist entry requires only a name and email address. Activating full account functionality — including the ability to send or receive payments — requires:</p>
              <ul className={listClass}>
                <li>Valid email address and phone number</li>
                <li>Full legal name and mailing address</li>
                <li>Identity verification information (for KYC/AML compliance)</li>
                <li>Bank account or debit card information (for funding or receiving payments)</li>
              </ul>
              <h3 className={subheadingClass}>3.2 Identity Verification</h3>
              <p className={paragraphClass}>Before you may send or receive payments, we are required by law to verify your identity. You agree to provide:</p>
              <ul className={listClass}>
                <li>Government-issued photo ID</li>
                <li>Social Security Number or Tax Identification Number</li>
                <li>Additional documentation as needed for compliance</li>
              </ul>
              <p className={paragraphClass}>Failure to complete verification may result in account limitations, delay, or closure.</p>
              <h3 className={subheadingClass}>3.3 Account Security</h3>
              <p className={paragraphClass}>You are responsible for:</p>
              <ul className={listClass}>
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activity that occurs under your account</li>
                <li>Notifying us immediately of any unauthorized access</li>
              </ul>
              <p className="text-secondary-700 leading-relaxed">Curo will never ask you for your password. We recommend using a strong, unique password, enabling two-factor authentication where available, and not sharing your account access with others.</p>
            </section>

            <section className={sectionClass}>
              <h2 className={headingClass}>4. Sending Payments</h2>
              <p className={paragraphClass}>Once payment features are enabled for your account, when you create a check you must specify the amount, recipient information, delivery method (email, SMS, or mail), funding source, and any required memo or notes.</p>
              <p className={paragraphClass}>By submitting a payment, you authorize us and our payment processor(s) to debit your selected funding source, process the payment, send payment notifications to the recipient, and facilitate the recipient&apos;s claim and payout process.</p>
              <h3 className={subheadingClass}>4.1 ACH Authorization</h3>
              <p className={paragraphClass}>By selecting ACH bank transfer as a funding source or payout method, you authorize Curo and its payment processor(s) (currently Stripe, Inc.) to initiate debit and/or credit entries to the bank account you designate, in accordance with the NACHA Operating Rules. This authorization remains in effect until you revoke it through your account settings or by contacting support@getcuro.com, subject to any transactions already in progress at the time of revocation.</p>
              <p className="text-secondary-700 leading-relaxed">You may cancel a payment before the recipient claims it, subject to timing restrictions and payment status. Once a payment is claimed and processed, it cannot be cancelled.</p>
            </section>

            <section className={sectionClass}>
              <h2 className={headingClass}>5. Receiving Payments</h2>
              <p className={paragraphClass}>To receive a payment, access it via the QR code or link provided, verify your identity, select your payout method (ACH bank transfer or instant debit), and provide the required banking information.</p>
              <p className={paragraphClass}>Recipients are not required to create a Curo account to claim payments, though creating an account provides additional features.</p>
              <p className="text-secondary-700 leading-relaxed"><strong>Payout Methods:</strong> ACH Bank Transfer (2–3 business days: $1; 1 business day: $3; same-day: $7) or Instant Debit Card Payout ($1, or free with an active subscription).</p>
            </section>

            <section className={sectionClass}>
              <h2 className={headingClass}>6. Delegated Access (Trustees and Caregivers)</h2>
              <p className={paragraphClass}>Account owners may grant delegated access to trustees, caregivers, or other authorized representatives to send payments on their behalf, view transaction history, manage payees, and perform other authorized actions. Delegates may be assigned specific permission scopes, spending limits, and approval requirements for transactions above certain thresholds.</p>
              <p className={paragraphClass}>Where a delegate is acting under a power of attorney, guardianship, conservatorship, or similar legal authority, Curo does not currently require submission of supporting documentation before granting delegated access, but reserves the right to request such documentation, including a power of attorney, guardianship order, or similar proof of authority, at any time. Curo intends to introduce a feature allowing delegates to upload supporting documentation directly to their profile.</p>
              <p className={paragraphClass}>Curo does not independently verify the continued legal validity of any power of attorney or similar authority, and is not responsible for a delegate&apos;s authority having been limited, revoked, or terminated by operation of law or otherwise, except as required by applicable law.</p>
              <p className="text-secondary-700 leading-relaxed">Account owners are responsible for vetting and authorizing delegates, setting appropriate permission levels, monitoring delegate activity, and revoking access when appropriate. All delegated actions are logged and visible to the account owner. Account owners are liable for actions taken by their delegates within authorized permissions.</p>
            </section>

            <section className={sectionClass}>
              <h2 className={headingClass}>7. Fees and Pricing</h2>
              <p className="text-secondary-700 leading-relaxed">To begin, Curo&apos;s payout fees are: ACH Bank Transfer — 2–3 business days: $1; 1 business day: $3; same-day: $7. Instant Debit Card Payout — $1, or free with an active subscription. Additional pricing displayed on the Platform is illustrative and subject to change. We will disclose applicable fees to you before you are charged, and we reserve the right to modify fees with advance notice. Fees are deducted from your funding source along with the payment amount.</p>
            </section>

            <section className={sectionClass}>
              <h2 className={headingClass}>8. Third-Party Payment Processors</h2>
              <p className={paragraphClass}>Curo uses Stripe, Inc. and its affiliates (“Stripe”) to process payments on the Platform, and may add or change payment processors in the future. Your use of payment features is also subject to the Stripe Services Agreement and any other terms required by our processors.</p>
              <p className="text-secondary-700 leading-relaxed">Curo currently processes payments through Stripe Connect. Under this structure, Curo does not take custody or control of funds at any point; funds are held and transferred by Stripe and its partner financial institutions until disbursed to the recipient.</p>
            </section>

            <section className={sectionClass}>
              <h2 className={headingClass}>9. Disputes and Chargebacks</h2>
              <p className={paragraphClass}>If you dispute a payment, contact us immediately at support@getcuro.com with all relevant information. We will investigate disputes and may request additional information, temporarily hold funds, or reverse payments if warranted.</p>
              <p className={paragraphClass}>For payouts made via debit card, if you believe an error occurred or a transaction was unauthorized, contact us within 60 days of the date the relevant transaction notification was made available to you. We will investigate and, where required by Regulation E, determine whether an error occurred within the applicable statutory timeframe and provisionally credit your account pending investigation as required by law.</p>
              <p className="text-secondary-700 leading-relaxed"><strong>Important:</strong> If you initiate a chargeback with your bank instead of contacting us first, your Curo account may be suspended or terminated, and you may be liable for related fees and damages.</p>
            </section>

            <section className={sectionClass}>
              <h2 className={headingClass}>10. Prohibited Activities</h2>
              <p className={paragraphClass}>You may not use Curo to:</p>
              <ul className={listClass}>
                <li>Send or receive payments for illegal goods or services</li>
                <li>Engage in fraudulent or deceptive practices</li>
                <li>Violate any laws, including money laundering regulations</li>
                <li>Send unsolicited or unauthorized payments</li>
                <li>Impersonate another person or entity</li>
                <li>Bypass verification requirements</li>
                <li>Use stolen or unauthorized payment methods</li>
                <li>Engage in any activity that harms Curo or other users</li>
              </ul>
            </section>

            <section className={sectionClass}>
              <h2 className={headingClass}>11. Compliance with Laws; Money Transmission</h2>
              <p className={paragraphClass}>You agree to comply with all applicable laws, including Anti-Money Laundering (AML) regulations, Know Your Customer (KYC) requirements, the Bank Secrecy Act (BSA), the USA PATRIOT Act, OFAC regulations, and applicable state money transmission laws. We may report suspicious activity to relevant authorities as required by law.</p>
              <p className="text-secondary-700 leading-relaxed">Because Curo processes payments through Stripe Connect and does not take custody or control of funds, Curo does not currently hold state money transmitter licenses. If Curo&apos;s payment processing structure changes — including through the addition of other processors or a change in how funds are held — Curo will evaluate its licensing obligations at that time.</p>
            </section>

            <section className={sectionClass}>
              <h2 className={headingClass}>12. Disclaimers and Limitations of Liability</h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-6">
                <p className="text-sm text-yellow-800">THE SERVICES ARE PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED.</p>
              </div>
              <p className={paragraphClass}>We do not guarantee uninterrupted or error-free service, specific processing times, compatibility with all devices or systems, or prevention of all unauthorized access or fraud.</p>
              <p className={paragraphClass}>TO THE MAXIMUM EXTENT PERMITTED BY LAW, Curo shall not be liable for indirect, incidental, consequential, or punitive damages, lost profits, data loss, third-party actions, or delays beyond our reasonable control. Our total liability for any claim shall not exceed the greater of $100 or the amount of fees you paid us in the 12 months preceding the claim.</p>
              <p className="text-secondary-700 leading-relaxed">Notwithstanding the foregoing, for claims arising from a delegated access transaction under Section 6 (Delegated Access), our total liability shall not exceed the greater of $5,000 or the amount of fees paid in the 12 months preceding the claim.</p>
            </section>

            <section className={sectionClass}>
              <h2 className={headingClass}>13. Indemnification</h2>
              <p className="text-secondary-700 leading-relaxed">You agree to indemnify, defend, and hold harmless Curo, its officers, employees, and affiliates from and against any third-party claims, losses, liabilities, damages, and expenses (including reasonable attorneys&apos; fees) arising out of or related to your breach of these Terms, your misuse of the Platform, your violation of any law, or your infringement of any third party&apos;s rights, except to the extent caused by Curo&apos;s own gross negligence or willful misconduct.</p>
            </section>

            <section className={sectionClass}>
              <h2 className={headingClass}>14. Termination</h2>
              <p className={paragraphClass}>You may close your account at any time by contacting customer support. We may suspend or terminate your account for violation of these Terms, suspected fraud, failure to complete identity verification, chargebacks, inactivity, or at our discretion.</p>
              <p className="text-secondary-700 leading-relaxed">Upon termination, your access to the Services will end, pending payments may be cancelled or processed, and you remain liable for all obligations incurred before termination.</p>
            </section>

            <section className={sectionClass}>
              <h2 className={headingClass}>15. Governing Law and Venue</h2>
              <p className="text-secondary-700 leading-relaxed">These Terms are governed by the laws of the State of Alabama, without regard to conflict-of-law principles. You agree that any dispute arising out of or relating to these Terms or the Services shall be brought exclusively in the state or federal courts located in Alabama, and you consent to the personal jurisdiction of those courts.</p>
            </section>

            <section className={sectionClass}>
              <h2 className={headingClass}>16. Electronic Communications</h2>
              <p className="text-secondary-700 leading-relaxed">You consent to receive communications from us electronically, including notices, disclosures, and agreements, via email, SMS, or postings on the Platform. You agree that electronic communications satisfy any legal requirement that such communications be in writing.</p>
            </section>

            <section className={sectionClass}>
              <h2 className={headingClass}>17. Changes to Terms</h2>
              <p className="text-secondary-700 leading-relaxed">We may modify these Terms at any time. We will post updated Terms on the Platform, update the “Last updated” date, and notify you of material changes. Continued use of the Services after changes constitutes acceptance of the new Terms.</p>
            </section>

            <section className={sectionClass}>
              <h2 className={headingClass}>18. Contact Information</h2>
              <p className={paragraphClass}>For questions about these Terms, contact us:</p>
              <div className="bg-secondary-50 rounded-lg p-6">
                <p className="text-secondary-900 mb-2"><strong>Email:</strong> legal@getcuro.com</p>
                <p className="text-secondary-900 mb-2"><strong>Support:</strong> support@getcuro.com</p>
                <p className="text-secondary-900 mb-2"><strong>Mail:</strong> Curo Co LLC, 600 Boulevard South, Ste 104, Huntsville, AL 35802</p>
                <p className="text-secondary-900"><strong>Phone:</strong> 256-213-1733</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="bg-secondary-900 py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <p className="text-sm text-secondary-400">&copy; 2026 Curo Co LLC. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-6">
            <Link href="/privacy" className="text-sm text-secondary-400 hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-secondary-400 hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
