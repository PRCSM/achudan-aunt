"use client";

import { motion } from "framer-motion";
import { Section, Card, Button, Badge } from "@/components/ui";
import { COURSE_TIERS } from "@/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

/* ============================================
   ✦ COURSE SECTION — 4 tier cards
   ============================================ */

const courseIcons = ["📐", "🧮", "🎯", "🎓"];
const courseColors = [
  "bg-accent text-text-primary", // Yellow
  "bg-[#A8E6CF] text-text-primary", // Green
  "bg-primary text-white", // Orange
  "bg-[#FFB3B3] text-text-primary", // Pink
];

export default function CourseSection() {
  return (
    <Section
      id="courses"
      title={<>We Provide The Best <span className="text-primary">Courses</span></>}
      subtitle="Join our carefully crafted Vedic Mathematics courses, designed to fit every age and skill level."
    >
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {COURSE_TIERS.map((course, i) => (
          <motion.div key={course.id} variants={fadeInUp}>
            <Card className="h-full flex flex-col" padding="lg">
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-5 shadow-sm transition-transform hover:scale-110 ${courseColors[i]}`}
              >
                {courseIcons[i]}
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl text-text-primary mb-2">
                {course.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed flex-1">
                {course.description}
              </p>

              {/* CTA */}
              <div className="mt-6">
                <Button variant="ghost" size="sm" href="#demo-form" className="!px-0 text-primary hover:text-primary-hover">
                  Learn More →
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
