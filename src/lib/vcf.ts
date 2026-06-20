import { VCF_CONTENT } from "./constants";

/**
 * Dispara la descarga de un archivo .vcf con la tarjeta de contacto de Guevara.
 * No necesita backend — construye un Blob en el cliente.
 */
export function downloadVcf() {
  const blob = new Blob([VCF_CONTENT], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "mudanzas-guevara.vcf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  // Liberar el objeto URL en el siguiente tick.
  setTimeout(() => URL.revokeObjectURL(url), 0);
}

/** Dispara la descarga del PDF del checklist (ya servido estáticamente). */
export function downloadChecklist() {
  const a = document.createElement("a");
  a.href = "/checklist-5-errores-mudanza.pdf";
  a.download = "checklist-5-errores-mudanza.pdf";
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
