# Progress Tracker

## Project Status: 🟢 Unit 12 Complete

Last updated: 2026-05-29

---

## Completed Units

### Unit 1 — Project Scaffolding ✅

### Unit 2 — Navbar (F-01) ✅

### Unit 3 — Hero Section (F-02) ✅

### Unit 4 — About / Bio + Typewriter (F-03, F-09) ✅

### Unit 5 — Work Experience Section (F-04) ✅

### Unit 6 — Skills & Stack + Orbital Animation (F-05, F-10) ✅

### Unit 7 — Featured Projects Section (F-06) ✅

### Unit 8 — Contact Section (F-07) ✅

### Unit 9 — Scroll Animations (F-08) ✅

### Unit 10 — Polish & Responsive QA ✅

### Unit 11 — Work Experience Timeline Redesign (F-11) ✅

### Unit 12 — Rocket Journey Scroll (F-12) ✅

---

## In Progress

_None yet._

---

## Backlog (Implementation Order)

Work through these units in order. Do not begin a unit until the previous one passes its success criteria and `npm run build` is green.

### Unit 1 — Project Scaffolding

- [x] Initialize Next.js 14 project with TypeScript and Tailwind CSS (App Router)
- [x] Configure `tailwind.config.ts` with custom colors mapped to CSS vars
- [x] Add CSS custom properties to `globals.css`
- [x] Set up `next/font` with Inter or DM Sans
- [x] Create `/src/data/` directory with placeholder files: `work-experience.ts`, `projects.ts`, `skills.ts`
- [x] Copy all Figma-exported assets into `/public/assets/`
- [x] Verify `npm run build` passes on empty scaffold

**Success criteria:** `npm run dev` loads a blank dark-background page with no errors.

---

### Unit 2 — Navbar (F-01)

- [x] Create `src/components/layout/Navbar.tsx`
- [x] Implement fixed positioning with glass blur effect
- [x] Add logo mark (SVG or PNG)
- [x] Add nav links: Home, About, Lab
- [x] Verify smooth scroll behavior on anchor links

**Success criteria:** Navbar is visible, fixed, and links scroll to correct sections (even if sections are empty divs).

---

### Unit 3 — Hero Section (F-02)

- [x] Create `src/components/sections/Hero.tsx`
- [x] Implement layout with avatar image and headline
- [x] Add gradient blob behind avatar
- [x] Style the `cover` pill highlight
- [x] Add speech bubble annotation
- [x] Wire up section ID `#hero`

**Success criteria:** Hero renders at full viewport height with avatar, headline, and gradient blob. `cover` is visually highlighted.

---

### Unit 4 — About / Bio + Typewriter (F-03, F-09)

- [x] Create `src/components/sections/About.tsx`
- [x] Build `TypewriterText` component with cycling strings and blinking cursor
- [x] Populate bio text and company callout
- [x] Wire up section ID `#about`

**Success criteria:** Typewriter cycles through at least 2 role strings. Bio text is readable. No layout shift.

---

### Unit 5 — Work Experience Section (F-04)

- [x] Create `src/components/sections/WorkExperience.tsx`
- [x] Build `WorkCard` component
- [x] Populate `work-experience.ts` data file with 4 entries
- [x] Implement 2×2 responsive grid
- [x] Wire up section ID `#work-experience`

**Success criteria:** 4 cards render in correct grid. Cards are styled with border, icon, title, description, and CTA.

---

### Unit 6 — Skills & Stack + Orbital Animation (F-05, F-10)

- [x] Create `src/components/sections/Skills.tsx`
- [x] Build `TechBadge` component
- [x] Populate `skills.ts` with 13 tech entries
- [x] Implement two-row badge layout
- [x] Build orbital ring animation in CSS
- [x] Wire up section ID `#skills`

**Success criteria:** All 13 badges render. Three rings animate at different speeds. Animation is smooth (no jank).

---

### Unit 7 — Featured Projects Section (F-06)

- [x] Create `src/components/sections/FeaturedProjects.tsx`
- [x] Build `ProjectCard` component with alternating layout logic
- [x] Populate `projects.ts` with at least 2 entries
- [x] Implement overlapping description card over mockup screenshot
- [x] Wire up section ID `#featured-projects`

**Success criteria:** 2 projects render with correct alternating layout. Description card visually overlaps mockup. Icon links are clickable.

---

### Unit 8 — Contact Section (F-07)

- [x] Create `src/components/sections/Contact.tsx`
- [x] Add heading, CTA paragraph, email display, and social icon links
- [x] Wire up section ID `#contact`
- [x] Ensure social links open in new tab

**Success criteria:** Contact section renders at bottom of page. All links functional.

---

### Unit 9 — Scroll Animations (F-08)

- [x] Install `framer-motion`
- [x] Wrap each section in a `motion.section` with fade-up animation
- [x] Verify `once: true` behavior — animations don't replay on scroll-up

**Success criteria:** All sections below Hero animate in on first scroll into view.

---

### Unit 10 — Polish & Responsive QA

- [x] Test on mobile (375px), tablet (768px), desktop (1280px)
- [x] Verify all images have `alt` attributes
- [x] Check keyboard navigation (Tab through nav links and CTAs)
- [x] Verify `npm run build` passes with zero TypeScript errors
- [x] Check for layout shifts (CLS) using Chrome DevTools

**Success criteria:** Zero build errors. Page is usable on all three breakpoints.

### Unit 11 — Work Experience Timeline Redesign (F-11)

> **Note:** This unit supersedes Unit 5 (F-04). If Unit 5 was already completed, this unit replaces the `WorkExperience` section and deletes/retires `WorkCard`. Do not run both units simultaneously.

- [x] Update `/src/data/work-experience.ts` to the new `WorkExperience` interface (add `startDate`, `endDate`, `bullets?`, `tags?` fields; remove obsolete fields)
- [x] Populate data file with at least 3 placeholder entries
- [x] Create `src/components/ui/TimelineDot.tsx` — spine dot + horizontal connector arm
- [x] Create `src/components/ui/TimelineCard.tsx` — full entry card (header, date badge, body, footer)
- [x] Rewrite `src/components/sections/WorkExperience.tsx` to render the vertical spine + list of `TimelineCard` entries
- [x] Implement center-spine alternating layout for desktop (≥ 1024px)
- [x] Implement left-spine single-column layout for tablet and mobile
- [x] Add gradient fade to the spine line (top and bottom)
- [x] Add Framer Motion scroll animations: card slide-in from correct direction, dot pulse, date badge fade
- [x] Verify date badge renders on the opposite side of the card on desktop
- [x] Delete or archive `src/components/ui/WorkCard.tsx` (no longer used)
- [x] Run `npm run build` — zero TypeScript errors
      **Success criteria:** All checklist items complete. Timeline renders correctly at 375px, 768px, and 1280px. Animations fire once per entry on scroll-in. Build passes clean.

---

### Unit 12 — Rocket Journey Scroll (F-12)

#### Step A — Three.js Scene

- [x] Install `three @types/three gsap`
- [x] `src/data/journey-milestones.ts` — 6 confirmed entries
- [x] `src/components/three/RocketScene.ts` — class with `constructor`, `setProgress`, `destroy`
- [x] Renderer, camera, resize handler
- [x] Rocket group: body, nose cone, 3 fins, engine PointLight
- [x] Exhaust particle system (200 points)
- [x] 3-layer star field
- [x] 5–8 nebula sprites (CanvasTexture)
- [x] `setProgress(p)`: Y position, sway, flicker, parallax
- [x] `destroy()`: full dispose
- [x] `prefers-reduced-motion` freeze at `p = 0.5`

#### Step B — Section Shell & Milestone Cards

- [x] `src/components/sections/RocketJourney.tsx` — `"use client"`, canvas ref, useEffect
- [x] GSAP ScrollTrigger: pin, scrub `1`, `onUpdate → scene.setProgress`
- [x] Section height `600vh` desktop / `400vh` mobile
- [x] Milestone card overlay: absolute HTML cards, `opacity + translateX` on progress threshold
- [x] Insert `<RocketJourney />` between `<Hero />` and `<About />` in `page.tsx`
- [x] Mobile QA: star count reduced, rocket `0.7×`, cards centered
- [x] Verify no memory leaks on mount/unmount
- [x] `npm run build` passes — zero TypeScript errors

## 8. Open Questions

| #     | Question                                                                     | Context | Status     |
| ----- | ---------------------------------------------------------------------------- | ------- | ---------- |
| OQ-02 | Should the Lab nav link go to a real `/lab` route or remain `#`?             | F-01    | Unanswered |
| OQ-03 | Should the email be a `mailto:` link or plain text?                          | F-07    | Unanswered |
| OQ-04 | How many featured project entries in `projects.ts` at launch? What are they? | F-06    | Unanswered |
| OQ-06 | ✅ Work experience entries confirmed from resume                             | F-11    | Resolved   |
| OQ-07 | Should timeline cards link to external case studies?                         | F-11    | Unanswered |
| OQ-08 | Should the most recent timeline entry show a "Currently here" badge?         | F-11    | Unanswered |
| OQ-09 | ✅ Journey milestones confirmed from resume (6 entries)                      | F-12    | Resolved   |
| OQ-10 | Should the rocket section show a visible heading like "My Journey"?          | F-12    | Unanswered |
| OQ-11 | Should the Navbar add scroll-spy active-link highlighting?                   | F-12    | Unanswered |

---

## Known Issues

_None yet._

---

## Changelog

| Date       | Unit    | Description                                                                                    |
| ---------- | ------- | ---------------------------------------------------------------------------------------------- |
| 2026-05-29 | Unit 12 | Rocket Journey — Three.js scroll scene, GSAP pin, 6 milestone cards between Hero and About       |
| 2026-05-29 | Unit 11 | Work Experience timeline — spine layout, TimelineCard/Dot, scroll animations, retires WorkCard |
| 2026-05-29 | Unit 10 | Polish & QA — responsive skills grid, alt text, a11y, reduced motion, lint fixes               |
| 2026-05-29 | Unit 9  | Scroll animations — framer-motion fade-up on all sections below Hero                           |
| 2026-05-29 | Unit 8  | Contact section — heading, CTA, email, Instagram/GitHub/Google social links                    |
| 2026-05-29 | Unit 7  | Featured Projects — alternating ProjectCard layout, 2 entries, overlapping description cards   |
| 2026-05-29 | Unit 6  | Re-implemented Skills — CSS orbital rings, 13 badges, animated orbit icons                     |
| 2026-05-29 | Unit 5  | Work Experience — 2×2 WorkCard grid with 4 entries                                             |
| 2026-05-29 | Unit 4  | About section — typewriter roles, company callout, bio paragraph                               |
| 2026-05-29 | Unit 3  | Hero — avatar, gradient blob, headline, cover pill, speech bubble                              |
| 2026-05-29 | Unit 2  | Navbar — fixed glass header, logo mark, anchor links with smooth scroll                        |
| 2026-05-29 | Unit 1  | Project scaffolding — src layout, design tokens, data placeholders, dark blank page            |
