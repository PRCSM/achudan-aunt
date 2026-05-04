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
   ✦ SIMPLE SOLUTIONS SECTION
   Two-column split with peach background.
   ============================================ */

const steps = [
  {
    number: "1",
    title: "Contact us",
    description: "Reach out to us via form or WhatsApp to get started.",
  },
  {
    number: "2",
    title: "Consult",
    description: "Discuss your mathematical goals and current level.",
  },
  {
    number: "3",
    title: "Place order",
    description: "Select the right course and finalize your registration.",
  },
  {
    number: "4",
    title: "Payment",
    description: "Securely pay for your enrolled Vedic Math program.",
  },
];

export default function HowItWorksSection() {
  return (
    <Section id="how-it-works" soft noAnimation>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        {/* Left Column - Illustration */}
        <motion.div
          className="w-full lg:w-[45%] relative"
          variants={slideInLeft}
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
              src="/images/solutions_illustration.png"
              alt="Student sitting on orange sofa chair working on laptop"
              fill
              className="object-contain drop-shadow-xl"
            />
          </motion.div>
        </motion.div>

        {/* Right Column - Steps Content */}
        <motion.div
          className="w-full lg:w-[55%] flex flex-col items-start text-left"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-3xl md:text-4xl text-text-primary mb-4"
          >
            Simple <span className="text-primary">Solutions!</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-text-secondary text-base max-w-[480px] leading-relaxed mb-10"
          >
            We understand that no two students are alike. That&apos;s why we take the time to understand your needs.
          </motion.p>

          <div className="flex flex-col gap-6 mb-10">
            {steps.map((step, index) => (
              <motion.div key={step.number} variants={fadeInUp} className="flex gap-4 group">
                <div className="relative flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-heading font-bold text-lg z-10 shadow-md group-hover:scale-110 transition-transform">
                    {step.number}
                  </div>
                  {/* Vertical connector line (hide on last item) */}
                  {index !== steps.length - 1 && (
                    <div className="absolute top-10 bottom-[-24px] w-px bg-primary/20" />
                  )}
                </div>
                <div className="pt-2">
                  <h3 className="font-heading font-semibold text-[17px] text-text-primary mb-1">
                    {step.title}
                  </h3>
                  <p className="text-[14px] text-text-secondary">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="flex gap-4">
            <Button variant="primary" size="md" href="#demo-form">
              Get Started
            </Button>
            <Button variant="secondary" size="md" href="#courses">
              Read more
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
