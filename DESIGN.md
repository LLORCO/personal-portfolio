---
name: Jorge Hernández · Portfolio
description: Shopify Front-End Developer portfolio. Plain stone surfaces, one deep emerald accent, proof set as type.
colors:
  emerald-ink: "#047857"
  emerald-ink-deep: "#065f46"
  emerald-glow: "#34d399"
  emerald-glow-soft: "#6ee7b7"
  emerald-base: "#10b981"
  emerald-mid: "#059669"
  forest-night: "#052e16"
  mint-mist: "#dcfce7"
  paper: "#fafaf9"
  surface: "#ffffff"
  stone-line: "#d6d3d1"
  stone-hairline: "#e7e5e4"
  ink: "#0c0a09"
  ink-soft: "#1c1917"
  text-body: "#44403c"
  text-meta: "#57534e"
  night: "#0c0a09"
  night-surface: "#1c1917"
  night-line: "#44403c"
  night-text: "#d6d3d1"
  night-meta: "#a8a29e"
  selection-mint: "#a7f3d0"
  selection-ink: "#022c22"
typography:
  display:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "3.75rem"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  subtitle:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.25
  lead:
    fontFamily: "Atkinson Hyperlegible Next, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: "Atkinson Hyperlegible Next, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Atkinson Hyperlegible Next, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.4
rounded:
  control: "8px"
  card: "16px"
  dot: "9999px"
spacing:
  container: "72rem"
  gutter-mobile: "16px"
  gutter-desktop: "32px"
  section: "80px"
  card-padding: "40px"
  stack-sm: "8px"
  stack-md: "16px"
  stack-lg: "32px"
components:
  button-primary:
    backgroundColor: "{colors.emerald-ink}"
    textColor: "{colors.surface}"
    rounded: "{rounded.control}"
    padding: "12px 20px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.emerald-ink-deep}"
    textColor: "{colors.surface}"
  button-primary-dark:
    backgroundColor: "{colors.emerald-glow}"
    textColor: "{colors.night}"
    rounded: "{rounded.control}"
    padding: "12px 20px"
  button-primary-dark-hover:
    backgroundColor: "{colors.emerald-glow-soft}"
    textColor: "{colors.night}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.control}"
    padding: "12px 20px"
  button-secondary-dark:
    backgroundColor: "{colors.night-surface}"
    textColor: "{colors.paper}"
    rounded: "{rounded.control}"
    padding: "12px 20px"
  card-project:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.card}"
    padding: "40px"
  card-project-dark:
    backgroundColor: "{colors.night-surface}"
    rounded: "{rounded.card}"
    padding: "40px"
  panel-contact:
    backgroundColor: "{colors.forest-night}"
    textColor: "{colors.surface}"
    rounded: "{rounded.card}"
    padding: "40px"
---

# Design System: Jorge Hernández · Portfolio

## Overview

**Creative North Star: "The work order, signed"**

The page reads like a well-kept project record: what was asked, what Jorge built, who approved it, where it lives. Surfaces are plain warm stone, and type does the work. A single deep emerald, inherited from the current site, marks only the things a visitor can act on or should trust. Nothing decorates. Proof is set as type (rules, definition lists, links), not as badges, glows, or stat tiles. Motion is limited to state feedback.

Density is calm. Every section starts with a real heading. Copy is first person and specific. Light and dark are equal citizens, and dark is not an inverted afterthought: the accent shifts to a brighter emerald and the button text turns dark so contrast holds.

**Key Characteristics:**
- Stone neutrals plus one emerald accent family. No second accent hue in the UI.
- Archivo for headings, Atkinson Hyperlegible Next for reading. Legibility is the brand, because the work is accessibility.
- Proof as typography: hairline rules, `<dl>` facts, inline links.
- Cards only where content is a self-contained case. Everything else is a list or prose.
- AA contrast verified by calculation in both themes.

## Colors

One emerald accent family over warm stone. The accent marks actions and links, never backgrounds of large areas (except the contact panel, which uses the darkest forest tone).

### Primary
- **Emerald Ink** (#047857): primary buttons and the header "Contact" button in light mode. White text on it: **5.48:1**. Against the paper background, as a UI boundary: 5.25:1. Also the focus ring color in light mode.
- **Emerald Ink Deep** (#065f46): primary hover in light mode (white text **7.68:1**). Link text in light mode, on paper 7.36:1 and on white 7.68:1.
- **Emerald Glow** (#34d399): primary buttons in dark mode, with Night text on top: **10.28:1**. Bullet dots in dark mode.
- **Emerald Glow Soft** (#6ee7b7): primary hover, links, and focus ring in dark mode (on Night 12.96:1, on Night Surface 11.47:1).
- **Emerald Base / Emerald Mid** (#10b981 / #059669): legacy tokens. **Never put text on Emerald Mid**: white on #059669 is only 3.77:1, which fails AA. That was the original header CTA.

### Secondary
- **Forest Night** (#052e16): background of the contact panel only. White text on it: 14.91:1. Mint Mist text: 13.57:1. An Emerald Glow button on it, as a UI boundary: 7.75:1.
- **Mint Mist** (#dcfce7): secondary text on Forest Night.

### Neutral
- **Paper** (#fafaf9): page background in light mode.
- **Surface** (#ffffff): cards in light mode.
- **Stone Line / Stone Hairline** (#d6d3d1 / #e7e5e4): borders and rules in light mode.
- **Ink / Ink Soft** (#0c0a09 / #1c1917): headings in light mode.
- **Text Body** (#44403c): body text, 9.84:1 on Paper.
- **Text Meta** (#57534e): secondary and meta text, 7.30:1 on Paper and 7.63:1 on Surface. Replaces stone-500, which measured 4.4:1 on stone-100 (flagged by the detector).
- **Night / Night Surface / Night Line** (#0c0a09 / #1c1917 / #44403c): dark background, dark cards, dark rules.
- **Night Text** (#d6d3d1): body text in dark mode, 13.26:1.
- **Night Meta** (#a8a29e): meta text in dark mode, 6.93:1 on Night Surface.

### Named Rules
**The One Green Rule.** Emerald appears only on actions, links, focus rings, and list markers. If it is not clickable or a marker, it is not green.
**The Measured Contrast Rule.** Every text/background pair ships with a calculated ratio ≥4.5:1 (≥3:1 for UI boundaries and large text). Ratios live in `contraste.py`; a new pair is not added until it is measured.
**The Branded Selection Rule.** `::selection` uses Selection Mint (#a7f3d0) with Selection Ink (#022c22) text in light mode (11.81:1) and #065f46 with white text in dark mode (7.68:1).

## Typography

**Display Font:** Archivo (fallback: ui-sans-serif, system-ui). Weights 600 and 700 only.
**Body Font:** Atkinson Hyperlegible Next (fallback: ui-sans-serif, system-ui). Weights 400 and 600 only.

**Character:** Archivo is a sturdy grotesque that gives the headings presence without gimmicks. Atkinson Hyperlegible Next was drawn by the Braille Institute for low-vision readers, which suits an accessibility-focused developer. It replaces Space Grotesk, which the Impeccable detector flags as an overused AI-default face.

### Hierarchy
- **Display** (700, 3.75rem desktop / 2.5rem mobile, 1.02, -0.025em): hero H1 only. Keep "Front-End" unbroken with `whitespace-nowrap`.
- **Headline** (700, 2.25rem, 1.1, -0.02em): section H2s.
- **Title** (700, 1.875rem, 1.2): project card H3s.
- **Subtitle** (600, 1.5rem): names in the "Recent work" list and in the project rows.
- **Lead** (400, 1.25rem, 1.625, max 60ch): the first paragraph under the H1.
- **Body** (400, 1rem–1.125rem, 1.625, max 62–65ch): everything else.
- **Label** (600, 0.875rem): buttons (at 1rem in the hero), `<dt>` labels, nav. **Never uppercase with wide tracking.**

### Named Rules
**The No Kicker Rule.** No eyebrow labels, tracked uppercase tags, or chips above headings. The heading carries its own weight.
**The Measure Rule.** Prose never exceeds 65ch. Headings use `text-wrap: balance` and body text uses `text-wrap: pretty`.

## Layout

- Container `max-w-6xl` (72rem) with `px-4 sm:px-6 lg:px-8`. Sections use `py-20` (80px) on desktop and `py-14` on mobile.
- Hero: 12-column grid. Text spans columns 1–7 and the "Recent work" list spans 8–12, with `gap-x-16`. Below `lg`, it stacks with the list after the text.
- More space above a heading than below it: H2 `mt-0` inside the section padding, then `mt-10` to the content.
- Project section: one wide feature card (Memory Air), one wide card (Savory Spice), then a two-column list of rows (Leaf Shave, FIGS) and a single line for side projects. Never a grid of equal cards.

## Elevation & Depth

Flat. Depth comes from tone (Paper → Surface, Night → Night Surface) and 1px borders. **No box-shadows on cards**: the old `0 14px 40px` shadow plus a border was the "ghost card". The sticky header gets a 1px bottom border and an opaque background, with no backdrop blur.

### Named Rules
**The One Edge Rule.** A container declares its edge once: a border or a tonal step, never a border plus a wide soft shadow.

## Shapes

- Controls (buttons, toggles): 8px (`rounded-lg`).
- Cards and the contact panel: 16px (`rounded-2xl`). No `rounded-3xl`.
- Pills: none. List markers are 6px dots (`rounded-full`).
- Icons come from lucide-react only, at a 2px stroke. No Unicode arrows or emoji as icons.

## Components

### Buttons
- **Shape:** 8px radius; `px-5 py-3` and 1rem semibold in the hero and cards; `px-4 py-2.5` and 0.875rem in the header.
- **Primary:** `bg-accent-700 text-white hover:bg-accent-800 dark:bg-accent-400 dark:text-stone-950 dark:hover:bg-accent-300`.
- **Secondary:** `border border-stone-300 bg-white text-stone-900 hover:bg-stone-100 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-50 dark:hover:bg-stone-800`.
- **Text link action:** `font-semibold text-accent-800 underline decoration-accent-700/40 underline-offset-4 hover:decoration-accent-700 dark:text-accent-300`.
- **Focus (all):** `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-700 dark:focus-visible:outline-accent-300`.
- **Transition:** `transition-colors duration-150` only. No scale or translate on buttons.
- At most one primary button per view region.

### Cards / Containers
- **Project card:** `rounded-2xl border border-stone-300 bg-white p-10 dark:border-stone-700 dark:bg-stone-900`. No shadow, no top color bar.
- **Contact panel:** `rounded-2xl bg-moss-950 p-10 text-white`. Solid color, no gradient.

### Lists as proof (signature component)
Proof as rows: a `<ul>` or `<dl>` with `border-t border-stone-300 dark:border-stone-700` per row and `py-5`. The name is set as Subtitle, the description as Body Meta, and a trailing lucide `ArrowRight` that moves `translate-x-1` on hover, but only under `motion-safe:`.

### Navigation
- Header: monogram plus name and role on the left. On the right: Proyectos, Comunidad, and CV (downloads the PDF for the active language), then the language toggle, the theme toggle, and the "Contacto" primary button.
- Opaque `bg-stone-50 dark:bg-stone-950` with `border-b`.
- Nav links: 0.875rem semibold, stone-700. Hover goes to stone-950; dark mode uses stone-300 and white.

### Media slot (Memory Air)
- The card and the case page accept `media: null | { type: "image" | "video", src, poster, alt }`.
- While `null`, nothing is rendered: no placeholder box and no "coming soon".
- When present, it renders full width above the text at `aspect-video rounded-xl`. Video is `muted playsinline loop`, autoplays only when `prefers-reduced-motion: no-preference`, and otherwise shows the poster with a play button.

## Do's and Don'ts

### Do:
- **Do** use `accent-700`/`accent-800` (light) and `accent-400`/`accent-300` with `stone-950` text (dark) for every primary action.
- **Do** keep body text at 16px or more and prose at 65ch or less.
- **Do** wrap every animation in `motion-safe:` or a `prefers-reduced-motion` check, and give it a static equivalent.
- **Do** theme `::selection` and focus rings from the palette.
- **Do** use colons, commas, and periods in copy. Use the en dash only in ranges (jul–ago).

### Don't:
- **Don't** put text on #059669: it measures 3.77:1.
- **Don't** add kickers, eyebrow chips, section numbers, or uppercase tracked labels above headings.
- **Don't** use icon tiles above headings, grids of identical cards, hero stat tiles, or marquees.
- **Don't** use gradients on surfaces or text, glassmorphism, backdrop blur, glow blobs, or radial halos.
- **Don't** use em dashes in UI copy.
- **Don't** use Space Grotesk, Inter, or other overused default faces.
- **Don't** use an entrance animation on every section.
