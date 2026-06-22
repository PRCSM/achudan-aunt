"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section, Card, Badge } from "@/components/ui";

/* ============================================
   ✦ SCENE 2: WHY VEDIC MATH SECTION
   Traditional vs. Vedic visual comparison with live morphing
   ============================================ */

const vedicSteps = [
  { label: "Problem", value: "45²", color: "text-text-primary" },
  { label: "Split first digit", value: "4 × (4+1) = 20", color: "text-primary" },
  { label: "Append 25 (always!)", value: "20 ‧ 25", color: "text-primary" },
  { label: "Answer ✓", value: "2025", color: "text-green-500" },
];

export default function WhyVedicSection() {
  const [step, setStep] = useState(0);

  // Auto-cycle through steps
  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % vedicSteps.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Section
      id="why-vedic"
      title={<>Why <span className="text-primary">Vedic Math?</span></>}
      subtitle="See for yourself — the same problem, two completely different journeys."
      className="scroll-mt-20 snap-start min-h-screen w-full flex items-center justify-center relative overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-slate-50 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary/4 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      </div>

      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative z-10 px-4">

        {/* ═══════════════════════════════════════
            Left Column: Traditional Calculation
            ═══════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Card
            padding="lg"
            className="border border-border/50 relative min-h-[360px] flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute top-4 right-4">
              <Badge variant="default" className="!bg-white/10 !text-white/60 font-bold uppercase tracking-wider text-[10px]">
                ✍️ Traditional
              </Badge>
            </div>

            <div>
              <h3 className="font-heading font-bold text-xl !text-black mb-1">
                Standard School Method
              </h3>
              <p className="!text-black/60 text-xs mb-6">
                45 × 45 — pen &amp; paper approach
              </p>

              {/* Long-form paper calculation */}
              <div className="font-mono text-sm bg-bg-section border border-border/50 rounded-2xl p-5 max-w-[240px] mx-auto shadow-sm">
                <div className="text-right border-b border-border/50 pb-2 mb-2 text-text-primary">
                  <div className="tracking-widest">    4 5</div>
                  <div className="tracking-widest">  × 4 5</div>
                </div>
                <div className="text-right text-text-secondary tracking-widest">    2 2 5</div>
                <div className="text-right text-text-secondary tracking-widest border-b border-border/50 pb-2 mb-2">+1 8 0 0</div>
                <div className="text-right font-bold text-text-primary tracking-widest">  2 0 2 5</div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 mt-4">
              <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
                <span className="w-2 h-2 rounded-full bg-red-300 inline-block" />
                6 steps · High carry risk · ~8 seconds
              </div>
            </div>
          </Card>
        </motion.div>

        {/* ═══════════════════════════════════════
            Right Column: Live Vedic Morphing
            ═══════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <Card
            padding="lg"
            className="border border-primary/15 relative bg-gradient-to-br from-primary-light/40 to-white min-h-[360px] flex flex-col justify-between overflow-hidden shadow-lg shadow-primary/5"
          >
            {/* Live badge */}
            <div className="absolute top-4 right-4 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
              <Badge variant="primary" className="font-bold uppercase tracking-wider text-[10px]">
                ⚡ Vedic Method
              </Badge>
            </div>

            <div>
              <h3 className="font-heading font-bold text-xl !text-primary mb-1">
                One-Line Mental Formula
              </h3>
              <p className="!text-black/60 text-xs mb-6">
                Watch how Vedic math solves it step by step
              </p>

              {/* Live Morphing Display */}
              <div className="bg-bg-section border border-primary/20 rounded-2xl p-5 min-h-[120px] flex flex-col items-center justify-center shadow-inner relative overflow-hidden">
                {/* Step progression dots */}
                <div className="flex gap-1.5 mb-4">
                  {vedicSteps.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        i === step
                          ? "w-6 bg-primary"
                          : i < step
                          ? "w-3 bg-primary/30"
                          : "w-3 bg-white/10"
                      }`}
                    />
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, y: 16, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -16, scale: 0.95 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="text-center"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-widest text-text-muted mb-1">
                      {vedicSteps[step].label}
                    </p>
                    <p className={`font-heading font-extrabold text-2xl md:text-3xl ${vedicSteps[step].color}`}>
                      {vedicSteps[step].value}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Static mini-steps reference */}
              <div className="mt-4 flex flex-col gap-1.5">
                {vedicSteps.map((s, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-2 text-xs transition-all duration-300 ${
                      i === step ? "opacity-100" : "opacity-35"
                    }`}
                  >
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold flex-shrink-0 ${
                        i < step
                          ? "bg-green-100 text-green-600"
                          : i === step
                          ? "bg-primary text-white"
                          : "bg-slate-100 text-slate-400"
                      }`}
                    >
                      {i < step ? "✓" : i + 1}
                    </span>
                    <span className={i === step ? "font-semibold !text-black" : "!text-black/50"}>
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-primary/5 mt-4">
              <div className="flex items-center justify-center gap-2 text-xs text-primary font-semibold">
                <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
                2 steps · Zero errors · ~2 seconds
              </div>
            </div>
          </Card>
        </motion.div>

      </div>
    </Section>
  );
}
