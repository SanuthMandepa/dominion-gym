# Dominion Fitness — Website

Marketing site for Dominion Fitness, a gym in Sri Lanka. Built with Next.js 16
(App Router), Tailwind v4, Lenis smooth scrolling and GSAP ScrollTrigger.

## Running it

```bash
npm run dev
```

Then open http://localhost:3000. To build for production: `npm run build && npm start`.

## Pages

| Route       | Contents                                                                 |
| ----------- | ------------------------------------------------------------------------ |
| `/`         | Hero, marquee, about preview + stats, programs scroller, coach, BMI calculator, facilities, pricing, testimonials, FAQ, CTA |
| `/about`    | Story, values, stats, coach, facilities, Facebook link                    |
| `/programs` | All six programs in detail (anchor links like `/programs#fat-loss`)       |
| `/schedule` | Weekly class timetable and opening hours                                  |
| `/contact`  | Address, phone, email, hours and a WhatsApp enquiry form                  |

## Editing the content

**Almost everything you need to change lives in [`lib/data.ts`](lib/data.ts).**
Anything still carrying real-world defaults is marked `[PLACEHOLDER]` there:

- `site` — phone, WhatsApp number, email, address, domain, opening hours
- `pricing` — the three membership tiers (currently in LKR)
- `coach` — bio and certifications
- `testimonials` — swap for real member reviews
- `timetable` — the weekly class grid
- `faqs`, `programs`, `facilities`, `stats`

The head coach's name (`P.B. Vithana`) came from the gym's Facebook page; the
Facebook URL itself is already wired into the navbar footer and about page.

### Photos

There are no images yet. Every photo slot renders a dark gradient placeholder
via the `.photo-ph` class (defined in `app/globals.css`). To add real photos,
drop them in `public/` and replace the placeholder `<div>` with `next/image`:

```tsx
<Image src="/coach.jpg" alt="Coach P.B. Vithana" fill className="object-cover" />
```

The slots are in `components/CoachSection.tsx`, `components/Gallery.tsx`,
`app/page.tsx`, `app/programs/page.tsx` and `app/contact/page.tsx` (map embed).

### Contact form

`components/ContactForm.tsx` has no backend — it opens WhatsApp with the
message pre-filled. Swap in Formspree, Resend or a route handler if you'd
rather collect submissions by email.

## Design system

Colours are defined as Tailwind theme tokens in `app/globals.css`, derived from
the logo: `onyx` (background), `coffee` (panels), `gold` (accent), `beige`
(muted text), `cream` (text), plus `walnut` and `mocha`. Type is **Anton** for
display and **Archivo** for body, loaded via `next/font`.

## Motion

- **Lenis** drives smooth scrolling (`components/SmoothScroll.tsx`), disabled
  when the visitor prefers reduced motion.
- **Reveals** use IntersectionObserver, not ScrollTrigger, so they fire however
  the page was scrolled — including a reload part-way down. They're only hidden
  under `@media (scripting: enabled)`, so content stays visible without JS.
- **GSAP ScrollTrigger** handles the hero parallax, the velocity-reactive
  marquees and the pinned horizontal programs scroller. The scroller uses CSS
  `sticky` rather than ScrollTrigger's pinning so React never loses ownership of
  the DOM; on mobile it falls back to a native swipe carousel.

## SEO

Per-page metadata and Open Graph tags, `Gym` JSON-LD schema (address, hours,
Facebook) in the root layout, plus generated `sitemap.xml` and `robots.txt`.
Update `site.url` in `lib/data.ts` when you have the real domain — the sitemap
and canonical URLs are built from it.
