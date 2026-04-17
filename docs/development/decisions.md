# Design & Architecture Decisions

A log of decisions made during development, with reasoning.
Read this before proposing changes — these have already been debated.

---

## Landing Page Structure

**Decision:** Replace the original feature-grid layout (Features, OurStory, OurTeam, ContactForm)
with a conversion-focused narrative: Hero → Problem → Solution → Early Access.

**Why:** The original layout was informational. The new layout follows a persuasion arc:
hook (hero) → pain recognition (problem) → relief (solution) → action (early access).
This is better suited for a pre-launch page trying to collect midwife signups.

**Source:** Based on `JUNO_Landing_Page_v6_mockup.html` provided by the team.

---

## Color Palette — Keep Green, Not Gold

**Decision:** Retain the existing green palette (`#394835`, `#899e82`) rather than adopting
the mockup's gold/warm-brown palette (`#C9973A`, `#E8B455`, `#1A1208`).

**Why:** The green palette is already established in `globals.css` as design tokens,
used across all components, and reflects the brand identity (nature-inspired, calm, trustworthy).
The mockup's gold palette was a design exploration, not a final brand decision.

---

## i18n — All Strings in translations.ts

**Decision:** Every visible user-facing string must live in `translations.ts`. No hardcoded
strings in JSX, ever.

**Why:** The site supports DE and EN simultaneously. Hardcoded strings break the language
switcher and create inconsistency. The `t()` function from `useLanguage()` is the only
approved way to render copy.

**Pattern:**
```ts
const { t } = useLanguage();
t(translations.section.key)  // returns string for current locale
```

---

## Phone Screenshots — Extracted from Mockup

**Decision:** Extract the base64-encoded phone screenshots from the HTML mockup and save
them as separate image files in `public/assets/juno/`.

**Files:** `mockup-screen-0.png` (hero bg), `mockup-screen-1/2/3.png` (solution blocks).

**Why:** The mockup HTML was a single self-contained file with embedded images. Extracting
them allows proper Next.js `<Image>` optimization and makes assets manageable.

**Note:** These are uncompressed PNGs. They should be converted to WebP when the hero
background is finalized.

---

## Tour Complete UI — Built in JSX, Not an Image

**Decision:** The "Tour complete!" phone mockup in the Early Access section is built as
styled JSX elements, not an image.

**Why:** It's simple enough to build in code, loads instantly (no image request), is
fully accessible, and the stats (visits, drive time, etc.) can be made dynamic later.

---

## Mobile Menu — Deferred

**Decision:** The hamburger menu icon is rendered but has no implementation.

**Why:** Deferred to keep the initial restructure focused. The nav links are visible on
desktop. Mobile menu is the highest priority follow-up task.

---

## CTA Target — External Link

**Decision:** The "Jetzt Early Access sichern" button links to `https://app.getjuno.de/#auth`
(an external URL), not a native form.

**Why:** No backend exists for the landing page. The external app handles signups.
A native waitlist form on the landing page is a future option if the team wants to
collect interest without requiring full app registration.

---

## Unused Components — Kept, Not Deleted

**Decision:** `Features.tsx`, `OurStory.tsx`, `OurTeam.tsx`, `ContactForm.tsx` are kept
in `src/components/` even though they are not used in `page.tsx`.

**Why:** They were not deleted in the same session as the restructure to avoid accidental
data loss. They should be deleted in a dedicated cleanup task once the new structure is confirmed.

---

## Production Build Failure — Do Not Attempt to Fix Prematurely

**Decision:** The `npm run build` failure (scheduler/Turbopack) is a pre-existing issue
that predates all current changes. Do not attempt to fix it by downgrading packages
without a dedicated investigation.

**Workaround:** `npm run dev` works fine. Use that for development and preview.
Try `next build --no-turbo` as a first diagnostic step if a production build is needed.
