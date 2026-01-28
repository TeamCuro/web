import Link from "next/link";

export const metadata = {
  title: "Terms of Service | Curo",
  description: "Terms of Service for Curo payment platform",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
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

      {/* Main Content */}
      <main className="pt-32 pb-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          {/* Back Link */}
          <Link
            href="/"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8 font-medium"
          >
            <svg
              className="h-4 w-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Home
          </Link>

          {/* Title */}
          <h1 className="text-4xl font-bold text-secondary-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-secondary-600 mb-12">
            Last updated: January 27, 2026
          </p>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">Overview</h2>
              <p className="text-secondary-700 leading-relaxed mb-4">
                These Terms of Service ("Terms") govern your use of Curo Co LLC's ("Curo", "we", "us", or "our") payment platform and services available at GetCuro.com (the "Platform"). Throughout these Terms, "you" and "your" refer to you as the user of the Services.
              </p>
              <p className="text-secondary-700 leading-relaxed">
                <strong>By accessing or using the Platform, you agree to be bound by these Terms.</strong> If you do not agree to these Terms, do not use the Platform or Services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">1. Description of Services</h2>
              <p className="text-secondary-700 leading-relaxed mb-4">
                Curo provides a digital payment platform that enables users to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-secondary-700">
                <li>Create and send digital checks (e-checks) with QR codes</li>
                <li>Send physical checks with QR codes via mail</li>
                <li>Receive and claim payments through QR code verification</li>
                <li>Process payments via ACH bank transfers or instant debit card deposits</li>
                <li>Manage delegated payment access for trustees, caregivers, and authorized representatives</li>
                <li>Track payment status and maintain transaction history</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">2. Eligibility</h2>
              <p className="text-secondary-700 leading-relaxed mb-4">
                To use Curo Services, you must:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-secondary-700 mb-4">
                <li>Be at least 18 years of age</li>
                <li>Have the legal capacity to enter into binding contracts</li>
                <li>Reside in a jurisdiction where our Services are available</li>
                <li>Provide accurate and complete information during registration</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
              <p className="text-secondary-700 leading-relaxed">
                <strong>You may not use the Services if:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-secondary-700">
                <li>You are prohibited by law from using financial services</li>
                <li>You have previously been suspended or terminated from Curo</li>
                <li>You are located in a country subject to U.S. economic sanctions</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">3. Account Registration and Security</h2>

              <h3 className="text-xl font-semibold text-secondary-900 mb-3">3.1 Account Creation</h3>
              <p className="text-secondary-700 leading-relaxed mb-4">
                You must create an account to send payments. Account creation requires:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-secondary-700 mb-6">
                <li>Valid email address and phone number</li>
                <li>Full legal name and mailing address</li>
                <li>Identity verification information (for KYC/AML compliance)</li>
                <li>Bank account or debit card information (for funding payments)</li>
              </ul>

              <h3 className="text-xl font-semibold text-secondary-900 mb-3">3.2 Identity Verification</h3>
              <p className="text-secondary-700 leading-relaxed mb-4">
                We are required by law to verify your identity. You agree to provide:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-secondary-700 mb-4">
                <li>Government-issued photo ID</li>
                <li>Social Security Number or Tax Identification Number</li>
                <li>Additional documentation as needed for compliance</li>
              </ul>
              <p className="text-secondary-700 leading-relaxed mb-6">
                Failure to complete verification may result in account limitations or closure.
              </p>

              <h3 className="text-xl font-semibold text-secondary-900 mb-3">3.3 Account Security</h3>
              <p className="text-secondary-700 leading-relaxed mb-4">
                You are responsible for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-secondary-700 mb-4">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activity that occurs under your account</li>
                <li>Notifying us immediately of any unauthorized access</li>
              </ul>
              <p className="text-secondary-700 leading-relaxed">
                <strong>We strongly recommend:</strong> Using a strong, unique password, enabling two-factor authentication, and not sharing your account access with others.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">4. Sending Payments</h2>
              <p className="text-secondary-700 leading-relaxed mb-4">
                When you create a check, you must specify the amount, recipient information, delivery method (email, SMS, or mail), funding source, and any required memo or notes.
              </p>
              <p className="text-secondary-700 leading-relaxed mb-4">
                By submitting a payment, you authorize us to debit your selected funding source, process the payment through our payment partners, send payment notifications to the recipient, and facilitate the recipient's claim and payout process.
              </p>
              <p className="text-secondary-700 leading-relaxed">
                You may cancel a payment before the recipient claims it, subject to timing restrictions and payment status. Once a payment is claimed and processed, it cannot be cancelled.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">5. Receiving Payments</h2>
              <p className="text-secondary-700 leading-relaxed mb-4">
                To receive a payment, access it via the QR code or link provided, verify your identity, select your payout method (ACH bank transfer or instant debit), and provide required banking information.
              </p>
              <p className="text-secondary-700 leading-relaxed mb-4">
                <strong>Recipients are not required to create a Curo account</strong> to claim payments, though creating an account provides additional features.
              </p>
              <p className="text-secondary-700 leading-relaxed">
                <strong>Payout Methods:</strong> ACH Bank Transfer (free, 1-3 business days) or Instant Debit Card Payout (may incur fees, available within minutes).
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">6. Delegated Access (Trustees and Caregivers)</h2>
              <p className="text-secondary-700 leading-relaxed mb-4">
                Account owners may grant delegated access to trustees, caregivers, or other authorized representatives to send payments on their behalf, view transaction history, manage payees, and perform other authorized actions.
              </p>
              <p className="text-secondary-700 leading-relaxed mb-4">
                Delegates may be assigned specific permission scopes, spending limits, and approval requirements for transactions above certain thresholds.
              </p>
              <p className="text-secondary-700 leading-relaxed mb-4">
                <strong>Account owners are responsible for</strong> vetting and authorizing delegates, setting appropriate permission levels, monitoring delegate activity, and revoking access when appropriate.
              </p>
              <p className="text-secondary-700 leading-relaxed">
                All delegated actions are logged and visible to the account owner. Account owners are liable for actions taken by their delegates within authorized permissions.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">7. Fees and Pricing</h2>
              <p className="text-secondary-700 leading-relaxed mb-4">
                Curo may charge fees for sending payments, expedited delivery, instant payouts, failed transactions, and account maintenance. Current fees are available at getcuro.com/pricing.
              </p>
              <p className="text-secondary-700 leading-relaxed">
                We reserve the right to modify fees with advance notice. Fees are deducted from your funding source along with the payment amount.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">8. Disputes and Chargebacks</h2>
              <p className="text-secondary-700 leading-relaxed mb-4">
                If you dispute a payment, contact us immediately at support@getcuro.com with all relevant information. We will investigate disputes and may request additional information, temporarily hold funds, or reverse payments if warranted.
              </p>
              <p className="text-secondary-700 leading-relaxed">
                <strong>Important:</strong> If you initiate a chargeback with your bank, your Curo account may be suspended or terminated, and you may be liable for fees and damages. Always contact us first to resolve disputes.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">9. Prohibited Activities</h2>
              <p className="text-secondary-700 leading-relaxed mb-4">
                You may not use Curo to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-secondary-700">
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

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">10. Compliance with Laws</h2>
              <p className="text-secondary-700 leading-relaxed mb-4">
                You agree to comply with all applicable laws, including Anti-Money Laundering (AML) regulations, Know Your Customer (KYC) requirements, Bank Secrecy Act (BSA), USA PATRIOT Act, OFAC regulations, and state money transmission laws.
              </p>
              <p className="text-secondary-700 leading-relaxed">
                We may report suspicious activity to relevant authorities as required by law.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">11. Disclaimers and Limitations of Liability</h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-6">
                <p className="text-sm text-yellow-900 font-semibold mb-2">
                  IMPORTANT LEGAL NOTICE
                </p>
                <p className="text-sm text-yellow-800">
                  THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED.
                </p>
              </div>
              <p className="text-secondary-700 leading-relaxed mb-4">
                We do not guarantee uninterrupted or error-free service, specific processing times, compatibility with all devices or systems, or prevention of all unauthorized access or fraud.
              </p>
              <p className="text-secondary-700 leading-relaxed">
                <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW</strong>, Curo shall not be liable for indirect, incidental, consequential, or punitive damages, lost profits, data loss, third-party actions, or delays beyond our reasonable control. Our total liability for any claim shall not exceed the greater of $100 or the amount of fees you paid us in the 12 months preceding the claim.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">12. Termination</h2>
              <p className="text-secondary-700 leading-relaxed mb-4">
                You may close your account at any time by contacting customer support. We may suspend or terminate your account for violation of these Terms, suspected fraud, failure to complete identity verification, chargebacks, inactivity, or at our discretion.
              </p>
              <p className="text-secondary-700 leading-relaxed">
                Upon termination, your access to the Services will end, pending payments may be cancelled or processed, and you remain liable for all obligations incurred before termination.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">13. Changes to Terms</h2>
              <p className="text-secondary-700 leading-relaxed">
                We may modify these Terms at any time. We will post updated Terms on the Platform, update the "Last updated" date, and notify you of material changes. Continued use of the Services after changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">14. Contact Information</h2>
              <p className="text-secondary-700 leading-relaxed mb-4">
                For questions about these Terms, contact us:
              </p>
              <div className="bg-secondary-50 rounded-lg p-6">
                <p className="text-secondary-900 mb-2"><strong>Email:</strong> legal@getcuro.com</p>
                <p className="text-secondary-900 mb-2"><strong>Support:</strong> support@getcuro.com</p>
                <p className="text-secondary-900 mb-2"><strong>Mail:</strong> Curo Co LLC, [Business Address]</p>
                <p className="text-secondary-900"><strong>Phone:</strong> [Business Phone Number]</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-secondary-900 py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <p className="text-sm text-secondary-400">
            &copy; 2026 Curo, Inc. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <Link href="/privacy" className="text-sm text-secondary-400 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-secondary-400 hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
