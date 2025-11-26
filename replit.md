# Treat Caters & Events Website

## Overview
A stunning, professional single-page marketing website for Treat Caters & Events, a premium catering and event management company. The website showcases their services, portfolio, and client testimonials while providing seamless contact options via WhatsApp and email.

## Features
- **Beautiful Hero Section**: Full-screen hero with elegant event imagery and compelling tagline
- **About Us**: Team introduction with stats counter and feature highlights
- **Services**: 6 comprehensive service offerings (Weddings, Corporate, Birthdays, Cultural Events, Custom Menus, Event Planning)
- **Gallery**: Professional photo gallery with lightbox viewing (10 high-quality event and food images)
- **Testimonials**: Client reviews with 5-star ratings
- **Contact Form**: Dual submission options (WhatsApp & Email) with complete validation
- **Smooth Navigation**: Fixed header with smooth scroll to sections
- **Fully Responsive**: Mobile-first design with hamburger menu

## Technology Stack
- **Frontend**: React + TypeScript, Wouter routing, TanStack Query
- **UI Framework**: Shadcn UI + Tailwind CSS
- **Typography**: Playfair Display (headings) + Inter (body)
- **Backend**: Express.js + Nodemailer
- **Validation**: Zod schemas

## Contact Integration
### WhatsApp (Ready to Use)
- Clicking "Send via WhatsApp" opens WhatsApp Web with pre-filled message
- Phone: +91 73562 00789
- Works immediately without configuration

### Email (Requires Setup)
To enable email functionality, set these environment variables:
```bash
EMAIL_USER=treatcater@gmail.com
EMAIL_PASSWORD=your-gmail-app-password
```

**Gmail App Password Setup:**
1. Go to Google Account → Security → 2-Step Verification
2. Scroll to "App passwords" and generate one for "Mail"
3. Use the generated 16-character password as EMAIL_PASSWORD

## External Links
- **YouTube**: https://www.youtube.com/@treat_kitchen/shorts
- **WhatsApp**: wa.me/917356200789
- **Email**: treatcater@gmail.com

## Project Structure
```
client/
  src/
    pages/
      home.tsx              # Main landing page
    components/
      sections/
        hero-section.tsx    # Hero with CTA
        about-section.tsx   # Team & features
        services-section.tsx # Service offerings
        gallery-section.tsx  # Photo gallery with lightbox
        testimonials-section.tsx # Client reviews
        contact-section.tsx  # Contact form
        footer.tsx          # Site footer
server/
  routes.ts               # API endpoints
  email.ts                # Email service
shared/
  schema.ts               # Form validation schemas
```

## Design System
- **Primary Color**: Warm orange (HSL 24 88% 42%) - perfect for catering/events
- **Typography**: Elegant serif headings + clean sans-serif body
- **Spacing**: Consistent 4/6/8/12/16/20/24 spacing units
- **Components**: Elevated cards with hover effects
- **Images**: Professional event photography and food presentations

## Running the Project
The "Start application" workflow runs:
```bash
npm run dev
```
This starts both Express backend (port 5000) and Vite dev server.

## Recent Changes
- **November 26, 2024**: Initial website launch with all core features
  - Generated professional event and food imagery
  - Implemented complete frontend with 7 sections
  - Added dual contact submission (WhatsApp + Email)
  - Tested end-to-end functionality (all 30 test cases passed)

## User Preferences
- Clean, elegant design aesthetic
- Professional but approachable tone
- Mobile-first responsive approach
- Smooth, delightful interactions
- Easy contact options for potential clients
