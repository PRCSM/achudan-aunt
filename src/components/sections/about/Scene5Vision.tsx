"use client";

import { motion } from "framer-motion";

/* ============================================
   ✦ SCENE 5 — VISION STATEMENT
   Fullscreen centered typography — minimal, emotional, inspiring
   ============================================ */

const visionLines = [
  { text: "Mathematics is the language", delay: 0.2 },
  { text: "the universe is written in.", delay: 0.5 },
  { text: "Our vision is to make every student", delay: 1.0 },
  { text: "fluent in that language.", delay: 1.3 },
];

const ambientMath = [
  { text: "∞", top: "15%", left: "8%", delay: 0 },
  { text: "∑", top: "70%", left: "6%", delay: 1 },
  { text: "∫", top: "25%", right: "7%", delay: 0.5 },
  { text: "π", top: "75%", right: "9%", delay: 1.5 },
  { text: "√", top: "50%", left: "3%", delay: 2 },
  { text: "Δ", top: "45%", right: "4%", delay: 0.8 },
];

export default function Scene5Vision() {
  return (
    <section className="relative min-h-screen snap-start flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#1A1A2E] via-[#16213E] to-[#0F3460] px-5 py-24">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-primary/6 rounded-full blur-[150px]" />
      </div>

      {/* Floating mathematical symbols */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        {ambientMath.map((sym, i) => (
          <motion.div
            key={i}
            className="absolute text-white/[0.05] font-heading font-bold text-6xl md:text-8xl"
            style={{ top: sym.top, left: sym.left, right: sym.right }}
            animate={{ y: [0, -20, 0], opacity: [0.03, 0.09, 0.03] }}
            transition={{ duration: 12 + i * 2, repeat: Infinity, ease: "easeInOut", delay: sym.delay }}
          >
            {sym.text}
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
          whileInView={{ opacity: 0.75, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
          className="font-medium uppercase mb-5"
          style={{ fontSize: "0.72rem", letterSpacing: "0.28em", color: "#FF6B2B" }}
        >
          ✦ Our Vision
        </motion.p>

        {/* Line-by-line stagger reveal */}
        <div className="font-heading font-bold text-[clamp(1.6rem,4vw,2.8rem)] leading-[1.35] text-white mb-12 space-y-1">
          {visionLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: line.delay, ease: "easeOut" }}
              className={
                line.text.includes("fluent")
                  ? "text-primary"
                  : line.text.includes("universe")
                  ? "text-white/70"
                  : ""
              }
            >
              {line.text}
            </motion.div>
          ))}
        </div>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 1.8 }}
          className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-12"
        >
          We believe every child has the potential to excel at mathematics — they just need the
          right approach, the right mentor, and the right method. Vedic Mathematics is that method.
        </motion.p>

        {/* Decorative stat line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 2, ease: "easeOut" }}
          style={{ originX: 0.5 }}
          className="flex items-center justify-center gap-8 border-t border-white/10 pt-8"
        >
          {[
            { num: "100+", label: "Students Transformed" },
            { num: "5+", label: "Countries Reached" },
            { num: "∞", label: "Potential Unlocked" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 2.2 + i * 0.15 }}
              className="text-center"
            >
              <div className="font-heading font-extrabold text-2xl text-primary">{item.num}</div>
              <div className="text-slate-400 text-xs mt-0.5">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
