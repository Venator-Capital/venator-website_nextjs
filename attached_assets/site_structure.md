# Site Structure: Venator Capital LLC Official Website

## 🔹 Overview
The site will be a single-page or multipage application built with React + Tailwind CSS. It prioritizes clarity, visual consistency, and minimalism.  
Each section should be clean, scrollable, and lightweight.

---

## 🔹 URL Structure

| Page Name        | Route            | Visibility | Description |
|------------------|------------------|------------|-------------|
| Home             | `/`              | ✅ Public  | Top-level entry point with company overview and call to action |
| About            | `/about`         | ✅ Public  | Describes company mission, scope, and philosophy |
| Projects         | `/projects`      | ✅ Public  | Showcase of current and planned ventures with tags (In Progress, Concept, Released) |
| Contact          | `/contact`       | ✅ Public  | Basic contact form or link to external form (Notion or Google Form) |
| 404              | `/404`           | ⚠️ Fallback | Minimal custom 404 page for broken URLs |

---

## 🔹 Section Breakdown (if SPA structure)

### `/` (Landing Page)

1. **Hero Section**
   - Logo
   - Tagline
   - CTA Buttons (Explore Projects, Get in Touch)

2. **About Venator Capital**
   - Company summary
   - Core domains: Real Estate / AI SaaS / Strategic Ventures

3. **Featured Projects**
   - 3–6 projects with status and short summary
   - Horizontal scroll or grid layout

4. **CTA Section**
   - Message inviting contact or collaboration

5. **Footer**
   - Minimal links: About / Projects / Contact
   - © Venator Capital LLC 2025

---

## 🔹 Future Expandable Routes (optional)

| Page Name         | Route              | Use Case |
|-------------------|--------------------|----------|
| Project Detail     | `/projects/:slug`  | Individual project presentation page |
| News / Updates     | `/news`            | Optional company announcements |
| Careers (Hidden)   | `/careers`         | For long-term recruiting goals |

---

## 🔹 Navigation Design

- Sticky top navbar (transparent → solid on scroll)
- Logo left, navigation right (About / Projects / Contact)
- Smooth scroll for SPA; direct route for multipage
- Mobile: Hamburger menu w/ slide-in

---

## 🔹 Component Mapping (Preview)

| Section             | Component             | Filename                    |
|---------------------|-----------------------|-----------------------------|
| Hero                | `HeroSection`         | `HeroSection.jsx`           |
| About               | `AboutSection`        | `AboutSection.jsx`          |
| Projects Overview   | `ProjectGrid`         | `ProjectGrid.jsx`           |
| Project Card        | `ProjectCard`         | `ProjectCard.jsx`           |
| Contact CTA         | `ContactSection`      | `ContactSection.jsx`        |
| Footer              | `Footer`              | `Footer.jsx`                |
| Navigation          | `Navbar`              | `Navbar.jsx`                |

---

## 🔹 Notes
- Keep routing simple for SEO clarity
- Consider lightweight page transitions (fade or slide)
- Avoid clutter: no carousels or dense UI elements

