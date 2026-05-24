"use client";

import V1Hero from "./V1Hero";
import V2Showcase from "./V2Showcase";
import V3Presentations from "./V3Presentations";
import V4Quiz from "./V4Quiz";
import V5Highlights from "./V5Highlights";
import V6Gallery from "./V6Gallery";
import V7CTA from "./V7CTA";

/* ============================================
   ✦ VIDEOS PAGE — 7-Scene Cinematic Experience
   "Step inside a live Vedic Math classroom."
   ============================================ */

export default function VideosPageClient() {
  return (
    <main className="h-full w-full overflow-y-auto bg-slate-950">
      <V1Hero />
      <V2Showcase />
      <V3Presentations />
      <V4Quiz />
      <V5Highlights />
      <V6Gallery />
      <V7CTA />
    </main>
  );
}
