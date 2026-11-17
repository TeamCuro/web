"use client";

import { useId, useState, type FormEvent } from "react";
import Link from "next/link";
import { submitLead } from "@/lib/formsubmit";
import { emailOk, phoneOk, FieldError, FormNote, Req, ErrorSummary, useFormErrors, type FormErrors } from "./formA11y";

const ORDER = ["name", "company", "email", "phone", "tos"] as const;

function validate(data: FormData): FormErrors {
  const errs: FormErrors = {};
  const email = String(data.get("email") || "").trim();
  const phone = String(data.get("phone") || "").trim();
  if (!String(data.get("name") || "").trim()) errs.name = "Enter your name.";
  if (!String(data.get("company") || "").trim()) errs.company = "Enter your company name.";
  if (!email) errs.email = "Enter your email address so we can reply.";
  else if (!emailOk(email)) errs.email = "Enter a full email address, like name@firm.com.";
  if (!phone) errs.phone = "Enter a phone number so we can call you.";
  else if (!phoneOk(phone)) errs.phone = "Enter a phone number with at least 10 digits.";
  if (data.get("tos") !== "yes") errs.tos = "Agree to the Terms of Service and Privacy Policy to continue.";
  return errs;
}

export default function PartnerForm() {
  const uid = useId();
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [formError, setFormError] = useState("");
  const { errors, summary, attempt, check, onChange, fieldProps, id, helpId, errId } = useFormErrors(uid, ORDER, validate);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (data.get("website")) return; // honeypot

    setFormError("");
    if (!check(form)) return;

    const name = String(data.get("name") || "").trim();
    const company = String(data.get("company") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();

    setStatus("sending");
    setFormError("");
    const result = await submitLead({ name, company, email, phone, _subject: "New Fidura Partner Inquiry" });
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
    <form className="partner-form" onSubmit={handleSubmit} onChange={onChange} noValidate>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="honeypot" aria-hidden="true" />
      <div>
        <FormNote />
        <ErrorSummary errors={summary} order={ORDER} attempt={attempt} uid={uid} />
      </div>
      <div className="pf-two">
        <div className="pf-row">
          <label htmlFor={id("name")}>
            Name <Req />
          </label>
          <input {...fieldProps("name")} type="text" placeholder="Your name" autoComplete="name" />
          <FieldError id={errId("name")}>{errors.name}</FieldError>
        </div>
        <div className="pf-row">
          <label htmlFor={id("company")}>
            Company name <Req />
          </label>
          <input {...fieldProps("company")} type="text" placeholder="Firm, bank, or credit union" autoComplete="organization" />
          <FieldError id={errId("company")}>{errors.company}</FieldError>
        </div>
      </div>
      <div className="pf-row">
        <label htmlFor={id("email")}>
          Email <Req />
        </label>
        <input {...fieldProps("email")} type="email" placeholder="you@example.com" autoComplete="email" />
        <FieldError id={errId("email")}>{errors.email}</FieldError>
      </div>
      <div className="pf-row">
        <label htmlFor={id("phone")}>
          Phone <Req />
        </label>
        <p className="f-help" id={helpId("phone")}>At least 10 digits, any format.</p>
        <input {...fieldProps("phone", { help: true })} type="tel" placeholder="(555) 555-5555" autoComplete="tel" />
        <FieldError id={errId("phone")}>{errors.phone}</FieldError>
      </div>
      <div className="pf-row">
        <div className="pf-check">
          <input {...fieldProps("tos")} type="checkbox" value="yes" />
          <label htmlFor={id("tos")}>
            I agree to the <Link href="/terms">Terms of Service</Link> and <Link href="/privacy">Privacy Policy</Link>. <Req />
          </label>
        </div>
        <FieldError id={errId("tos")}>{errors.tos}</FieldError>
      </div>
      {formError && <p className="f-err" role="alert"><span>{formError}</span></p>}
      <button type="submit" className="btn btn-action btn-lg" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Start a partner conversation"}
      </button>
    </form>
  );
}
