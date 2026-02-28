# Roost Wrestling Club — Project Guide

## Overview

Community youth development program website for Donley County, TX. Built with **Astro 5**, **Tailwind CSS v4**, and **TypeScript**.

## Design System

All visual design decisions are documented in [`Design-System.md`](./Design-System.md). Refer to it for:

- Color tokens (brand + palette)
- Typography scale, font families, and weights
- Spacing scale (em-based)
- Border radius, shadows, transitions
- Component token patterns (buttons, tags, cards)
- Breakpoints and container widths

The design system is implemented in `src/styles/global.css` via Tailwind v4's `@theme` directive — tokens live as CSS custom properties, not in a `tailwind.config.js`.

## Architecture

### Stack

- **Astro 5** — static site, `.astro` components
- **Tailwind CSS v4** — `@theme` block in `global.css`, no config file
- **Astro Experimental Fonts** — Google Fonts (DM Sans, Epilogue, Lora) via `astro.config.mjs`, referenced as `--astro-font-*` variables
- **TypeScript** — for constants and type definitions

### Key Directories

| Path | Purpose |
|---|---|
| `src/pages/` | Routes — `index.astro`, `contact.astro`, `tracks/*.astro` |
| `src/components/` | Astro components (Hero, Nav, Footer, etc.) |
| `src/layouts/` | `Layout.astro` — base HTML shell with Nav + Footer |
| `src/styles/` | `global.css` — Tailwind theme + base + utility layers |
| `src/constants/` | `navigation.ts` — nav links, tracks, programs, contact info |
| `src/assets/` | Images and videos (processed by Astro) |

### Conventions

- **Styling**: Use Tailwind utility classes. Custom utilities go in `@layer utilities` in `global.css`. Avoid inline `<style>` blocks unless scoped to a specific component layout concern.
- **Fonts**: Three families — `font-sans` (DM Sans, body), `font-display` (Epilogue, headings), `font-serif` (Lora, italic accents). Use the corresponding Tailwind classes.
- **Spacing**: Em-based scale. Use Tailwind spacing utilities that map to the `@theme` tokens.
- **Colors**: Use semantic names (`primary`, `light`, `dark`) or palette names (`orange`, `green`, `blue`, etc.) via Tailwind classes like `bg-primary`, `text-dark`.
- **Components**: All `.astro` files. Props defined via `interface Props` in the frontmatter.
- **Images**: Import from `src/assets/images/` and pass through Astro's `<Image />` or as `src` props.

## Commands

```sh
npm run dev       # Start dev server
npm run build     # Production build
npm run preview   # Preview production build
```
