---
description: Ideation and product thinking workflow for Juno
---

# Brainstorm Workflow

Follow these steps when shaping a new idea, feature, or direction for the landing page or product.

## 1. Start From The Product Reality

- Juno is a **pre-launch mobile app for midwives** in Germany.
- The landing page goal is: get interested midwives to make contact.
- Ideas should serve either **conversion** (landing page) or **midwife daily work** (the app).

## 2. Split Ideas By Layer

For each idea, identify which layer it affects:

- **Message/copy layer** — what the visitor reads and understands
- **UI layer** — which section, card, or flow communicates it
- **Product layer** — a feature or workflow in the app itself
- **Data layer** — whether it needs a backend or can stay static

## 3. Filter

- Prefer changes that reduce friction for a midwife deciding to sign up.
- Avoid speculative complexity — the landing page is a single Next.js page.
- Favor one clear improvement over three half-connected ideas.
- Check: does this align with the brand? (soft, natural, trustworthy, approachable)

## 4. Make It Concrete

Before moving to implementation, define:
- Which section or component is affected
- What the copy change or UI change looks like
- Which translation keys need updating (DE + EN)
- Whether any new asset is needed

## 5. Useful Outputs From This Workflow

- A tightened message or section copy (update `translations.ts`)
- A clearer component or layout idea (ready for the build workflow)
- A product feature idea worth capturing in `docs/product/`
- A short note on what a backend would need if relevant
