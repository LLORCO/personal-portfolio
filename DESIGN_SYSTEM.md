# Personal Brand Design System

## Brand Intent
- Creative developer with strong technical foundations.
- Frontend-first execution with refined visual standards.
- Design and engineering integrated into one workflow.

## Visual Direction
- **Pattern:** Portfolio Grid with decision-driven project storytelling.
- **Style:** Motion-driven, minimal base, expressive interactions.
- **Anti-patterns to avoid:** Generic SaaS cards, template-like hero blocks, decorative effects without purpose.

## Color Tokens
- `--color-bg`: `#FAFAFA`
- `--color-surface`: `#FFFFFF`
- `--color-text-primary`: `#09090B`
- `--color-text-secondary`: `#3F3F46`
- `--color-text-muted`: `#A1A1AA`
- `--color-accent`: `#2563EB`
- `--color-accent-hover`: `#1D4ED8`
- `--color-border`: `#E4E4E7`

## Typography
- **Headings:** Archivo (600-700)
- **Body/UI:** Space Grotesk (400-600)
- **Scale:**
  - Display: 56-72px
  - H1/H2: 36-48px
  - H3: 28-32px
  - Body large: 20px
  - Body: 16-18px
  - Label/meta: 12-14px, uppercase tracking

## Spacing and Layout
- Container width: `max-w-6xl`
- Horizontal rhythm: `px-6` mobile, `px-10` desktop
- Vertical rhythm:
  - Section spacing: `py-20`
  - Internal card spacing: `p-6` to `p-8`
  - Heading blocks: `space-y-4` / `space-y-7`

## Radius and Elevation
- Card radius: `rounded-2xl` to `rounded-3xl`
- Buttons/chips: `rounded-full`
- Elevation: soft shadow (`0 14px 40px rgba(9,9,11,0.08)`)

## Motion
- Duration range: 150-300ms for hover transitions
- Entrance animation: fade + translateY (700ms ease-out)
- Motion safety: respect `prefers-reduced-motion`
- Interaction rule: no hover effects that cause layout shifts

## Interaction and Accessibility
- Keyboard-visible focus for all interactive controls
- Contrast target: minimum 4.5:1 for text
- Semantic sections and heading hierarchy
- Skip link for keyboard users
- No emoji icons; use consistent SVG icon set

