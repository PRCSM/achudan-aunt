"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ============================================
   ✦ SCENE 3 — VISUAL MATH PRESENTATIONS
   Cinematic presentation panels showcasing
   teaching quality and visual explanations
   ============================================ */

const bgFloaters = [
  { text: "Σ", top: "10%", left: "4%", delay: 0, size: "text-6xl md:text-8xl", blur: "blur-[3px]" },
  { text: "11×53", top: "75%", right: "5%", delay: 1, size: "text-lg md:text-2xl", blur: "blur-[1px]" },
  { text: "Δ", top: "50%", right: "2%", delay: 0.7, size: "text-4xl md:text-5xl", blur: "blur-[2px]" },
];

const presentations = [
  {
    id: 1,
    emoji: "⚡",
    category: "Speed Calculation",
    title: "Multiplication Trick Session",
    desc: "Students learn fast multiplication using Vedic cross-multiplication patterns. Watch 3-digit calculations become 2-second mental math.",
    preview: "97 × 98 = ?",
    previewSub: "Using near-100 base method",
    steps: ["Write base gap: 97→−3, 98→−2", "Cross subtract: 97−2 = 95", "Multiply gaps: 3×2 = 06", "Answer: 9506"],
    time: "~12 min session",
    level: "Intermediate",
    levelColor: "#f97316",
  },
  {
    id: 2,
    emoji: "🎯",
    category: "Mental Arithmetic",
    title: "Speed Calculation Demo",
    desc: "See how students solve calculations like 998 × 997 in under 5 seconds using the Vedic base-1000 technique.",
    preview: "998 × 997",
    previewSub: "Base-1000 Vedic technique",
    steps: ["Gaps from 1000: −2, −3", "Cross: 998−3 = 995", "Multiply gaps: 2×3 = 006", "Answer: 995,006"],
    time: "~8 min session",
    level: "Advanced",
    levelColor: "#a78bfa",
  },
  {
    id: 3,
    emoji: "🔮",
    category: "Number Logic",
    title: "Number Logic Presentation",
    desc: "Understand why formulas work instead of memorizing them. Students discover mathematical patterns through guided visual exploration.",
    preview: "n(n+1)/2",
    previewSub: "Sum of first n numbers — visualized",
    steps: ["Draw n rows of dots", "Mirror the triangle", "Rectangle: n × (n+1)", "Half = n(n+1)/2 ✓"],
    time: "~15 min session",
    level: "Foundational",
    levelColor: "#34d399",
  },
];

export default function V3Presentations() {
  const [active, setActive] = useState<number>(0);
  const pres = presentations[active];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950 px-5 py-24">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/6 rounded-full blur-[140px]" />
      </div>

      {/* Floating math */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        {bgFloaters.map((f, i) => (
          <motion.div
            key={i}
            className={`absolute text-white font-heading font-bold ${f.size} ${f.blur}`}
            style={{ top: f.top, left: f.left, right: f.right }}
            initial={{ opacity: 0.06, y: 0 }}
            animate={{ y: [0, -16, 0], opacity: [0.06, 0.12, 0.06] }}
            transition={{ duration: 20 + i * 4, repeat: Infinity, ease: "easeInOut", delay: f.delay }}
          >
            {f.text}
          </motion.div>
        ))}
      </div>

      <div className="mx-auto w-full max-w-6xl relative z-10">

        {/* Header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="uppercase mb-4"
            style={{ fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.24em", color: "rgba(255,255,255,0.72)" }}
          >
            ✦ Visual Math Presentations
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-bold text-[clamp(1.8rem,4vw,3rem)] tracking-[-0.03em]"
            style={{ color: "rgba(255,255,255,0.96)" }}
          >
            Teaching quality you can{" "}
            <span style={{ color: "#f97316" }}>see and feel</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 items-center">

          {/* Left — Session Selector */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {presentations.map((p, i) => (
              <motion.button
                key={p.id}
                onClick={() => setActive(i)}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-full text-left rounded-2xl p-5 transition-all duration-300 relative overflow-hidden"
                style={{
                  background: active === i
                    ? "linear-gradient(135deg, rgba(249,115,22,0.10), rgba(249,115,22,0.04))"
                    : "rgba(255,255,255,0.03)",
                  border: `1px solid ${active === i ? "rgba(249,115,22,0.35)" : "rgba(255,255,255,0.07)"}`,
                  boxShadow: active === i ? "0 8px 30px rgba(249,115,22,0.10)" : "none",
                }}
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl flex-shrink-0">{p.emoji}</span>
                  <div className="min-w-0">
                    <p
                      className="text-[10px] uppercase tracking-[0.18em] mb-0.5 font-semibold"
                      style={{ color: active === i ? "#f97316" : "rgba(180,190,220,0.48)" }}
                    >
                      {p.category}
                    </p>
                    <p
                      className="font-heading font-bold text-sm truncate"
                      style={{ color: active === i ? "rgba(255,255,255,0.96)" : "rgba(255,255,255,0.72)" }}
                    >
                      {p.title}
                    </p>
                  </div>
                  <div
                    className="ml-auto flex-shrink-0 w-2 h-2 rounded-full transition-all duration-300"
                    style={{ background: active === i ? "#f97316" : "rgba(255,255,255,0.15)" }}
                  />
                </div>
                {/* Active glow bar */}
                {active === i && (
                  <motion.div
                    layoutId="pres-bar"
                    className="absolute inset-y-0 left-0 w-[3px] bg-primary rounded-r"
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Right — Active Presentation Display */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="rounded-3xl overflow-hidden"
                style={{
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: `0 20px 60px rgba(0,0,0,0.35), inset 0 0 60px rgba(249,115,22,0.03)`,
                }}
              >
                {/* Presentation "screen" */}
                <div
                  className="relative p-8 md:p-10 text-center"
                  style={{
                    background: "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  {/* Spotlight */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: "radial-gradient(circle at 50% 40%, rgba(249,115,22,0.07) 0%, transparent 65%)" }}
                  />

                  <div className="relative z-10">
                    <p
                      className="text-[10px] uppercase tracking-[0.2em] mb-4 font-semibold"
                      style={{ color: pres.levelColor }}
                    >
                      {pres.level} Level — {pres.time}
                    </p>
                    <motion.p
                      key={pres.preview}
                      initial={{ scale: 0.85, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 250, damping: 20 }}
                      className="font-heading font-extrabold text-[clamp(2.5rem,6vw,4.5rem)] leading-none mb-3"
                      style={{ color: pres.levelColor, textShadow: `0 0 40px ${pres.levelColor}60` }}
                    >
                      {pres.preview}
                    </motion.p>
                    <p className="text-sm" style={{ color: "rgba(180,190,220,0.48)" }}>{pres.previewSub}</p>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 md:p-8" style={{ background: "rgba(0,0,0,0.2)" }}>
                  <h3
                    className="font-heading font-bold text-xl mb-2"
                    style={{ color: "rgba(255,255,255,0.96)" }}
                  >
                    {pres.title}
                  </h3>
                  <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.68)", lineHeight: 1.7 }}>
                    {pres.desc}
                  </p>

                  {/* Step breakdown */}
                  <div className="space-y-2.5">
                    {pres.steps.map((step, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.08 }}
                        className="flex items-center gap-3"
                      >
                        <span
                          className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0"
                          style={{ background: `${pres.levelColor}20`, color: pres.levelColor }}
                        >
                          {idx + 1}
                        </span>
                        <span className="text-sm font-mono" style={{ color: "rgba(255,255,255,0.78)" }}>
                          {step}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
