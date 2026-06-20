"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Clock, Package, Users, type LucideIcon } from "lucide-react";
import { VALUES, type ValueItem } from "@/lib/constants";

const VALUE_ICONS: Record<string, LucideIcon> = {
  Shield,
  Clock,
  Package,
  Users,
};

export function AboutGuevara() {
  return (
    <section id="sobre-mi" className="px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-2xl">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-[auto_1fr] sm:gap-10">
          {/* Foto lateral */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mx-auto w-fit"
          >
            <div className="relative h-[180px] w-[180px] overflow-hidden rounded-2xl border border-emerald-500/40 bg-[#111811] shadow-[0_0_40px_-10px_rgba(16,185,129,0.4)] sm:h-[200px] sm:w-[200px]">
              <Image
                src="/edison-guevara-about.png"
                alt="Edison Guevara — fundador de Mudanzas Guevara"
                fill
                sizes="200px"
                className="object-cover"
              />
            </div>
            <p className="mt-3 text-center text-xs text-gray-500">
              Edison Guevara · Fundador
            </p>
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Sobre Mí
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-gray-300 sm:text-base">
              <p>
                Soy Edison Guevara, fundador de Mudanzas Guevara. Llevo
                más de 10 años ayudando a familias y empresas de Guayaquil a
                mudarse sin estrés.
              </p>
              <p>
                Empecé con una camioneta prestada y mucha gana de trabajar. Hoy
                tengo flota propia, un equipo capacitado y más de 2.000
                mudanzas realizadas.
              </p>
              <p>
                Mi misión es simple: que tu mudanza sea la parte más fácil de tu
                cambio. Tú te encargas de lo importante, yo me encargo del
                resto.
              </p>
              <p className="font-medium text-emerald-300">
                ¿Listo para mudarte sin estrés? 🚚
              </p>
            </div>
          </motion.div>
        </div>

        {/* Valores */}
        <div className="mt-10 grid grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4">
          {VALUES.map((v, i) => (
            <ValueCard key={v.title} value={v} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ValueCard({ value, index }: { value: ValueItem; index: number }) {
  const Icon = VALUE_ICONS[value.icon] ?? Shield;
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: "easeOut", delay: (index % 2) * 0.08 }}
      className="flex items-start gap-4 rounded-2xl border border-white/[0.06] bg-[#111811] p-5"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <h3 className="text-sm font-bold text-white sm:text-base">
          {value.title}
        </h3>
        <p className="mt-0.5 text-sm text-gray-400">{value.text}</p>
      </div>
    </motion.div>
  );
}
