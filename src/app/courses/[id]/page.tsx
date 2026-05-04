"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { notFound } from "next/navigation";
import { COURSE_TIERS, WHATSAPP_CONFIG } from "@/constants";
import { Button, Badge } from "@/components/ui";

/* ============================================
   ✦ COURSE DETAIL PAGE
   Immersive, storytelling UI with scroll snapping
   ============================================ */

export default function CourseDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const [mounted, setMounted] = useState(false);
  const resolvedParams = require("react").use(params);
  
  // Find the course
  const course = COURSE_TIERS.find((c) => c.id === resolvedParams.id);

  // Hydration fix
  useEffect(() => {
    setMounted(true);
    // Hide global body scroll since we use internal snapping wrapper
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!course) {
    return notFound();
  }

  if (!mounted) return null;

  return (
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-white text-text-primary">
      
      {/* ====================
          SCENE 1: THE HOOK
          ==================== */}
      <section className="h-screen w-full snap-start relative flex flex-col items-center justify-center px-5 pt-20">
        {/* Background gradient hint */}
        <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-[0.03] pointer-events-none`} />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center z-10 max-w-4xl"
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className={`w-24 h-24 mx-auto rounded-3xl flex items-center justify-center text-5xl mb-8 shadow-xl bg-gradient-to-br ${course.color} text-white`}
          >
            {course.icon}
          </motion.div>
          
          <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight mb-6">
            {course.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-text-secondary font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
            {course.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              href={`https://wa.me/${WHATSAPP_CONFIG.number}?text=I am interested in the ${course.title} course.`}
            >
              Start Learning Now
            </Button>
            <span className="text-sm text-text-muted font-medium mt-4 sm:mt-0 sm:ml-4">
              Scroll to explore ↓
            </span>
          </div>
        </motion.div>
      </section>

      {/* ====================
          SCENE 2: STORYTELLING
          ==================== */}
      <section className="h-screen w-full snap-start flex items-center justify-center px-5 bg-bg-main relative">
        <div className="max-w-4xl mx-auto text-center">
          <StoryText 
            text="Stop memorizing formulas. Start seeing the patterns." 
            className="font-heading text-4xl md:text-6xl font-bold leading-tight mb-10"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-lg md:text-2xl text-text-secondary leading-relaxed max-w-3xl mx-auto"
          >
            {course.description}
          </motion.p>
        </div>
      </section>

      {/* ====================
          SCENE 3: WHAT YOU'LL LEARN
          ==================== */}
      <section className="h-screen w-full snap-start flex flex-col justify-center px-5 relative overflow-hidden bg-white">
        <div className="max-w-6xl mx-auto w-full">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
            className="font-heading text-4xl md:text-5xl font-bold mb-16 text-center md:text-left"
          >
            What you'll master
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {course.highlights.map((highlight, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="bg-bg-soft rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${course.color} text-white flex items-center justify-center font-bold text-lg mb-6 shadow-md transform group-hover:scale-110 transition-transform`}>
                  {idx + 1}
                </div>
                <p className="text-lg font-medium text-text-primary leading-snug">
                  {highlight}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================
          SCENE 4: COURSE STRUCTURE
          ==================== */}
      <section className="h-screen w-full snap-start flex items-center justify-center px-5 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto w-full flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <div className={`aspect-square rounded-full bg-gradient-to-tr ${course.color} opacity-10 blur-3xl absolute -z-10`} />
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">The Journey</h2>
            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              Designed for optimal retention. We break down complex logic into bite-sized, digestible modules over {course.duration}.
            </p>
            
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
              {['Foundation', 'Technique Mastery', 'Speed Drills', 'Final Assessment'].map((step, idx) => (
                <motion.div 
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.15 }}
                  viewport={{ once: true }}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    <span className="text-sm font-bold">{idx + 1}</span>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-border bg-white shadow-sm">
                    <h3 className="font-bold text-text-primary">{step}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====================
          SCENE 5: OUTCOMES & CTA
          ==================== */}
      <section className="h-screen w-full snap-start flex flex-col items-center justify-center px-5 relative overflow-hidden bg-white text-center">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-bl-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/10 rounded-tr-full blur-3xl" />
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto z-10"
        >
          <Badge variant="primary" className="mb-8">Your Transformation</Badge>
          
          <h2 className="font-heading text-5xl md:text-6xl font-bold tracking-tight mb-8 text-text-primary">
            Ready to change how you <br />
            <span className="text-primary relative">
              think about math?
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0,10 Q50,20 100,10" stroke="currentColor" strokeWidth="4" fill="none" className="text-accent/50" />
              </svg>
            </span>
          </h2>
          
          <p className="text-xl text-text-secondary mb-12">
            Join thousands of students who have already unlocked their mental calculation superpowers with the {course.title}.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button 
              size="lg" 
              href={`https://wa.me/${WHATSAPP_CONFIG.number}?text=I am interested in enrolling in the ${course.title} course.`}
            >
              Enroll Now via WhatsApp
            </Button>
            <Button size="lg" variant="ghost" href="/courses">
              Back to all courses
            </Button>
          </div>
        </motion.div>
      </section>

    </div>
  );
}

// ----------------------------------------
// Subcomponents
// ----------------------------------------

/**
 * StoryText: Progressively reveals text word by word
 */
function StoryText({ text, className }: { text: string; className?: string }) {
  const words = text.split(" ");
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 * i },
    }),
  };

  const child: import("framer-motion").Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };

  return (
    <motion.div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span variants={child} style={{ marginRight: "0.25em" }} key={index}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
