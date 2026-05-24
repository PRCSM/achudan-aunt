import Link from "next/link";
import { SITE_CONFIG, WHATSAPP_CONFIG } from "@/constants";

/* ============================================
   ✦ FOOTER — 3-Tier Layout
   ============================================ */

const footerLinks = {
  Services: [
    { label: "Basic", href: "#courses" },
    { label: "Intermediate", href: "#courses" },
    { label: "Advanced", href: "#courses" },
    { label: "Teacher Training", href: "#courses" },
  ],
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Our Clients", href: "#testimonials" },
    { label: "Pricing", href: "#courses" },
    { label: "Contact Us", href: "#contact" },
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
      {/* Tier 1: Orange Top Bar */}
      <div className="w-full h-2 bg-primary" />

      {/* Tier 2: White Main Section */}
      <div className="bg-white text-text-primary">
        <div className="mx-auto w-full max-w-[1200px] px-5 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
            
            {/* Col 1: Brand & About (Takes up more space) */}
            <div className="md:col-span-5 pr-0 md:pr-10">
              <div className="mb-6">
                <h3 className="font-bold text-3xl tracking-tight mb-1">
                  {SITE_CONFIG.name.toUpperCase()}
                </h3>
                <p className="text-primary font-medium text-sm">
                  {SITE_CONFIG.tagline}
                </p>
              </div>
              
              <h4 className="font-bold text-lg mb-3">About Us</h4>
              <p className="text-text-secondary text-sm leading-relaxed max-w-[400px]">
                {SITE_CONFIG.description}
              </p>
            </div>

            {/* Col 2: Services */}
            <div className="md:col-span-2">
              <h4 className="font-bold text-lg mb-5">Services</h4>
              <ul className="space-y-3">
                {footerLinks.Services.map((link) => (
                  <li key={link.label} className="flex items-center gap-2">
                    <span className="text-text-muted text-xs">•</span>
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
              <h4 className="font-bold text-lg mb-5">Company</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="text-text-muted text-xs">•</span>
                  <Link
                    href="/#about"
                    className="text-text-secondary hover:text-primary text-sm font-medium transition-colors duration-200"
                  >
                    About Us
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-text-muted text-xs">•</span>
                  <Link
                    href="/#testimonials"
                    className="text-text-secondary hover:text-primary text-sm font-medium transition-colors duration-200"
                  >
                    Testimonials
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-text-muted text-xs">•</span>
                  <Link
                    href="/#math-corner"
                    className="text-text-secondary hover:text-primary text-sm font-medium transition-colors duration-200"
                  >
                    Math Corner
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-text-muted text-xs">•</span>
                  <Link
                    href="/#demo-form"
                    className="text-text-secondary hover:text-primary text-sm font-medium transition-colors duration-200"
                  >
                    Book Demo
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Contact Us & Social */}
            <div className="md:col-span-3">
              <h4 className="font-bold text-lg mb-5">Contact us</h4>
              
              <div className="mb-4">
                <p className="text-sm font-bold mb-1">Call :</p>
                <p className="text-sm text-text-secondary">+{WHATSAPP_CONFIG.number}</p>
              </div>
              
              <div className="mb-8">
                <p className="text-sm font-bold mb-1">Email :</p>
                <p className="text-sm text-text-secondary">{SITE_CONFIG.email}</p>
              </div>
              
              <h4 className="font-bold text-lg mb-4">Follow Us</h4>
              <div className="flex items-center gap-3">
                {/* Social Icons (Placeholders based on reference) */}
                {['F', 'T', 'L', 'W', 'I'].map((icon, idx) => (
                  <a 
                    key={icon} 
                    href="#" 
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-transform hover:scale-110 ${
                      idx === 0 
                        ? 'bg-primary text-white shadow-md' 
                        : 'bg-white border border-border text-text-secondary hover:border-primary hover:text-primary'
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

      {/* Tier 3: Dark Bottom Bar */}
      <div className="bg-[#1A1A2E] text-[#94A3B8]">
        <div className="mx-auto w-full max-w-[1200px] px-5 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium">
            {legalLinks.map((link, idx) => (
              <div key={link.label} className="flex items-center gap-2">
                <Link href={link.href} className="hover:text-white transition-colors">
                  {link.label}
                </Link>
                {idx < legalLinks.length - 1 && (
                  <span className="text-[#475569]">|</span>
                )}
              </div>
            ))}
          </div>

          <p className="text-xs">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All images are for demo purposes only.
          </p>
          
        </div>
      </div>
    </footer>
  );
}
