"use client";

import { motion } from "framer-motion";

/* ============================================
   ✦ SCENE 3 — GLOBAL COMMUNITY OF LEARNERS
   Animated world representation with country markers
   ============================================ */

const countries = [
  { name: "India", flag: "🇮🇳", students: "60+", top: "52%", left: "63%", delay: 0 },
  { name: "UAE", flag: "🇦🇪", students: "25+", top: "44%", left: "56%", delay: 0.3 },
  { name: "Canada", flag: "🇨🇦", students: "5+", top: "28%", left: "18%", delay: 0.6 },
  { name: "Germany", flag: "🇩🇪", students: "4+", top: "30%", left: "48%", delay: 0.9 },
  { name: "Japan", flag: "🇯🇵", students: "3+", top: "40%", left: "82%", delay: 1.2 },
];

const benefits = [
  { icon: "⚡", label: "Faster Calculations", desc: "Students solve in seconds what takes others minutes" },
  { icon: "🎯", label: "Better Concentration", desc: "Pattern-based learning sharpens focus and memory" },
  { icon: "🧠", label: "Mental Speed", desc: "Build a calculation engine right inside the mind" },
  { icon: "🏆", label: "Exam Readiness", desc: "Competitive edge for school, boards, and entrance exams" },
];

export default function Scene3Global() {
  return (
    <section className="relative min-h-screen snap-start flex items-center overflow-hidden bg-white px-5 py-24">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/4 rounded-full blur-[120px]" />
      </div>

      <div className="mx-auto w-full max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            whileInView={{ opacity: 0.75, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
            className="font-medium uppercase mb-5"
            style={{ fontSize: "0.72rem", letterSpacing: "0.28em", color: "#FF6B2B" }}
          >
            ✦ Global Reach
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-bold text-[clamp(1.8rem,4vw,3rem)] leading-[1.2] text-text-primary"
          >
            A community of learners{" "}
            <span className="text-primary">across the globe</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-secondary text-base mt-4 max-w-xl mx-auto leading-relaxed"
          >
            VedaGanitham students span 5+ countries, proving that the language of mathematics
            — and the magic of Vedic methods — is truly universal.
          </motion.p>
        </div>

        {/* World map with animated country markers */}
        <div className="relative w-full max-w-4xl mx-auto mb-14">
          {/* Simplified world silhouette using SVG */}
          <div className="relative w-full aspect-[2/1] bg-slate-50/80 rounded-3xl border border-border/50 overflow-hidden">
            {/* Subtle grid overlay */}
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: "linear-gradient(rgba(0,0,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.3) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            {/* Connecting lines (decorative) */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid meet">
              {/* Lines between key country positions */}
              {[
                { x1: 360, y1: 208, x2: 448, y2: 176 }, // India to UAE
                { x1: 448, y1: 176, x2: 384, y2: 120 }, // UAE to Germany
                { x1: 384, y1: 120, x2: 144, y2: 112 }, // Germany to Canada
                { x1: 360, y1: 208, x2: 656, y2: 160 }, // India to Japan
              ].map((line, i) => (
                <motion.line
                  key={i}
                  x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2}
                  stroke="#FF6B2B"
                  strokeWidth="1"
                  strokeDasharray="4 6"
                  strokeOpacity={0.25}
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.6 + i * 0.2, ease: "easeOut" }}
                />
              ))}
            </svg>

            {/* Country markers */}
            {countries.map((country, i) => (
              <motion.div
                key={i}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{ top: country.top, left: country.left }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, damping: 18, delay: 0.4 + country.delay }}
              >
                {/* Pulsing ring */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-primary/20"
                  animate={{ scale: [1, 2.4, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: country.delay }}
                />
                {/* Dot */}
                <div className="relative w-3 h-3 rounded-full bg-primary shadow-md shadow-primary/30" />
                {/* Label */}
                <div className="absolute top-5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white border border-border rounded-lg px-2 py-1 shadow-sm text-center">
                  <div className="text-sm">{country.flag}</div>
                  <div className="text-[9px] font-bold text-text-primary leading-none">{country.name}</div>
                  <div className="text-[9px] text-primary font-semibold">{country.students}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } }}
              whileHover={{ y: -5 }}
              className="bg-bg-section border border-border rounded-2xl p-5 text-center hover:border-primary/20 hover:shadow-md transition-all duration-300"
            >
              <div className="text-2xl mb-3">{b.icon}</div>
              <h4 className="font-heading font-bold text-sm text-text-primary mb-1.5">{b.label}</h4>
              <p className="text-text-muted text-[11px] leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
