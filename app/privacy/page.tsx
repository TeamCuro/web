import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Curo",
  description: "Privacy Policy for Curo payment platform",
};

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <p className="text-lg text-secondary-600 mb-12">
            Last updated: January 27, 2026
          </p>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">Overview</h2>
              <p className="text-secondary-700 leading-relaxed mb-4">
                This Privacy Policy describes how Curo Co LLC ("Curo", "we", "us", or "our") collects, uses, and discloses your personal information when you use our payment services at GetCuro.com (the "Platform") or otherwise communicate with us (collectively, the "Services").
              </p>
              <p className="text-secondary-700 leading-relaxed mb-4">
                Curo is a payment platform that enables users to send and receive digital checks (e-checks) and physical checks with QR codes. For purposes of this Privacy Policy, "you" and "your" means you as the user of the Services, whether you are a sender, recipient, trustee, caregiver, or other individual whose information we have collected.
              </p>
              <p className="text-secondary-700 leading-relaxed">
                <strong>Please read this Privacy Policy carefully.</strong> By using and accessing any of the Services, you agree to the collection, use, and disclosure of your information as described in this Privacy Policy. If you do not agree to this Privacy Policy, please do not use or access any of the Services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">Changes to This Privacy Policy</h2>
              <p className="text-secondary-700 leading-relaxed">
                We may update this Privacy Policy from time to time, including to reflect changes to our practices or for other operational, legal, or regulatory reasons. We will post the revised Privacy Policy on the Platform, update the "Last updated" date, and take any other steps required by applicable law.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">What Personal Information We Collect</h2>
              <p className="text-secondary-700 leading-relaxed mb-4">
                The types of personal information we obtain about you depends on how you interact with our Platform and use our Services. When we use the term "personal information", we are referring to information that identifies, relates to, describes, or can be associated with you.
              </p>

              <h3 className="text-xl font-semibold text-secondary-900 mb-3">Information We Collect Directly from You</h3>

              <p className="text-secondary-700 leading-relaxed mb-4">
                <strong>Account Information:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-secondary-700 mb-6">
                <li>Name, email address, phone number, mailing address</li>
                <li>Username, password, security questions</li>
                <li>Profile photo (optional)</li>
              </ul>

              <p className="text-secondary-700 leading-relaxed mb-4">
                <strong>Payment Information:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-secondary-700 mb-6">
                <li>Bank account details (account number, routing number, bank name) for ACH transfers</li>
                <li>Debit card information (for instant payout options)</li>
                <li>Transaction history and payment records</li>
                <li>Check recipient information (name, email, phone, mailing address)</li>
              </ul>

              <p className="text-secondary-700 leading-relaxed mb-4">
                <strong>Identity Verification Information (KYC):</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-secondary-700 mb-6">
                <li>Date of birth</li>
                <li>Social Security Number (SSN) or Tax Identification Number (TIN)</li>
                <li>Government-issued ID (driver's license, passport)</li>
                <li>Address verification documents</li>
              </ul>

              <p className="text-secondary-700 leading-relaxed mb-4">
                <strong>Delegated Access Information:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-secondary-700 mb-6">
                <li>For trustees and caregivers: relationship to account owner, permission levels, approval thresholds</li>
                <li>For account owners: delegate contact information and access permissions</li>
              </ul>

              <p className="text-secondary-700 leading-relaxed">
                Some features of the Services require you to directly provide us with certain information about yourself. You may elect not to provide this information, but doing so may prevent you from using or accessing these features, particularly payment processing features that require identity verification for regulatory compliance.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">How We Use Your Personal Information</h2>

              <h3 className="text-xl font-semibold text-secondary-900 mb-3">Providing Payment Services</h3>
              <ul className="list-disc pl-6 space-y-2 text-secondary-700 mb-6">
                <li>Process check creation, delivery, and claims</li>
                <li>Facilitate ACH bank transfers and instant debit payouts</li>
                <li>Verify identity and prevent fraud (KYC/AML compliance)</li>
                <li>Send payment notifications via email, SMS, or mail</li>
                <li>Enable QR code scanning and claim verification</li>
                <li>Manage your account and payment history</li>
                <li>Process disputes, refunds, and cancellations</li>
              </ul>

              <h3 className="text-xl font-semibold text-secondary-900 mb-3">Delegated Access Management</h3>
              <ul className="list-disc pl-6 space-y-2 text-secondary-700 mb-6">
                <li>Enable trustees and caregivers to send payments on behalf of account owners</li>
                <li>Enforce permission levels and approval thresholds</li>
                <li>Maintain audit trails of delegated actions</li>
                <li>Send notifications to account owners about delegate activities</li>
              </ul>

              <h3 className="text-xl font-semibold text-secondary-900 mb-3">Security and Fraud Prevention</h3>
              <ul className="list-disc pl-6 space-y-2 text-secondary-700 mb-6">
                <li>Detect, investigate, and prevent fraudulent, illegal, or malicious activity</li>
                <li>Monitor for unauthorized access or suspicious transactions</li>
                <li>Verify recipient identity before payment disbursement</li>
                <li>Maintain secure account access</li>
              </ul>

              <h3 className="text-xl font-semibold text-secondary-900 mb-3">Legal and Regulatory Compliance</h3>
              <ul className="list-disc pl-6 space-y-2 text-secondary-700">
                <li>Comply with financial regulations and reporting requirements</li>
                <li>Respond to legal requests (subpoenas, court orders)</li>
                <li>Maintain records as required by law</li>
                <li>Report suspicious activity to relevant authorities</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">How We Disclose Personal Information</h2>
              <p className="text-secondary-700 leading-relaxed mb-4">
                We may disclose your personal information to third parties for legitimate purposes subject to this Privacy Policy:
              </p>

              <h3 className="text-xl font-semibold text-secondary-900 mb-3">Service Providers</h3>
              <ul className="list-disc pl-6 space-y-2 text-secondary-700 mb-6">
                <li>Payment processors (Stripe, ACH networks)</li>
                <li>Identity verification services (KYC/AML providers)</li>
                <li>Cloud storage and database providers</li>
                <li>Email and SMS delivery services</li>
                <li>Customer support platforms</li>
                <li>Fraud detection and prevention services</li>
              </ul>

              <h3 className="text-xl font-semibold text-secondary-900 mb-3">Financial Institutions</h3>
              <ul className="list-disc pl-6 space-y-2 text-secondary-700 mb-6">
                <li>Your bank or credit union for ACH transfers</li>
                <li>Debit card networks for instant payouts</li>
                <li>Banking partners that facilitate payment processing</li>
              </ul>

              <h3 className="text-xl font-semibold text-secondary-900 mb-3">Other Users</h3>
              <ul className="list-disc pl-6 space-y-2 text-secondary-700 mb-6">
                <li>Check recipients receive your name and any memo/notes you include</li>
                <li>Account owners can see actions taken by their trustees/caregivers</li>
                <li>Trustees/caregivers may see account activity they're authorized to view</li>
              </ul>

              <div className="bg-accent-50 border-l-4 border-accent-600 p-6 mb-6">
                <p className="text-sm text-accent-900 font-semibold mb-2">
                  Important
                </p>
                <p className="text-sm text-accent-800">
                  We do not sell your personal information to third parties.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">Data Retention</h2>
              <p className="text-secondary-700 leading-relaxed mb-4">
                We retain your personal information for as long as necessary to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-secondary-700 mb-4">
                <li>Maintain your account and provide Services</li>
                <li>Comply with legal and regulatory obligations (typically 7 years for financial records)</li>
                <li>Resolve disputes and enforce agreements</li>
                <li>Prevent fraud and maintain security</li>
              </ul>
              <p className="text-secondary-700 leading-relaxed">
                After your account is closed, we will retain certain information as required by law and for legitimate business purposes.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">Security of Your Information</h2>
              <p className="text-secondary-700 leading-relaxed mb-4">
                We implement industry-standard security measures to protect your personal information, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-secondary-700 mb-4">
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Secure data centers with restricted access</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Multi-factor authentication options</li>
                <li>Employee training on data security</li>
              </ul>
              <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6">
                <p className="text-sm text-yellow-900 font-semibold mb-2">
                  Security Notice
                </p>
                <p className="text-sm text-yellow-800 mb-2">
                  However, no security measures are perfect or impenetrable. We cannot guarantee absolute security.
                </p>
                <p className="text-sm text-yellow-800">
                  Please use strong, unique passwords, enable two-factor authentication, do not share your account credentials, and contact us immediately if you suspect unauthorized access.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">Your Rights and Choices</h2>
              <p className="text-secondary-700 leading-relaxed mb-4">
                Depending on where you live, you may have some or all of the following rights:
              </p>

              <ul className="list-disc pl-6 space-y-3 text-secondary-700 mb-6">
                <li><strong>Right to Access/Know:</strong> Request access to personal information we hold about you</li>
                <li><strong>Right to Delete:</strong> Request deletion of your personal information (subject to legal retention requirements)</li>
                <li><strong>Right to Correct:</strong> Request correction of inaccurate personal information</li>
                <li><strong>Right to Portability:</strong> Receive a copy of your personal information in a portable format</li>
                <li><strong>Right to Opt-Out:</strong> Opt out of marketing communications (you'll still receive transactional emails)</li>
                <li><strong>Right to Withdraw Consent:</strong> Where we rely on consent, you may withdraw it at any time</li>
                <li><strong>Right to Appeal:</strong> Appeal our decision if we decline your request</li>
              </ul>

              <p className="text-secondary-700 leading-relaxed mb-4">
                To exercise these rights, contact us at <strong>privacy@getcuro.com</strong>. We will verify your identity before processing requests to protect your information.
              </p>

              <p className="text-secondary-700 leading-relaxed">
                <strong>We will not discriminate against you for exercising your privacy rights.</strong>
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">Children's Privacy</h2>
              <p className="text-secondary-700 leading-relaxed">
                The Services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-secondary-700 leading-relaxed mb-4">
                We use cookies and similar technologies to power and improve our Platform, remember your preferences, run analytics, and better understand user interaction with the Services.
              </p>
              <p className="text-secondary-700 leading-relaxed">
                Most browsers automatically accept cookies by default, but you can choose to set your browser to remove or reject cookies through your browser controls. Please keep in mind that removing or blocking cookies can negatively impact your user experience and may cause some features to work incorrectly or no longer be available.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">Contact Us</h2>
              <p className="text-secondary-700 leading-relaxed mb-4">
                If you have questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-secondary-50 rounded-lg p-6">
                <p className="text-secondary-900 mb-2"><strong>Email:</strong> privacy@getcuro.com</p>
                <p className="text-secondary-900 mb-2"><strong>Mail:</strong> Curo Co LLC, [Business Address]</p>
                <p className="text-secondary-900"><strong>Phone:</strong> [Business Phone Number]</p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">State-Specific Privacy Rights</h2>

              <h3 className="text-xl font-semibold text-secondary-900 mb-3">California Residents</h3>
              <p className="text-secondary-700 leading-relaxed mb-6">
                You have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect, the right to delete, and the right to opt-out of sales (though we do not sell personal information).
              </p>

              <h3 className="text-xl font-semibold text-secondary-900 mb-3">Other States</h3>
              <p className="text-secondary-700 leading-relaxed">
                Residents of Virginia, Colorado, Connecticut, and other states with comprehensive privacy laws may have similar rights. Contact us to exercise your rights.
              </p>
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
