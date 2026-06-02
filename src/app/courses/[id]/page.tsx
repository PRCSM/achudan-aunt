"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { notFound } from "next/navigation";
import { COURSE_TIERS, WHATSAPP_CONFIG } from "@/constants";
import { Button, Badge } from "@/components/ui";

/* ============================================
   ✦ ALGEBRAIC FORMULA MORPH
   ============================================ */
function FormulaMorph() {
  const [step, setStep] = useState(0);
  const steps = [
    "99 × 99",
    "(100 - 1)²",
    "100² - 2(100)(1) + 1²",
    "10000 - 200 + 1",
    "9801"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % steps.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-bg-soft/70 border border-primary/10 rounded-2xl p-6 text-center max-w-sm mx-auto my-8 shadow-sm">
      <p className="text-[10px] text-text-muted font-bold uppercase tracking-wider mb-2">Vedic Method Preview</p>
      <div className="h-16 flex items-center justify-center font-heading text-lg md:text-xl font-extrabold text-primary">
        <AnimatePresence mode="wait">
          <motion.span
            key={step}
            initial={{ opacity: 0, scale: 0.9, filter: "blur(4px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(4px)" }}
            transition={{ duration: 0.4 }}
          >
            {steps[step]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ============================================
   ✦ COURSE DETAIL PAGE
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

  // Select level-specific testimonial
  let courseReview = {
    name: "Kishore G",
    location: "UAE",
    quote: "My calculation speed has improved drastically. Now I can solve long equations mentally during school exams without getting stuck."
  };
  if (resolvedParams.id === "basic") {
    courseReview = {
      name: "Samruthi B",
      location: "Chennai",
      quote: "I love the interactive quizzes and games. They help me remember formulas easily. Doing math does not feel like homework anymore."
    };
  } else if (resolvedParams.id === "intermediate") {
    courseReview = {
      name: "Chetna",
      location: "UAE",
      quote: "VedaGanitham is like magic tricks for math! Learning how to simplify large multiplication has made math my favorite subject."
    };
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
            <span className="text-sm text-text-muted font-medium mt-4 sm:mt-0 sm:ml-4 animate-bounce">
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
            className="font-heading text-4xl md:text-6xl font-bold leading-tight mb-6"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-lg md:text-2xl text-text-secondary leading-relaxed max-w-3xl mx-auto mb-6"
          >
            {course.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <FormulaMorph />
          </motion.div>
        </div>
      </section>

      {/* ====================
          SCENE 3: WHAT YOU'LL LEARN
          ==================== */}
      <section className="min-h-screen w-full snap-start flex flex-col justify-center px-5 py-24 relative overflow-hidden bg-white">
        <div className="max-w-6xl mx-auto w-full">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
            className="font-heading text-4xl md:text-5xl font-bold mb-12 text-center md:text-left"
          >
            What you'll master
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {course.highlights.map((highlight, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: (idx % 3) * 0.1 }}
                viewport={{ once: true, amount: 0.1 }}
                className="relative bg-bg-soft/60 rounded-2xl p-8 border border-border hover:border-primary/40 hover:bg-white hover:shadow-xl transition-all duration-300 group overflow-hidden"
              >
                {/* Decorative background glow on hover */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`} />
                
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${course.color} text-white flex items-center justify-center font-bold text-lg shadow-md transform group-hover:scale-110 transition-transform`}>
                    {idx + 1}
                  </div>
                  {/* Small checkmark appears on hover */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-text-primary mb-3 leading-snug group-hover:text-primary transition-colors duration-300">
                  {highlight.title}
                </h3>
                
                <p className="text-sm font-medium text-text-secondary leading-relaxed">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================
          SCENE 4: COURSE STRUCTURE (Roadmap scroll animation)
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
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">The Journey</h2>
            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              Designed for optimal retention. We break down complex logic into bite-sized, digestible modules over {course.duration}.
            </p>
            
            {/* ✦ Dynamic Vertical Roadmap line ✦ */}
            <div className="space-y-6 relative">
              {/* Dynamic filled line overlay */}
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-border -translate-x-px md:left-1/2 md:translate-x-0" />
              
              <motion.div 
                className="absolute left-5 top-0 w-0.5 bg-primary -translate-x-px md:left-1/2 md:translate-x-0 origin-top shadow-sm"
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                viewport={{ once: true }}
              />

              {['Foundation Class', 'Technique Mastery', 'Speed Drills', 'Assessment & Certification'].map((step, idx) => (
                <motion.div 
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                >
                  {/* Glowing Milestone node */}
                  <motion.div 
                    className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-border text-white z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors duration-500"
                    whileInView={{ backgroundColor: "#FF6B2B", borderColor: "#FFF1EB" }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <span className="text-sm font-bold">{idx + 1}</span>
                  </motion.div>
                  
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-border bg-white shadow-sm hover:border-primary/20 transition-all duration-300">
                    <h3 className="font-bold text-text-primary text-sm md:text-base">{step}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====================
          SCENE 5: OUTCOMES & TESTIMONIAL
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
          className="max-w-3xl mx-auto z-10 w-full"
        >
          <Badge variant="primary" className="mb-6">Student Success</Badge>
          
          {/* ✦ Dynamic testomonial snippet matching course level ✦ */}
          <div className="bg-bg-soft/60 border border-primary/5 rounded-2xl p-6 md:p-8 max-w-xl mx-auto mb-10 text-left shadow-sm">
            <p className="italic text-text-primary text-sm md:text-base mb-4 leading-relaxed">
              &ldquo;{courseReview.quote}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                {courseReview.name.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-text-primary text-sm">{courseReview.name}</p>
                <p className="text-xs text-text-muted font-medium">{courseReview.location}</p>
              </div>
            </div>
          </div>

          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-8 text-text-primary leading-tight">
            Ready to change how you <br />
            <span className="text-primary relative">
              think about math?
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0,10 Q50,20 100,10" stroke="currentColor" strokeWidth="4" fill="none" className="text-accent/50" />
              </svg>
            </span>
          </h2>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button 
              size="lg" 
              href={`https://wa.me/${WHATSAPP_CONFIG.number}?text=I am interested in enrolling in the ${course.title} course.`}
            >
              Enroll via WhatsApp
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
      transition: { staggerChildren: 0.12, delayChildren: 0.1 * i },
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
