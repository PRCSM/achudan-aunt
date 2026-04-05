"use client";

import { motion } from "framer-motion";
import { Section, Button } from "@/components/ui";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/lib/animations";

/* ============================================
   ✦ VIDEO PREVIEW SECTION
   1 large featured + 2 smaller previews
   ============================================ */

const videos = [
  {
    id: "main",
    title: "Introduction to Vedic Mathematics",
    youtubeId: "dQw4w9WgXcQ", // placeholder — replace with actual
    level: "Beginner",
  },
  {
    id: "preview-1",
    title: "Speed Multiplication Tricks",
    youtubeId: "dQw4w9WgXcQ",
    level: "Intermediate",
  },
  {
    id: "preview-2",
    title: "Mental Math Techniques",
    youtubeId: "dQw4w9WgXcQ",
    level: "Advanced",
  },
];

export default function VideoSection() {
  return (
    <Section
      id="videos"
      title="Watch & Learn"
      subtitle="Preview our teaching style with free demo videos. See how Vedic Mathematics transforms calculations."
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
          <div className="relative aspect-video rounded-3xl overflow-hidden bg-text-primary/5 shadow-lg">
            <iframe
              src={`https://www.youtube.com/embed/${videos[0].youtubeId}`}
              title={videos[0].title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
              loading="lazy"
            />
          </div>
          <h3 className="font-heading text-lg mt-4 text-text-primary">
            {videos[0].title}
          </h3>
          <p className="text-sm text-text-muted mt-1">{videos[0].level}</p>
        </motion.div>

        {/* Side previews */}
        <div className="flex flex-col gap-6">
          {videos.slice(1).map((video) => (
            <motion.div key={video.id} variants={fadeInRight}>
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-text-primary/5 shadow-md">
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                />
              </div>
              <h4 className="font-heading text-base mt-3 text-text-primary">
                {video.title}
              </h4>
              <p className="text-xs text-text-muted mt-0.5">{video.level}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* View All CTA */}
      <motion.div
        className="text-center mt-10"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Button variant="secondary" href="/videos">
          View All Videos →
        </Button>
      </motion.div>
    </Section>
  );
}
