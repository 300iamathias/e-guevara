"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Cuenta de 0 a `end` con easing easeOutExpo cuando el elemento entra al viewport.
 * Devuelve el valor actual y la ref para attachar al elemento que muestra el número.
 */
export function useCountUp(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(2, -10 * progress); // easeOutExpo
            setCount(end * eased);
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [end, duration]);

  return { count, ref };
}

/** Scroll suave a un id del tipo "#contacto". */
export function smoothScrollToId(id: string) {
  if (typeof window === "undefined") return;
  const el = document.querySelector(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
