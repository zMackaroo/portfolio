# User Flows

## Overview

The portfolio is a single-page website with one primary user journey: a visitor arrives, scrolls through the page, and takes one of three exit actions — reaching out via email, visiting a project, or following on social media.

There are no authenticated flows, no form submissions, and no multi-page navigation (except the optional Lab page).

---

## UF-01 — First Visit / Above the Fold

**Actor:** Any visitor (recruiter, potential client, peer)

**Entry point:** Direct URL, LinkedIn link, or resume link

**Flow:**
1. Page loads → Navbar appears fixed at top
2. Hero section is visible: avatar, annotation, and large headline
3. `cover` keyword is visually highlighted in the headline — draws attention
4. Visitor reads tagline and understands the owner's design philosophy
5. Visitor begins scrolling down

**Exit conditions:**
- Visitor scrolls to About section (continues journey → UF-02)
- Visitor clicks a Navbar link (jumps to section)
- Visitor bounces (no further action)

---

## UF-02 — Learning About the Owner

**Actor:** Visitor who has scrolled past the Hero

**Flow:**
1. About section fades in
2. Typewriter animation types `"I'm a Software Engineer.|"` — role is immediately clear
3. Company name (`Facebook`) is highlighted in purple — signals current employment
4. Visitor reads 3-line bio paragraph
5. Visitor continues scrolling → Work Experience section

---

## UF-03 — Exploring Work Experience

**Actor:** Visitor interested in professional background

**Flow:**
1. Work Experience section fades in with heading
2. Visitor sees 2×2 grid of project/client cards
3. Each card has a 3D icon, title, description snippet, and `"LEARN MORE"` button
4. Visitor hovers a card → subtle hover effect (scale or glow)
5. Visitor clicks `"LEARN MORE"` → (links to external case study or `#` placeholder)
6. Visitor continues scrolling → Skills section

**Decision point:** If "LEARN MORE" is clicked, visitor leaves the page temporarily. Browser back button returns them.

---

## UF-04 — Reviewing Skills & Stack

**Actor:** Technical recruiter or engineering manager

**Flow:**
1. Skills section fades in
2. Visitor reads the `"cross-functional"` call-out — understands the owner's team-fit pitch
3. Visitor scans the two rows of tech badges — quickly identifies relevant stack overlap
4. Eyes drift to the orbital animation — decorative but communicates "full-stack breadth"
5. Visitor continues scrolling → Featured Projects

---

## UF-05 — Reviewing Featured Projects

**Actor:** Any visitor assessing work quality

**Flow:**
1. First featured project (odd layout) fades in — description left, mockup right
2. Visitor reads `"Featured Project"` label + project title + description card
3. Visitor sees mockup screenshot (browser frame) — gets a visual sense of the product
4. Visitor clicks GitHub icon (`*`) → opens GitHub repo in new tab
5. Visitor clicks external link icon (`*`) → opens live project in new tab
6. Second featured project (even layout) fades in — mockup left, description right
7. Visitor reviews second project
8. Visitor continues scrolling → Contact

---

## UF-06 — Contact / Reaching Out

**Actor:** Interested recruiter or client ready to connect

**Flow:**
1. Contact section fades in
2. Visitor reads the call-to-action paragraph
3. Visitor sees email address displayed plainly → copies it manually or clicks (if mailto)
4. Visitor sees three social icons:
   - **Instagram** → taps/clicks → opens Instagram profile in new tab
   - **GitHub** → taps/clicks → opens GitHub profile in new tab
   - **Google** → taps/clicks → opens Google profile or linked property in new tab
5. Flow ends — visitor has taken an action or leaves the page

---

## UF-07 — Navbar Navigation (Jump-to-Section)

**Actor:** Returning visitor or impatient visitor who wants to skip

**Flow:**
1. Visitor clicks `"Home"` → smooth scrolls to Hero section
2. Visitor clicks `"About"` → smooth scrolls to About/Bio section
3. Visitor clicks `"Lab"` → navigates to `/lab` page (or `#` if not yet implemented)

**Requirements:**
- All internal nav links use smooth scroll (`scroll-behavior: smooth` on `html` or Framer Motion scroll)
- Active link state is not required in v1

---

## Navigation Map

```
[Navbar]
   ├── Home        → #hero
   ├── About       → #about
   └── Lab         → /lab (placeholder)

[Page scroll order]
   #hero
   #about
   #work-experience
   #skills
   #featured-projects
   #contact
```
