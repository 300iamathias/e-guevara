// Service worker de Mudanzas Guevara — network-first, sin cacheo agresivo
// para evitar problemas de versión al actualizar el contenido.
const CACHE_NAME = "guevara-v1";

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  // Solo GET
  if (event.request.method !== "GET") return;

  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
