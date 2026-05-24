"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section, Card, Button, Badge } from "@/components/ui";
import { COURSE_TIERS, COURSE_FAQS, WHATSAPP_CONFIG } from "@/constants";
import { fadeInUp, staggerContainer, slideInLeft } from "@/lib/animations";
import CTASection from "@/components/sections/CTASection";

/* ============================================
   ✦ COURSES PAGE
   ============================================ */

export default function CoursesPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [expandedCourseIndex, setExpandedCourseIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const toggleCourse = (index: number) => {
    setExpandedCourseIndex(expandedCourseIndex === index ? null : index);
  };

  return (
    <main className="h-full w-full overflow-y-auto bg-white">
      {/* --- HERO BANNER --- */}
      <section className="bg-bg-soft pt-32 pb-20 px-5">
        <div className="max-w-[1200px] mx-auto text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center"
          >
            <motion.div variants={fadeInUp} className="mb-4">
              <span className="text-sm font-medium text-text-muted">Home &gt; <span className="text-primary">Courses</span></span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="font-heading text-4xl md:text-5xl font-bold text-text-primary mb-6">
              Our <span className="text-primary">Courses</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-text-secondary text-base md:text-lg max-w-[600px] leading-relaxed">
              Explore our comprehensive Vedic Mathematics programs. Whether you're a beginner wanting to build a strong foundation or an advanced student aiming to ace competitive exams, we have the right course for you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* --- COURSE TIERS GRID --- */}
      <Section id="course-tiers" className="bg-white">
        <motion.div
          className="flex flex-col lg:flex-row gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Left Column (Items 0, 2) */}
          <div className="flex-1 flex flex-col gap-8">
            {COURSE_TIERS.filter((_, i) => i % 2 === 0).map((course, index) => {
              const actualIndex = index * 2;
              const isExpanded = expandedCourseIndex === actualIndex;
              return (
                <motion.div key={course.id} variants={fadeInUp}>
                  <Card className="h-full flex flex-col relative overflow-hidden group" padding="none">
                    <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${course.color}`} />
                    <div className="p-8 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-6">
                        <div className="flex gap-4 items-center">
                          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-sm bg-gradient-to-br ${course.color} text-white`}>
                            {course.icon}
                          </div>
                          <div>
                            <h3 className="font-heading text-2xl font-bold text-text-primary">{course.title}</h3>
                            <p className="text-sm font-medium text-text-muted">{course.subtitle}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        <Badge variant="secondary" className="!bg-bg-section border border-border text-text-secondary">
                          ⏱ {course.duration}
                        </Badge>
                        <Badge variant="secondary" className="!bg-bg-section border border-border text-text-secondary">
                          👤 {course.ageGroup}
                        </Badge>
                      </div>

                      <p className="text-text-secondary leading-relaxed mb-6 flex-1">
                        {course.description}
                      </p>

                      <div className="mb-8">
                        <button 
                          onClick={() => toggleCourse(actualIndex)}
                          className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover transition-colors w-full text-left"
                        >
                          {isExpanded ? "Hide Syllabus Details" : "View Syllabus Details"}
                          <motion.span
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="inline-block"
                          >
                            ▼
                          </motion.span>
                        </button>

                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0, marginTop: 0 }}
                              animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                              exit={{ height: 0, opacity: 0, marginTop: 0 }}
                              className="overflow-hidden"
                            >
                              <ul className="space-y-3 bg-bg-soft rounded-xl p-5">
                                {course.highlights.map((highlight, idx) => (
                                  <li key={idx} className="flex items-start gap-3">
                                    <span className="text-primary font-bold mt-0.5">✓</span>
                                    <span className="text-sm text-text-secondary leading-tight">{highlight}</span>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button 
                          variant={actualIndex === 2 ? "primary" : "secondary"} 
                          fullWidth 
                          href={`https://wa.me/${WHATSAPP_CONFIG.number}?text=I am interested in the ${course.title} course.`}
                          className={actualIndex !== 2 ? "border-border text-text-primary hover:border-primary hover:text-primary" : ""}
                        >
                          WhatsApp
                        </Button>
                        <Button 
                          variant="ghost"
                          fullWidth 
                          href={`/courses/${course.id}`}
                        >
                          Details →
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column (Items 1, 3) */}
          <div className="flex-1 flex flex-col gap-8">
            {COURSE_TIERS.filter((_, i) => i % 2 !== 0).map((course, index) => {
              const actualIndex = index * 2 + 1;
              const isExpanded = expandedCourseIndex === actualIndex;
              return (
                <motion.div key={course.id} variants={fadeInUp}>
                  <Card className="h-full flex flex-col relative overflow-hidden group" padding="none">
                    <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${course.color}`} />
                    <div className="p-8 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-6">
                        <div className="flex gap-4 items-center">
                          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-sm bg-gradient-to-br ${course.color} text-white`}>
                            {course.icon}
                          </div>
                          <div>
                            <h3 className="font-heading text-2xl font-bold text-text-primary">{course.title}</h3>
                            <p className="text-sm font-medium text-text-muted">{course.subtitle}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        <Badge variant="secondary" className="!bg-bg-section border border-border text-text-secondary">
                          ⏱ {course.duration}
                        </Badge>
                        <Badge variant="secondary" className="!bg-bg-section border border-border text-text-secondary">
                          👤 {course.ageGroup}
                        </Badge>
                      </div>

                      <p className="text-text-secondary leading-relaxed mb-6 flex-1">
                        {course.description}
                      </p>

                      <div className="mb-8">
                        <button 
                          onClick={() => toggleCourse(actualIndex)}
                          className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover transition-colors w-full text-left"
                        >
                          {isExpanded ? "Hide Syllabus Details" : "View Syllabus Details"}
                          <motion.span
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="inline-block"
                          >
                            ▼
                          </motion.span>
                        </button>

                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0, marginTop: 0 }}
                              animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                              exit={{ height: 0, opacity: 0, marginTop: 0 }}
                              className="overflow-hidden"
                            >
                              <ul className="space-y-3 bg-bg-soft rounded-xl p-5">
                                {course.highlights.map((highlight, idx) => (
                                  <li key={idx} className="flex items-start gap-3">
                                    <span className="text-primary font-bold mt-0.5">✓</span>
                                    <span className="text-sm text-text-secondary leading-tight">{highlight}</span>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button 
                          variant={actualIndex === 2 ? "primary" : "secondary"} 
                          fullWidth 
                          href={`https://wa.me/${WHATSAPP_CONFIG.number}?text=I am interested in the ${course.title} course.`}
                          className={actualIndex !== 2 ? "border-border text-text-primary hover:border-primary hover:text-primary" : ""}
                        >
                          WhatsApp
                        </Button>
                        <Button 
                          variant="ghost"
                          fullWidth 
                          href={`/courses/${course.id}`}
                        >
                          Details →
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </Section>

      {/* --- FAQ SECTION --- */}
      <Section
        id="faq"
        title={<>Frequently Asked <span className="text-primary">Questions</span></>}
        subtitle="Everything you need to know about our classes."
        className="bg-bg-section"
      >
        <div className="max-w-[800px] mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-4"
          >
            {COURSE_FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              
              return (
                <motion.div key={index} variants={fadeInUp}>
                  <div 
                    className={`bg-white rounded-2xl border transition-colors duration-200 overflow-hidden ${isOpen ? 'border-primary shadow-sm' : 'border-border hover:border-border-hover'}`}
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                    >
                      <span className="font-heading font-semibold text-text-primary pr-8">{faq.question}</span>
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xl transition-colors duration-200 ${isOpen ? 'bg-primary text-white' : 'bg-bg-soft text-text-secondary'}`}>
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-6 pb-6 pt-0 text-text-secondary text-sm leading-relaxed border-t border-border mt-2 pt-4">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Section>

      {/* --- CTA SECTION --- */}
      <CTASection />
    </main>
  );
}
