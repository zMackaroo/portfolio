# Progress Tracker

## Project Status: 🟡 Not Started

Last updated: —

---

## Completed Units

_None yet._

---

## In Progress

_None yet._

---

## Backlog (Implementation Order)

Work through these units in order. Do not begin a unit until the previous one passes its success criteria and `npm run build` is green.

### Unit 1 — Project Scaffolding

- [ ] Initialize Next.js 14 project with TypeScript and Tailwind CSS (App Router)
- [ ] Configure `tailwind.config.ts` with custom colors mapped to CSS vars
- [ ] Add CSS custom properties to `globals.css`
- [ ] Set up `next/font` with Inter or DM Sans
- [ ] Create `/src/data/` directory with placeholder files: `work-experience.ts`, `projects.ts`, `skills.ts`
- [ ] Copy all Figma-exported assets into `/public/assets/`
- [ ] Verify `npm run build` passes on empty scaffold

**Success criteria:** `npm run dev` loads a blank dark-background page with no errors.

---

### Unit 2 — Navbar (F-01)

- [ ] Create `src/components/layout/Navbar.tsx`
- [ ] Implement fixed positioning with glass blur effect
- [ ] Add logo mark (SVG or PNG)
- [ ] Add nav links: Home, About, Lab
- [ ] Verify smooth scroll behavior on anchor links

**Success criteria:** Navbar is visible, fixed, and links scroll to correct sections (even if sections are empty divs).

---

### Unit 3 — Hero Section (F-02)

- [ ] Create `src/components/sections/Hero.tsx`
- [ ] Implement layout with avatar image and headline
- [ ] Add gradient blob behind avatar
- [ ] Style the `cover` pill highlight
- [ ] Add speech bubble annotation
- [ ] Wire up section ID `#hero`

**Success criteria:** Hero renders at full viewport height with avatar, headline, and gradient blob. `cover` is visually highlighted.

---

### Unit 4 — About / Bio + Typewriter (F-03, F-09)

- [ ] Create `src/components/sections/About.tsx`
- [ ] Build `TypewriterText` component with cycling strings and blinking cursor
- [ ] Populate bio text and company callout
- [ ] Wire up section ID `#about`

**Success criteria:** Typewriter cycles through at least 2 role strings. Bio text is readable. No layout shift.

---

### Unit 5 — Work Experience Section (F-04)

- [ ] Create `src/components/sections/WorkExperience.tsx`
- [ ] Build `WorkCard` component
- [ ] Populate `work-experience.ts` data file with 4 entries
- [ ] Implement 2×2 responsive grid
- [ ] Wire up section ID `#work-experience`

**Success criteria:** 4 cards render in correct grid. Cards are styled with border, icon, title, description, and CTA.

---

### Unit 6 — Skills & Stack + Orbital Animation (F-05, F-10)

- [ ] Create `src/components/sections/Skills.tsx`
- [ ] Build `TechBadge` component
- [ ] Populate `skills.ts` with 13 tech entries
- [ ] Implement two-row badge layout
- [ ] Build orbital ring animation in CSS
- [ ] Wire up section ID `#skills`

**Success criteria:** All 13 badges render. Three rings animate at different speeds. Animation is smooth (no jank).

---

### Unit 7 — Featured Projects Section (F-06)

- [ ] Create `src/components/sections/FeaturedProjects.tsx`
- [ ] Build `ProjectCard` component with alternating layout logic
- [ ] Populate `projects.ts` with at least 2 entries
- [ ] Implement overlapping description card over mockup screenshot
- [ ] Wire up section ID `#featured-projects`

**Success criteria:** 2 projects render with correct alternating layout. Description card visually overlaps mockup. Icon links are clickable.

---

### Unit 8 — Contact Section (F-07)

- [ ] Create `src/components/sections/Contact.tsx`
- [ ] Add heading, CTA paragraph, email display, and social icon links
- [ ] Wire up section ID `#contact`
- [ ] Ensure social links open in new tab

**Success criteria:** Contact section renders at bottom of page. All links functional.

---

### Unit 9 — Scroll Animations (F-08)

- [ ] Install `framer-motion`
- [ ] Wrap each section in a `motion.section` with fade-up animation
- [ ] Verify `once: true` behavior — animations don't replay on scroll-up

**Success criteria:** All sections below Hero animate in on first scroll into view.

---

### Unit 10 — Polish & Responsive QA

- [ ] Test on mobile (375px), tablet (768px), desktop (1280px)
- [ ] Verify all images have `alt` attributes
- [ ] Check keyboard navigation (Tab through nav links and CTAs)
- [ ] Verify `npm run build` passes with zero TypeScript errors
- [ ] Check for layout shifts (CLS) using Chrome DevTools

**Success criteria:** Zero build errors. Page is usable on all three breakpoints.

---

## Open Questions

| #     | Question                                                                            | Context | Status     |
| ----- | ----------------------------------------------------------------------------------- | ------- | ---------- |
| OQ-01 | Should "LEARN MORE" on WorkCards link to external case studies or internal pages?   | F-04    | Unanswered |
| OQ-02 | Should the Lab nav link go to a real `/lab` route or remain a `#` placeholder?      | F-01    | Unanswered |
| OQ-03 | Should the email in the Contact section be a `mailto:` link?                        | F-07    | Unanswered |
| OQ-04 | How many project entries should be in `projects.ts` at launch?                      | F-06    | Unanswered |
| OQ-05 | Should the typewriter cycle through more than 2 role strings? If so, what are they? | F-09    | Unanswered |

---

## Known Issues

_None yet._

---

## Changelog

| Date | Unit | Description             |
| ---- | ---- | ----------------------- |
| —    | —    | Project not yet started |

---

### Unit 12 — Rocket Journey Scroll (F-12)

> **Scope:** New section only. Does not modify any existing section. Inserts `#journey` between `#hero` and `#about` in `page.tsx`. Split into two sub-steps if needed: (A) Three.js scene + scroll pinning, (B) milestone card overlay system.

#### Step A — Three.js Scene & Scroll Pin

- [ ] Install dependencies: `npm install three @types/three gsap`
- [ ] Create `src/data/journey-milestones.ts` with the `JourneyMilestone` interface and **6 confirmed entries** (see `journey-milestones.scaffold.ts`)
- [ ] Create `src/components/three/RocketScene.ts` — pure Three.js module (no React); exports a class with `constructor(canvas: HTMLCanvasElement)`, `setProgress(p: number)`, and `destroy()`
- [ ] Implement renderer: `WebGLRenderer`, antiAlias, pixel ratio capped at 2, background `0x0D0B1E`
- [ ] Implement camera: `PerspectiveCamera(60)` at `(0, 0, 10)`, resize handler
- [ ] Build rocket `Group` from primitives: body cylinder, nose cone, 3 fins, engine `PointLight`
- [ ] Add exhaust particle system: `Points` with `PointsMaterial`, 200 particles, per-frame drift + fade logic
- [ ] Add 3-layer star field: 3 `Points` objects with different sizes and counts
- [ ] Add 5–8 nebula `Sprite` objects using programmatic `CanvasTexture` radial gradient
- [ ] Implement `setProgress(p)`: rocket Y position, Z-rotation sway, engine flicker, star/nebula parallax Y offsets
- [ ] Implement `destroy()`: dispose all geometries, materials, textures; kill animation loop
- [ ] Add `prefers-reduced-motion` check: freeze scene at `p = 0.5` if true

#### Step B — Section Shell, Scroll Pin & Milestone Cards

- [ ] Create `src/components/sections/RocketJourney.tsx` as `"use client"`
- [ ] Mount `<canvas>` ref, instantiate `RocketScene` in `useEffect`, call `destroy()` on unmount
- [ ] Wire GSAP `ScrollTrigger`: pin `.journey-canvas-wrapper`, scrub `1`, call `scene.setProgress(self.progress)` on update
- [ ] Set section height `600vh` desktop / `400vh` mobile via Tailwind responsive class
- [ ] Implement milestone card overlay: absolutely positioned HTML cards inside the pinned wrapper
- [ ] Drive card visibility from `onUpdate` — compare progress to each milestone's threshold, toggle `opacity` + `translateX` CSS transition
- [ ] Style milestone cards per spec: `bg-card/80`, `backdrop-blur-sm`, border, rounded, correct typography tokens
- [ ] Insert `<RocketJourney />` between `<Hero />` and `<About />` in `src/app/page.tsx`
- [ ] Update `#about` smooth-scroll offset in Navbar to account for the new section height (if needed)
- [ ] Verify milestone cards: all 5 appear at correct scroll waypoints from correct side
- [ ] Mobile QA: star count reduced, rocket scaled `0.7×`, cards centered, section `400vh`
- [ ] Verify no memory leaks: mount/unmount component and check Three.js dispose calls in devtools
- [ ] Run `npm run build` — zero TypeScript errors

**Success criteria:** All checklist items complete. Rocket ascends smoothly tied to scroll. Engine glow and exhaust particles are visible. All 5 milestone cards appear at correct waypoints. No scroll jank on desktop Chrome. `prefers-reduced-motion` respected. Build passes clean.

---

## Open Questions

| #     | Question                                                                                    | Context | Status                                                                                                                                                             |
| ----- | ------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| OQ-01 | Should "LEARN MORE" on WorkCards link to external case studies or internal pages?           | F-04    | Superseded by F-11                                                                                                                                                 |
| OQ-02 | Should the Lab nav link go to a real `/lab` route or remain a `#` placeholder?              | F-01    | Unanswered                                                                                                                                                         |
| OQ-03 | Should the email in the Contact section be a `mailto:` link?                                | F-07    | Unanswered                                                                                                                                                         |
| OQ-04 | How many project entries should be in `projects.ts` at launch?                              | F-06    | Unanswered                                                                                                                                                         |
| OQ-05 | Should the typewriter cycle through more than 2 role strings? If so, what are they?         | F-09    | Unanswered                                                                                                                                                         |
| OQ-06 | What are the real work experience entries (company, role, dates, description)?              | F-11    | ✅ Resolved — use Sydney's resume: SNSoft (Dec 2025–Present), Samsung R&D (Jul 2023–Nov 2024), Singlife/Collabera (Aug 2022–Jun 2023), Chenvel (Feb 2021–Aug 2022) |
| OQ-07 | Should timeline entry cards link to external case studies or project pages?                 | F-11    | Unanswered                                                                                                                                                         |
| OQ-08 | Should the timeline show a "Currently here" indicator on the most recent entry?             | F-11    | Unanswered                                                                                                                                                         |
| OQ-09 | What are the real journey milestones (years, labels, descriptions)?                         | F-12    | ✅ Resolved — 6 confirmed milestones in `journey-milestones.scaffold.ts`, sourced from resume                                                                      |
| OQ-10 | Should the rocket section have a heading/label visible to the visitor, or be purely visual? | F-12    | Unanswered                                                                                                                                                         |
| OQ-11 | Should the Navbar gain a scroll-spy "active" link highlight once this section is added?     | F-12    | Unanswered                                                                                                                                                         |

---

## Known Issues

_None yet._

---

## Changelog

| Date       | Unit         | Description                                                                           |
| ---------- | ------------ | ------------------------------------------------------------------------------------- |
| 2026-05-29 | F-12 data    | Replaced placeholder milestones with 6 real entries from Sydney's resume (2017 → Now) |
| 2026-05-29 | F-11 data    | Resolved OQ-06 — real work experience entries confirmed from resume (4 companies)     |
| 2026-05-29 | Unit 12 spec | Added F-12 Rocket Journey Scroll spec and Unit 12 checklist                           |
