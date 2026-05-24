"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ============================================
   ✦ SCENE 5 — INTERACTIVE FORMULA VISUALIZATION
   Two formula morphing experiences: 99×99 and 11×53
   ============================================ */

const bgFloaters = [
  { text: "99×99", top: "10%", left: "6%", delay: 0, size: "text-lg md:text-2xl", blur: "blur-[1px]" },
  { text: "9801", top: "70%", left: "4%", delay: 1.2, size: "text-base md:text-xl", blur: "blur-[2px]" },
  { text: "11×53", top: "18%", right: "7%", delay: 0.8, size: "text-sm md:text-lg", blur: "blur-[1.5px]" },
  { text: "583", top: "65%", right: "5%", delay: 1.8, size: "text-xl md:text-3xl", blur: "blur-[1px]" },
  { text: "π", top: "40%", left: "2%", delay: 0.5, size: "text-4xl md:text-6xl", blur: "blur-[3px]" },
  { text: "= 2025", top: "85%", left: "40%", delay: 1, size: "text-xs md:text-sm", blur: "blur-[1px]" },
  { text: "√", top: "52%", right: "3%", delay: 2, size: "text-3xl md:text-5xl", blur: "blur-[2px]" },
];

type FormulaId = "99x99" | "11x53";

const formulas: Record<FormulaId, { title: string; steps: { label: string; display: string; color: string; sub?: string }[] }> = {
  "99x99": {
    title: "99 × 99",
    steps: [
      { label: "Start with", display: "99 × 99", color: "text-white" },
      { label: "Rewrite as", display: "(100 − 1)²", color: "text-amber-400", sub: "near-10 base trick" },
      { label: "Expand", display: "100² − 2×100 + 1", color: "text-primary", sub: "= 10000 − 200 + 1" },
      { label: "Simplify", display: "9801", color: "text-emerald-400", sub: "✓ Solved in 2 steps!" },
    ],
  },
  "11x53": {
    title: "11 × 53",
    steps: [
      { label: "Start with", display: "11 × 53", color: "text-white" },
      { label: "Split the digits of 53", display: "5 _ 3", color: "text-amber-400", sub: "write digits apart" },
      { label: "Add the digits: 5+3", display: "5 | 8 | 3", color: "text-primary", sub: "insert sum in middle" },
      { label: "Read the result", display: "583", color: "text-emerald-400", sub: "✓ Instant answer!" },
    ],
  },
};

export default function MC5Formula() {
  const [active, setActive] = useState<FormulaId>("99x99");
  const [step, setStep] = useState(0);
  const formula = formulas[active];

  const handleSelect = (id: FormulaId) => {
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

      <div className="mx-auto w-full max-w-3xl relative z-10">
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
            ✦ Formula Magic
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
            Watch formulas <span style={{ color: "#f97316" }}>transform</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm mt-2"
            style={{ color: "rgba(255, 255, 255, 0.68)", lineHeight: 1.75 }}
          >
            Step through how Vedic Math restructures hard problems into trivial ones
          </motion.p>
        </div>

        {/* Formula selector */}
        <div className="flex justify-center gap-4 mb-10">
          {(Object.keys(formulas) as FormulaId[]).map((id) => (
            <motion.button
              key={id}
              onClick={() => handleSelect(id)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className={`px-6 py-2.5 rounded-full font-heading font-bold text-sm transition-all duration-300 ${
                active === id
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "bg-white/5 border border-white/10 hover:border-primary/30"
              }`}
              style={{
                color: active === id ? "#fff" : "rgba(255,255,255,0.78)"
              }}
            >
              {formulas[id].title}
            </motion.button>
          ))}
        </div>

        {/* Main morphing display */}
        <div
          className="rounded-3xl p-8 md:p-12 text-center mb-8 relative overflow-hidden min-h-[220px] flex flex-col items-center justify-center"
          style={{
            border: "1px solid rgba(255,255,255,0.08)",
            background: "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
            boxShadow: "0 10px 40px rgba(0,0,0,0.28), inset 0 0 60px rgba(249,115,22,0.04)",
          }}
        >
          {/* Spotlight radial behind formula */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(circle at center, rgba(249,115,22,0.08) 0%, transparent 65%)" }}
          />
          {/* Animated step progress line */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-slate-800">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-amber-400"
              animate={{ width: `${((step + 1) / formula.steps.length) * 100}%` }}
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
              className="text-center"
            >
              <p className="text-xs uppercase tracking-widest mb-3 font-semibold" style={{ color: "rgba(255,255,255,0.78)" }}>
                Step {step + 1} / {formula.steps.length} — {formula.steps[step].label}
              </p>
              <p className={`font-heading font-extrabold text-[clamp(2.2rem,6vw,4.5rem)] leading-none mb-3 ${formula.steps[step].color}`}>
                {formula.steps[step].display}
              </p>
              {formula.steps[step].sub && (
                <p className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.68)" }}>{formula.steps[step].sub}</p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Step dots */}
        <div className="flex justify-center gap-2.5 mb-8">
          {formula.steps.map((_, i) => (
            <button
              key={i}
              onClick={() => setStep(i)}
              className={`rounded-full transition-all duration-300 ${
                i === step ? "w-8 h-2 bg-primary" : i < step ? "w-2 h-2 bg-primary/40" : "w-2 h-2 bg-slate-700"
              }`}
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
            onClick={() => setStep((s) => Math.min(formula.steps.length - 1, s + 1))}
            disabled={step === formula.steps.length - 1}
            className="px-6 py-2.5 rounded-xl bg-primary text-white text-sm font-bold disabled:opacity-30 hover:bg-primary-hover transition-colors shadow-md shadow-primary/20"
          >
            Next Step →
          </motion.button>
        </div>

        {/* Mesmerizing hint */}
        {step === formula.steps.length - 1 && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 text-center"
          >
            <p className="text-sm" style={{ color: "rgba(180,190,220,0.48)" }}>
              ✦ Want to learn more tricks like this?{" "}
              <a href="/#demo-form" className="text-primary font-bold hover:underline">
                Book a free demo class →
              </a>
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
