import { type ReactNode } from "react";

/* ============================================
   ✦ CONTAINER COMPONENT ✦
   Centers content with max-width: 1200px
   and horizontal padding per design system.
   ============================================ */

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "main" | "article";
}

export default function Container({
  children,
  className = "",
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag
      className={`mx-auto w-full max-w-[1200px] px-5 ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}
