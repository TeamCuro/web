import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import { CtaBand, FeatureCards, Footer, ProductStory, SectionHeading } from "@/components/Marketing";

export default function Home() {
  return <><Header activeHref="/" /><main><section className="hero home-hero"><div className="wrap hero-grid">
    <div><p className="pill">Certified money. Familiar as a check.</p><h1>The trust of a certified check, brought to digital money.</h1><p className="lede">CuroPay replaces the paper check with an identity-verified, funds-certified digital equivalent — printable, mailable, or sent instantly — without ever exposing an account or routing number.</p><div className="button-row"><Link className="button button-primary button-large" href="https://app.getcuro.com/register">Create your account</Link><Link className="button button-outline button-large" href="#how">See how it works</Link></div><div className="trust-line"><span>✓</span> No account or routing number exposed</div></div>
    <div className="hero-visual"><div className="visual-ring" /><Image src="/curo-lp-hero-image.png" alt="A caregiver showing a secure CuroPay QR check" width={1024} height={1024} priority /><div className="floating-card"><strong>Payment certified</strong><span>Identity verified • Funds confirmed</span></div></div>
  </div></section>

  <section className="section"><div className="wrap"><SectionHeading title="Which one sounds like you?" description="CuroPay works a little differently depending on why you’re moving money. Start where you fit." center /><div className="router-grid">
    <Link className="router-card" href="/caregivers"><span className="pill">Most common</span><h3>I’m managing money for someone else</h3><p>You’re a trustee, POA, or caregiver moving money for a parent or relative — and you need approvals, roles, and a clean record.</p><b>Caregivers & Fiduciaries →</b></Link>
    <Link className="router-card" href="/seniors"><div className="icon-orb">✓</div><h3>I mail my own checks</h3><p>You still send checks for bills and gifts. Keep the check you trust — printed, mailed, or handed over — now with verified identity behind it.</p><b>For Seniors →</b></Link>
    <div className="router-note"><strong>Also works for everyday money.</strong> Splitting rent with roommates, or paying a bill without a bank account — collect or send with certified funds and a real receipt every time.</div>
  </div></div></section>

  <section className="section tint" id="how"><div className="wrap"><SectionHeading eyebrow="How it works" title="Three steps, and it behaves like the check you already know." center /><div className="steps">
    <article className="step"><h3>Create</h3><p>Enter the amount and who it’s for. CuroPay verifies your identity and certifies the funds before anything moves — no account or routing number is ever exposed.</p></article>
    <article className="step"><h3>Send securely</h3><p>Print it, mail it, or send it instantly. Every check carries a secure QR code, so the recipient can claim it without opening an account.</p></article>
    <article className="step"><h3>Track & confirm</h3><p>Watch it clear in real time and keep an audit-ready record automatically. When it’s done, you’ll see: Your payment is confirmed.</p></article>
  </div></div></section>

  <section className="section"><div className="wrap"><SectionHeading eyebrow="Why CuroPay" title="Proof and control, built into the money itself." center /><FeatureCards items={[
    {icon:"$",title:"Certified funds",text:"Funds are verified and certified before a payment moves — so both sides get proof, not a promise."},
    {icon:"ID",title:"Verified identity",text:"Every sender’s identity is verified, so recipients know exactly who a payment came from."},
    {icon:"✓",title:"Full audit trail",text:"Approvals, roles, and receipts are recorded on every transfer — a record your family, attorney, or CPA can act on."},
    {icon:"QR",title:"QR-secured checks",text:"A printable, mailable check backed by a secure QR code — the familiar artifact, now fraud-protected."},
    {icon:"→",title:"No account required",text:"Recipients can claim what you send without opening an account, then choose ACH or instant debit."},
    {icon:"↗",title:"Flexible payout",text:"Send instantly or on a schedule; recipients get paid by ACH or instant debit, whichever they prefer."}
  ]} /></div></section>

  <section className="section tint"><div className="wrap"><SectionHeading eyebrow="Inside CuroPay" title="The app that does the work behind the check." description="Create, send, and track each payment without exposing sensitive account details." /><div className="story-stack">
    <ProductStory image="/curo-lp-how-it-works-1.png" eyebrow="Create with confidence" title="You always know exactly who it’s going to." text="Every recipient is a saved payee with a trust status you can see at a glance. Print the check, mail it, or send it instantly — the account and routing numbers never appear on it." caption="Send to a saved, identity-checked payee — never a bare phone number." />
    <ProductStory image="/curo-lp-how-it-works-2.png" eyebrow="Claim securely" title="The recipient doesn’t need an account." text="Each CuroPay check carries a secure QR code. The recipient verifies who they are and chooses how to receive the funds, without signing up for another payment app." flip />
    <ProductStory image="/curo-lp-how-it-works-3.png" eyebrow="A record that keeps itself" title="Watch it clear, with the record already made." text="See what you’ve sent, received, and what’s still in flight. Every payment keeps an audit-ready record automatically — so when someone asks, the answer is already there." caption="Sent, received, and in-flight totals — each with an audit-ready record." />
  </div></div></section>

  <section className="section"><div className="wrap"><SectionHeading eyebrow="Made for responsibility" title="Built for the people who answer for the money." center /><div className="quote-panel"><p>“CuroPay gives families, fiduciaries, and advisors the proof they need before questions become disputes.”</p></div></div></section>
  <CtaBand title="Ready to move money with proof attached?" text="Managing money — for yourself or for someone else — is a real responsibility. CuroPay is built to make it easier." />
  </main><Footer /></>;
}
