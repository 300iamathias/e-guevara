"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/lib/constants";
import { SectionTitle } from "./Services";

export function FAQ() {
  return (
    <section id="faq" className="px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-2xl">
        <SectionTitle
          title="Preguntas Frecuentes"
          subtitle="Antes de escribirme, revisa esto"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-8"
        >
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="faq-0"
          >
            {FAQS.map((item, i) => (
              <AccordionItem
                key={item.q}
                value={`faq-${i}`}
                className="border-b border-white/[0.06] [&:last-child]:border-b-0"
              >
                <AccordionTrigger className="py-5 text-left text-base font-semibold text-white hover:no-underline hover:text-emerald-300 sm:text-lg [&[data-state=open]>svg]:text-emerald-400">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-gray-400 sm:text-base">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
