import HeroSection from "@/components/sections/HeroSection";
import WhyVedicSection from "@/components/sections/WhyVedicSection";
import CourseSection from "@/components/sections/CourseSection";
import VideoSection from "@/components/sections/VideoSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CertificatesSection from "@/components/sections/CertificatesSection";
import DemoFormSection from "@/components/sections/DemoFormSection";

/* ============================================
   ✦ VEDAGANITHAM — LANDING PAGE
   Immersive scroll-snapping layout with 7 Scenes
   ============================================ */

export default function Home() {
  return (
    <main className="theme-purple text-text-primary h-screen w-full overflow-y-scroll snap-y snap-mandatory bg-bg-main">
      <HeroSection />
      <WhyVedicSection />
      <CourseSection />
      <VideoSection />
      <TestimonialsSection />
      <CertificatesSection />
      <DemoFormSection />
    </main>
  );
}
