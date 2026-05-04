"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button, Badge } from "@/components/ui";
import {
  staggerContainerSlow,
  floatAnimation,
  slideInLeft,
  slideInRight
} from "@/lib/animations";

/* ============================================
   ✦ HERO SECTION
   Two-column split layout with 3D illustration
   ============================================ */

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-white">
      {/* Decorative Dots */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-[20%] right-[10%] w-6 h-6 rounded-full bg-primary/15" />
        <div className="absolute bottom-[30%] right-[40%] w-4 h-4 rounded-full bg-accent/20" />
        <div className="absolute top-[40%] left-[5%] w-3 h-3 rounded-full bg-primary/10" />
      </div>

      <div className="mx-auto w-full max-w-[1200px] px-5 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <motion.div
          className="w-full md:w-[55%] flex flex-col items-start text-left"
          variants={staggerContainerSlow}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={slideInLeft}>
            <Badge variant="primary" className="mb-6">✨ Ancient Wisdom, Modern Speed</Badge>
          </motion.div>

          <motion.h1
            variants={slideInLeft}
            className="font-heading text-[clamp(2.5rem,5vw,3.5rem)] leading-[1.15] text-text-primary mb-6"
          >
            Master Mathematics
            <br />
            the <span className="text-primary">Vedic Way</span>
          </motion.h1>

          <motion.p
            variants={slideInLeft}
            className="text-text-secondary text-base md:text-lg max-w-[480px] leading-relaxed mb-8"
          >
            Discover ancient Indian techniques that simplify complex calculations.
            Build speed, accuracy, and confidence in mathematics.
          </motion.p>

          <motion.div
            variants={slideInLeft}
            className="flex flex-col sm:flex-row items-center gap-4 mb-12"
          >
            <Button variant="primary" size="lg" href="#demo-form">
              Book Free Demo
            </Button>
            <Button variant="ghost" size="lg" href="#courses" className="!font-medium">
              ▶ Explore Courses
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={slideInLeft}
            className="flex flex-wrap items-center gap-4 sm:gap-6 text-text-muted text-[13px] font-medium"
          >
            <span className="flex items-center gap-1.5">
              <span className="text-accent text-base">★</span> 500+ Students
            </span>
            <span className="w-px h-4 bg-border hidden sm:block" />
            <span className="flex items-center gap-1.5">
              <span className="text-accent text-base">★</span> 4.9 Rating
            </span>
            <span className="w-px h-4 bg-border hidden sm:block" />
            <span className="flex items-center gap-1.5">
              <span className="text-accent text-base">★</span> Expert Teachers
            </span>
          </motion.div>
        </motion.div>

        {/* Right Illustration */}
        <motion.div
          className="w-full md:w-[45%] relative mt-12 md:mt-0"
          variants={slideInRight}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={floatAnimation}
            animate="animate"
            className="relative w-full aspect-square max-w-[500px] mx-auto"
          >
            <Image
              src="/images/hero_illustration.png"
              alt="Students learning Vedic Mathematics"
              fill
              className="object-contain drop-shadow-xl"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
