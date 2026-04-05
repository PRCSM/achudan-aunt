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
  "bg-primary/10 text-primary",
  "bg-secondary/10 text-secondary",
  "bg-accent/20 text-accent-dark",
  "bg-primary/10 text-primary",
];

export default function CourseSection() {
  return (
    <Section
      id="courses"
      title="Our Courses"
      subtitle="From beginner to master — structured programs designed to unlock your mathematical potential."
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
                className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-5 ${courseColors[i]}`}
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
