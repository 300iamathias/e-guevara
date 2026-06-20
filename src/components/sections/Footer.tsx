"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  MessageCircle,
  ExternalLink,
  type LucideIcon,
} from "lucide-react";
import { CONTACT } from "@/lib/constants";

type Col = {
  title: string;
  items: {
    icon?: LucideIcon;
    label: string;
    value?: string;
    href?: string;
    external?: boolean;
  }[];
};

const COLS: Col[] = [
  {
    title: "Contacto",
    items: [
      {
        icon: Mail,
        label: CONTACT.email,
        href: CONTACT.emailLink,
      },
      {
        icon: Phone,
        label: CONTACT.phone,
        href: CONTACT.phoneLink,
      },
      {
        icon: MapPin,
        label: `${CONTACT.addressShort}, ${CONTACT.city}`,
      },
    ],
  },
  {
    title: "Atención",
    items: [
      { label: CONTACT.hours.weekday },
      { label: CONTACT.hours.saturday },
      { label: CONTACT.hours.sunday },
    ],
  },
  {
    title: "Sígueme",
    items: [
      {
        icon: Instagram,
        label: CONTACT.instagramHandle,
        href: CONTACT.instagram,
        external: true,
      },
      {
        icon: Facebook,
        label: CONTACT.facebookHandle,
        href: CONTACT.facebook,
        external: true,
      },
      {
        icon: MessageCircle,
        label: CONTACT.phone,
        href: CONTACT.whatsappLink,
        external: true,
      },
    ],
  },
];

export function Footer() {
  return (
    <footer
      id="contacto"
      className="mt-auto border-t border-white/[0.06] bg-[#0A0F0A] px-4 py-10 sm:px-6 sm:py-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto max-w-2xl"
      >
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {COLS.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                {col.title}
              </h3>
              <ul className="mt-3 space-y-2.5">
                {col.items.map((item, idx) => {
                  const Icon = item.icon;
                  const content = (
                    <>
                      {Icon ? (
                        <Icon className="h-4 w-4 shrink-0 text-gray-500" />
                      ) : null}
                      <span className="text-sm text-gray-300">
                        {item.label}
                      </span>
                    </>
                  );
                  return (
                    <li key={idx} className="flex items-start gap-2">
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.external ? "_blank" : undefined}
                          rel={
                            item.external ? "noopener noreferrer" : undefined
                          }
                          className="flex items-start gap-2 transition-colors hover:text-emerald-300"
                        >
                          {content}
                        </a>
                      ) : (
                        content
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/[0.06] pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-gray-500">
            © 2026 Mudanzas Guevara. Todos los derechos reservados.
          </p>
          <a
            href="https://www.jimbra.net"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 rounded-full border border-white/[0.06] bg-[#111811] px-3 py-1.5 text-xs text-gray-400 transition-all hover:border-emerald-500/40 hover:text-emerald-300"
          >
            <span className="font-medium tracking-wide">
              Desarrollado por{" "}
              <span className="font-semibold text-gray-200 transition-colors group-hover:text-emerald-300">
                Jimbra
              </span>
            </span>
            <ExternalLink className="h-3 w-3 opacity-50 transition-opacity group-hover:opacity-100" />
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
