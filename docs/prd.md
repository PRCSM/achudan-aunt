# ✦ VEDAGANITHAM ✦  
Vedic Mathematics Learning Platform (Lead Generation System)  
Product Requirements Document (PRD)  
Version 3.0 — Production-Ready Specification  

---

# 1. PRODUCT OVERVIEW

VedaGanitham is a web-based educational platform designed to:

- Showcase Vedic Mathematics courses
- Provide demo video previews
- Convert visitors into demo bookings
- Enable communication via WhatsApp
- Allow admin to manage content dynamically

The platform is a **marketing + lead generation system**, not a learning management system.

All actual classes will be conducted externally via **Google Meet or similar platforms**.

---

# 2. PRODUCT MODULES

The system consists of three primary layers:

1. Public Marketing Layer (Website)
2. Lead Generation Layer (Forms + WhatsApp)
3. Admin Management Layer (CMS)

---

# 3. MODULE A — PUBLIC WEBSITE

Routes:
- `/`
- `/courses`
- `/videos`
- `/blog`
- `/testimonials`
- `/faq`
- `/about`
- `/contact`

Accessible without authentication.

---

## 3.1 PURPOSE

- Educate users about courses
- Build trust (testimonials, content)
- Showcase demo videos
- Convert users into leads

---

## 3.2 HOME PAGE (`/`)

### Sections

#### Hero Section
- Headline + subheadline
- Primary CTA: Book Free Demo
- Secondary CTA: Explore Courses
- Animated math-themed background

---

#### Course Overview Section
- 4 course tiers:
  - Basic
  - Intermediate
  - Advanced
  - Teacher Training
- Each card includes:
  - Title
  - Description
  - CTA

---

#### Demo Video Preview Section
- 2–4 featured demo videos
- YouTube embed
- CTA: View All Videos

---

#### Free Demo Form Section
Fields:
- Name
- Phone/Email
- Course Interest
- Preferred Date

Behavior:
- Form validation
- Save to database
- Success message

---

#### Testimonials Section
- Carousel layout
- Student name, rating, quote

---

#### Blog Preview Section (Optional)
- Latest 3 blog posts

---

## 3.3 COURSES PAGE (`/courses`)

### Features
- Course listing (4 tiers)
- Expandable details:
  - Topics
  - Benefits
- CTA:
  - Book Demo
  - WhatsApp

---

## 3.4 VIDEO PAGE (`/videos`)

### Features
- Video grid layout
- Fields:
  - Title
  - Level
  - Duration
  - YouTube URL
- Optional filtering by level

Constraints:
- No login required
- No progress tracking

---

## 3.5 BLOG MODULE (`/blog`)

### Features
- Blog listing
- Category filtering
- Search functionality
- Single post page
- SEO metadata support

---

## 3.6 TESTIMONIALS (`/testimonials`)

- Grid layout
- Fields:
  - Name
  - Grade
  - Rating
  - Quote

---

## 3.7 FAQ PAGE (`/faq`)

- Accordion layout
- Categories:
  - General
  - Courses
  - Fees
  - Training
- Search functionality

---

## 3.8 ABOUT PAGE (`/about`)

- Founder story
- Mission & vision
- Achievements
- Educational explanation

---

## 3.9 CONTACT PAGE (`/contact`)

### Features
- Contact form
- Google Maps embed
- Email + phone display
- Social links

---

## 3.10 WHATSAPP SYSTEM

- Floating button on all pages
- Opens WhatsApp with pre-filled message

---

# 4. MODULE B — LEAD GENERATION SYSTEM

---

## 4.1 DEMO BOOKING FLOW

Trigger:
- Form submission OR WhatsApp click

### Steps

1. User fills form
2. Data validated
3. Data stored in database
4. Success message displayed
5. Optional email sent

---

## 4.2 DATA STRUCTURE
demoBookings/
bookingId/
name: string
contact: string
course: string
preferredDate: string
createdAt: timestamp


---

## 4.3 CONTACT FORM FLOW
inquiries/
inquiryId/
name
email
phone
message
createdAt

---

# 5. MODULE C — ADMIN PANEL

Route: `/admin`

Authentication required.

---

## 5.1 AUTHENTICATION

- Email + password login
- Protected routes

---

## 5.2 ADMIN DASHBOARD

Overview:
- Total bookings
- Total blogs
- Total videos

---

## 5.3 BLOG MANAGER

Capabilities:
- Create post
- Edit post
- Delete post

Fields:
- Title
- Content (rich text)
- Category
- Image
- SEO fields

---

## 5.4 VIDEO MANAGER

Capabilities:
- Add video
- Edit video
- Delete video

Fields:
- Title
- Level
- YouTube URL

---

## 5.5 TESTIMONIAL MANAGER

- Add/edit/delete testimonials
- Toggle visibility

---

## 5.6 FAQ MANAGER

- Add/edit/delete FAQs
- Categorize
- Reorder

---

## 5.7 BOOKING DASHBOARD

- View all demo bookings
- Fields:
  - Name
  - Contact
  - Course
  - Date

---

## 5.8 INQUIRY LOGS

- View all contact submissions
- Optional export

---

# 6. DATABASE ARCHITECTURE

## Collections

### demoBookings
### inquiries
### blogs
### videos
### testimonials
### faqs

---

# 7. TECHNICAL ARCHITECTURE

Frontend:
- Next.js (App Router)
- TypeScript
- TailwindCSS
- Framer Motion

Backend:
- Firebase / Supabase

Database:
- Firestore / PostgreSQL

Hosting:
- Vercel

---

# 8. NON-FUNCTIONAL REQUIREMENTS

Performance:
- Page load < 2.5s

Security:
- HTTPS
- Input validation

Scalability:
- Support 1000+ users

Accessibility:
- WCAG AA

---

# 9. SEO REQUIREMENTS

- Meta tags per page
- Sitemap
- OpenGraph

---

# 10. DEVELOPMENT PHASES

Phase 1:
- Landing pages
- Demo form

Phase 2:
- Admin panel
- Video system

Phase 3:
- Blog + FAQ

Phase 4:
- Optimization + SEO

---

# 11. FUTURE ENHANCEMENTS

- Payment system
- LMS features
- Mobile app
- Analytics dashboard

---

# 12. FINAL NOTES

This system prioritizes:

- Conversion
- Simplicity
- Performance

Not complexity.

---

END OF DOCUMENT