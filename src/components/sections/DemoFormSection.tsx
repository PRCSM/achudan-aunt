"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Section, Button, Input } from "@/components/ui";
import { fadeInUp, fadeInLeft, fadeInRight } from "@/lib/animations";
import Footer from "@/components/layout/Footer";
import { submitDemo } from "@/actions/submitDemo";

/* ============================================
   ✦ DEMO FORM SECTION — Lead capture
   Fields: Name, Phone/Email, Course, Date
   ============================================ */

const courseOptions = [
  { value: "", label: "Select a course" },
  { value: "basic", label: "Basic" },
  { value: "intermediate", label: "Intermediate" },
  { value: "advanced", label: "Advanced" },
  { value: "teacher-training", label: "Teacher Training" },
];

export default function DemoFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const result = await submitDemo(formData);
      
      if (result.success) {
        setSubmitted(true);
      } else {
        alert(result.error || "Failed to submit. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="snap-start min-h-screen w-full overflow-y-auto bg-bg-section">
      <Section id="demo-form" soft className="w-full flex items-center justify-center relative overflow-hidden bg-bg-section">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left — copy */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="font-heading text-[var(--font-h1)] text-text-primary leading-tight">
            Book Your
            <br />
            <span className="text-primary">Free Demo</span> Class
          </h2>
          <p className="mt-4 text-text-secondary text-lg leading-relaxed max-w-md">
            Experience the magic of Vedic Mathematics with a free interactive
            demo. No commitment required — just curiosity!
          </p>

          <div className="mt-8 space-y-4">
            {[
              "Live interactive session via Google Meet",
              "Personalized to your child's level",
              "30-minute engaging demo",
              "No payment required",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm flex-shrink-0">
                  ✓
                </span>
                <span className="text-sm text-text-secondary">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — form */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="bg-bg-soft rounded-3xl p-8 md:p-10 shadow-lg">
            {submitted ? (
              /* Success state */
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-3xl mx-auto mb-4">
                  ✓
                </div>
                <h3 className="font-heading text-2xl text-text-primary mb-2">
                  Booking Received!
                </h3>
                <p className="text-text-secondary text-sm max-w-sm mx-auto">
                  Thank you for your interest! We&apos;ll contact you within 24 hours
                  to confirm your demo session.
                </p>
                <Button
                  variant="secondary"
                  className="mt-6"
                  onClick={() => setSubmitted(false)}
                >
                  Book Another
                </Button>
              </motion.div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-heading text-xl text-text-primary mb-2">
                  Schedule Your Free Demo
                </h3>

                <Input
                  label="Full Name"
                  placeholder="Enter your name"
                  required
                  name="name"
                  className="!bg-bg-soft"
                />

                <Input
                  label="Phone or Email"
                  placeholder="Your phone number or email"
                  required
                  name="contact"
                  className="!bg-bg-soft"
                />

                {/* Course select */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="course"
                    className="text-sm font-medium text-text-primary"
                  >
                    Course Interest
                  </label>
                  <select
                    id="course"
                    name="course"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-bg-soft text-text-primary text-base transition-all duration-250 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 appearance-none cursor-pointer"
                  >
                    {courseOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <Input
                  label="Preferred Date"
                  type="date"
                  required
                  name="preferredDate"
                />

                <Button
                  type="submit"
                  variant="primary"
                  fullWidth
                  size="lg"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Submitting...
                    </span>
                  ) : (
                    "Book Free Demo →"
                  )}
                </Button>

                <p className="text-xs text-text-muted text-center mt-2">
                  We respect your privacy. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </Section>
      <Footer />
    </div>
  );
}
