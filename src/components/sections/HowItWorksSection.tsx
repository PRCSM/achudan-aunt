"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui";
import { fadeInUp, staggerContainer } from "@/lib/animations";

/* ============================================
   ✦ HOW IT WORKS — 4 Steps
   ============================================ */

const steps = [
  {
    number: "01",
    icon: "🔍",
    title: "Discover",
    description: "Browse our courses and find the right level for you.",
  },
  {
    number: "02",
    icon: "📅",
    title: "Book a Demo",
    description: "Schedule a free demo class at your convenient time.",
  },
  {
    number: "03",
    icon: "💻",
    title: "Attend Session",
    description: "Join live interactive classes via Google Meet.",
  },
  {
    number: "04",
    icon: "🚀",
    title: "Improve Skills",
    description: "Practice Vedic techniques and see instant improvement.",
  },
];

export default function HowItWorksSection() {
  return (
    <Section
      id="how-it-works"
      title="How It Works"
      subtitle="Getting started is simple. Four easy steps to begin your Vedic Mathematics journey."
      soft
    >
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            variants={fadeInUp}
            className="relative text-center group"
          >
            {/* Connector line (desktop only) */}
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-10 left-[60%] w-[calc(100%-20%)] h-px bg-border" />
            )}

            {/* Step number + icon */}
            <div className="relative mx-auto w-20 h-20 rounded-3xl bg-white shadow-md flex items-center justify-center text-3xl mb-6 group-hover:shadow-lg transition-shadow duration-300">
              {step.icon}
              <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                {step.number}
              </span>
            </div>

            {/* Content */}
            <h3 className="font-heading text-lg text-text-primary mb-2">
              {step.title}
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed max-w-[200px] mx-auto">
              {step.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
