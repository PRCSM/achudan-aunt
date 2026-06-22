"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ============================================
   ✦ SCENE 6 — FEATURED VIDEO GALLERY
   Premium cinematic video showcase grid with
   hover interactions and animated play buttons
   ============================================ */

type VideoCard = {
  id: number;
  title: string;
  category: string;
  categoryColor: string;
  duration: string;
  desc: string;
  level: string;
  emoji: string;
  // Visual thumbnail: gradient + math preview
  gradientFrom: string;
  gradientTo: string;
  mathPreview: string;
  src?: string; // Optional actual video file
};

const videoCards: VideoCard[] = [
  {
    id: 1,
    title: "Squaring Numbers Ending in 5",
    category: "Vedic Tricks",
    categoryColor: "#f97316",
    duration: "12:34",
    desc: "Master the lightning-fast technique for squaring any number ending in 5 — from 15² to 995².",
    level: "Beginner",
    emoji: "⚡",
    gradientFrom: "#1a0a00",
    gradientTo: "#2d1200",
    mathPreview: "45² = 2025",
    src: "/videos/squaring numbers.mp4",
  },
  {
    id: 2,
    title: "Number Pattern Recognition with 9's",
    category: "Speed Math",
    categoryColor: "#a78bfa",
    duration: "09:18",
    desc: "A beautiful visual breakdown of massive calculations showing pattern logic without raw calculation.",
    level: "Intermediate",
    emoji: "🧠",
    gradientFrom: "#0d0818",
    gradientTo: "#1a0f2e",
    mathPreview: "3478 × 9999",
    src: "/videos/patternRecognition.mp4",
  },
  {
    id: 3,
    title: "Mastering Multiplication Tables",
    category: "Visual Tricks",
    categoryColor: "#34d399",
    duration: "07:45",
    desc: "Learn to multiply instantly without rote memorization using simple structural patterns.",
    level: "Beginner",
    emoji: "🔮",
    gradientFrom: "#001810",
    gradientTo: "#00291a",
    mathPreview: "8 × 7 = 56",
    src: "/videos/tables.mp4",
  },
  {
    id: 4,
    title: "Speed Math on the Train",
    category: "Real World",
    categoryColor: "#38bdf8",
    duration: "15:02",
    desc: "Watch how mental calculations can be done effortlessly in everyday situations without pen and paper.",
    level: "Intermediate",
    emoji: "🌀",
    gradientFrom: "#000d18",
    gradientTo: "#001828",
    mathPreview: "Mental Math",
    src: "/videos/train vid.mp4",
  },
  {
    id: 5,
    title: "Student 5-Minute Quiz Challenge",
    category: "Classroom Session",
    categoryColor: "#fbbf24",
    duration: "05:00",
    desc: "Watch a real 5-minute quiz session testing students in high-speed Vedic Math calculations.",
    level: "All Levels",
    emoji: "🏆",
    gradientFrom: "#180d00",
    gradientTo: "#2a1800",
    mathPreview: "Rapid Fire!",
    src: "/videos/5 mins quiz.mp4",
  },
  {
    id: 6,
    title: "Visual Algebra: Find the Value of X",
    category: "Visual Learning",
    categoryColor: "#f472b6",
    duration: "04:30",
    desc: "Solve complex algebraic fractions without cross-multiplying or finding LCM using this powerful shortcut.",
    level: "Advanced",
    emoji: "📐",
    gradientFrom: "#180010",
    gradientTo: "#2a001e",
    mathPreview: "Find X",
    src: "/videos/simple equations.mp4",
  },
];

export default function V6Gallery() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [playingVideo, setPlayingVideo] = useState<VideoCard | null>(null);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#080C14] px-5 py-24">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[400px] bg-primary/4 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[350px] bg-violet-500/4 rounded-full blur-[120px]" />
        {/* Fine grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="mx-auto w-full max-w-7xl relative z-10">

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
            ✦ Featured Session Library
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-bold text-[clamp(1.8rem,4vw,3rem)] tracking-[-0.03em]"
            style={{ color: "rgba(255,255,255,0.96)" }}
          >
            Explore our{" "}
            <span style={{ color: "#f97316" }}>video sessions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm mt-3"
            style={{ color: "rgba(255,255,255,0.68)", lineHeight: 1.7 }}
          >
            Premium recordings of real classroom sessions — available for enrolled students.
          </motion.p>
        </div>

        {/* Video grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {videoCards.map((video) => {
            const isHovered = hovered === video.id;

            return (
              <motion.div
                key={video.id}
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
                }}
                onHoverStart={() => setHovered(video.id)}
                onHoverEnd={() => setHovered(null)}
                whileHover={{ y: -6, scale: 1.02 }}
                className="rounded-2xl overflow-hidden cursor-pointer group"
                style={{
                  border: `1px solid ${isHovered ? `${video.categoryColor}40` : "rgba(255,255,255,0.07)"}`,
                  boxShadow: isHovered
                    ? `0 20px 50px rgba(0,0,0,0.40), 0 0 0 1px ${video.categoryColor}20`
                    : "0 8px 30px rgba(0,0,0,0.28)",
                  transition: "border-color 0.3s, box-shadow 0.3s",
                }}
              >
                {/* Thumbnail */}
                <div
                  className="relative overflow-hidden h-44 flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg, ${video.gradientFrom}, ${video.gradientTo})` }}
                  onClick={() => video.src && setPlayingVideo(video)}
                >
                  {video.src && (
                    <video
                      src={`${video.src}#t=0.5`}
                      muted
                      playsInline
                      preload="metadata"
                      className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-screen transition-transform duration-700 group-hover:scale-105"
                    />
                  )}

                  {/* Radial glow */}
                  <div
                    className="absolute inset-0 pointer-events-none transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at center, ${video.categoryColor}18 0%, transparent 65%)`,
                      opacity: isHovered ? 1 : 0.5,
                    }}
                  />

                  {/* Math preview text */}
                  <motion.p
                    className="font-heading font-extrabold text-[clamp(1.8rem,4vw,2.5rem)] z-10 relative select-none"
                    style={{
                      color: video.categoryColor,
                      textShadow: `0 0 30px ${video.categoryColor}80, 0 0 10px rgba(0,0,0,0.8)`,
                      letterSpacing: "-0.02em",
                    }}
                    animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {video.mathPreview}
                  </motion.p>

                  {/* Animated play button */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center z-20"
                    initial={false}
                    animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-sm"
                      style={{
                        background: "rgba(0,0,0,0.65)",
                        border: `2px solid ${video.categoryColor}90`,
                        boxShadow: `0 0 20px ${video.categoryColor}60`,
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill={video.categoryColor}>
                        <path d="M5 3l14 9-14 9V3z" />
                      </svg>
                    </div>
                  </motion.div>

                  {/* Duration badge */}
                  <div
                    className="absolute top-3 right-3 text-xs font-bold px-2 py-0.5 rounded-full z-10"
                    style={{ background: "rgba(0,0,0,0.75)", color: "rgba(255,255,255,0.9)", backdropFilter: "blur(4px)" }}
                  >
                    {video.duration}
                  </div>

                  {/* Level badge */}
                  <div
                    className="absolute top-3 left-3 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider z-10"
                    style={{
                      background: `${video.categoryColor}30`,
                      color: video.categoryColor,
                      border: `1px solid ${video.categoryColor}50`,
                      backdropFilter: "blur(4px)"
                    }}
                  >
                    {video.level}
                  </div>
                </div>

                {/* Card body */}
                <div
                  className="p-5"
                  style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))" }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-base">{video.emoji}</span>
                    <span
                      className="text-[10px] font-bold uppercase tracking-[0.16em]"
                      style={{ color: video.categoryColor }}
                    >
                      {video.category}
                    </span>
                  </div>
                  <h3
                    className="font-heading font-bold text-sm mb-2 leading-snug"
                    style={{ color: "rgba(255,255,255,0.96)" }}
                  >
                    {video.title}
                  </h3>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.62)", lineHeight: 1.65 }}>
                    {video.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center text-xs mt-8"
          style={{ color: "rgba(180,190,220,0.40)" }}
        >
          Full video library available to enrolled students. New sessions added every week. ✦
        </motion.p>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {playingVideo && playingVideo.src && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-black/90 backdrop-blur-sm"
            onClick={() => setPlayingVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl"
              style={{
                boxShadow: `0 30px 80px rgba(0,0,0,0.8), 0 0 0 1px ${playingVideo.categoryColor}40`,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-white hover:text-black transition-colors"
                onClick={() => setPlayingVideo(null)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <video
                src={playingVideo.src}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
