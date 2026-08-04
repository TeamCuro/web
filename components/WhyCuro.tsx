import FeatureGrid from "./FeatureGrid";
import { ShieldIcon, IdCardIcon, DocumentIcon, QrIcon, NoAccountIcon, PayoutIcon } from "./icons";

export default function WhyCuro() {
  return (
    <FeatureGrid
      id="features"
      eyebrow="Why Curo"
      heading="Proof and control, built into the money itself."
      items={[
        {
          icon: <ShieldIcon className="h-7 w-7" />,
          title: "Certified funds",
          description:
            "Funds are verified and certified before a payment moves — so both sides get proof, not a promise.",
        },
        {
          icon: <IdCardIcon className="h-7 w-7" />,
          title: "Verified identity",
          description: "Every sender's identity is verified, so recipients know exactly who a payment came from.",
        },
        {
          icon: <DocumentIcon className="h-7 w-7" />,
          title: "Full audit trail",
          description:
            "Approvals, roles, and receipts are recorded on every transfer — the record a family member, attorney, or CPA can act on.",
        },
        {
          icon: <QrIcon className="h-7 w-7" />,
          title: "QR-secured checks",
          description:
            "A printable, mailable check backed by a secure QR code — the familiar artifact, now fraud-protected.",
        },
        {
          icon: <NoAccountIcon className="h-7 w-7" />,
          title: "No account required",
          description:
            "Recipients can claim what you send without opening an account, then choose ACH or instant debit.",
        },
        {
          icon: <PayoutIcon className="h-7 w-7" />,
          title: "Flexible payout",
          description:
            "Send instantly or on a schedule; recipients get paid by ACH or instant debit, whichever they prefer.",
        },
      ]}
    />
  );
}
