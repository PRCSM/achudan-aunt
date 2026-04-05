"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui";
import { fadeInUp, staggerContainer } from "@/lib/animations";

/* ============================================
   ✦ CTA SECTION — Full-width conversion block
   ============================================ */

export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-hover to-secondary" />

      {/* Decorative shapes */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 mx-auto max-w-[700px] px-5 text-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.h2
          variants={fadeInUp}
          className="font-heading text-[clamp(1.75rem,4vw,2.5rem)] text-white leading-tight"
        >
          Ready to Transform Your
          <br />
          Math Journey?
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="mt-4 text-white/80 text-lg max-w-lg mx-auto"
        >
          Join hundreds of students who&apos;ve discovered the power of Vedic
          Mathematics. Your free demo is just one click away.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            variant="secondary"
            size="lg"
            href="#demo-form"
            className="!bg-white !text-primary hover:!bg-white/90 !border-white"
          >
            Book Free Demo Now
          </Button>
          <Button
            variant="ghost"
            size="lg"
            href="#courses"
            className="!text-white/90 hover:!text-white hover:!bg-white/10"
          >
            Explore Courses →
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
