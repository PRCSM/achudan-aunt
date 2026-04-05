"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";
import { buttonHover } from "@/lib/animations";

/* ============================================
   ✦ BUTTON COMPONENT ✦
   Primary and Secondary button variants
   matching the VedaGanitham design system.
   ============================================ */

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  fullWidth?: boolean;
  children: React.ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-hover shadow-md hover:shadow-lg",
  secondary:
    "bg-transparent text-text-primary border border-border hover:border-border-hover hover:bg-bg-soft",
  ghost:
    "bg-transparent text-text-secondary hover:text-text-primary hover:bg-bg-soft",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-base",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      fullWidth = false,
      className = "",
      children,
      href,
      ...props
    },
    ref
  ) => {
    const baseClasses =
      "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-250 cursor-pointer select-none";

    const classes = [
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      fullWidth ? "w-full" : "",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    // If href is provided, render as anchor
    if (href) {
      return (
        <motion.a
          href={href}
          className={classes}
          variants={buttonHover}
          initial="rest"
          whileHover="hover"
          whileTap="tap"
        >
          {children}
        </motion.a>
      );
    }

    return (
      <motion.button
        ref={ref}
        className={classes}
        variants={buttonHover}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export default Button;
