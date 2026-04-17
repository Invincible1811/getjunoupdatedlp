---
description: Implementation workflow for Juno landing page tasks
---

# Build Workflow

Follow these steps when implementing a feature, component change, or visual update.

## 1. Read Before Touching

- Read the relevant component file(s) in `juno-landing/src/components/`.
- Read `globals.css` to understand existing tokens and utility classes.
- Check `translations.ts` if the task involves any visible text.
- Do not assume — check what already exists first.

## 2. Plan The Smallest Change

- Identify the exact files that need to change.
- Prefer editing existing components over creating new ones.
- Prefer existing tokens and utility classes over new values.
- If a new translation key is needed, add it to both `de` and `en` in `translations.ts`.

## 3. Implement

Order of changes when multiple files are involved:
1. `translations.ts` — add strings first if needed
2. `globals.css` — add tokens or utility classes if needed
3. Component file(s) — implement the change
4. `page.tsx` — only if the section order or composition changes

## 4. Verify

```bash
cd juno-landing && npm run build
```

Fix any TypeScript or build errors before finishing.
The dev server (`npm run dev`) can be used to visually verify at http://localhost:3000.

## 5. Decision Rule

Choose the smallest change that achieves the goal and leaves the codebase
in a state that makes the next change easier.
