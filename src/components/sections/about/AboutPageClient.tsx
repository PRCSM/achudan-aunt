"use client";

import Scene1Philosophy from "./Scene1Philosophy";
import Scene2Teaching from "./Scene2Teaching";
import Scene3Global from "./Scene3Global";
import Scene4Achievements from "./Scene4Achievements";
import Scene5Vision from "./Scene5Vision";
import Scene6Closing from "./Scene6Closing";

/* ============================================
   ✦ ABOUT PAGE — 6-Scene Cinematic Journey
   Snap-scroll fullscreen storytelling experience
   ============================================ */

export default function AboutPageClient() {
  return (
    <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory bg-white">
      <Scene1Philosophy />
      <Scene2Teaching />
      <Scene3Global />
      <Scene4Achievements />
      <Scene5Vision />
      <Scene6Closing />
    </main>
  );
}
