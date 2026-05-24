"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui";

/* ============================================
   ✦ SCENE 1 — HERO
   "Step inside a live Vedic Math classroom."
   ============================================ */

const floatingParticles = [
  { text: "45²",       top: "12%", left: "6%",   delay: 0,   opMin: 0.07, opMax: 0.14, size: "text-lg md:text-2xl",  blur: "blur-[1px]" },
  { text: "√144 = 12", top: "22%", right: "7%",  delay: 1.3, opMin: 0.06, opMax: 0.12, size: "text-sm md:text-base", blur: "blur-[0.5px]" },
  { text: "∑",         top: "55%", left: "3%",   delay: 0.6, opMin: 0.06, opMax: 0.12, size: "text-4xl md:text-6xl", blur: "blur-[2px]" },
  { text: "1089",      top: "70%", right: "5%",  delay: 1.8, opMin: 0.07, opMax: 0.13, size: "text-xl md:text-3xl",  blur: "blur-[1px]" },
  { text: "99 × 99",  top: "80%", left: "40%",  delay: 0.4, opMin: 0.06, opMax: 0.11, size: "text-xs md:text-sm",   blur: "blur-[1.5px]" },
  { text: "π",         top: "35%", right: "3%",  delay: 2,   opMin: 0.06, opMax: 0.12, size: "text-3xl md:text-5xl", blur: "blur-[2.5px]" },
  { text: "∫ dx",      top: "48%", right: "10%", delay: 0.9, opMin: 0.05, opMax: 0.10, size: "text-sm md:text-lg",   blur: "blur-[1.5px]" },
  { text: "φ = 1.618", top: "8%",  left: "42%",  delay: 2.4, opMin: 0.05, opMax: 0.10, size: "text-xs",              blur: "blur-[1px]" },
];

const heroWords1 = "Learn Math Through".split(" ");
const heroWords2 = "Interactive Experiences".split(" ");

export default function V1Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-950 px-5 pt-28 pb-16">

      {/* ── Atmospheric Glows ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary/8 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-amber-400/5 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px]" />
        {/* Fine grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ── Floating math equations ── */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        {floatingParticles.map((p, i) => (
          <motion.div
            key={i}
            className={`absolute text-white font-heading font-bold tracking-wide ${p.size} ${p.blur}`}
            style={{ top: p.top, left: p.left, right: p.right }}
            initial={{ opacity: p.opMin, y: 0 }}
            animate={{ y: [0, -20, 0], opacity: [p.opMin, p.opMax, p.opMin] }}
            transition={{ duration: 18 + i * 2.8, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
          >
            {p.text}
          </motion.div>
        ))}
      </div>

      {/* ── Hero content ── */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="uppercase mb-5"
          style={{ fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.24em", color: "rgba(255,255,255,0.72)" }}
        >
          ✦ VedaGanitham Classroom Experience
        </motion.p>

        {/* Headline line 1 */}
        <div className="font-heading font-bold text-[clamp(2.4rem,6vw,5rem)] leading-[1.05] mb-2 flex flex-wrap justify-center gap-x-5 tracking-[-0.03em]">
          {heroWords1.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 35, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{ color: "rgba(255,255,255,0.96)", textShadow: "0 0 20px rgba(255,255,255,0.05)" }}
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* Headline line 2 — orange accent */}
        <div className="font-heading font-bold text-[clamp(2.4rem,6vw,5rem)] leading-[1.05] mb-8 flex flex-wrap justify-center gap-x-5 tracking-[-0.03em]">
          {heroWords2.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 35, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.75 + i * 0.18, ease: [0.16, 1, 0.3, 1] }}
              style={{ color: "#f97316", textShadow: "0 0 30px rgba(249,115,22,0.25), 0 0 60px rgba(249,115,22,0.10)" }}
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* Animated accent line */}
        <div className="flex justify-center mb-8">
          <motion.div
            className="h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "220px", opacity: 1 }}
            transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="text-base md:text-lg max-w-2xl mx-auto mb-12"
          style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.7 }}
        >
          Watch real Vedic Math sessions, interactive activities, quizzes, and visual tricks that make
          mathematics exciting and genuinely engaging for every student.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}>
            <Button variant="primary" size="lg" href="/#demo-form" className="shadow-xl shadow-primary/30">
              Book Free Demo ✦
            </Button>
          </motion.div>
          <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
            <Button variant="ghost" size="lg" href="#v-showcase" className="!text-slate-300 hover:!text-white !font-semibold">
              Watch Sessions ↓
            </Button>
          </motion.div>
        </motion.div>

        {/* Live stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.1 }}
          className="flex items-center justify-center gap-8 mt-14"
        >
          {[
            { num: "100+", label: "Students Taught" },
            { num: "5+",   label: "Countries" },
            { num: "Live", label: "Interactive Sessions" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <p className="font-heading font-extrabold text-xl text-primary leading-none">{s.num}</p>
              <p className="text-[10px] uppercase tracking-[0.18em] mt-1" style={{ color: "rgba(180,190,220,0.48)" }}>{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.35, 0.75, 0.35] }}
        transition={{ delay: 2.4, duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.svg
          width="18" height="18" viewBox="0 0 24 24" fill="none"
          stroke="rgba(249,115,22,0.9)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <polyline points="6 9 12 15 18 9" />
        </motion.svg>
      </motion.div>
    </section>
  );
}
