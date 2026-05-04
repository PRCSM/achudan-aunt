"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Section, Button } from "@/components/ui";
import {
  fadeInUp,
  staggerContainer,
  floatAnimation,
  slideInLeft,
  slideInRight
} from "@/lib/animations";

/* ============================================
   ✦ ABOUT AGENCY SECTION
   Two-column split, white background.
   ============================================ */

export default function AboutSection() {
  return (
    <Section id="about" noAnimation className="bg-white">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
        
        {/* Left Column - Text Content */}
        <motion.div
          className="w-full lg:w-[50%] flex flex-col items-start text-left"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-3xl md:text-4xl text-text-primary mb-4"
          >
            Our <span className="text-primary">Academy</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-text-secondary text-base max-w-[500px] leading-relaxed mb-8"
          >
            We believe in the power of ancient Vedic knowledge. Our proven 
            approach allows us to make informed decisions and optimize your 
            learning journey for maximum results. We turn complex mathematics 
            into actionable insights, tailored specifically for your academic growth.
          </motion.p>

          <motion.div variants={fadeInUp}>
            <Button variant="primary" size="md" href="#about-us">
              Read more
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Column - Illustration */}
        <motion.div
          className="w-full lg:w-[50%] relative"
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            variants={floatAnimation}
            animate="animate"
            className="relative w-full aspect-square max-w-[450px] mx-auto"
          >
            <Image
              src="/images/about_illustration.png"
              alt="Student sitting at desk with floating mathematical symbols"
              fill
              className="object-contain drop-shadow-xl"
            />
          </motion.div>
        </motion.div>

      </div>
    </Section>
  );
}
