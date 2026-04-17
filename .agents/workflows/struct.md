---
description: Structural and refactor guidance for the Juno landing page
---

# Structure Workflow

Follow these steps when evaluating or changing the architecture of the landing page.

## Current Baseline

```
juno-landing/src/
├── app/
│   ├── page.tsx          ← composes all sections in order
│   ├── layout.tsx        ← root layout, fonts, providers
│   └── globals.css       ← all design tokens and utility classes
├── components/           ← one file per page section
└── lib/
    ├── LanguageContext.tsx
    └── translations.ts
```

This is a **single-page marketing site**. The structure should stay simple.

## Structural Rules

- Keep components at a flat level in `components/` — no nested feature folders unless clearly justified.
- `page.tsx` only composes sections — no logic lives there.
- `globals.css` is the single source for tokens and shared utility classes.
- `translations.ts` is the single source for all visible strings.
- Do not introduce state management libraries — the existing `LanguageContext` is sufficient.

## When To Add Structure

Only add new files, folders, or abstractions when one of these is true:
- A pattern appears in 3+ components and extracting it would reduce meaningful duplication.
- A component has grown beyond ~150 lines and has clear sub-sections.
- A new page route is added (currently only one route exists).

## When To Refactor

Good signals that a refactor is needed:
- A component imports things it doesn't use.
- A string is hardcoded in JSX instead of coming from `translations.ts`.
- A color or spacing value is hardcoded instead of using a token.
- Two components have near-identical markup with different copy.

## Styling Direction

- Tokens and utility classes belong in `globals.css` — not in component files.
- Use Tailwind utility classes for layout and spacing.
- Use custom utility classes (like `.btn-primary`, `.feature-card`) for branded patterns.
- Inline styles are a last resort — only when a value is truly dynamic.

## Decision Rule

Keep the structure as flat and readable as possible.
The next developer (or Claude in the next session) should be able to understand
what every file does within 30 seconds of reading the folder.
