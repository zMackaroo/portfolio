# AI Workflow Rules — Portfolio Website

## Approach

Build this personal portfolio website incrementally using a spec-driven and modular development workflow.
All development tasks, features, and implementations must follow the six context files in `/context/`.

The AI agent must:

- Use the context files as the **primary source of truth**
- Implement features step-by-step, one unit at a time (see `06-progress-tracker.md`)
- Avoid inventing functionality outside the documented scope
- Maintain consistency with the architecture defined in `02-architecture.md`
- Prioritize visual fidelity to the Figma design above generic defaults
- Continuously align implementation with the defined user flows and UI/UX guidelines

---

## Context File Reference

| File | Purpose |
|---|---|
| `context/01-product-overview.md` | What this site is, who it's for, design identity |
| `context/02-architecture.md` | Stack, folder structure, invariants |
| `context/03-features.md` | Feature specs with success criteria |
| `context/04-user-flows.md` | How visitors navigate the site |
| `context/05-ui-ux-guidelines.md` | Colors, typography, spacing, animation rules |
| `context/06-progress-tracker.md` | Unit checklist, open questions, changelog |

---

## Development Rules

### Specification-Driven Development
- Always read the relevant context file before implementing a feature
- Do not add undocumented features unless explicitly requested
- Validate outputs against the success criteria in `03-features.md`

### Incremental Feature Development
- Work through the unit backlog in `06-progress-tracker.md` in order
- Complete one unit fully before starting the next
- Mark checklist items as done and update the changelog after each unit

### Scoping Rules
- Work on one unit at a time
- Do not combine unrelated sections in a single implementation step
- If a unit would require changes to more than one section's component and its data file simultaneously, split it

### When to Split Work
Split a step if it combines:
- A new section component **and** a new animation system
- Multiple data file changes for unrelated sections
- Schema/data changes **and** UI changes for different sections

### Consistent Architecture
- Follow the folder structure in `02-architecture.md` exactly
- All content must come from `/src/data/` — never hardcode strings in components
- Use CSS custom properties for all colors — never hardcode hex values in JSX or TSX

### UI/UX Fidelity
- Follow `05-ui-ux-guidelines.md` for every visual decision
- Do not use UI library defaults (shadcn, MUI, etc.) — build components from scratch using Tailwind
- The gradient blobs must use the exported PNG assets — do not recreate them in CSS

### Security & Quality
- No secrets, API keys, or credentials anywhere in the codebase
- All `<img>` / `<Image>` elements must have `alt` attributes
- `npm run build` must pass with zero TypeScript errors before any unit is marked complete

---

## Protected Files
Do not modify:
- `/public/assets/**` — Figma-exported design assets; do not rename or resize
- `tailwind.config.ts` — only modify to add new tokens; do not remove existing ones
- `globals.css` CSS custom properties block — only add; do not remove or rename tokens
- `package-lock.json` / `pnpm-lock.yaml` — only change when intentionally modifying dependencies

---

## Handling Missing Requirements
- Do not invent behavior not defined in the context files
- If a requirement is ambiguous, add it as an open question in `06-progress-tracker.md` before implementing
- Never guess at copy (text content) — use the placeholder text from `03-features.md` until confirmed

---

## Before Moving to the Next Unit
1. The current unit's success criteria in `03-features.md` are fully met
2. No architectural invariant from `02-architecture.md` was violated
3. `06-progress-tracker.md` checklist is updated and changelog entry added
4. `npm run build` passes clean
