# 3D Enhanced Portfolio Website

A modern, responsive portfolio website featuring interactive 3D elements, animations, and comprehensive personal branding.


## Prerequisites

- Node.js (v18+)
- Git

## Local Development Setup

1. **Clone the repository:**
    ```bash
    git clone https://github.com/adityaFE/aditya-portfolio.git
    cd aditya-portfolio
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Start Development Server:**
    ```bash
    npm start
    ```

    The application will be available at:
    - Frontend: http://localhost:3000

## Deployment Guide

### Frontend Deployment (Netlify)

1. **Create a new site on Netlify**
    - Go to https://app.netlify.com
    - Click "New site from Git"
    - Choose your repository

2. **Configure build settings:**
    - Build command: `npm run build`
    - Publish directory: `dist`
    - Node version: 18.x

3. **Set environment variables in Netlify:**
    - Go to Site settings > Build & deploy > Environment

4. **Deploy using Netlify CLI:**
    ```bash
    npm install -g netlify-cli
    netlify login
    netlify deploy --prod
    ```

## Development Commands

```bash
# Start development server
npm start

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run typecheck

# Lint code
npm run lint

# Format code
npm run format
```

## AI Agent Architecture & In-Repo Skills

This repository is engineered to work seamlessly with AI coding assistants (Claude Code, Cursor, Copilot, Codex, Windsurf, etc.) out-of-the-box on **any new machine** without requiring external skill downloads or CLI installations.

### 1. `CLAUDE.md` & `DESIGN.md` (Root Specifications)
- **[`CLAUDE.md`](./CLAUDE.md)**: Main configuration and instructions loaded automatically by Claude Code, detailing project architecture, available skills, and testing workflows.
- **[`DESIGN.md`](./DESIGN.md)**: Standardized design system specification synthesizing **Linear** (dark structure), **Raycast** (lighting & glass), **Vercel** (typographic rigor & WCAG accessibility), **Apple** (spring physics), and **Bugatti** (hypercar precision & telemetry).

### 2. In-Repo Skills Directory (`codingSkills/`)
All AI skills and engineering guidelines are version-controlled inside [`codingSkills/`](./codingSkills/README.md):
- **Design & UI**: [`codingSkills/design/`](./codingSkills/design/) — Vercel web interface guidelines, anti-slop frontend taste, minimalist UI, and image-to-code converters.
- **Reviews & Audits (Ponytail Suite)**: [`codingSkills/review-audit/`](./codingSkills/review-audit/) — Component architecture audits, technical debt elimination, and pull request reviews.
- **Content & Copy (Humaniser)**: [`codingSkills/content/`](./codingSkills/content/) — Natural, authentic copy polish and AI boilerplate removal.

### 3. Deep Dive: Ponytail Suite & Humaniser

#### 🐴 Ponytail Engineering & Code Review Suite
Located in [`codingSkills/review-audit/`](./codingSkills/review-audit/), the Ponytail suite provides structured commands for rigorous code reviews and architectural health audits:
- **`ponytail-audit`**: Complete codebase scan evaluating architectural clarity, component boundaries, and maintainability.
- **`ponytail-debt`**: Identifies hidden technical debt, dead code, stale state logic, and refactoring candidates.
- **`ponytail-gain`**: Discovers high-leverage performance and DX gains (lazy-loading, memoization, bundle trimming).
- **`ponytail-review`**: Exhaustive PR review checklist covering edge cases, type safety, accessibility, and error handling.

**Example AI Prompt:**
> *"Run a complete audit on our component tree using `codingSkills/review-audit/ponytail-audit.md` and report top 3 technical debt items."*

#### ✍️ Humaniser Copywriting & Anti-AI Tone Skill
Located in [`codingSkills/content/humaniserSkill.md`](./codingSkills/content/humaniserSkill.md), this skill enforces authentic, human-written engineering copy:
- **Removes AI Clichés & Fluff**: Eliminates words like *"delve"*, *"tapestry"*, *"testament"*, *"revolutionize"*, and *"seamlessly orchestrate"*.
- **Enforces Active, Crisp Voice**: Replaces vague marketing hype with concrete engineering facts, metrics, and direct sentences.
- **Applies to Portfolio Copy**: Keeps hero subtitles, dossier philosophy, and project descriptions sounding like a real senior engineer wrote them.

**Example AI Prompt:**
> *"Review and humanize the About section copy in `src/components/sections/About.tsx` using `codingSkills/content/humaniserSkill.md`."*

### 4. Visual QA & Screenshot Inspection Workflow
AI agents and developers can inspect UI changes and capture responsive screenshots with zero package installations:
- **Direct Image Review**: AI assistants read image files (PNG, JPG, WebP) directly using vision capabilities.
- **On-the-Fly Screenshot Capture**:
  ```bash
  # Desktop viewport (1440x900)
  npx playwright screenshot --viewport-size="1440,900" http://localhost:5173 preview-desktop.png

  # Mobile viewport (iPhone 14: 390x844)
  npx playwright screenshot --viewport-size="390,844" http://localhost:5173 preview-mobile.png

  # Specific component/section
  npx playwright screenshot --selector="#contact" http://localhost:5173 preview-contact.png
  ```



