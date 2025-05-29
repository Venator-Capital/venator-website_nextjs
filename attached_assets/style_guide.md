# Style Guide: Venator Capital LLC Official Website

---

## 🔹 Color Palette

| Color Name        | HEX        | Usage |
|-------------------|------------|-------|
| Primary Black     | `#000000`  | Background (base layer) |
| Deep Charcoal     | `#111111`  | Section Background |
| White             | `#FFFFFF`  | Primary Text / CTA Buttons |
| Silver Gray       | `#CCCCCC`  | Subtext / Borders |
| Accent Blue       | `#3B82F6`  | Optional hover & CTA border color |
| Accent Gold       | `#FFD700`  | Optional highlight (e.g. tagline keywords) |

> ✔️ Accent colors should be used sparingly.  
> ✔️ Background should remain dark to emphasize elegance and seriousness.

---

## 🔹 Typography

| Element           | Font            | Weight     | Size Example |
|------------------|------------------|------------|--------------|
| Headings (H1-H3) | `Inter`, `Outfit`, or `Space Grotesk` | 600–700 | H1: 48px, H2: 36px, H3: 28px |
| Body Text        | `Inter`          | 400–500    | 16px–20px    |
| Subtext / Note   | `Inter`          | 300–400    | 14px–16px    |

> TailwindCSS font settings can use `font-sans` mapped to `Inter`.

---

## 🔹 Spacing & Layout

- Max-width: `1280px` (`max-w-7xl`)
- Section padding: `pt-24 pb-24` (desktop), `pt-16 pb-16` (mobile)
- Grid gap: `gap-6` to `gap-12` depending on section
- Internal content margin: `mx-auto`

---

## 🔹 Buttons

### Primary Button

```tailwind
px-6 py-2 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition
Secondary (Outline) Button
tailwind

px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition
All buttons should have at least transition and hover: effects.

🔹 Animation Guidelines (basic)
Section fade-in on scroll → opacity-0 to opacity-100 with translate-y

Hero section headline → fadeInUp with delay

Project hover → subtle scale + box-shadow

Detailed timing and sequencing in animation_guideline.md

🔹 Responsive Behavior
Breakpoints: Tailwind default (sm, md, lg, xl)

Navbar: transforms to hamburger at md and below

Text sizes auto-adjust using text-base md:text-lg xl:text-xl

🔹 Iconography & Logos
Logo should appear at:

Top left in navbar

Centered in hero section

Footer (small size)

Use monochrome version unless specific contrast needed

Icons from Lucide or Heroicons

🔹 Imagery
Backgrounds: abstract wireframe cityscapes, architecture, network lines

Avoid photos of people unless highly stylized

All imagery should reinforce futurism × credibility

🔹 Accessibility (a11y) Tips
Sufficient color contrast (white on black = pass)

Use aria-label on icon-only buttons

Ensure all interactive elements are keyboard-navigable
