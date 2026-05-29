@AGENTS.md

# Portfolio 2026 — Agent Guide

Personal developer portfolio for a UI/UX designer and software engineer. Single-page, dark purple aesthetic, static content, Figma-driven visual fidelity.

**Primary source of truth:** `/context/` — read the relevant file before implementing or changing anything.

---

## Context Files

| File | Purpose |
|---|---|
| `context/01-product-overview.md` | Product purpose, audience, design identity, section overview |
| `context/02-architecture.md` | Stack, folder structure, architectural decisions, invariants |
| `context/03-features.md` | Feature specs (F-01–F-11) with requirements and success criteria |
| `context/04-user-flows.md` | Visitor journeys, scroll order, exit actions |
| `context/05-ui-ux-guidelines.md` | Colors, typography, spacing, animation, accessibility rules |
| `context/specs.md` | **Live progress tracker** — unit backlog, checklist, open questions, changelog |
| `context/ai-workflow-rules.md` | Spec-driven workflow, scoping rules, protected files |
| `context/06-progress-tracker.md` | Stale mirror — prefer `specs.md` |

---

## Current Status

All **11 units complete** (see `context/specs.md`).

| Unit | Feature(s) | Key components |
|---|---|---|
| 1 | Scaffolding | `src/app/`, design tokens, data placeholders |
| 2 | F-01 Navbar | `Navbar.tsx`, `LogoMark.tsx` |
| 3 | F-02 Hero | `Hero.tsx`, `GradientBlob.tsx` |
| 4 | F-03, F-09 About + Typewriter | `About.tsx`, `TypewriterText.tsx` |
| 5 | F-04 Work Experience (superseded) | Was `WorkCard` grid |
| 6 | F-05, F-10 Skills + Orbit | `Skills.tsx`, `SkillsVisual.tsx`, `SkillsOrbit.tsx`, `TechBadge.tsx` |
| 7 | F-06 Featured Projects | `FeaturedProjects.tsx`, `ProjectCard.tsx` |
| 8 | F-07 Contact | `Contact.tsx` |
| 9 | F-08 Scroll animations | `AnimatedSection.tsx` (Framer Motion) |
| 10 | Polish & QA | Responsive, a11y, reduced motion |
| 11 | F-11 Timeline redesign | `TimelineCard.tsx`, `TimelineDot.tsx`, `TimelineEntry.tsx` — **replaces F-04** |

Post-build additions (not in original units): SEO (`src/lib/seo.ts`, `JsonLd.tsx`, `robots.ts`, `sitemap.ts`).

---

## Stack (actual)

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router), React 19 |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 + CSS custom properties in `globals.css` |
| Animations | Framer Motion (scroll fade, timeline), pure CSS (orbital rings, cursor blink) |
| Icons | `react-icons` via `src/lib/skill-icons.tsx` |
| Assets | `/public/assets/` (Figma exports — do not modify) |
| Deploy | Vercel (static SSG) |

Before writing Next.js code, read guides in `node_modules/next/dist/docs/` — this project uses Next 16, which may differ from training data.

---

## Project Structure (current)

```
src/
├── app/
│   ├── layout.tsx          # Root layout, metadata, Navbar, JsonLd
│   ├── page.tsx            # Home — assembles all sections
│   ├── globals.css         # CSS vars, orbital keyframes, reduced-motion
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── layout/Navbar.tsx
│   ├── sections/           # Hero, About, WorkExperience, Skills, FeaturedProjects, Contact
│   ├── seo/JsonLd.tsx
│   └── ui/                 # Shared UI (AnimatedSection, TypewriterText, Timeline*, ProjectCard, etc.)
├── data/                   # All content — hero, about, work-experience, projects, skills, contact, site
└── lib/                    # utils, seo, site-url, skill-icons
public/assets/              # Figma PNGs (Me.png, Gradient.png, icons/, projects/)
```

**Content rule:** All copy and structured content lives in `/src/data/`. Never hardcode strings in components.

**Color rule:** Reference design tokens via Tailwind (`bg-bg`, `text-accent-text`, etc.) or CSS vars. Never hardcode hex in TSX.

---

## Site Sections (scroll order)

1. **Navbar** — fixed glass header; Home, About, Lab (`#` placeholder)
2. **Hero** — avatar, gradient blob, headline with `cover` pill, speech bubble
3. **About** — typewriter roles, company link, bio
4. **Work Experience** — vertical timeline (center spine desktop, left spine mobile)
5. **Skills** — intro copy, arched badge rows, SVG connector lines, CSS orbital animation
6. **Featured Projects** — alternating layout, overlapping description cards
7. **Contact** — CTA, plain-text email, social icons

Section IDs for anchor nav: `#hero`, `#about`, `#work-experience`, `#skills`, `#featured-projects`, `#contact`.

---

## Development Rules

### Spec-driven workflow
1. Read the relevant context file and `context/specs.md` before starting work.
2. Do not invent features outside documented scope.
3. One unit at a time; mark checklist items and update changelog in `specs.md` when complete.
4. `npm run build` and `npm run lint` must pass before marking a unit done.

### Component conventions
- Default to **Server Components**; add `"use client"` only for Framer Motion, browser APIs, or hooks.
- Use `AnimatedSection` for scroll fade-in on sections below Hero (respects `prefers-reduced-motion`).
- Use exported PNG gradient blobs — do not recreate in CSS.
- Orbital rings: pure CSS `@keyframes` — no canvas/WebGL.
- Next `<Image>`: always set `width` and `height`; descriptive `alt` (decorative images use `alt=""` + `aria-hidden`).

### UI fidelity
- No UI libraries (shadcn, MUI, etc.) — Tailwind + custom components only.
- Max content width: `1100px`. Section padding: `py-24`, `px-6` / `lg:px-12`.
- Match Figma layout over generic defaults when they conflict with older context copy.

### Protected files
- `/public/assets/**` — do not rename, resize, or replace Figma exports.
- `globals.css` `:root` token block — add only; do not remove or rename tokens.
- `tailwind.config.ts` — add tokens only; do not remove existing ones.

---

## Invariants (never violate)

- No backend, database, or API routes.
- No auth, CMS, dark/light toggle, or i18n (out of scope).
- No layout shift from animations — orbit/gradient use `position: absolute` inside `relative` containers; typewriter reserves `minWidth`.
- `overflow-x-clip` on page/sections to prevent horizontal scroll.
- Lab nav link stays `#` until OQ-02 is resolved.

---

## Open Questions (unresolved)

| # | Question |
|---|---|
| OQ-01 | Work card "LEARN MORE" links — obsolete after F-11 timeline; ignore unless F-04 revived |
| OQ-02 | Lab nav → real `/lab` route or `#` placeholder? |
| OQ-03 | Contact email → plain text or `mailto:`? |
| OQ-04 | How many projects in `projects.ts` at launch? |
| OQ-05 | Typewriter role strings — how many, which copy? |

Do not guess at ambiguous requirements — add to open questions in `specs.md` or ask the user.

---

## Commands

```bash
npm run dev      # Local dev server (port 3000)
npm run build    # Production build — must pass clean
npm run lint     # ESLint
npm run start    # Serve production build
```

## SEO / Production

Set `NEXT_PUBLIC_SITE_URL=https://yourdomain.com` for correct canonical URLs, Open Graph, and sitemap. SEO config: `src/data/site.ts`, `src/lib/seo.ts`.

---

## When Changing Content

| What | File |
|---|---|
| Hero copy, avatar | `src/data/hero.ts` |
| Bio, roles, company | `src/data/about.ts` |
| Work timeline entries | `src/data/work-experience.ts` |
| Skill badges, orbit config | `src/data/skills.ts` |
| Featured projects | `src/data/projects.ts` |
| Contact, social links | `src/data/contact.ts` |
| Site name, SEO keywords | `src/data/site.ts` |
