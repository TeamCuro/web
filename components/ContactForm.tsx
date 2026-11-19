"use client";

import { useId, useState, type FormEvent } from "react";
import Link from "next/link";
import { submitLead } from "@/lib/formsubmit";
import { SUPPORT_PHONE } from "@/lib/contact";
import { emailOk, phoneOk, FieldError, FormNote, Opt, Req, ErrorSummary, useFormErrors, type FormErrors } from "./formA11y";

const TOPICS = ["General question", "Billing & payments", "Accessibility help", "Media & press", "Something else"];

const ORDER = ["name", "email", "phone", "topic", "message", "consent"] as const;

function validate(data: FormData): FormErrors {
  const errs: FormErrors = {};
  const name = String(data.get("name") || "").trim();
  const email = String(data.get("email") || "").trim();
  const phone = String(data.get("phone") || "").trim();
  const topic = String(data.get("topic") || "");
  const message = String(data.get("message") || "").trim();
  if (!name) errs.name = "Enter your name.";
  if (!email) errs.email = "Enter your email address so we can reply.";
  else if (!emailOk(email)) errs.email = "Enter a full email address, like name@example.com.";
  if (phone !== "" && !phoneOk(phone)) errs.phone = "Enter a phone number with at least 10 digits, or leave it blank.";
  if (!topic) errs.topic = "Choose a topic so we can route your message.";
  if (message.length < 10) {
    errs.message = message
      ? `Tell us a bit more. You've typed ${message.length} of 10 characters.`
      : "Tell us how we can help (at least 10 characters).";
  }
  if (data.get("consent") !== "yes") errs.consent = "Agree to the Privacy Policy so we can contact you.";
  return errs;
}

export default function ContactForm() {
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
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const topic = String(data.get("topic") || "");
    const message = String(data.get("message") || "").trim();

    setStatus("sending");
    setFormError("");
    const result = await submitLead({ name, email, phone, topic, message, _subject: "New Fidura Contact Inquiry" });
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
      <div className="cf-success" role="status" style={{ display: "block" }}>
        <strong>Thanks — your message is on its way.</strong>
        <p>We&rsquo;ll get back to you within one business day. For anything urgent, call {SUPPORT_PHONE.display}.</p>
      </div>
    );
  }

  return (
    <form className="cform" onSubmit={handleSubmit} onChange={onChange} noValidate>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="honeypot" aria-hidden="true" />
      <div>
        <FormNote />
        <ErrorSummary errors={summary} order={ORDER} attempt={attempt} uid={uid} />
      </div>
      <div className="cf-two">
        <div className="cf-row">
          <label htmlFor={id("name")}>
            Name <Req />
          </label>
          <input {...fieldProps("name")} type="text" placeholder="Your name" autoComplete="name" />
          <FieldError id={errId("name")}>{errors.name}</FieldError>
        </div>
        <div className="cf-row">
          <label htmlFor={id("email")}>
            Email <Req />
          </label>
          <input {...fieldProps("email")} type="email" placeholder="you@example.com" autoComplete="email" />
          <FieldError id={errId("email")}>{errors.email}</FieldError>
        </div>
      </div>
      <div className="cf-two">
        <div className="cf-row">
          <label htmlFor={id("phone")}>
            Phone <Opt />
          </label>
          <input {...fieldProps("phone", { optional: true })} type="tel" placeholder="(555) 555-5555" autoComplete="tel" />
          <FieldError id={errId("phone")}>{errors.phone}</FieldError>
        </div>
        <div className="cf-row">
          <label htmlFor={id("topic")}>
            Topic <Req />
          </label>
          <select {...fieldProps("topic")} defaultValue="">
            <option value="">Choose a topic…</option>
            {TOPICS.map((topic) => (
              <option key={topic}>{topic}</option>
            ))}
          </select>
          <FieldError id={errId("topic")}>{errors.topic}</FieldError>
        </div>
      </div>
      <div className="cf-row">
        <label htmlFor={id("message")}>
          How can we help? <Req />
        </label>
        <p className="f-help" id={helpId("message")}>At least 10 characters.</p>
        <textarea
          {...fieldProps("message", { help: true })}
          rows={4}
          placeholder="Tell us what you need — the more detail, the faster we can help."
        />
        <FieldError id={errId("message")}>{errors.message}</FieldError>
      </div>
      <div className="cf-row">
        <div className="cf-check">
          <input {...fieldProps("consent")} type="checkbox" value="yes" />
          <label htmlFor={id("consent")}>
            I agree to the <Link href="/privacy">Privacy Policy</Link> and consent to being contacted about my inquiry. <Req />
          </label>
        </div>
        <FieldError id={errId("consent")}>{errors.consent}</FieldError>
      </div>
      {formError && <p className="f-err" role="alert"><span>{formError}</span></p>}
      <button type="submit" className="btn btn-primary btn-lg" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
