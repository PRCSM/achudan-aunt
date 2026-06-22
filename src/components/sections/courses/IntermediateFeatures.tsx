"use client";

import { motion } from "framer-motion";

export default function IntermediateFeatures() {
  return (
    <>
      {/* SECTION 1: LARGE NUMBER CALCULATIONS */}
      <section className="min-h-[100dvh] w-full snap-start flex items-center justify-center px-5 py-24 bg-[#2D1A00] relative overflow-hidden">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#f97316] font-bold tracking-[0.2em] uppercase text-xs mb-3">Intermediate Focus</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
                Large Number Calculations
              </h2>
              <p className="text-lg text-white/80 leading-relaxed max-w-lg">
                Vedic mathematics simplifies large calculations by reducing the number of steps, revealing patterns in numbers, and encouraging mental math over long written procedures.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-square md:aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl"
              style={{ border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <img src="/images/inter_large_numbers.png" alt="Large number calculations visualization" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: REAL LIFE APPLICATIONS */}
      <section className="min-h-[100dvh] w-full snap-start flex items-center justify-center px-5 py-24 bg-[#1A0D00] relative overflow-hidden">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square md:aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1"
              style={{ border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <img src="/images/inter_real_life.png" alt="Real life math applications" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <p className="text-[#f97316] font-bold tracking-[0.2em] uppercase text-xs mb-3">Practical Usage</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
                Real Life Applications
              </h2>
              <p className="text-lg text-white/80 leading-relaxed max-w-lg">
                Through practical real-world scenarios students bridge the gap between abstract math and daily life, whether calculating groceries, managing a budget, or solving time-based problems.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: MATH CHALLENGES */}
      <section className="min-h-[100dvh] w-full snap-start flex items-center justify-center px-5 py-24 bg-[#2D1A00] relative overflow-hidden">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#f97316] font-bold tracking-[0.2em] uppercase text-xs mb-3">Gamified Learning</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
                Math Challenges
              </h2>
              <p className="text-lg text-white/80 leading-relaxed max-w-lg">
                Engage with interactive games and puzzles that make learning enjoyable. These challenges test speed and accuracy while making students feel highly accomplished in mastering new calculation techniques.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-square md:aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl"
              style={{ border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <img src="/images/inter_math_class.png" alt="Math class games" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4: ACTIVITY CHALLENGES */}
      <section className="min-h-[100dvh] w-full snap-start flex flex-col items-center justify-center px-5 py-24 bg-[#1A0D00] relative overflow-hidden">
        <div className="max-w-5xl mx-auto w-full text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl font-bold text-white mb-12"
          >
            Activity Challenges
          </motion.h2>

          <div className="space-y-8">
            {/* Shopping Challenge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="w-full rounded-3xl overflow-hidden bg-white/5 border border-white/10 shadow-xl relative"
            >
              <img src="/images/inter_shopping.png" alt="Shopping Challenge" className="w-full h-auto object-cover max-h-[400px]" />
              <div className="p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent absolute bottom-0 left-0 right-0">
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2 text-shadow-sm">Shopping Challenge</h3>
                <p className="text-white/90 text-sm md:text-base font-medium">Calculate the Costs Mentally!</p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Square Master Challenge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="rounded-3xl p-10 bg-gradient-to-br from-orange-400 to-orange-500 shadow-xl text-white text-center relative overflow-hidden flex flex-col items-center justify-center min-h-[300px]"
              >
                <h3 className="text-2xl font-heading font-bold mb-4 drop-shadow-md">⚡ Square Master Challenge</h3>
                <div className="space-y-1 text-sm font-medium mb-8 opacity-90">
                  <p>Time: 60s</p>
                  <p>Score: 0</p>
                </div>
                <button className="bg-yellow-300 text-orange-600 font-bold px-8 py-3.5 rounded-full hover:bg-yellow-200 transition-colors shadow-lg shadow-yellow-400/20 w-full max-w-[200px]">
                  Click Start
                </button>
              </motion.div>

              {/* Calendar Master Challenge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="rounded-3xl p-10 bg-gradient-to-br from-cyan-400 to-cyan-500 shadow-xl text-white text-center relative overflow-hidden flex flex-col items-center justify-center min-h-[300px]"
              >
                <h3 className="text-2xl font-heading font-bold mb-4 drop-shadow-md">📅 Calendar Master Challenge</h3>
                <div className="space-y-1 text-sm font-medium mb-8 opacity-90">
                  <p>Time: 60s</p>
                  <p>Score: 0</p>
                </div>
                <button className="bg-yellow-300 text-cyan-700 font-bold px-8 py-3.5 rounded-full hover:bg-yellow-200 transition-colors shadow-lg shadow-yellow-400/20 w-full max-w-[200px]">
                  Click Here To Play!
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
