# Raka Adrianto — Portfolio

A personal portfolio website for **Raka Adrianto** — Sustainability Program Manager, Product & Data.

**Live:** [raka-adrianto.vercel.app](https://raka-adrianto.vercel.app)

## About

A single-page portfolio showcasing Raka's work at the intersection of sustainability, product, and data. The site features a horizontal journey timeline (8 companies from World Bank to Siemens), a curated set of AI/PM side projects and applied research, and a working contact form.

## Tech Stack

- **[Next.js 16](https://nextjs.org/)** — App Router, Turbopack, React 19
- **[TypeScript](https://www.typescriptlang.org/)** — strict mode
- **[Tailwind CSS v4](https://tailwindcss.com/)** — utility-first styling
- **[Framer Motion](https://www.framer.com/motion/)** — scroll-reveal animations
- **Fonts** — [Fraunces](https://fonts.google.com/specimen/Fraunces) (display), [Inter](https://rsms.me/inter/) (body), [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) (accent italic), all self-hosted via `next/font`

## Project Structure

```
.
├── app/                          # Next.js App Router
│   ├── (sections)/               # Page sections (hero, about, journey, etc.)
│   ├── globals.css               # Tailwind + CSS variables (palette, fonts)
│   ├── layout.tsx                # Root layout, fonts, metadata
│   └── page.tsx                  # Home page composition
├── components/
│   ├── decorations/blob.tsx      # Animated background blobs
│   ├── motion/                   # Reveal, Stagger animation primitives
│   ├── nav/                      # Sticky nav with scroll detection
│   ├── ui/                       # Button, Badge, Card primitives
│   ├── footer.tsx
│   └── section-header.tsx        # Reusable section title + eyebrow
├── lib/
│   ├── site.ts                   # Identity, about, socials, skills
│   ├── experience.ts             # 8 career entries
│   ├── projects.ts               # AI/PM + Research projects
│   ├── education.ts              # Degrees, certifications, awards, competitions
│   └── types.ts                  # TypeScript interfaces
├── public/
│   ├── logos/                    # 8 real company SVGs
│   └── photos/                   # Portrait
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 20+ and npm

### Install

```bash
npm install
```

### Run dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

## Deployment

The site is configured for **[Vercel](https://vercel.com)** deployment (zero-config). Push to `master` and Vercel will auto-deploy. To deploy manually:

1. Import this repo at [vercel.com/new](https://vercel.com/new)
2. Accept the auto-detected Next.js settings
3. Click **Deploy**

## Content Updates

All content lives in the `lib/` directory as typed data — no CMS required.

- **Identity, about, socials, skills** → `lib/site.ts`
- **Career timeline** → `lib/experience.ts` (8 entries, oldest to newest)
- **Projects** → `lib/projects.ts` (split into `ai-pm` and `research` kinds)
- **Education, certifications, awards, competitions** → `lib/education.ts`

To add a new project or role, just add a new entry to the relevant array — the section components will pick it up automatically.

## Company Logos

All 8 company logos in `public/logos/` are real brand SVGs (Siemens, Dow, EDF, ETH Zürich, KTH, Wienerberger, World Bank) sourced from [Wikimedia Commons](https://commons.wikimedia.org/) under permissive licenses, or the ICON mark which is a custom reconstruction for portfolio identification.

## Privacy

The `asset-profile/` directory (CV, Notion exports, source photos) is gitignored and stays local. Only public portfolio assets are committed.

## License

This project is the personal portfolio of Raka Adrianto. All rights reserved.

Company logos and trademarks belong to their respective owners and are used here for identification purposes only.
