# Curo Web

Marketing website for Curo - a modern digital payment platform for sending and receiving secure checks via QR codes.

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
│   ├── globals.css         # Global styles
│   ├── privacy/page.tsx    # Privacy Policy
│   └── terms/page.tsx      # Terms of Service
│
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── Features.tsx        # Feature cards grid
│   ├── HowItWorks.tsx      # 3-step process
│   ├── CTA.tsx             # Waitlist form
│   └── Footer.tsx          # Footer
│
├── assets/                 # Design assets
├── compliance/             # Legal documents
└── roadmap/                # Product planning
```

## Form Submissions

The waitlist form in `components/CTA.tsx` uses [FormSubmit.co](https://formsubmit.co) as a no-account, no-backend form endpoint. On submission, FormSubmit emails the collected fields (`firstName`, `email`, `useCase`, `consent`) to `0419ebb025863ab88db0f5f681c6f88f`.

**How it works:**
1. The form POSTs to `https://formsubmit.co/ajax/<endpoint>` via `fetch`
2. FormSubmit emails the submission to the configured address
3. A hidden honeypot input (`_honey`) is included — bots that auto-fill forms will populate it, and FormSubmit discards those submissions server-side
4. On first use, FormSubmit sends an activation email to confirm the endpoint

**Pending setup:** Confirm the one-time activation email for the configured FormSubmit endpoint before live submissions are delivered.

## Features

- Responsive landing page design
- Waitlist signup form with client-side validation and FormSubmit.co integration
- Privacy Policy and Terms of Service pages
- Tailwind CSS custom color theme

## License

Proprietary - Curo Co LLC
