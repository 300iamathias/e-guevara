"use client";

import { motion } from "framer-motion";
import { useCountUp } from "@/lib/hooks";
import { STATS, type Stat } from "@/lib/constants";

function StatItem({ stat, index }: { stat: Stat; index: number }) {
  const { count, ref } = useCountUp(stat.value, 1800);

  // Stats no animados (24/7) se muestran estáticos.
  const display = stat.noAnimation
    ? `${stat.value}${stat.suffix ?? ""}`
    : formatValue(count, stat.decimals) + (stat.suffix ?? "");

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
      className="flex flex-col items-center justify-center px-2 py-4 text-center"
    >
      <div className="font-mono text-2xl font-bold text-white sm:text-3xl md:text-4xl">
        {display}
      </div>
      <div className="mt-1 text-[11px] uppercase tracking-wide text-gray-500 sm:text-xs">
        {stat.label}
      </div>
    </motion.div>
  );
}

function formatValue(v: number, decimals = 0): string {
  if (decimals > 0) {
    return v.toFixed(decimals);
  }
  // Sin decimales, formato con separador de miles (es-EC usa punto).
  return Math.round(v).toLocaleString("es-EC");
}

export function StatsBar() {
  return (
    <section className="px-4 py-6 sm:px-6 sm:py-8">
      <div className="mx-auto max-w-2xl">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-[#111811] sm:grid-cols-4">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="bg-[#111811] [&:not(:last-child)]:border-b [&:not(:last-child)]:border-white/[0.04] sm:[&:not(:last-child)]:border-b-0 sm:[&:not(:last-child)]:border-r"
            >
              <StatItem stat={stat} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
