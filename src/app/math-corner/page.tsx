import type { Metadata } from "next";
import MathCornerPageClient from "@/components/sections/math-corner/MathCornerPageClient";

export const metadata: Metadata = {
  title: "Math Corner | VedaGanitham",
  description:
    "Explore interactive Vedic Math tricks, games, riddles, and formula visualizations. Experience mathematics like never before.",
};

export default function MathCornerPage() {
  return <MathCornerPageClient />;
}
