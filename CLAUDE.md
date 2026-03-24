# CLAUDE.md — Hoshida Dispatch Website

## Project Overview

Hoshida Dispatch is a company based in Katano, Osaka that sends qualified English teachers to kindergartens across Japan. This repo contains the full marketing website and a parent-facing hub where parents of enrolled children can view dispatch schedules, news, route status, and contact information.

The site is built as **static HTML pages** with inline CSS and vanilla JavaScript. No build tools, no frameworks — just clean, self-contained HTML files.

---

## Pages

| File | Page | Status |
|------|------|--------|
| `hoshida-homepage.html` | Homepage | Draft — content and layout finalised |
| `hoshida-teachers.html` | Teachers page | Draft — sticky panel + scroll cards |
| `hoshida-schools.html` | For Schools page | Draft — content and layout finalised |
| `parent-hub-v2.html` | Parent Hub | Draft v2 — final design direction |
| `parent-news-schedule.html` | Parent Hub v1 | **Deprecated** — early exploration with a different visual style (Nunito/Baloo, blue palette). Kept for reference only. Do not build from this. |

---

## Site Architecture

### Public marketing pages (hoshida-homepage, hoshida-teachers, hoshida-schools)
These share a nav, footer, and design system. They target **school administrators** considering hiring Hoshida for English instruction.

### Parent Hub (parent-hub-v2)
A separate section for **parents of enrolled children**. It provides dispatch information: weekly bus schedules, service announcements, route status, and quick contacts. It uses the same design system as the marketing pages (same fonts, colours, module patterns) but has its own layout — no shared nav or footer with the marketing site. The title in the HTML still says "KinderRide" but this should be updated to "Hoshida Dispatch" or "Parent Hub" — KinderRide is not a brand we are using.

---

## Design System

### Fonts
- **Headings:** DM Serif Display (serif, includes italic)
- **Body:** DM Sans (weights: 300, 400, 500, 600, 700)
- Loaded from Google Fonts

### Colour Palette
```
--cream:        #FAEDCA    (page background)
--cream-dark:   #F0DCA8    (borders, subtle backgrounds)
--cream-deeper: #E8CF90    (used in parent hub for pip accents)
--indigo:       #6C7DE2    (primary accent, CTAs)
--indigo-light: #EEF0FC    (tags, light backgrounds)
--indigo-dark:  #4A5BC4    (hover states)
--terra:        #E18F64    (secondary accent, italic headings, alerts)
--terra-light:  #FAE8DC    (light terra backgrounds)
--terra-dark:   #C46F44    (hover states)
--ink:          #2B2D42    (dark backgrounds, body text)
--muted:        #7A7D95    (secondary text, labels)
--white:        #FFFDF7    (card backgrounds)
--grey:         #D0D0D0    (image placeholders)
--grey-border:  #BEBEBE    (placeholder borders)
```

### Layout Patterns
- **Max width:** 1400px, centred with `5vw` side padding (marketing pages). Parent hub uses `96vw` max width.
- **Border radius:** 16px (`var(--r)`)
- **Card borders:** 1.5px solid `var(--cream-dark)`
- **Grid gap:** 16px
- **Module system:** `.mod` base class with colour variants (`.mod-cream`, `.mod-indigo`, `.mod-terra`, `.mod-ink`)
- **Label style:** `.mod-label` — tiny uppercase with a short line `::before`

### Component Conventions
- **Buttons:** `.btn` base + variants (`.btn-primary`, `.btn-terra`, `.btn-ghost`, `.btn-ink`, `.btn-cream`, `.btn-outline-white`). All use `border-radius: 50px`.
- **Section structure:** `.section` → `.section-inner` → `.section-head` + `.grid`
- **Grid classes:** `.g2`, `.g3`, `.g4` for column counts

### Image Placeholders
All images currently use flat grey placeholder boxes (`background: var(--grey); border: 1.5px solid var(--grey-border)`). These will be replaced with real photos.

---

## Shared Components

### Navigation (marketing pages only)
Sticky nav with frosted glass background (`rgba(250,237,202,0.95)` + `backdrop-filter: blur(10px)`). Links: Home, Teachers, Schools, Resources, Parent News. CTA buttons: Log in (ghost), Apply (primary). Logo: "Hoshida Dispatch" with a terra-coloured dot.

### Footer (marketing pages only)
Dark (`--ink`) footer with 4-column layout: Brand, For Schools, Company, Contact. Legal links at bottom.

### Parent Hub
Has its own self-contained layout. No shared nav or footer with the marketing pages. Includes:
- **Page header** with title and a live status pill
- **Alert banner** (dismissable, terra background) for urgent route changes
- **News list** with colour-coded priority pips (urgent/reminder/update/info)
- **Schedule module** with day selector and time-slot detail view
- **Quick contacts** (dispatch office, driver, emergency line)
- **Route status grid** showing all routes with on-time/delay indicators

---

## Key Interactions

- **FAQ accordion** (homepage): Toggle `.faq-item.open` class, animates `max-height`
- **Teacher scroll cards** (teachers page): `IntersectionObserver` activates cards as they scroll into view, updates a sticky side panel with teacher info and progress dots
- **Schedule day selector** (parent hub): Click day buttons to swap schedule content via JS object lookup (`schedules` map keyed by day abbreviation)
- **Alert dismiss** (parent hub): Removes alert banner element on click
- **Auto-scrolling photo strip** (homepage): CSS `translateX` animation, pauses on hover

---

## What Needs Building

### Immediate
- [ ] Rename all "KinderRide" references to "Hoshida Dispatch" or "Parent Hub"
- [ ] Consolidate shared CSS into a single stylesheet (nav, footer, buttons, grid, modules, typography)
- [ ] Extract shared nav and footer into reusable partials or components
- [ ] Replace grey image placeholders with real photos
- [ ] Add a Resources page
- [ ] Add a Parent News page (linked from marketing nav)
- [ ] Mobile responsiveness pass — current breakpoints are basic

### Future
- [ ] Consider migrating to a static site generator (Astro, 11ty) for DRY templates
- [ ] Add real interactivity to Parent Hub (live route data, authentication)
- [ ] Japanese language version (bilingual site)
- [ ] SEO metadata, Open Graph tags, favicon

---

## Code Style

- **No build tools.** Files are self-contained HTML with `<style>` and `<script>` tags.
- **Vanilla JS only.** No frameworks, no jQuery, no npm packages in the frontend.
- **CSS custom properties** for all colours and shared values.
- **BEM-ish naming** but not strict — classes are short and descriptive (`.mod-terra`, `.news-item`, `.card-bio`).
- **Consistent spacing:** Marketing sections use `padding: 60px 5vw`. Grids use `gap: 16px`.

---

## Important Context

- **Hoshida Dispatch** is a real business. **Hoshida International School** is the parent organisation.
- The target audiences are: (1) Japanese kindergartens considering hiring teachers (schools page), and (2) parents of children already using the dispatch service (parent hub).
- Teacher profiles (Harlow, Tanaka, Okafor, Ellis) use placeholder data but represent the real team structure.
- The Parent Hub covers dispatch logistics: bus routes, weekly schedules, driver contacts, service announcements. It is NOT a separate product — it is part of Hoshida Dispatch.
- Contact info in the footer is placeholder. Do not expose real email/phone until told otherwise.
- `parent-news-schedule.html` is an old design direction (different fonts, different colours). Do not reference it for design decisions. Use `parent-hub-v2.html` as the source of truth for the parent hub.

---

## File Structure (target)

```
/
├── index.html              (homepage)
├── teachers.html
├── schools.html
├── resources.html          (to build)
├── parent-news.html        (to build)
├── parent-hub.html         (parent-facing dispatch hub)
├── css/
│   └── styles.css          (shared stylesheet — to extract)
├── js/
│   └── main.js             (shared interactions — to extract)
├── assets/
│   └── images/             (photos — to add)
├── CLAUDE.md
└── README.md
```
