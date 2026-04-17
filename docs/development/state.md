# Development State

**Last updated:** 2026-04-17
**Active branch:** main

---

## Current Status

Landing page is live on dev server (`npm run dev` → http://localhost:3000).
Production build has a pre-existing failure — see Known Issues.

---

## Page Sections

| Section      | Component      | ID             | Status  |
|--------------|----------------|----------------|---------|
| Navbar       | `Navbar.tsx`   | —              | ✅ Done |
| Hero         | `Hero.tsx`     | `#hero`        | ✅ Done |
| Problem      | `Problem.tsx`  | `#why`         | ✅ Done |
| Solution     | `Solution.tsx` | `#features`    | ✅ Done |
| Early Access | `CTA.tsx`      | `#early-access`| ✅ Done |
| Footer       | `Footer.tsx`   | —              | ✅ Done |

---

## Current Design Decisions

### Colors
| Token       | Value     | Used for                              |
|-------------|-----------|---------------------------------------|
| Primary     | `#394835` | Navbar bg, CTA section, Footer        |
| Primary Light | `#899E82` | Hero gradient end, icons, badges     |
| Gold        | `#F2B13E` | Early Access buttons, "endlich", icons, hero quote star |
| Hero Gradient | `#6E7E69 → #899E82` | Hero bg, left→right (90deg), from Figma node 2369:719 |

### Buttons
- `.btn-gold` — all Early Access CTAs → links to `https://app.getjuno.de/#auth` (external, `target="_blank"`)
- `.btn-primary` — unused for CTAs, kept in globals.css for other use

---

## Section Details

### Navbar
- Logo: **text placeholder "JUNO"** — image removed temporarily (logo.png had padding issues; cropped version saved as `logo.png` 718×189, original backed up as `logo-original.png`)
- Links: Warum JUNO · Funktionen · Early Access
- CTA: "Early Access sichern" → `https://app.getjuno.de/#auth` (gold button)
- Language toggle: DE ↔ EN
- Mobile: hamburger rendered, **no menu logic yet**

### Hero
- Background: `linear-gradient(90deg, #6E7E69 0%, #899E82 100%)` (left→right)
- Overlay: `womb.png` at `opacity: 0.2` (z-index 1, above gradient)
- Heading: 38px mobile / 50px tablet / 60px desktop — "endlich" italic `#F2B13E`
- CTA: gold button → `https://app.getjuno.de/#auth`
- Quote: white, 30px/34px, bold italic — "Spart mir locker 16 Stunden im Monat"
- No background image (mockup-screen-0.png removed)

### Problem
- Background: `problem-bg.png` (4096×2308 photo) with `bg-black/60` overlay
- Text: white on dark overlay; icons and label in `#F2B13E`
- 4 bullet points (first item "Du beantwortest Nachrichten..." was removed)

### Solution
- 3 alternating blocks with phone mockups
- Images: `mockup-screen-1/2/3.png` (758×1630, aspect-ratio `758/1630`)
- Promise badges: green pill `bg-[#EBF5F0] text-primary`

### CTA (Early Access)
- Background: `#394835`
- Phone "Tour Complete" UI in JSX
- Testimonial quotes: `#F2B13E`
- CTA: gold button → `https://app.getjuno.de/#auth`

### Footer
- Minimal single bar — copyright left, nav links right
- Background: `#394835` (no texture image)
- Impressum + Datenschutz: modal triggers

---

## Known Issues

### 1. Production build fails (pre-existing)
```
Module not found: Can't resolve 'scheduler'
```
**Cause:** react-dom@19.2.3 + Next.js 16 Turbopack incompatibility.
**Fix:** Try `next build --no-turbo` or upgrade react-dom.

### 2. Mobile hamburger menu not implemented
No open/close logic or drawer. Mobile users cannot navigate.

### 3. Navbar logo pending
`logo.png` was auto-cropped to 718×189 but still renders with visible padding due to the image content. Logo replaced with text "JUNO" temporarily. Needs a clean SVG or properly trimmed PNG.

### 4. Unused component files
`Features.tsx`, `OurStory.tsx`, `OurTeam.tsx`, `ContactForm.tsx` exist but are not used.

---

## Next Steps (priority order)

1. **Navbar logo** — provide clean SVG logo or fix PNG, re-implement image
2. **Mobile nav menu** — hamburger open/close + drawer
3. **SEO / meta tags** — update title, description, OG tags in `layout.tsx`
4. **Fix production build** — scheduler/Turbopack issue
5. **Image optimisation** — convert PNGs to WebP, add `sizes` props
6. **Delete unused components** — `Features.tsx`, `OurStory.tsx`, `OurTeam.tsx`, `ContactForm.tsx`

---

## Key Assets

```
public/assets/juno/
├── logo.png               ← Auto-cropped 718×189 (original: logo-original.png)
├── womb.png               ← Hero overlay at 0.2 opacity
├── problem-bg.png         ← Problem section background (4096×2308)
├── mockup-screen-1.png    ← Solution block 1 (758×1630)
├── mockup-screen-2.png    ← Solution block 2 (758×1630)
├── mockup-screen-3.png    ← Solution block 3 (758×1630)
├── footer-bg.webp         ← Unused (footer simplified)
└── mockup-screen-0.png    ← Unused (hero bg removed)
```

## Figma / MCP
- Figma MCP added to user scope: `~/.claude.json`
- Token scoped to `file_content:read`
- File: `4IQ6pnQALHHFlf3sMVAr5a` (JUNO V1)
- Hero gradient sourced from node `2369:719` (Property 1=Dark-Button component)
