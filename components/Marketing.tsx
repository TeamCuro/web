import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import Header, { Brand } from "./Header";

export const registerUrl = "https://app.getcuro.com/register";

export function SiteShell({ children, active }: { children: ReactNode; active?: string }) {
  return <><Header activeHref={active} /><main>{children}</main><Footer /></>;
}

export function PageHero({ eyebrow, title, description, active, image, children }: { eyebrow?: string; title: string; description: string; active?: string; image?: string; children?: ReactNode }) {
  return <section className={`page-hero ${image ? "with-image" : ""}`}><div className="wrap page-hero-grid"><div>{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h1>{title}</h1><p className="lede">{description}</p><div className="button-row">{children ?? <Link className="button button-primary button-large" href={registerUrl}>Create your account</Link>}</div></div>{image && <Image className="page-hero-image" src={image} alt="" width={1024} height={1024} />}</div></section>;
}

export function SectionHeading({ eyebrow, title, description, center = false }: { eyebrow?: string; title: string; description?: string; center?: boolean }) {
  return <div className={`section-heading ${center ? "center" : ""}`}>{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h2>{title}</h2>{description && <p>{description}</p>}</div>;
}

export function Icon({ children }: { children: ReactNode }) { return <span className="icon-orb" aria-hidden="true">{children}</span>; }

export function FeatureCards({ items, columns = 3 }: { items: { icon?: ReactNode; title: string; text: string }[]; columns?: 2 | 3 }) {
  return <div className={`feature-grid cols-${columns}`}>{items.map((item) => <article className="feature-card" key={item.title}>{item.icon && <Icon>{item.icon}</Icon>}<h3>{item.title}</h3><p>{item.text}</p></article>)}</div>;
}

export function CtaBand({ title, text, label = "Create your account", href = registerUrl, secondary }: { title: string; text: string; label?: string; href?: string; secondary?: { label: string; href: string } }) {
  return <section className="section compact"><div className="wrap"><div className="cta-band"><h2>{title}</h2><p>{text}</p><div className="button-row centered"><Link className="button button-white button-large" href={href}>{label}</Link>{secondary && <Link className="button button-ghost-light button-large" href={secondary.href}>{secondary.label}</Link>}</div></div></div></section>;
}

export function ProofList({ items }: { items: string[] }) { return <ul className="proof-list">{items.map((item) => <li key={item}><span>✓</span>{item}</li>)}</ul>; }

export function ProductStory({ image, eyebrow, title, text, flip = false, caption }: { image: string; eyebrow: string; title: string; text: string; flip?: boolean; caption?: string }) {
  return <div className={`story ${flip ? "flip" : ""}`}><div className="story-image"><Image src={image} alt="" width={1024} height={1024} />{caption && <span>{caption}</span>}</div><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2><p>{text}</p></div></div>;
}

export function Footer() {
  return <footer className="footer"><div className="wrap"><div className="footer-grid"><div className="footer-about"><Brand inverse /><p>Certified money, familiar as a check. An identity-verified, funds-certified digital check for the people who still rely on the trust of a check.</p></div><div><h3>Product</h3><Link href="/#how">How it works</Link><Link href="/compare">Compare</Link><Link href="/pricing">Fees</Link></div><div><h3>Who it’s for</h3><Link href="/caregivers">Caregivers & Fiduciaries</Link><Link href="/seniors">Seniors</Link></div><div><h3>Partners</h3><Link href="/partners">Become a Partner</Link><Link href="/contact">Contact</Link></div></div><div className="footer-security">◇ CuroPay will never ask you for your password.</div><div className="footer-bottom"><span>© {new Date().getFullYear()} CuroPay. All rights reserved.</span><span><Link href="/terms">Terms of Service</Link><Link href="/privacy">Privacy Policy</Link></span></div></div></footer>;
}
