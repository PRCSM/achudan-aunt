"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import { Button } from "@/components/ui";

/* ============================================
   ✦ NAVBAR — Sticky, transparent → solid on scroll
   Logo: Icon + wordmark, full emblem on desktop hover
   ============================================ */

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    // Listen to the snap scroll container OR window (covers both pages)
    const container = document.querySelector("main");
    const handleContainerScroll = () => setScrolled((container?.scrollTop ?? 0) > 20);
    const handleWindowScroll = () => setScrolled(window.scrollY > 20);

    container?.addEventListener("scroll", handleContainerScroll, { passive: true });
    window.addEventListener("scroll", handleWindowScroll, { passive: true });
    return () => {
      container?.removeEventListener("scroll", handleContainerScroll);
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/96 backdrop-blur-xl shadow-md border-b border-border"
          : "bg-white border-b border-border/50"
      }`}
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 flex items-center justify-between h-16 md:h-20">

        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
          {/* Icon emblem — scales cleanly at navbar height */}
          <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
            <Image
              src="/images/logo-icon.jpeg"
              alt="VedaGanitham emblem"
              fill
              sizes="48px"
              className="object-contain transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(180,120,40,0.35)]"
              priority
            />
          </div>

          {/* Wordmark */}
          <div className="flex flex-col leading-none">
            <span className="font-heading font-bold text-lg md:text-xl text-text-primary tracking-tight group-hover:text-[#7B2D00] transition-colors duration-300">
              VedaGanitham
            </span>
            <span className="text-[9px] md:text-[10px] font-semibold tracking-[0.18em] uppercase text-[#B8860B] opacity-80">
              Traditional Indian Mathematics
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" role="navigation" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-secondary hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button variant="primary" size="sm" href="/#demo-form">
            Book Free Demo
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden relative w-10 h-10 flex items-center justify-center"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white border-t border-border overflow-hidden"
          >
            {/* Mobile logo strip */}
            <div className="flex items-center gap-3 px-5 pt-5 pb-3 border-b border-border/50">
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src="/images/logo-icon.png"
                  alt="VedaGanitham"
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading font-bold text-base text-text-primary">VedaGanitham</span>
                <span className="text-[9px] font-semibold tracking-[0.16em] uppercase text-[#B8860B]">Traditional Indian Mathematics</span>
              </div>
            </div>

            <nav className="flex flex-col px-5 py-5 gap-4" role="navigation" aria-label="Mobile navigation">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-text-secondary hover:text-primary transition-colors py-2 border-b border-border/30 last:border-0"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2">
                <Button variant="primary" fullWidth href="/#demo-form" onClick={() => setMobileOpen(false)}>
                  Book Free Demo
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
