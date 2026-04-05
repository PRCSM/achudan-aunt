/* ============================================
   ✦ VEDAGANITHAM — UTILITY FUNCTIONS ✦
   ============================================ */

import { WHATSAPP_CONFIG } from "@/constants";

/** Generate a WhatsApp link with pre-filled message */
export function getWhatsAppLink(message?: string): string {
  const msg = encodeURIComponent(
    message ?? WHATSAPP_CONFIG.defaultMessage
  );
  return `https://wa.me/${WHATSAPP_CONFIG.number}?text=${msg}`;
}

/** Merge class names (filters out falsy values) */
export function cn(...classes: (string | false | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}
