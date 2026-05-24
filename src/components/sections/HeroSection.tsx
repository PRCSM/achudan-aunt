"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Button, Badge } from "@/components/ui";
import {
  staggerContainerSlow,
  floatAnimation,
  slideInLeft,
  slideInRight,
} from "@/lib/animations";
import { animate } from "framer-motion";

/* ============================================
   ✦ COUNTER COMPONENT (Odometer count-up)
   ============================================ */
function Counter({
  from = 0,
  to,
  duration = 2.5,
  suffix = "",
}: {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
}) {
  const [value, setValue] = useState(from);

  useEffect(() => {
    const controls = animate(from, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setValue(Math.floor(latest)),
    });
    return () => controls.stop();
  }, [from, to, duration]);

  return (
    <span className="font-heading font-extrabold text-3xl md:text-4xl text-primary">
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ============================================
   ✦ MAGNETIC BUTTON WRAPPER
   ============================================ */
function MagneticWrapper({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 25 });
  const springY = useSpring(y, { stiffness: 300, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.3);
    y.set((e.clientY - cy) * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
    >
      {children}
    </motion.div>
  );
}

/* ============================================
   ✦ HERO SECTION DATA
   ============================================ */
const floatingMath = [
  { text: "9 × 9 = 81", top: "18%", left: "6%", delay: 0, size: "text-base md:text-xl" },
  { text: "45² = 2025", top: "22%", right: "8%", delay: 1.5, size: "text-lg md:text-2xl" },
  { text: "√144 = 12", top: "68%", left: "4%", delay: 0.8, size: "text-sm md:text-lg" },
  { text: "1089", top: "58%", right: "5%", delay: 2.2, size: "text-xl md:text-3xl" },
  { text: "11 × 53 = 583", top: "82%", left: "38%", delay: 1.1, size: "text-sm md:text-base" },
  { text: "∑ n² = n(n+1)(2n+1)/6", top: "40%", left: "2%", delay: 3, size: "text-xs md:text-sm" },
  { text: "999 × 999", top: "75%", right: "12%", delay: 1.8, size: "text-xs md:text-base" },
  { text: "π ≈ 3.14159", top: "12%", left: "55%", delay: 0.5, size: "text-xs md:text-sm" },
];

export default function HeroSection() {
  const founderText = "We don't teach memorization. We teach mathematical intuition.";
  const founderWords = founderText.split(" ");

  return (
    <section className="relative min-h-screen snap-start flex items-center pt-20 pb-10 overflow-hidden bg-white">

      {/* ✦ Radial Atmospheric Glow ✦ */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-primary-light/30 rounded-full blur-[80px]" />
      </div>

      {/* ✦ Floating Mathematical Universe Background ✦ */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        {floatingMath.map((item, idx) => (
          <motion.div
            key={idx}
            className={`absolute text-text-primary/[0.07] font-heading font-bold tracking-wide select-none ${item.size}`}
            style={{
              top: item.top,
              left: item.left,
              right: item.right,
              filter: "blur(0.3px)",
            }}
            animate={{
              y: [0, -18, 0],
              opacity: [0.06, 0.16, 0.06],
              scale: [1, 1.04, 1],
            }}
            transition={{
              duration: 10 + idx * 1.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay,
            }}
          >
            {item.text}
          </motion.div>
        ))}
      </div>

      <div className="mx-auto w-full max-w-[1200px] px-5 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">

        {/* ✦ Left Content ✦ */}
        <motion.div
          className="w-full lg:w-[55%] flex flex-col items-start text-left"
          variants={staggerContainerSlow}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={slideInLeft}>
            <Badge variant="primary" className="mb-6 animate-pulse">
              ✨ Ancient Wisdom, Modern Speed
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={slideInLeft}
            className="font-heading text-[clamp(2.4rem,5vw,3.8rem)] leading-[1.1] text-text-primary mb-6"
          >
            Master Mathematics
            <br />
            the{" "}
            <span className="text-primary relative inline-block">
              Vedic Way
              {/* Animated underline sweep */}
              <motion.svg
                className="absolute -bottom-1 left-0 w-full overflow-visible"
                viewBox="0 0 200 8"
                preserveAspectRatio="none"
                height="8"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
              >
                <motion.path
                  d="M0,5 Q50,0 100,5 Q150,10 200,5"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  className="text-primary/40"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                />
              </motion.svg>
            </span>
          </motion.h1>

          {/* ✦ Founder Statement — Word-by-word blur-to-focus ✦ */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.07, delayChildren: 0.6 },
              },
            }}
            className="flex flex-wrap text-text-secondary text-base md:text-lg max-w-[500px] leading-relaxed mb-10 font-medium gap-x-[5px] gap-y-1"
          >
            {founderWords.map((word, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, filter: "blur(6px)", y: 8 },
                  visible: {
                    opacity: 1,
                    filter: "blur(0px)",
                    y: 0,
                    transition: { duration: 0.4, ease: "easeOut" },
                  },
                }}
                className={
                  word.includes("intuition")
                    ? "text-primary font-bold underline decoration-2 decoration-accent/70 underline-offset-4"
                    : word.includes("memorization")
                    ? "line-through text-text-muted/70"
                    : ""
                }
              >
                {word}
              </motion.span>
            ))}
          </motion.div>

          {/* ✦ CTA Buttons ✦ */}
          <motion.div
            variants={slideInLeft}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12"
          >
            <MagneticWrapper>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Button
                  variant="primary"
                  size="lg"
                  href="#demo-form"
                  className="shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-shadow duration-300"
                >
                  Book a Free Demo ✦
                </Button>
              </motion.div>
            </MagneticWrapper>

            <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300 }}>
              <Button
                variant="ghost"
                size="lg"
                href="#courses"
                className="!font-semibold text-text-secondary hover:text-primary flex items-center gap-1 group"
              >
                Explore Courses
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </Button>
            </motion.div>
          </motion.div>

          {/* ✦ Odometer Trust Metrics ✦ */}
          <motion.div
            variants={slideInLeft}
            className="grid grid-cols-3 gap-6 md:gap-10 border-t border-border pt-8 w-full max-w-[500px]"
          >
            <div className="flex flex-col">
              <Counter to={1000} suffix="+" duration={2.5} />
              <span className="text-xs text-text-muted font-medium mt-1">Learning Hours</span>
            </div>
            <div className="flex flex-col">
              <Counter to={100} suffix="+" duration={2} />
              <span className="text-xs text-text-muted font-medium mt-1">Students Enrolled</span>
            </div>
            <div className="flex flex-col">
              <Counter to={50} suffix="+" duration={1.8} />
              <span className="text-xs text-text-muted font-medium mt-1">Math Champs</span>
            </div>
          </motion.div>
        </motion.div>

        {/* ✦ Right Illustration ✦ */}
        <motion.div
          className="w-full lg:w-[42%] relative"
          variants={slideInRight}
          initial="hidden"
          animate="visible"
        >
          {/* Glow behind illustration */}
          <div className="absolute inset-0 bg-primary/8 rounded-full blur-[60px] scale-75" />
          <motion.div
            variants={floatAnimation}
            animate="animate"
            className="relative w-full aspect-square max-w-[440px] mx-auto"
          >
            <Image
              src="/images/hero_illustration.png"
              alt="Students learning Vedic Mathematics — immersive, joyful, fast"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-contain drop-shadow-2xl"
              priority
            />
          </motion.div>
        </motion.div>
      </div>

      {/* ✦ Scroll Indicator ✦ */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-text-muted"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.6 }}
      >
        <span className="text-[10px] font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-border to-transparent"
          animate={{ scaleY: [1, 0.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
