"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section, Button } from "@/components/ui";

/* ============================================
   ✦ MATH CORNER INTERACTIVE SECTION
   Slate-900 Chalkboard styling with visual math simulators.
   ============================================ */

export default function MathCornerSection() {
  const [activeTab, setActiveTab] = useState<"trick1" | "trick2">("trick1");
  
  // Inputs
  const [input1, setInput1] = useState<string>("75");
  const [input2, setInput2] = useState<string>("53");

  // Trick 1 Calculation Details
  const getTrick1Steps = (val: string) => {
    const num = parseInt(val);
    if (isNaN(num) || num % 10 !== 5 || num < 15 || num > 995) {
      return null;
    }
    const base = Math.floor(num / 10); // e.g. for 75, base is 7
    const baseNext = base + 1;
    const baseProduct = base * baseNext;
    const result = baseProduct * 100 + 25;

    return {
      num,
      base,
      baseNext,
      baseProduct,
      result,
    };
  };

  // Trick 2 Calculation Details
  const getTrick2Steps = (val: string) => {
    const num = parseInt(val);
    if (isNaN(num) || num < 10 || num > 99) {
      return null;
    }
    const d1 = Math.floor(num / 10);
    const d2 = num % 10;
    const sum = d1 + d2;
    const isCarry = sum >= 10;
    const result = num * 11;

    return {
      num,
      d1,
      d2,
      sum,
      isCarry,
      result,
    };
  };

  const steps1 = getTrick1Steps(input1);
  const steps2 = getTrick2Steps(input2);

  // Speed comparison progress loops
  const [vedicProgress, setVedicProgress] = useState(0);
  const [normalProgress, setNormalProgress] = useState(0);
  const [comparisonKey, setComparisonKey] = useState(0);

  useEffect(() => {
    setVedicProgress(0);
    setNormalProgress(0);

    const vedicInterval = setInterval(() => {
      setVedicProgress((prev) => {
        if (prev >= 100) {
          clearInterval(vedicInterval);
          return 100;
        }
        return prev + 5;
      });
    }, 100); // reaches 100 in 2 seconds

    const normalInterval = setInterval(() => {
      setNormalProgress((prev) => {
        if (prev >= 100) {
          clearInterval(normalInterval);
          return 100;
        }
        return prev + 1.25;
      });
    }, 100); // reaches 100 in 8 seconds

    return () => {
      clearInterval(vedicInterval);
      clearInterval(normalInterval);
    };
  }, [comparisonKey]);

  return (
    <Section
      id="math-corner"
      title="The Math Corner"
      subtitle="Experience the speed of Vedic Mathematics yourself. Try our interactive chalkboard simulators below."
      className="bg-bg-soft/50 scroll-mt-20 snap-start min-h-screen w-full flex items-center justify-center relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        {/* Tab Selectors */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab("trick1")}
            className={`px-6 py-3 rounded-full font-heading font-semibold text-sm transition-all duration-300 ${
              activeTab === "trick1"
                ? "bg-primary text-white shadow-lg"
                : "bg-white text-text-secondary border border-border hover:border-primary/20"
            }`}
          >
            🔥 Squaring ending in 5
          </button>
          <button
            onClick={() => setActiveTab("trick2")}
            className={`px-6 py-3 rounded-full font-heading font-semibold text-sm transition-all duration-300 ${
              activeTab === "trick2"
                ? "bg-primary text-white shadow-lg"
                : "bg-white text-text-secondary border border-border hover:border-primary/20"
            }`}
          >
            ✨ Multiplication by 11
          </button>
        </div>

        {/* ✦ Chalkboard Container ✦ */}
        <div className="relative bg-slate-900 border-8 border-slate-800 rounded-3xl p-6 md:p-10 shadow-2xl text-slate-100 overflow-hidden min-h-[460px]">
          {/* Subtle Chalkboard Texture Overlay */}
          <div className="absolute inset-0 bg-chalkboard-texture opacity-5 pointer-events-none" />
          
          {/* Subtle dust particles in corner */}
          <div className="absolute bottom-4 right-6 text-slate-500 font-mono text-[10px] select-none">
            [ Interactive Sandbox Mode ]
          </div>

          <div className="relative z-10 flex flex-col h-full justify-between">
            {/* Tab 1: Squaring numbers ending in 5 */}
            {activeTab === "trick1" && (
              <div>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-850 pb-6 mb-8">
                  <div>
                    <h3 className="font-heading font-bold text-2xl text-amber-400">Squaring Numbers Ending in 5</h3>
                    <p className="text-slate-400 text-sm mt-1">Input any two or three digit number ending in 5 (e.g. 25, 85, 125)</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm text-slate-300">Enter Number:</span>
                    <input
                      type="number"
                      value={input1}
                      onChange={(e) => {
                        const v = e.target.value;
                        if (v.length <= 3) {
                          setInput1(v);
                        }
                      }}
                      placeholder="e.g. 75"
                      className="w-24 bg-slate-950 border border-slate-800 rounded-xl px-3 py-1.5 font-mono text-xl text-center focus:outline-none focus:border-primary text-white"
                    />
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {steps1 ? (
                    <motion.div
                      key={input1}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-6 font-mono"
                    >
                      {/* Step 1: Display problem */}
                      <div className="flex items-center gap-4 text-2xl">
                        <span className="text-slate-500">Problem:</span>
                        <span className="font-bold underline decoration-wavy decoration-amber-400 text-white">{steps1.num}²</span>
                      </div>

                      {/* Visual Steps Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                        {/* Step A */}
                        <div className="bg-slate-950/60 rounded-2xl p-4 border border-slate-800/80">
                          <p className="text-slate-500 text-xs mb-1 uppercase tracking-wider">Step 1: First Digit</p>
                          <p className="text-slate-200 text-base">Take <span className="text-amber-300 font-bold text-lg">{steps1.base}</span> & multiply by next number <span className="text-amber-300 font-bold text-lg">({steps1.baseNext})</span></p>
                          <p className="text-xl font-bold mt-2 text-primary">{steps1.base} × {steps1.baseNext} = {steps1.baseProduct}</p>
                        </div>

                        {/* Step B */}
                        <div className="bg-slate-950/60 rounded-2xl p-4 border border-slate-800/80">
                          <p className="text-slate-500 text-xs mb-1 uppercase tracking-wider">Step 2: Append 25</p>
                          <p className="text-slate-200 text-base">Vedic Rule: The result always ends with <span className="text-amber-300 font-bold text-lg">25</span>.</p>
                          <p className="text-xl font-bold mt-2 text-amber-300">...25</p>
                        </div>

                        {/* Step C */}
                        <div className="bg-slate-950/60 rounded-2xl p-4 border border-slate-800/80 flex flex-col justify-between">
                          <div>
                            <p className="text-slate-500 text-xs mb-1 uppercase tracking-wider">Step 3: Combine</p>
                            <p className="text-slate-200 text-base">Join results together.</p>
                          </div>
                          <p className="text-2xl font-extrabold text-emerald-400 mt-2 tracking-wider">
                            {steps1.baseProduct}<span className="text-amber-300">25</span>
                          </p>
                        </div>
                      </div>

                      {/* Big satisfying final output */}
                      <div className="text-center pt-8 border-t border-slate-800/60">
                        <p className="text-slate-400 text-sm">Calculated mentally in under 2 seconds!</p>
                        <h4 className="text-4xl md:text-5xl font-extrabold text-emerald-400 mt-2">
                          {steps1.num}² = {steps1.result}
                        </h4>
                      </div>
                    </motion.div>
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-red-400 text-lg font-mono">⚠️ Please enter a number ending in 5 (between 15 and 995)</p>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* Tab 2: Multiply 2-digit number by 11 */}
            {activeTab === "trick2" && (
              <div>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-850 pb-6 mb-8">
                  <div>
                    <h3 className="font-heading font-bold text-2xl text-amber-400">Multiplication by 11</h3>
                    <p className="text-slate-400 text-sm mt-1">Input any two digit number to multiply by 11 (e.g. 12 to 99)</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm text-slate-300">Enter Number:</span>
                    <input
                      type="number"
                      value={input2}
                      onChange={(e) => {
                        const v = e.target.value;
                        if (v.length <= 2) {
                          setInput2(v);
                        }
                      }}
                      placeholder="e.g. 53"
                      className="w-24 bg-slate-950 border border-slate-800 rounded-xl px-3 py-1.5 font-mono text-xl text-center focus:outline-none focus:border-primary text-white"
                    />
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {steps2 ? (
                    <motion.div
                      key={input2}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-6 font-mono"
                    >
                      {/* Display problem */}
                      <div className="flex items-center gap-4 text-2xl">
                        <span className="text-slate-500">Problem:</span>
                        <span className="font-bold underline decoration-wavy decoration-amber-400 text-white">{steps2.num} × 11</span>
                      </div>

                      {/* Visual Steps Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                        {/* Step A */}
                        <div className="bg-slate-950/60 rounded-2xl p-4 border border-slate-800/80">
                          <p className="text-slate-500 text-xs mb-1 uppercase tracking-wider">Step 1: Split digits</p>
                          <p className="text-slate-200 text-base">Pull the digits apart.</p>
                          <div className="flex justify-center gap-8 text-3xl font-extrabold mt-3 text-amber-300">
                            <span>{steps2.d1}</span>
                            <span className="text-slate-600">...</span>
                            <span>{steps2.d2}</span>
                          </div>
                        </div>

                        {/* Step B */}
                        <div className="bg-slate-950/60 rounded-2xl p-4 border border-slate-800/80">
                          <p className="text-slate-500 text-xs mb-1 uppercase tracking-wider">Step 2: Add digits</p>
                          <p className="text-slate-200 text-base">Sum the two outer digits.</p>
                          <p className="text-xl font-bold mt-4 text-primary">
                            {steps2.d1} + {steps2.d2} = <span className="text-amber-300">{steps2.sum}</span>
                          </p>
                        </div>

                        {/* Step C */}
                        <div className="bg-slate-950/60 rounded-2xl p-4 border border-slate-800/80">
                          <p className="text-slate-500 text-xs mb-1 uppercase tracking-wider">Step 3: Insert middle</p>
                          <p className="text-slate-200 text-base">Put sum in the middle.</p>
                          {steps2.isCarry ? (
                            <div className="mt-2 text-sm text-slate-300">
                              Sum is &ge; 10: Carry 1 to first digit:
                              <p className="text-lg font-bold text-emerald-400 mt-1">
                                ({steps2.d1}+1) [{steps2.sum - 10}] {steps2.d2} &rarr; {steps2.result}
                              </p>
                            </div>
                          ) : (
                            <p className="text-2xl font-extrabold text-emerald-400 mt-4 tracking-widest">
                              {steps2.d1}<span className="text-amber-300">{steps2.sum}</span>{steps2.d2}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Big satisfying final output */}
                      <div className="text-center pt-8 border-t border-slate-800/60">
                        <p className="text-slate-400 text-sm">Calculated mentally in under 2 seconds!</p>
                        <h4 className="text-4xl md:text-5xl font-extrabold text-emerald-400 mt-2">
                          {steps2.num} × 11 = {steps2.result}
                        </h4>
                      </div>
                    </motion.div>
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-red-400 text-lg font-mono">⚠️ Please enter a 2-digit number (between 10 and 99)</p>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>

        {/* ✦ Speed Comparison Feature ✦ */}
        <div className="mt-12 bg-white rounded-3xl border border-border p-6 md:p-8 shadow-md">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
            <div>
              <h4 className="font-heading font-bold text-xl text-text-primary flex items-center gap-2">
                ⚡ Speed Comparison
              </h4>
              <p className="text-text-secondary text-sm">Vedic calculation vs Standard pen-and-paper calculation</p>
            </div>
            <button
              onClick={() => setComparisonKey((prev) => prev + 1)}
              className="text-xs font-semibold bg-primary/10 text-primary px-3 py-1.5 rounded-full hover:bg-primary/20 transition-all flex items-center gap-1"
            >
              🔄 Restart Race
            </button>
          </div>

          <div className="space-y-5">
            {/* Vedic Progress */}
            <div>
              <div className="flex justify-between text-sm font-semibold mb-2">
                <span className="flex items-center gap-1.5 text-primary font-bold">
                  <span>⚡</span> Vedic Math Method
                </span>
                <span>{vedicProgress >= 100 ? "Done! (2.0s)" : "Calculating..."}</span>
              </div>
              <div className="w-full bg-border rounded-full h-3 overflow-hidden">
                <div 
                  className="bg-primary h-full rounded-full transition-all duration-100 ease-out shadow-sm"
                  style={{ width: `${vedicProgress}%` }}
                />
              </div>
            </div>

            {/* Traditional Progress */}
            <div>
              <div className="flex justify-between text-sm font-semibold mb-2">
                <span className="text-text-muted">✍️ Traditional Pen & Paper</span>
                <span>{normalProgress >= 100 ? "Done! (8.0s)" : `${(8 * (normalProgress/100)).toFixed(1)}s`}</span>
              </div>
              <div className="w-full bg-border rounded-full h-3 overflow-hidden">
                <div 
                  className="bg-[#A0A0A0] h-full rounded-full transition-all duration-100 ease-out"
                  style={{ width: `${normalProgress}%` }}
                />
              </div>
            </div>
          </div>

          <div className="bg-green-50/70 border border-green-200/50 rounded-2xl p-4 mt-6 text-center">
            <p className="text-sm font-medium text-green-800">
              Vedic Mathematics is <span className="font-bold text-green-600 text-base">400% Faster</span> than traditional methods, allowing students to verify exam questions in seconds.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
