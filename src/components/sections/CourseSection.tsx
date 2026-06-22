"use client";

import { motion } from "framer-motion";
import { Section, Card, Button, Badge } from "@/components/ui";
import { COURSE_TIERS } from "@/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

/* ============================================
   ✦ COURSE SECTION — 4 tier cards with dynamic routing
   ============================================ */

const courseIcons = ["📐", "🧮", "🎯", "🎓"];
const courseColors = [
  "bg-accent text-text-primary",
  "bg-primary-light text-primary",
  "bg-primary text-white",
  "bg-secondary-light text-primary",
];

export default function CourseSection() {
  return (
    <Section
      id="courses"
      title={<>We Provide The Best <span className="text-primary">Courses</span></>}
      subtitle="Join our carefully crafted Vedic Mathematics courses, designed to fit every age and skill level."
      className="snap-start min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-bg-section"
    >
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full mx-auto px-4 z-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {COURSE_TIERS.map((course, i) => (
          <motion.div 
            key={course.id} 
            variants={fadeInUp}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="h-full"
          >
            <Card className="h-full flex flex-col justify-between border border-border/80 hover:border-primary/20 hover:shadow-xl transition-shadow duration-300" padding="lg">
              <div>
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-5 shadow-sm transition-transform hover:scale-110 ${courseColors[i]}`}
                >
                  {courseIcons[i]}
                </div>

                {/* Content */}
                <h3 className="font-heading font-bold text-xl !text-black mb-2 leading-tight">
                  {course.title}
                </h3>
                <p className="text-xs !text-black/70 leading-relaxed">
                  {course.description}
                </p>

                {/* Syllabus Highlights Preview */}
                <ul className="text-[11px] text-text-secondary space-y-2 mt-4 border-t border-slate-100 pt-4">
                  {course.highlights.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary text-xs mt-1 shrink-0">✦</span>
                      <span className="!text-black/80 text-sm">{item.title}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Dynamic Learn More Link */}
              <div className="mt-6">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  href={`/courses/${course.id}`} 
                  className="!px-0 !text-primary hover:!text-primary-hover font-bold flex items-center gap-1 group/btn"
                >
                  Learn More <span className="transform group-hover/btn:translate-x-1 transition-transform">&rarr;</span>
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
