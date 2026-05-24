import type { Metadata } from "next";
import VideosPageClient from "@/components/sections/videos/VideosPageClient";

export const metadata: Metadata = {
  title: "Videos | VedaGanitham",
  description:
    "Step inside a live Vedic Math classroom. Watch real interactive sessions, student engagement moments, visual math demonstrations, and speed calculation challenges.",
};

export default function VideosPage() {
  return <VideosPageClient />;
}
