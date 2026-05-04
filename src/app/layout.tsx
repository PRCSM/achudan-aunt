import type { Metadata } from "next";
import { Poppins, Inter, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import "./globals.css";

/* ============================================
   ✦ VEDAGANITHAM — ROOT LAYOUT ✦
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
  title: {
    default: "VedaGanitham — Vedic Mathematics Learning Platform",
    template: "%s | VedaGanitham",
  },
  description:
    "Discover the ancient power of Vedic Mathematics. Simplify calculations, sharpen your mind, and excel in math with our expertly designed courses.",
  keywords: [
    "Vedic Mathematics",
    "Vedic Maths",
    "VedaGanitham",
    "Mental Math",
    "Math Courses",
    "Speed Math",
  ],
  openGraph: {
    title: "VedaGanitham — Vedic Mathematics Learning Platform",
    description:
      "Simplify calculations, sharpen your mind, and excel in math with Vedic Mathematics.",
    siteName: "VedaGanitham",
    type: "website",
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
      <body className="min-h-full flex flex-col font-body text-text-primary bg-bg-main">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
