import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG, WHATSAPP_CONFIG } from "@/constants";

/* ============================================
   ✦ FOOTER — 3-Tier Layout with Full Emblem Branding
   ============================================ */

const footerLinks = {
  Services: [
    { label: "Basic", href: "/courses" },
    { label: "Intermediate", href: "/courses" },
    { label: "Advanced", href: "/courses" },
    { label: "Teacher Training", href: "/courses" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Math Corner", href: "/math-corner" },
    { label: "Videos", href: "/videos" },
    { label: "Book Demo", href: "/#demo-form" },
  ],
};

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Our History", href: "#" },
  { label: "What We Do", href: "#" },
];

export default function Footer() {
  return (
    <footer className="font-footer">
      {/* Tier 1: Maroon-Gold Heritage Bar */}
      <div className="w-full h-1 bg-gradient-to-r from-[#7B2D00] via-[#B8860B] to-[#7B2D00]" />

      {/* Tier 2: White Main Section */}
      <div className="bg-white text-text-primary">
        <div className="mx-auto w-full max-w-[1200px] px-5 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">

            {/* Col 1: Full Emblem + Brand */}
            <div className="md:col-span-5 pr-0 md:pr-10">
              {/* Full emblem logo */}
              <div className="flex flex-col items-start gap-5 mb-8">
                <div className="relative w-28 h-28 flex-shrink-0"
                  style={{ filter: "drop-shadow(0 4px 16px rgba(184,134,11,0.18))" }}
                >
                  <Image
                    src="/images/logo-full.png"
                    alt="VedaGanitham — Traditional Indian Mathematics emblem"
                    fill
                    sizes="112px"
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-2xl tracking-tight text-[#2D1A00] mb-0.5">
                    {SITE_CONFIG.name}
                  </h3>
                  <p
                    className="text-xs font-semibold tracking-[0.22em] uppercase mb-3"
                    style={{ color: "#B8860B" }}
                  >
                    Traditional Indian Mathematics
                  </p>
                  {/* Decorative divider */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-px w-8 bg-[#B8860B]/40" />
                    <span className="text-[#B8860B] text-xs">✦</span>
                    <div className="h-px w-8 bg-[#B8860B]/40" />
                  </div>
                </div>
              </div>

              <h4 className="font-bold text-base mb-3 text-[#2D1A00]">About Us</h4>
              <p className="text-text-secondary text-sm leading-relaxed max-w-[380px]">
                {SITE_CONFIG.description}
              </p>
            </div>

            {/* Col 2: Services */}
            <div className="md:col-span-2">
              <h4 className="font-bold text-base mb-5 text-[#2D1A00]">Services</h4>
              <ul className="space-y-3">
                {footerLinks.Services.map((link) => (
                  <li key={link.label} className="flex items-center gap-2">
                    <span className="text-[#B8860B] text-xs">✦</span>
                    <Link
                      href={link.href}
                      className="text-text-secondary hover:text-primary text-sm font-medium transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Company */}
            <div className="md:col-span-2">
              <h4 className="font-bold text-base mb-5 text-[#2D1A00]">Navigate</h4>
              <ul className="space-y-3">
                {footerLinks.Company.map((link) => (
                  <li key={link.label} className="flex items-center gap-2">
                    <span className="text-[#B8860B] text-xs">✦</span>
                    <Link
                      href={link.href}
                      className="text-text-secondary hover:text-primary text-sm font-medium transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Contact */}
            <div className="md:col-span-3">
              <h4 className="font-bold text-base mb-5 text-[#2D1A00]">Contact Us</h4>

              <div className="mb-4">
                <p className="text-xs font-bold mb-1 text-text-muted uppercase tracking-wider">Phone</p>
                <p className="text-sm text-text-secondary">+{WHATSAPP_CONFIG.number}</p>
              </div>

              <div className="mb-8">
                <p className="text-xs font-bold mb-1 text-text-muted uppercase tracking-wider">Email</p>
                <p className="text-sm text-text-secondary">{SITE_CONFIG.email}</p>
              </div>

              <h4 className="font-bold text-base mb-4 text-[#2D1A00]">Follow Us</h4>
              <div className="flex items-center gap-3">
                {[
                  { icon: "F", label: "Facebook", active: true },
                  { icon: "T", label: "Twitter" },
                  { icon: "L", label: "LinkedIn" },
                  { icon: "W", label: "WhatsApp" },
                  { icon: "I", label: "Instagram" },
                ].map(({ icon, label, active }) => (
                  <a
                    key={icon}
                    href="#"
                    aria-label={label}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all hover:scale-110 ${
                      active
                        ? "bg-primary text-white shadow-md"
                        : "bg-white border border-border text-text-secondary hover:border-primary hover:text-primary"
                    }`}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Tier 3: Dark Heritage Bottom Bar */}
      <div className="bg-[#1A0D00] text-[#94A3B8]">
        <div className="mx-auto w-full max-w-[1200px] px-5 py-4 flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Left: Legal links */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium">
            {legalLinks.map((link, idx) => (
              <div key={link.label} className="flex items-center gap-2">
                <Link href={link.href} className="hover:text-[#B8860B] transition-colors">
                  {link.label}
                </Link>
                {idx < legalLinks.length - 1 && (
                  <span className="text-[#475569]">|</span>
                )}
              </div>
            ))}
          </div>

          {/* Center: Mini logo */}
          <div className="flex items-center gap-2 opacity-60">
            <div className="relative w-5 h-5">
              <Image
                src="/images/logo-icon.png"
                alt="VedaGanitham"
                fill
                sizes="20px"
                className="object-contain"
              />
            </div>
            <span className="text-xs font-semibold tracking-wider" style={{ color: "#B8860B" }}>
              VedaGanitham
            </span>
          </div>

          {/* Right: Copyright */}
          <p className="text-xs">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}
