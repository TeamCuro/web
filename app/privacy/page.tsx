import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Curo",
  description: "Privacy Policy for Curo's early-access payment platform",
};

const sectionClass = "mb-12";
const headingClass = "text-2xl font-bold text-secondary-900 mb-4";
const subheadingClass = "text-xl font-semibold text-secondary-900 mb-3";
const paragraphClass = "text-secondary-700 leading-relaxed mb-4";
const listClass = "list-disc pl-6 space-y-2 text-secondary-700 mb-6";

export default function PrivacyPolicy() {
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

          <h1 className="text-4xl font-bold text-secondary-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-secondary-600 mb-12">Last updated: September 3, 2026</p>

          <div className="prose prose-lg max-w-none">
            <section className={sectionClass}>
              <h2 className={headingClass}>Overview</h2>
              <p className={paragraphClass}>
                This Privacy Policy describes how Curo Co LLC (“Curo,” “we,” “us,” or “our”) collects, uses, and discloses personal information when you use our website and early-access services at GetCuro.com (the “Platform”), or otherwise communicate with us (collectively, the “Services”).
              </p>
              <p className={paragraphClass}>
                Curo is developing a payment platform that will enable users to send and receive digital checks (e-checks) and physical checks with QR codes. This Policy applies to our current early-access offering and will be updated as additional features become available. For purposes of this Policy, “you” and “your” means you as a user of the Services, whether you are a waitlist registrant, sender, recipient, trustee, caregiver, or other individual whose information we have collected.
              </p>
              <p className="text-secondary-700 leading-relaxed">
                By using or accessing the Services, you agree to the collection, use, and disclosure of your information as described in this Privacy Policy. If you do not agree, please do not use or access the Services.
              </p>
            </section>

            <section className={sectionClass}>
              <h2 className={headingClass}>Changes to This Privacy Policy</h2>
              <p className="text-secondary-700 leading-relaxed">
                We may update this Privacy Policy from time to time, including to reflect changes to our practices, the introduction of new features, or for other operational, legal, or regulatory reasons. We will post the revised Privacy Policy on the Platform, update the “Last updated” date, and take any other steps required by applicable law.
              </p>
            </section>

            <section className={sectionClass}>
              <h2 className={headingClass}>What Personal Information We Collect</h2>
              <p className={paragraphClass}>
                The information below reflects what our waitlist and account-registration flow is designed to collect as the Platform&apos;s features roll out. At this time, Curo is in early access and does not yet collect the identity verification (KYC) or payment information described below; this information will be collected once payment features requiring identity verification and payment processing become available to you.
              </p>
              <h3 className={subheadingClass}>Information We Collect Directly From You</h3>
              <p className={paragraphClass}><strong>Account Information:</strong></p>
              <ul className={listClass}>
                <li>Name, email address, phone number, mailing address</li>
                <li>Username, password, security questions</li>
                <li>Profile photo (optional)</li>
              </ul>
              <p className={paragraphClass}><strong>Payment Information:</strong></p>
              <ul className={listClass}>
                <li>Bank account details (account number, routing number, bank name) for ACH transfers</li>
                <li>Debit card information (for instant payout options)</li>
                <li>Transaction history and payment records</li>
                <li>Check recipient information (name, email, phone, mailing address)</li>
              </ul>
              <p className={paragraphClass}><strong>Identity Verification Information (KYC):</strong></p>
              <ul className={listClass}>
                <li>Date of birth</li>
                <li>Social Security Number (SSN) or Tax Identification Number (TIN)</li>
                <li>Government-issued ID (driver&apos;s license, passport)</li>
                <li>Address verification documents</li>
              </ul>
              <p className={paragraphClass}><strong>Delegated Access Information:</strong></p>
              <ul className={listClass}>
                <li>For trustees and caregivers: relationship to account owner, permission levels, approval thresholds</li>
                <li>For account owners: delegate contact information and access permissions</li>
              </ul>
              <p className="text-secondary-700 leading-relaxed">
                You may elect not to provide certain information, but doing so may prevent you from using or accessing certain features, particularly payment features that require identity verification for regulatory compliance.
              </p>
            </section>

            <section className={sectionClass}>
              <h2 className={headingClass}>Sensitive Personal Information</h2>
              <p className="text-secondary-700 leading-relaxed">
                Some of the information above — including Social Security Number/Tax Identification Number, government-issued ID, and financial account details — is “sensitive personal information” under certain state privacy laws. We collect and use this information only as necessary to verify your identity, comply with legal obligations (including KYC/AML requirements), process payments, and prevent fraud. We do not use sensitive personal information to infer characteristics about you. Where required by law, you may have the right to limit our use of sensitive personal information to these purposes; see “State-Specific Privacy Rights” below.
              </p>
            </section>

            <section className={sectionClass}>
              <h2 className={headingClass}>How We Use Your Personal Information</h2>
              <h3 className={subheadingClass}>Providing Payment Services</h3>
              <ul className={listClass}>
                <li>Process check creation, delivery, and claims</li>
                <li>Facilitate ACH bank transfers and instant debit payouts</li>
                <li>Verify identity and prevent fraud (KYC/AML compliance)</li>
                <li>Send payment notifications via email, SMS, or mail</li>
                <li>Enable QR code scanning and claim verification</li>
                <li>Manage your account and payment history</li>
                <li>Process disputes, refunds, and cancellations</li>
              </ul>
              <h3 className={subheadingClass}>Delegated Access Management</h3>
              <ul className={listClass}>
                <li>Enable trustees and caregivers to send payments on behalf of account owners</li>
                <li>Enforce permission levels and approval thresholds</li>
                <li>Maintain audit trails of delegated actions</li>
                <li>Send notifications to account owners about delegate activities</li>
              </ul>
              <h3 className={subheadingClass}>Security and Fraud Prevention</h3>
              <ul className={listClass}>
                <li>Detect, investigate, and prevent fraudulent, illegal, or malicious activity</li>
                <li>Monitor for unauthorized access or suspicious transactions</li>
                <li>Verify recipient identity before payment disbursement</li>
                <li>Maintain secure account access</li>
              </ul>
              <h3 className={subheadingClass}>Legal and Regulatory Compliance</h3>
              <ul className={listClass}>
                <li>Comply with financial regulations and reporting requirements</li>
                <li>Respond to legal requests (subpoenas, court orders)</li>
                <li>Maintain records as required by law</li>
                <li>Report suspicious activity to relevant authorities</li>
              </ul>
            </section>

            <section className={sectionClass}>
              <h2 className={headingClass}>How We Disclose Personal Information</h2>
              <p className={paragraphClass}>We may disclose your personal information to third parties for the purposes described below:</p>
              <h3 className={subheadingClass}>Service Providers</h3>
              <ul className={listClass}>
                <li>Payment processing: Stripe, Inc. and its affiliates (“Stripe”), and any additional payment processors we engage in the future</li>
                <li>Identity verification services (KYC/AML providers)</li>
                <li>Cloud storage and database providers</li>
                <li>Email and SMS delivery services</li>
                <li>Customer support platforms</li>
                <li>Fraud detection and prevention services</li>
              </ul>
              <p className={paragraphClass}>Our service providers are contractually restricted from using your personal information for any purpose other than providing services to us.</p>
              <h3 className={subheadingClass}>Financial Institutions</h3>
              <ul className={listClass}>
                <li>Your bank or credit union for ACH transfers</li>
                <li>Debit card networks for instant payouts</li>
                <li>Banking partners that facilitate payment processing</li>
              </ul>
              <h3 className={subheadingClass}>Other Users</h3>
              <ul className={listClass}>
                <li>Check recipients receive your name and any memo/notes you include</li>
                <li>Account owners can see actions taken by their trustees/caregivers</li>
                <li>Trustees/caregivers may see account activity they&apos;re authorized to view</li>
              </ul>
              <h3 className={subheadingClass}>Legal and Safety</h3>
              <ul className={listClass}>
                <li>To comply with law, regulation, legal process, or governmental request</li>
                <li>To protect the rights, property, or safety of Curo, our users, or others</li>
              </ul>
              <div className="bg-accent-50 border-l-4 border-accent-600 p-6">
                <p className="text-sm text-accent-800">We do not sell your personal information to third parties.</p>
              </div>
            </section>

            <section className={sectionClass}>
              <h2 className={headingClass}>Data Retention</h2>
              <p className={paragraphClass}>We retain your personal information for as long as necessary to:</p>
              <ul className={listClass}>
                <li>Maintain your account and provide the Services</li>
                <li>Comply with legal and regulatory obligations (typically 7 years for financial records)</li>
                <li>Resolve disputes and enforce agreements</li>
                <li>Prevent fraud and maintain security</li>
              </ul>
              <p className="text-secondary-700 leading-relaxed">After your account is closed, we will retain certain information as required by law and for legitimate business purposes.</p>
            </section>

            <section className={sectionClass}>
              <h2 className={headingClass}>Security of Your Information</h2>
              <p className={paragraphClass}>We implement industry-standard security measures to protect your personal information, including:</p>
              <ul className={listClass}>
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Secure data centers with restricted access</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Multi-factor authentication options</li>
                <li>Employee training on data security</li>
              </ul>
              <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6">
                <p className="text-sm text-yellow-800">However, no security measures are perfect or impenetrable, and we cannot guarantee absolute security. Please use strong, unique passwords, enable two-factor authentication, do not share your account credentials, and contact us immediately if you suspect unauthorized access.</p>
              </div>
            </section>

            <section className={sectionClass}>
              <h2 className={headingClass}>Your Rights and Choices</h2>
              <p className={paragraphClass}>Depending on where you live, you may have some or all of the following rights:</p>
              <ul className="list-disc pl-6 space-y-3 text-secondary-700 mb-6">
                <li><strong>Right to Access/Know:</strong> Request access to personal information we hold about you</li>
                <li><strong>Right to Delete:</strong> Request deletion of your personal information (subject to legal retention requirements)</li>
                <li><strong>Right to Correct:</strong> Request correction of inaccurate personal information</li>
                <li><strong>Right to Portability:</strong> Receive a copy of your personal information in a portable format</li>
                <li><strong>Right to Limit Use of Sensitive Personal Information:</strong> Request that we limit use of sensitive personal information to purposes necessary to provide the Services</li>
                <li><strong>Right to Opt-Out of Targeted Advertising or “Sharing”:</strong> We do not currently use your information for cross-context behavioral advertising; if this changes, we will provide an opt-out mechanism</li>
                <li><strong>Right to Opt-Out of Marketing:</strong> Opt out of marketing communications (you&apos;ll still receive transactional emails)</li>
                <li><strong>Right to Withdraw Consent:</strong> Where we rely on consent, you may withdraw it at any time</li>
                <li><strong>Right to Appeal:</strong> Appeal our decision if we decline your request</li>
              </ul>
              <p className="text-secondary-700 leading-relaxed">To exercise these rights, contact us at privacy@getcuro.com. We will verify your identity before processing requests to protect your information. We will not discriminate against you for exercising your privacy rights.</p>
            </section>

            <section className={sectionClass}>
              <h2 className={headingClass}>State-Specific Privacy Rights</h2>
              <h3 className={subheadingClass}>California Residents</h3>
              <p className={paragraphClass}>Under the California Consumer Privacy Act, as amended by the California Privacy Rights Act (CCPA/CPRA), California residents have the rights described above, including the right to know, delete, correct, and limit use of sensitive personal information, and the right to opt out of the “sale” or “sharing” of personal information. We do not sell personal information, and we do not currently share personal information for cross-context behavioral advertising. You may designate an authorized agent to make a request on your behalf, subject to identity verification.</p>
              <h3 className={subheadingClass}>Colorado, Connecticut, and Virginia Residents</h3>
              <p className={paragraphClass}>Residents of Colorado, Connecticut, and Virginia have similar rights under the Colorado Privacy Act, Connecticut Data Privacy Act, and Virginia Consumer Data Protection Act, including rights to access, correct, delete, and obtain a portable copy of personal information, and to opt out of targeted advertising, the sale of personal information, or certain profiling. Curo recognizes and will honor universal opt-out preference signals, including Global Privacy Control, as a valid request to opt out of applicable processing.</p>
              <h3 className={subheadingClass}>Other States</h3>
              <p className="text-secondary-700 leading-relaxed">Residents of other states with comprehensive consumer privacy laws now or in the future may have similar rights. Contact us at privacy@getcuro.com to exercise your rights, and we will honor applicable requirements based on your state of residence.</p>
            </section>

            <section className={sectionClass}>
              <h2 className={headingClass}>Children&apos;s Privacy</h2>
              <p className="text-secondary-700 leading-relaxed">The Services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately at privacy@getcuro.com.</p>
            </section>

            <section className={sectionClass}>
              <h2 className={headingClass}>Cookies and Tracking Technologies</h2>
              <p className={paragraphClass}>We use cookies and similar technologies for the following purposes:</p>
              <ul className={listClass}>
                <li><strong>Strictly Necessary:</strong> required for the Platform to function, such as maintaining your session and security</li>
                <li><strong>Functional:</strong> remember your preferences and settings</li>
                <li><strong>Analytics:</strong> understand how users interact with the Platform so we can improve it</li>
              </ul>
              <p className={paragraphClass}>We do not currently use cookies for cross-context behavioral advertising. If this changes, we will update this Privacy Policy and provide any opt-out mechanism required by law. We recognize and will honor Global Privacy Control and similar universal opt-out preference signals.</p>
              <p className="text-secondary-700 leading-relaxed">Most browsers automatically accept cookies by default, but you can set your browser to remove or reject cookies. Removing or blocking cookies may negatively impact your experience and may cause some features to work incorrectly or become unavailable.</p>
            </section>

            <section className={sectionClass}>
              <h2 className={headingClass}>Contact Us</h2>
              <p className={paragraphClass}>If you have questions about this Privacy Policy or our privacy practices, please contact us:</p>
              <div className="bg-secondary-50 rounded-lg p-6">
                <p className="text-secondary-900 mb-2"><strong>Email:</strong> privacy@getcuro.com</p>
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
