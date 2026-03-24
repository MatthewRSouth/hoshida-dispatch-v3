---
name: Project tech stack migration
description: Project is being migrated from static HTML to Next.js 14 App Router + TypeScript + Tailwind CSS
type: project
---

The project is being rebuilt from static HTML files to Next.js 14 (App Router), TypeScript, and Tailwind CSS.

**Why:** The static HTML files exist as design references. The real deliverable is the Next.js app.

**How to apply:** Do not edit the `.html` files for new features. All new pages go in `app/`, shared components in `components/layout/` and `components/sections/`.

Key details:
- Email: Resend via `/app/api/contact/route.ts`, API key in `.env.local`
- Fonts: DM Serif Display + DM Sans via `next/font/google`
- Design tokens in `tailwind.config.ts`
- Build-one-page-at-a-time workflow: homepage first, then teachers, schools, etc.
