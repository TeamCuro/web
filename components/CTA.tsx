"use client";

import { useState } from "react";

export default function CTA() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    useCase: "",
    consent: false,
    _honey: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.consent) {
      newErrors.consent = "You must agree to continue";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/info@getcuro.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          email: formData.email,
          useCase: formData.useCase,
          consent: formData.consent,
          _subject: "New Curo Waitlist Signup",
          _honey: formData._honey,
        }),
      });

      if (!response.ok) {
        setErrors({ _form: "Something went wrong. Please try again." });
        return;
      }

      const result = await response.json();

      if (result.success === "true" || result.success === true) {
        setIsSuccess(true);
        setFormData({
          firstName: "",
          email: "",
          useCase: "",
          consent: false,
          _honey: "",
        });
      } else {
        setErrors({ _form: "Something went wrong. Please try again." });
      }
    } catch {
      setErrors({ _form: "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  if (isSuccess) {
    return (
      <section id="get-started" className="py-24 sm:py-32 bg-primary-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-success-500 mb-6">
              <svg
                className="h-8 w-8 text-white"
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
            <h2 className="font-heading text-white mb-4">
              You're on the list!
            </h2>
            <p className="text-body-lg text-primary-100 mb-8">
              We'll be in touch soon with early access details and updates about Curo.
              Check your inbox for a confirmation email.
            </p>
            <button
              onClick={() => setIsSuccess(false)}
              className="text-white underline hover:text-primary-100 transition-colors"
            >
              Submit another response
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="get-started" className="py-24 sm:py-32 bg-primary-600">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="font-heading text-white">
            Ready to send checks with confidence?
          </h2>
          <p className="mt-4 text-body-lg text-primary-100">
            Join the waitlist for early access to Curo. Be among the first to experience
            secure, modern check payments.
          </p>
        </div>

        {/* Form */}
        <div className="mx-auto max-w-xl">
          <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
            {/* Honeypot — hidden from real users, bots auto-fill it */}
            <input
              type="text"
              name="_honey"
              value={formData._honey}
              onChange={handleChange}
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />
            {/* First Name */}
            <div>
              <label
                htmlFor="firstName"
                className="block text-body-sm font-bold text-secondary-900 mb-2"
              >
                First Name <span className="text-error-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`input-field-full ${errors.firstName ? "error" : ""}`}
                placeholder="John"
              />
              {errors.firstName && (
                <p className="mt-2 text-body-sm text-error-500">{errors.firstName}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-body-sm font-bold text-secondary-900 mb-2"
              >
                Email Address <span className="text-error-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`input-field-full ${errors.email ? "error" : ""}`}
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="mt-2 text-body-sm text-error-500">{errors.email}</p>
              )}
            </div>

            {/* Use Case Dropdown */}
            <div>
              <label
                htmlFor="useCase"
                className="block text-body-sm font-bold text-secondary-900 mb-2"
              >
                How will you use Curo? <span className="text-secondary-300 text-body-sm font-normal">(Optional)</span>
              </label>
              <select
                id="useCase"
                name="useCase"
                value={formData.useCase}
                onChange={handleChange}
                className="input-field-full"
              >
                <option value="">Select an option</option>
                <option value="trustee-caregiver">
                  Managing payments as a trustee or caregiver
                </option>
                <option value="personal">Sending personal checks</option>
                <option value="business">Business or organizational use</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Consent Checkbox */}
            <div>
              <div className="flex items-start">
                <div className="flex h-6 items-center">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    checked={formData.consent}
                    onChange={handleChange}
                    className={`h-5 w-5 rounded border border-secondary-200 text-primary-600 focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 transition-all ${
                      errors.consent ? "border-error-500" : ""
                    }`}
                  />
                </div>
                <div className="ml-3">
                  <label htmlFor="consent" className="text-body-sm text-secondary-400">
                    I agree to receive updates about Curo and accept the{" "}
                    <a
                      href="/terms"
                      className="text-primary-600 underline hover:text-primary-700 transition-colors"
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      href="/privacy"
                      className="text-primary-600 underline hover:text-primary-700 transition-colors"
                    >
                      Privacy Policy
                    </a>
                    <span className="text-error-500 ml-1">*</span>
                  </label>
                  {errors.consent && (
                    <p className="mt-1 text-body-sm text-error-500">{errors.consent}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Form-level error */}
            {errors._form && (
              <p className="text-body-sm text-error-500 text-center">{errors._form}</p>
            )}

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary btn-full btn-normal"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Joining...
                  </>
                ) : (
                  <>
                    Join the Waitlist
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
                  </>
                )}
              </button>
            </div>

            <p className="text-body-sm text-secondary-300 text-center">
              <span className="text-error-500">*</span> Required fields
            </p>
          </form>
          </div>
        </div>

        {/* Trust Signals */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 text-primary-100">
          <div className="flex items-center space-x-2">
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
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
            <span className="text-body-sm">Your data is secure</span>
          </div>
          <div className="hidden sm:block h-4 w-px bg-primary-400"></div>
          <div className="flex items-center space-x-2">
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
                d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
              />
            </svg>
            <span className="text-body-sm">No spam, ever</span>
          </div>
          <div className="hidden sm:block h-4 w-px bg-primary-400"></div>
          <div className="flex items-center space-x-2">
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
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-body-sm">Unsubscribe anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
}
