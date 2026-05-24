"use client";

import { motion } from "framer-motion";

/* ============================================
   ✦ SCENE 5 — CLASSROOM EXPERIENCE HIGHLIGHTS
   Emotional trust-building: authentic moments,
   student energy, teaching warmth
   ============================================ */

const highlights = [
  {
    icon: "🧒",
    title: "Students Solving Mentally",
    quote: "I solved 97×98 in my head and my teacher couldn't believe it!",
    attribution: "— Grade 6 Student, UK",
    desc: "Students develop genuine mental calculation speed — not just memorized answers, but real mathematical intuition.",
    color: "#f97316",
    colorBg: "rgba(249,115,22,0.08)",
    colorBorder: "rgba(249,115,22,0.20)",
  },
  {
    icon: "🤝",
    title: "Interactive Group Activities",
    quote: "The quiz games make everyone want to participate. Nobody wants to miss a session.",
    attribution: "— Parent, Singapore",
    desc: "Group challenges create friendly competition. Every student is engaged, every question sparks discussion.",
    color: "#38bdf8",
    colorBg: "rgba(56,189,248,0.08)",
    colorBorder: "rgba(56,189,248,0.20)",
  },
  {
    icon: "👁️",
    title: "Visual Learning Methods",
    quote: "Now I understand WHY formulas work, not just HOW to use them.",
    attribution: "— Grade 8 Student, UAE",
    desc: "Every concept is visualized. Students see the logic behind the mathematics — building lasting understanding.",
    color: "#34d399",
    colorBg: "rgba(52,211,153,0.08)",
    colorBorder: "rgba(52,211,153,0.20)",
  },
  {
    icon: "💪",
    title: "Confidence-Building Exercises",
    quote: "My daughter went from dreading math to asking for extra problems.",
    attribution: "— Parent, India",
    desc: "Progressive challenges build real confidence. Students celebrate every breakthrough, however small.",
    color: "#a78bfa",
    colorBg: "rgba(167,139,250,0.08)",
    colorBorder: "rgba(167,139,250,0.20)",
  },
];

const bgFloaters = [
  { text: "✦", top: "10%", right: "6%", delay: 0, size: "text-5xl", blur: "blur-[2px]" },
  { text: "∞", top: "68%", left: "4%", delay: 1, size: "text-6xl md:text-8xl", blur: "blur-[3px]" },
  { text: "φ", top: "30%", left: "2%", delay: 0.5, size: "text-4xl md:text-5xl", blur: "blur-[2px]" },
  { text: "99²", top: "80%", right: "8%", delay: 1.6, size: "text-lg md:text-xl", blur: "blur-[1px]" },
];

export default function V5Highlights() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950 px-5 py-24">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-violet-500/4 rounded-full blur-[120px]" />
      </div>

      {/* Floating math */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        {bgFloaters.map((f, i) => (
          <motion.div
            key={i}
            className={`absolute text-white font-heading font-bold ${f.size} ${f.blur}`}
            style={{ top: f.top, left: f.left, right: f.right }}
            initial={{ opacity: 0.05, y: 0 }}
            animate={{ y: [0, -16, 0], opacity: [0.05, 0.11, 0.05] }}
            transition={{ duration: 20 + i * 3.5, repeat: Infinity, ease: "easeInOut", delay: f.delay }}
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
            transition={{ duration: 0.5 }}
            className="uppercase mb-4"
            style={{ fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.24em", color: "rgba(255,255,255,0.72)" }}
          >
            ✦ Classroom Experience Highlights
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-bold text-[clamp(1.8rem,4vw,3rem)] tracking-[-0.03em]"
            style={{ color: "rgba(255,255,255,0.96)" }}
          >
            Real moments from{" "}
            <span style={{ color: "#f97316" }}>real classrooms</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm mt-3 max-w-lg mx-auto"
            style={{ color: "rgba(255,255,255,0.68)", lineHeight: 1.7 }}
          >
            Authentic student experiences that show what learning with VedaGanitham truly feels like.
          </motion.p>
        </div>

        {/* Highlights grid — 2×2 */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
              }}
              whileHover={{ y: -5, scale: 1.01 }}
              className="rounded-2xl p-7 relative overflow-hidden group cursor-default"
              style={{
                background: h.colorBg,
                border: `1px solid ${h.colorBorder}`,
                boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
              }}
            >
              {/* Subtle inner glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at 30% 50%, ${h.colorBg} 0%, transparent 70%)` }}
              />

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl">{h.icon}</span>
                  <h3 className="font-heading font-bold text-base" style={{ color: h.color }}>
                    {h.title}
                  </h3>
                </div>

                {/* Quote */}
                <blockquote
                  className="text-base font-heading font-semibold mb-1 leading-snug"
                  style={{ color: "rgba(255,255,255,0.92)" }}
                >
                  "{h.quote}"
                </blockquote>
                <p className="text-[11px] mb-5" style={{ color: "rgba(180,190,220,0.48)" }}>
                  {h.attribution}
                </p>

                {/* Description */}
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.68)", lineHeight: 1.7 }}>
                  {h.desc}
                </p>
              </div>

              {/* Glow line bottom */}
              <div
                className="absolute inset-x-0 bottom-0 h-0.5 opacity-40 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(to right, transparent, ${h.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-10 text-center"
        >
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.68)" }}>
            Join 100+ students from 5 countries already experiencing this.{" "}
            <a href="/#demo-form" className="text-primary font-bold hover:underline">
              Book your free demo →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
