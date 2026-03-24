# Hoshida Dispatch — Homepage Plan

## Working Agreement
- One page at a time. No page starts until the previous is reviewed and approved.
- Plan first, always. No code without written plan approval.
- Copy is draft — flag with `{/* TODO: copy */}` rather than inventing.
- Mobile-first responsive. Not an afterthought.

---

## Tech Stack
- Next.js (App Router), TypeScript, Tailwind CSS
- Forms: Resend via Next.js API route
- Fonts: DM Serif Display + DM Sans via `next/font/google`
- Images: `next/image` with grey placeholder until real photos provided

---

## Sections (top to bottom)

### 1. Nav — shared component, reused across all marketing pages
- Sticky, frosted glass (`bg-cream/95 backdrop-blur-md`)
- Logo: "Hoshida Dispatch" with terra dot
- Links: Home, Teachers, Schools, Resources, Parent News
- CTAs: Log in (ghost), Apply (primary)
- **New in rebuild:** mobile hamburger menu (not in static HTML)
- Component: `components/layout/Nav.tsx`

### 2. Hero
- Full-width dark (`--ink`) background
- H1: *"English lessons that* matter" (italic on "matter" via DM Serif Display italic)
- Subheadline: placeholder — flag for copy
- Two CTAs: "Get started" (terra, large) + "Learn more" (outline-white, large)
- Stats row: 4 figures inline below CTAs — placeholder data
- **Content status:** H1 is final; subheadline and stats are placeholder

### 3. Photo Strip
- Auto-scrolling carousel, 16 slots (8 + 8 duplicated for seamless loop)
- CSS `translateX` animation, 28s linear infinite, pauses on hover
- Grey placeholder boxes until real photos provided
- **Implementation note:** `"use client"` wrapper only for hover-pause; strip itself is CSS-driven

### 4. What We Offer
- Section label + H2: *"What we* offer"
- 3-column card grid — icon, title, body, "Learn more →" text link
- Static — no interaction
- **Content status:** all placeholder

### 5. Getting Started
- Section label + H2: *"Getting started is* straightforward"
- 4-step process, horizontal desktop / stacked mobile
- Each step: large number, title, short description
- Static — no interaction
- **Content status:** all placeholder

### 6. Teaching Style
- Section label + H2: *"Our teaching* style"
- Asymmetric 2-col: text left, image grid right
- "Philosophy" sub-label + H3: "Montessori-influenced English instruction"
- **Content status:** all placeholder except section heading

### 7. Stats
- Full-width cream-dark band
- 4-column grid of key metrics (numbers + labels) — static
- **Content status:** numbers are placeholder

### 8. Testimonials
- Section label + H2: *"What schools* say"
- 3-column quote cards — static
- **Content status:** all placeholder

### 9. Heritage / Foundation
- 3-column grid: text intro + 2 feature points
- H3: "Built on decades of teaching experience"
- "Learn about us" CTA (cream button)
- **Content status:** all placeholder

### 10. FAQ
- 2-col layout: intro panel left, accordion right
- H3: "Everything you need to know" + "Contact us" CTA
- Accordion: expand/collapse with chevron rotation, `max-height` transition
- First item open by default
- **Implementation note:** `"use client"` component for accordion state
- **Content status:** questions and answers are placeholder

### 11. Final CTA
- Full-width dark band, H2: *"Let's work* together"
- Two CTAs: "Get started" (cream, large) + "Learn more" (outline-white, large)
- **Content status:** all placeholder except H2

### 12. Footer — shared component, reused across all marketing pages
- Dark (`--ink`) background, 4-column grid
- Columns: Brand | For Schools | Company | Contact
- Legal bar: copyright + Privacy / Terms / Cookie links
- **Content status:** all links `#` placeholder; contact details placeholder
- Component: `components/layout/Footer.tsx`

---

## New in Rebuild (not in static HTML)
- Mobile nav with hamburger menu
- Proper semantic HTML (`<nav>`, `<main>`, `<section>`, `<footer>`)
- Open Graph + meta description
- `next/image` for all image slots
- Emoji icons flagged for future SVG replacement

---

## Components Created by This Page

| Component | Path | Shared? |
|-----------|------|---------|
| Nav | `components/layout/Nav.tsx` | Yes — all marketing pages |
| Footer | `components/layout/Footer.tsx` | Yes — all marketing pages |
| Button | `components/ui/Button.tsx` | Yes — all pages |
| PhotoStrip | `components/sections/PhotoStrip.tsx` | Homepage only |
| FaqAccordion | `components/sections/FaqAccordion.tsx` | Homepage (reusable) |

---

## Open Questions
1. **Nav links** — "Resources" and "Parent News" don't exist yet. Disabled/greyed out, or `#` for now?
2. **Apply CTA** — Where does it go? Schools page form, dedicated page, or modal?
3. **Stats** — What are the real numbers (schools served, years operating, teachers placed)?
4. **Footer contact** — Real email/phone, or keep placeholder?

---

## Verification
Once built:
- `npm run dev` → `localhost:3000` — all 12 sections render in order
- Desktop (1440px) and mobile (390px) — nav collapses to hamburger, grids stack
- FAQ accordion opens/closes; first item open by default
- Photo strip auto-scrolls and pauses on hover
- `npm run build` — zero TypeScript errors
- `<title>` and `<meta name="description">` set on page
