"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Section, Button } from "@/components/ui";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/lib/animations";
import Image from "next/image";

/* ============================================
   ✦ VIDEO PREVIEW SECTION
   Dynamic preview loading to optimize bundle weight & page performance.
   ============================================ */

const videos = [
  {
    id: "main",
    title: "How does tables work?",
    src: "/videos/tables.mp4",
    level: "Beginner",
  },
  {
    id: "preview-1",
    title: "Multiplication of 9's",
    src: "/videos/board sum.mp4",
    level: "Intermediate",
  },
  {
    id: "preview-2",
    title: "Distance covered by train",
    src: "/videos/train vid.mp4",
    level: "Application",
  },
];

export default function VideoSection() {
  const [playingId, setPlayingId] = useState<string | null>(null);

  return (
    <Section
      id="videos"
      title="Watch & Learn"
      subtitle="Preview our teaching style with free demo videos. See how Vedic Mathematics transforms calculations."
      className="scroll-mt-20 snap-start min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-bg-main"
    >
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Main video — spans 2 cols on desktop */}
        <motion.div variants={fadeInLeft} className="lg:col-span-2">
          <div className="relative aspect-video rounded-3xl overflow-hidden bg-text-primary/5 shadow-lg group border border-border hover:border-primary/20 transition-all duration-300">
            {playingId === videos[0].id ? (
              <video
                src={videos[0].src}
                controls
                autoPlay
                className="absolute inset-0 w-full h-full bg-black"
              />
            ) : (
              <div
                className="absolute inset-0 w-full h-full cursor-pointer"
                onClick={() => setPlayingId(videos[0].id)}
              >
                <video
                  src={`${videos[0].src}#t=0.5`}
                  muted
                  playsInline
                  preload="metadata"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors flex items-center justify-center">
                  <motion.div
                    className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  >
                    <svg className="w-8 h-8 fill-current ml-1" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </motion.div>
                </div>
              </div>
            )}
          </div>
          <h3 className="font-heading font-bold text-xl mt-5 text-text-primary">
            {videos[0].title}
          </h3>
          <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mt-2">
            {videos[0].level}
          </span>
        </motion.div>

        {/* Side previews */}
        <div className="flex flex-col gap-6">
          {videos.slice(1).map((video) => (
            <motion.div key={video.id} variants={fadeInRight} className="flex flex-col">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-text-primary/5 shadow-md group border border-border hover:border-primary/20 transition-all duration-300">
                {playingId === video.id ? (
                  <video
                    src={video.src}
                    controls
                    autoPlay
                    className="absolute inset-0 w-full h-full bg-black"
                  />
                ) : (
                  <div
                    className="absolute inset-0 w-full h-full cursor-pointer"
                    onClick={() => setPlayingId(video.id)}
                  >
                    <video
                      src={`${video.src}#t=0.5`}
                      muted
                      playsInline
                      preload="metadata"
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <motion.div
                        className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-md"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <svg className="w-5 h-5 fill-current ml-0.5" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                )}
              </div>
              <h4 className="font-heading font-bold text-base mt-3 text-text-primary">
                {video.title}
              </h4>
              <span className="inline-block bg-secondary-light text-primary text-xs font-semibold px-2.5 py-0.5 rounded-full mt-1.5 self-start">
                {video.level}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ✦ Explore More Videos CTA */}
      <motion.div
        className="text-center mt-12 flex flex-col items-center gap-4"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <p className="text-sm text-text-secondary max-w-md" style={{ lineHeight: 1.7 }}>
          Watch interactive Vedic Math sessions, games, quizzes, and visual tricks.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <motion.a
            href="/videos"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 font-heading font-bold text-sm px-6 py-3 rounded-xl text-white transition-all duration-200"
            style={{
              background: "linear-gradient(135deg, #5b2c83, #7a3bad)",
              boxShadow: "0 8px 24px rgba(91,44,131,0.30)",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
              <path d="M5 3l14 9-14 9V3z" />
            </svg>
            Explore More Videos
          </motion.a>
          <Button variant="secondary" href="/#demo-form">
            Book Free Demo →
          </Button>
        </div>
      </motion.div>
    </Section>
  );
}
