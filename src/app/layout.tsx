import type { Metadata } from "next";
import { Poppins, Inter, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import "./globals.css";

/* ============================================
   ✦ VEDAGANITHAM — ROOT LAYOUT ✦
   Snap-scroll architecture:
   - Navbar is fixed (z-50)
   - WhatsApp button is fixed (z-50)
   - Body is overflow-hidden so the snap container controls scrolling
   - Footer is embedded inside the last snap scene (DemoFormSection)
   ============================================ */

const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vedaganitham.com"),
  title: {
    default: "VedaGanitham — Traditional Indian Mathematics",
    template: "%s | VedaGanitham",
  },
  description:
    "Discover the ancient power of Vedic Mathematics. Simplify calculations, sharpen your mind, and excel in math with our expertly designed courses.",
  keywords: [
    "Vedic Mathematics",
    "Vedic Maths",
    "VedaGanitham",
    "Mental Math",
    "Traditional Indian Mathematics",
    "Math Courses",
    "Speed Math",
  ],
  icons: {
    icon: "/images/logo-icon.png",
    apple: "/images/logo-icon.png",
    shortcut: "/images/logo-icon.png",
  },
  openGraph: {
    title: "VedaGanitham — Traditional Indian Mathematics",
    description:
      "Simplify calculations, sharpen your mind, and excel in math with Vedic Mathematics.",
    siteName: "VedaGanitham",
    type: "website",
    images: [{ url: "/images/logo-full.png", width: 1200, height: 630, alt: "VedaGanitham" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      {/* overflow-hidden keeps the snap container as the sole scroller */}
      <body className="h-full overflow-hidden font-body text-text-primary bg-bg-main">
        <Navbar />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
