"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ============================================
   ✦ SCENE 3 — VISUAL MATH PRESENTATIONS
   Cinematic presentation panels showcasing
   teaching quality and visual explanations
   (UI styled matching MC5Formula)
   ============================================ */

const bgFloaters = [
  { text: "Σ", top: "10%", left: "4%", delay: 0, size: "text-6xl md:text-8xl", blur: "blur-[3px]" },
  { text: "11×53", top: "75%", right: "5%", delay: 1, size: "text-lg md:text-2xl", blur: "blur-[1px]" },
  { text: "Δ", top: "50%", right: "2%", delay: 0.7, size: "text-4xl md:text-5xl", blur: "blur-[2px]" },
];

const presentations = [
  {
    id: 0,
    emoji: "⚡",
    category: "Speed Calculation",
    title: "Multiplication Trick",
    desc: "Students learn fast multiplication using Vedic cross-multiplication patterns. Watch 3-digit calculations become 2-second mental math.",
    preview: "97 × 98 = ?",
    previewSub: "Using near-100 base method",
    steps: ["Write base gap: 97→−3, 98→−2", "Cross subtract: 97−2 = 95", "Multiply gaps: 3×2 = 06", "Answer: 9506"],
    time: "~12 min session",
    level: "Intermediate",
    levelColor: "#f97316",
  },
  {
    id: 1,
    emoji: "🎯",
    category: "Mental Arithmetic",
    title: "Speed Calculation",
    desc: "See how students solve calculations like 998 × 997 in under 5 seconds using the Vedic base-1000 technique.",
    preview: "998 × 997",
    previewSub: "Base-1000 Vedic technique",
    steps: ["Gaps from 1000: −2, −3", "Cross: 998−3 = 995", "Multiply gaps: 2×3 = 006", "Answer: 995,006"],
    time: "~8 min session",
    level: "Advanced",
    levelColor: "#a78bfa",
  },
  {
    id: 2,
    emoji: "🔮",
    category: "Number Logic",
    title: "Number Logic",
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
  const [step, setStep] = useState(0);
  const pres = presentations[active];

  const handleSelect = (id: number) => {
    setActive(id);
    setStep(0);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950 px-5 py-24">
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-amber-400/4 rounded-full blur-[100px]" />
      </div>

      {/* Floating math atmosphere */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        {bgFloaters.map((f, i) => (
          <motion.div
            key={i}
            className={`absolute text-white font-heading font-bold tracking-wide ${f.size} ${f.blur}`}
            style={{ top: f.top, left: f.left, right: f.right }}
            initial={{ opacity: 0.06, y: 0 }}
            animate={{ y: [0, -18, 0], opacity: [0.06, 0.12, 0.06] }}
            transition={{ duration: 22 + i * 3, repeat: Infinity, ease: "easeInOut", delay: f.delay }}
          >
            {f.text}
          </motion.div>
        ))}
      </div>

      <div className="mx-auto w-full max-w-4xl relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
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
            ✦ Visual Math Presentations
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
            Teaching quality you can <span style={{ color: "#f97316" }}>see and feel</span>
          </motion.h2>
        </div>

        {/* Presentation selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {presentations.map((p, i) => (
            <motion.button
              key={p.id}
              onClick={() => handleSelect(i)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className={`px-6 py-2.5 rounded-full font-heading font-bold text-sm transition-all duration-300 flex items-center gap-2 ${
                active === i
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "bg-white/5 border border-white/10 hover:border-primary/30"
              }`}
              style={{
                color: active === i ? "#fff" : "rgba(255,255,255,0.78)"
              }}
            >
              <span>{p.emoji}</span>
              {p.title}
            </motion.button>
          ))}
        </div>

        {/* Active Presentation Info */}
        <div className="text-center mb-8 max-w-2xl mx-auto">
          <motion.p
            key={`desc-${active}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm md:text-base mb-3"
            style={{ color: "rgba(255, 255, 255, 0.8)", lineHeight: 1.7 }}
          >
            {pres.desc}
          </motion.p>
          <div className="flex items-center justify-center gap-3">
            <span className="text-[10px] uppercase tracking-widest font-bold" style={{ color: pres.levelColor }}>
              {pres.category} • {pres.level} • {pres.time}
            </span>
          </div>
        </div>

        {/* Main morphing display */}
        <div
          className="rounded-3xl p-8 md:p-12 text-center mb-8 relative overflow-hidden min-h-[260px] flex flex-col items-center justify-center"
          style={{
            border: "1px solid rgba(255,255,255,0.08)",
            background: "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
            boxShadow: "0 10px 40px rgba(0,0,0,0.28), inset 0 0 60px rgba(249,115,22,0.04)",
          }}
        >
          {/* Spotlight radial behind formula */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: `radial-gradient(circle at center, ${pres.levelColor}15 0%, transparent 65%)` }}
          />
          {/* Animated step progress line */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-slate-800">
            <motion.div
              className="h-full"
              style={{ background: `linear-gradient(90deg, ${pres.levelColor}, #f97316)` }}
              animate={{ width: `${((step + 1) / pres.steps.length) * 100}%` }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${active}-${step}`}
              initial={{ opacity: 0, y: 24, scale: 0.95, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -24, scale: 0.95, filter: "blur(4px)" }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="text-center w-full"
            >
              <p className="text-xs uppercase tracking-widest mb-4 font-semibold" style={{ color: "rgba(255,255,255,0.5)" }}>
                Step {step + 1} / {pres.steps.length} — {pres.preview}
              </p>
              
              <p 
                className="font-heading font-extrabold text-[clamp(1.5rem,4vw,3.5rem)] leading-tight mb-4 mx-auto max-w-2xl"
                style={{ color: "rgba(255,255,255,0.96)" }}
              >
                {pres.steps[step]}
              </p>
              
              <p className="text-sm font-medium" style={{ color: pres.levelColor }}>
                {pres.previewSub}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Step dots */}
        <div className="flex justify-center gap-2.5 mb-8">
          {pres.steps.map((_, i) => (
            <button
              key={i}
              onClick={() => setStep(i)}
              className={`rounded-full transition-all duration-300 ${
                i === step ? "w-8 h-2" : i < step ? "w-2 h-2 opacity-40" : "w-2 h-2 bg-slate-700"
              }`}
              style={{ background: i <= step ? pres.levelColor : undefined }}
            />
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
            className="px-6 py-2.5 rounded-xl bg-white/5 text-slate-300 text-sm font-semibold border border-white/8 disabled:opacity-25 hover:bg-white/8 transition-colors"
          >
            ← Previous
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setStep((s) => Math.min(pres.steps.length - 1, s + 1))}
            disabled={step === pres.steps.length - 1}
            className="px-6 py-2.5 rounded-xl text-white text-sm font-bold disabled:opacity-30 transition-colors shadow-md"
            style={{ 
              background: step === pres.steps.length - 1 ? "rgba(255,255,255,0.1)" : pres.levelColor,
              boxShadow: step === pres.steps.length - 1 ? "none" : `0 4px 14px ${pres.levelColor}40`
            }}
          >
            Next Step →
          </motion.button>
        </div>

      </div>
    </section>
  );
}

