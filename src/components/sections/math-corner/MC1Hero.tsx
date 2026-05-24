"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui";

/* ============================================
   ✦ SCENE 1 — HERO
   Cinematic dark hero with floating math universe
   ============================================ */

const floatingMath = [
  // Root cause fix: initial opacity set to mid-range value so equations
  // are consistently visible before, during, and after hero animations.
  // opRange[0] = min breathing opacity, opRange[1] = peak breathing opacity
  { text: "45² = 2025",   top: "14%", left: "7%",   delay: 0,   size: "text-base md:text-xl",  blur: "blur-[1px]",   opMin: 0.07, opMax: 0.14 },
  { text: "11 × 53 = 583",top: "22%", right: "8%",  delay: 1.4, size: "text-sm md:text-lg",    blur: "blur-[0.5px]", opMin: 0.06, opMax: 0.13 },
  { text: "√144 = 12",    top: "70%", left: "5%",   delay: 0.7, size: "text-sm md:text-base",  blur: "blur-[1.5px]", opMin: 0.06, opMax: 0.12 },
  { text: "999 × 999",    top: "62%", right: "6%",  delay: 2,   size: "text-base md:text-xl",  blur: "blur-[1px]",   opMin: 0.07, opMax: 0.14 },
  { text: "∑ n²",         top: "40%", left: "2%",   delay: 1,   size: "text-xs md:text-sm",    blur: "blur-[2.5px]", opMin: 0.06, opMax: 0.11 },
  { text: "1089",          top: "82%", left: "42%",  delay: 0.3, size: "text-2xl md:text-4xl",  blur: "blur-[0.5px]", opMin: 0.07, opMax: 0.14 },
  { text: "85² = 7225",   top: "30%", right: "3%",  delay: 2.5, size: "text-xs md:text-sm",    blur: "blur-[2px]",   opMin: 0.06, opMax: 0.12 },
  { text: "π ≈ 3.14159",  top: "10%", left: "55%",  delay: 1.8, size: "text-xs md:text-sm",    blur: "blur-[1px]",   opMin: 0.06, opMax: 0.13 },
  { text: "∫ dx",         top: "50%", right: "2%",  delay: 3,   size: "text-sm md:text-base",  blur: "blur-[1.5px]", opMin: 0.06, opMax: 0.11 },
  { text: "n(n+1)/2",     top: "88%", left: "18%",  delay: 0.9, size: "text-xs",               blur: "blur-[1px]",   opMin: 0.05, opMax: 0.11 },
  { text: "φ = 1.618",    top: "5%",  left: "25%",  delay: 2.2, size: "text-xs",               blur: "blur-[1.5px]", opMin: 0.05, opMax: 0.10 },
  { text: "Δ",             top: "55%", left: "15%",  delay: 1.5, size: "text-xl md:text-3xl",   blur: "blur-[2.5px]", opMin: 0.06, opMax: 0.12 },
];

const titleWords = "Math Corner".split(" ");
const subWords =
  "Discover the magic behind numbers through interactive Vedic Math tricks, games, puzzles, and visual learning experiences.".split(
    " "
  );

export default function MC1Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-950 px-5 pt-28 pb-16">
      {/* Radial atmospheric glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-amber-400/6 rounded-full blur-[120px]" />
        <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-primary/4 rounded-full blur-[100px]" />
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ✦ Floating math universe
          FIX: Each element now has an explicit `initial` opacity set to `opMin`,
          matching the START of its breathing animation.
          Without this, Framer Motion holds elements at opacity:1 during their
          `delay` period, then they snap to opMin — appearing to "disappear"
          after the hero content animations complete. */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        {floatingMath.map((eq, i) => (
          <motion.div
            key={i}
            className={`absolute text-white font-heading font-bold tracking-wide ${eq.size} ${eq.blur}`}
            style={{ top: eq.top, left: eq.left, right: eq.right }}
            // ✦ CRITICAL: initial matches opMin so the element is never at opacity:1
            initial={{ opacity: eq.opMin, y: 0 }}
            animate={{ y: [0, -20, 0], opacity: [eq.opMin, eq.opMax, eq.opMin] }}
            transition={{
              duration: 18 + i * 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: eq.delay,
              // repeatDelay keeps a brief pause between cycles for a more natural drift
              repeatDelay: 0,
            }}
          >
            {eq.text}
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
          className="uppercase mb-[18px]"
          style={{
            fontSize: "0.72rem",
            fontWeight: 500,
            letterSpacing: "0.24em",
            color: "rgba(255,255,255,0.72)",
          }}
        >
          ✦ Interactive Learning Experience
        </motion.p>

        {/* Title — word-by-word */}
        <div className="font-heading font-bold text-[clamp(3rem,8vw,6rem)] leading-none mb-6 flex flex-wrap justify-center gap-x-6 tracking-[-0.03em]">
          {titleWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.4 + i * 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{
                color: i === 1 ? "#f97316" : "rgba(255,255,255,0.96)",
                textShadow: "0 0 20px rgba(255,255,255,0.06), 0 0 40px rgba(249,115,22,0.08)",
              }}
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* Animated underline */}
        <div className="flex justify-center mb-8">
          <motion.div
            className="h-1 bg-gradient-to-r from-primary to-amber-400 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "160px" }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>

        {/* Subtitle — word stagger */}
        <motion.div
          className="flex flex-wrap justify-center gap-x-[6px] gap-y-1 text-base md:text-lg mb-12 max-w-2xl mx-auto"
          style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.7 }}
        >
          {subWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.0 + i * 0.04, ease: "easeOut" }}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}>
            <Button variant="primary" size="lg" href="/#demo-form" className="shadow-xl shadow-primary/30">
              Book Free Demo ✦
            </Button>
          </motion.div>
          <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300 }}>
            <Button variant="ghost" size="lg" href="#mc-tricks" className="!text-slate-300 hover:!text-white !font-semibold">
              Explore Tricks ↓
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator — animated chevron only */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.35, 0.75, 0.35] }}
        transition={{
          delay: 2.2,
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.15 }}
      >
        <motion.svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgba(249,115,22,0.9)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <polyline points="6 9 12 15 18 9" />
        </motion.svg>
      </motion.div>
    </section>
  );
}
