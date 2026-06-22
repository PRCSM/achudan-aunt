"use client";

import { useState, useEffect } from "react";
import { motion, animate } from "framer-motion";
import { Section, Card } from "@/components/ui";
import { fadeInUp } from "@/lib/animations";

/* ============================================
   ✦ COUNTER COMPONENT (Odometer count-up)
   ============================================ */
function Counter({
  from = 0,
  to,
  duration = 2.5,
  suffix = "",
}: {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
}) {
  const [value, setValue] = useState(from);

  useEffect(() => {
    const controls = animate(from, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setValue(Math.floor(latest)),
    });
    return () => controls.stop();
  }, [from, to, duration]);

  return (
    <span className="font-heading font-extrabold text-3xl md:text-4xl text-primary">
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ============================================
   ✦ DATA
   ============================================ */
const stats = [
  { label: "Participants", to: 5000, suffix: "+" },
  { label: "States & UTs", to: 36, suffix: "" },
  { label: "Winners", to: 150, suffix: "+" },
  { label: "E-Certificates", to: 100, suffix: "%" },
];

const categories = [
  "All Winners",
  "National Champion",
  "Runner-up",
  "Third Place",
  "Excellence Award",
  "Fast Calculator",
  "Perfect Score",
];

const winners = [
  {
    id: 1,
    name: "Advik",
    grade: "Grade 6",
    location: "Tamil Nadu",
    regId: "VM24-CH-001",
    category: "National Champion",
    emoji: "🥇",
    color: "text-primary",
    bg: "bg-primary/10",
    certFile: "/certificates/nlc%20certificate%202026%20advik.pdf",
  },
  {
    id: 2,
    name: "Archish",
    grade: "Grade 7",
    location: "Karnataka",
    regId: "VM24-RU-015",
    category: "Runner-up",
    emoji: "🥈",
    color: "text-slate-400",
    bg: "bg-slate-400/10",
    certFile: "/certificates/nlc%20certificate%202026%20archish%20new.pdf",
  },
  {
    id: 3,
    name: "Chetna",
    grade: "Grade 8",
    location: "Maharashtra",
    regId: "VM24-TP-023",
    category: "Third Place",
    emoji: "🥉",
    color: "text-orange-700",
    bg: "bg-orange-700/10",
    certFile: "/certificates/nlc%20certificate%202026%20chetna.pdf",
  },
  {
    id: 4,
    name: "Kishore",
    grade: "Grade 5",
    location: "Delhi",
    regId: "VM24-EA-034",
    category: "Excellence Award",
    emoji: "⭐",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    certFile: "/certificates/nlc%20certificate%202026%20kishore%20new.pdf",
  },
  {
    id: 5,
    name: "Laya",
    grade: "Grade 6",
    location: "Uttar Pradesh",
    regId: "VM24-FC-041",
    category: "Fast Calculator",
    emoji: "⚡",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    certFile: "/certificates/nlc%20certificate%202026%20laya%20new.pdf",
  },
  {
    id: 6,
    name: "Sukanya",
    grade: "Grade 9",
    location: "West Bengal",
    regId: "VM24-PS-052",
    category: "Perfect Score",
    emoji: "🎯",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    certFile: "/certificates/nlc%20certificate%202026%20sukanya.pdf",
  },
  {
    id: 7,
    name: "Sanjay Krish",
    grade: "Grade 7",
    location: "Tamil Nadu",
    regId: "VM24-SM-061",
    category: "Special Mention",
    emoji: "🌟",
    color: "text-pink-500",
    bg: "bg-pink-500/10",
    certFile: "/certificates/nlc%20certificate%202026(%20sanjay%20krish).pdf",
  },
];

/* ============================================
   ✦ COMPONENT
   ============================================ */
export default function CertificatesSection() {
  return (
    <Section
      id="certificates"
      title="Celebrating Our Champions"
      subtitle="Recognizing excellence in every calculation. Meet the outstanding students who have mastered Vedic Mathematics."
      className="scroll-mt-20 snap-start min-h-screen w-full flex items-center justify-center bg-bg-main py-20"
    >
      <div className="w-full max-w-6xl mx-auto px-4">
        {/* Stats Strip */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-6 bg-bg-soft rounded-2xl border border-primary/10 shadow-sm"
            >
              <Counter to={stat.to} suffix={stat.suffix} />
              <p className="text-sm text-text-muted mt-1 font-medium text-center">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>



        {/* Winners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {winners.map((winner) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4 }}
              key={winner.id}
            >
              <Card className="p-6 h-full flex flex-col items-center text-center border border-primary/10 shadow-sm overflow-hidden">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4 ${winner.bg} ${winner.color}`}
                >
                  {winner.emoji}
                </div>
                <h3 className={`text-sm font-bold uppercase tracking-wider mb-2 ${winner.color}`}>
                  {winner.category}
                </h3>
                <h4 className="font-heading font-extrabold text-2xl !text-black mb-1">
                  {winner.name}
                </h4>
                <p className="!text-black/70 text-sm font-medium mb-4">
                  {winner.grade} • {winner.location}
                </p>
                
                <div className="w-full h-px bg-border my-4" />
                
                {/* Embedded Certificate PDF */}
                <div className="w-full mt-2 rounded-lg overflow-hidden border border-border bg-bg-soft flex items-center justify-center relative aspect-[4/3]">
                  <iframe
                    src={`${winner.certFile}#toolbar=0&navpanes=0&scrollbar=0`}
                    title={`Certificate for ${winner.name}`}
                    className="absolute inset-0 w-full h-full"
                    style={{ border: "none" }}
                  />
                  {/* Overlay to prevent interaction with iframe inside the card if needed, but since we removed hovering we can just let them view it */}
                  <div className="absolute inset-0 pointer-events-none border border-black/5 rounded-lg" />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
