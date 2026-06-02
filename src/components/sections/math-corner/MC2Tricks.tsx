"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ============================================
   ✦ SCENE 2 — VISUAL VEDIC MATH TRICKS
   Area trick (85²) + interactive calc (ending in 5)
   (UI styled matching previous V3Presentations)
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

const features = [
  {
    id: 0,
    emoji: "⚡",
    category: "Step-by-step",
    title: "Area Trick Visualizer",
    desc: "Watch 85 × 85 solve itself step by step",
  },
  {
    id: 1,
    emoji: "🧮",
    category: "Interactive",
    title: "Live Calculator",
    desc: "Try it yourself: enter any number ending in 5",
  }
];

function AreaTrick() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div
      className="rounded-3xl p-8 overflow-hidden relative"
      style={{
        border: "1px solid rgba(255,255,255,0.08)",
        background: "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
        boxShadow: "0 20px 60px rgba(0,0,0,0.35), inset 0 0 60px rgba(249,115,22,0.03)"
      }}
    >
      {/* Spotlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(circle at 50% 40%, rgba(249,115,22,0.07) 0%, transparent 65%)" }}
      />
      <div className="relative z-10">
        <h3 className="font-heading font-bold text-xl text-white mb-1">Area Trick</h3>
        <p className="text-sm mb-6" style={{ color: "rgba(180,190,220,0.48)" }}>Watch 85 × 85 solve itself step by step</p>

        {/* Step cards */}
        <div className="space-y-3 mb-6">
          {trick1Steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.1 }}
              onClick={() => setActiveStep(i)}
              className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                activeStep === i
                  ? "bg-white/10 border border-white/20 shadow-md"
                  : "hover:bg-white/5 border border-transparent"
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 transition-colors ${
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
            className="flex-1 py-2.5 rounded-xl bg-slate-800 text-slate-300 text-sm font-semibold disabled:opacity-30 hover:bg-slate-700 transition-colors"
          >
            ← Prev
          </button>
          <button
            onClick={() => setActiveStep((s) => Math.min(trick1Steps.length - 1, s + 1))}
            disabled={activeStep === trick1Steps.length - 1}
            className="flex-1 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold disabled:opacity-40 hover:bg-primary-hover transition-colors shadow-lg shadow-primary/20"
          >
            Next →
          </button>
        </div>

        {/* Live answer reveal */}
        <AnimatePresence>
          {activeStep === trick1Steps.length - 1 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className="mt-6 p-5 rounded-2xl bg-emerald-400/10 border border-emerald-400/20 text-center relative overflow-hidden"
            >
              <p className="text-emerald-400/60 text-xs uppercase tracking-widest font-bold mb-1">Final Answer</p>
              <p className="font-heading font-extrabold text-4xl text-emerald-400">85² = 7225</p>
              <p className="text-emerald-400/80 text-xs mt-2 font-semibold">Solved in under 2 seconds ⚡</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function SquareCalc() {
  const [input, setInput] = useState("45");
  const num = parseInt(input);
  const valid = !isNaN(num) && num % 10 === 5 && num >= 15 && num <= 995;
  const base = Math.floor(num / 10);
  const result = valid ? base * (base + 1) * 100 + 25 : null;

  return (
    <div
      className="rounded-3xl p-8 overflow-hidden relative h-full flex flex-col"
      style={{
        border: "1px solid rgba(255,255,255,0.08)",
        background: "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
        boxShadow: "0 20px 60px rgba(0,0,0,0.35), inset 0 0 60px rgba(249,115,22,0.03)"
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(circle at 50% 40%, rgba(249,115,22,0.07) 0%, transparent 65%)" }}
      />
      <div className="relative z-10 flex flex-col h-full">
        <h3 className="font-heading font-bold text-xl text-white mb-1">
          Live Calculator
        </h3>
        <p className="text-sm mb-8" style={{ color: "rgba(180,190,220,0.48)" }}>Enter any number ending in 5</p>

        <div className="flex items-center justify-center gap-3 mb-8">
          <input
            type="number"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-32 bg-slate-900 border border-slate-700 rounded-2xl px-4 py-3 font-mono text-3xl text-white text-center focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-inner"
          />
          <span className="text-slate-400 text-3xl font-bold">²</span>
        </div>

        <div className="flex-1">
          <AnimatePresence mode="wait">
            {valid && result !== null ? (
              <motion.div
                key={input}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="space-y-4 font-mono text-sm"
              >
                <div className="flex items-center gap-4 bg-black/20 p-4 rounded-xl border border-white/5" style={{ color: "rgba(255,255,255,0.78)" }}>
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center font-bold shrink-0">1</span>
                  <span>Take <span className="text-white font-bold">{base}</span> × <span className="text-white font-bold">{base + 1}</span> = <span className="text-primary font-bold text-base">{base * (base + 1)}</span></span>
                </div>
                <div className="flex items-center gap-4 bg-black/20 p-4 rounded-xl border border-white/5" style={{ color: "rgba(255,255,255,0.78)" }}>
                  <span className="w-6 h-6 rounded-full bg-amber-400/20 text-amber-400 text-xs flex items-center justify-center font-bold shrink-0">2</span>
                  <span>Always append <span className="text-amber-400 font-bold">25</span></span>
                </div>
                <motion.div
                  className="mt-6 p-5 border border-emerald-400/20 bg-emerald-400/10 rounded-2xl text-center"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                >
                  <p className="text-xs mb-1 uppercase tracking-widest font-bold" style={{ color: "rgba(180,190,220,0.48)" }}>Answer</p>
                  <p className="font-heading font-extrabold text-3xl md:text-4xl text-emerald-400">
                    {num}² = {result.toLocaleString()}
                  </p>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="invalid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center justify-center h-full min-h-[200px]"
              >
                <p className="text-red-400/80 text-sm font-mono bg-red-400/10 px-6 py-4 rounded-xl border border-red-400/20">
                  ⚠ Please enter a number ending in 5 (15–995)
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Rule reminder */}
        <div className="mt-8 bg-primary/10 border border-primary/20 rounded-2xl p-5 text-center">
          <p className="text-primary font-bold text-sm mb-2 uppercase tracking-wider">
            ✦ The Vedic Rule
          </p>
          <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.78)" }}>
            For any number ending in 5: multiply the first digit(s) by the next number, then append <strong className="text-amber-400">25</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function MC2Tricks() {
  const [active, setActive] = useState(0);

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
        <div className="text-center mb-12">
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

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 items-start">
          
          {/* Left — Feature Selector */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {features.map((f, i) => (
              <motion.button
                key={f.id}
                onClick={() => setActive(i)}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-full text-left rounded-2xl p-6 transition-all duration-300 relative overflow-hidden"
                style={{
                  background: active === i
                    ? "linear-gradient(135deg, rgba(249,115,22,0.10), rgba(249,115,22,0.04))"
                    : "rgba(255,255,255,0.03)",
                  border: `1px solid ${active === i ? "rgba(249,115,22,0.35)" : "rgba(255,255,255,0.07)"}`,
                  boxShadow: active === i ? "0 8px 30px rgba(249,115,22,0.10)" : "none",
                }}
              >
                <div className="flex items-center gap-5">
                  <span className="text-3xl flex-shrink-0 drop-shadow-md">{f.emoji}</span>
                  <div className="min-w-0">
                    <p
                      className="text-[10px] uppercase tracking-[0.18em] mb-1 font-semibold"
                      style={{ color: active === i ? "#f97316" : "rgba(180,190,220,0.48)" }}
                    >
                      {f.category}
                    </p>
                    <p
                      className="font-heading font-bold text-base truncate mb-1"
                      style={{ color: active === i ? "rgba(255,255,255,0.96)" : "rgba(255,255,255,0.72)" }}
                    >
                      {f.title}
                    </p>
                    <p className="text-xs truncate" style={{ color: "rgba(255,255,255,0.5)" }}>
                      {f.desc}
                    </p>
                  </div>
                  <div
                    className="ml-auto flex-shrink-0 w-2 h-2 rounded-full transition-all duration-300"
                    style={{ background: active === i ? "#f97316" : "rgba(255,255,255,0.15)" }}
                  />
                </div>
                {active === i && (
                  <motion.div
                    layoutId="trick-bar"
                    className="absolute inset-y-0 left-0 w-[4px] bg-primary rounded-r"
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Right — Active Display */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="h-full min-h-[450px]"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="h-full"
              >
                {active === 0 ? <AreaTrick /> : <SquareCalc />}
              </motion.div>
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
