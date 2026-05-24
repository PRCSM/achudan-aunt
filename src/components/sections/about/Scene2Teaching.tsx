"use client";

import type { Variants } from "framer-motion";

import { motion } from "framer-motion";

/* ============================================
   ✦ SCENE 2 — TEACHING APPROACH
   Split-screen: animated method cards + philosophy
   ============================================ */

const teachingMethods = [
  {
    icon: "🧠",
    title: "Mental Math Mastery",
    desc: "Students learn to compute large numbers in their heads using structured Vedic shortcuts.",
    color: "from-orange-50 to-amber-50",
    border: "border-orange-200/60",
    glow: "group-hover:shadow-orange-100",
  },
  {
    icon: "🎮",
    title: "Games & Quizzes",
    desc: "Interactive, gamified learning makes every session exciting and deeply memorable.",
    color: "from-emerald-50 to-teal-50",
    border: "border-emerald-200/60",
    glow: "group-hover:shadow-emerald-100",
  },
  {
    icon: "⚡",
    title: "Speed Building",
    desc: "Structured drills build lightning-fast calculation speed that improves exam performance.",
    color: "from-blue-50 to-indigo-50",
    border: "border-blue-200/60",
    glow: "group-hover:shadow-blue-100",
  },
  {
    icon: "🔍",
    title: "Logical Thinking",
    desc: "Each trick reveals the pattern behind numbers, building deeper mathematical reasoning.",
    color: "from-purple-50 to-violet-50",
    border: "border-purple-200/60",
    glow: "group-hover:shadow-purple-100",
  },
  {
    icon: "🌟",
    title: "Confidence Building",
    desc: "As students solve harder problems faster, their confidence in math transforms visibly.",
    color: "from-yellow-50 to-orange-50",
    border: "border-yellow-200/60",
    glow: "group-hover:shadow-yellow-100",
  },
  {
    icon: "🔗",
    title: "Interactive Learning",
    desc: "Live sessions, instant feedback, and personalized attention ensure no student falls behind.",
    color: "from-rose-50 to-pink-50",
    border: "border-rose-200/60",
    glow: "group-hover:shadow-rose-100",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const cardVariant: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
};

export default function Scene2Teaching() {
  return (
    <section className="relative min-h-screen snap-start flex items-center overflow-hidden bg-bg-section px-5 py-24">
      {/* Subtle background texture */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[120px] -translate-y-1/2" />
      </div>

      <div className="mx-auto w-full max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: Philosophy Text ── */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              whileInView={{ opacity: 0.75, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
              className="font-medium uppercase mb-5"
              style={{ fontSize: "0.72rem", letterSpacing: "0.28em", color: "#FF6B2B" }}
            >
              ✦ How We Teach
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-bold text-[clamp(1.8rem,4vw,3rem)] leading-[1.2] text-text-primary mb-6"
            >
              Learning that{" "}
              <span className="text-primary relative">
                feels like discovery
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary/35 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.7, ease: "easeOut" }}
                  style={{ originX: 0 }}
                />
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-text-secondary text-base md:text-lg leading-relaxed mb-6 max-w-[460px]"
            >
              Every session is designed to feel like an aha! moment. We blend ancient Vedic
              formulae with modern interactive techniques to create a learning environment
              where students don't just understand mathematics — they fall in love with it.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col gap-3"
            >
              {[
                "Ancient Vedic sutras made accessible for modern learners",
                "Live one-on-one and group sessions with expert mentors",
                "Real-time performance tracking and feedback",
                "Curriculum aligned with competitive exams & school syllabi",
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5 text-sm flex-shrink-0">✦</span>
                  <p className="text-text-secondary text-sm leading-relaxed">{point}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Animated Method Cards Grid ── */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {teachingMethods.map((method, i) => (
              <motion.div
                key={i}
                variants={cardVariant}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className={`group relative bg-gradient-to-br ${method.color} border ${method.border} rounded-2xl p-4 cursor-default transition-shadow duration-300 ${method.glow} hover:shadow-lg`}
              >
                <div className="text-2xl mb-3">{method.icon}</div>
                <h3 className="font-heading font-bold text-sm text-text-primary mb-1.5 leading-snug">
                  {method.title}
                </h3>
                <p className="text-text-secondary text-[11px] leading-relaxed">
                  {method.desc}
                </p>
                {/* Glow border on hover */}
                <div className="absolute inset-0 rounded-2xl border border-primary/0 group-hover:border-primary/15 transition-colors duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
