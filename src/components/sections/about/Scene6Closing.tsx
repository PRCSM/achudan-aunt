"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui";
import Footer from "@/components/layout/Footer";

/* ============================================
   ✦ SCENE 6 — FINAL EMOTIONAL CLOSING
   Cinematic closing with glowing keyword reveal + CTA + Footer
   ============================================ */

const closingWords = [
  { word: "Mathematics", em: false },
  { word: "is", em: false },
  { word: "not", em: false },
  { word: "magic.", em: false },
];
const closingLine2 = [
  { word: "But", em: false },
  { word: "with", em: false },
  { word: "the", em: false },
  { word: "right", em: false },
  { word: "guidance,", em: false },
];
const closingLine3 = [
  { word: "it", em: false },
  { word: "can", em: false },
  { word: "feel", em: false },
  { word: "magical.", em: true }, // glowing emphasis
];

const particles = [
  { text: "45²", top: "12%", left: "12%", delay: 0.2 },
  { text: "√", top: "55%", left: "5%", delay: 1 },
  { text: "∑", top: "20%", right: "10%", delay: 0.6 },
  { text: "2025", top: "68%", right: "8%", delay: 1.4 },
  { text: "∞", top: "35%", right: "3%", delay: 0.3 },
];

export default function Scene6Closing() {
  return (
    <div className="snap-start min-h-screen w-full overflow-y-auto bg-white">
      {/* Closing scene */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-white via-primary-light/20 to-white px-5 py-24">
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/6 rounded-full blur-[120px]" />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
          {particles.map((p, i) => (
            <motion.div
              key={i}
              className="absolute text-primary/[0.07] font-heading font-bold text-3xl md:text-5xl"
              style={{ top: p.top, left: p.left, right: p.right }}
              animate={{ y: [0, -14, 0], opacity: [0.05, 0.12, 0.05] }}
              transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
            >
              {p.text}
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            whileInView={{ opacity: 0.75, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
            className="font-medium uppercase mb-5"
            style={{ fontSize: "0.72rem", letterSpacing: "0.28em", color: "#FF6B2B" }}
          >
            ✦ Our Promise
          </motion.p>

          {/* Cinematic text reveal — 3 lines */}
          <div className="font-heading font-bold text-[clamp(2rem,5vw,3.8rem)] leading-[1.15] text-text-primary mb-12">
            {/* Line 1 */}
            <div className="flex flex-wrap justify-center gap-x-[12px] mb-2">
              {closingWords.map((w, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                >
                  {w.word}
                </motion.span>
              ))}
            </div>
            {/* Line 2 */}
            <div className="flex flex-wrap justify-center gap-x-[12px] mb-2 text-text-secondary/70">
              {closingLine2.map((w, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1, ease: "easeOut" }}
                >
                  {w.word}
                </motion.span>
              ))}
            </div>
            {/* Line 3 */}
            <div className="flex flex-wrap justify-center gap-x-[12px]">
              {closingLine3.map((w, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.0 + i * 0.12, ease: "easeOut" }}
                  className={
                    w.em
                      ? "text-primary relative"
                      : ""
                  }
                >
                  {w.em ? (
                    <span className="relative">
                      {w.word}
                      {/* Glow effect behind the word */}
                      <motion.span
                        className="absolute inset-0 text-primary/30 blur-xl"
                        animate={{ opacity: [0.3, 0.8, 0.3] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                        aria-hidden="true"
                      >
                        {w.word}
                      </motion.span>
                    </span>
                  ) : w.word}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Closing sub-message */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 1.6 }}
            className="text-text-secondary text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-12"
          >
            Let your child experience the joy of mathematics — not as a chore, but as an
            adventure. Book a free demo and see the transformation begin.
          </motion.p>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}>
              <Button
                variant="primary"
                size="lg"
                href="/#demo-form"
                className="shadow-xl shadow-primary/25 text-base"
              >
                Book Your Free Demo ✦
              </Button>
            </motion.div>
            <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300 }}>
              <Button variant="ghost" size="lg" href="/" className="!font-semibold text-text-secondary hover:text-primary">
                ← Back to Home
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer at the bottom of the last scene */}
      <Footer />
    </div>
  );
}
