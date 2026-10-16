# Coding Skills & Engineering Guidelines

This directory contains self-contained, version-controlled skill guidelines for AI coding assistants (Claude Code, Cursor, Copilot, Codex, Windsurf, etc.) and human contributors.

Because these skills are committed directly into the repository, **no external installations or dependencies are required on new machines**. Any AI assistant can read and follow these files immediately upon cloning the repository.

---

## Skill Directory Structure

```
codingSkills/
├── design/                 # Frontend UI, taste systems, and web interface standards
│   ├── webInterfaceDesignSkill.md    # Vercel Web Interface Guidelines (A11y, layout, rigor)
│   ├── design-taste-frontend.md      # Anti-slop frontend UI generation & taste framework
│   ├── minimalist-ui.md              # Linear-style dark minimalist interface design
│   ├── high-end-visual-design.md     # Premium typography, spatial lighting, and glassmorphism
│   ├── industrial-brutalist-ui.md    # High-contrast, dense, utilitarian design
│   ├── image-to-code.md              # Translating mockup screenshots into pixel-perfect code
│   ├── brandkit.md                   # Brand tokenization, typography pairings, and palettes
│   ├── gpt-taste.md                  # Eliminating AI generic UI patterns
│   └── stitch-design-taste.md        # Stitching multi-system design components
├── review-audit/           # Code reviews, redesign audits, and debt elimination
│   ├── redesign-existing-projects.md # Safe, step-by-step UI refactoring without regressions
│   ├── ponytail-audit.md             # Codebase architecture & maintainability audit
│   ├── ponytail-review.md            # Pull request and code review guidelines
│   ├── ponytail-debt.md              # Technical debt discovery and cleanup
│   ├── ponytail-gain.md              # High-leverage engineering optimization
│   ├── ponytail-help.md              # Ponytail command reference
│   └── full-output-enforcement.md    # Preventing truncated AI code snippets
└── content/                # Content tone, copy editing, and humanization
    └── humaniserSkill.md             # Removing AI fluff and writing crisp, authentic copy
```

---

## How to Use These Skills with AI Assistants

When asking an AI agent to work on the codebase, reference the relevant skill file:

### 1. Web Interface & Accessibility Audit
> *"Review `src/components/sections/Projects.tsx` against `codingSkills/design/webInterfaceDesignSkill.md` for WCAG accessibility and keyboard navigation compliance."*

### 2. UI Generation & Refactoring
> *"Redesign the contact section using the taste parameters in `codingSkills/design/design-taste-frontend.md` while adhering to `DESIGN.md`."*

### 3. Architecture & Technical Debt Audit
> *"Audit our component structure and state management using `codingSkills/review-audit/ponytail-audit.md`."*

### 4. Content & Copywriting Polish
> *"Polish the hero subtitle and about section copy using `codingSkills/content/humaniserSkill.md` to ensure a direct, authentic engineering tone."*

### 5. Mockup / Screenshot Implementation
> *"Read the attached screenshot image and convert it to a React component following `codingSkills/design/image-to-code.md` and `DESIGN.md`."*
