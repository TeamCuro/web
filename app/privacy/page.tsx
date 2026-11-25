import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/components/LegalPage";
import LegalSummary from "@/components/LegalSummary";
import ResponsiveTable from "@/components/ResponsiveTable";
import { PRIVACY_EMAIL, SUPPORT_PHONE } from "@/lib/contact";
import { IDENTITY_CHECKS_LIVE, PRIVACY_UPDATED } from "@/lib/legal";
import { SITE_URL } from "@/lib/register";

export const metadata: Metadata = {
  title: "Privacy Policy | Fidura",
  description:
    "How Fidura collects, uses, and protects personal information.",
  alternates: { canonical: `${SITE_URL}/privacy` },
  robots: { index: true, follow: true },
};

const sections: LegalSection[] = [
  {
    id: "p-overview",
    title: "Overview",
    body: (
      <>
        <p>
          This Privacy Policy describes how Curo Co LLC (“Fidura,” “we,” “us,” or “our”) collects, uses, and discloses personal information when you use our website and early-access services at FiduraPay.com (the “Platform”), or otherwise communicate with us (collectively, the “Services”).
        </p>
        <p>
          Fidura is developing a payment platform that will enable users to send and receive digital checks (e-checks) and physical checks with QR codes. This Policy applies to our current early-access offering and will be updated as additional features become available. For purposes of this Policy, “you” and “your” means you as a user of the Services, whether you are a waitlist registrant, sender, recipient, trustee, caregiver, or other individual whose information we have collected.
        </p>
        <p>
          By using or accessing the Services, you agree to the collection, use, and disclosure of your information as described in this Privacy Policy. If you do not agree, please do not use or access the Services.
        </p>
      </>
    ),
  },
  {
    id: "p-changes",
    title: "Changes to This Privacy Policy",
    body: (
      <>
        <p>
          We may update this Privacy Policy from time to time, including to reflect changes to our practices, the introduction of new features, or for other operational, legal, or regulatory reasons. We will post the revised Privacy Policy on the Platform, update the “Last updated” date, and take any other steps required by applicable law.
        </p>
      </>
    ),
  },
  {
    id: "p-collect",
    title: "What Personal Information We Collect",
    body: (
      <>
        <p>
          The information below reflects what our waitlist and account-registration flow is designed to collect as the Platform&apos;s features roll out.
          {!IDENTITY_CHECKS_LIVE && (
            <>
              {" "}
              At this time, Fidura is in early access and does not yet collect the identity verification (KYC) or payment information described below; this information will be collected once payment features requiring identity verification and payment processing become available to you.
            </>
          )}
        </p>
        <h3>Information We Collect Directly From You</h3>
        <p><strong>Account Information:</strong></p>
        <ul>
          <li>Name, email address, phone number, mailing address</li>
          <li>Username, password, security questions</li>
          <li>Profile photo (optional)</li>
        </ul>
        <p><strong>Payment Information:</strong></p>
        <ul>
          <li>Bank account details (account number, routing number, bank name) for ACH transfers</li>
          <li>Debit card information (for instant payout options)</li>
          <li>Transaction history and payment records</li>
          <li>Check recipient information (name, email, phone, mailing address)</li>
        </ul>
        <p><strong>Identity Verification Information (KYC):</strong></p>
        <ul>
          <li>Date of birth</li>
          <li>Social Security Number (SSN) or Tax Identification Number (TIN)</li>
          <li>Government-issued ID (driver&apos;s license, passport)</li>
          <li>Address verification documents</li>
        </ul>
        <p><strong>Delegated Access Information:</strong></p>
        <ul>
          <li>For trustees and caregivers: relationship to account owner, permission levels, approval thresholds</li>
          <li>For account owners: delegate contact information and access permissions</li>
        </ul>
        <p>
          You may elect not to provide certain information, but doing so may prevent you from using or accessing certain features, particularly payment features that require identity verification for regulatory compliance.
        </p>
      </>
    ),
  },
  {
    id: "p-sensitive",
    title: "Sensitive Personal Information",
    body: (
      <>
        <p>
          Some of the information above — including Social Security Number/Tax Identification Number, government-issued ID, and financial account details — is “sensitive personal information” under certain state privacy laws. We collect and use this information only as necessary to verify your identity, comply with legal obligations (including KYC/AML requirements), process payments, and prevent fraud. We do not use sensitive personal information to infer characteristics about you. Where required by law, you may have the right to limit our use of sensitive personal information to these purposes; see “State-Specific Privacy Rights” below.
        </p>
      </>
    ),
  },
  {
    id: "p-use",
    title: "How We Use Your Personal Information",
    body: (
      <>
        <h3>Providing Payment Services</h3>
        <ul>
          <li>Process check creation, delivery, and claims</li>
          <li>Facilitate ACH bank transfers and instant debit payouts</li>
          <li>Verify identity and prevent fraud (KYC/AML compliance)</li>
          <li>Send payment notifications via email, SMS, or mail</li>
          <li>Enable QR code scanning and claim verification</li>
          <li>Manage your account and payment history</li>
          <li>Process disputes, refunds, and cancellations</li>
        </ul>
        <h3>Delegated Access Management</h3>
        <ul>
          <li>Enable trustees and caregivers to send payments on behalf of account owners</li>
          <li>Enforce permission levels and approval thresholds</li>
          <li>Maintain audit trails of delegated actions</li>
          <li>Send notifications to account owners about delegate activities</li>
        </ul>
        <h3>Security and Fraud Prevention</h3>
        <ul>
          <li>Detect, investigate, and prevent fraudulent, illegal, or malicious activity</li>
          <li>Monitor for unauthorized access or suspicious transactions</li>
          <li>Verify recipient identity before payment disbursement</li>
          <li>Maintain secure account access</li>
        </ul>
        <h3>Legal and Regulatory Compliance</h3>
        <ul>
          <li>Comply with financial regulations and reporting requirements</li>
          <li>Respond to legal requests (subpoenas, court orders)</li>
          <li>Maintain records as required by law</li>
          <li>Report suspicious activity to relevant authorities</li>
        </ul>
      </>
    ),
  },
  {
    id: "p-disclose",
    title: "How We Disclose Personal Information",
    body: (
      <>
        <p>We may disclose your personal information to third parties for the purposes described below:</p>
        <h3>Service Providers</h3>
        <ul>
          <li>Payment processing: Stripe, Inc. and its affiliates (“Stripe”), and any additional payment processors we engage in the future</li>
          <li>Identity verification services (KYC/AML providers)</li>
          <li>Cloud storage and database providers</li>
          <li>Email and SMS delivery services</li>
          <li>Customer support platforms</li>
          <li>Fraud detection and prevention services</li>
        </ul>
        <p>Our service providers are contractually restricted from using your personal information for any purpose other than providing services to us.</p>
        <h3>Financial Institutions</h3>
        <ul>
          <li>Your bank or credit union for ACH transfers</li>
          <li>Debit card networks for instant payouts</li>
          <li>Banking partners that facilitate payment processing</li>
        </ul>
        <h3>Other Users</h3>
        <ul>
          <li>Check recipients receive your name and any memo/notes you include</li>
          <li>Account owners can see actions taken by their trustees/caregivers</li>
          <li>Trustees/caregivers may see account activity they&apos;re authorized to view</li>
        </ul>
        <h3>Legal and Safety</h3>
        <ul>
          <li>To comply with law, regulation, legal process, or governmental request</li>
          <li>To protect the rights, property, or safety of Fidura, our users, or others</li>
        </ul>
        <div className="legal-callout legal-callout-accent">
          <p>We do not sell your personal information to third parties.</p>
        </div>
      </>
    ),
  },
  {
    id: "p-retention",
    title: "Data Retention",
    body: (
      <>
        <p>We retain your personal information for as long as necessary to:</p>
        <ul>
          <li>Maintain your account and provide the Services</li>
          <li>Comply with legal and regulatory obligations (typically 7 years for financial records)</li>
          <li>Resolve disputes and enforce agreements</li>
          <li>Prevent fraud and maintain security</li>
        </ul>
        <p>After your account is closed, we will retain certain information as required by law and for legitimate business purposes.</p>
      </>
    ),
  },
  {
    id: "p-security",
    title: "Security of Your Information",
    body: (
      <>
        <p>We implement industry-standard security measures to protect your personal information, including:</p>
        <ul>
          <li>Encryption of sensitive data in transit and at rest</li>
          <li>Secure data centers with restricted access</li>
          <li>Regular security audits and vulnerability assessments</li>
          <li>Multi-factor authentication options</li>
          <li>Employee training on data security</li>
        </ul>
        <div className="legal-callout">
          <p>However, no security measures are perfect or impenetrable, and we cannot guarantee absolute security. Please use strong, unique passwords, enable two-factor authentication, do not share your account credentials, and contact us immediately if you suspect unauthorized access.</p>
        </div>
      </>
    ),
  },
  {
    id: "p-rights",
    title: "Your Rights and Choices",
    body: (
      <>
        <p>Depending on where you live, you may have some or all of the following rights:</p>
        <ul>
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
        <p>To exercise these rights, contact us at <a href={PRIVACY_EMAIL.href}>{PRIVACY_EMAIL.address}</a>. We will verify your identity before processing requests to protect your information. We will not discriminate against you for exercising your privacy rights.</p>
      </>
    ),
  },
  {
    id: "p-state-rights",
    title: "State-Specific Privacy Rights",
    body: (
      <>
        <h3>California Residents</h3>
        <p>Under the California Consumer Privacy Act, as amended by the California Privacy Rights Act (CCPA/CPRA), California residents have the rights described above, including the right to know, delete, correct, and limit use of sensitive personal information, and the right to opt out of the “sale” or “sharing” of personal information. We do not sell personal information, and we do not currently share personal information for cross-context behavioral advertising. You may designate an authorized agent to make a request on your behalf, subject to identity verification.</p>
        <h3>Colorado, Connecticut, and Virginia Residents</h3>
        <p>Residents of Colorado, Connecticut, and Virginia have similar rights under the Colorado Privacy Act, Connecticut Data Privacy Act, and Virginia Consumer Data Protection Act, including rights to access, correct, delete, and obtain a portable copy of personal information, and to opt out of targeted advertising, the sale of personal information, or certain profiling. Fidura recognizes and will honor universal opt-out preference signals, including Global Privacy Control, as a valid request to opt out of applicable processing.</p>
        <h3>Other States</h3>
        <p>Residents of other states with comprehensive consumer privacy laws now or in the future may have similar rights. Contact us at <a href={PRIVACY_EMAIL.href}>{PRIVACY_EMAIL.address}</a> to exercise your rights, and we will honor applicable requirements based on your state of residence.</p>
      </>
    ),
  },
  {
    id: "p-children",
    title: "Children's Privacy",
    body: (
      <>
        <p>The Services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately at <a href={PRIVACY_EMAIL.href}>{PRIVACY_EMAIL.address}</a>.</p>
      </>
    ),
  },
  {
    id: "p-cookies",
    title: "Cookies and Tracking Technologies",
    body: (
      <>
        <p>We use cookies and similar technologies for the following purposes:</p>
        <ul>
          <li><strong>Strictly Necessary:</strong> required for the Platform to function, such as maintaining your session and security</li>
          <li><strong>Functional:</strong> remember your preferences and settings</li>
          <li><strong>Analytics:</strong> understand how users interact with the Platform so we can improve it</li>
        </ul>
        <p>We do not currently use cookies for cross-context behavioral advertising. If this changes, we will update this Privacy Policy and provide any opt-out mechanism required by law. We recognize and will honor Global Privacy Control and similar universal opt-out preference signals.</p>
        <p>Most browsers automatically accept cookies by default, but you can set your browser to remove or reject cookies. Removing or blocking cookies may negatively impact your experience and may cause some features to work incorrectly or become unavailable.</p>
      </>
    ),
  },
  {
    id: "p-contact",
    title: "Contact Us",
    body: (
      <>
        <p>If you have questions about this Privacy Policy or our privacy practices, please contact us:</p>
        <div className="legal-contact">
          <p><strong>Email:</strong> <a href={PRIVACY_EMAIL.href}>{PRIVACY_EMAIL.address}</a></p>
          <p><strong>Mail:</strong> Curo Co LLC, 600 Boulevard South, Ste 104, Huntsville, AL 35802</p>
          <p><strong>Phone:</strong> <a href={SUPPORT_PHONE.href}>{SUPPORT_PHONE.display}</a></p>
        </div>
      </>
    ),
  },
];

// Summary table rows for the "What we collect and why" box (FE-120). /register links to /privacy#collect.
const collectRows = [
  { key: "contact", title: "Name, email, phone", cells: { why: "To create your account and reach you about a payment." } },
  { key: "id", title: "Photo ID and Social Security number or TIN", cells: { why: "The law requires us to verify every sender." } },
  { key: "bank", title: "Bank account or debit card details", cells: { why: "To fund your checks and pay the people you send to. Our payment processors handle these." } },
  { key: "usage", title: "How you use the site and app", cells: { why: "To keep accounts safe and improve the product." } },
];

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated={PRIVACY_UPDATED}
      sections={sections}
      summary={
        <LegalSummary id="collect" title="What we collect and why" docName="policy">
          <ResponsiveTable
            caption="What we collect and why"
            captionHidden
            rowHeader="What we collect"
            columns={[{ key: "why", label: "Why" }]}
            groups={[{ rows: collectRows }]}
          />
          <p>
            We don&apos;t sell your personal information. Questions? Email{" "}
            <a href={PRIVACY_EMAIL.href}>{PRIVACY_EMAIL.address}</a>.
          </p>
        </LegalSummary>
      }
    />
  );
}
