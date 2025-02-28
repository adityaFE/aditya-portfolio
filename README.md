# 3D Enhanced Portfolio Website

A modern, responsive portfolio website featuring interactive 3D elements, animations, and comprehensive personal branding.

## Project Structure
```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── sections/  # Page sections
│   │   │   ├── ui/       # UI components
│   │   │   └── ...       # Other components
│   │   ├── hooks/        # Custom React hooks
│   │   ├── lib/          # Utility functions
│   │   ├── pages/        # Page components
│   │   └── App.tsx       # Root component
├── server/                # Backend Express application
│   ├── routes.ts         # API routes
│   ├── storage.ts        # Database operations
│   └── index.ts          # Server entry point
└── shared/               # Shared TypeScript types
    └── schema.ts         # Database schema and types
```

## Prerequisites
- Node.js (v18+)
- PostgreSQL database
- Git

## Local Development Setup

1. **Clone the repository:**
```bash
git clone <your-repo-url>
cd portfolio-website
```

2. **Install dependencies:**
```bash
npm install
```

3. **Environment Variables Setup:**

Create a `.env` file in the root directory:
```env
# Database Configuration
DATABASE_URL=postgresql://user:password@localhost:5432/portfolio

# Server Configuration
PORT=5000
NODE_ENV=development

# Frontend Configuration
VITE_API_URL=http://localhost:5000
```

4. **Database Setup:**
```bash
npx drizzle-kit push:pg
```

5. **Start Development Server:**
```bash
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend: http://localhost:5000

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
   - Add the following variables:
     ```
     VITE_API_URL=https://your-backend-url.com
     ```

4. **Deploy using Netlify CLI:**
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

### Backend Deployment (Railway)

1. **Create a new project on Railway**
   - Go to https://railway.app
   - Create a new project
   - Choose "Deploy from GitHub repo"

2. **Configure environment variables:**
   - Go to project settings
   - Add the following variables:
     ```
     DATABASE_URL=your-postgresql-url
     NODE_ENV=production
     PORT=5000
     ```

3. **Deploy using Railway CLI:**
```bash
npm install -g @railway/cli
railway login
railway up
```

## Development Commands

```bash
# Start development server
npm run dev

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

## Customization

1. **Theme Colors:**
   Edit `theme.json` to modify the color scheme:
   ```json
   {
     "variant": "vibrant",
     "primary": "hsl(250, 95%, 60%)",
     "appearance": "system",
     "radius": 0.75,
     "background": "hsl(240, 20%, 97%)",
     "foreground": "hsl(240, 10%, 3.9%)",
     "card": "hsl(240, 30%, 96%)",
     "popover": "hsl(240, 30%, 96%)",
     "primary-foreground": "hsl(0, 0%, 98%)"
   }
   ```

2. **Personal Information:**
   - Update social links in `src/components/SocialButtons.tsx`
   - Modify projects in `src/components/sections/Projects.tsx`
   - Update experience in `src/components/sections/Experience.tsx`

3. **Content:**
   - Hero section text in `src/components/sections/Hero.tsx`
   - About section content in `src/components/sections/About.tsx`
   - Skills in `src/components/sections/Skills.tsx`

4. **3D Elements:**
   - Modify 3D scenes in `src/components/ThreeScene.tsx`
   - Adjust project showcases in `src/components/ProjectShowcase3D.tsx`

## Mobile Responsiveness

The website is responsive down to 300px width. Key breakpoints:
- Mobile: 300px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

## Performance Optimization

1. **Image Optimization:**
   - Use WebP format for images
   - Implement lazy loading
   - Optimize 3D models and textures

2. **Code Splitting:**
   - Route-based code splitting
   - Lazy loading of heavy components

## Troubleshooting

1. **Database Connection Issues:**
   - Verify DATABASE_URL format
   - Check database credentials
   - Ensure PostgreSQL is running

2. **Build Errors:**
   - Clear node_modules and reinstall
   - Check TypeScript errors
   - Verify environment variables

3. **3D Performance Issues:**
   - Reduce polygon count in 3D models
   - Optimize lighting and shadows
   - Implement level of detail (LOD)

## License

MIT License - feel free to use this project for your own portfolio!