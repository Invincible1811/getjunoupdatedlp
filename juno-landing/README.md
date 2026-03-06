# JUNO Landing Page

A pixel-perfect landing page for **JUNO** — an intelligent digital assistant for midwives. Built from a Figma design with Next.js 16, Tailwind CSS v4, and TypeScript.

## Tech Stack

- **Framework**: Next.js 16 (App Router, React 19)
- **Styling**: Tailwind CSS v4 + minimal custom CSS
- **Fonts**: Poppins (primary), Manrope (feature cards)
- **Language**: TypeScript
- **Images**: Optimized with `next/image` (WebP, SVG, PNG)

## Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Production Build

```bash
# Build for production
npm run build

# Start the production server
npm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css        # Design tokens, gradients, utility classes
│   ├── layout.tsx         # Root layout (fonts, metadata)
│   └── page.tsx           # Page composition
├── components/
│   ├── Navbar.tsx         # Sticky header with nav links + CTA
│   ├── Hero.tsx           # Hero section with floating bubbles
│   ├── Features.tsx       # 6-card feature grid (Manrope font)
│   ├── CTA.tsx            # Call-to-action section
│   ├── OurStory.tsx       # Founder story section
│   ├── OurTeam.tsx        # 8-member team grid
│   ├── ContactForm.tsx    # Contact form + role cards
│   └── Footer.tsx         # Footer with social links
public/
└── assets/juno/           # All local image assets
```

## Responsive Breakpoints

| Breakpoint | Width   |
|------------|---------|
| Mobile     | 375px   |
| Tablet     | 768px   |
| Desktop    | 1440px  |

## Design Reference

Figma file key: `4IQ6pnQALHHFlf3sMVAr5a`
