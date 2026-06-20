# Códigos QR — Mudanzas Guevara Card

URL que codifican: **`https://mudanzas-guevara-card.vercel.app`**

> Si deployás con otro dominio (ej. `edisonguevara.com` o `guevara-card.jimbra.net`), avisame y te regenero los QR en 30 segundos. No los mandes a imprimir con esta URL si después vas a cambiar el dominio.

## Archivos

| Archivo | Uso | Color |
|---|---|---|
| `qr-impresion-blanco-negro.png` | **Para tarjetas físicas** — máxima legibilidad, compatible con cualquier impresora | QR negro sobre blanco |
| `qr-impresion-vectorial.svg` | **Para imprenta profesional** — escala sin perder calidad (vectorial) | QR negro sobre blanco |
| `qr-marca-esmeralda-dark.png` | **Para uso digital** (Instagram, email, web) — combina con el tema de la landing | QR esmeralda sobre fondo dark |
| `qr-bn-sin-logo.png` | Variante limpia sin marco, por si querés componerle un logo encima | QR negro sobre blanco |

## Recomendación para las tarjetas físicas

Usá **`qr-impresion-blanco-negro.png`** (o el SVG si la imprenta lo acepta). Es el que mejor escanea en cualquier celular y con cualquier iluminación.

**Especificaciones técnicas:**
- Resolución: 2048×2048 px (suficiente para tarjetas de 5×9 cm a 300 DPI)
- Nivel de corrección de error: **H (Alta)** — admite que el QR tenga un logo o texto encima y siga escaneando
- Margen (quiet zone): 2 módulos — dejá siempre ese margen blanco alrededor, si lo recortás el QR deja de leerse

## Tamaño en la tarjeta física

- Mínimo recomendado: **2 × 2 cm**
- Ideal: **2.5 × 2.5 cm** o **3 × 3 cm**
- No lo hagas más chico de 1.5 cm — algunos celulares viejos no lo escanean

## Cómo probarlo antes de imprimir

1. Abrí el PNG en tu celular a tamaño completo
2. Escanealo con la cámara de otro celular (o con WhatsApp → escanear código QR)
3. Tiene que abrir `https://mudanzas-guevara-card.vercel.app` en el navegador
4. **Probá el QR ya impreso en papel** antes de mandar la tirada completa — a veces la impresión reduce el contraste y deja de leerse

## Deploy pendiente

Antes de imprimir definitivamente:

1. Subí el ZIP `mudanzas-guevara-card-v1.zip` a Vercel
2. Verificá que la URL pública funciona
3. Si Vercel te da otra URL distinta a `mudanzas-guevara-card.vercel.app`, avisame y regenero el QR
4. Recién ahí mandá a imprimir las tarjetas con el QR correcto

---

Desarrollado por [Jimbra](https://www.jimbra.net)
