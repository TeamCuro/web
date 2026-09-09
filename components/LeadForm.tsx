"use client";

import Link from "next/link";
import { useState } from "react";

const endpoint = "https://formsubmit.co/ajax/0419ebb025863ab88db0f5f681c6f88f";

export default function LeadForm({ kind }: { kind: "partner" | "contact" }) {
  const partner = kind === "partner";
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); const form = event.currentTarget; const data = new FormData(form); const next: Record<string, string> = {};
    for (const name of partner ? ["name", "email", "organization", "partnerType", "message", "consent"] : ["name", "email", "topic", "message", "consent"]) if (!data.get(name)) next[name] = "Required";
    if (!/^\S+@\S+\.\S+$/.test(String(data.get("email") || ""))) next.email = "Enter a valid email";
    if (String(data.get("message") || "").trim().length < 10) next.message = "Please add a little more detail";
    setErrors(next); if (Object.keys(next).length) return;
    if (data.get("website")) return;
    setStatus("sending");
    const payload = Object.fromEntries(data.entries());
    try { const response = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify({ ...payload, _subject: partner ? "New CuroPay Partner Inquiry" : "New CuroPay Contact Inquiry" }) }); if (!response.ok) throw new Error(); setStatus("sent"); form.reset(); } catch { setStatus("error"); }
  }
  if (status === "sent") return <div className="form-success" role="status"><span>✓</span><h3>{partner ? "Your details are on their way." : "Thanks — your message is on its way."}</h3><p>We’ll get back to you within one business day.</p></div>;
  return <form className="lead-form" onSubmit={submit} noValidate><input className="honeypot" name="website" tabIndex={-1} autoComplete="off" />
    <div className="form-two"><Field name="name" label="Name" error={errors.name} /><Field name="email" label="Email" type="email" error={errors.email} /></div>
    {partner ? <><div className="form-two"><Field name="organization" label="Organization" error={errors.organization} /><Select name="partnerType" label="I’m a…" error={errors.partnerType} options={["Attorney / law firm", "CPA / fiduciary", "Community bank", "Credit union", "Other"]} /></div><Field name="phone" label="Phone (optional)" type="tel" /><TextArea name="message" label="Tell us about your clients or members" error={errors.message} /></> : <><div className="form-two"><Field name="phone" label="Phone (optional)" type="tel" /><Select name="topic" label="Topic" error={errors.topic} options={["General question", "Billing & payments", "Accessibility help", "Media & press", "Something else"]} /></div><TextArea name="message" label="How can we help?" error={errors.message} /></>}
    <label className={`consent ${errors.consent ? "invalid" : ""}`}><input type="checkbox" name="consent" value="yes" /> <span>I agree to the <Link href="/privacy">Privacy Policy</Link> and consent to being contacted about my inquiry.</span></label>
    {status === "error" && <p className="form-error">Something went wrong. Please try again.</p>}
    <button className="button button-primary" disabled={status === "sending"}>{status === "sending" ? "Sending…" : partner ? "Start a partner conversation" : "Send message"}</button>
  </form>;
}

function Field({ name, label, type = "text", error }: { name: string; label: string; type?: string; error?: string }) { return <label className="field"><span>{label}</span><input name={name} type={type} aria-invalid={!!error} />{error && <small>{error}</small>}</label>; }
function Select({ name, label, options, error }: { name: string; label: string; options: string[]; error?: string }) { return <label className="field"><span>{label}</span><select name={name} defaultValue="" aria-invalid={!!error}><option value="" disabled>Choose one…</option>{options.map(x => <option key={x}>{x}</option>)}</select>{error && <small>{error}</small>}</label>; }
function TextArea({ name, label, error }: { name: string; label: string; error?: string }) { return <label className="field"><span>{label}</span><textarea name={name} rows={5} aria-invalid={!!error} />{error && <small>{error}</small>}</label>; }
