"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui";

/* ============================================
   ✦ SCENE 1 — PHILOSOPHY INTRODUCTION
   Cinematic centered typography with floating math universe
   ============================================ */

const floatingEquations = [
  { text: "45² = 2025", top: "12%", left: "7%", delay: 0, size: "text-sm md:text-lg" },
  { text: "√144 = 12", top: "20%", right: "9%", delay: 1.4, size: "text-base md:text-xl" },
  { text: "11 × 53 = 583", top: "72%", left: "5%", delay: 0.7, size: "text-xs md:text-base" },
  { text: "9 × 9 = 81", top: "65%", right: "6%", delay: 2, size: "text-sm md:text-lg" },
  { text: "∑ 1 to n", top: "40%", left: "3%", delay: 1, size: "text-xs md:text-sm" },
  { text: "1089", top: "80%", left: "42%", delay: 0.3, size: "text-xl md:text-2xl" },
  { text: "999 × 999", top: "35%", right: "4%", delay: 2.5, size: "text-xs md:text-sm" },
  { text: "π ≈ 3.14159", top: "8%", left: "50%", delay: 1.8, size: "text-xs md:text-sm" },
];

const line1Words = "We don't teach memorization.".split(" ");
const line2Words = "We teach mathematical intuition.".split(" ");

export default function Scene1Philosophy() {
  return (
    <section className="relative min-h-screen snap-start flex flex-col items-center justify-center overflow-hidden bg-white px-5 pt-24 pb-16">

      {/* Atmospheric radial glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/6 rounded-full blur-[120px]" />
      </div>

      {/* Floating math universe */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        {floatingEquations.map((eq, i) => (
          <motion.div
            key={i}
            className={`absolute text-text-primary/[0.06] font-heading font-bold tracking-wide ${eq.size}`}
            style={{ top: eq.top, left: eq.left, right: eq.right }}
            animate={{ y: [0, -16, 0], opacity: [0.05, 0.14, 0.05] }}
            transition={{ duration: 9 + i * 1.5, repeat: Infinity, ease: "easeInOut", delay: eq.delay }}
          >
            {eq.text}
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
          whileInView={{ opacity: 0.75, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
          className="font-medium uppercase mb-5"
          style={{ fontSize: "0.72rem", letterSpacing: "0.28em", color: "#FF6B2B" }}
        >
          ✦ About VedaGanitham
        </motion.p>

        {/* Animated headline — word-by-word blur-to-focus */}
        <motion.div
          className="font-heading font-bold text-[clamp(2rem,5vw,3.5rem)] leading-[1.15] text-text-primary mb-6"
        >
          {/* Line 1 */}
          <div className="flex flex-wrap justify-center gap-x-[10px] gap-y-1 mb-2">
            {line1Words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, filter: "blur(8px)", y: 12 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                className={
                  word === "memorization." ? "line-through text-text-muted/60" : ""
                }
              >
                {word}
              </motion.span>
            ))}
          </div>
          {/* Line 2 */}
          <div className="flex flex-wrap justify-center gap-x-[10px] gap-y-1">
            {line2Words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, filter: "blur(8px)", y: 12 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 + i * 0.1, ease: "easeOut" }}
                className={
                  word === "mathematical" || word === "intuition."
                    ? "text-primary relative"
                    : ""
                }
              >
                {word === "intuition." ? (
                  <span className="relative">
                    {word}
                    <motion.span
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary/40 rounded-full"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.6, duration: 0.6, ease: "easeOut" }}
                      style={{ originX: 0 }}
                    />
                  </span>
                ) : word}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 1.4 }}
          className="text-text-secondary text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-12"
        >
          At VedaGanitham, we believe mathematics should feel exciting, intuitive, and
          confidence-building — not a source of stress. We use the ancient power of Vedic
          Mathematics to help students unlock speed, pattern recognition, and a genuine love
          for numbers.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
            <Button
              variant="primary"
              size="lg"
              href="/#demo-form"
              className="shadow-lg shadow-primary/20"
            >
              Book a Free Demo ✦
            </Button>
          </motion.div>
          <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300 }}>
            <Button variant="ghost" size="lg" href="/#courses" className="!font-semibold text-text-secondary hover:text-primary">
              Explore Courses →
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 2.2 }}
      >
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-border to-transparent"
          animate={{ scaleY: [1, 0.4, 1], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
