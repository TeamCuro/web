import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | CuroPay",
  description:
    "Questions that aren't about a specific payment or a partnership? Send them our way — or use the shortcuts to sign in, become a partner, or see how CuroPay works.",
};

export default function ContactPage() {
  return (
    <div className="curopay-site">
      <Header />
      <main>
        {/* HERO */}
        <section className="hero" style={{ paddingBottom: 40 }}>
          <div className="wrap wrap-narrow center" style={{ margin: "0 auto" }}>
            <span className="eyebrow" style={{ justifyContent: "center" }}>
              Contact
            </span>
            <h1 className="promise" style={{ maxWidth: "none" }}>
              Get in touch.
            </h1>
            <p className="lede" style={{ margin: "0 auto" }}>
              Questions that aren&rsquo;t about a specific payment or a partnership? Send them our way. If you
              already use CuroPay or you&rsquo;re exploring a partnership, the shortcuts below will get you an
              answer faster.
            </p>
          </div>
        </section>

        <section className="sec-sm">
          <div className="wrap">
            <div className="contact-grid">
              {/* LEFT: ways to reach us */}
              <div>
                <div className="cmethod">
                  <span className="ic">
                    <svg viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
                      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <h3>Email us</h3>
                    <p>
                      <a href="mailto:support@getcuro.com" style={{ textDecoration: "underline" }}>
                        support@getcuro.com
                      </a>
                      <br />
                      We reply within one business day.
                    </p>
                  </div>
                </div>
                <div className="cmethod">
                  <span className="ic">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path
                        d="M4 6.5A2.5 2.5 0 016.5 4h1.7c.5 0 .9.3 1 .8l.7 2.4c.1.5-.1 1-.5 1.2l-1.2.8a11 11 0 004.6 4.6l.8-1.2c.3-.4.8-.6 1.2-.5l2.4.7c.5.1.8.5.8 1v1.7a2.5 2.5 0 01-2.5 2.5A13.5 13.5 0 014 6.5z"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <div>
                    <h3>Call us</h3>
                    <p>
                      <a href="tel:+12562131733" style={{ textDecoration: "underline" }}>
                        (256) 213-1733
                      </a>
                      <br />
                      A real person answers, Mon–Fri, 8am–8pm ET.
                    </p>
                  </div>
                </div>
                <div className="cmethod">
                  <span className="ic">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M12 21s7-5.2 7-11a7 7 0 10-14 0c0 5.8 7 11 7 11z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
                    </svg>
                  </span>
                  <div>
                    <h3>Mailing address</h3>
                    <p>
                      CuroPay, Inc.
                      <br />
                      600 Boulevard South, Ste 104
                      <br />
                      Huntsville, AL 35802
                    </p>
                  </div>
                </div>
                <div className="route-card">
                  <h4>Looking for something specific?</h4>
                  <div className="rline">
                    <span>Already a CuroPay user</span>
                    <a href="https://app.getcuro.com/login">Sign in ›</a>
                  </div>
                  <div className="rline">
                    <span>Attorney, bank, or CU</span>
                    <Link href="/partners">Become a partner ›</Link>
                  </div>
                  <div className="rline">
                    <span>New to CuroPay</span>
                    <Link href="/#how">See how it works ›</Link>
                  </div>
                </div>
              </div>

              {/* RIGHT: general inquiry form */}
              <div className="form-card">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
