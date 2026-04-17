# Juno — Project Context

> Read `docs/development/state.md` before starting any task.
> It contains the current implementation state, known issues, and next steps.

## What is Juno?
JUNO is an intelligent digital assistant for midwives (Hebammen), a university project with passion-project motivation. Mobile-first app that reduces administrative overhead so midwives can focus on patients.

**Status:** Pre-launch. Landing page in active development. App not yet released.
**Primary language:** German (DE), English (EN) via i18n.

## Product — Core Features
1. **Midwife Calendar** — home visits, shifts, breaks, linked to routes
2. **Automated Communication** — confirmations, cancellations, delays sent automatically
3. **Patient Overview** — due dates, discharges, to-dos, progress per patient
4. **Route Optimization** — minimizes travel distance based on patient availability
5. **Performance Dashboard** — revenue, kilometers, exportable for billing
6. **Substitute Planning** — network to find replacement midwives

**Key value prop:** Save up to 30% of time through smarter scheduling, optimized routing, automatic communication.

## Target Audience
- Freelance and employed midwives (Hebammen) in Germany
- Secondary: investors, partners, interested parties

## Team
| Name    | Role         |
|---------|--------------|
| Jannik  | Product      |
| Anna    | Research     |
| Sandra  | Scrum Master |
| Julian  | Developer    |
| Can     | Developer    |
| Daniel  | Developer    |
| Bernard | Developer    |
| Tarek   | Developer    |

## Brand & Visual Identity

### Colors (defined in `juno-landing/src/app/globals.css`)
| Token           | Hex / Value                 | Usage                          |
|-----------------|-----------------------------|--------------------------------|
| Primary         | `#394835`                   | Dark green — main brand color  |
| Primary Light   | `#899e82`                   | Buttons, accents, badges       |
| Background      | `#ffffff`                   | Page background                |
| Foreground      | `#171717`                   | Main text                      |
| Text Gray       | `#606266`                   | Secondary text                 |
| Text Dark       | `#444444`                   | Body text                      |
| Border Light    | `rgba(217, 217, 217, 0.6)`  | Card borders                   |
| Problem BG      | `#F4F2ED`                   | Problem section warm background |
| CTA BG          | `#394835`                   | Early Access dark section      |

### Typography
- **Body:** Poppins (`--font-poppins`)
- **Headings/accents:** Manrope (`--font-manrope`)

### Key UI Patterns
- Logo: subtle glow + shimmer animation via `.logo-animated` class — never remove
- Buttons: `.btn-primary` gradient class (`#9db496 → #899e82`) — never override with inline styles
- Accent color on hero italic text: `#899e82` inline style
- Promise badges: `bg-[#EBF5F0] text-primary` rounded-full with ✓ prefix

## Assets
```
juno-landing/public/assets/juno/
├── logo.png                    ← Main logo (used in Navbar)
├── footer-bg.webp              ← Footer background texture
├── mockup-screen-0.png         ← Hero background (extracted from mockup v6)
├── mockup-screen-1.png         ← Solution block 1: Tagesplanung
├── mockup-screen-2.png         ← Solution block 2: Routenplanung
├── mockup-screen-3.png         ← Solution block 3: Verspätungen
├── mascot.webp                 ← JUNO mascot (unused in current layout)
├── blob-bold.svg / blob-light.svg  ← Unused in current layout
├── feature-icon-*.svg          ← Unused in current layout
└── [team photos].png           ← Anna, Bernard, Can, Daniel, Jannik, Sandra, Tarek, julian
```

### Docs Folder
```
docs/
├── brand/        ← Drop corporate identity, style guide, logo files here
├── product/      ← Drop wireframes, roadmap, pitch deck here
└── research/     ← Drop user research, midwife interviews, market research here
```

## Tech Stack
- **Framework:** Next.js 16 (App Router, Turbopack)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **i18n:** Custom `LanguageContext` + `translations.ts` (DE/EN)
- **Package manager:** npm
- **Dev server:** `cd juno-landing && npm run dev` → http://localhost:3000

## Current Page Structure
```
page.tsx composes:
  Navbar       → sticky top nav, logo + 3 links + language toggle + CTA
  Hero         → full-height, dark green overlay, headline, CTA, quote
  Problem      → warm bg, pain point list with SVG icons         id="why"
  Solution     → white bg, 3 alternating feature blocks          id="features"
  CTA          → dark green, early access CTA + phone UI + testimonials  id="early-access"
  Footer       → dark green bg, links, Impressum/Datenschutz modals
```

### Removed sections (replaced by new structure)
Features grid, OurStory, OurTeam, ContactForm — these components still exist as files but are not used in `page.tsx`.

## Codebase Structure
```
juno-landing/src/
├── app/
│   ├── page.tsx          ← Composes: Navbar, Hero, Problem, Solution, CTA, Footer
│   ├── layout.tsx        ← Root layout, fonts, providers
│   └── globals.css       ← Design tokens, .btn-primary, .logo-animated, utility classes
├── components/
│   ├── Navbar.tsx        ← Sticky nav, 3 links, language toggle, CTA button
│   ├── Hero.tsx          ← Full-height hero with dark green overlay
│   ├── Problem.tsx       ← Pain point list section (NEW)
│   ├── Solution.tsx      ← 3-block alternating feature section (NEW)
│   ├── CTA.tsx           ← Early Access section (REWRITTEN)
│   ├── Footer.tsx        ← Dark green footer with modals
│   ├── DatenschutzModal.tsx  ← Privacy policy modal
│   ├── ImpressumModal.tsx    ← Legal notice modal
│   ├── Features.tsx      ← UNUSED (old feature grid)
│   ├── OurStory.tsx      ← UNUSED
│   ├── OurTeam.tsx       ← UNUSED
│   └── ContactForm.tsx   ← UNUSED
└── lib/
    ├── LanguageContext.tsx   ← DE/EN switcher, useLanguage() hook, t() function
    └── translations.ts       ← All strings: nav, hero, problem, solution, earlyAccess, footer
```

## i18n Pattern
All visible strings live in `translations.ts`. Never hardcode strings in JSX.

```ts
// In component:
const { t } = useLanguage();
t(translations.section.key)  // returns DE or EN string

// Arrays use index:
t(translations.problem.items[0])
t(translations.solution.blocks[2].title)
```

## Agent Guidance
Repo-specific rules, agent prompts, and workflows live in `.agents/`.

| Path | Purpose |
|------|---------|
| `.agents/rules/design.md`       | Always-on UI/design guardrails |
| `.agents/agents/frontend.md`    | Spawn for focused landing page tasks |
| `.agents/agents/backend.md`     | Spawn for API/backend thinking |
| `.agents/workflows/build.md`    | Follow when implementing changes |
| `.agents/workflows/brainstorm.md` | Follow when ideating |
| `.agents/workflows/struct.md`   | Follow when refactoring |
