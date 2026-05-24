"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui";
import Footer from "@/components/layout/Footer";
import { getWhatsAppLink } from "@/lib/utils";

/* ============================================
   ✦ SCENE 6 — FINAL CALL TO ACTION
   Emotional closing + Demo + WhatsApp
   ============================================ */

const particles = [
  { text: "45²", top: "10%", left: "10%", delay: 0.2 },
  { text: "√", top: "60%", left: "5%", delay: 1 },
  { text: "∑", top: "18%", right: "9%", delay: 0.6 },
  { text: "2025", top: "70%", right: "7%", delay: 1.4 },
  { text: "π", top: "38%", right: "3%", delay: 0.3 },
  { text: "11×", top: "80%", left: "42%", delay: 1.8 },
];

const closingWords = "Math becomes exciting when students discover patterns instead of memorizing formulas.".split(" ");

export default function MC6CTA() {
  return (
    <div className="min-h-screen w-full bg-white">
      {/* Closing scene */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-[#0f1a2e] to-slate-950 px-5 py-20">
        {/* Atmospheric glow */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/8 rounded-full blur-[150px]" />
        </div>

        {/* Floating math particles */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
          {particles.map((p, i) => (
            <motion.div
              key={i}
              className="absolute font-heading font-bold text-3xl md:text-5xl text-white"
              style={{ top: p.top, left: p.left, right: p.right }}
              initial={{ opacity: 0.07, y: 0 }}
              animate={{ y: [0, -14, 0], opacity: [0.07, 0.13, 0.07] }}
              transition={{ duration: 9 + i * 2, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
            >
              {p.text}
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
            className="uppercase mb-[18px]"
            style={{
              fontSize: "0.72rem",
              fontWeight: 500,
              letterSpacing: "0.24em",
              color: "rgba(255, 255, 255, 0.72)",
            }}
          >
            ✦ Start Your Journey
          </motion.p>

          {/* Animated closing message — word by word */}
          <div className="flex flex-wrap justify-center gap-x-[10px] gap-y-2 font-heading font-bold text-[clamp(1.6rem,4vw,3rem)] leading-[1.2] text-white mb-12 max-w-2xl mx-auto">
            {closingWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className={word === "memorizing" ? "line-through" : ""}
                style={
                  word === "memorizing"
                    ? { color: "rgba(180, 190, 220, 0.45)" }
                    : word === "patterns" || word === "exciting"
                    ? { color: "#f97316" }
                    : { color: "rgba(255, 255, 255, 0.96)" }
                }
              >
                {word}
              </motion.span>
            ))}
          </div>

          {/* Supporting text */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2 }}
            className="text-base md:text-lg mb-12 max-w-xl mx-auto"
            style={{ color: "rgba(255, 255, 255, 0.68)", lineHeight: 1.75 }}
          >
            Join 100+ students across 5 countries who've discovered the magic of Vedic
            Mathematics. Your first class is free — no commitment required.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button
                variant="primary"
                size="lg"
                href="/#demo-form"
                className="shadow-xl shadow-primary/30 text-base"
              >
                Book Your Free Demo ✦
              </Button>
            </motion.div>

            {/* WhatsApp CTA */}
            <motion.a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 bg-[#25D366] text-white font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-[#25D366]/20 hover:shadow-xl transition-shadow text-sm"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </motion.a>
          </motion.div>

          {/* Trust micro-stats */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.8 }}
            className="flex flex-wrap items-center justify-center gap-6 text-center"
          >
            {[
              { num: "100+", label: "Students" },
              { num: "5+", label: "Countries" },
              { num: "Free", label: "First Class" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-0.5">
                <span className="font-heading font-extrabold text-xl text-primary">{item.num}</span>
                <span className="text-xs" style={{ color: "rgba(180,190,220,0.48)" }}>{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
