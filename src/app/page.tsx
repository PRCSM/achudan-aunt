import HeroSection from "@/components/sections/HeroSection";
import CourseSection from "@/components/sections/CourseSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import AboutSection from "@/components/sections/AboutSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";

/* ============================================
   ✦ VEDAGANITHAM — LANDING PAGE
   Premium, minimal, conversion-focused
   ============================================ */

export default function Home() {
  return (
    <>
      <HeroSection />
      <CourseSection />
      <HowItWorksSection />
      <AboutSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
