# Hoshida Dispatch — Schools Page Plan

## File structure

```
app/schools/page.tsx                    — server component, all static sections
components/sections/SchoolEmailForm.tsx — "use client", CTA inline email form
```

No changes to existing shared components.

---

## Sections (top to bottom)

| # | Section | Type |
|---|---------|------|
| 1 | **Nav** | Reused |
| 2 | **Hero** | New layout |
| 3 | **Features** | Reused pattern, new content |
| 4 | **What You Get** | New section |
| 5 | **Process** | Reused pattern, new wrapper |
| 6 | **Pricing** | Entirely new |
| 7 | **Testimonials** | Reused pattern, one variant change |
| 8 | **CTA** | New layout (inline email form) |
| 9 | **Footer** | Reused |

---

## What's reused vs new

### Fully reused — no work needed
- `<Nav />` — `usePathname()` already handles "Schools" highlighting automatically
- `<Footer />` — unchanged

### Reused patterns — same JSX structure, new content
These are not extracted components, just the same markup pattern applied with different data. No shared component exists for them on the homepage either — they're inline grid JSX.

**Features (section 3)** — identical structure to homepage "What We Offer": 3-col grid, icon + title + body, indigo middle card with a label. Different icons, titles, and body copy. Drop-in.

**Step cards (section 5)** — same `.mod-step` pattern as homepage "Getting Started": large number, icon, title, body, colour variants (white / cream / terra). The schools page has 3 steps instead of 4, and wraps them differently (see Process below).

**Testimonial cards (section 7)** — same structure (stars, quote, avatar initials, name, role) as homepage and teachers page. Third card is `bg-ink` text-white variant instead of white — a one-line class change.

### New layouts and sections

**Hero (section 2)** — different from both previous pages. Instead of a single full-width dark module, it's a 2-col grid: dark ink text panel left + grey photo placeholder right, both equal height at `min-h-[380px]`. The text panel has the same decorative blobs and eyebrow/H1/sub/CTA structure, but there's no stats panel — the right side is purely the photo.

**What You Get (section 4)** — 2-col layout: white text panel left, grey visual placeholder right. The text panel has a section label, H2, a body paragraph, a bullet list (4 items with small terra dots), and two buttons (Discover more / Learn more). The visual placeholder just says "Feature animation" — stays as a grey box for now.

**Process wrapper (section 5)** — the step cards themselves are reused but the layout is new. The process grid is 3-col with a full-width ink intro panel spanning all 3 columns on the first row, then the 3 step cards below. The homepage had a flat 4-col grid with no intro panel. The ink intro panel contains: H2 "Getting started is *straightforward*", a subline, and a "Contact us" cream button.

**Pricing (section 6)** — entirely new, nothing like this on the other pages. 3-col layout: `[1fr, 1.4fr, 1fr]`. The center card (wider) is white and contains: a terra badge pill, H3, subline, an italic contact note in a cream rounded box ("Please contact us for our pricing"), a checklist with indigo circle checkmarks, and a "Contact us" ink button. The two flanking cards are note panels — left is indigo, right is terra — each with a title and short body paragraph.

**CTA (section 8)** — the other pages use `<ContactForm />` (full name/email/school/message form). The schools page has a simpler inline version: H2 + subline on the left, and just an email input + "Get started" button on the right. This needs a `"use client"` component (`SchoolEmailForm`) because of the controlled input and submit handler.

---

## SchoolEmailForm — detail

Minimal client component. Email input + submit button, inline pill layout to match the static HTML.

On submit: POSTs to `/api/contact` with `{ name: 'Schools page enquiry', email, message: 'Submitted via Schools page CTA form' }`. The existing route requires name + email + message — this satisfies all three without changing the route.

States: `idle → loading → success / error`. Success replaces the form with a brief confirmation line. Error shows a message below the input.

---

## Testimonial nav arrows

The static HTML has prev/next arrow buttons in the testimonials section header but no JS. Keeping them as visual chrome for now — non-functional, same as the reference. Flag as a future carousel enhancement.

---

## Components created by this page

| Component | Path | Shared? |
|-----------|------|---------|
| SchoolEmailForm | `components/sections/SchoolEmailForm.tsx` | Schools page only |

---

## SEO

`<title>` and `<meta name="description">` in page metadata, same pattern as homepage and teachers.

---

## Open questions

1. **Hero photo** — The right column is a grey placeholder. Is the photo for this slot the same classroom/teaching photo that would go in assets, or is it intentionally different from the teacher page imagery (e.g. a school building or admin context)?
2. **Pricing** — "Please contact us for our pricing" is the current line. Is that the final message, or should there be a price range, a link to a contact form, or a mailto?
3. **"Feature animation"** — The What You Get visual is labelled "Feature animation" in the reference HTML, suggesting it was intended for a product demo or animated graphic. Worth flagging: is this a future video, a screenshot, or staying as a placeholder indefinitely?
