# Architecture

## Stack

| Layer | Technology | Notes |
|---|---|---|
| Framework | Next.js 14 (App Router) | SSG for all pages; no server-side data fetching needed |
| Language | TypeScript | Strict mode enabled |
| Styling | Tailwind CSS + CSS Modules for complex animations | Tailwind for layout/spacing; raw CSS for orbital animation, gradient blobs |
| Animations | Framer Motion | Typewriter cursor, fade-in-on-scroll, orbital ring rotation |
| Icons | React Icons / SVG sprites | Tech stack badges as inline SVGs or `<img>` assets |
| Assets | Local `/public` directory | All Figma-exported PNGs (avatar, gradient blobs, 3D orbs, project mockups) |
| Deployment | Vercel | Static export via `next export` or standard Vercel Next.js deploy |
| Package manager | pnpm | Lock file committed; do not use npm or yarn |

---

## Project Structure

```
/
├── public/
│   ├── assets/
│   │   ├── me.png               # Memoji avatar
│   │   ├── gradient.png         # Purple radial glow blob
│   │   ├── gradient-1..4.png    # Section-specific glow variants
│   │   ├── skills-orbit.png     # Orbital rings illustration
│   │   ├── icons/               # 3D decorative orbs (lightbulb, dropper)
│   │   └── projects/            # Project mockup screenshots
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout: font, metadata, global styles
│   │   ├── page.tsx             # Home page — assembles all sections
│   │   └── globals.css          # CSS variables, base resets, orbital animation keyframes
│   ├── components/
│   │   ├── layout/
│   │   │   └── Navbar.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── WorkExperience.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── FeaturedProjects.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/
│   │       ├── TypewriterText.tsx
│   │       ├── WorkCard.tsx
│   │       ├── ProjectCard.tsx
│   │       ├── TechBadge.tsx
│   │       └── GradientBlob.tsx
│   ├── data/
│   │   ├── work-experience.ts   # Array of work experience card data
│   │   ├── projects.ts          # Array of featured project data
│   │   └── skills.ts            # Tech stack icon + label array
│   └── lib/
│       └── utils.ts             # cn() helper and any shared utilities
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Key Architectural Decisions

### Static Content via Data Files
All portfolio content (work cards, project cards, skill badges) lives in `/src/data/`. This makes content updates trivial without touching component code. Do not hardcode content inside components.

### CSS Variables for Theming
Define all brand colors as CSS custom properties in `globals.css`:
```css
:root {
  --color-bg:         #0D0B1E;
  --color-bg-card:    #1A1333;
  --color-border:     #2A1F4A;
  --color-purple:     #7C3AED;
  --color-purple-light: #9D5CF6;
  --color-accent:     #C084FC;
  --color-text:       #E2D9F3;
  --color-text-muted: #8B7FB0;
}
```

### Gradient Blobs as Decorative Layers
Use the exported `gradient*.png` assets as absolutely positioned `<img>` tags with `pointer-events-none` and `opacity-*` utility classes behind section content. Do not recreate them in CSS — use the exported assets.

### Orbital Animation
The skills section orbit is a pure CSS `@keyframes rotate` animation applied to concentric ring `<div>` elements at different speeds. The central logo is stationary. Do not use canvas or WebGL.

### No Server Components with Data Fetching
All components are client-safe. Use `"use client"` only where Framer Motion or browser APIs are needed (TypewriterText, scroll animations). Default to React Server Components for static markup.

---

## Invariants (Never Violate)

- No backend, database, or API routes
- No runtime environment variables exposed to the client (no `.env` secrets)
- All images must have explicit `width` and `height` props for Next.js `<Image>` optimization
- The orbital animation must not cause layout shift — use `position: absolute` inside a `relative` container
- `npm run build` must pass with zero TypeScript errors before any feature is considered complete
