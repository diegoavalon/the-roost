# Design System — Extracted from Theme CSS

## 1. Color Tokens

### Brand / Semantic Colors

| Token     | CSS Variable      | Value     | Usage                         |
| --------- | ----------------- | --------- | ----------------------------- |
| `primary` | `--color-primary` | `#f0befa` | Pink — buttons, tags, accents |
| `light`   | `--color-light`   | `#f0ebe6` | Offwhite — page background    |
| `dark`    | `--color-dark`    | `#000000` | Black — text, dark sections   |

### Palette Colors

| Token        | CSS Variable         | Value     |
| ------------ | -------------------- | --------- |
| `black`      | `--color-black`      | `#000000` |
| `white`      | `--color-white`      | `#ffffff` |
| `offwhite`   | `--color-offwhite`   | `#f0ebe6` |
| `darkgrey`   | `--color-darkgrey`   | `#2d2d2d` |
| `orange`     | `--color-orange`     | `#f5693c` |
| `lightgreen` | `--color-lightgreen` | `#e6fab9` |
| `green`      | `--color-green`      | `#2d7864` |
| `darkblue`   | `--color-darkblue`   | `#4b69f0` |
| `blue`       | `--color-blue`       | `#82a0ff` |
| `maroonred`  | `--color-maroonred`  | `#a0325a` |
| `pink`       | `--color-pink`       | `#f0befa` |
| `pastelpink` | `--color-pastelpink` | `#ffe1f0` |

---

## 2. Typography

### Font Families

| Token     | Family                              | Usage                  |
| --------- | ----------------------------------- | ---------------------- |
| `sans`    | `DM Sans, Arial, sans-serif`        | Body text, UI elements |
| `display` | `Epilogue, Arial, sans-serif`       | Headings (h1–h4)       |
| `serif`   | `Lora, Times New Roman, sans-serif` | Italic accent text     |

### Font Weights

| Token      | Value | Usage                    |
| ---------- | ----- | ------------------------ |
| `normal`   | 400   | Body, h4, serif accents  |
| `semibold` | 600   | Card titles, type labels |
| `bold`     | 700   | Strong, h5, button text  |
| `black`    | 900   | Display headings (h1–h3) |

### Type Scale

Base font size: `16px` (`--unit-width`)

| Level | Size      | Rem  | Line Height | Font Family | Weight |
| ----- | --------- | ---- | ----------- | ----------- | ------ |
| h1    | `5em`     | 80px | 1.0 (est.)  | Epilogue    | 900    |
| h2    | `3em`     | 48px | 1.0 (est.)  | Epilogue    | 900    |
| h3    | `2em`     | 32px | 1.0 (est.)  | Epilogue    | 900    |
| h4    | `1.5em`   | 24px | 1.4         | Epilogue    | 400    |
| h5    | `1em`     | 16px | 1.3         | DM Sans     | 700    |
| p     | `1.25em`  | 20px | 1.4         | DM Sans     | 400    |
| small | `0.875em` | 14px | 1.4         | DM Sans     | 400    |

### Display Text Variants

- **Bold Display**: Epilogue Black, `letter-spacing: -0.03em`, `line-height: 1`
- **Italic Display**: Lora Italic, lowercase, `letter-spacing: -0.03em`, `line-height: 1`

---

## 3. Spacing

### Container Padding

| Token          | CSS Variable             | Value      |
| -------------- | ------------------------ | ---------- |
| `container-s`  | `--container-padding-s`  | `0.75em`   |
| `container-m`  | `--container-padding-m`  | `2.5em`    |
| `container-l`  | `--container-padding-l`  | `6.75em`   |
| `container-xl` | `--container-padding-xl` | `10.625em` |

### Layout Spacing

| Token             | CSS Variable        | Value   | Usage              |
| ----------------- | ------------------- | ------- | ------------------ |
| `gap`             | `--gap`             | `2.5em` | Default gap        |
| `section-padding` | `--section-padding` | `12em`  | Section top/bottom |

### Observed Spacing Scale (em-based)

`0.25` · `0.5` · `0.75` · `1` · `1.5` · `2` · `2.5` · `3` · `3.5` · `4` · `5` · `6` · `7.5` · `8` · `10` · `12` · `15`

---

## 4. Border Radius

| Token  | CSS Variable        | Value          |
| ------ | ------------------- | -------------- |
| `sm`   | `--border-radius-s` | `0.5em`        |
| `md`   | `--border-radius-m` | `0.75em`       |
| `lg`   | `--border-radius-l` | `1.25em`       |
| `full` | —                   | `50em` / `50%` |

Default (`--border-radius`) resolves to `lg` (`1.25em`).

---

## 5. Container / Layout

| Token              | CSS Variable             | Value    |
| ------------------ | ------------------------ | -------- | -------------- |
| `container`        | `--size-container-ideal` | `1440px` |
| `container-min`    | `--size-container-min`   | `992px`  |
| `container-max`    | `--size-container-max`   | `1920px` |
| `container-medium` | computed                 | `1260px` | (1440 × 0.875) |
| `container-small`  | computed                 | `1080px` | (1440 × 0.75)  |

Grid: 12-column float-based (Webflow), `10px` gutter per side.

---

## 6. Breakpoints

| Name     | Max Width | Notes                      |
| -------- | --------- | -------------------------- |
| `tablet` | `991px`   | Container shrinks to 728px |
| `mobile` | `767px`   | Full-width columns         |
| `tiny`   | `479px`   | Container max-width: none  |

---

## 7. Shadows & Effects

| Usage             | Value                                                  |
| ----------------- | ------------------------------------------------------ |
| Badge shadow      | `0 0 0 1px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.1)` |
| Slider dot shadow | `0 0 3px rgba(51,51,51,0.4)`                           |
| Focus ring        | `0 0 0 2px #fff`                                       |
| Backdrop blur     | `blur(0.75em)` — on video controls                     |
| Glass bg          | `rgba(240,235,230, 0.15)` — video control buttons      |

---

## 8. Transitions

| Property          | Duration | Easing   |
| ----------------- | -------- | -------- |
| Opacity (general) | `0.3s`   | `linear` |
| Slider dots       | `0.1s`   | default  |
| Lightbox controls | `0.3s`   | default  |

---

## 9. Tailwind Configuration

```js
// tailwind.config.js
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    // ── Breakpoints (mobile-first, inverted from source) ──
    screens: {
      sm: "480px", // > tiny
      md: "768px", // > mobile
      lg: "992px", // > tablet
    },

    // ── Font Families ──
    fontFamily: {
      sans: ["DM Sans", ...defaultTheme.fontFamily.sans],
      display: ["Epilogue", ...defaultTheme.fontFamily.sans],
      serif: ["Lora", ...defaultTheme.fontFamily.serif],
    },

    extend: {
      // ── Colors ──
      colors: {
        // Semantic
        primary: "#f0befa",
        light: "#f0ebe6",
        dark: "#000000",

        // Palette
        offwhite: "#f0ebe6",
        darkgrey: "#2d2d2d",
        orange: "#f5693c",
        lightgreen: "#e6fab9",
        green: "#2d7864",
        darkblue: "#4b69f0",
        blue: "#82a0ff",
        maroonred: "#a0325a",
        pink: "#f0befa",
        pastelpink: "#ffe1f0",
      },

      // ── Font Size (em-based scale) ──
      fontSize: {
        xs: ["0.875em", { lineHeight: "1.4" }], // .p-s / small
        base: ["1em", { lineHeight: "1.4" }], // h5 / base
        lg: ["1.125em", { lineHeight: "1.1" }], // card titles
        xl: ["1.25em", { lineHeight: "1.4" }], // p / body copy
        "2xl": ["1.5em", { lineHeight: "1.4" }], // h4
        "3xl": ["1.75em", { lineHeight: "1" }], // xl tags
        "4xl": ["2em", { lineHeight: "1" }], // h3
        "5xl": ["3em", { lineHeight: "1" }], // h2
        "6xl": ["5em", { lineHeight: "1" }], // h1
      },

      // ── Font Weight ──
      fontWeight: {
        normal: "400",
        semibold: "600",
        bold: "700",
        black: "900",
      },

      // ── Letter Spacing ──
      letterSpacing: {
        display: "-0.03em",
        tight: "-0.02em",
      },

      // ── Border Radius ──
      borderRadius: {
        sm: "0.5em", // --border-radius-s
        md: "0.75em", // --border-radius-m
        lg: "1.25em", // --border-radius-l (default)
        full: "50em", // pills / tags
      },

      // ── Max Width (containers) ──
      maxWidth: {
        "container-sm": "1080px",
        container: "1440px",
        "container-lg": "1920px",
      },

      // ── Spacing (em-based, key values from theme) ──
      spacing: {
        "container-s": "0.75em",
        "container-m": "2.5em",
        "container-l": "6.75em",
        "container-xl": "10.625em",
        gap: "2.5em",
        section: "12em",
      },

      // ── Box Shadow ──
      boxShadow: {
        badge: "0 0 0 1px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.1)",
        focus: "0 0 0 2px #fff",
      },

      // ── Backdrop Blur ──
      backdropBlur: {
        control: "0.75em",
      },

      // ── Transitions ──
      transitionDuration: {
        fast: "100ms",
        DEFAULT: "300ms",
      },
    },
  },
  plugins: [],
};
```

---

## 10. Component Token Patterns

### Buttons

| Variant | Background  | Text Color | Radius | Padding            |
| ------- | ----------- | ---------- | ------ | ------------------ |
| Primary | `primary`   | `dark`     | `lg`   | `1em 1.5em`        |
| Bold    | `dark`      | `light`    | `sm`   | `1em` (4em height) |
| Draw    | transparent | inherit    | —      | `0.625em` y        |

### Tags / Pills

| Variant | Background | Text Color | Radius | Height  |
| ------- | ---------- | ---------- | ------ | ------- |
| Default | `primary`  | `dark`     | `full` | `1.5em` |
| Footer  | `light`    | inherit    | `full` | `2em`   |
| Credits | `dark`     | `light`    | `full` | `1.5em` |
| XL      | `primary`  | `dark`     | `full` | auto    |

### Cards

| Variant       | Background | Radius | Border                |
| ------------- | ---------- | ------ | --------------------- |
| Work Card     | `dark`     | `lg`   | `0.375em solid light` |
| Flick Card    | `dark`     | `lg`   | `0.375em solid light` |
| Services Card | varies\*   | `md`   | none                  |
| Team Card     | `darkgrey` | `lg`   | none                  |
| Media Card    | —          | `lg`   | `0.25em solid dark`   |

\*Services card colors: `green`, `blue`, `orange`, `maroonred`, `pink`

### Video Player Controls (Glass)

| Property   | Value                       |
| ---------- | --------------------------- |
| Background | `rgba(240, 235, 230, 0.15)` |
| Backdrop   | `blur(0.75em)`              |
| Radius     | `sm` (0.5em)                |
| Size       | `2em × 2em`                 |

---

## 11. CSS Custom Properties (copy-paste ready)

```css
:root {
  /* ── Colors ── */
  --color-primary: #f0befa;
  --color-light: #f0ebe6;
  --color-dark: #000000;
  --color-white: #ffffff;
  --color-offwhite: #f0ebe6;
  --color-darkgrey: #2d2d2d;
  --color-orange: #f5693c;
  --color-lightgreen: #e6fab9;
  --color-green: #2d7864;
  --color-darkblue: #4b69f0;
  --color-blue: #82a0ff;
  --color-maroonred: #a0325a;
  --color-pink: #f0befa;
  --color-pastelpink: #ffe1f0;

  /* ── Typography ── */
  --font-sans: "DM Sans", Arial, sans-serif;
  --font-display: "Epilogue", Arial, sans-serif;
  --font-serif: "Lora", "Times New Roman", sans-serif;
  --font-base: 16px;

  /* ── Spacing ── */
  --gap: 2.5em;
  --section-padding: 12em;
  --container-padding-s: 0.75em;
  --container-padding-m: 2.5em;
  --container-padding-l: 6.75em;
  --container-padding-xl: 10.625em;

  /* ── Radius ── */
  --radius-sm: 0.5em;
  --radius-md: 0.75em;
  --radius-lg: 1.25em;
  --radius-full: 50em;

  /* ── Containers ── */
  --container-width: 1440px;
  --container-width-sm: 1080px;
  --container-width-md: 1260px;
  --container-width-max: 1920px;

  /* ── Breakpoints ── */
  --bp-tablet: 991px;
  --bp-mobile: 767px;
  --bp-tiny: 479px;
}
```

---

## 12. Font Loading

```html
<!-- Self-hosted woff2 fonts required -->
<link
  rel="preload"
  as="font"
  type="font/woff2"
  crossorigin
  href="/fonts/DMSans-Regular.woff2"
/>
<link
  rel="preload"
  as="font"
  type="font/woff2"
  crossorigin
  href="/fonts/DMSans-SemiBold.woff2"
/>
<link
  rel="preload"
  as="font"
  type="font/woff2"
  crossorigin
  href="/fonts/DMSans-Bold.woff2"
/>
<link
  rel="preload"
  as="font"
  type="font/woff2"
  crossorigin
  href="/fonts/Epilogue-Regular.woff2"
/>
<link
  rel="preload"
  as="font"
  type="font/woff2"
  crossorigin
  href="/fonts/Epilogue-Black.woff2"
/>
<link
  rel="preload"
  as="font"
  type="font/woff2"
  crossorigin
  href="/fonts/Lora-Italic.woff2"
/>
```
