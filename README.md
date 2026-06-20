# Mudanzas Guevara — Tarjeta de presentación digital de Edison Guevara

Landing page **personal**, mobile-first, estilo link-in-bio premium (tipo Beacons.ai) para **Edison Guevara**, fundador de Mudanzas Guevara (Guayaquil, Ecuador). Pensada para compartir por bio de Instagram, estados de WhatsApp, firma de email y **tarjetas físicas con código QR**.

**Conversión principal**: clic en "Cotizar por WhatsApp".
**Conversiones secundarias**: descarga de contacto (.vcf) y descarga del checklist PDF.

## Stack

- **Framework**: Next.js 16 (App Router) + TypeScript 5
- **Estilos**: Tailwind CSS 4 + shadcn/ui (New York)
- **Animaciones**: Framer Motion
- **Iconos**: lucide-react
- **PWA**: manifest.json + service worker (network-first)

**Sin base de datos. Sin backend. Sin variables de entorno.** Todo es estático o se ejecuta en el cliente. Subilo a Vercel y listo.

## Desarrollo local

```bash
bun install              # o: npm install
bun run dev              # servidor en http://localhost:3000
bun run lint             # verificar calidad de código
```

> En este sandbox no uses `bun run build`. En Vercel el build se ejecuta automáticamente.

## Estructura

```
src/
  app/
    layout.tsx           # metadata SEO, fonts, manifest, dark theme
    page.tsx             # composición de las 9 secciones
    globals.css          # paleta dark verde esmeralda
  components/
    sections/            # Hero, StatsBar, MainCTA, Services, Testimonials,
                         # Coverage, AboutGuevara, FAQ, Footer
    FloatingWhatsApp.tsx # botón flotante verde
    ServiceWorkerRegister.tsx
  lib/
    constants.ts         # fuente única de verdad (contacto, servicios, FAQ…)
    hooks.ts             # useCountUp, smoothScrollToId
    vcf.ts               # descarga de .vcf y PDF (cliente)
public/
  edison-guevara.png         # foto de Edison (hero + sobre mí)
  icon-192.png, icon-512.png # iconos PWA
  manifest.json, sw.js
  checklist-5-errores-mudanza.pdf  # lead magnet (descarga directa)
```

## Las 9 secciones

1. **Hero** — foto circular de Edison + nombre + "Fundador · Mudanzas Guevara" + tagline + redes
2. **Stats bar** — 10+ años · 2.000+ mudanzas · 4.9★ · 24/7 (con count animados)
3. **CTA principal** — 5 botones grandes estilo Beacons (WhatsApp, Llamar, Agendar, Checklist, Guardar contacto)
4. **Servicios** — 5 cards con badges (Estrella, Popular, Nuevo, Pro, Gratis)
5. **Testimonios** — 3 cards con estrellas
6. **Cobertura** — mapa SVG estilizado de Ecuador + 14 ciudades
7. **Sobre Edison** — texto + 4 valores (Confianza, Puntualidad, Cuidado, Cercanía)
8. **FAQ** — 8 acordeones
9. **Footer** — 3 columnas + "Desarrollado por Jimbra" → jimbra.net

Más botón flotante de WhatsApp siempre visible.

## Datos del cliente

Todos los datos (WhatsApp, teléfono, email, dirección, horarios, redes) viven en `src/lib/constants.ts`. Para actualizar un dato, edita ese archivo.

## Deploy a Vercel

**Opción A — directo con ZIP** (lo más rápido):
1. Vercel → Add New → Project → "deploy without git" / subir ZIP
2. Subí `mudanzas-guevara-card.zip`
3. Deploy → listo. No requiere variables de entorno.

**Opción B — GitHub + Vercel** (recomendado para iterar):
1. Descomprimí el ZIP en una carpeta local
2. `git init && git add . && git commit -m "feat: landing Edison Guevara"`
3. `git remote add origin https://github.com/300iamathias/mudanzas-guevara-card.git`
4. `git push -u origin main`
5. En Vercel: New Project → importá el repo → Deploy

Dominio sugerido: `mudanzas-guevara-card.vercel.app`

## Verificación

- `bun run lint` pasa sin errores.
- PWA installable (manifest + service worker).
- Metadata SEO completa (title, description, OG, Twitter card, manifest).
- Footer sticky al bottom (`min-h-screen flex flex-col` + `mt-auto`).
- Responsive verificado en 390px (iPhone 14) y 1280px (desktop).
- Sin errores ni warnings en consola.

## Contactos

- **Cliente final**: Edison Guevara (Mudanzas Guevara)
- **Project owner**: Isaac Jiménez (Jimbra) — `isaac@jimbra.net`
- **GitHub**: `github.com/300iamathias`

---

Desarrollado por [Jimbra](https://www.jimbra.net)
