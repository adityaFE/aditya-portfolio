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

## AI Design Skills (Optional)

This repository uses [taste-skill](https://github.com/Leonxlnx/taste-skill) to guide AI coding assistants (Claude Code, Cursor, Codex, Copilot, etc.) with anti-slop, intentional design guidelines for frontend and UI generation.

### Installation on a New Machine

Run this command inside the project root:

```bash
# Install all skills
npx skills add https://github.com/Leonxlnx/taste-skill

# Or install only specific skills (e.g., default v2 frontend taste skill)
npx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend"
```

### Usage with AI Assistants

Once installed, AI coding agents automatically detect and follow the skills when designing or refactoring UI components. Example prompts:

- **Custom UI Generation:** `"Redesign the hero section using design-taste-frontend with DESIGN_VARIANCE=7, MOTION_INTENSITY=5, VISUAL_DENSITY=4"`
- **Minimalist / Linear Aesthetic:** `"Revamp the projects section using minimalist-ui"`
- **Audit & Redesign Existing UI:** `"Audit and improve the contact section using redesign-existing-projects"`

