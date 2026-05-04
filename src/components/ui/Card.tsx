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
  padding?: "none" | "sm" | "md" | "lg";
}

const paddingClasses = {
  none: "p-0",
  sm: "p-4",
  md: "p-7", // 28px
  lg: "p-8",
};

export default function Card({
  children,
  className = "",
  hoverable = true,
  href,
  padding = "md",
}: CardProps) {
  const baseClasses = `bg-white rounded-[20px] border border-border ${paddingClasses[padding]} shadow-card transition-all duration-250`;

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
