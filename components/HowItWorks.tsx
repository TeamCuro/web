import Image from "next/image";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Create Your Check",
      description:
        "Enter the amount, add your recipient's contact info, and choose how you want to deliver it—email, SMS, or mail a physical check with a QR code.",
      icon: (
        <svg
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
          />
        </svg>
      ),
      imageSrc: "/curo-lp-how-it-works-1.png",
      imageAlt: "Check creation form on Curo dashboard",
    },
    {
      number: "02",
      title: "Send Securely",
      description:
        "Your check is protected with a unique QR code and sent instantly. Only the intended recipient can claim it—no risk of theft or loss.",
      icon: (
        <svg
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
          />
        </svg>
      ),
      imageSrc: "/curo-lp-how-it-works-2.png",
      imageAlt: "Email notification with QR code check",
    },
    {
      number: "03",
      title: "Track & Confirm",
      description:
        "Get real-time updates when your check is delivered, claimed, and deposited. Complete transparency from start to finish.",
      icon: (
        <svg
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
          />
        </svg>
      ),
      imageSrc: "/curo-lp-how-it-works-3.png",
      imageAlt: "Transaction status and timeline view",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 sm:py-32 bg-gradient-to-b from-white to-secondary-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-20">
          <p className="text-body font-bold text-primary-600 mb-2">
            Simple Process
          </p>
          <h2 className="font-heading text-secondary-900">
            How Curo Works
          </h2>
          <p className="mt-6 text-body-lg text-secondary-400">
            Send secure checks in three simple steps. No complicated setup, no confusing apps—just
            straightforward, safe payments.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connecting Arrow (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/3 -right-4 z-0">
                    <svg
                      className="h-8 w-8 text-primary-300"
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
                  </div>
                )}

                {/* Step Card */}
                <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-secondary-200 hover:shadow-xl hover:border-primary-300 transition-all duration-300 h-full">
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 -left-4 h-12 w-12 rounded-full bg-primary-600 flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary-50 text-primary-600 mb-6 mt-4">
                    {step.icon}
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-secondary-900 mb-4" style={{ fontSize: '1.5rem', lineHeight: '1.1' }}>
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-body text-secondary-400 mb-6">
                    {step.description}
                  </p>

                  {/* Step Image */}
                  <div className="relative aspect-[16/10] rounded-lg overflow-hidden">
                    <Image
                      src={step.imageSrc}
                      alt={step.imageAlt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Connecting Arrow (mobile only) */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-6">
                    <svg
                      className="h-8 w-8 text-primary-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Callout */}
        <div className="mt-16 mx-auto max-w-3xl">
          <div className="bg-info-50 border border-info-200 rounded-xl p-6 flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="h-10 w-10 bg-info-100 rounded-full flex items-center justify-center">
                <svg
                  className="h-6 w-6 text-info-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h4 className="font-heading text-info-900 mb-1" style={{ fontSize: '1rem', lineHeight: '1.1' }}>
                No Account Required for Recipients
              </h4>
              <p className="text-body-sm text-info-700">
                Your recipients don't need to sign up for Curo. They simply scan the QR code,
                verify their identity with a one-time code, and choose how they want to receive
                their money—ACH bank transfer or instant debit card deposit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
