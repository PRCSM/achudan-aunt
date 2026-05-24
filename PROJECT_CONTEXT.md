# ✦ VedaGanitham — Complete Project Context & Architecture Documentation ✦

Welcome to the official developer documentation for the **VedaGanitham** web platform. This document serves as a comprehensive reference for the codebase, architecture, technical decisions, and current features of this high-converting, premium Vedic Mathematics educational marketing and lead-generation portal.

---

## 1. Project Overview & Vision

**VedaGanitham** is a modern, high-converting marketing and lead-generation platform designed to showcase Vedic Mathematics courses, build parent/student trust, and capture inquiries. 

*   **The Problem:** The client's previous website (built on Google Sites) was static, visually dated, and failed to engage users or convert them into registered students.
*   **The Solution:** A premium, modern web application featuring curated color palettes, elegant animations, smooth transitions, dynamic storytelling layouts, and native mobile optimization.
*   **LMS vs. Lead Gen:** This is **not** a Learning Management System (LMS). All actual courses are hosted externally (via Zoom/Google Meet), and this portal's primary job is to show the *value* of the courses and drive sign-ups via **WhatsApp** and **Free Demo Bookings**.

---

## 2. Technical Stack

| Technology | Purpose | Key Details |
| :--- | :--- | :--- |
| **Next.js 15+** | Core Web Framework | Built using the new **App Router** for fast page transitions, file-based routing, and layout optimizations. |
| **React 19** | View Library | Leverages Concurrent Rendering and hooks (like `React.use()` for Promise unwrapping). |
| **TypeScript** | Type Safety | Full type safety across constants, layouts, and custom interactive components. |
| **Tailwind CSS** | Styling | Premium, tailored utility styling matching a custom design system token sheet. |
| **Framer Motion** | Animation Engine | Micro-interactions, word-by-word storytelling text reveals, card lifts, and staggered fades. |
| **CSS Scroll Snapping** | Viewport Snapping | Pure native scroll snapping on the immersive course detail view (`snap-y snap-mandatory`). |

---

## 3. Directory Structure & Codebase Tour

```bash
d:\projects\achudan-aunt\
├── docs/                      # Original specifications (PRD & landing page layout guidelines)
├── public/                    # Static assets, branding graphics, and illustration images
├── src/
│   ├── app/                   # Next.js App Router (Layouts & Pages)
│   │   ├── courses/           # Main courses landing and dynamic route nested fold
│   │   │   ├── [id]/          # Dynamic, immersive, snapped course storytelling route
│   │   │   └── page.tsx       # Course grid view with custom vertical column flow
│   │   ├── globals.css        # Core custom styling, design tokens, and color system
│   │   ├── layout.tsx         # Shared shell wrapper layout (Navbar, Footer, WhatsApp Button)
│   │   └── page.tsx           # Home landing page with conversion funnels
│   ├── components/            # Reusable UI & Page Sections
│   │   ├── layout/            # Navbar, Footer, and Floating WhatsApp badges
│   │   ├── sections/          # Modular landing sections (Hero, Testimonials, Form, etc.)
│   │   └── ui/                # Core Design Tokens (Card, Button, Badge, Input, Section)
│   ├── constants/             # Dynamic central content management (course details, metadata)
│   │   └── index.ts
│   ├── hooks/                 # Custom React state hooks
│   └── lib/                   # Animation curves, easing profiles, and configuration scripts
│       └── animations.ts
└── tsconfig.json              # TypeScript compilation setup
```

---

## 4. Key Pages & Features

### 4.1. Global Shell Layout (`src/app/layout.tsx`)
A unified shell wrapping all routes automatically:
*   **Sticky Navbar (`Navbar.tsx`):** Seamless floating layout with desktop navigation and an animated mobile burger drawer.
*   **Footer (`Footer.tsx`):** Sophisticated, Space Grotesk-themed layout with fast links, quick contact coordinates, and newsletter aesthetics.
*   **WhatsApp Overlay (`WhatsAppButton.tsx`):** A persistent, bouncy floating badge triggering direct communication with pre-filled context matching the current user path.

### 4.2. Main Landing Page (`src/app/page.tsx`)
An elegant single-page sales funnel featuring:
*   **Hero Section:** High-impact text blocks alongside mathematical floating elements inviting the user to book a trial.
*   **How it Works Section:** Step-by-step educational flow representing the math journey.
*   **Videos Section:** Video grid hosting highly educational previews via YouTube hooks.
*   **Demo Form Section:** Secure interactive form allowing direct submission of client info for demo scheduling.
*   **Testimonials Carousel:** Rich user quotes, grades, and sliding rating stars validating the platform's efficiency.

### 4.3. The Course Hub Page (`src/app/courses/page.tsx`)
A dedicated overview showing all 4 main learning tiers:
*   **Double-Column Flex Masonry:** Solves traditional grid-stretching issues! When a user expands a course syllabus card, only the elements in *that specific column* slide down, maintaining an exceptionally clean layout without empty white gaps under adjacent cards.
*   **Dynamic Syllabus Drawers:** Clickable panels revealing in-depth subject points, sessions, and targeted age-groups.
*   **Pre-Wired WhatsApp Enquiries:** Direct enrollment calls generating instant WhatsApp context (e.g., `"I am interested in the Advanced course."`).

### 4.4. Immersive Course Detail Route (`src/app/courses/[id]/page.tsx`)
An advanced **full-screen, cinematic storytelling experience** for a single course tier:
*   **Scroll Snapping:** Native CSS scroll snapping locks each step of the journey to exactly `100vh`, forcing focus and reducing cognitive overload.
*   **Word-by-Word Progressive Reveal:** Leverages custom `<StoryText />` with Framer Motion spring delays to animate text elements on viewport entry.
*   **Visual Roadmap Journey:** A vertical progress-bar timeline charting course milestones from basic foundations to expert certifications.
*   **Custom SVG underlined transformation hooks:** Micro-details that elevate user engagement and emphasize value.

---

## 5. Architectural & Design Decisions

1.  **Immersive Storytelling vs. Standard Scrolling:**
    Instead of boring long-scroll detail pages, the `/courses/[id]` route limits focus to one concept at a time per full screen. This matches modern luxury/software landing pages (e.g., Apple product tours), framing math as an exciting discovery journey.
2.  **No High-Weight Scroll Libraries:**
    Rather than importing high-weight frameworks like GSAP ScrollTrigger, the project achieves buttery-smooth 60fps animations entirely using Tailwind's native `snap-y snap-mandatory` with light Framer Motion `whileInView` hooks. This ensures exceptional responsiveness and low Bundle-size on low-end mobile devices.
3.  **Next.js 15 Dynamic Async Safety:**
    As of Next.js 15, route parameters are loaded asynchronously. The dynamic routes in VedaGanitham explicitly handle `params` as a `Promise` and safely unwrap them using React's concurrent `React.use(params)` wrapper.

---

## 6. How to Run & Build

### Development Server
Start the hot-reloading development server locally:
```bash
npm run dev
```

### Production Build
Validate compile integrity, strict TypeScript checking, and bundle optimization:
```bash
npm run build
```
Once built successfully, test the optimized static assets:
```bash
npm run start
```

---

## 7. UI Component Specifications & Design Tokens

VedaGanitham relies on a custom-designed, atomic UI component library under `src/components/ui/` to ensure visual hierarchy and reuse:

*   **Badge (`Badge.tsx`):** A compact status badge supporting `primary`, `secondary`, and `outline` variations, matching color-pair variables (e.g., matching text/border combinations).
*   **Button (`Button.tsx`):** Flexible button component supporting custom motion states via Framer Motion, anchor wrapping via `href`, width behaviors, and sizes (`sm`, `md`, `lg`).
*   **Card (`Card.tsx`):** The building block of content. It implements our premium shadow design and the `cardHover` lift transition. It features custom padding variables including a `none` setting for overlay wrappers.
*   **Container (`Container.tsx`):** Sets the global layout grids and constraints, standardizing responsive page width (`max-w-[1200px]`) and padding gutter spaces.
*   **Input (`Input.tsx`):** Pre-validated, customized input/textarea forms using custom theme border-radius variables (`--radius-md`) and active highlight ring states.
*   **Section (`Section.tsx`):** Establishes spacing consistency using standard vertical padding tokens (`--section-py`), and standardizes page titles and description layout formats.

---

## 8. Modular Page Sections Overview

### 8.1. Marketing Landing Sections (`src/components/sections/`)
*   **HeroSection:** Leverages clean typography, clear CTAs, and a floating visual element to immediately convey the platform's purpose.
*   **AboutSection:** Focuses on story-driven presentation, introducing the founder, core values, and teaching methodology.
*   **HowItWorksSection:** Displays the step-by-step roadmap for new students using clear layout paths.
*   **CourseSection:** Displays dynamic course tier cards in a clean overview style.
*   **VideoSection:** Houses embedded video lessons via responsive wrappers, with level indicator badges.
*   **DemoFormSection:** A conversion-focused contact component with pre-validated input boxes.
*   **TestimonialsSection:** Smooth carousel slider displaying ratings, user reviews, and course context.
*   **CTASection:** The final conversion strip at the bottom of standard marketing paths.

---

## 9. SEO & Metadata Integration

VedaGanitham implements robust search engine optimization standards across routes:
*   **Shared Root Layout (`src/app/layout.tsx`):** Declares site metadata configurations including base keywords, descriptions, titles, and viewport parameters.
*   **Route Metadata:** Individual static and dynamic routes declare customized `Metadata` configurations (e.g., dynamic page titles reflecting specific dynamic course topics).
*   **Semantic Structure:** Restricts header tiers to a single main `<h1>` per page, ensuring clear document outline validation for crawling search engines.

---

## 10. Future Development Roadmap & Next Steps

This project is currently optimized as a marketing and conversion funnel. Developers inheriting the repository should follow this plan for scaling to full production functionality:

### Phase 1: Authentication Hookup
*   **Task:** Integrate Firebase Auth or Supabase Auth.
*   **Scope:** Set up basic sign-up/login processes for both site admins and prospective student profiles. Add middleware dynamic router protection for the `/admin` workspace.

### Phase 2: Database Schema Implementation
*   **Task:** Hook up Firestore or PostgreSQL via Prisma/Supabase Client.
*   **Tables/Collections required:**
    *   `demoBookings`: Stores booking submissions (`name`, `contact`, `course`, `preferredDate`, `createdAt`).
    *   `inquiries`: Stores standard contact form details (`name`, `email`, `phone`, `message`, `createdAt`).
    *   `courses`: Dynamic syllabus content and details editable via CMS.
    *   `testimonials`: Customer reviews, ratings, and school grades.
    *   `faqs`: Dynamic accordion questions and categorization.

### Phase 3: Administrative Content Management System (CMS)
*   **Task:** Build out the `/admin` dashboard routes.
*   **Details:** Add form views, state lists, and mutation forms to allow administrators to:
    *   Add, edit, or delete dynamic course tiers.
    *   Modify and order the FAQs list.
    *   Manage user demo registrations and send email confirmations.
    *   Add testimonials and toggle highlight status on the landing page carousel.

### Phase 4: Dynamic Client-Side Data Loading
*   **Task:** Replace static lists in constants with server database fetch calls.
*   **Scope:** Use Next.js Server Components (`async/await` fetch operations) with Revalidation values (e.g., `ISR` revalidate tag hooks) to dynamically populate FAQs, courses, and video previews.

---

## 11. Current Project Status & Milestones

*   **Dynamic Course Page Layout (Double-column Flex Masonry):** Complete and verified. Prevents empty row gaps on card expansions.
*   **Storytelling Course Detail Routing (Scroll-snap Viewports):** Complete and verified. Lock snapping works at a 100vh scale.
*   **Next 15 Dynamic Async Safety:** Complete. Safely unwraps Dynamic Route promises via standard React hooks.
*   **TypeScript & Compilation State:** Active and stable. 0 Errors found across code checks and builds.

