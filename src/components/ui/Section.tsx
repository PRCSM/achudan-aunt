"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeInUp, defaultViewport } from "@/lib/animations";
import Container from "./Container";

/* ============================================
   ✦ SECTION COMPONENT ✦
   Reusable page section with consistent
   vertical spacing and optional scroll reveal.
   ============================================ */

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  /** Section title — rendered as serif heading */
  title?: string;
  /** Section subtitle */
  subtitle?: string;
  /** Whether this section has a soft background */
  soft?: boolean;
  /** Disable scroll animation */
  noAnimation?: boolean;
}

export default function Section({
  children,
  className = "",
  id,
  title,
  subtitle,
  soft = false,
  noAnimation = false,
}: SectionProps) {
  const Wrapper = noAnimation ? "div" : motion.div;
  const wrapperProps = noAnimation
    ? {}
    : {
        variants: fadeInUp,
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: defaultViewport,
      };

  return (
    <section
      id={id}
      className={`py-20 ${soft ? "bg-bg-soft" : ""} ${className}`.trim()}
    >
      <Container>
        <Wrapper {...wrapperProps}>
          {(title || subtitle) && (
            <div className="mb-12 text-center">
              {title && (
                <h2 className="font-heading text-[var(--font-h2)] text-text-primary">
                  {title}
                </h2>
              )}
              {subtitle && (
                <p className="mt-3 mx-auto text-text-secondary text-base max-w-xl">
                  {subtitle}
                </p>
              )}
            </div>
          )}
          {children}
        </Wrapper>
      </Container>
    </section>
  );
}
