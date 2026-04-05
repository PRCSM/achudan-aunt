"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { cardHover } from "@/lib/animations";

/* ============================================
   ✦ CARD COMPONENT ✦
   White card with rounded corners, shadow,
   and hover lift effect per design system.
   ============================================ */

interface CardProps {
  children: ReactNode;
  className?: string;
  /** Enable hover lift animation */
  hoverable?: boolean;
  /** Make entire card a link */
  href?: string;
  /** Padding override */
  padding?: "sm" | "md" | "lg";
}

const paddingClasses = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export default function Card({
  children,
  className = "",
  hoverable = true,
  href,
  padding = "md",
}: CardProps) {
  const baseClasses = `bg-white rounded-3xl ${paddingClasses[padding]} shadow-card`;

  if (hoverable) {
    const Component = href ? motion.a : motion.div;
    return (
      <Component
        href={href}
        className={`${baseClasses} cursor-pointer ${className}`.trim()}
        variants={cardHover}
        initial="rest"
        whileHover="hover"
      >
        {children}
      </Component>
    );
  }

  return (
    <div className={`${baseClasses} ${className}`.trim()}>
      {children}
    </div>
  );
}
