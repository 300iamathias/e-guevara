"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/constants";

/**
 * Botón flotante de WhatsApp — siempre visible abajo a la derecha.
 * Pulso sutil cada 3 segundos para llamar atención.
 */
export function FloatingWhatsApp() {
  return (
    <motion.a
      href={CONTACT.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Cotizar por WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: 0.6 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      className="wa-pulse fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/40 transition-colors hover:bg-emerald-600 sm:h-16 sm:w-16"
    >
      <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
      <span className="sr-only">Cotizar por WhatsApp</span>
    </motion.a>
  );
}
