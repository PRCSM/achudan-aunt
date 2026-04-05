"use client";

/* ============================================
   ✦ BADGE COMPONENT ✦
   Small label/tag per design system spec.
   ============================================ */

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "secondary" | "accent";
  className?: string;
}

const variantClasses = {
  default: "bg-bg-soft text-text-secondary",
  primary: "bg-primary-light text-primary",
  secondary: "bg-secondary-light text-secondary",
  accent: "bg-accent/20 text-accent-dark",
};

export default function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${variantClasses[variant]} ${className}`.trim()}
    >
      {children}
    </span>
  );
}
