# ✦ VEDAGANITHAM DESIGN SYSTEM ✦  
Landing Page Design System  
Version 1.0 — Production Ready  

---

# 1. DESIGN PHILOSOPHY

VedaGanitham follows a **premium + minimal + playful educational design language**.

### Core Principles:
- Minimal but expressive
- Calm UI with strong hierarchy
- Playful elements for students
- Trust-building visuals for parents
- Conversion-focused layout

### Inspiration Blend:
- Apple (minimal, spacing, typography)
- Notion (clean UI)
- Duolingo (friendly, playful)
- Modern architecture websites (premium feel)

---

# 2. COLOR SYSTEM

## 2.1 Primary Colors

```css
--primary: #FF6B2B;      /* CTA, buttons */
--secondary: #7C3AED;    /* Highlights */
--accent: #FFD93D;       /* Playful elements */

2.2 Neutral Colors (Base UI)
--bg-main: #FAFAF9;
--bg-soft: #F5F5F4;
--white: #FFFFFF;

--text-primary: #0F172A;
--text-secondary: #64748B;

--border: #E5E7EB;
2.3 Usage Rules
90% UI → Neutral colors
10% → Brand colors
Only 1 primary CTA per screen
Avoid overuse of accent colors
3. TYPOGRAPHY SYSTEM
3.1 Font Families
Headings (Premium Feel)
Playfair Display / DM Serif Display
Body (Readable)
Inter / Nunito
3.2 Font Scale
--hero: 64px;
--h1: 40px;
--h2: 28px;
--h3: 22px;
--body: 16px;
--small: 14px;
3.3 Typography Rules
Headings → serif
Body → sans-serif
Max line width → 600px
Line height:
Headings: 1.2
Body: 1.6
4. SPACING SYSTEM

Based on 8px grid:

--space-xs: 8px;
--space-sm: 16px;
--space-md: 24px;
--space-lg: 32px;
--space-xl: 64px;
Section Spacing
Vertical padding: 80px
Container padding: 20px
5. LAYOUT SYSTEM
5.1 Container
max-width: 1200px;
margin: 0 auto;
padding: 0 20px;
5.2 Grid System
Desktop → 12 columns
Tablet → 6 columns
Mobile → 1 column
5.3 Section Structure

Each section includes:

Title
Description
Content block
CTA (optional)
6. COMPONENT SYSTEM
6.1 BUTTONS
Primary Button
background: var(--primary);
color: white;
padding: 14px 24px;
border-radius: 999px;
font-weight: 500;
Secondary Button
border: 1px solid var(--border);
background: transparent;
color: var(--text-primary);
6.2 CARDS
background: white;
border-radius: 24px;
padding: 24px;
box-shadow: 0 10px 30px rgba(0,0,0,0.05);
Card Variants:
Course cards
Testimonial cards
Blog cards
6.3 INPUT FIELDS
padding: 12px 16px;
border-radius: 12px;
border: 1px solid var(--border);
6.4 NAVBAR
Sticky top
Transparent → solid on scroll
Items:
Logo
Links
CTA button
6.5 BADGES
padding: 4px 10px;
border-radius: 999px;
font-size: 12px;
background: var(--bg-soft);
7. LANDING PAGE STRUCTURE
7.1 HERO SECTION
Layout:
Center aligned
Large serif heading
Subtext
2 CTA buttons
Visual:
Minimal math-themed background
Soft gradient overlay
7.2 COURSE SECTION
4 cards grid
Each card includes:
Title
Description
Illustration
CTA
7.3 DEMO VIDEO SECTION
1 large featured video
2–3 smaller previews
7.4 HOW IT WORKS

Steps:

Discover course
Book demo
Attend session
Improve skills

Use illustration-based storytelling

7.5 TESTIMONIALS
Carousel layout
Cards with:
Name
Rating
Quote
7.6 CTA SECTION
Full-width section
Strong message
Primary CTA button
8. ANIMATION SYSTEM
8.1 Micro Interactions
Button hover → scale 1.05
Card hover → lift effect
Input focus → border highlight
8.2 Scroll Animations
Fade-in
Slide-up
Delay stagger
8.3 Hero Animation
Floating math symbols
Subtle parallax effect
9. VISUAL STYLE
9.1 Image Style
Clean
Minimal
Soft lighting
Educational context
9.2 Illustration Style
Flat
Pastel colors
Friendly characters
Minimal detail
9.3 Consistency Rule

Use ONE style across:

Either realistic images
OR illustrations

Recommended:
→ Illustration + minimal UI

10. AI IMAGE PROMPTS
Hero Background
minimal modern educational background, vedic mathematics theme, indian mathematical symbols, clean white background, soft shadows, premium minimal style
Course Illustration
flat illustration of student learning math, pastel colors, modern vector style, clean minimal background
Demo Thumbnail
student studying happily, clean classroom, soft lighting, minimal aesthetic, educational theme
How It Works
minimal black and white illustration, step by step process, simple characters, clean lines
Testimonials
happy indian student and parent smiling, warm tone, soft lighting, minimal background
11. RESPONSIVE DESIGN
Breakpoints
mobile: 320px–767px
tablet: 768px–1023px
desktop: 1024px+
Rules
Mobile → single column
Tablet → 2 columns
Desktop → full grid
12. PERFORMANCE GUIDELINES
Use WebP images
Lazy load images
Optimize fonts
Avoid heavy animations
13. FINAL NOTES

This design system prioritizes:

Simplicity
Clarity
Conversion
Premium feel

Avoid:

Over-design
Too many colors
Heavy UI clutter
END OF DESIGN SYSTEM