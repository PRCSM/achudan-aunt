"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button, Badge } from "@/components/ui";
import {
  fadeInUp,
  staggerContainerSlow,
  floatAnimation,
  gentleRotate,
} from "@/lib/animations";

/* ============================================
   ✦ HERO SECTION
   Center-aligned with serif heading,
   2 CTA buttons, math-themed background.
   ============================================ */

const mathSymbols = [
  { symbol: "∑", x: "10%", y: "20%", size: "text-4xl", delay: 0 },
  { symbol: "π", x: "85%", y: "15%", size: "text-5xl", delay: 0.5 },
  { symbol: "√", x: "8%", y: "70%", size: "text-3xl", delay: 1 },
  { symbol: "∞", x: "90%", y: "65%", size: "text-4xl", delay: 0.3 },
  { symbol: "÷", x: "75%", y: "80%", size: "text-3xl", delay: 0.8 },
  { symbol: "×", x: "20%", y: "85%", size: "text-2xl", delay: 1.2 },
  { symbol: "∆", x: "50%", y: "10%", size: "text-3xl", delay: 0.6 },
  { symbol: "θ", x: "65%", y: "30%", size: "text-2xl", delay: 0.9 },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt=""
          fill
          className="object-cover opacity-30"
          priority
          aria-hidden="true"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg-main/80 via-bg-main/60 to-bg-main" />
      </div>

      {/* Floating Math Symbols */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        {mathSymbols.map((item, i) => (
          <motion.span
            key={i}
            className={`absolute ${item.size} text-primary/10 font-heading select-none`}
            style={{ left: item.x, top: item.y }}
            variants={floatAnimation}
            animate="animate"
            transition={{ delay: item.delay }}
          >
            {item.symbol}
          </motion.span>
        ))}
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 mx-auto max-w-[800px] px-5 text-center pt-24 pb-16"
        variants={staggerContainerSlow}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeInUp}>
          <Badge variant="primary">✨ Ancient Wisdom, Modern Speed</Badge>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="font-heading text-[clamp(2.5rem,6vw,4rem)] leading-[1.1] text-text-primary mt-6"
        >
          Master Mathematics
          <br />
          <span className="text-primary">the Vedic Way</span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="mt-6 text-lg md:text-xl text-text-secondary max-w-xl mx-auto leading-relaxed"
        >
          Discover ancient Indian techniques that simplify complex calculations.
          Build speed, accuracy, and confidence in mathematics.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button variant="primary" size="lg" href="#demo-form">
            Book Free Demo
          </Button>
          <Button variant="secondary" size="lg" href="#courses">
            Explore Courses
          </Button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          variants={fadeInUp}
          className="mt-12 flex items-center justify-center gap-8 text-text-muted text-sm"
        >
          <span className="flex items-center gap-1.5">
            <span className="text-accent text-base">★</span> 500+ Students
          </span>
          <span className="hidden sm:block w-px h-4 bg-border" />
          <span className="flex items-center gap-1.5">
            <span className="text-accent text-base">★</span> 4.9 Rating
          </span>
          <span className="hidden sm:block w-px h-4 bg-border" />
          <span className="flex items-center gap-1.5">
            <span className="text-accent text-base">★</span> Expert Teachers
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
