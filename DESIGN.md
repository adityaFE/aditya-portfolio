# DESIGN.md — Aditya Anand Portfolio Design System

> **Design System Specification for AI Coding Agents & Engineers**  
> *Synthesized from Bugatti (Hypercar Luxury & Cockpit Telemetry), Linear (Precision & Structure), Raycast (Micro-Interactions & Glows), Vercel (Typographic Rigor & A11y), and Apple (Fluid Physics & Visual Storytelling).*

---

## 1. Visual Theme & Atmosphere

### 1.1 Brand Archetype
**The Creative Systems Engineer**: A dual identity bridging **hardcore frontend engineering & scalable architecture** with **cinematic visual storytelling & bespoke, hypercar-level UI precision**.

### 1.2 Aesthetic Pillars
* **Bugatti’s Hypercar Precision & Telemetry**: Deep cinema-black obsidian canvases (`#0b0713`), monumental all-caps display hierarchy with wide tracking (`tracking-[0.25em]`), precision cockpit HUD readouts, hairline titanium edge glints, and telemetry status strips with electric violet glow accents (`rgba(168,85,247,0.15)`).
* **Linear’s Precision**: Obsidian/slate backdrops, subtle `1px` borders, keyboard-navigable structure, and dense, scannable career timelines.
* **Raycast’s Energy**: Ambient radial lighting, glassmorphic frosted cards (`backdrop-blur-md`), vibrant emerald/cyan micro-accents, and tactile micro-interactions.
* **Vercel’s Web Rigor**: Strict accessibility, balanced headline wrapping (`text-wrap: balance`), tabular numerics (`tabular-nums`), explicit focus rings, and compositor-friendly animations.
* **Apple’s Fluidity & Polish**: Generous whitespace, continuous corner curvature (`rounded-2xl` / `rounded-3xl`), natural spring physics (`stiffness: 350, damping: 30`), and cinematic media framing for creator showcases.

---

## 2. Color Palette & Semantic Tokens

### 2.1 Color Tokens (Electric Violet & Deep Obsidian Theme)

```css
:root {
  /* Surfaces */
  --background: 260 40% 4%;            /* #0b0713 Deep Obsidian Violet */
  --card: 260 30% 8%;                  /* Elevated Violet Card Surface */
  --card-surface: rgba(255, 255, 255, 0.03);
  --popover: 260 30% 8%;

  /* Primary Brand & Accents (Electric Violet & Neon Rose) */
  --primary: 270 91% 65%;              /* #a855f7 Electric Violet Core */
  --primary-foreground: 280 20% 98%;
  --secondary: 280 60% 50%;
  --accent: 330 81% 60%;               /* Neon Rose Accent */
  --accent-cyan: #06b6d4;              /* Telemetry Cyan */
  --accent-emerald: #10b981;           /* Aerodynamic Green / Live Pulse */

  /* Text & Foreground */
  --foreground: 280 20% 95%;           /* Crisp High-Contrast Light Slate */
  --muted: 260 30% 15%;
  --muted-foreground: 280 15% 65%;     /* Titanium Slate */

  /* Borders & Glass Dividers */
  --border: 270 30% 18%;
  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-hover: rgba(255, 255, 255, 0.20);
  --glass-border: rgba(255, 255, 255, 0.10);
  --ring: 270 91% 65%;
}
```

### 2.2 Semantic Color Roles

| Role | Token / Tailwind Class | Application |
|---|---|---|
| **App Canvas** | `bg-background` (`hsl(260 40% 4%)`) | Deep obsidian backdrop with ambient violet glow gradients |
| **Card Surface** | `bg-card/40 backdrop-blur-md` | Glassmorphic containers for projects, timeline, dossier, and skills |
| **Primary Action** | `bg-primary text-primary-foreground` | Hero CTAs, active filter tabs, submit buttons |
| **Secondary Action**| `bg-card/60 hover:bg-white/10` | Ghost and outline buttons, social links |
| **Code & Tags** | `bg-white/5 border-white/5` | Technology badges, category chips, monospace metadata |
| **Live Status** | `bg-emerald-400 animate-pulse` | Availability telemetry indicators |

---

## 3. Typography & Hierarchy

### 3.1 Typeface Pairings
* **Primary Sans**: `Inter`, `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `sans-serif`
  * Used for: Brand headers, hero titles, body paragraphs, and UI labels.
* **Secondary Monospace**: `ui-monospace`, `SFMono-Regular`, `Menlo`, `Monaco`, `monospace`
  * Used for: Dates, metrics, technology badges, category labels, and code tokens.

### 3.2 Typographic Hierarchy & Scale

```
Display Large (Hero Title) : text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight [text-wrap:balance]
Section Header (H2)        : text-3xl sm:text-4xl font-bold tracking-tight text-foreground [text-wrap:balance]
Card Title (H3)            : text-xl sm:text-2xl font-bold text-foreground
Body Paragraph (Leading)   : text-base sm:text-lg text-muted-foreground leading-relaxed [text-wrap:balance]
Card Description (Body)    : text-sm text-muted-foreground leading-relaxed
Micro / Eyebrow Badge      : text-xs font-mono uppercase tracking-wider text-primary
Metadata / Tabular Data    : text-xs font-mono tabular-nums text-muted-foreground
```

### 3.3 Strict Typography Rules
1. **Always apply `[text-wrap:balance]`** on titles, subheadings, and lead paragraphs to prevent widow words.
2. **Always apply `.tabular-nums` / `font-variant-numeric: tabular-nums`** to any number, date range, metric, or counter.
3. **Use the single unicode ellipsis (`…`)** rather than three separate periods (`...`).
4. **Never apply full-block rainbow gradients to body copy**. Reserve gradients strictly for accent text (e.g. `Senior Frontend Engineer`).

---

## 4. Component Stylings & Anatomy

### 4.1 Floating Glass Navigation Dock (Apple + Linear)
* **Container**: `fixed top-0 max-w-6xl mx-auto bg-background/80 backdrop-blur-xl border border-white/10 rounded-2xl`
* **Active Indicator**: Framer Motion `layoutId="active-pill"` with spring physics (`stiffness: 350, damping: 30`).
* **Skip Navigation**: Accessible hidden skip link (`sr-only focus:not-sr-only`) targeting `#main-content`.

### 4.2 Interactive Glass Cards (Raycast + Linear)
```tsx
<div className="group rounded-2xl bg-card/40 border border-white/10 hover:border-primary/40 backdrop-blur-md p-6 sm:p-8 transition-[border-color,box-shadow] duration-300 hover:shadow-2xl hover:shadow-primary/5">
  {/* Header with Title and Tabular Metadata */}
  <div className="flex items-center justify-between gap-3">
    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
      {title}
    </h3>
    <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 tabular-nums">
      {period}
    </span>
  </div>
  {/* Content */}
  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
    {description}
  </p>
</div>
```

### 4.3 Action Buttons & Focus States (Vercel)
* **Primary Button**:
  ```tsx
  <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 hover:shadow-lg hover:shadow-primary/20 transition-[opacity,box-shadow] duration-300 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none">
    <span>View Projects</span>
    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
  </button>
  ```
* **Secondary / Outline Button**:
  ```tsx
  <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-card/60 hover:bg-white/10 text-foreground font-semibold text-sm border border-white/10 hover:border-white/20 backdrop-blur-md transition-[background-color,border-color] duration-300 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none">
    <span>Download Resume</span>
    <FileText className="w-4 h-4 text-primary" aria-hidden="true" />
  </button>
  ```

### 4.4 Form Controls (Accessible & Ergonomic)
* **Text Input & Textarea**:
  * Explicit `htmlFor` and `id` pairing.
  * Explicit `autoComplete="name"` / `autoComplete="email"` / `inputMode="email"`.
  * `spellCheck={false}` on email inputs.
  * Styling: `bg-background/50 border-white/10 focus:border-primary rounded-xl h-11 text-sm focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none`.

---

## 5. Layout & Grid Principles

### 5.1 Container Widths
* **Hero & General Sections**: `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`
* **Projects Showcase Grid**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
* **Vertical Timeline & Education**: `max-w-5xl mx-auto px-4 sm:px-6 lg:px-8`

### 5.2 Vertical Rhythm & Section Offsets
* **Section Spacing**: `py-24 relative overflow-hidden`
* **Fixed Nav Anchor Offset**: `scroll-mt-24` on all section root elements (`#about`, `#skills`, `#experience`, `#projects`, `#education`, `#contact`).

### 5.3 Bento & Showcase Grids
* Projects Grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
* Experience Timeline: Vertical left-bordered rail (`border-l border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12`).

---

## 6. Depth, Glassmorphism & Elevation

### 6.1 Spatial Lighting Model (Apple + Raycast)
1. **Background Ambient Atmosphere**: Large diffused radial gradients (`blur-[140px]`) in primary teal (`hsl(173, 80%, 40% / 0.1)`) and cyan (`hsl(220, 90%, 55% / 0.05)`).
2. **Glass Layer 1 (Cards)**: `bg-card/40 backdrop-blur-md border border-white/10`
3. **Glass Layer 2 (Floating Docks & Modals)**: `bg-background/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/40`
4. **Interactive Hover Elevation**: Hover changes border from `border-white/10` to `border-primary/40` with subtle glow `shadow-xl shadow-primary/5`.

---

## 7. Do’s and Don’ts (Anti-Slop Guidelines)

### 7.1 DO:
* **DO** use hardware-accelerated CSS 3D & SVGs for UI reels instead of spinning up dozens of WebGL canvases.
* **DO** specify explicit compositor properties (`transition-[background-color,border-color,color]`, `transition-[opacity,box-shadow]`) instead of blanket `transition: all`.
* **DO** supply explicit `width`, `height`, `loading="lazy"`, and `decoding="async"` on all images.
* **DO** respect `@media (prefers-reduced-motion: reduce)`.
* **DO** provide clear accessibility labels (`aria-label`, `aria-hidden="true"`, `aria-live="polite"`).

### 7.2 DON’T:
* **DON'T** use arbitrary fake percentage bars (e.g. `React: 98%`, `TypeScript: 92%`). Use categorized skill badges with real context.
* **DON'T** use auto-advancing carousels for critical recruiter information like work experience. Use scannable vertical timelines.
* **DON'T** layer conflicting micro-interactions (e.g., full 3D tilt + mouse follower + click spark + rainbow text simultaneously on a single button).
* **DON'T** override sans-serif body fonts with monospace globally. Keep monospace strictly for code, tags, and tabular numbers.
* **DON'T** use retro novelty widgets (like visitor counters or ticking second clocks) on professional engineering portfolios.

---

## 8. Responsive, Touch & Motion Behavior

### 8.1 Apple Spring Motion Presets
```typescript
// Standard Smooth Hover
export const hoverSpring = {
  whileHover: { y: -2 },
  whileTap: { scale: 0.98 },
  transition: { type: "spring", stiffness: 400, damping: 25 }
};

// Section Fade-In
export const sectionFadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" }
};
```

### 8.2 Touch & Mobile Ergonomics
* `touch-action: manipulation` applied to eliminate 300ms mobile touch delay.
* `-webkit-tap-highlight-color: transparent` to prevent blue highlight flashes on iOS.
* Minimum touch target size: `44px × 44px` on all buttons and navigation links.
* `overscroll-behavior-y: contain` on mobile drawers.

---

## 9. Agent Prompt Guide & Recipes

When creating new components or sections for this codebase, prompt your AI tool with:

> *"Implement this component adhering strictly to `DESIGN.md`. Use the dark slate glassmorphic surface (`bg-card/40 border border-white/10 backdrop-blur-md`), Inter typography with `[text-wrap:balance]`, tabular monospace for metrics (`tabular-nums`), explicit focus-visible rings, compositor-only transitions, and Apple spring physics (`stiffness: 350, damping: 30`). Avoid WebGL context proliferation and blanket `transition: all`."*
