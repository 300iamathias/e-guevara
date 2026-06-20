"use client";

import { motion } from "framer-motion";
import { MapPin, MessageCircle } from "lucide-react";
import { CITIES } from "@/lib/constants";
import { CONTACT } from "@/lib/constants";
import { SectionTitle } from "./Services";

// Silueta estilizada del territorio continental de Ecuador (no geográficamente
// precisa, solo evocativa). viewBox 0 0 100 100.
const ECUADOR_PATH =
  "M22,22 L52,25 L55,40 L56,55 L52,68 L45,78 L38,88 Q32,90 28,82 L24,70 L20,55 L20,40 Z";

// Islas Galápagos (estilizadas, lejos al oeste).
const GALAPAGOS = [
  { cx: 8, cy: 30, r: 1.4 },
  { cx: 11, cy: 33, r: 1.0 },
  { cx: 6, cy: 35, r: 0.8 },
];

export function Coverage() {
  return (
    <section id="cobertura" className="px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-2xl">
        <SectionTitle title="Cobertura" subtitle="Dónde te atiendo" />

        {/* Mapa estilizado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-8 overflow-hidden rounded-2xl border border-white/[0.06] bg-[#111811] p-4 sm:p-6"
        >
          <div className="relative aspect-[4/5] w-full sm:aspect-square">
            <svg
              viewBox="0 0 100 100"
              className="h-full w-full"
              role="img"
              aria-label="Mapa estilizado de Ecuador con las ciudades donde Mudanzas Guevara tiene cobertura"
            >
              <defs>
                <radialGradient id="ecuador-fill" cx="50%" cy="50%" r="60%">
                  <stop offset="0%" stopColor="#1A241A" />
                  <stop offset="100%" stopColor="#0A0F0A" />
                </radialGradient>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="0.6" result="b" />
                  <feMerge>
                    <feMergeNode in="b" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Silueta */}
              <path
                d={ECUADOR_PATH}
                fill="url(#ecuador-fill)"
                stroke="rgba(16,185,129,0.35)"
                strokeWidth="0.5"
              />

              {/* Galápagos */}
              {GALAPAGOS.map((g, i) => (
                <circle
                  key={i}
                  cx={g.cx}
                  cy={g.cy}
                  r={g.r}
                  fill="rgba(16,185,129,0.25)"
                  stroke="rgba(16,185,129,0.4)"
                  strokeWidth="0.2"
                />
              ))}

              {/* Puntos de ciudades */}
              {CITIES.map((c) => (
                <g key={c.name}>
                  {/* Halo pulsante */}
                  <circle
                    cx={c.x}
                    cy={c.y}
                    r={c.primary ? 2.4 : 1.6}
                    fill="rgba(16,185,129,0.25)"
                    className={
                      c.primary ? "animate-ping-slow" : "animate-ping-subtle"
                    }
                  />
                  {/* Punto sólido */}
                  <circle
                    cx={c.x}
                    cy={c.y}
                    r={c.primary ? 1.1 : 0.7}
                    fill={c.primary ? "#34D399" : "#10B981"}
                    filter="url(#glow)"
                  />
                  {/* Etiqueta solo para ciudad principal y algunas grandes */}
                  {(c.primary ||
                    ["Quito", "Cuenca", "Manta"].includes(c.name)) && (
                    <text
                      x={c.x + 1.6}
                      y={c.y + 0.6}
                      fill={c.primary ? "#F9FAFB" : "#9CA3AF"}
                      fontSize="2.2"
                      fontWeight={c.primary ? 700 : 400}
                      className="select-none"
                    >
                      {c.name}
                    </text>
                  )}
                </g>
              ))}
            </svg>
          </div>
        </motion.div>

        {/* Lista de ciudades */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="mt-5 rounded-2xl border border-white/[0.06] bg-[#111811] p-5 sm:p-6"
        >
          <div className="flex flex-wrap gap-2">
            {CITIES.map((c) => (
              <span
                key={c.name}
                className={
                  c.primary
                    ? "inline-flex items-center gap-1 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-300"
                    : "inline-flex items-center gap-1 rounded-full bg-white/5 px-2.5 py-1 text-xs text-gray-400"
                }
              >
                <MapPin className="h-3 w-3" aria-hidden />
                {c.name}
                {c.primary ? (
                  <span className="text-[9px] uppercase tracking-wide text-emerald-400/80">
                    sede
                  </span>
                ) : null}
              </span>
            ))}
          </div>

          <p className="mt-4 text-center text-sm text-gray-400">
            ¿Tu ciudad no está en la lista? Escríbeme por WhatsApp, seguramente
            te puedo atender.{" "}
            <a
              href={CONTACT.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-emerald-400 hover:text-emerald-300"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              Escríbeme
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
