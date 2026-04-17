---
trigger: always
---

# Juno Design Rules

## Core Direction

- This is a **marketing landing page** for a mobile-first midwife app — not the app itself.
- Favor a soft, natural, trustworthy aesthetic. Nature-inspired greens with warm pink accents.
- Hierarchy and scannability matter: visitors should understand the product within seconds.
- Design decisions should support conversion (getting midwives to make contact).

## Token Rules

- Always use design tokens from `juno-landing/src/app/globals.css` before introducing new values.
- Primary brand color: `#394835` (dark green)
- Primary light: `#899e82` (buttons, accents)
- Hero gradients: `hero-gradient-pink` and `hero-gradient-green` utility classes
- Never hardcode colors that already exist as tokens.

## Component Rules

- Feature cards use a **beveled bottom-right corner** via `clip-path` polygon — preserve this pattern.
- The JUNO logo has a glow + shimmer animation (`logo-animated` class) — never remove this.
- Buttons use `.btn-primary` gradient class — do not override with inline styles.
- Spacing and layout must stay responsive and mobile-friendly.

## Typography Rules

- Headings and accents: Manrope (`--font-manrope`)
- Body text: Poppins (`--font-poppins`)
- Copy is primarily German (DE) with English (EN) via i18n — never hardcode strings in components.
- All new strings must be added to `juno-landing/src/lib/translations.ts` in both DE and EN.

## Interaction Rules

- Touch targets must be comfortable on mobile.
- Loading, empty, and success states should feel intentional.
- Animations should be subtle — the logo animation is the most prominent intentional motion.

## Accessibility Rules

- Inputs need labels.
- Icon-only buttons need accessible names.
- Focus states must remain visible (`.btn-primary:focus-visible` is already defined).
- Color supports meaning but must not carry meaning alone.
