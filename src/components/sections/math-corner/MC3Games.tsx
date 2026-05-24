"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ============================================
   ✦ SCENE 3 — FUN WITH MATH (Mini Game)
   Square-ending-in-5 quiz: Easy / Medium / Hard
   ============================================ */

const bgFloaters = [
  { text: "25²", top: "10%", left: "8%", delay: 0.3, size: "text-lg md:text-2xl", blur: "blur-[1.5px]" },
  { text: "95²", top: "75%", left: "5%", delay: 1.5, size: "text-base md:text-xl", blur: "blur-[2px]" },
  { text: "= 2025", top: "22%", right: "6%", delay: 0.8, size: "text-sm md:text-base", blur: "blur-[1px]" },
  { text: "9025", top: "65%", right: "7%", delay: 2, size: "text-base md:text-xl", blur: "blur-[1.5px]" },
  { text: "Σ", top: "42%", left: "2%", delay: 1, size: "text-3xl md:text-5xl", blur: "blur-[3px]" },
  { text: "n²", top: "85%", left: "45%", delay: 0.5, size: "text-xl md:text-3xl", blur: "blur-[1px]" },
];

type Difficulty = "easy" | "medium" | "hard";

const DIFFICULTY_RANGES: Record<Difficulty, [number, number]> = {
  easy: [1, 9],    // 15² … 95²
  medium: [10, 19], // 105² … 195²
  hard: [20, 39],  // 205² … 395²
};

function generateQuestion(diff: Difficulty): { num: number; answer: number } {
  const [lo, hi] = DIFFICULTY_RANGES[diff];
  const base = Math.floor(Math.random() * (hi - lo + 1)) + lo;
  const num = base * 10 + 5;
  return { num, answer: base * (base + 1) * 100 + 25 };
}

/** Stable SSR-safe placeholder — base=4 → 45² = 2025 */
const DEFAULT_QUESTION = { num: 45, answer: 2025 };

function useConfetti(trigger: boolean) {
  return trigger; // placeholder — CSS confetti burst via keyframes
}

export default function MC3Games() {
  const [difficulty, setDifficulty] = useState<Difficulty>("easy");
  // ⚠️ Stable initial value avoids SSR/client hydration mismatch.
  // The real random question is generated after mount in useEffect below.
  const [question, setQuestion] = useState<{ num: number; answer: number }>(DEFAULT_QUESTION);
  const [userInput, setUserInput] = useState("");
  const [status, setStatus] = useState<"idle" | "correct" | "wrong">("idle");
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const showConfetti = useConfetti(status === "correct");

  const nextQuestion = useCallback(() => {
    setQuestion(generateQuestion(difficulty));
    setUserInput("");
    setStatus("idle");
  }, [difficulty]);

  const handleCheck = () => {
    const ans = parseInt(userInput.replace(/,/g, ""));
    if (ans === question.answer) {
      setStatus("correct");
      setScore((s) => s + (difficulty === "hard" ? 3 : difficulty === "medium" ? 2 : 1));
      setStreak((s) => s + 1);
    } else {
      setStatus("wrong");
      setStreak(0);
    }
  };

  // Generate real random question after mount (SSR hydration safety)
  useEffect(() => {
    setQuestion(generateQuestion("easy"));
  }, []);

  // Auto-next after correct
  useEffect(() => {
    if (status === "correct") {
      const t = setTimeout(nextQuestion, 1800);
      return () => clearTimeout(t);
    }
  }, [status, nextQuestion]);

  const handleDiffChange = (d: Difficulty) => {
    setDifficulty(d);
    setQuestion(generateQuestion(d));
    setUserInput("");
    setStatus("idle");
    setScore(0);
    setStreak(0);
  };

  const diffColors: Record<Difficulty, string> = {
    easy: "bg-emerald-500",
    medium: "bg-amber-500",
    hard: "bg-red-500",
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0B0F1A] px-5 py-24">
      {/* Atmospheric glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/6 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-amber-400/5 rounded-full blur-[100px]" />
        <div className="absolute top-3/4 left-1/2 w-[300px] h-[300px] bg-emerald-500/4 rounded-full blur-[80px]" />
      </div>

      {/* Floating math atmosphere */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        {bgFloaters.map((f, i) => (
          <motion.div
            key={i}
            className={`absolute text-white font-heading font-bold tracking-wide ${f.size} ${f.blur}`}
            style={{ top: f.top, left: f.left, right: f.right }}
            initial={{ opacity: 0.05, y: 0 }}
            animate={{ y: [0, -16, 0], opacity: [0.05, 0.10, 0.05] }}
            transition={{ duration: 20 + i * 4, repeat: Infinity, ease: "easeInOut", delay: f.delay }}
          >
            {f.text}
          </motion.div>
        ))}
      </div>

      <div className="mx-auto w-full max-w-2xl relative z-10">
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
            ✦ Math Playground
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-bold text-[clamp(1.8rem,4vw,3rem)] tracking-[-0.03em]"
            style={{ color: "rgba(255,255,255,0.96)", textShadow: "0 0 20px rgba(255,255,255,0.05), 0 0 40px rgba(249,115,22,0.06)" }}
          >
            Square Ending in <span className="text-primary">5</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm mt-2"
            style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.7 }}
          >
            Calculate the square mentally using the Vedic shortcut!
          </motion.p>
        </div>

        {/* Difficulty selector */}
        <div className="flex justify-center gap-3 mb-8">
          {(["easy", "medium", "hard"] as Difficulty[]).map((d) => (
            <motion.button
              key={d}
              onClick={() => handleDiffChange(d)}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full text-sm font-bold capitalize transition-all duration-300 ${
                difficulty === d
                  ? `${diffColors[d]} text-white shadow-md`
                  : "bg-white/5 border border-white/10 text-slate-300 hover:border-primary/30 hover:text-white"
              }`}
            >
              {d}
            </motion.button>
          ))}
        </div>

        {/* Score bar */}
        <div className="flex items-center justify-between mb-8 rounded-2xl px-5 py-3" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="text-center">
            <p className="text-2xl font-heading font-extrabold text-primary">{score}</p>
            <p className="text-[10px] uppercase tracking-wide" style={{ color: "rgba(180,190,220,0.48)" }}>Score</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-heading font-extrabold text-amber-500">{streak}</p>
            <p className="text-[10px] uppercase tracking-wide" style={{ color: "rgba(180,190,220,0.48)" }}>Streak 🔥</p>
          </div>
          <div className="text-center">
            <p className="text-xs font-bold capitalize" style={{ color: "rgba(255,255,255,0.78)" }}>{difficulty}</p>
            <p className="text-[10px] uppercase tracking-wide" style={{ color: "rgba(180,190,220,0.48)" }}>Mode</p>
          </div>
        </div>

        <div className="relative">
          {/* Subtle warm glow behind card */}
          <div className="absolute inset-4 bg-primary/10 rounded-3xl blur-2xl pointer-events-none" />

          {/* Question card */}
          <motion.div
            key={question.num}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className={`rounded-3xl p-8 md:p-10 text-center transition-colors duration-300 relative z-10`}
            style={{
              background: status === "correct"
                ? "linear-gradient(180deg, rgba(52,211,153,0.08), rgba(52,211,153,0.04))"
                : status === "wrong"
                ? "linear-gradient(180deg, rgba(248,113,113,0.08), rgba(248,113,113,0.04))"
                : "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
              border: `1px solid ${
                status === "correct" ? "rgba(52,211,153,0.35)"
                : status === "wrong" ? "rgba(248,113,113,0.35)"
                : "rgba(255,255,255,0.08)"
              }`,
              boxShadow: status === "correct"
                ? "0 15px 45px rgba(52,211,153,0.12)"
                : status === "wrong"
                ? "0 15px 45px rgba(248,113,113,0.10)"
                : "0 10px 40px rgba(0,0,0,0.28)",
            }}
          >
            {/* Confetti burst on correct */}
            {showConfetti && (
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl" aria-hidden="true">
                {Array.from({ length: 12 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                      left: `${10 + i * 7}%`,
                      top: "30%",
                      backgroundColor: ["#FF6B2B", "#FFD93D", "#4CAF50", "#2196F3", "#E91E63"][i % 5],
                    }}
                    initial={{ y: 0, opacity: 1, scale: 1 }}
                    animate={{ y: -80, opacity: 0, scale: 0, x: (i % 2 === 0 ? 1 : -1) * (10 + i * 3) }}
                    transition={{ duration: 0.9, ease: "easeOut", delay: i * 0.04 }}
                  />
                ))}
              </div>
            )}

            <p className="text-sm mb-3" style={{ color: "rgba(180,190,220,0.48)" }}>What is</p>
            <motion.p
              className="font-heading font-extrabold text-[clamp(3rem,8vw,5rem)] mb-6 leading-none"
              style={{ color: "rgba(255,255,255,0.96)" }}
              animate={status === "wrong" ? { x: [-8, 8, -6, 6, 0] } : {}}
              transition={{ duration: 0.35 }}
            >
              {question.num}²
            </motion.p>

            {/* Input */}
            <input
              type="number"
              value={userInput}
              onChange={(e) => { setUserInput(e.target.value); setStatus("idle"); }}
              onKeyDown={(e) => e.key === "Enter" && userInput && handleCheck()}
              placeholder="Your answer…"
              className="w-48 text-center font-mono text-2xl rounded-xl px-4 py-3 focus:outline-none mb-6 transition-colors"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "2px solid rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.96)",
              }}
              disabled={status === "correct"}
            />

            {/* Status feedback */}
            <AnimatePresence mode="wait">
              {status === "correct" && (
                <motion.div
                  key="correct"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-emerald-500 font-bold text-lg mb-4"
                >
                  ✓ Correct! {question.answer.toLocaleString()} 🎉
                </motion.div>
              )}
              {status === "wrong" && (
                <motion.div
                  key="wrong"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-red-400 text-sm mb-4"
                >
                  Not quite — try again or see the trick ↑
                </motion.div>
              )}
            </AnimatePresence>

            {/* Actions */}
            <div className="flex justify-center gap-3">
              {status !== "correct" && (
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={handleCheck}
                  disabled={!userInput}
                  className="px-6 py-2.5 bg-primary text-white font-bold rounded-xl text-sm disabled:opacity-40 hover:bg-primary-hover transition-colors shadow-md shadow-primary/20"
                >
                  Check ✓
                </motion.button>
              )}
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={nextQuestion}
                className="px-6 py-2.5 bg-white/5 border border-white/10 text-slate-300 font-semibold rounded-xl text-sm hover:bg-white/10 hover:text-white transition-colors"
              >
                Skip →
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Hint */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-xs mt-5"
          style={{ color: "rgba(180,190,220,0.48)" }}
        >
          Hint: Take <strong>{Math.floor(question.num / 10)}</strong> × <strong>{Math.floor(question.num / 10) + 1}</strong>, then append <strong className="text-amber-500">25</strong>
        </motion.p>
      </div>
    </section>
  );
}
