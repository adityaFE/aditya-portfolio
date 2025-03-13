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
