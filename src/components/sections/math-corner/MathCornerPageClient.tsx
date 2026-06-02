"use client";

import MC1Hero from "./MC1Hero";
import MC2Tricks from "./MC2Tricks";
import MC3Games from "./MC3Games";
import MC4Riddles from "./MC4Riddles";
import MC5Formula from "./MC5Formula";
import MC6CTA from "./MC6CTA";

/* ============================================
   ✦ MATH CORNER PAGE — 6-Scene Interactive Playground
   ============================================ */

export default function MathCornerPageClient() {
  return (
    <main className="h-[100dvh] w-full overflow-y-auto bg-white">
      <MC1Hero />
      <MC2Tricks />
      <MC3Games />
      <MC4Riddles />
      <MC5Formula />
      <MC6CTA />
    </main>
  );
}
