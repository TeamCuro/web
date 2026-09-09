"use client";

import { useId, useState, type FormEvent } from "react";
import Link from "next/link";
import { submitLead } from "@/lib/formsubmit";

const TOPICS = ["General question", "Billing & payments", "Accessibility help", "Media & press", "Something else"];

function emailOk(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function phoneOk(value: string) {
  return value.replace(/[^0-9]/g, "").length >= 10;
}

export default function ContactForm() {
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
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const topic = String(data.get("topic") || "");
    const message = String(data.get("message") || "").trim();
    const consent = data.get("consent") === "yes";

    const bad = new Set<string>();
    if (!name) bad.add("name");
    if (!emailOk(email)) bad.add("email");
    if (phone !== "" && !phoneOk(phone)) bad.add("phone");
    if (!topic) bad.add("topic");
    if (message.length < 10) bad.add("message");
    if (!consent) bad.add("consent");
    setInvalid(bad);
    if (bad.size) return;

    setStatus("sending");
    setFormError("");
    const result = await submitLead({ name, email, phone, topic, message, _subject: "New CuroPay Contact Inquiry" });
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
        <p>We&rsquo;ll get back to you within one business day. For anything urgent, call (256) 213-1733.</p>
      </div>
    );
  }

  return (
    <form className="cform" onSubmit={handleSubmit} noValidate>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="honeypot" aria-hidden="true" />
      <div className="cf-two">
        <div className={`cf-row${invalid.has("name") ? " error" : ""}`}>
          <label htmlFor={`${uid}-name`}>Name</label>
          <input id={`${uid}-name`} name="name" type="text" placeholder="Your name" autoComplete="name" className={invalid.has("name") ? "invalid" : ""} />
          <span className="cf-err">Please enter your name.</span>
        </div>
        <div className={`cf-row${invalid.has("email") ? " error" : ""}`}>
          <label htmlFor={`${uid}-email`}>Email</label>
          <input
            id={`${uid}-email`}
            name="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            className={invalid.has("email") ? "invalid" : ""}
          />
          <span className="cf-err">Enter a valid email address.</span>
        </div>
      </div>
      <div className="cf-two">
        <div className={`cf-row${invalid.has("phone") ? " error" : ""}`}>
          <label htmlFor={`${uid}-phone`}>
            Phone <span className="opt">(optional)</span>
          </label>
          <input
            id={`${uid}-phone`}
            name="phone"
            type="tel"
            placeholder="(555) 555-5555"
            autoComplete="tel"
            className={invalid.has("phone") ? "invalid" : ""}
          />
          <span className="cf-err">Enter a valid phone number (at least 10 digits).</span>
        </div>
        <div className={`cf-row${invalid.has("topic") ? " error" : ""}`}>
          <label htmlFor={`${uid}-topic`}>Topic</label>
          <select id={`${uid}-topic`} name="topic" defaultValue="" className={invalid.has("topic") ? "invalid" : ""}>
            <option value="">Choose a topic…</option>
            {TOPICS.map((topic) => (
              <option key={topic}>{topic}</option>
            ))}
          </select>
          <span className="cf-err">Please choose a topic.</span>
        </div>
      </div>
      <div className={`cf-row${invalid.has("message") ? " error" : ""}`}>
        <label htmlFor={`${uid}-message`}>How can we help?</label>
        <textarea
          id={`${uid}-message`}
          name="message"
          placeholder="Tell us what you need — the more detail, the faster we can help."
          className={invalid.has("message") ? "invalid" : ""}
        />
        <span className="cf-err">Please enter a short message (at least 10 characters).</span>
      </div>
      <div className={`cf-row${invalid.has("consent") ? " error" : ""}`}>
        <div className="cf-check">
          <input id={`${uid}-consent`} name="consent" type="checkbox" value="yes" />
          <label htmlFor={`${uid}-consent`}>
            I agree to the <Link href="/privacy">Privacy Policy</Link> and consent to being contacted about my inquiry.
          </label>
        </div>
        <span className="cf-err">Please agree to the Privacy Policy to continue.</span>
      </div>
      {formError && <p className="cf-err" style={{ display: "block" }}>{formError}</p>}
      <button type="submit" className="btn btn-primary btn-lg" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
