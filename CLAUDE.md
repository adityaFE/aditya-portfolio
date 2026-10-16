# Aditya Anand Portfolio — Claude Guidelines

## 1. Project Architecture & Design System
- **Framework**: React 18, TypeScript, Vite, Tailwind CSS, Framer Motion, Lucide Icons.
- **Design System Spec**: Defined in [`DESIGN.md`](./DESIGN.md).
  - **Color Palette**: Electric Violet (`--primary: 270 91% 65%`), Neon Rose (`--accent: 330 81% 60%`), Deep Obsidian Violet canvases (`--background: 260 40% 4%`, `--card: 260 30% 8%`).
  - **Typography**: Inter sans-serif body, `[text-wrap:balance]` on headings/subtitles, `.tabular-nums` on numbers/dates, and monumental wide-tracking (`tracking-[0.25em] text-[11px] font-mono uppercase`) on section eyebrows.
  - **Interactions**: Apple-grade spring physics (`stiffness: 350, damping: 30`), glassmorphic cards (`backdrop-blur-md`), and WCAG compliant focus-visible rings.

## 2. In-Repo Skills Directory (`codingSkills/`)
All skills are committed directly to the repository and require **zero external installations**:
- **Design & UI**:
  - [`codingSkills/design/webInterfaceDesignSkill.md`](./codingSkills/design/webInterfaceDesignSkill.md): Vercel Web Interface Guidelines (A11y, ARIA, semantic HTML, layout).
  - [`codingSkills/design/design-taste-frontend.md`](./codingSkills/design/design-taste-frontend.md): Anti-slop frontend UI generation framework.
  - [`codingSkills/design/minimalist-ui.md`](./codingSkills/design/minimalist-ui.md): Linear-inspired minimalist dark mode UI.
  - [`codingSkills/design/high-end-visual-design.md`](./codingSkills/design/high-end-visual-design.md): Premium glassmorphism and lighting.
  - [`codingSkills/design/image-to-code.md`](./codingSkills/design/image-to-code.md): Translating UI mockups/screenshots to code.
- **Reviews & Audits (Ponytail Suite)**:
  - [`codingSkills/review-audit/ponytail-audit.md`](./codingSkills/review-audit/ponytail-audit.md): Codebase health, debt elimination, and maintainability.
  - [`codingSkills/review-audit/ponytail-debt.md`](./codingSkills/review-audit/ponytail-debt.md): Technical debt discovery and cleanup.
  - [`codingSkills/review-audit/ponytail-gain.md`](./codingSkills/review-audit/ponytail-gain.md): High-leverage engineering and performance optimization.
  - [`codingSkills/review-audit/ponytail-review.md`](./codingSkills/review-audit/ponytail-review.md): Pull request code review guidelines.
  - [`codingSkills/review-audit/ponytail-help.md`](./codingSkills/review-audit/ponytail-help.md): Ponytail command and workflow reference.
  - [`codingSkills/review-audit/redesign-existing-projects.md`](./codingSkills/review-audit/redesign-existing-projects.md): Step-by-step UI refactoring without regressions.
  - [`codingSkills/review-audit/full-output-enforcement.md`](./codingSkills/review-audit/full-output-enforcement.md): Preventing truncated AI code snippets.
- **Copywriting & Tone (Humaniser)**:
  - [`codingSkills/content/humaniserSkill.md`](./codingSkills/content/humaniserSkill.md): Natural, authentic tone and removal of AI clichés/boilerplate.

## 3. Visual QA & Screenshot Inspection Workflow
When asked to review visual layout, UI screenshots, or design changes:
1. **Direct Image Reading**: Read screenshot files directly with the `Read` tool (PNG, JPG, WebP) to inspect spacing, colors, typography, alignment, and responsiveness using vision capabilities.
2. **Zero-Setup On-the-Fly Screenshot Capture**: When automated screenshots of the local dev server (`http://localhost:5173`) are needed:
   - Desktop view: `npx playwright screenshot --viewport-size="1440,900" http://localhost:5173 screenshot-desktop.png`
   - Mobile view (e.g. iPhone): `npx playwright screenshot --viewport-size="390,844" http://localhost:5173 screenshot-mobile.png`
   - Specific section: `npx playwright screenshot --selector="#contact" http://localhost:5173 screenshot-contact.png`
3. **Interactive Testing**: For live CLI-driven browser automation and DOM inspection, run `npx @playwright/cli@latest` without permanent installs.

## 4. Build & Development Commands
- **Dev Server**: `npm run dev`
- **Type Check & Build**: `npm run build` (`tsc && vite build`)
- **Lint**: `npm run lint`
