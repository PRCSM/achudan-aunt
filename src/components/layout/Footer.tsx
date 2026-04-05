import Link from "next/link";
import { SITE_CONFIG, NAV_LINKS } from "@/constants";

/* ============================================
   ✦ FOOTER — Clean, minimal site footer
   ============================================ */

const footerLinks = {
  Platform: [
    { label: "Courses", href: "/courses" },
    { label: "Videos", href: "/videos" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Testimonials", href: "/testimonials" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-text-primary text-white/80">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">✦</span>
              <span className="font-heading text-xl text-white">
                {SITE_CONFIG.name}
              </span>
            </div>
            <p className="text-white/60 text-sm max-w-sm leading-relaxed">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-medium text-sm mb-4 uppercase tracking-wider">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/50 hover:text-white text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/faq" className="text-white/40 hover:text-white/70 text-sm transition-colors">
              FAQ
            </Link>
            <Link href="/contact" className="text-white/40 hover:text-white/70 text-sm transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
