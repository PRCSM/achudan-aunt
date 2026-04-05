/* ============================================
   ✦ VEDAGANITHAM — APP CONSTANTS ✦
   ============================================ */

export const SITE_CONFIG = {
  name: "VedaGanitham",
  tagline: "Vedic Mathematics Learning Platform",
  description:
    "Discover the ancient power of Vedic Mathematics. Simplify calculations, sharpen your mind, and excel in math with our expertly designed courses.",
  url: "https://vedaganitham.com",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Videos", href: "/videos" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const WHATSAPP_CONFIG = {
  /** Replace with actual WhatsApp number (with country code, no +) */
  number: "919876543210",
  defaultMessage: "Hi, I am interested in VedaGanitham courses. Can I know more?",
} as const;

export const COURSE_TIERS = [
  {
    id: "basic",
    title: "Basic",
    description: "Foundation of Vedic Mathematics for beginners and young learners.",
  },
  {
    id: "intermediate",
    title: "Intermediate",
    description: "Build speed and accuracy with advanced Vedic techniques.",
  },
  {
    id: "advanced",
    title: "Advanced",
    description: "Master complex calculations and competition-level problem solving.",
  },
  {
    id: "teacher-training",
    title: "Teacher Training",
    description: "Learn to teach Vedic Mathematics professionally and inspire students.",
  },
] as const;
