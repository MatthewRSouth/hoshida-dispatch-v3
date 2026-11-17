# CLAUDE.md — Hoshida Dispatch Website

## Project Overview

Hoshida Dispatch is a company based in Katano, Osaka that sends qualified English teachers to kindergartens across Japan. **Hoshida International School** is the parent organisation. This is a real business.

This repo is the marketing website plus a parent-facing **Parent Hub** for families at partner kindergartens (currently 念法幼稚園 / Nenpo Kindergarten).

**Audiences:**
1. Japanese kindergartens considering hiring teachers (homepage, schools, teachers pages)
2. Parents of children already taught by Hoshida teachers (parent hub)

---

## Tech Stack

- **Next.js 14** (App Router) + **React 18** + **TypeScript** (strict)
- **Tailwind CSS 3** — design tokens live in `tailwind.config.ts`
- **Fonts:** DM Serif Display + DM Sans via `next/font/google` (`app/layout.tsx`), exposed as `font-serif` / `font-sans`
- **Icons:** `lucide-react`
- **Email:** Resend, via the `/api/contact` route
- **Hosting:** Vercel

### Commands
```bash
npm run dev     # local dev server
npm run build   # production build (needs network access to Google Fonts)
npm run lint
npx tsc --noEmit  # type check without building
```

### Environment variables (`.env.local`, never committed)
| Var | Purpose |
|-----|---------|
| `RESEND_API_KEY` | Resend API key |
| `CONTACT_EMAIL` | Where contact form enquiries are sent (required; route returns 500 without it) |
| `RESEND_FROM` | Optional sender, defaults to `Hoshida Dispatch <onboarding@resend.dev>` |

---

## File Structure

```
app/
  layout.tsx              root layout, fonts, site metadata
  globals.css             Tailwind base + custom keyframes (fadeUp, scroll-strip, pulse-dot)
  page.tsx                Homepage
  teachers/page.tsx       Teachers page
  schools/page.tsx        For Schools page (hero, features, process, pricing, testimonials, CTA)
  parent-hub/page.tsx     Parent Hub (static, noindex)
  api/contact/route.ts    Contact form POST handler (Resend)
components/
  layout/Nav.tsx          'use client' — sticky frosted nav, mobile menu, active link
  layout/Footer.tsx       dark ink footer, 4 columns
  sections/               page sections; client components where interactive
    ContactForm.tsx       'use client'
    SchoolEmailForm.tsx   'use client'
    FaqAccordion.tsx      'use client'
    TeacherCards.tsx      'use client' — reads data/teachers.ts
    PhotoStrip.tsx        'use client' — auto-scrolling photo strip (homepage)
  ui/Button.tsx           typed Button (link or button), variants + sizes
data/
  teachers.ts             Teacher type + records (Brandon, Remon, Satoko)
public/images/            all site photos
plans/                    per-page build plans + previous session summary
memory/                   older project notes
*.html (repo root)        LEGACY static HTML prototypes — design reference only
```

**The `.html` files in the repo root are the original static prototypes.** Don't edit them or build features in them. The Next.js app in `app/` and `components/` is the source of truth.

---

## Pages

| Route | File | Notes |
|-------|------|-------|
| `/` | `app/page.tsx` | Hero, photo strip, offer, Montessori philosophy, FAQ, contact form |
| `/teachers` | `app/teachers/page.tsx` | Hero, teaching style, teacher cards, "students first", CTA + contact form |
| `/schools` | `app/schools/page.tsx` | Features, what you get, process, pricing, testimonials, inline email CTA |
| `/parent-hub` | `app/parent-hub/page.tsx` | News & announcements, lesson schedule, what they're learning, contact. Pure server component. `robots: noindex` |

Nav links: Home, Teachers, Schools, Parent Hub. Only the **Apply** CTA is shown (Log in was removed).

### Parent Hub scope
The parent hub is about **lessons**, not buses. Bus routes, route status, driver contacts and the day-selector schedule from the old prototype were deliberately removed (see `plans/parent-hub-plan.md`). Don't bring them back.

---

## Design System

Use the Tailwind tokens. Don't hardcode hex values when a token exists.

| Token | Hex | Use |
|-------|-----|-----|
| `cream` | #FAEDCA | page background |
| `cream-dark` | #F0DCA8 | borders |
| `cream-deeper` | #E8CF90 | pip accents |
| `indigo` / `-light` / `-dark` | #6C7DE2 / #EEF0FC / #4A5BC4 | primary accent, CTAs, card backgrounds, hover |
| `terra` / `-light` / `-dark` | #E18F64 / #FAE8DC / #C46F44 | secondary accent, italic headings |
| `ink` | #2B2D42 | dark sections, body text |
| `muted` | #7A7D95 | secondary text |
| `white` | #FFFDF7 | card backgrounds (note: overrides Tailwind's pure white) |

**Layout conventions**
- `max-w-site` (1400px), sections use `px-[5vw]`, bottom spacing `pb-[60px]`
- Radius: `rounded-[16px]` / `rounded-card` for cards, `rounded-pill` for buttons
- Card borders: `border border-cream-dark`
- Grid gap: `gap-4` (16px)
- Cards that sit on the cream background use `bg-indigo-light` (not `bg-cream`, which disappears into the page)
- Entrance animation: `animate-fade-up`

---

## Images

- All photos live in `public/images/` and are referenced as `/images/<file>`.
- Photos use plain `<img>` with `object-cover` plus an `object-[x%_y%]` focal point, and an `{/* eslint-disable-next-line @next/next/no-img-element */}` comment above. Keep this pattern for consistency.
- Before adding a photo: fix EXIF rotation, resize to max ~1600px on the long edge, save as JPEG (~80 quality), and **strip metadata (GPS)**. Aim for under ~300 KB.
- Use descriptive lowercase-hyphen file names (e.g. `halloween-group-photo.jpg`).
- After placing a photo, check the crop so faces aren't cut off at the box's aspect ratio.
- Photos show real children. Don't put children's names in alt text or file names.
- CSP only allows `img-src 'self' data: blob:`, so external image URLs will not load. Always add images to `public/images/`.

---

## Security (next.config.mjs)

Security headers apply to all routes: CSP, `X-Frame-Options: DENY`, HSTS, `nosniff`, a strict `Permissions-Policy`. If you add any external resource (script, font CDN, image host, API), you must update the CSP or it will be blocked.

The contact route already has input validation, HTML escaping, a honeypot field (`website`) and an in-memory rate limit (3 per IP per minute). Keep these when changing it. The in-memory limiter doesn't share state across Vercel instances. Upgrade to Upstash if abuse becomes a problem.

---

## Working Agreement

- **Plan first.** Write or update a plan in `plans/` and get approval before building a new page or large section.
- **One page at a time.** Finish a page, then stop for review before starting the next.
- **Copy is draft.** Mark uncertain copy with `{/* TODO: copy */}` rather than inventing claims.
- **Mobile-first.** Check small screens for every change.
- **Contact details:** don't add or change real email addresses or phone numbers unless told to.
- **Changes go through a branch + PR**, not straight to `main` (main auto-deploys).

---

## Still To Do

- [ ] Resources page
- [ ] Parent News page
- [ ] Replace remaining placeholder copy (parent hub news, testimonials)
- [ ] Move photo `<img>` tags to `next/image` (optional, for automatic sizing)
- [ ] SEO: Open Graph tags, favicon
- [ ] Japanese language version (bilingual site)
- [ ] Shared rate limiting for the contact route (if needed)
