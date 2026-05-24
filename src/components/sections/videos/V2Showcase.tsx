"use client";

import { useState } from "react";
import { motion } from "framer-motion";

/* ============================================
   ✦ SCENE 2 — INTERACTIVE LEARNING SHOWCASE
   Cinematic split-grid of how live classes feel
   ============================================ */

const bgFloaters = [
  { text: "×", top: "15%", left: "3%", delay: 0, size: "text-5xl md:text-7xl", blur: "blur-[3px]" },
  { text: "85²", top: "72%", left: "5%", delay: 1.2, size: "text-xl md:text-3xl", blur: "blur-[1px]" },
  { text: "∞", top: "20%", right: "4%", delay: 0.6, size: "text-4xl md:text-6xl", blur: "blur-[2px]" },
  { text: "= 7225", top: "65%", right: "6%", delay: 1.8, size: "text-sm md:text-base", blur: "blur-[0.5px]" },
];

const learningBlocks = [
  {
    icon: "⚡",
    title: "Speed Multiplication",
    category: "Vedic Tricks",
    desc: "Students multiply 2 and 3-digit numbers mentally using Vedic cross-multiplication patterns in under 3 seconds.",
    tags: ["Mental Math", "Speed", "Vedic Sutra"],
    color: "from-orange-500/10 to-amber-400/5",
    border: "border-orange-500/20",
    glow: "rgba(249,115,22,0.15)",
    accent: "#f97316",
  },
  {
    icon: "🧠",
    title: "Visual Problem Solving",
    category: "Interactive Learning",
    desc: "Complex algebra and geometry problems solved through visual patterns — students see the logic, not just the answer.",
    tags: ["Visual", "Logic", "Patterns"],
    color: "from-violet-500/10 to-purple-500/5",
    border: "border-violet-500/20",
    glow: "rgba(139,92,246,0.15)",
    accent: "#a78bfa",
  },
  {
    icon: "🎯",
    title: "Speed Math Challenges",
    category: "Student Games",
    desc: "Live competitive rounds where students race to solve calculations — making learning feel like an exciting game.",
    tags: ["Competition", "Fun", "Interactive"],
    color: "from-emerald-500/10 to-teal-500/5",
    border: "border-emerald-500/20",
    glow: "rgba(52,211,153,0.15)",
    accent: "#34d399",
  },
  {
    icon: "📐",
    title: "Vedic Formula Magic",
    category: "Visual Demonstrations",
    desc: "Ancient Vedic sutras made visible — students watch how 99×99 becomes trivial through elegant number restructuring.",
    tags: ["Sutras", "Formula", "Insight"],
    color: "from-sky-500/10 to-blue-500/5",
    border: "border-sky-500/20",
    glow: "rgba(56,189,248,0.15)",
    accent: "#38bdf8",
  },
  {
    icon: "🔢",
    title: "Digital Roots & Patterns",
    category: "Number Theory",
    desc: "Navashesh — the Vedic digital root — reveals hidden patterns. Students discover that any number holds secrets.",
    tags: ["Navashesh", "Patterns", "Discovery"],
    color: "from-pink-500/10 to-rose-500/5",
    border: "border-pink-500/20",
    glow: "rgba(244,114,182,0.15)",
    accent: "#f472b6",
  },
  {
    icon: "✨",
    title: "Live Quiz Tournaments",
    category: "Student Engagement",
    desc: "Weekly quiz tournaments keep students sharp, motivated, and genuinely looking forward to their next session.",
    tags: ["Quiz", "Motivation", "Weekly"],
    color: "from-amber-500/10 to-yellow-500/5",
    border: "border-amber-500/20",
    glow: "rgba(245,158,11,0.15)",
    accent: "#fbbf24",
  },
];

export default function V2Showcase() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="v-showcase" className="relative min-h-screen flex items-center overflow-hidden bg-[#080C14] px-5 py-24">

      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[130px]" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[400px] bg-violet-500/4 rounded-full blur-[120px]" />
      </div>

      {/* Floating math */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        {bgFloaters.map((f, i) => (
          <motion.div
            key={i}
            className={`absolute text-white font-heading font-bold ${f.size} ${f.blur}`}
            style={{ top: f.top, left: f.left, right: f.right }}
            initial={{ opacity: 0.06, y: 0 }}
            animate={{ y: [0, -18, 0], opacity: [0.06, 0.11, 0.06] }}
            transition={{ duration: 22 + i * 3, repeat: Infinity, ease: "easeInOut", delay: f.delay }}
          >
            {f.text}
          </motion.div>
        ))}
      </div>

      <div className="mx-auto w-full max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="uppercase mb-4"
            style={{ fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.24em", color: "rgba(255,255,255,0.72)" }}
          >
            ✦ How Every Class Feels
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-bold text-[clamp(1.8rem,4vw,3rem)] tracking-[-0.03em]"
            style={{ color: "rgba(255,255,255,0.96)", textShadow: "0 0 30px rgba(249,115,22,0.06)" }}
          >
            Every session is an{" "}
            <span style={{ color: "#f97316" }}>interactive experience</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm mt-3 max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.68)", lineHeight: 1.7 }}
          >
            Not a lecture — a live, engaging exploration of mathematics students actually look forward to.
          </motion.p>
        </div>

        {/* Learning blocks grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {learningBlocks.map((block, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 32 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
              }}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
              whileHover={{ y: -6, scale: 1.02 }}
              className="relative cursor-default rounded-2xl p-6 overflow-hidden group transition-all duration-300"
              style={{
                background: `linear-gradient(135deg, ${hovered === i ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.03)"}, rgba(255,255,255,0.01))`,
                border: `1px solid ${hovered === i ? block.glow.replace("0.15", "0.4") : "rgba(255,255,255,0.07)"}`,
                boxShadow: hovered === i ? `0 20px 50px ${block.glow}` : "0 8px 32px rgba(0,0,0,0.25)",
              }}
            >
              {/* Background gradient blob */}
              <div className={`absolute inset-0 bg-gradient-to-br ${block.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{block.icon}</span>
                  <span
                    className="text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded-full"
                    style={{ color: block.accent, background: `${block.glow}`, border: `1px solid ${block.glow.replace("0.15", "0.3")}` }}
                  >
                    {block.category}
                  </span>
                </div>

                <h3
                  className="font-heading font-bold text-lg mb-2"
                  style={{ color: "rgba(255,255,255,0.96)" }}
                >
                  {block.title}
                </h3>
                <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.68)", lineHeight: 1.7 }}>
                  {block.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {block.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full"
                      style={{ color: "rgba(180,190,220,0.6)", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover glow strip */}
              <div
                className="absolute inset-x-0 bottom-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(to right, transparent, ${block.accent}, transparent)` }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
