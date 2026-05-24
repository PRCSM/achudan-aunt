"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ============================================
   ✦ SCENE 4 — QUIZ & STUDENT ENGAGEMENT
   Energetic, game-like UI showing interactive
   classroom quiz moments
   ============================================ */

type QuizQuestion = {
  q: string;
  options: string[];
  answer: number; // index
  trick: string;
};

const DEFAULT_INDEX = 0;

const quizQuestions: QuizQuestion[] = [
  {
    q: "What is 45² using the Vedic shortcut?",
    options: ["1925", "2025", "2125", "1825"],
    answer: 1,
    trick: "4 × 5 = 20, append 25 → 2025",
  },
  {
    q: "What is the digital root of 999?",
    options: ["6", "27", "9", "18"],
    answer: 2,
    trick: "9+9+9 = 27 → 2+7 = 9",
  },
  {
    q: "11 × 53 using the 11-rule:",
    options: ["583", "553", "633", "573"],
    answer: 0,
    trick: "5 _ 3 → insert 5+3=8 → 583",
  },
  {
    q: "99 × 99 using base-100 method:",
    options: ["9701", "9801", "9901", "9601"],
    answer: 1,
    trick: "Both 1 from 100: 99−1=98, 1×1=01 → 9801",
  },
];

const bgFloaters = [
  { text: "?", top: "8%", left: "5%", delay: 0, size: "text-6xl md:text-8xl", blur: "blur-[2px]" },
  { text: "✓", top: "70%", right: "4%", delay: 1.2, size: "text-5xl md:text-7xl", blur: "blur-[1.5px]" },
  { text: "!", top: "40%", left: "2%", delay: 0.8, size: "text-4xl md:text-6xl", blur: "blur-[3px]" },
  { text: "∑", top: "80%", left: "38%", delay: 1.8, size: "text-3xl md:text-4xl", blur: "blur-[1px]" },
];

const engagementStats = [
  { label: "Questions per session", value: "20+", icon: "❓" },
  { label: "Average response speed", value: "< 5s", icon: "⚡" },
  { label: "Student accuracy rate", value: "94%", icon: "🎯" },
  { label: "Engagement score", value: "9.8/10", icon: "🌟" },
];

export default function V4Quiz() {
  const [current, setCurrent] = useState(DEFAULT_INDEX);
  const [selected, setSelected] = useState<number | null>(null);
  const [showTrick, setShowTrick] = useState(false);
  const [score, setScore] = useState(0);
  const q = quizQuestions[current];

  const handleSelect = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    if (idx === q.answer) setScore((s) => s + 1);
    setTimeout(() => setShowTrick(true), 400);
  };

  const next = () => {
    setSelected(null);
    setShowTrick(false);
    setCurrent((c) => (c + 1) % quizQuestions.length);
  };

  // Reset on question change
  useEffect(() => {
    setSelected(null);
    setShowTrick(false);
  }, [current]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#080C14] px-5 py-24">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[130px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[300px] bg-emerald-500/4 rounded-full blur-[120px]" />
      </div>

      {/* Floating symbols */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        {bgFloaters.map((f, i) => (
          <motion.div
            key={i}
            className={`absolute text-white font-heading font-bold ${f.size} ${f.blur}`}
            style={{ top: f.top, left: f.left, right: f.right }}
            initial={{ opacity: 0.04, y: 0 }}
            animate={{ y: [0, -14, 0], opacity: [0.04, 0.09, 0.04] }}
            transition={{ duration: 16 + i * 3, repeat: Infinity, ease: "easeInOut", delay: f.delay }}
          >
            {f.text}
          </motion.div>
        ))}
      </div>

      <div className="mx-auto w-full max-w-5xl relative z-10">

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
            ✦ Quiz & Student Engagement
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-bold text-[clamp(1.8rem,4vw,3rem)] tracking-[-0.03em]"
            style={{ color: "rgba(255,255,255,0.96)" }}
          >
            Can you crack these{" "}
            <span style={{ color: "#f97316" }}>live class questions?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm mt-3"
            style={{ color: "rgba(255,255,255,0.68)", lineHeight: 1.7 }}
          >
            This is exactly what students experience in every live session.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 items-start">

          {/* Left — Interactive Quiz */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Score bar */}
            <div className="flex items-center justify-between mb-5 px-1">
              <div className="flex items-center gap-2">
                {quizQuestions.map((_, i) => (
                  <div
                    key={i}
                    className="h-1.5 rounded-full transition-all duration-300"
                    style={{
                      width: i === current ? "28px" : "8px",
                      background: i === current ? "#f97316" : i < current ? "rgba(249,115,22,0.35)" : "rgba(255,255,255,0.12)",
                    }}
                  />
                ))}
              </div>
              <span className="text-xs font-bold" style={{ color: "rgba(255,255,255,0.78)" }}>
                Score: <span className="text-primary">{score}</span>/{quizQuestions.length}
              </span>
            </div>

            {/* Question card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                className="rounded-3xl overflow-hidden"
                style={{
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 16px 50px rgba(0,0,0,0.30)",
                }}
              >
                {/* Question */}
                <div
                  className="p-7 relative"
                  style={{
                    background: "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: "radial-gradient(circle at 30% 50%, rgba(249,115,22,0.06) 0%, transparent 70%)" }}
                  />
                  <p className="text-[10px] uppercase tracking-[0.18em] mb-3 font-semibold" style={{ color: "rgba(180,190,220,0.48)" }}>
                    Question {current + 1} of {quizQuestions.length}
                  </p>
                  <p className="font-heading font-bold text-lg relative z-10" style={{ color: "rgba(255,255,255,0.96)", lineHeight: 1.4 }}>
                    {q.q}
                  </p>
                </div>

                {/* Options */}
                <div className="p-5 space-y-3" style={{ background: "rgba(0,0,0,0.15)" }}>
                  {q.options.map((opt, idx) => {
                    const isSelected = selected === idx;
                    const isCorrect = idx === q.answer;
                    const revealed = selected !== null;

                    let bg = "rgba(255,255,255,0.04)";
                    let border = "rgba(255,255,255,0.08)";
                    let textColor = "rgba(255,255,255,0.78)";

                    if (revealed) {
                      if (isCorrect) { bg = "rgba(52,211,153,0.10)"; border = "rgba(52,211,153,0.40)"; textColor = "#34d399"; }
                      else if (isSelected) { bg = "rgba(248,113,113,0.10)"; border = "rgba(248,113,113,0.40)"; textColor = "#f87171"; }
                    } else if (isSelected) {
                      bg = "rgba(249,115,22,0.10)";
                      border = "rgba(249,115,22,0.40)";
                    }

                    return (
                      <motion.button
                        key={idx}
                        onClick={() => handleSelect(idx)}
                        disabled={selected !== null}
                        whileHover={selected === null ? { x: 4, scale: 1.01 } : {}}
                        whileTap={selected === null ? { scale: 0.98 } : {}}
                        className="w-full text-left rounded-xl px-5 py-3.5 transition-all duration-300 flex items-center gap-3"
                        style={{ background: bg, border: `1px solid ${border}`, color: textColor }}
                      >
                        <span
                          className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 transition-all duration-300"
                          style={{ background: `${border}`, border: `1px solid ${border}` }}
                        >
                          {["A", "B", "C", "D"][idx]}
                        </span>
                        <span className="font-medium text-sm">{opt}</span>
                        {revealed && isCorrect && <span className="ml-auto text-emerald-400 font-bold">✓</span>}
                        {revealed && isSelected && !isCorrect && <span className="ml-auto text-red-400 font-bold">✗</span>}
                      </motion.button>
                    );
                  })}
                </div>

                {/* Trick reveal */}
                <AnimatePresence>
                  {showTrick && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div
                        className="px-6 py-4"
                        style={{ background: "rgba(249,115,22,0.06)", borderTop: "1px solid rgba(249,115,22,0.15)" }}
                      >
                        <p className="text-[10px] uppercase tracking-[0.18em] mb-1 text-primary font-bold">✦ Vedic Trick</p>
                        <p className="text-sm font-mono" style={{ color: "rgba(255,255,255,0.85)" }}>{q.trick}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Next button */}
                {selected !== null && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="px-5 pb-5"
                    style={{ background: "rgba(0,0,0,0.15)" }}
                  >
                    <button
                      onClick={next}
                      className="w-full py-2.5 rounded-xl text-sm font-bold text-white transition-all duration-200 mt-3"
                      style={{ background: "linear-gradient(135deg, #f97316, #fb923c)", boxShadow: "0 4px 16px rgba(249,115,22,0.30)" }}
                    >
                      {current < quizQuestions.length - 1 ? "Next Question →" : "Restart Quiz ↺"}
                    </button>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right — Engagement Stats */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-4"
          >
            <p className="text-xs uppercase tracking-[0.18em] mb-6 font-semibold" style={{ color: "rgba(180,190,220,0.48)" }}>
              Live Classroom Stats
            </p>
            {engagementStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.1 }}
                className="flex items-center gap-4 rounded-2xl p-4"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <span className="text-2xl">{stat.icon}</span>
                <div>
                  <p className="font-heading font-extrabold text-xl" style={{ color: "rgba(255,255,255,0.96)" }}>
                    {stat.value}
                  </p>
                  <p className="text-xs" style={{ color: "rgba(180,190,220,0.48)" }}>{stat.label}</p>
                </div>
              </motion.div>
            ))}

            {/* Rapid fire promo */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55 }}
              className="mt-4 rounded-2xl p-5 text-center"
              style={{
                background: "linear-gradient(135deg, rgba(249,115,22,0.10), rgba(249,115,22,0.04))",
                border: "1px solid rgba(249,115,22,0.25)",
              }}
            >
              <p className="text-2xl mb-2">⚡</p>
              <p className="font-heading font-bold text-sm text-primary mb-1">Rapid Fire Rounds</p>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.68)", lineHeight: 1.6 }}>
                Every session ends with a 60-second speed challenge. Students love it.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
