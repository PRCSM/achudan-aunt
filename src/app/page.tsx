import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import HeroSection from "@/components/sections/HeroSection";
import CourseSection from "@/components/sections/CourseSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import VideoSection from "@/components/sections/VideoSection";
import DemoFormSection from "@/components/sections/DemoFormSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";

/* ============================================
   ✦ VEDAGANITHAM — LANDING PAGE
   Premium, minimal, conversion-focused
   ============================================ */

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <CourseSection />
        <HowItWorksSection />
        <VideoSection />
        <DemoFormSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
