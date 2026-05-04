import type { Variants, Transition } from "framer-motion";

/* ============================================
   ✦ VEDAGANITHAM — ANIMATION UTILITIES ✦
   ============================================ */

// ---------- Shared Transitions ----------
export const springTransition: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 15,
  mass: 0.8,
};

export const easeTransition: Transition = {
  duration: 0.6,
  ease: [0.4, 0, 0.2, 1],
};

export const slowEase: Transition = {
  duration: 0.8,
  ease: [0.4, 0, 0.2, 1],
};

// ---------- Scroll-triggered Variants ----------

/** Fade in from below — default for most sections */
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: easeTransition,
  },
};

/** Fade in from left */
export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: easeTransition,
  },
};

/** Fade in from right */
export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: easeTransition,
  },
};

/** Slide in from left (more dramatic) */
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/** Slide in from right (more dramatic) */
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/** Simple opacity fade */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/** Scale in from smaller */
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: easeTransition,
  },
};

// ---------- Stagger Container ----------

/** Wrap children in this for staggered reveals */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

/** Stagger with longer delays (for hero or key sections) */
export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// ---------- Micro-interaction Variants ----------

/** Card lift on hover */
export const cardHover: Variants = {
  rest: {
    y: 0,
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
    transition: { duration: 0.25, ease: "easeOut" as const },
  },
  hover: {
    y: -6,
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
    transition: { duration: 0.25, ease: "easeOut" as const },
  },
};

/** Button scale on hover/tap */
export const buttonHover = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.97 },
};

/** Subtle float animation for decorative elements */
export const floatAnimation: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "loop" as const,
      ease: "easeInOut",
    },
  },
};

/** Gentle rotate for math symbols */
export const gentleRotate: Variants = {
  animate: {
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "loop" as const,
      ease: "easeInOut",
    },
  },
};

// ---------- Viewport Trigger Defaults ----------

/** Standard viewport trigger for scroll animations */
export const defaultViewport = {
  once: true,
  amount: 0.2 as const,
  margin: "-50px" as const,
};

/** More aggressive trigger for smaller elements */
export const smallViewport = {
  once: true,
  amount: 0.5 as const,
};
