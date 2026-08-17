---
name: Épure
description: Réservation de devis / visite technique pour un artisan rénovation-extension, présenté comme une planche technique vérifiée.
colors:
  paper: "#f5f4f6"
  paper-warm: "#faf6f5"
  paper-cool: "#eef3ef"
  ink: "#16181a"
  ink-soft: "#4a4d52"
  hairline: "#c9c7c4"
  seal: "#6b6fd1"
  seal-text: "#4338ca"
typography:
  display:
    fontFamily: "IBM Plex Sans, Arial, Helvetica, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 4rem)"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "IBM Plex Sans, Arial, Helvetica, sans-serif"
    fontSize: "clamp(1.75rem, 4vw, 2.75rem)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "normal"
  title:
    fontFamily: "IBM Plex Sans, Arial, Helvetica, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "normal"
  body:
    fontFamily: "IBM Plex Sans, Arial, Helvetica, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  label:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.12em"
  label-micro:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "10px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.14em"
  caption:
    fontFamily: "IBM Plex Sans, Arial, Helvetica, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  data:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.04em"
rounded:
  none: "0px"
spacing:
  section-y: "6rem"
  container-x: "1.5rem"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
---

# Design System: Épure

## Overview

**Creative North Star: "The Verified Technical Plate"**

Épure reads as a checked architectural plate, not an artisan brochure. Every section is a numbered "planche" (plate) bounded by hairline rules, tagged in a corner with a registration mark, and gridded like a drafting sheet. The world's job is to make the visitor feel a devis from Épure gets the same procedural rigor as a plan côté: nothing is eyeballed, everything is dated and versioned. Warmth is not banished but it is never the default move — it comes from precision made legible, not from folklore (no hard hats, no handshakes, no rounded-friendly UI).

The palette is near-monochrome paper-and-ink with a single reserved accent; the type system pairs one humanist grotesque (content) with one mono (system labels, always tracked uppercase, always small). Depth is flat throughout — no shadows anywhere in the build — with layering done through hairline borders, low-opacity fills, and a 6%-opacity 12-column grid ghosted behind every section.

**Key Characteristics:**
- Near-white paper, near-black ink, one periwinkle accent reserved for non-text uses
- Every section is a bordered, numbered "planche" with a corner registration tag
- A ghosted 12-column grid (6% opacity) sits behind every section
- Flat throughout: zero shadows, depth via hairlines and opacity layering
- Mono uppercase, tracked labels for every system/UI string; the grotesque is reserved for reading content

## Colors

Near-monochrome paper/ink base with a single reserved accent color; warmth and coolness are expressed as low-opacity paper variants at section edges, not as new hues.

### Primary
- **Seal Periwinkle** (`#6b6fd1`, `--seal`): reserved for the rotating seal mark, focus/selection fills (`::selection` background), and ring/stroke uses. **Never used for text** — its contrast against `--paper` is insufficient for body/label reading.
- **Seal Text** (`#4338ca`, `--seal-text`): the AA-safe reading of the accent (~7.2:1 on `--paper`), used wherever the periwinkle hue needs to appear as text or a small live-status label (e.g. "Étape 3 / 6", "En cours" in the méthode tracker).

### Neutral
- **Paper** (`#f5f4f6`, `--paper`): the base page background and default button/label text-on-dark color.
- **Paper Warm** (`#faf6f5`, `--paper-warm`): warm edge variant, used at 60% opacity as the fill behind the réalisations project cards.
- **Paper Cool** (`#eef3ef`, `--paper-cool`): cool edge variant, used at 40% opacity as the Méthode section's background wash.
- **Ink** (`#16181a`, `--ink`): primary text, headings, borders on filled buttons, `:focus-visible` outline color.
- **Ink Soft** (`#4a4d52`, `--ink-soft`): body copy and secondary text.
- **Hairline** (`#c9c7c4`, `--hairline`): all thin rules — section borders, card borders, the dot-matrix grain, scrollbar thumb, the 12-column grid lines (rendered at 6% opacity via `--color-ink` in `ColumnGrid`, not via this token directly).

### Utility
- **Error Red** (Tailwind `red-700`): the one deliberate exception to the near-monochrome-plus-accent palette, used only for form validation error text in `BookingCalendar`. Never used decoratively.

### Named Rules
**The One Accent Rule.** `--seal` appears in exactly three places: the rotating seal mark, `::selection`, and ring/stroke details. It is never a text color and never a background fill for content blocks. Where the periwinkle hue needs to read as text, use `--seal-text` instead — the two tokens are deliberately split so accent placement never becomes an accessibility trade-off.

**The Warm/Cool Edge Rule.** Paper is not a single flat white. `--paper-warm` and `--paper-cool` exist to let alternating sections drift slightly warm or cool at low opacity (60% / 40%), keeping the plate metaphor from feeling sterile without introducing new hues.

## Typography

**Display/Body Font:** IBM Plex Sans (with Arial, Helvetica, sans-serif fallback) — no italic weight is used anywhere in the build.
**Label/Mono Font:** IBM Plex Mono (with monospace fallback)

**Character:** A humanist grotesque carries all reading content at a restrained weight range (400/500 only — the loaded 600 weight is unused in the shipped build); a single mono weight (500) renders every system label, always tracked and uppercase, so the two families never compete for the same job.

### Hierarchy
- **Display** (500, `clamp(2.25rem, 5vw, 4rem)`, line-height 1.05, tracking-tight): the single hero h1 only.
- **Headline** (500, `clamp(1.75rem, 4vw, 2.75rem)` down to `text-2xl`/`text-3xl` responsive, line-height 1.2–1.35): the Méthode and closing-CTA section headings.
- **Title** (500, 1.25rem/20px): recurring content-block headings, e.g. each Prestations service title.
- **Body** (400, 15px, line-height 1.625, `--ink-soft`): all paragraph copy; kept short-measure (max-w-lg/max-w-md/max-w-2xl containers, never full-width).
- **Label** (500, 11px, tracking 0.12em, uppercase, mono, `--ink-soft` or `--paper`-on-dark): every button, nav token, footer line, and project meta line.
- **Label Micro** (500, 10px, tracking 0.14em, uppercase, mono, `--ink-soft/80`): used only by the `PlateMark` registration tag — a step down from Label for the smallest, most incidental system mark.
- **Caption** (400, 13px, line-height 1.5, normal case, grotesque, `--ink-soft`): fine-print disclaimers set in reading prose rather than system chrome — e.g. the Méthode tracker's "Exemple illustratif…" note and the Réalisations gallery's "Schémas illustratifs…" note. Always normal-case grotesque, never mono — Caption reads as content, not UI.
- **Data** (500, 13px, tracking 0.04em, mono, `--ink`): short tabular/numeric UI content — the `BookingCalendar`'s day-of-month digits and time-slot buttons ("09:00"). Lighter tracking than Label since it sets digits, not tracked words, but stays mono per the Mono-Is-System Rule since it's still UI chrome, not reading content.

### Named Rules
**The Mono-Is-System Rule.** IBM Plex Mono, tracked and uppercase, is reserved for system/UI chrome — buttons, nav tokens, plate labels, footer, the seal's circular legend. It never appears as reading content. The grotesque (IBM Plex Sans) never appears tracked or uppercase at label sizes; the two type roles are not interchangeable.

## Layout

A 12-column grid (`ColumnGrid`, 6%-opacity `--ink` hairlines, `max-w-6xl` container, `px-6` gutters) is ghosted behind every section via `aria-hidden`, rendered as `pointer-events-none` verticals — it is a visible drafting-plate cue, not a functional layout grid. Content itself sits in a simple stacked single-column flow within the same `max-w-6xl` container, switching to explicit responsive column splits per section (`sm:grid-cols-2` for services, `sm:grid-cols-3` for the réalisations gallery, `md:grid-cols-[1fr_auto]` for the hero, `md:grid-cols-2` for Méthode).

Each section is a numbered "planche" (01–05) separated by a full-width `border-b border-hairline` rule, with generous vertical rhythm (`py-24`, `py-28` on the hero). A sticky `TokenBar` header (`h-[72px]`, `bg-paper/95` with backdrop-blur) stays fixed at the top across the whole page. Two sections (hero, closing CTA) additionally carry a `.dot-matrix` radial-dot texture at 30–40% opacity as a blueprint/measurement-surface cue — this utility is intentionally scoped to those two high-emphasis sections only, not applied as generic section filler.

## Elevation & Depth

Flat throughout — there is no `box-shadow` anywhere in the built system. Depth and separation are conveyed entirely through hairline borders (`--hairline`, 1px), low-opacity fills (paper-warm/cool washes at 40–60%), and the ghosted 12-column grid. The rotating seal mark and crosshair marks read as printed registration devices, not as lifted UI.

### Named Rules
**The No-Shadow Rule.** Nothing in this system casts a shadow. Separation between planes is drawn, never lit — a plate/print metaphor is broken the moment something looks like it's floating above the paper.

## Shapes

Everything is square-cornered — no `border-radius` is used anywhere in the build. Borders are uniformly 1px hairlines (`--hairline`) or 1px ink borders on interactive/filled elements (`border-ink`). The recurring signature shapes are the circular registration devices — the crosshair (small circle + crosshair lines) and the seal (two concentric circles with a rotating text ring) — deliberately the only round forms in an otherwise rectilinear system, reading as stamped marks rather than decorative circles.

## Components

### Buttons
- **Shape:** square corners (0 radius), 1px border always present.
- **Primary:** `border-ink bg-ink text-paper`, mono label (11px, tracked 0.12em, uppercase), padding `12px 24px` (`24px 32px` on the closing CTA's larger button).
- **Secondary/Ghost:** same shape and label typography, `border-ink` with transparent background and `text-ink`.
- **Hover:** `-translate-y-0.5` lift (150ms), no color change, no shadow gain — the plate stays flat, only its position shifts.
- **Focus:** the site-wide `:focus-visible` treatment (1.5px solid `--ink` outline, 3px offset) applies; no separate focus ring is defined on buttons.

### Cards / Containers
- **Corner Style:** square (0 radius).
- **Background:** `--paper-warm/60` (réalisations project cards) or `--paper` (Méthode status card), always against a `border-hairline` 1px border.
- **Shadow Strategy:** none — see Elevation & Depth.
- **Internal Padding:** `p-6` standard.

### Navigation
- **TokenBar:** sticky header, mono uppercase tokens (11px, tracked 0.14em, `--ink-soft`) listing region/service/turnaround facts, not page links — it reads as a metadata strip rather than a conventional nav menu. Logo wordmark is mono, uppercase, tracked. A single primary button ("Réserver un créneau") always sits at the right.

### PlateMark (signature component)
A corner-anchored registration tag (`Crosshair` icon + `Pl. 0X — Section Name`, mono, 10px, tracked 0.14em, `--ink-soft/80`) placed `top-6 left-6` on every section. This is the load-bearing device that makes each section legible as a numbered plate; it replaced an earlier kicker-label pattern removed during finish review for being a banned device sitting above every heading.

### Seal (signature component)
A rotating (25s linear, `prefers-reduced-motion`-respecting) circular stamp: an outer text ring reading "Épure · Rénovation & Extension · Devis vérifié ·" along a circular path, and a static inner circle with the wordmark. Rendered in `--seal` (periwinkle), scales from `h-20 w-20` on mobile to `h-32 w-32` on desktop — it stays visible and proportional at every breakpoint rather than disappearing below `md`.

### Crosshair (signature component)
A small circle-plus-crosshair mark (registration/measurement glyph), used standalone at section corners on the hero and inside `PlateMark`. `--ink-soft` stroke, 1px.

### BookingCalendar (signature component)
A two-column booking flow (`react-day-picker` + a form) styled entirely in-system: square day cells, hairline borders, mono `Data`-step digits, `--ink`-filled selected day, `--seal-text` for today's marker, disabled/outside days at `--ink-soft/30`. Time slots render as a 2-column grid of `Data`-styled toggle buttons beneath the calendar once a date is picked; a slot already taken (real Neon data, per-slot not per-day) renders struck through at `--ink-soft/30`, `cursor-not-allowed`, distinct from the unselected/selected states. A day with every slot taken is disabled at the calendar level, matching the day-disabled treatment. Form fields use the Label typography for their caption above a hairline-bordered input; validation errors (including "ce créneau vient d'être réservé") render in a red not otherwise present in the palette (the one deliberate exception to the accent discipline, reserved for error states only). On submit, the form is replaced by a plate-style confirmation card, never a modal or toast.

### Form Field (pattern)
`<label>` in Label typography (11px mono, tracked, uppercase, `--ink-soft`) directly above a full-width `border-hairline` input/textarea (`--paper` background, `--ink` text, 15px). No floating labels, no rounded corners, focus uses the site-wide `:focus-visible` treatment.

### FloorPlanIcon (signature component)
Abstract line-drawing floor-plan glyphs (three variants: extension, intérieur, combles) with a dashed dimension line beneath, `--ink-soft` stroke, no fill. Used in place of project photography in the réalisations gallery — a deliberate stand-in given no real project photos exist, kept abstract/technical rather than simulating fake photography.

## Do's and Don'ts

### Do:
- **Do** reserve `--seal` (periwinkle) for the seal mark, `::selection`, and ring/stroke details only; use `--seal-text` wherever the accent hue needs to read as text.
- **Do** number and tag every major section with a `PlateMark` (`Pl. 0X — Label`) so the plate metaphor stays legible page to page.
- **Do** keep every UI/system label in mono, tracked, uppercase (11px/0.12em is the default; 10px/0.14em only for the `PlateMark` tag), and keep the grotesque reserved for reading content.
- **Do** apply the `.dot-matrix` texture sparingly — hero and closing-CTA sections only — as a blueprint-surface cue, not as generic section filler.
- **Do** keep the seal mark visibly scaled at every breakpoint (it shrinks, it never disappears on mobile).
- **Do** use `Data` typography (13px mono, tracking 0.04em) for short numeric/time UI content (calendar digits, time slots) instead of inventing a new one-off size.

### Don't:
- **Don't** use any `box-shadow` — the system is flat by construction; a shadow breaks the print/plate metaphor.
- **Don't** round any corner — every border in the shipped system is square; the only circular forms are the crosshair and seal registration marks.
- **Don't** put a kicker/eyebrow label above a heading — the corner-anchored `PlateMark` is the system's only section-identification device; a floating kicker above content was removed during finish review as a banned pattern and must not be reintroduced.
- **Don't** number a list decoratively (e.g. "01–04" prefixes on unordered content) — numbering is reserved for the section-level `PlateMark` plates, where it's meaningful (5 real, ordered plates), not applied to arbitrary list items.
- **Don't** use real or simulated project photography — no real project photos exist for this fictional practice; use abstract line-drawing icons (`FloorPlanIcon`) or technical schematics instead, never generic stock imagery (smiling hard hat, suited handshake) per PRODUCT.md's evidence-on-hand constraint.
