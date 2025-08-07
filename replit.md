# Idgie's Restaurant Website

## Project Overview
A modern, responsive restaurant website for Idgie's Restaurant located in Delmas, Port-au-Prince. The website showcases both the fast-food and rooftop dining experiences, featuring an elegant design with smooth animations and mobile-first approach.

## Project Architecture
- **Frontend**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Lucide React for consistent iconography
- **Backend**: Express.js with TypeScript
- **Build Tool**: Vite for fast development and building
- **Components**: Modular component architecture

## Features
- Single-page application with smooth scrolling navigation
- Responsive design optimized for mobile and desktop
- Restaurant sections: Hero, About, Menu, Gallery, Reviews, Contact
- French language content for local audience
- SEO optimized with proper meta tags and Open Graph
- Custom scrollbar styling and smooth animations

## Development Guidelines
- Components use modern React patterns (no explicit React imports)
- TypeScript for type safety
- Tailwind CSS for styling with CSS custom properties
- Mobile-first responsive design approach
- Semantic HTML structure for accessibility

## File Structure
```
├── client/
│   ├── src/
│   │   ├── components/        # React components
│   │   ├── App.tsx           # Main app component
│   │   ├── main.tsx          # React entry point
│   │   └── index.css         # Global styles
│   └── index.html            # HTML template
├── server/                   # Express backend
├── shared/                   # Shared types and schemas
└── vite.config.ts           # Vite configuration
```

## Recent Changes
- **Migration from Bolt to Replit** (August 7, 2025)
  - Removed explicit React imports from all components
  - Updated routing to use wouter
  - Added comprehensive CSS custom properties
  - Enhanced SEO meta tags and Open Graph support
  - Fixed TypeScript compatibility issues
  - Configured proper Replit development environment

## User Preferences
- Single-page restaurant website design
- French language content
- Mobile-first responsive approach
- Professional, elegant styling
- Fast loading and smooth user experience

## Technical Notes
- The project uses Replit's configured Vite setup for development
- Server runs on port 5000 with both API and client serving
- No database required - static content website
- All images are hosted externally (Pexels)