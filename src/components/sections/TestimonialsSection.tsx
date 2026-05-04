"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section, Card } from "@/components/ui";
import { fadeInUp } from "@/lib/animations";

/* ============================================
   ✦ TESTIMONIALS SECTION — Carousel
   ============================================ */

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    grade: "Class 8",
    rating: 5,
    quote:
      "My daughter's confidence in math has skyrocketed! She now solves multiplication problems mentally that used to take her minutes with pen and paper.",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    grade: "Class 10",
    rating: 5,
    quote:
      "VedaGanitham transformed how my son approaches math. The Vedic techniques are not just tricks — they build deep mathematical understanding.",
  },
  {
    id: 3,
    name: "Anitha Rajan",
    grade: "Class 6",
    rating: 5,
    quote:
      "The teachers are incredibly patient and engaging. My child actually looks forward to math class now. That alone is worth everything!",
  },
  {
    id: 4,
    name: "Vikram Patel",
    grade: "Class 12",
    rating: 4,
    quote:
      "As a competitive exam aspirant, Vedic Math techniques have given me a significant edge. I can solve problems 3x faster now.",
  },
  {
    id: 5,
    name: "Meena Iyer",
    grade: "Teacher Training",
    rating: 5,
    quote:
      "I took the teacher training course and now teach Vedic Math at my school. The curriculum is well-structured and the support is excellent.",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const visibleCount = 3;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Get visible testimonials (circular)
  const getVisible = () => {
    const items = [];
    for (let i = 0; i < visibleCount; i++) {
      items.push(testimonials[(current + i) % testimonials.length]);
    }
    return items;
  };

  return (
    <Section
      id="testimonials"
      title={<>What <span className="text-primary">Students</span> Say!</>}
      subtitle="Real stories from families who've experienced the VedaGanitham difference."
    >
      {/* Desktop — 3 cards */}
      <div className="hidden md:block">
        <motion.div
          className="grid grid-cols-3 gap-6"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AnimatePresence mode="popLayout">
            {getVisible().map((t) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
              >
                <Card hoverable={false} padding="lg" className="h-full flex flex-col">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={`text-sm ${
                          i < t.rating ? "text-accent" : "text-border"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-sm text-text-secondary leading-relaxed flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="mt-6 pt-4 border-t border-border">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center font-heading font-bold text-lg mb-3 shadow-sm">
                      {t.name.charAt(0)}
                    </div>
                    <p className="font-medium text-sm text-text-primary">
                      {t.name}
                    </p>
                    <p className="text-xs text-text-muted">{t.grade}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Nav buttons */}
        <div className="flex justify-center gap-3 mt-8">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-secondary hover:border-primary hover:text-primary transition-colors cursor-pointer"
            aria-label="Previous testimonials"
          >
            ←
          </button>
          {/* Dots */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  i === current ? "bg-primary w-6" : "bg-border"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-secondary hover:border-primary hover:text-primary transition-colors cursor-pointer"
            aria-label="Next testimonials"
          >
            →
          </button>
        </div>
      </div>

      {/* Mobile — single card with swipe */}
      <div className="md:hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={testimonials[current].id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <Card hoverable={false} padding="lg">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`text-sm ${
                      i < testimonials[current].rating
                        ? "text-accent"
                        : "text-border"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">
                &ldquo;{testimonials[current].quote}&rdquo;
              </p>
              <div className="mt-6 pt-4 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center font-heading font-bold text-lg mb-3 shadow-sm">
                  {testimonials[current].name.charAt(0)}
                </div>
                <p className="font-medium text-sm text-text-primary">
                  {testimonials[current].name}
                </p>
                <p className="text-xs text-text-muted">
                  {testimonials[current].grade}
                </p>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-3 mt-6">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-secondary hover:border-primary hover:text-primary transition-colors cursor-pointer"
            aria-label="Previous"
          >
            ←
          </button>
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  i === current ? "bg-primary w-6" : "bg-border"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-secondary hover:border-primary hover:text-primary transition-colors cursor-pointer"
            aria-label="Next"
          >
            →
          </button>
        </div>
      </div>
    </Section>
  );
}
