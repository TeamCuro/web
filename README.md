# Curo Web

Marketing website for CuroPay - a modern digital payment platform for sending and receiving secure checks via QR codes.

## Tech Stack

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first styling
- **FormSubmit.co** - Form backend for waitlist submissions

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone git@github.com:TeamCuro/web.git
cd web

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Run production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page (landing)
│   ├── globals.css         # Global styles + CuroPay marketing design system
│   ├── caregivers/         # For Caregivers & Fiduciaries
│   ├── seniors/            # For Seniors
│   ├── compare/            # Compare vs. alternatives
│   ├── partners/           # Partner program + referral form/modal
│   ├── contact/            # Contact page
│   ├── pricing/            # Fees page
│   ├── privacy/page.tsx    # Privacy Policy
│   └── terms/page.tsx      # Terms of Service
│
├── components/
│   ├── Header.tsx          # Navigation header (desktop + mobile)
│   ├── Footer.tsx          # Footer
│   ├── ContactForm.tsx     # /contact lead form
│   ├── PartnerForm.tsx     # /partners referral form (inline + modal)
│   ├── PartnerModal.tsx    # /partners referral modal
│   └── PartnerNav.tsx      # Header + modal wiring for /partners
│
├── lib/
│   └── formsubmit.ts       # Shared FormSubmit.co integration used by every lead form
│
├── assets/                 # Design assets
├── compliance/             # Legal documents
└── roadmap/                # Product planning
```

## Form Submissions

Every lead form on the site (waitlist, contact, partner) shares the same [FormSubmit.co](https://formsubmit.co) integration in `lib/formsubmit.ts`. It POSTs JSON to `https://formsubmit.co/ajax/0419ebb025863ab88db0f5f681c6f88f`, which emails the submission to the configured address.

**How it works:**
1. The form POSTs to `https://formsubmit.co/ajax/<endpoint>` via `fetch`
2. FormSubmit emails the submission to the configured address
3. A hidden honeypot input is included on every form — bots that auto-fill forms will populate it, and the form skips submission client-side
4. On first use, FormSubmit sends an activation email to confirm the endpoint

**Pending setup:** Confirm the one-time activation email for the configured FormSubmit endpoint before live submissions are delivered.

## Features

- Seven-page marketing site (Home, Caregivers, Seniors, Compare, Partners, Contact, Fees) built around the CuroPay design system
- Contact and partner referral forms with client-side validation and shared FormSubmit.co integration
- Privacy Policy and Terms of Service pages
- Tailwind CSS custom color theme

## License

Proprietary - Curo Co LLC
