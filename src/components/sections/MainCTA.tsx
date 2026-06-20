"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  Phone,
  Calendar,
  Download,
  UserPlus,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { CONTACT } from "@/lib/constants";
import { downloadVcf, downloadChecklist } from "@/lib/vcf";
import { smoothScrollToId } from "@/lib/hooks";
import { useToast } from "@/hooks/use-toast";

type CTAButton = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  variant: "primary" | "outline-accent" | "outline-subtle";
  onClick?: () => void;
  href?: string;
  external?: boolean;
  badge?: string;
};

export function MainCTA() {
  const { toast } = useToast();

  const buttons: CTAButton[] = [
    {
      icon: MessageCircle,
      title: "Cotizar por WhatsApp",
      subtitle: "Respuesta en 5 minutos · Sin compromiso",
      variant: "primary",
      href: CONTACT.whatsappLink,
      external: true,
    },
    {
      icon: Phone,
      title: "Llamar ahora",
      subtitle: CONTACT.phone,
      variant: "outline-accent",
      href: CONTACT.phoneLink,
    },
    {
      icon: Calendar,
      title: "Agendar visita técnica",
      subtitle: "Para mudanzas grandes o comerciales",
      variant: "outline-subtle",
      onClick: () => smoothScrollToId("#contacto"),
    },
    {
      icon: Download,
      title: "Checklist gratuito",
      subtitle: '"5 errores que arruinan una mudanza"',
      variant: "outline-subtle",
      onClick: () => {
        downloadChecklist();
        toast({
          title: "Descargando checklist...",
          description: "Revisa tu carpeta de descargas.",
        });
      },
      badge: "Gratis",
    },
    {
      icon: UserPlus,
      title: "Guardar mi contacto",
      subtitle: "Tarjeta digital (.vcf) — un toque",
      variant: "outline-subtle",
      onClick: () => downloadVcf(),
    },
  ];

  return (
    <section id="cotizar" className="px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-6 text-center sm:mb-8"
        >
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
            ¿Listo para mudarte sin estrés?
          </h2>
          <p className="mt-2 text-sm text-gray-400 sm:text-base">
            Elige cómo empezamos:
          </p>
        </motion.div>

        <div className="flex flex-col gap-3 sm:gap-4">
          {buttons.map((btn, i) => (
            <motion.div
              key={btn.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
                delay: i * 0.08,
              }}
            >
              <CTAButtonRow button={btn} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTAButtonRow({ button: btn }: { button: CTAButton }) {
  const content = (
    <>
      {/* Icono en círculo a la izquierda */}
      <span
        aria-hidden
        className={
          btn.variant === "primary"
            ? "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15"
            : "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5"
        }
      >
        <btn.icon className="h-5 w-5" />
      </span>

      {/* Texto */}
      <span className="flex flex-1 flex-col items-start leading-tight">
        <span className="flex items-center gap-2">
          <span className="text-base font-semibold sm:text-lg">
            {btn.title}
          </span>
          {btn.badge ? (
            <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-300">
              {btn.badge}
            </span>
          ) : null}
        </span>
        <span className="text-sm text-gray-400">{btn.subtitle}</span>
      </span>

      {/* Flecha */}
      <ArrowRight className="h-5 w-5 shrink-0 opacity-50" aria-hidden />
    </>
  );

  const baseClass =
    "flex w-full items-center gap-4 rounded-2xl px-5 py-4 transition-all sm:h-[68px] h-[60px] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0F0A]";

  const variantClass =
    btn.variant === "primary"
      ? "bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg shadow-emerald-500/25"
      : btn.variant === "outline-accent"
        ? "border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/10"
        : "border border-white/[0.06] bg-[#111811] text-white hover:bg-[#1A241A] hover:border-white/[0.1]";

  const motionProps = {
    whileHover: { scale: 1.015 },
    whileTap: { scale: 0.985 },
  } as const;

  if (btn.href) {
    const external = btn.external;
    return (
      <motion.a
        href={btn.href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={`${baseClass} ${variantClass}`}
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={btn.onClick}
      className={`${baseClass} ${variantClass}`}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
}
