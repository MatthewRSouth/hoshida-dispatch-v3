# Previous Session Summary

## Project state
The site has been migrated from the static HTML described in CLAUDE.md to a **Next.js 14 / React / Tailwind CSS** project. CLAUDE.md reflects the old HTML prototype — the actual source of truth is the `app/` and `components/` directory structure.

---

## Work completed this session

### Nav
- Removed the **Log in** button from both desktop and mobile nav. Only the **Apply** button remains.

### Card contrast pass (all pages)
- All cards that were `bg-cream` (same colour as the page background, causing invisible borders) were changed first to `bg-white`, then changed again to `bg-indigo-light` (`#EEF0FC`).
- Rule: only the "former cream" cards were changed. Cards that were originally `bg-white`, `bg-indigo`, `bg-terra`, or `bg-ink` were untouched.
- Decorative large step numbers (`text-cream-dark`) on the affected cards were adjusted to `text-indigo/25` to stay legible on the new background.

### Parent Hub (app/parent-hub/page.tsx)
- Rebuilt from plan (`plans/parent-hub-plan.md`) as a pure static page with no bus/route content.
- Content: News & Announcements (4 items), Lesson Schedule (Wednesday · All day, Mr. Brandon, 念法幼稚園), What They're Learning, Contact (email + phone).
- Header subline: "Lesson updates & announcements · 念法幼稚園"
- Status pill: "Term 1 · April 2026" (static badge, no pulsing dot).

### Photos
- Created `public/images/` folder.
- Placed real photos throughout all pages — replacing all grey placeholder boxes.
- Teacher card circles now show real headshots: Brandon → `brandon.PNG`, Remon → `Remon.jpg`, Satoko → `Satoko.jpg`.
- Photo strip cycles all 13 photos (portraits + activity shots), duplicated for seamless loop.
- `data/teachers.ts` — added `photo: string` field to the `Teacher` type and each record.
- Removed `Lucian.jpg` and `math.PNG` after user deleted them from the folder.
- Fixed crop issues on Teachers page "Students First" section: replaced `Harry-two.JPG` (physically rotated 90°) with `exercise-park.jpg`; tuned `object-position` per photo (`object-[50%_30%]` for Harry, `object-[50%_55%]` for rosa).
- Fixed homepage Teaching Style photos stretching: wrapped both `<img>` tags in `h-[280px] overflow-hidden` container divs.

### Image pattern established
All photos use `<img>` tags (not `next/image`) with `// eslint-disable-next-line @next/next/no-img-element` suppression. Containers use `overflow-hidden rounded-[16px]` with a fixed height, and the img uses `h-full w-full object-cover object-[position]`.

---

## Current photo assignments

| Photo | Used in |
|---|---|
| `brandon.PNG` | Teacher card circle + photo strip |
| `Remon.jpg` | Teacher card circle + photo strip |
| `Satoko.jpg` | Teacher card circle + photo strip |
| `Hikari.jpg` | Photo strip only |
| `azusa.JPG` | Photo strip only |
| `pe.PNG` | Homepage teaching style (box 1) + photo strip |
| `exercise-park.jpg` | Homepage teaching style (box 2) + teachers Students First (middle) + photo strip |
| `field-trip.PNG` | Schools hero right panel + photo strip |
| `firetruck.PNG` | Teachers teaching style video placeholder + photo strip |
| `potatoe.PNG` | Schools "What You Get" panel + photo strip |
| `Harry.png` | Teachers Students First (top) + photo strip |
| `rosa.JPG` | Teachers Students First (bottom) + photo strip |
| `Harry-two.JPG` | Photo strip only (removed from page slot — was rotated 90°) |

---

## Key files changed this session

- `app/page.tsx` — homepage
- `app/teachers/page.tsx` — teachers page
- `app/schools/page.tsx` — schools page
- `app/parent-hub/page.tsx` — parent hub (rebuilt)
- `components/layout/Nav.tsx` — removed Log in button
- `components/sections/TeacherCards.tsx` — added real photo circles
- `components/sections/PhotoStrip.tsx` — replaced grey boxes with real photos
- `data/teachers.ts` — added `photo` field

---

## Remaining to-do (from CLAUDE.md + session context)
- Mobile responsiveness pass
- Replace remaining emoji icons in cards with real icons or illustrations
- SEO metadata, Open Graph tags, favicon
- Real contact info in footer (when provided)
- Teacher specialty string for Brandon still has curly braces: `'{Pre-School and Kindergarten}'` — likely a copy/paste artifact to fix
