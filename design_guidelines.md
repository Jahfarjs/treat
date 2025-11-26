# Design Guidelines for Treat Caters & Events

## Design Approach
**Reference-Based Approach** - Drawing inspiration from high-end hospitality and event platforms (Airbnb, The Knot, luxury restaurant websites) where visual storytelling and emotional connection drive engagement. This catering/events website requires visual richness to showcase food presentations and event atmospheres.

## Typography System
- **Primary Font**: Playfair Display (Google Fonts) - Elegant serif for headings, conveys sophistication
- **Secondary Font**: Inter (Google Fonts) - Clean sans-serif for body text, ensures readability
- **Hierarchy**:
  - Hero headline: text-5xl to text-7xl, font-bold
  - Section headings: text-3xl to text-4xl, font-semibold
  - Subheadings: text-xl to text-2xl, font-medium
  - Body text: text-base to text-lg, font-normal
  - Captions: text-sm, font-light

## Layout System
**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-16 (mobile), py-24 (desktop)
- Component spacing: gap-6 to gap-8
- Container: max-w-7xl with px-4 to px-8

## Page Structure & Components

### 1. Hero Section (Full-height viewport)
- **Layout**: Full-screen background image with centered content overlay
- **Content**: Company logo/name, compelling tagline ("Creating Unforgettable Moments"), primary CTA button with blurred background
- **Image**: High-quality event setup or beautifully plated catering spread
- **Height**: min-h-screen with subtle overlay gradient for text readability

### 2. About Us Section
- **Layout**: Two-column split (lg:grid-cols-2) with image on left, content on right
- **Content**: Company story, years of experience, team expertise, mission statement
- **Supporting Elements**: Stats counter (events completed, satisfied clients, team size), founder/team photo
- **Image**: Professional team photo or behind-the-scenes preparation

### 3. Services Section
- **Layout**: 3-column grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- **Service Cards**: Each card includes icon, service name, detailed description, hover elevation effect
- **Services to Feature**: Wedding Catering, Corporate Events, Birthday Parties, Cultural Celebrations, Custom Menus, Full Event Planning
- **Enrichment**: Each card has decorative icon, pricing range indicator, "Learn More" link

### 4. Gallery Section
- **Layout**: Masonry-style grid (2 columns mobile, 3-4 columns desktop) showcasing varied aspect ratios
- **Content**: Mix of food presentations, decorated venues, events in action, happy clients
- **Images**: 12-16 high-quality photos with hover zoom effect, lightbox functionality
- **Categories**: Food & Catering, Event Setups, Celebrations (filterable tabs optional)

### 5. Testimonials Section
- **Layout**: 3-column grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- **Testimonial Cards**: Client photo (circular), quote, client name, event type, star rating
- **Content**: 6-9 authentic testimonials with specific event details
- **Enrichment**: Overall rating display at section top, "Join 500+ Happy Clients" social proof

### 6. Contact Section
- **Layout**: Two-column (lg:grid-cols-2) - Form on left, contact info + map on right
- **Form Fields**: 
  - Name (required)
  - Email (required)
  - Phone (required)
  - Event Type (dropdown: Wedding, Corporate, Birthday, Other)
  - Event Date (date picker)
  - Guest Count (number input)
  - Message (textarea)
  - Submit button: "Send Message via WhatsApp" or "Send Email"
- **Contact Info Panel**: Phone number, email, business hours, office address, YouTube channel link with icon
- **Enrichment**: Response time promise ("We respond within 2 hours"), alternative contact methods, embedded map or location image

### 7. Footer
- **Layout**: Three-column grid with company info, quick links, social/contact
- **Column 1**: Company logo, brief tagline, copyright
- **Column 2**: Quick Links (Services, Gallery, About, Contact, YouTube Channel)
- **Column 3**: Contact details, social media icons (WhatsApp, Email, YouTube), newsletter signup
- **Newsletter**: Simple email input with "Stay Updated" CTA
- **Trust Elements**: "Licensed & Insured" badge, "100% Satisfaction Guaranteed"

## Component Specifications

### Buttons
- Primary CTA: Rounded (rounded-full or rounded-lg), generous padding (px-8 py-4), bold text
- Blurred background for buttons over images: backdrop-blur-md with semi-transparent background
- Secondary buttons: Outline style with hover fill

### Cards
- Elevation: shadow-md base, shadow-xl on hover
- Rounded corners: rounded-xl for modern feel
- Internal padding: p-6 to p-8
- Smooth transitions on all interactive states

### Icons
- **Library**: Heroicons (via CDN)
- Usage: Service icons, social media, contact methods, navigation
- Size: w-12 h-12 for feature icons, w-6 h-6 for utility icons

## Images Strategy
**Hero**: Large, professional event photo (elegant table setting or food display)
**About**: Team photo or kitchen/preparation scene
**Gallery**: 12-16 diverse event and food images showcasing range
**Testimonials**: Client headshots (can use placeholder if unavailable)
**Services**: Decorative icons (no photos in cards to maintain speed)

## Animation Guidelines
- Minimal, purposeful animations only
- Scroll-triggered fade-in for sections (subtle)
- Hover effects: Scale (1.02-1.05), shadow elevation, slight color shift
- No distracting continuous animations
- Page transitions: Simple fade

## Responsive Behavior
- Mobile-first approach
- Navigation: Hamburger menu on mobile, horizontal on desktop
- Grid collapse: 3-col → 2-col → 1-col at breakpoints
- Hero text: Reduce font sizes 30-40% on mobile
- Gallery: 2 columns max on mobile for image prominence