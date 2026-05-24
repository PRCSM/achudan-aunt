"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ============================================
   ✦ SCENE 4 — EASY MATH RIDDLES
   Glassmorphism cards with expand/reveal animation
   ============================================ */

const riddles = [
  {
    id: 1,
    icon: "🟦",
    question: "I have 4 sides but I am not a square. My opposite sides are equal. Who am I?",
    answer: "A Rectangle",
    hint: "Think of a door or a book.",
  },
  {
    id: 2,
    icon: "🎲",
    question: "I have 6 faces but no nose, no eyes, and no mouth. What am I?",
    answer: "A Cube (or a Die)",
    hint: "Used in board games and geometry.",
  },
  {
    id: 3,
    icon: "✏️",
    question: "I am taken from a mine and shut in a wooden case. I help you write without ink. What am I?",
    answer: "A Pencil",
    hint: "Graphite inside wood.",
  },
  {
    id: 4,
    icon: "🔢",
    question: "I am a Vedic shortcut. I make squaring numbers ending in 5 lightning fast. Who am I?",
    answer: "The Ekadhikena Purvena Sutra",
    hint: "\"By one more than the one before\" — a Vedic sutra.",
  },
  {
    id: 5,
    icon: "⚡",
    question: "I reduce a big number into a small one instantly. I am a Vedic process. Who am I?",
    answer: "Digital Root (Navashesh)",
    hint: "The sum of digits, repeatedly reduced.",
  },
];

const floaters = [
  { text: "∑", top: "12%", left: "5%", delay: 0, size: "text-5xl md:text-7xl", blur: "blur-[2px]" },
  { text: "∞", top: "70%", left: "7%", delay: 1, size: "text-4xl md:text-6xl", blur: "blur-[2.5px]" },
  { text: "∫", top: "25%", right: "6%", delay: 0.5, size: "text-5xl md:text-7xl", blur: "blur-[1.5px]" },
  { text: "π", top: "75%", right: "8%", delay: 1.5, size: "text-4xl md:text-6xl", blur: "blur-[2px]" },
  { text: "Δ", top: "45%", left: "2%", delay: 2, size: "text-3xl md:text-5xl", blur: "blur-[3px]" },
  { text: "1089", top: "55%", right: "3%", delay: 0.8, size: "text-base md:text-xl", blur: "blur-[1px]" },
  { text: "n!", top: "88%", left: "30%", delay: 1.3, size: "text-lg md:text-2xl", blur: "blur-[1.5px]" },
];

export default function MC4Riddles() {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());

  const toggle = (id: number) => {
    setRevealed((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0B0F1A] px-5 py-24">
      {/* Atmospheric glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/3 left-1/3 w-[600px] h-[400px] bg-primary/6 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[300px] bg-violet-500/5 rounded-full blur-[120px]" />
      </div>

      {/* Floating math symbols */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        {floaters.map((f, i) => (
          <motion.div
            key={i}
            className={`absolute text-white font-heading font-bold ${f.size} ${f.blur}`}
            style={{ top: f.top, left: f.left, right: f.right }}
            initial={{ opacity: 0.06, y: 0 }}
            animate={{ y: [0, -20, 0], opacity: [0.06, 0.12, 0.06] }}
            transition={{ duration: 20 + i * 4, repeat: Infinity, ease: "easeInOut", delay: f.delay }}
          >
            {f.text}
          </motion.div>
        ))}
      </div>

      <div className="mx-auto w-full max-w-4xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
            className="uppercase mb-[18px]"
            style={{
              fontSize: "0.72rem",
              fontWeight: 500,
              letterSpacing: "0.24em",
              color: "rgba(255, 255, 255, 0.72)",
            }}
          >
            ✦ Math Riddles
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-bold text-[clamp(1.8rem,4vw,3rem)] tracking-[-0.03em]"
            style={{
              color: "rgba(255, 255, 255, 0.96)",
              textShadow: "0 0 12px rgba(255, 255, 255, 0.05), 0 0 30px rgba(249, 115, 22, 0.06)",
            }}
          >
            Can you crack these? <span style={{ color: "#f97316" }}>🧩</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm mt-2"
            style={{ color: "rgba(255, 255, 255, 0.68)", lineHeight: 1.75 }}
          >
            Tap a card to reveal the answer
          </motion.p>
        </div>

        {/* Riddle cards grid */}
        <div className="relative">
          {/* Subtle ambient radial glow behind the grid */}
          <div className="absolute inset-10 bg-primary/4 rounded-full blur-[120px] pointer-events-none" />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {riddles.map((riddle) => {
              const isOpen = revealed.has(riddle.id);
              return (
                <motion.div
                  key={riddle.id}
                  variants={{
                    hidden: { opacity: 0, y: 28 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
                  }}
                  onClick={() => toggle(riddle.id)}
                  whileHover={{ 
                    y: -6, 
                    scale: 1.02,
                    boxShadow: isOpen ? "0 15px 45px rgba(249, 115, 22, 0.12)" : "0 15px 45px rgba(0, 0, 0, 0.35)",
                    borderColor: isOpen ? "rgba(249, 115, 22, 0.6)" : "rgba(255, 255, 255, 0.15)"
                  }}
                  className="relative cursor-pointer rounded-2xl border transition-all duration-300 overflow-hidden group"
                  style={{
                    background: "linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.02))",
                    backdropFilter: "blur(12px)",
                    borderColor: isOpen ? "rgba(249, 115, 22, 0.42)" : "rgba(255, 255, 255, 0.08)",
                    boxShadow: isOpen ? "0 10px 40px rgba(249, 115, 22, 0.08)" : "0 10px 40px rgba(0, 0, 0, 0.28)",
                  }}
                >
                  {/* Card content */}
                  <div className="p-6">
                    {/* Icon + number */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl">{riddle.icon}</span>
                      <span className="text-xs font-bold font-mono" style={{ color: "rgba(180,190,220,0.48)" }}>
                        #{String(riddle.id).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Riddle text */}
                    <p className="text-sm mb-5" style={{ color: "rgba(255, 255, 255, 0.78)", lineHeight: 1.75 }}>
                      {riddle.question}
                    </p>

                    {/* Show/hide toggle */}
                    <div className="flex items-center gap-2">
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.35 }}
                        className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs flex-shrink-0"
                      >
                        ↓
                      </motion.div>
                      <span className="text-primary text-xs font-bold">
                        {isOpen ? "Hide Answer" : "Show Answer"}
                      </span>
                    </div>

                    {/* Answer reveal */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, y: -8 }}
                          animate={{ opacity: 1, height: "auto", y: 0 }}
                          exit={{ opacity: 0, height: 0, y: -8 }}
                          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="mt-4 pt-4 border-t border-white/8">
                            <p className="text-emerald-400 font-heading font-bold text-base mb-1">
                              ✓ {riddle.answer}
                            </p>
                            <p className="text-xs italic" style={{ color: "rgba(255, 255, 255, 0.55)" }}>{riddle.hint}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Hover glow strip */}
                  <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center text-xs mt-8"
          style={{ color: "rgba(180,190,220,0.45)" }}
        >
          More riddles coming in every live session ✦
        </motion.p>
      </div>
    </section>
  );
}
