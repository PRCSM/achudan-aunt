import type { Metadata } from "next";
import AboutPageClient from "@/components/sections/about/AboutPageClient";

export const metadata: Metadata = {
  title: "About Us | VedaGanitham",
  description:
    "Discover the story behind VedaGanitham — our philosophy, teaching approach, global community, and vision for making mathematics exciting and intuitive.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
