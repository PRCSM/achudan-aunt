"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui";
import { fadeInUp, staggerContainer } from "@/lib/animations";

/* ============================================
   ✦ CTA SECTION — Slim orange banner
   ============================================ */

export default function CTASection() {
  return (
    <section className="bg-primary overflow-hidden">
      <motion.div
        className="mx-auto w-full max-w-[1200px] px-5 py-12 md:py-16"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          <motion.h2
            variants={fadeInUp}
            className="font-heading font-bold text-2xl md:text-3xl text-white text-center md:text-left m-0"
          >
            Ready to get started?
          </motion.h2>

          <motion.div variants={fadeInUp}>
            <Button
              variant="secondary"
              size="lg"
              href="#contact"
              className="!bg-white !text-primary hover:!bg-primary-light !border-white !rounded-full shadow-md"
            >
              Contact Us
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
