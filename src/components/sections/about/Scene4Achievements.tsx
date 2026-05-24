"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { animate } from "framer-motion";

/* ============================================
   ✦ SCENE 4 — COMPETITIONS & ACHIEVEMENTS
   Odometer counters, glowing stats, achievement badges
   ============================================ */

function Counter({ to, suffix = "", duration = 2 }: { to: number; suffix?: string; duration?: number }) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(Math.floor(v)),
    });
    return () => controls.stop();
  }, [started, to, duration]);

  return (
    <motion.span
      onViewportEnter={() => setStarted(true)}
      className="font-heading font-extrabold text-4xl md:text-5xl text-primary block"
    >
      {value.toLocaleString()}{suffix}
    </motion.span>
  );
}

const stats = [
  { value: 100, suffix: "+", label: "Students Taught", icon: "🎓", desc: "Across 5+ countries globally" },
  { value: 50, suffix: "+", label: "Math Champions", icon: "🏆", desc: "Competition winners & top scorers" },
  { value: 1000, suffix: "+", label: "Learning Hours", icon: "⏰", desc: "Dedicated, structured Vedic sessions" },
  { value: 98, suffix: "%", label: "Satisfaction Rate", icon: "⭐", desc: "Parents and students love it" },
];

const achievements = [
  { year: "2021", milestone: "VedaGanitham Founded", icon: "✦", color: "text-primary" },
  { year: "2022", milestone: "First 50 Students Milestone", icon: "🎓", color: "text-blue-500" },
  { year: "2023", milestone: "Expanded to UAE & Canada", icon: "🌍", color: "text-emerald-500" },
  { year: "2024", milestone: "100+ Students, 5+ Countries", icon: "🏆", color: "text-amber-500" },
  { year: "2025", milestone: "Competition Champions Program", icon: "⭐", color: "text-purple-500" },
];

export default function Scene4Achievements() {
  return (
    <section className="relative min-h-screen snap-start flex items-center overflow-hidden bg-slate-950 px-5 py-24">
      {/* Deep atmospheric glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-amber-400/5 rounded-full blur-[120px]" />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

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
            ✦ Our Impact
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-bold text-[clamp(1.8rem,4vw,3rem)] leading-[1.2]"
          >
            <span style={{ color: "rgba(255, 255, 255, 0.96)", textShadow: "0 0 18px rgba(255, 255, 255, 0.08)" }}>
              Numbers that tell{" "}
            </span>
            <span className="text-primary" style={{ textShadow: "0 0 18px rgba(255, 107, 43, 0.1)" }}>
              our story
            </span>
          </motion.h2>
        </div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-primary/30 hover:bg-white/8 transition-all duration-300 group"
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <Counter to={stat.value} suffix={stat.suffix} duration={2 + i * 0.3} />
              <h3 className="font-heading font-bold text-sm text-white mt-2 mb-1">{stat.label}</h3>
              <p className="text-slate-400 text-[11px]">{stat.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Journey Timeline */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading font-semibold text-lg text-center mb-10"
            style={{ color: "rgba(255, 255, 255, 0.82)" }}
          >
            Our Journey
          </motion.h3>
          <div className="relative">
            {/* Timeline line */}
            <motion.div
              className="absolute top-4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent hidden md:block"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
              style={{ originX: 0 }}
            />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
              {achievements.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Node */}
                  <motion.div
                    className="w-8 h-8 rounded-full bg-slate-800 border-2 border-primary/40 flex items-center justify-center text-sm mb-3 z-10"
                    whileInView={{ borderColor: "rgba(255,107,43,0.8)", backgroundColor: "rgba(255,107,43,0.1)" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.15, duration: 0.4 }}
                  >
                    {item.icon}
                  </motion.div>
                  <span className="text-primary font-bold text-xs tracking-widest mb-1">{item.year}</span>
                  <p className="text-slate-300 text-xs leading-relaxed">{item.milestone}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
