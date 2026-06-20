"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { TESTIMONIALS, type Testimonial } from "@/lib/constants";
import { SectionTitle } from "./Services";

export function Testimonials() {
  return (
    <section id="testimonios" className="px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-2xl">
        <SectionTitle
          title="Lo que dicen mis clientes"
          subtitle="Mudanzas reales, historias reales"
        />

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ t, index }: { t: Testimonial; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay: (index % 3) * 0.08 }}
      className="flex flex-col rounded-2xl border border-white/[0.06] bg-[#111811] p-6"
    >
      {/* Avatar + nombre */}
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
          <span className="text-base font-bold">{t.initials}</span>
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-white">{t.name}</p>
          <p className="truncate text-xs text-gray-500">{t.role}</p>
        </div>
      </div>

      {/* Estrellas */}
      <div className="mt-4 flex items-center gap-0.5" aria-label={`${t.rating} de 5 estrellas`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={
              i < t.rating
                ? "h-4 w-4 fill-amber-400 text-amber-400"
                : "h-4 w-4 text-gray-700"
            }
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-gray-300 italic">
        “{t.quote}”
      </blockquote>
    </motion.article>
  );
}
