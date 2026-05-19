---
name: project-ceypall
description: CeyPall website project — Next.js 14 site for ISPM 15 pallet manufacturer
metadata:
  type: project
---

Full Next.js 14 (App Router) website built for CeyPall (Pvt) Ltd.

**Why:** Production website for Sri Lankan wooden pallet manufacturer — 6 pages, TypeScript, Tailwind CSS, Framer Motion animations, React Hook Form + Zod contact form.

**How to apply:** Reference this for any updates or additions to the CeyPall site.

Stack: Next.js 14.2.5, TypeScript, Tailwind CSS v3, Framer Motion v11, React Hook Form v7 + Zod, next/font (Playfair Display + DM Sans).

Colors: primary #1C3A2B (forest green), accent #C8861A (amber), cream #F7F3EE, charcoal #1A1A1A.

Pages: / (home), /products, /how-it-works, /about, /clients, /contact.

Config: next.config.mjs (not .ts — v14.2.5 doesn't support .ts config).

Run: `npm run dev` — http://localhost:3000.

Client company email: office@ceypall.com. Contact form uses mailto: fallback.
