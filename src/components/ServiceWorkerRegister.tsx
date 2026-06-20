"use client";

import { useEffect } from "react";

/**
 * Registra el service worker de Mudanzas Guevara.
 * Network-first, mínimo, sin cacheo agresivo.
 */
export function ServiceWorkerRegister() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!("serviceWorker" in navigator)) return;
    // Solo en producción para evitar problemas con HMR en dev.
    if (process.env.NODE_ENV !== "production") return;

    const onLoad = () => {
      navigator.serviceWorker
        .register("/sw.js", { scope: "/" })
        .catch((err) => {
          // Silencioso: el SW es enhancement, no crítico.
          console.warn("SW registration failed:", err);
        });
    };

    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  return null;
}
