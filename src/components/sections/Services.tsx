"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Home,
  Building2,
  Package,
  Truck,
  Zap,
  Star,
  Flame,
  Sparkles,
  Siren,
  type LucideIcon,
} from "lucide-react";
import { SERVICES, type Service } from "@/lib/constants";

const ICONS: Record<string, LucideIcon> = {
  Home,
  Building2,
  Package,
  Truck,
  Zap,
};

const BADGE_ICONS: Record<string, LucideIcon> = {
  Star,
  Flame,
  Sparkles,
  Zap,
  Siren,
};

// Color por tipo de badge (siguiendo el espíritu del landing de Isaac).
const BADGE_STYLES: Record<string, string> = {
  Estrella: "bg-amber-500/15 text-amber-300 border-amber-500/30",
  Popular: "bg-rose-500/15 text-rose-300 border-rose-500/30",
  Nuevo: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  Pro: "bg-violet-500/15 text-violet-300 border-violet-500/30",
  Gratis: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
};

const BADGE_EMOJI: Record<string, string> = {
  Estrella: "⭐",
  Popular: "🔥",
  Nuevo: "✨",
  Pro: "⚡",
  Gratis: "🆘",
};

export function Services() {
  return (
    <section id="servicios" className="px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-2xl">
        <SectionTitle
          title="Mis Servicios"
          subtitle="Lo que hago por ti"
        />

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = ICONS[service.icon];
  const BadgeIcon = BADGE_ICONS[service.badge.icon];
  const badgeStyle = BADGE_STYLES[service.badge.text] ?? BADGE_STYLES.Nuevo;
  const emoji = BADGE_EMOJI[service.badge.text] ?? "";
  const ServiceIcon = Icon ?? Truck;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay: (index % 2) * 0.08 }}
      className="group relative flex flex-col rounded-2xl border border-white/[0.06] bg-[#111811] p-6 transition-colors hover:border-emerald-500/30"
    >
      {/* Badge arriba a la derecha */}
      <div className="absolute right-4 top-4">
        <span
          className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${badgeStyle}`}
        >
          {BadgeIcon ? <BadgeIcon className="h-3 w-3" /> : null}
          {emoji} {service.badge.text}
        </span>
      </div>

      {/* Icono en círculo verde */}
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
        <ServiceIcon className="h-6 w-6" />
      </div>

      {/* Título */}
      <h3 className="text-lg font-bold text-white">{service.title}</h3>

      {/* Descripción */}
      <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-400">
        {service.description}
      </p>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-white/5 px-2 py-1 text-[11px] text-gray-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="text-center"
    >
      <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-2 text-sm text-gray-400 sm:text-base">{subtitle}</p>
      ) : null}
    </motion.div>
  );
}
