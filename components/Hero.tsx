export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary-50 to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left Column - Copy */}
          <div className="flex flex-col justify-center">
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full w-fit mb-6">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
              </svg>
              <span className="text-body-sm font-bold">Bank-Level Security</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-secondary-900 mb-6">
              Send checks with{" "}
              <span className="text-primary-600">confidence and control</span>
            </h1>

            {/* Subheadline */}
            <p className="text-body-lg text-secondary-500 mb-8">
              The simplicity of a check, the security of modern payments. Perfect for trustees,
              caregivers, and anyone who values clear, trackable money management.
            </p>

            {/* Key Benefits List */}
            <ul className="space-y-4 mb-10">
              <li className="flex items-start space-x-3">
                <div className="flex-shrink-0 h-6 w-6 bg-success-100 rounded-full flex items-center justify-center mt-0.5">
                  <svg
                    className="h-4 w-4 text-success-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
                <p className="text-body text-secondary-400">
                  <strong className="font-bold text-secondary-900">Never lost or stolen</strong> –
                  QR-based checks can't be cashed by the wrong person
                </p>
              </li>
              <li className="flex items-start space-x-3">
                <div className="flex-shrink-0 h-6 w-6 bg-success-100 rounded-full flex items-center justify-center mt-0.5">
                  <svg
                    className="h-4 w-4 text-success-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
                <p className="text-body text-secondary-400">
                  <strong className="font-bold text-secondary-900">Manage payments for others</strong> –
                  Built for trustees and caregivers with permission controls
                </p>
              </li>
              <li className="flex items-start space-x-3">
                <div className="flex-shrink-0 h-6 w-6 bg-success-100 rounded-full flex items-center justify-center mt-0.5">
                  <svg
                    className="h-4 w-4 text-success-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
                <p className="text-body text-secondary-400">
                  <strong className="font-bold text-secondary-900">Recipients don't need an account</strong> –
                  They simply scan, verify, and choose how to receive funds
                </p>
              </li>
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#get-started"
                className="btn btn-primary btn-normal"
              >
                Get Early Access
                <svg
                  className="ml-2 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>
              <a
                href="#how-it-works"
                className="btn btn-outline btn-normal"
              >
                See How It Works
              </a>
            </div>

            {/* Social Proof Placeholder */}
            <div className="mt-10 flex items-center space-x-6">
              <div className="flex -space-x-2">
                {/* Avatar placeholders */}
                <div className="h-10 w-10 rounded-full bg-secondary-300 border-2 border-white"></div>
                <div className="h-10 w-10 rounded-full bg-secondary-400 border-2 border-white"></div>
                <div className="h-10 w-10 rounded-full bg-secondary-500 border-2 border-white"></div>
                <div className="h-10 w-10 rounded-full bg-secondary-600 border-2 border-white flex items-center justify-center">
                  <span className="text-xs text-white font-semibold">+50</span>
                </div>
              </div>
              <p className="text-body-sm text-secondary-400">
                Join <strong className="font-bold text-secondary-900">50+ families</strong> managing payments with confidence
              </p>
            </div>
          </div>

          {/* Right Column - Hero Image Placeholder */}
          <div className="relative lg:ml-8">
            {/* Main Image Placeholder */}
            <div className="relative rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 p-8 shadow-2xl">
              <div className="aspect-[4/3] bg-white rounded-xl shadow-inner flex items-center justify-center border-2 border-dashed border-primary-300">
                <div className="text-center p-8">
                  <svg
                    className="mx-auto h-24 w-24 text-primary-400 mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                  <p className="text-primary-600 font-medium">Hero Image Placeholder</p>
                  <p className="text-sm text-primary-500 mt-2">
                    e.g., Person scanning QR check on phone
                    <br />
                    Recommended: 800x600px
                  </p>
                </div>
              </div>

              {/* Floating Card Element - Check Preview */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-4 max-w-[200px] border border-secondary-200">
                <div className="flex items-start space-x-3">
                  <div className="h-12 w-12 bg-success-100 rounded flex items-center justify-center flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-success-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-secondary-900">Payment Sent</p>
                    <p className="text-xs text-secondary-600">$1,250.00</p>
                  </div>
                </div>
              </div>

              {/* Floating Card Element - Security Badge */}
              <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-xl p-4 border border-secondary-200">
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg
                      className="h-4 w-4 text-primary-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-secondary-900">Encrypted</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative blur orbs */}
            <div className="absolute -z-10 -top-20 -right-20 h-72 w-72 rounded-full bg-primary-200 opacity-20 blur-3xl"></div>
            <div className="absolute -z-10 -bottom-20 -left-20 h-72 w-72 rounded-full bg-success-200 opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>

      {/* Bottom wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
