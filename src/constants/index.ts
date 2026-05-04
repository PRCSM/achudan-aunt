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
    title: "Basic Level",
    subtitle: "Introduction to Vedic Math",
    description: "Foundation of Vedic Mathematics for beginners and young learners. Learn to simplify calculations and build confidence.",
    icon: "📐",
    color: "from-accent to-accent-dark",
    ageGroup: "Age 9+",
    duration: "12 Sessions",
    highlights: [
      "Introduction to Vedic Math system",
      "Simple math tricks with basic operations",
      "Multiplication tables up to thousand base",
      "Practice worksheets with 1000+ sums",
      "Interactive Vedic Math games",
    ],
  },
  {
    id: "intermediate",
    title: "Intermediate",
    subtitle: "Speed and Accuracy",
    description: "Build speed and accuracy with advanced Vedic techniques. Turn complex problems into simpler patterns.",
    icon: "🧮",
    color: "from-[#A8E6CF] to-[#7CB342]",
    ageGroup: "Age 11+",
    duration: "16 Sessions",
    highlights: [
      "Advanced multiplication and division",
      "Mental math for multi-digit numbers",
      "Fractions and decimals simplification",
      "Speed tests and accuracy building",
      "Weekly performance tracking",
    ],
  },
  {
    id: "advanced",
    title: "Advanced",
    subtitle: "Competition Ready",
    description: "Master complex calculations and competition-level problem solving. Ideal for competitive exam aspirants.",
    icon: "🎯",
    color: "from-primary to-primary-hover",
    ageGroup: "Age 14+",
    duration: "20 Sessions",
    highlights: [
      "Algebra and geometry shortcuts",
      "Square roots and cube roots mentally",
      "Competitive exam specific techniques",
      "Complex problem solving strategies",
      "Mock tests and time management",
    ],
  },
  {
    id: "teacher-training",
    title: "Teacher Training",
    subtitle: "Become an Expert",
    description: "Learn to teach Vedic Mathematics professionally. Turn ancient tricks into everyday super-powers for your students.",
    icon: "🎓",
    color: "from-[#FFB3B3] to-[#FF5252]",
    ageGroup: "Adults",
    duration: "24 Sessions",
    highlights: [
      "Comprehensive Vedic Math curriculum",
      "Effective teaching methodologies",
      "Classroom engagement strategies",
      "Certification upon completion",
      "Ongoing trainer support",
    ],
  },
] as const;

export const COURSE_FAQS = [
  {
    question: "Who can join this online course?",
    answer: "Our online classes are open to students of age above 9 yrs, including school students, competitive exam aspirants, and anyone interested in improving calculation speed.",
  },
  {
    question: "What is the course duration?",
    answer: "Course duration depends on the selected program (typically ranging from 12 to 24 sessions). Full details are provided before confirmation.",
  },
  {
    question: "Is there a demo or trial class before joining?",
    answer: "Yes, we offer a demo / orientation session so students can understand the teaching style before enrolling.",
  },
  {
    question: "What devices are required to attend classes?",
    answer: "You can attend classes using a mobile phone, tablet, laptop, or desktop with a stable internet connection.",
  },
  {
    question: "Who can I contact for joining-related queries?",
    answer: "You can contact us through the website contact form, phone number, or WhatsApp mentioned on the site.",
  },
];
