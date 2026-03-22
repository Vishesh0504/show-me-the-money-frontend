# Design System: Vault & Virtue (Next.js + Tailwind CSS)

This document outlines the visual language and implementation guidelines for the **Vault & Virtue** auto-expense tracker. It is designed to be highly sophisticated, utilizing deep contrasts, glassmorphism, and a refined editorial typography style.

## 1. Core Principles

- **Editorial Authority:** High-end typography (Manrope) and generous whitespace.
- **Precision & Clarity:** Financial data is presented with high contrast and clear hierarchy.
- **Tactile Feedback:** Subtle shadows and scale-based interactions for a premium PWA feel.
- **Glassmorphism:** Use of backdrop blurs and semi-transparent layers to create depth.

---

## 2. Tailwind CSS Configuration

```javascript
// tailwind.config.js
module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1A237E", // Deep Indigo
          light: "#3F51B5",
          dark: "#121858",
        },
        slate: {
          950: "#020617", // Deepest background for dark mode
        },
        accent: {
          green: "#10B981", // Success/Settled
          red: "#EF4444", // Overdue/High Velocity
          purple: "#6366F1", // Action buttons
        },
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        "soft-lg":
          "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)",
        "indigo-glow": "0 0 20px rgba(99, 102, 241, 0.2)",
      },
      backdropBlur: {
        xl: "24px",
      },
    },
  },
  plugins: [],
};
```

---

## 3. Visual Components Guidelines

### Color Palette (Tokens)

- **Light Mode Background:** `bg-slate-50` or `bg-white`.
- **Dark Mode Background:** `bg-slate-950`.
- **Cards (Light):** `bg-white/80 backdrop-blur-md border border-slate-200/50`.
- **Cards (Dark):** `bg-slate-900/50 backdrop-blur-xl border border-white/5`.
- **Primary Text:** `text-indigo-950` (Light) / `text-slate-50` (Dark).
- **Secondary Text:** `text-slate-500` (Light) / `text-slate-400` (Dark).

### Typography Scale

- **H1 (Headers):** `font-manrope font-extrabold text-4xl tracking-tighter`.
- **H2 (Section Titles):** `font-manrope font-bold text-xl tracking-tight uppercase`.
- **Currency/Numbers:** `font-manrope font-bold text-3xl tabular-nums`.
- **Labels:** `font-inter font-medium text-[10px] uppercase tracking-widest text-slate-400`.

### Interaction States

- **Buttons:** `active:scale-95 transition-all duration-200 ease-out`.
- **Hover (Desktop):** `hover:brightness-110`.
- **Focus:** `ring-2 ring-indigo-500 ring-offset-2`.

---

## 4. Layout Patterns

### Top App Bar

- **Height:** `h-16`.
- **Style:** Fixed, `backdrop-blur-xl`.
- **Elements:** Left-aligned "The Ledger" logo in `font-manrope font-black`.

### Bottom Navigation

- **Shape:** `rounded-t-4xl`.
- **Logic:** Tonal layering. Active state uses a background pill `bg-indigo-50` (Light) or `bg-indigo-900/40` (Dark).

### Data Visualization

- **Graphs:** Use soft gradients (e.g., `from-indigo-500 to-purple-500`).
- **Status Indicators:** Small colored dots or subtle background pills for "Pending", "Settled", or "Overdue".

---

## 5. Implementation Notes for Next.js

- **Dark Mode:** Use `next-themes` with the `class` strategy.
- **Icons:** Use `Google Material Symbols` (Outlined) for a clean, consistent look.
- **Animations:** Use `framer-motion` for page transitions and the "Splitable" tray slide-up effect.
