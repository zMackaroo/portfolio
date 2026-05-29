# Features

## Feature Index

| #    | Feature                                     | Priority | Status      |
| ---- | ------------------------------------------- | -------- | ----------- |
| F-01 | Navbar                                      | P0       | Not started |
| F-02 | Hero Section                                | P0       | Not started |
| F-03 | About / Bio Section                         | P0       | Not started |
| F-04 | Work Experience Section                     | P0       | Not started |
| F-05 | Skills & Stack Section                      | P0       | Not started |
| F-06 | Featured Projects Section                   | P0       | Not started |
| F-07 | Contact Section                             | P0       | Not started |
| F-08 | Scroll Fade-In Animations                   | P1       | Not started |
| F-09 | Typewriter Cursor Effect                    | P1       | Not started |
| F-10 | Orbital Ring Animation                      | P1       | Not started |
| F-11 | Work Experience Timeline Redesign           | P1       | Not started |
| F-12 | Rocket Journey Scroll (Parallax + Three.js) | P2       | Not started |

---

## F-01 — Navbar

**Description:** Fixed top navigation bar that appears on all pages.

**Requirements:**

- Fixed position, full-width, sits above all content (`z-50`)
- Background: semi-transparent dark purple with subtle backdrop blur
- Left: custom logo mark (the `⊣`-style glyph from the design — use SVG or PNG)
- Right: three text links — `Home`, `About`, `Lab`
- Link style: plain white text, no underline by default; subtle hover state (opacity or color shift to accent purple)
- No hamburger menu required (desktop-first design; tablet breakpoint minimum)

**Success Criteria:**

- Navbar is visible and correctly positioned at top of page on load
- Links are clickable and do not throw errors (Lab can be a `#` placeholder if page doesn't exist yet)

---

## F-02 — Hero Section

**Description:** The opening above-the-fold section combining avatar, tagline, and animated headline.

**Requirements:**

- Full viewport height or tall fixed height (~100vh)
- Deep dark purple background with a radial purple gradient blob centered behind the avatar
- Top-left quadrant: Memoji avatar (`me.png`) overlaid with a speech bubble annotation: `"Hello! I Am Ibrahim Memon"`
- Center-right: large headline split across two lines:
  - Line 1: `"A Designer who"`
  - Line 2 (large, bold, ~64px+): `"Judges a book"`
  - Line 3: `"by its cover..."` — the word `cover` has a rounded pill/badge highlight in purple
- Sub-tagline below: `"Because if the cover does not impress you what else can?"`
- Subtle annotation arrows pointing to the avatar and tagline elements (decorative SVG lines)

**Success Criteria:**

- Avatar and headline render side-by-side on desktop
- Gradient blob is visible behind the avatar as ambient glow
- `cover` word is visually highlighted with a pill outline

---

## F-03 — About / Bio Section

**Description:** Text-based introduction section with typewriter animated role title.

**Requirements:**

- Section heading: `"I'm a [Role].|"` — the role text cycles through values via typewriter animation with a blinking cursor `|`
  - Default displayed value: `"I'm a Software Engineer.|"`
  - Optional: add 1–2 more cycling roles (e.g. `"UI/UX Designer"`, `"Frontend Developer"`)
- Subtitle line: `"Currently, I'm a [Role] at 🔵 [Company]"` — company name is an accent-colored link
- Body paragraph (~3 lines): self-description (self-taught UI/UX designer, 3+ years, meaningful/delightful digital products, equilibrium between user needs and business goals)
- No image in this section — text only, left-aligned, generous padding

**Success Criteria:**

- Typewriter animation loops correctly without layout shift
- Body text is readable with correct line-height and muted text color

---

## F-04 — Work Experience Section

**Description:** A 2×2 grid of work/client cards.

**Requirements:**

- Section heading: `"Work Experience"` left-aligned
- Grid: 2 columns × 2 rows on desktop; 1 column on mobile
- Each card (`WorkCard`):
  - Dark purple card background with rounded corners and subtle border (`--color-border`)
  - Left: 3D icon/illustration (distinct per card — use gradient orb assets or placeholder)
  - Right: card title (`"CIB on the Mobile"`), short description (1–2 lines), `"LEARN MORE"` CTA button in accent purple
  - Hover: subtle scale-up or border glow effect
- Card data sourced from `/src/data/work-experience.ts`

**Success Criteria:**

- 4 cards render in a 2×2 grid on desktop
- Each card renders its icon, title, description, and CTA
- Grid collapses to 1 column on screens < 768px

---

## F-05 — Skills & Stack Section

**Description:** Centered skill showcase with tech icon badges and an animated orbital ring illustration.

**Requirements:**

- Centered intro copy: `"I'm currently looking to join a cross-functional team"` — `cross-functional` is styled in accent purple
- Subtitle: `"that values improving people's lives through accessible design"`
- Two rows of tech badge icons below the copy (sourced from `/src/data/skills.ts`):
  - Row 1: Figma, React, C, Node.js, OpenAI, JavaScript, CSS3
  - Row 2: Adobe XD, Next.js, Gatsby, Illustrator, Express, MongoDB
  - Each badge: circular icon (40–48px), displayed in a flex row with spacing
- Below badges: the orbital animation — concentric elliptical rings rotating at different speeds around a centered logo mark
  - 3 rings at different radii and tilt angles
  - Small tech/social icons orbiting on the ring paths (LinkedIn, GitHub, JS, React, XD, Ai, CSS, etc.)
  - Central element: logo mark on a glowing purple radial disc

**Success Criteria:**

- All 13 tech badges render with correct icons
- Orbital rings animate continuously without jank
- Section is vertically centered and responsive

---

## F-06 — Featured Projects Section

**Description:** Alternating left/right featured project cards with mockup screenshots.

**Requirements:**

- No section heading — projects are introduced inline with a `"Featured Project"` label above each
- Layout alternates per project:
  - **Odd projects (1, 3…):** description block left, mockup screenshot right
  - **Even projects (2, 4…):** mockup screenshot left, description block right
- Each project block (`ProjectCard`):
  - `"Featured Project"` label (small, accent purple, uppercase)
  - Project name (large, white, bold — e.g. `"Example Project"`)
  - Description paragraph (dark card background with rounded corners, positioned overlapping the mockup)
  - Two icon links: GitHub (`*`) and External link (`*`) — use star/asterisk-style icons as in the design
- Mockup: browser-frame screenshot (use project screenshot assets from `/public/assets/projects/`)
- Project data sourced from `/src/data/projects.ts`

**Success Criteria:**

- Two featured projects render with correct alternating layout
- Description cards overlap mockup screenshots as per design
- Icon links are clickable

---

## F-07 — Contact Section

**Description:** Minimal footer-area contact block.

**Requirements:**

- Section heading: `"Contact"` left-aligned
- Intro copy: `"I'm currently looking to join a cross-functional team that values improving people's lives through accessible design, or have a project in mind? Let's connect."`
- Email address displayed as plain text (not a mailto link unless specified)
- Three social icon links in a horizontal row: Instagram, GitHub (globe icon), Google
- No full footer — this is the last section before page end
- Light separator or sufficient padding above to visually close the page

**Success Criteria:**

- Contact section is visible at the bottom of the page
- Email and social icons render correctly
- Social icon links open in a new tab

---

## F-08 — Scroll Fade-In Animations

**Description:** Sections animate in as the user scrolls down.

**Requirements:**

- Each section fades up from `translateY(20px)` + `opacity: 0` to resting position when it enters the viewport
- Use Framer Motion `whileInView` with `once: true`
- Animation duration: 0.6s ease-out
- Do not animate the Navbar

**Success Criteria:**

- All sections below the Hero animate in on scroll
- Animation only triggers once per element

---

## F-09 — Typewriter Cursor Effect

**Description:** The role title in the About section animates as if being typed.

**Requirements:**

- Component: `TypewriterText` — accepts an array of strings to cycle through
- Each string types out character by character, pauses, then deletes and types the next
- Blinking cursor `|` appended to the current text at all times
- Typing speed: ~80ms per character; delete speed: ~40ms; pause at full word: 2000ms

**Success Criteria:**

- Text cycles through at least 2 strings without stopping
- Cursor blinks at a natural rate (~500ms interval)
- No layout shift as text length changes (use a `min-width` or fixed container)

---

## F-10 — Orbital Ring Animation

**Description:** CSS animation of concentric elliptical rings in the Skills section.

**Requirements:**

- Three `<div>` ring elements styled as ellipses using `border-radius: 50%` + `border` in muted purple
- Rings have different sizes, tilt angles (`transform: rotate` + `rotateX`), and animation durations (e.g. 8s, 12s, 16s)
- Rotation uses `@keyframes` `transform: rotate(360deg)` applied to a wrapper
- Small icon badges are placed at fixed points along the ring paths
- The center logo element does NOT rotate

**Success Criteria:**

- All three rings rotate smoothly and independently
- No performance issues (use `will-change: transform` on ring wrappers)
- Animation is pure CSS — no JavaScript timers

---

## F-11 — Work Experience Timeline Redesign

**Description:** Replaces the original 2×2 card grid (F-04) with a vertical timeline layout. Work experience is inherently chronological, so a timeline communicates career progression more clearly than a grid. This is a redesign of the `WorkExperience` section only — no other sections are affected.

**Replaces:** F-04 (the 2×2 `WorkCard` grid). Once Unit 11 is complete, F-04 is considered superseded.

---

### Layout

- **Desktop (≥ 1024px):** Center-spine timeline. A vertical line runs down the middle of the section. Entries alternate left and right of the spine — odd entries (1, 3…) pin their card to the left, even entries (2, 4…) pin to the right. A connector dot sits on the spine at the vertical midpoint of each card.

- **Tablet (640–1023px):** Left-spine timeline. The vertical line is flush left. All cards are right-aligned relative to the spine. Connector dots on the spine.

- **Mobile (< 640px):** Same as tablet — left-spine, single column. Cards take full available width.

---

### Spine & Connector

- **Spine:** A `2px` vertical line centered on desktop, left-offset on tablet/mobile
  - Color: `linear-gradient(to bottom, transparent, var(--color-purple), var(--color-purple-light), transparent)`
  - The gradient fades in at the top and out at the bottom so the line doesn't look hard-cut
- **Connector dot:** A `12px` circle on the spine at the vertical center of each card
  - Outer ring: `border-2 border-[--color-purple]`
  - Inner fill: `bg-[--color-bg]` (hollow center) or `bg-[--color-purple]` (filled) — filled preferred
  - On scroll-in: dot "pulses" once with a short scale animation (`scale(1) → scale(1.5) → scale(1)`) via Framer Motion when the entry enters the viewport
- **Connector arm:** A `1px` horizontal line from the spine dot to the card edge
  - Color: `var(--color-border)`
  - Width: `32px` on desktop; `24px` on tablet/mobile

---

### Timeline Entry Card (`TimelineCard`)

Each entry in `work-experience.ts` renders as one `TimelineCard`. The card contains:

**Header row (top of card):**

- Company logo or 3D icon (left of header) — same assets from Figma export
- Company / project name (bold, `~18px`, `--color-white`)
- Role title (below name, `~14px`, `--color-text-muted`)

**Date badge:**

- Displayed above or beside the card (not inside it) — floats near the connector arm
- Format: `"Jan 2022 – Mar 2023"` or `"2022 – Present"`
- Style: small pill — `bg-[--color-bg-card] border border-[--color-border] text-[--color-text-muted] text-xs px-3 py-1 rounded-full`
- On desktop: date badge is on the **opposite side** of the card (i.e. if the card is on the left, the date badge floats right of the spine)
- On mobile: date badge sits above the card

**Body:**

- Short description paragraph (2–3 lines, `--color-text-muted`, `14px`)
- Bullet list of 2–4 key contributions or achievements (optional — include if the data entry has a `bullets` array)
  - Bullet style: small accent-purple dot (`·`) or chevron (`›`) — not default list disc

**Footer (optional):**

- Tech tags: small rounded pill tags for technologies used (e.g. `React`, `Figma`, `Node.js`)
  - Style: `bg-[--color-purple]/10 text-[--color-accent-text] text-xs px-2 py-0.5 rounded-full border border-[--color-purple]/20`
  - Sourced from a `tags` array in the data entry

**Card container:**

- `bg-[--color-bg-card] border border-[--color-border] rounded-2xl p-6`
- Max width: `480px` on desktop (each side); `100%` on mobile
- Hover: `hover:border-[--color-purple]/50` + subtle `box-shadow: 0 0 30px rgba(124,58,237,0.1)`

---

### Scroll Animation

Each timeline entry animates in when it enters the viewport:

- **Card:** slides in from its natural side — left cards from `x: -30`, right cards from `x: 30` — plus `opacity: 0 → 1`
- **Connector dot:** scales in (`scale: 0 → 1`) with a slight delay after the card starts appearing
- **Date badge:** fades in (`opacity: 0 → 1`) simultaneously with the card
- All animations use Framer Motion `whileInView` with `once: true`, `duration: 0.5`, `ease: 'easeOut'`

---

### Data Schema Update

Update `/src/data/work-experience.ts` to use the new shape:

```ts
export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  startDate: string; // e.g. "Jan 2022"
  endDate: string; // e.g. "Mar 2023" or "Present"
  description: string;
  bullets?: string[]; // optional key achievements
  tags?: string[]; // optional tech tags
  icon: string; // path to icon asset in /public/assets/
}
```

Populate with the following **confirmed entries** from Sydney D. Enciso's resume:

```ts
export const workExperience: WorkExperience[] = [
  {
    id: "snsoft",
    company: "SNSoft Technology Inc.",
    role: "Sr. Front-End Developer",
    startDate: "Dec 2025",
    endDate: "Present",
    description:
      "Leading platform development, a shared component library with Storybook, and a React Native HRIS mobile app.",
    bullets: [
      "Built a customizable shared library used across multiple repos with version control and Storybook docs",
      "Led end-to-end development of a digital marketing platform for an international client",
      "Developed React Native HRIS app for internal employee management and request workflows",
      "Managed CI/CD pipelines via Jenkins and coordinated sprint planning and product demos",
    ],
    tags: [
      "React",
      "TypeScript",
      "React Native",
      "Storybook",
      "Jenkins",
      "Next.js",
    ],
    icon: "/assets/icons/snsoft.png",
  },
  {
    id: "samsung",
    company: "Samsung R&D Institute Philippines",
    role: "Software Engineer",
    startDate: "Jul 2023",
    endDate: "Nov 2024",
    description:
      "Contributed to Samsung Knox enterprise solutions and S24 AI features alongside teams in Korea and Canada.",
    bullets: [
      "Developed Knox Configure and Knox Mobile Enrollment using React.js for global enterprise customers",
      "Contributed to Samsung S24 AI feature implementation as part of the core engineering team",
      "Led and mentored junior developers on the Samsung Seats project with code reviews and guidance",
      "Collaborated with Samsung Korea HQ and Canadian counterparts on cross-regional API integrations",
    ],
    tags: ["React.js", "TypeScript", "Agile", "Knox", "Enterprise"],
    icon: "/assets/icons/samsung.png",
  },
  {
    id: "singlife",
    company: "Collabera Digital — Singlife Philippines",
    role: "Front-End Developer",
    startDate: "Aug 2022",
    endDate: "Jun 2023",
    description:
      "Shipped micro-frontend insurance products across GCash, UnionBank, Maya, Globe, and Singlife platforms.",
    bullets: [
      "Developed Cash for Medical Cost, Cash for Income Loss, Cash for Goals, and 100-in-1 Medical Plan",
      "Led development of Singlife One Platform and mobile application from the ground up",
      "Streamlined eKYC onboarding via Onfido integration, React Hook Form, and Redux Toolkit",
    ],
    tags: [
      "React.js",
      "Next.js",
      "React Native",
      "Redux Toolkit",
      "TypeScript",
      "Expo",
    ],
    icon: "/assets/icons/singlife.png",
  },
  {
    id: "chenvel",
    company: "Chenvel Services Inc.",
    role: "Full-Stack Developer",
    startDate: "Feb 2021",
    endDate: "Aug 2022",
    description:
      "Built a comprehensive ERP system supporting end-to-end business operations and internal process automation.",
    bullets: [
      "Designed Payroll, Inventory & Tracking, Roaming, Trucking, and Warehouse modules",
      "Built an auto-generation platform for creating business systems without coding",
    ],
    tags: ["React", "Node.js", "MySQL", "Express.js", "Full-Stack"],
    icon: "/assets/icons/chenvel.png",
  },
];
```

---

### Component Structure

```
src/components/sections/WorkExperience.tsx   ← section shell, renders the spine + list of entries
src/components/ui/TimelineCard.tsx           ← individual entry card
src/components/ui/TimelineDot.tsx            ← spine connector dot + arm
```

The `WorkCard` component from F-04 is no longer used after this unit. It can be deleted or left as a dead file — do not modify other sections.

---

### Success Criteria

- [ ] Vertical spine renders correctly on desktop (centered) and mobile (left-aligned)
- [ ] At least 3 timeline entries render with correct left/right alternation on desktop
- [ ] Each entry has: company name, role, date badge, description, and at least one optional section (bullets or tags)
- [ ] Connector dot pulse animation fires once per entry on scroll-in
- [ ] Card slide-in animation fires from the correct direction (left cards from left, right cards from right)
- [ ] Date badges are on the opposite side of the card on desktop
- [ ] Layout is correct at 375px, 768px, and 1280px viewport widths
- [ ] `npm run build` passes with zero TypeScript errors

---

## F-12 — Rocket Journey Scroll (Parallax + Three.js)

**Description:** A full-page immersive scroll experience placed **between the Hero and the About section**. As the visitor scrolls, a 3D rocket travels upward through space — past stars, nebula clouds, and floating milestone markers — narrating the owner's story as a journey. The rocket is the metaphor: ambition, trajectory, and destination. This is a purely decorative/narrative section; it contains no interactive forms or data.

**Placement in page order:**

```
#hero → [NEW] #journey → #about → #work-experience → ...
```

The Navbar smooth-scroll link for `"Home"` still goes to `#hero`. No new Navbar link is added for `#journey` — it is a scroll-through experience, not a destination.

---

### Concept & Narrative

The section is a **tall scroll container** (`600vh` height) that pins a Three.js canvas to the viewport while the user scrolls through it. As scroll progress goes from `0%` to `100%`:

- A **3D rocket** launches from the bottom of the canvas and flies upward toward the top
- The **star field** parallaxes — closer stars move faster than distant ones (depth layers)
- **Nebula / dust clouds** drift in the background at slow parallax speed
- **Milestone cards** float in from the sides at specific scroll waypoints, each narrating a chapter of the owner's story (e.g. "Started designing at 16", "First freelance client", "Joined Facebook")
- The rocket subtly **tilts and sways** (oscillating rotation on Z-axis) as it ascends, giving it life
- At `100%` scroll progress, the rocket exits the top of the canvas into a burst of light — the section ends and the About section begins

---

### Technical Architecture

#### Library

- **Three.js** — imported via `npm install three @types/three`
- **GSAP ScrollTrigger** — `npm install gsap` — used to drive scroll-linked animation progress. ScrollTrigger pins the canvas section and maps scroll position to a `0–1` progress value
- Do **not** use `@react-three/fiber` or `@react-three/drei` — use vanilla Three.js in a `useEffect` hook to keep the bundle lean and avoid RSC conflicts

#### Component

```
src/components/sections/RocketJourney.tsx   ← section shell + canvas mount
src/components/three/RocketScene.ts         ← all Three.js scene logic (class or module)
src/data/journey-milestones.ts              ← milestone data array
```

`RocketJourney.tsx` is a `"use client"` component. It mounts a `<canvas>` ref and instantiates `RocketScene` inside a `useEffect`. On unmount it calls `scene.destroy()` to dispose of all Three.js objects and remove the ScrollTrigger instance — no memory leaks.

#### Canvas

- Fills `100vw × 100vh`, `position: fixed` while pinned by ScrollTrigger
- `z-index: 10` — above the dark background but below the Navbar (`z-50`)
- Background: Three.js scene background color set to `0x0D0B1E` (matches `--color-bg`) — no CSS background needed on the canvas itself
- `renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))` — cap at 2× for performance

---

### Three.js Scene Breakdown

#### Camera

- `PerspectiveCamera`, `fov: 60`, positioned at `(0, 0, 10)`
- Camera does **not** move — the rocket and environment move relative to the camera
- On window resize: update `camera.aspect` and `renderer.setSize`

#### Rocket Model

- **Do not load a GLTF/GLB file** — construct the rocket from Three.js primitives to avoid asset dependencies:
  - **Body:** `CylinderGeometry(0.3, 0.5, 2.5, 16)` — tapered white/silver cylinder
  - **Nose cone:** `ConeGeometry(0.3, 1, 16)` — sits on top of body
  - **Fins (×3):** `BoxGeometry(0.05, 0.6, 0.4)` — positioned at the base, rotated 120° apart
  - **Engine glow:** `PointLight` in orange/yellow at the bottom of the rocket; flickers via a sine wave on `intensity` each frame
  - **Exhaust particles:** A `Points` object — 200 small particles spawning at the rocket's base, drifting downward and fading out. Use a custom `ShaderMaterial` or `PointsMaterial` with `vertexColors: true`
- All rocket parts grouped into a single `THREE.Group` (`rocketGroup`)
- Material: `MeshStandardMaterial`, color `0xE2D9F3` (matches `--color-text`), slight `metalness: 0.4`, `roughness: 0.6`

#### Star Field

- Three layers of `Points` objects to create depth parallax:
  - **Layer 1 (far):** 2000 stars, small size (`0.5`), moves at `0.1×` scroll speed
  - **Layer 2 (mid):** 800 stars, medium size (`1.0`), moves at `0.3×` scroll speed
  - **Layer 3 (near):** 200 stars, larger size (`2.0`), moves at `0.7×` scroll speed
- Stars distributed randomly across a `[-20, 20]` X range and `[-30, 80]` Y range
- Color: white to faint blue-purple tint (`0xC084FC` at low opacity) — matches `--color-accent`

#### Nebula Clouds

- 5–8 `Sprite` objects using a soft radial gradient texture (generate programmatically via `Canvas2D` — draw a radial gradient to an offscreen canvas, use as `CanvasTexture`)
- Colors: deep purple (`0x7C3AED`) and indigo (`0x4F46E5`) at `opacity: 0.15–0.3`
- Sizes: `8–20` units wide
- Distributed across the Y travel range
- Move at `0.05×` scroll speed (barely drift — create depth)

#### Ambient Lighting

- `AmbientLight` — color `0x9D5CF6` (soft purple), `intensity: 0.4`
- `DirectionalLight` — color `0xffffff`, `intensity: 0.8`, position `(5, 10, 5)`
- Engine `PointLight` — color `0xFF6B35` (orange), `intensity: 1.5`, flickers each frame

---

### Scroll-Driven Animation (GSAP ScrollTrigger)

```ts
ScrollTrigger.create({
  trigger: "#journey",
  start: "top top",
  end: "bottom bottom",
  pin: ".journey-canvas-wrapper",
  scrub: 1, // smooth 1s lag behind scroll
  onUpdate: (self) => {
    scene.setProgress(self.progress); // 0 → 1
  },
});
```

#### `setProgress(p: number)` mapping

| Progress range | What happens                                                                                                                                            |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `0.00 – 0.05`  | Rocket is at bottom of canvas, engine ignites (light flickers on, exhaust particles spawn)                                                              |
| `0.05 – 0.85`  | Rocket ascends — Y position maps from `-4` to `+6` (world units). Subtle Z-rotation sway: `Math.sin(p * Math.PI * 6) * 0.08`                            |
| `0.85 – 1.00`  | Rocket accelerates (scale slightly increases: `1.0 → 1.15`), engine glow intensifies, screen-space bloom-like effect (engine light intensity `1.5 → 6`) |
| `1.00`         | Rocket exits top, engine light pops to maximum, section ends                                                                                            |

Star layers and nebula translate on Y axis proportional to their parallax multiplier:

```ts
starLayer1.position.y = -progress * 10 * 0.1;
starLayer2.position.y = -progress * 10 * 0.3;
starLayer3.position.y = -progress * 10 * 0.7;
nebulaClouds.forEach((n) => (n.position.y -= progress * 10 * 0.05));
```

---

### Milestone Cards

Milestone cards are **HTML elements** (not Three.js objects) — they live in the DOM overlaid on the canvas using `position: absolute` inside the pinned wrapper. This avoids the complexity of rendering text in WebGL.

**Data schema** (`/src/data/journey-milestones.ts`):

```ts
export interface JourneyMilestone {
  id: string;
  progress: number; // 0–1 scroll progress at which this card appears
  side: "left" | "right";
  year: string; // e.g. "2018"
  label: string; // short title, e.g. "First Design Tool"
  description: string; // 1-line detail
}
```

**Confirmed milestones** (sourced from Sydney D. Enciso's resume — 6 entries):

```ts
[
  {
    id: "m1",
    progress: 0.1,
    side: "left",
    year: "2017",
    label: "The Beginning",
    description:
      "Graduated BS Information Technology from Divine Word College of Calapan.",
  },
  {
    id: "m2",
    progress: 0.25,
    side: "right",
    year: "2021",
    label: "First Full-Stack Role",
    description:
      "Joined Chenvel Services — built an ERP, payroll, inventory, and trucking system from scratch.",
  },
  {
    id: "m3",
    progress: 0.45,
    side: "left",
    year: "2022",
    label: "FinTech & Scale",
    description:
      "Shipped micro-frontend insurance products for GCash, UnionBank, Maya, and Globe at Singlife PH.",
  },
  {
    id: "m4",
    progress: 0.63,
    side: "right",
    year: "2023",
    label: "Samsung R&D",
    description:
      "Contributed to Knox enterprise tools and S24 AI features alongside teams in Korea and Canada.",
  },
  {
    id: "m5",
    progress: 0.8,
    side: "left",
    year: "2025",
    label: "Senior Engineer",
    description:
      "Leading platform dev, a shared component library, and a React Native HRIS app at SNSoft.",
  },
  {
    id: "m6",
    progress: 0.93,
    side: "right",
    year: "Now",
    label: "7+ Years & Counting",
    description:
      "Full-stack, cross-platform, and always shipping. Open to the next big challenge.",
  },
];
```

**Card visibility logic:**

- Each card is `opacity: 0 / translateX(±40px)` by default
- When scroll progress passes the card's `progress` threshold, transition to `opacity: 1 / translateX(0)` — CSS transition `0.5s ease-out`
- Card stays visible after it appears (no fade-out)
- Driven by the `onUpdate` callback — compare `self.progress` against each milestone's `progress` value

**Card styling** (consistent with design system):

```
bg-[--color-bg-card]/80 backdrop-blur-sm
border border-[--color-border]
rounded-xl px-5 py-4
max-w-[220px]
absolute left-[8%] or right-[8%]
top: calculated per card (distribute evenly across 100vh)
```

Year label: `text-[--color-accent-text] text-xs font-semibold uppercase tracking-widest`
Card title: `text-[--color-text] text-sm font-semibold`
Description: `text-[--color-text-muted] text-xs`

---

### Reduced Motion

Respect `prefers-reduced-motion`:

```ts
const prefersReduced = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;
if (prefersReduced) {
  // Skip scroll animation entirely — show a static rocket centered in the section
  // Still render the Three.js scene but freeze it at progress 0.5
  // Milestone cards all visible immediately
}
```

---

### Performance Constraints

- Cap `devicePixelRatio` at `2` — `renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))`
- Use `renderer.setAnimationLoop(null)` and call `renderer.render(scene, camera)` manually inside the GSAP ScrollTrigger `onUpdate` — only re-render when scroll changes, not every frame at 60fps when the user isn't scrolling
- Exception: the exhaust particle animation still needs per-frame updates — use a separate `requestAnimationFrame` loop for particle-only updates and call `renderer.render` from there
- Dispose all geometries, materials, and textures in `scene.destroy()`
- Total Three.js geometry count should stay under 30 objects

---

### Mobile Behavior

On screens `< 768px`:

- Reduce star count: Layer 1 → 800, Layer 2 → 300, Layer 3 → 80
- Milestone cards: stack above/below center line rather than left/right — all cards appear centered with `max-width: 80vw`
- Rocket scale reduced by `0.7×`
- Section height reduced to `400vh` (shorter scroll distance)

---

### Success Criteria

- [ ] `#journey` section is placed between `#hero` and `#about` in `page.tsx`
- [ ] Three.js canvas fills the viewport and is correctly pinned during scroll
- [ ] Rocket is visible and constructed from Three.js primitives (no external 3D file)
- [ ] Rocket ascends smoothly from bottom to top as user scrolls through the section
- [ ] Rocket Z-rotation sway is visible during ascent
- [ ] Engine glow (PointLight) flickers and intensifies at scroll end
- [ ] Exhaust particles emit from rocket base and drift downward
- [ ] Three star layers are visible and parallax at different rates (far slower, near faster)
- [ ] At least 2 nebula sprites are visible in the background
- [ ] All 5 milestone cards appear at their correct scroll waypoints from the correct side
- [ ] Milestone cards use the correct design system colors and typography
- [ ] `prefers-reduced-motion` is respected — scene freezes, all cards shown immediately
- [ ] On mobile (`< 768px`): star count reduced, rocket scaled down, section is `400vh`
- [ ] Three.js scene is fully disposed on component unmount (no memory leaks)
- [ ] `npm run build` passes with zero TypeScript errors
- [ ] No layout shift or scroll jank on desktop Chrome at 60fps
