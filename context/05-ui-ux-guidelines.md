# UI / UX Guidelines

## Design Philosophy

The portfolio is the product. Every visual decision is intentional — it demonstrates the owner's design sensibility. Do not use generic UI library defaults. Every component should feel crafted, not templated.

---

## Color System

All colors must be referenced via CSS custom properties (defined in `globals.css`). Never hardcode hex values in component files.

| Token | Hex | Usage |
|---|---|---|
| `--color-bg` | `#0D0B1E` | Page background |
| `--color-bg-elevated` | `#130D2E` | Slightly lighter bg for visual depth |
| `--color-bg-card` | `#1A1333` | Card backgrounds |
| `--color-border` | `#2A1F4A` | Card borders, dividers |
| `--color-purple` | `#7C3AED` | Primary accent (buttons, highlights) |
| `--color-purple-light` | `#9D5CF6` | Hover states, secondary accents |
| `--color-accent-text` | `#C084FC` | Highlighted inline text (e.g. `cross-functional`, company name) |
| `--color-text` | `#E2D9F3` | Body text, headings |
| `--color-text-muted` | `#8B7FB0` | Subtitles, secondary labels |
| `--color-white` | `#FFFFFF` | Navbar links, large headings |

---

## Typography

| Role | Size | Weight | Notes |
|---|---|---|---|
| Hero headline | 56–72px | 700–800 | Multi-line, near-white |
| Section heading | 32–40px | 700 | e.g. "Work Experience" |
| Typewriter role | 36–44px | 700 | Includes blinking cursor |
| Card title | 18–20px | 600 | WorkCard, ProjectCard |
| Body / paragraph | 14–16px | 400 | `--color-text-muted` |
| Label / caption | 12px | 500 | "Featured Project" label, CTA text |

- **Font family:** System font stack or a clean geometric sans-serif (e.g. `Inter`, `DM Sans`). Load via `next/font`.
- **Line height:** 1.6 for body text; 1.1–1.2 for large headings.
- **Letter spacing:** Slight tracking (`0.02em`) on uppercase labels.

---

## Spacing & Layout

- **Max content width:** `1100px`, centered with `mx-auto`
- **Section vertical padding:** `py-24` (96px) minimum between sections
- **Horizontal padding:** `px-6` (24px) on mobile; `px-12` (48px) on desktop
- **Card inner padding:** `p-6` (24px)
- **Grid gap (WorkExperience):** `gap-6` (24px)

---

## Component Visual Rules

### Navbar
- `backdrop-blur-md` + `bg-[--color-bg]/80` for glass effect
- `border-b border-[--color-border]` for subtle bottom separator
- Nav links: `text-sm font-medium text-white/70 hover:text-white transition-colors`

### WorkCard
- `rounded-2xl border border-[--color-border] bg-[--color-bg-card]`
- Icon on the left in a small accent-purple glow container
- "LEARN MORE" button: small, outlined or ghost style, accent purple text
- Hover: `hover:border-[--color-purple]/50 hover:scale-[1.02] transition-all`

### Hero — `cover` Pill Highlight
- The word `cover` inside the headline gets a surrounding oval/pill outline
- Implement as a `<span>` with `border border-[--color-purple] rounded-full px-2 py-0.5`

### ProjectCard Description Block
- Floating card that visually overlaps the mockup screenshot
- `bg-[--color-bg-card]/90 backdrop-blur-sm rounded-xl p-6 shadow-xl`
- Positioned with negative margin or absolute offset to create the overlap effect

### Gradient Blobs
- Use the exported PNG assets (`gradient.png`, `gradient-1..4.png`) as `<img>` elements
- Apply: `absolute pointer-events-none select-none opacity-60 blur-[2px]`
- Position behind section content using `z-index` layering

### Tech Badges (Skills)
- 44px circular containers: `w-11 h-11 rounded-full overflow-hidden`
- Displayed in `flex flex-wrap gap-3 justify-center`

---

## Animation Guidelines

### Scroll Fade-In (Framer Motion)
```tsx
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}
// Usage: <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
```

### Typewriter Cursor
- Cursor character: `|`
- Blink: CSS `@keyframes blink { 0%,100% { opacity:1 } 50% { opacity:0 } }` at 0.8s interval

### Orbital Rings
- Pure CSS rotation: `@keyframes orbit { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }`
- Ring 1 (inner): `animation: orbit 8s linear infinite`
- Ring 2 (mid): `animation: orbit 12s linear infinite reverse`
- Ring 3 (outer): `animation: orbit 18s linear infinite`
- Use `will-change: transform` on each ring wrapper

---

## Responsive Breakpoints

| Breakpoint | Width | Behavior |
|---|---|---|
| Mobile | < 640px | Single column; reduced heading sizes; hidden orbital icons |
| Tablet | 640–1024px | 2-column grid for WorkCards; project cards stack |
| Desktop | > 1024px | Full layout as per Figma design |

---

## Accessibility

- All `<img>` elements must have descriptive `alt` attributes
- Color contrast ratio for body text must meet WCAG AA (4.5:1 minimum)
- Interactive elements (links, buttons) must have `:focus-visible` outlines
- The Navbar must be keyboard-navigable
- Do not use color alone to convey information (e.g. do not rely only on purple for "active" state)

---

## Do Not

- Do not use white backgrounds anywhere
- Do not use rounded-full on card components (use `rounded-2xl` or `rounded-xl`)
- Do not use default blue link color — always override with `--color-accent-text` or white
- Do not add drop shadows in a heavy-handed way — prefer `box-shadow: 0 0 40px rgba(124,58,237,0.15)` glow-style shadows
- Do not add page transitions — keep navigation instant
