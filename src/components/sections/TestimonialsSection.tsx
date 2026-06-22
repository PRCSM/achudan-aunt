"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section, Card } from "@/components/ui";
import { fadeInUp } from "@/lib/animations";

/* ============================================
   ✦ REAL TESTIMONIALS DATA
   ============================================ */

const testimonials = [
  {
    id: 1,
    name: "Kishore G",
    grade: "Student (UAE)",
    rating: 5,
    quote:
      "My calculation speed has improved drastically. Now I can solve long equations mentally during school exams without getting stuck. It gives me so much confidence!",
  },
  {
    id: 2,
    name: "Chetna",
    grade: "Student (UAE)",
    rating: 5,
    quote:
      "VedaGanitham is like magic tricks for math! Learning how to simplify large multiplication and division has made math my favorite subject.",
  },
  {
    id: 3,
    name: "Samruthi B",
    grade: "Student (Chennai)",
    rating: 5,
    quote:
      "I love the interactive quizzes and games. They help me remember formulas easily. Doing math does not feel like homework anymore.",
  },
];

const driftingSnippets = [
  { text: "Math became fun!", top: "15%", left: "5%", delay: 0 },
  { text: "Now solves mentally!", top: "25%", right: "8%", delay: 2 },
  { text: "Huge speed improvement!", top: "70%", left: "10%", delay: 1.5 },
  { text: "4x calculation speed!", top: "60%", right: "6%", delay: 3 },
  { text: "No more math fear!", top: "80%", left: "45%", delay: 0.5 }
];

/* ============================================
   ✦ TYPING EFFECT WRAPPER
   ============================================ */
function TypingQuote({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    setDisplayed("");
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text.charAt(i));
      i++;
      if (i >= text.length) {
        clearInterval(interval);
      }
    }, 12); // Fast typing speed
    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className="relative">
      &ldquo;{displayed}
      <span className="inline-block w-1 h-3.5 bg-primary ml-0.5 animate-pulse" />
      &rdquo;
    </span>
  );
}

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  return (
    <Section
      id="testimonials"
      title={<>What <span className="text-primary">Students</span> Say!</>}
      subtitle="Real stories from families who've experienced the VedaGanitham difference."
      className="relative overflow-hidden bg-bg-main scroll-mt-20 snap-start min-h-screen w-full flex items-center justify-center"
    >
      {/* ✦ Floating Review Snippets Background ✦ */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        {driftingSnippets.map((snippet, idx) => (
          <motion.div
            key={idx}
            className="absolute bg-bg-main/40 border border-primary/20 text-primary/60 font-heading text-xs md:text-sm font-semibold py-1.5 px-3.5 rounded-full select-none"
            style={{ 
              top: snippet.top, 
              left: snippet.left, 
              right: snippet.right
            }}
            animate={{
              y: [0, -12, 0],
              opacity: [0.15, 0.35, 0.15],
              scale: [0.95, 1, 0.95]
            }}
            transition={{
              duration: 7 + idx * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: snippet.delay
            }}
          >
            {snippet.text}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              <Card hoverable={false} padding="lg" className="border border-border/80 shadow-lg text-center bg-white/5 backdrop-blur-sm min-h-[300px] flex flex-col justify-between">
                <div>
                  {/* Rating Stars */}
                  <div className="flex justify-center gap-1 mb-6">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={`text-lg ${
                          i < testimonials[current].rating ? "text-accent" : "text-border"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>

                  {/* Typing Quote */}
                  <p className="font-heading text-lg md:text-xl text-text-primary italic leading-relaxed px-2 md:px-6">
                    <TypingQuote text={testimonials[current].quote} />
                  </p>
                </div>

                {/* Author Info */}
                <div className="mt-8 pt-6 border-t border-border/60 flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center font-heading font-extrabold text-xl mb-3 shadow-md">
                    {testimonials[current].name.charAt(0)}
                  </div>
                  <p className="font-heading font-bold text-base text-text-primary">
                    {testimonials[current].name}
                  </p>
                  <p className="text-xs text-text-muted font-medium uppercase tracking-wider mt-0.5">
                    {testimonials[current].grade}
                  </p>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Nav Controls */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border border-border bg-white/10 flex items-center justify-center text-text-secondary hover:border-primary hover:text-primary hover:shadow-md transition-all duration-200 cursor-pointer"
              aria-label="Previous testimonial"
            >
              ←
            </button>
            
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    i === current ? "bg-primary w-6" : "bg-border hover:bg-text-muted"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-11 h-11 rounded-full border border-border bg-white/10 flex items-center justify-center text-text-secondary hover:border-primary hover:text-primary hover:shadow-md transition-all duration-200 cursor-pointer"
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
