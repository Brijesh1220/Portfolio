# Brijesh Singh — Portfolio

A modern, animated portfolio built with **Next.js 15**, **TypeScript**, and **Material UI v6**.

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| UI Library | Material UI v6 |
| Styling | MUI `sx` prop + CSS-in-JS (Emotion) |
| Fonts | Syne · DM Mono · Lora (Google Fonts) |

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout — metadata, Providers
│   └── page.tsx            # Main page — assembles all sections
├── components/
│   ├── Providers.tsx       # MUI ThemeProvider + AppRouterCacheProvider
│   ├── Cursor.tsx          # Custom animated cursor + ring
│   ├── Navbar.tsx          # Fixed glassmorphism navbar with smooth scroll
│   ├── Hero.tsx            # Hero — typewriter, stats, CTAs
│   ├── SectionEyebrow.tsx  # Reusable section label component
│   ├── About.tsx           # About — avatar, bio, chip stack
│   ├── Experience.tsx      # Timeline with role bullets and tags
│   ├── Modules.tsx         # 6-card grid of platform modules
│   ├── Skills.tsx          # Animated progress bars (frontend + backend)
│   ├── Education.tsx       # NIT Kurukshetra education card
│   ├── TargetCompanies.tsx # Target companies grid
│   ├── Contact.tsx         # Contact section with link buttons
│   └── Footer.tsx          # Footer
├── data/
│   └── portfolio.ts        # All static content (single source of truth)
├── hooks/
│   └── useReveal.ts        # IntersectionObserver scroll-reveal hook
├── theme/
│   └── theme.ts            # MUI custom dark theme (amber + cyan palette)
├── types/
│   └── index.ts            # Shared TypeScript interfaces
├── next.config.ts
├── tsconfig.json
└── package.json
```

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

## Customise

All portfolio content lives in **`data/portfolio.ts`** — update your:
- Email, LinkedIn, GitHub, phone in `CONTACT_LINKS`
- Work bullets in `EXPERIENCE`
- Skill percentages in `SKILL_GROUPS`
- Target companies in `TARGET_COMPANIES`

## Deploy to Vercel

```bash
npm i -g vercel
vercel
```

## Features

- ✅ Custom animated cursor with hover ring expansion
- ✅ Typewriter effect cycling through roles
- ✅ Scroll-triggered reveal animations (IntersectionObserver)
- ✅ Animated skill progress bars
- ✅ Fully responsive (mobile-first)
- ✅ Dark theme with amber + cyan accent palette
- ✅ Noise texture overlay for depth
- ✅ Smooth scroll navigation
- ✅ MUI App Router compatible setup
- ✅ TypeScript strict mode
- ✅ Single data file for all content updates
