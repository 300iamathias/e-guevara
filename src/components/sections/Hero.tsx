"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Truck, Instagram, Facebook, MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/constants";

const socials = [
  {
    href: CONTACT.whatsappLink,
    label: "WhatsApp",
    icon: MessageCircle,
    external: true,
  },
  {
    href: CONTACT.instagram,
    label: "Instagram",
    icon: Instagram,
    external: true,
  },
  {
    href: CONTACT.facebook,
    label: "Facebook",
    icon: Facebook,
    external: true,
  },
];

export function Hero() {
  return (
    <header
      id="inicio"
      className="relative overflow-hidden px-4 pt-12 pb-10 sm:px-6 sm:pt-16 sm:pb-12 md:pt-20"
    >
      {/* Glow de fondo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl"
      />
      <div className="relative mx-auto flex max-w-2xl flex-col items-center text-center">
        {/* Foto circular con badge verde */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative h-[120px] w-[120px] overflow-hidden rounded-full border-2 border-emerald-500/60 bg-[#1A241A] shadow-[0_0_40px_-8px_rgba(16,185,129,0.45)] sm:h-[140px] sm:w-[140px]">
            <Image
              src="/edison-guevara.png"
              alt="Edison Guevara"
              fill
              priority
              loading="eager"
              sizes="140px"
              className="object-cover"
            />
            {/* Tinte verde sutil */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-emerald-500/5 mix-blend-overlay"
            />
          </div>
        </motion.div>

        {/* Nombre — personal, estilo tarjeta de presentación digital */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl"
        >
          Edison Guevara
        </motion.h1>

        {/* Línea bajo el nombre: empresa + rol */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.14 }}
          className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-emerald-400/90 sm:text-sm"
        >
          Fundador · Mudanzas Guevara
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.18 }}
          className="mt-3 flex items-center justify-center gap-2 text-base font-medium text-gray-200 sm:text-lg"
        >
          <Truck className="h-4 w-4 text-emerald-400 sm:h-5 sm:w-5" aria-hidden />
          Mudanzas sin estrés en Guayaquil y todo Ecuador
        </motion.p>

        {/* Descripción */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.26 }}
          className="mt-4 max-w-xl text-sm leading-relaxed text-gray-300 sm:text-base"
        >
          Ayudo a familias y empresas a mudarse sin estrés en 48h. Embalaje
          profesional, transporte propio y personal confiable. Cotiza por
          WhatsApp en 5 minutos.
        </motion.p>

        {/* Redes sociales — círculos pequeños */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.34 }}
          className="mt-6 flex items-center gap-3"
        >
          {socials.map(({ href, label, icon: Icon, external }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.06] bg-[#111811] text-gray-300 transition-colors hover:border-emerald-500/40 hover:text-emerald-400"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </motion.div>
      </div>
    </header>
  );
}
