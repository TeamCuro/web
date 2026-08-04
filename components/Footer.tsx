import Image from "next/image";
import Link from "next/link";
import { CheckCircleIcon, LockIcon } from "./icons";
import ReviewPlaceholder from "./ReviewPlaceholder";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigation = {
    product: [
      { name: "How It Works", href: "/#how-it-works" },
      { name: "Compare", href: "/compare" },
    ],
    whoItsFor: [
      { name: "Caregivers & Fiduciaries", href: "/caregivers" },
      { name: "Seniors", href: "/seniors" },
      { name: "Roommates", href: "/seniors#roommates" },
      { name: "No bank account", href: "/seniors#no-bank-account" },
    ],
    partners: [
      { name: "Attorneys & POA", href: "/partners" },
      { name: "Community banks & CUs", href: "/partners" },
      { name: "Refer a client", href: "/partners#get-started" },
    ],
    legal: [
      { name: "Terms of Service", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
    ],
  };

  return (
    <footer className="bg-secondary-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-4 xl:gap-8">
          {/* Logo and Tagline */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Curo"
                width={160}
                height={67}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm leading-6 text-secondary-300">
              Certified money, familiar as a check. An identity-verified, funds-certified digital check for the
              people who still rely on the trust of a check.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-3 xl:col-span-3 xl:mt-0">
            <div>
              <h3 className="text-body font-bold text-white" style={{ fontSize: "1rem", lineHeight: "1.4" }}>
                Product
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.product.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm leading-6 text-secondary-300 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-body font-bold text-white" style={{ fontSize: "1rem", lineHeight: "1.4" }}>
                Who It&rsquo;s For
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.whoItsFor.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm leading-6 text-secondary-300 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-body font-bold text-white" style={{ fontSize: "1rem", lineHeight: "1.4" }}>
                Partners
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.partners.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm leading-6 text-secondary-300 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 border-t border-secondary-800 pt-8 sm:mt-20 lg:mt-24 space-y-6">
          <p className="flex items-center gap-2 text-sm text-secondary-300">
            <CheckCircleIcon className="h-4 w-4 shrink-0" />
            Curo will never ask you for your password.
          </p>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-xs leading-5 text-secondary-300">
              &copy; {currentYear} Curo. All rights reserved.
              <span className="mx-2">&middot;</span>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <span className="mx-2">&middot;</span>
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </p>

            <div className="flex items-center gap-4 text-secondary-300">
              <span className="hidden sm:inline-flex items-center gap-1.5 text-xs">
                <LockIcon className="h-4 w-4" /> 256-bit SSL
              </span>
              {/* COMPLIANCE REVIEW NEEDED: broader trust/security & comparison claims pending legal sign-off */}
              <ReviewPlaceholder
                label="Trust claims pending review"
                detail="site-wide trust/security & comparison claims"
                className="text-xs"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
