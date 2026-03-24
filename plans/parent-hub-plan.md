# Hoshida Dispatch — Parent Hub Revised Plan

## What changes vs. what stays

**Stays:** Nav, Footer, page header structure, 2-col module grid, all design tokens, fadeUp animations.

**Removed entirely:** `AlertBanner` (bus stop change), `ScheduleModule` (day selector + bus routes), Route Status module, Quick Contacts with driver rows. All bus/route/pickup/drop-off content gone.

**Replaced with:** Lesson Schedule (static), What They're Learning (static), News & Announcements (revised content), Contact (email + phone only).

Since nothing interactive remains, the page becomes a **pure server component** — no client components needed.

---

## File changes

| File | Action |
|------|--------|
| `app/parent-hub/page.tsx` | Rewrite |
| `components/sections/AlertBanner.tsx` | Delete — bus-specific, no longer used |
| `components/sections/ScheduleModule.tsx` | Delete — bus-specific, no longer used |

No new component files. All four modules are static inline JSX in `page.tsx`.

---

## Page layout

```
┌──────────────────────────────────────────────────────┐
│ Nav                                                  │
├──────────────────────────────────────────────────────┤
│ h1: Parent Hub          │  [term pill: Term 1 · 2026]│
│ p: subline              │                            │
├──────────────────────┬───────────────────────────────┤
│ News & Announcements │ Lesson Schedule               │
│ (4 items)            │ (school + day + teacher)      │
├──────────────────────┼───────────────────────────────┤
│ What They're         │ Contact                       │
│ Learning             │ (email + phone)               │
├──────────────────────────────────────────────────────┤
│ Footer                                               │
└──────────────────────────────────────────────────────┘
```

---

## Module detail

### Page header
- H1: `Parent <em>Hub</em>` (terra italic), same as before
- Subline: updated to `Lesson updates & announcements · 念法幼稚園`
- Status pill: replace "All routes running on time" (bus-specific) with a simple static term badge — `Term 1 · April 2026` — no pulsing dot (that was a live indicator for routes)

### News & Announcements
Event-driven list, same pip + title + body + date layout as before. Four items, ordered by event date ascending (soonest first):

| Pip | Title | Date |
|-----|-------|------|
| indigo | Open Lesson — Wednesday, April 1 at 念法幼稚園. Open to new families considering signing up. | Apr 1 |
| green | Regular Classes Begin — Wednesday, April 8, 2026. First regular lesson of the new term. | Apr 8 |
| terra | No Lesson — Wednesday, April 16 (placeholder — national holiday). | Apr 16 |
| cream-deeper | Term 1 Parent Information — Placeholder notice about the upcoming term, lesson format, and what to expect. | Mar 25 |

### Lesson Schedule
Static card — no interactivity, no day selector. Shows:
- Label: "Lesson Schedule"
- Prominent display: **Wednesday** (the lesson day, styled large with serif font)
- School: 念法幼稚園
- Teacher: Mr. Brandon
- Small note: "Makeup lesson dates will be announced in News & Announcements"

### What They're Learning
Simple text card:
- Label: "This Term"
- Body paragraph: `This term we're focusing on everyday English vocabulary through games, conversation, and interactive activities.`
- Small muted line: "Full curriculum details coming soon"

### Contact
Two rows (email + phone), icon box + label/sub. No action buttons — information only. Values match the footer:
- `contact@hoshidadispatch.com`
- `070-1877-7490`

---

## Open questions

1. **Status pill** — Proposing to replace the pulsing "All routes on time" pill with a static `Term 1 · April 2026` badge. Does that work, or would you prefer no pill at all?
2. **Lesson time** — Do we have an actual time for Mr. Brandon's Wednesday sessions? The schedule card currently just shows the day. If there's a time (e.g. 10:00 AM), it can go on the card.
3. **Page subline** — Currently `News, schedules & updates — Week of March 10, 2026`. Proposing to change to `Lesson updates & announcements · 念法幼稚園`. Any preference, or should I just remove the subline entirely?
