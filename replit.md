# Idgie's Restaurant Website

A modern, full-stack restaurant website built with React, Express, and PostgreSQL.

## Project Overview

This is a professional restaurant website for "Idgie's Restaurant" located in Delmas, Port-au-Prince, Haiti. The site features bilingual support (French/Creole), online ordering, reservation system, gallery, reviews, and a complete admin panel for content management.

## Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Backend**: Express.js + TypeScript  
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS + Shadcn/ui
- **State Management**: TanStack Query (React Query)
- **Routing**: Wouter (lightweight React router)

## Key Features

- 🌐 Bilingual interface (French primary, Creole secondary)
- 🍽️ Dynamic menu management with categories
- 📸 Image gallery with filtering
- ⭐ Customer review system
- 🛒 Online ordering system with shopping cart
- 📅 Reservation system for tables
- 🗺️ Interactive location map and contact info
- 👨‍💼 Complete admin panel for content management
- 📱 Fully responsive design
- 🎨 Modern UI with smooth animations

## Project Structure

```
├── client/          # React frontend application
│   ├── src/
│   │   ├── components/   # React components
│   │   │   ├── ui/      # Shadcn UI components
│   │   │   ├── OnlineOrdering.tsx    # Shopping cart system
│   │   │   ├── ReservationSystem.tsx # Table booking
│   │   │   ├── LocationMap.tsx       # Maps & directions
│   │   │   └── ...      # Other components
│   │   ├── pages/       # Page components (Admin)
│   │   ├── lib/         # Utilities and configurations
│   │   └── hooks/       # Custom React hooks
├── server/          # Express backend
│   ├── index.ts     # Main server file
│   ├── routes.ts    # API route definitions
│   └── storage.ts   # Database interface
├── shared/          # Shared TypeScript definitions
│   └── schema.ts    # Database schema and types
└── package.json     # Dependencies and scripts
```

## Running the Project

1. Install dependencies: `npm install`
2. Set up PostgreSQL database (DATABASE_URL in environment)
3. Run database migrations: `npm run db:push`
4. Start development server: `npm run dev`
5. Access the site at `http://localhost:5000`
6. Admin panel available at `/admin`

## Database Schema

The application uses PostgreSQL with the following main tables:
- `restaurant_info` - Basic restaurant information
- `menu_items` - Menu items with categories and pricing
- `gallery_images` - Gallery photos with categorization
- `reviews` - Customer reviews and ratings

## User Preferences

- Language: Primarily French with Creole support for Haitian market
- Design: Modern, professional restaurant aesthetic with red accent color
- Focus: Complete restaurant functionality including ordering and reservations
- Target Users: Local customers in Delmas/Port-au-Prince area

## Deployment

The project is configured for Replit deployment using their hosting platform. The Express server serves both the API and the built React application.

## Recent Changes (August 2025)

- ✅ Successfully migrated from Replit Agent environment  
- ✅ Fixed TypeScript execution issues by creating custom tsx wrapper
- ✅ Created PostgreSQL database with all required tables
- ✅ Working backend API with all endpoints functional
- ✅ Implemented complete CRUD API endpoints 
- ✅ Added comprehensive admin panel functionality
- ✅ Enhanced UI with proper French localization
- ✅ Added OnlineOrdering component with shopping cart functionality
- ✅ Added ReservationSystem component for table bookings
- ✅ Added LocationMap component with directions and contact info
- ✅ Updated Header navigation with new sections
- ✅ Populated database with authentic restaurant images and content
- ✅ Fixed gallery image display with proper public folder structure (August 8, 2025)
- ✅ Removed all external Facebook/Instagram URLs, replaced with local images only
- ✅ Clean admin interface with direct file upload functionality only  
- ✅ Fixed Hero, About, and Gallery components to use only local images
- ✅ Completely eliminated all external URLs from the entire codebase

## Complete Feature Analysis

### ✅ Completed Features
1. **Frontend Architecture** - Modern React with TypeScript
2. **Backend API** - Express with PostgreSQL database
3. **Menu System** - Dynamic menu with categories and CMS management
4. **Gallery System** - Image gallery with filtering and admin management
5. **Review System** - Customer reviews with rating display
6. **Online Ordering** - Shopping cart with real-time calculations
7. **Reservation System** - Table booking with form validation
8. **Location & Maps** - Contact info and directions
9. **Admin Panel** - Complete CMS for all content management
10. **Responsive Design** - Mobile-first approach with Tailwind CSS
11. **French Localization** - Proper French content for Haitian market

### 🔄 Areas for Future Enhancement
1. **Payment Integration** - Stripe/PayPal for online orders
2. **Email System** - Automated confirmations for reservations/orders
3. **SMS Notifications** - Twilio integration for order updates
4. **Multi-language** - Add full Creole translation system
5. **Analytics** - Google Analytics integration
6. **SEO Optimization** - Sitemap and structured data
7. **Performance** - Image optimization and lazy loading
8. **Security** - Rate limiting and input sanitization
9. **Testing** - Unit and integration test coverage
10. **Documentation** - API documentation with Swagger