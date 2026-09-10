"use client";

import { useId, useState, type FormEvent } from "react";
import Link from "next/link";
import { submitLead } from "@/lib/formsubmit";

function emailOk(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function phoneOk(value: string) {
  return value.replace(/[^0-9]/g, "").length >= 10;
}

export default function PartnerForm() {
  const uid = useId();
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [invalid, setInvalid] = useState<Set<string>>(new Set());
  const [formError, setFormError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (data.get("website")) return; // honeypot

    const name = String(data.get("name") || "").trim();
    const company = String(data.get("company") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const tos = data.get("tos") === "yes";

    const bad = new Set<string>();
    if (!name) bad.add("name");
    if (!company) bad.add("company");
    if (!emailOk(email)) bad.add("email");
    if (!phoneOk(phone)) bad.add("phone");
    if (!tos) bad.add("tos");
    setInvalid(bad);
    if (bad.size) return;

    setStatus("sending");
    setFormError("");
    const result = await submitLead({ name, company, email, phone, _subject: "New CuroPay Partner Inquiry" });
    if (result.ok) {
      setStatus("sent");
      form.reset();
    } else {
      setStatus("idle");
      setFormError(result.message);
    }
  }

  if (status === "sent") {
    return (
      <div className="pf-success" role="status" style={{ display: "block" }}>
        <strong>Thanks — we&rsquo;ll be in touch.</strong>
        <p>Your details are on their way to our partnerships team. Expect a call or email within one business day.</p>
      </div>
    );
  }

  return (
    <form className="partner-form" onSubmit={handleSubmit} noValidate>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="honeypot" aria-hidden="true" />
      <div className="pf-two">
        <div className={`pf-row${invalid.has("name") ? " error" : ""}`}>
          <label htmlFor={`${uid}-name`}>Name</label>
          <input id={`${uid}-name`} name="name" type="text" placeholder="Your name" autoComplete="name" className={invalid.has("name") ? "invalid" : ""} />
          <span className="pf-err">Please enter your name.</span>
        </div>
        <div className={`pf-row${invalid.has("company") ? " error" : ""}`}>
          <label htmlFor={`${uid}-company`}>Company name</label>
          <input
            id={`${uid}-company`}
            name="company"
            type="text"
            placeholder="Firm, bank, or credit union"
            autoComplete="organization"
            className={invalid.has("company") ? "invalid" : ""}
          />
          <span className="pf-err">Please enter your company name.</span>
        </div>
      </div>
      <div className="pf-two">
        <div className={`pf-row${invalid.has("email") ? " error" : ""}`}>
          <label htmlFor={`${uid}-email`}>Email</label>
          <input
            id={`${uid}-email`}
            name="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            className={invalid.has("email") ? "invalid" : ""}
          />
          <span className="pf-err">Enter a valid email address.</span>
        </div>
        <div className={`pf-row${invalid.has("phone") ? " error" : ""}`}>
          <label htmlFor={`${uid}-phone`}>Phone</label>
          <input
            id={`${uid}-phone`}
            name="phone"
            type="tel"
            placeholder="(555) 555-5555"
            autoComplete="tel"
            className={invalid.has("phone") ? "invalid" : ""}
          />
          <span className="pf-err">Enter a valid phone number (at least 10 digits).</span>
        </div>
      </div>
      <div className={`pf-row${invalid.has("tos") ? " error" : ""}`}>
        <div className="pf-check">
          <input id={`${uid}-tos`} name="tos" type="checkbox" value="yes" />
          <label htmlFor={`${uid}-tos`}>
            I agree to the <Link href="/terms">Terms of Service</Link> and <Link href="/privacy">Privacy Policy</Link>.
          </label>
        </div>
        <span className="pf-err">You must agree to the Terms and Privacy Policy to continue.</span>
      </div>
      {formError && <p className="pf-err" style={{ display: "block" }}>{formError}</p>}
      <button type="submit" className="btn btn-secondary btn-lg" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Start a partner conversation"}
      </button>
    </form>
  );
}
