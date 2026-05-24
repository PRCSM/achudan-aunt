"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ============================================
   ✦ SCENE 2 — VISUAL VEDIC MATH TRICKS
   Area trick (85²) + interactive calc (ending in 5)
   ============================================ */

const bgFloaters = [
  { text: "85²", top: "12%", left: "6%", delay: 0, size: "text-lg md:text-2xl", blur: "blur-[1px]" },
  { text: "7225", top: "72%", left: "4%", delay: 1.2, size: "text-base md:text-xl", blur: "blur-[2px]" },
  { text: "45²", top: "20%", right: "7%", delay: 0.6, size: "text-sm md:text-lg", blur: "blur-[1.5px]" },
  { text: "∑", top: "55%", right: "5%", delay: 1.8, size: "text-3xl md:text-5xl", blur: "blur-[2.5px]" },
  { text: "n(n+1)", top: "82%", left: "38%", delay: 0.4, size: "text-xs", blur: "blur-[1px]" },
  { text: "∞", top: "38%", left: "2%", delay: 2, size: "text-2xl md:text-3xl", blur: "blur-[3px]" },
  { text: "= 2025", top: "65%", right: "9%", delay: 1, size: "text-xs md:text-sm", blur: "blur-[1px]" },
];

const trick1Steps = [
  { label: "Start with", value: "85 × 85", color: "text-white" },
  { label: "Last digits: 5 × 5", value: "= 25", color: "text-amber-400" },
  { label: "First digit × next: 8 × 9", value: "= 72", color: "text-primary" },
  { label: "Join them", value: "72 | 25 = 7225", color: "text-emerald-400" },
];

function SquareCalc() {
  const [input, setInput] = useState("45");
  const num = parseInt(input);
  const valid = !isNaN(num) && num % 10 === 5 && num >= 15 && num <= 995;
  const base = Math.floor(num / 10);
  const result = valid ? base * (base + 1) * 100 + 25 : null;

  return (
    <div
      className="rounded-2xl p-6 md:p-8"
      style={{
        border: "1px solid rgba(255,255,255,0.08)",
        background: "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
        boxShadow: "0 10px 40px rgba(0,0,0,0.28)"
      }}
    >
      <h3 className="font-heading font-bold text-lg text-white mb-1">
        Live Calculator
      </h3>
      <p className="text-xs mb-5" style={{ color: "rgba(180,190,220,0.48)" }}>Enter any number ending in 5</p>

      <div className="flex items-center gap-3 mb-6">
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-28 bg-slate-800 border border-slate-600 rounded-xl px-4 py-2.5 font-mono text-xl text-white text-center focus:outline-none focus:border-primary"
        />
        <span className="text-slate-400 text-xl font-bold">²</span>
      </div>

      <AnimatePresence mode="wait">
        {valid && result !== null ? (
          <motion.div
            key={input}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="space-y-3 font-mono text-sm"
          >
            <div className="flex items-center gap-3 font-mono text-sm" style={{ color: "rgba(255,255,255,0.78)" }}>
              <span className="w-5 h-5 rounded-full bg-primary/20 text-primary text-[10px] flex items-center justify-center font-bold">1</span>
              Take <span className="text-white font-bold">{base}</span> × <span className="text-white font-bold">{base + 1}</span> =
              <span className="text-primary font-bold text-base">{base * (base + 1)}</span>
            </div>
            <div className="flex items-center gap-3 font-mono text-sm" style={{ color: "rgba(255,255,255,0.78)" }}>
              <span className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-400 text-[10px] flex items-center justify-center font-bold">2</span>
              Always append <span className="text-amber-400 font-bold">25</span>
            </div>
            <motion.div
              className="mt-4 pt-4 border-t border-slate-700 text-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
            >
              <p className="text-xs mb-1" style={{ color: "rgba(180,190,220,0.48)" }}>Answer</p>
              <p className="font-heading font-extrabold text-3xl md:text-4xl text-emerald-400">
                {num}² = {result.toLocaleString()}
              </p>
            </motion.div>
          </motion.div>
        ) : (
          <motion.p
            key="invalid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-400 text-sm font-mono"
          >
            ⚠ Enter a number ending in 5 (15–995)
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function MC2Tricks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="mc-tricks" className="relative min-h-screen flex items-center overflow-hidden bg-slate-950 px-5 py-24">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/4 rounded-full blur-[130px] -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Floating math atmosphere */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        {bgFloaters.map((f, i) => (
          <motion.div
            key={i}
            className={`absolute text-white font-heading font-bold tracking-wide ${f.size} ${f.blur}`}
            style={{ top: f.top, left: f.left, right: f.right }}
            initial={{ opacity: 0.05, y: 0 }}
            animate={{ y: [0, -18, 0], opacity: [0.05, 0.11, 0.05] }}
            transition={{ duration: 22 + i * 3.5, repeat: Infinity, ease: "easeInOut", delay: f.delay }}
          >
            {f.text}
          </motion.div>
        ))}
      </div>

      <div className="mx-auto w-full max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
            className="font-medium uppercase mb-[18px]"
            style={{ fontSize: "0.72rem", letterSpacing: "0.24em", color: "rgba(255, 255, 255, 0.72)" }}
          >
            ✦ Visual Vedic Tricks
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-bold text-[clamp(1.8rem,4vw,3rem)] tracking-[-0.03em]"
            style={{
              textShadow: "0 0 12px rgba(255,255,255,0.05), 0 0 30px rgba(249,115,22,0.06)"
            }}
          >
            <span style={{ color: "rgba(255,255,255,0.96)" }}>See the logic, </span>
            <span style={{ color: "#f97316" }}>not just the answer</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* ── Left: Step-by-step 85² visual ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-6 md:p-8"
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
              background: "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
              boxShadow: "0 10px 40px rgba(0,0,0,0.28)"
            }}
          >
            <h3 className="font-heading font-bold text-lg text-white mb-1">Area Trick</h3>
            <p className="text-xs mb-6" style={{ color: "rgba(180,190,220,0.48)" }}>Watch 85 × 85 solve itself step by step</p>

            {/* Step cards */}
            <div className="space-y-3 mb-6">
              {trick1Steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.15 }}
                  onClick={() => setActiveStep(i)}
                  className={`flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-all duration-300 ${
                    activeStep === i
                      ? "bg-white/8 border border-white/10"
                      : "hover:bg-white/4"
                  }`}
                >
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold flex-shrink-0 transition-colors ${
                    activeStep >= i ? "bg-primary text-white" : "bg-slate-800 text-slate-500"
                  }`}>
                    {i + 1}
                  </div>
                  <div>
                    <p className="text-xs transition-colors duration-300" style={{ color: activeStep === i ? "#f97316" : "rgba(255,255,255,0.78)", fontWeight: 500 }}>{step.label}</p>
                    <p className={`font-heading font-bold text-lg ${step.color}`}>{step.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Prev / Next controls */}
            <div className="flex gap-3">
              <button
                onClick={() => setActiveStep((s) => Math.max(0, s - 1))}
                disabled={activeStep === 0}
                className="flex-1 py-2 rounded-xl bg-slate-800 text-slate-300 text-sm font-semibold disabled:opacity-30 hover:bg-slate-700 transition-colors"
              >
                ← Prev
              </button>
              <button
                onClick={() => setActiveStep((s) => Math.min(trick1Steps.length - 1, s + 1))}
                disabled={activeStep === trick1Steps.length - 1}
                className="flex-1 py-2 rounded-xl bg-primary text-white text-sm font-semibold disabled:opacity-40 hover:bg-primary-hover transition-colors"
              >
                Next →
              </button>
            </div>

            {/* Live answer reveal */}
            <AnimatePresence>
              {activeStep === trick1Steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                  className="mt-5 p-4 rounded-xl bg-emerald-400/10 border border-emerald-400/20 text-center"
                >
                  <p className="text-slate-400 text-xs mb-1">Final Answer</p>
                  <p className="font-heading font-extrabold text-4xl text-emerald-400">85² = 7225</p>
                  <p className="text-emerald-400/60 text-xs mt-1">Solved in under 2 seconds ⚡</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* ── Right: Interactive live calculator ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <SquareCalc />

            {/* Rule reminder */}
            <div className="mt-5 bg-primary/10 border border-primary/20 rounded-2xl p-4 text-center">
              <p className="text-primary font-bold text-sm">
                ✦ The Vedic Rule
              </p>
              <p className="text-xs mt-1 leading-relaxed" style={{ color: "rgba(255,255,255,0.78)", lineHeight: 1.75 }}>
                For any number ending in 5: multiply the first digit(s) by the next number, then append <strong className="text-amber-400">25</strong>.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
