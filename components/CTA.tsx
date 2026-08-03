import WaitlistForm from "./WaitlistForm";
import BuiltOnBadges from "./BuiltOnBadges";

export default function CTA() {
  return (
    <WaitlistForm
      heading="Ready to move money with proof attached?"
      subheading="Managing money — for yourself or for someone else — is a real responsibility. Curo is built to make it easier."
      submitLabel="Create your account"
      secondaryLink={{ label: "I'm a caregiver", href: "/caregivers" }}
      badges={<BuiltOnBadges tone="dark" />}
    />
  );
}
