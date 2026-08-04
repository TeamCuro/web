import Link from "next/link";
import ProductVisualPlaceholder from "./ProductVisualPlaceholder";
import BuiltOnBadges from "./BuiltOnBadges";
import { CheckCircleIcon } from "./icons";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary-50 to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left Column - Copy */}
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full w-fit mb-6">
              <CheckCircleIcon className="h-5 w-5" />
              <span className="text-body-sm font-bold">Certified money, familiar as a check</span>
            </div>

            <h1 className="font-heading text-secondary-900 mb-6">
              The trust of a certified check, brought to digital money.
            </h1>

            <p className="text-body-lg text-secondary-500 mb-8">
              Curo replaces the paper check with an identity-verified, funds-certified digital equivalent —
              printable, mailable, or sent instantly — without ever exposing an account or routing number.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="#get-started" className="btn btn-primary btn-normal">
                Create your account
              </Link>
              <Link href="#how-it-works" className="btn btn-outline btn-normal">
                See how it works
              </Link>
            </div>

            <BuiltOnBadges />
          </div>

          {/* Right Column - Product Visual */}
          <div className="relative lg:ml-8">
            <ProductVisualPlaceholder caption="identity-verified QR check being sent, printed, and confirmed on a phone" />
          </div>
        </div>
      </div>

      {/* Bottom wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
