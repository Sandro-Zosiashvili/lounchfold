# Launchfold

A premium, bilingual (ქართული / English) brand website for a digital agency that
builds online stores for social-media-only sellers. Built with Next.js 16, React 19,
TypeScript, SCSS modules, GSAP and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 — you'll be redirected to `/ka` (Georgian is the
default) or `/en` depending on your browser / saved preference.

```bash
npm run build   # production build
npm run start   # serve the production build
```

> Requires Node.js 18.18+ (Node 20+ recommended).

## Rebranding — change the name in ONE place

All brand information lives in **`src/config/site.ts`**: company name, tagline,
contact email/phone, social links, founded year. Change a value there and it
updates everywhere on the site — nothing is hardcoded elsewhere.

## Languages

- Default locale: **Georgian (`ka`)**, with English (`en`).
- All copy lives in `src/i18n/dictionaries/ka.ts` and `en.ts`, both typed against
  the shared shape in `src/i18n/types.ts` (so the two stay in sync — a missing key
  is a compile error).
- Locale routing/detection is handled in `src/middleware.ts`.
- The language switcher is in the header and preserves the current section.

## Project structure

```
src/
├─ app/
│  ├─ layout.tsx              # pass-through root layout
│  ├─ fonts.ts                # next/font setup (display, body, mono, georgian)
│  ├─ robots.ts / sitemap.ts
│  ├─ not-found.tsx
│  └─ [locale]/
│     ├─ layout.tsx           # <html lang> + metadata per locale
│     └─ page.tsx             # assembles all sections
├─ components/                # one folder per component: Name.tsx + Name.module.scss
│  ├─ Header/ Hero/ Problem/ Services/ Why/ Process/
│  ├─ Features/ Work/ Testimonials/ Contact/ Footer/
│  ├─ Logo/ LanguageSwitcher/ SectionHeading/
├─ hooks/                     # reusable logic (scroll animations, form, locale)
├─ config/site.ts             # single source of truth for brand info
├─ i18n/                      # locales, dictionaries, loader, types
└─ styles/                    # tokens, mixins, globals (SCSS)

public/assets/
├─ images/  icons/  fonts/
```

## Animations

- **Hero** — a flat "social card" that folds into a 3D storefront, scrubbed to
  scroll (`src/hooks/useHeroAnimation.ts`).
- **Process** — a vertical progress line that fills as you scroll
  (`src/hooks/useProcessTimeline.ts`).
- **Reveal on scroll** — staggered fade/rise used across sections
  (`src/hooks/useRevealOnScroll.ts`).
- **Why / Testimonials** — Framer Motion in-view reveals.

All animations respect `prefers-reduced-motion`.

## Contact form

The form (`src/components/Contact`) is fully built on the front end with validation
and submit states. The network call in `src/hooks/useContactForm.ts` is a stub
(`submit()`); wire it to your backend / email service there.

## Notes

- Styling is SCSS modules only — no Tailwind.
- Design tokens (colors, type scale, spacing, motion) live in
  `src/styles/_tokens.scss` and are mirrored as CSS variables in `globals.scss`.
# lounchfold
