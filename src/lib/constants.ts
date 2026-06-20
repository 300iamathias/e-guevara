// Datos del cliente y de la landing — fuente única de verdad.
// Handoff: /home/z/my-project/upload/HANDOFF-MUDANZAS-GUEVARA-CARD.md (Sección 8).

export const CONTACT = {
  // Nombre real del dueño (nos lo confirmó el cliente: Edison Guevara).
  ownerName: "Edison Guevara",
  // Nombre comercial de la empresa (se mantiene).
  businessName: "Mudanzas Guevara",
  whatsapp: "593978939281",
  // Mensaje pre-llenado: trato cercano en primera persona.
  whatsappLink:
    "https://wa.me/593978939281?text=Hola%20Edison%2C%20vi%20tu%20p%C3%A1gina%20y%20quiero%20cotizar%20una%20mudanza.%20Mi%20caso%20es%3A",
  phone: "097 893 9281",
  phoneLink: "tel:0978939281",
  email: "info@mudanzasguevara.com",
  emailLink: "mailto:info@mudanzasguevara.com",
  address: "Calle 1 de Mayo 1006 y Tulcán, Guayaquil, Ecuador",
  addressShort: "Calle 1 de Mayo 1006 y Tulcán",
  city: "Guayaquil, Ecuador",
  instagram: "https://instagram.com/mudanzasguevara",
  instagramHandle: "@mudanzasguevara",
  facebook: "https://facebook.com/mudanzasguevara",
  facebookHandle: "Mudanzas Guevara",
  website: "https://mudanzasguevara.com",
  hours: {
    weekday: "Lunes a Viernes: 7:00 AM - 8:00 PM",
    saturday: "Sábado: 8:00 AM - 6:00 PM",
    sunday: "Domingo: Solo emergencias",
  },
} as const;

export const WHATSAPP_FLOAT_LINK = CONTACT.whatsappLink;

export type Stat = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  decimals?: number;
  noAnimation?: boolean;
};

export const STATS: Stat[] = [
  { value: 10, suffix: "+", label: "Años de experiencia" },
  { value: 2000, suffix: "+", label: "Mudanzas realizadas" },
  { value: 4.9, suffix: "★", label: "Calificación promedio", decimals: 1 },
  { value: 24, suffix: "/7", label: "Emergencias", noAnimation: true },
];

export type Service = {
  icon:
    | "Home"
    | "Building2"
    | "Package"
    | "Truck"
    | "Zap";
  title: string;
  badge: { text: string; icon: "Star" | "Flame" | "Sparkles" | "Zap" | "Siren" };
  description: string;
  tags: string[];
  featured?: boolean;
};

export const SERVICES: Service[] = [
  {
    icon: "Home",
    title: "Mudanza Residencial",
    badge: { text: "Estrella", icon: "Star" },
    description:
      "Casas, departamentos y oficinas pequeñas. Empacamos, cargamos, transportamos y ubicamos todo en tu nuevo lugar. Personal uniformado y cuidadoso.",
    tags: ["Casas", "Departamentos", "Oficinas pequeñas"],
  },
  {
    icon: "Building2",
    title: "Mudanza Comercial",
    badge: { text: "Popular", icon: "Flame" },
    description:
      "Tiendas, bodegas, oficinas grandes. Trabajamos fuera de horario para que tu negocio no pare. Minimizo el tiempo de inactividad.",
    tags: ["Tiendas", "Bodegas", "Oficinas"],
  },
  {
    icon: "Package",
    title: "Embalaje Profesional",
    badge: { text: "Nuevo", icon: "Sparkles" },
    description:
      "Empacado con materiales profesionales: cajas reforzadas, plástico burbuja, esquineros, sábanas para muebles. Tus cosas llegan intactas.",
    tags: ["Cajas", "Plástico burbuja", "Muebles protegidos"],
  },
  {
    icon: "Truck",
    title: "Fletes y Transporte",
    badge: { text: "Pro", icon: "Zap" },
    description:
      "Vehículos propios (no tercerizados) de distintos tamaños según tu necesidad. Conductor y ayudantes capacitados. Rastreo en tiempo real.",
    tags: ["Vehículos propios", "Personal capacitado", "Rastreo GPS"],
  },
  {
    icon: "Zap",
    title: "Mudanza Express 24h",
    badge: { text: "Gratis", icon: "Siren" },
    description:
      "Emergencias, traslados urgentes, mudanzas de último minuto. Disponibilidad 24/7. Respuesta inmediata por WhatsApp.",
    tags: ["24/7", "Emergencias", "Último minuto"],
  },
];

export type Testimonial = {
  name: string;
  role: string;
  initials: string;
  rating: number;
  quote: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Carlos Mendoza",
    role: "Gerente, Distribuidora Mendoza",
    initials: "C",
    rating: 5,
    quote:
      "Mudamos toda la bodega en un día. Pensé que íbamos a parar operaciones una semana. Guevara y su equipo llegaron 6 AM, empacaron, cargaron y a las 6 PM ya estábamos operando en el local nuevo. Impecable.",
  },
  {
    name: "Patricia Solano",
    role: "Madre de familia",
    initials: "P",
    rating: 5,
    quote:
      "Tenía miedo de que se rompiera algo. Llegué a la casa nueva y todo estaba perfecto, hasta los vasos de cristal. El embalaje profesional vale cada centavo. Los recomiendo con los ojos cerrados.",
  },
  {
    name: "Roberto Vega",
    role: "Propietario, Ferretería Industrial del Pacífico",
    initials: "R",
    rating: 5,
    quote:
      "Llevaba 15 años trabajando con la misma mudanza informal. Probé a Guevara por una recomendación y no vuelvo. Puntuales, organizados, con sistema. La diferencia se nota.",
  },
];

// Coordenadas aproximadas (lng/lat normalizadas a un SVG 0..100 x 0..100 de Ecuador)
// Guayaquil = sede principal → destacada.
export type CityPoint = {
  name: string;
  x: number; // 0..100 (eje X del SVG)
  y: number; // 0..100 (eje Y del SVG)
  primary?: boolean;
};

export const CITIES: CityPoint[] = [
  { name: "Guayaquil", x: 32, y: 72, primary: true },
  { name: "Quito", x: 46, y: 32 },
  { name: "Cuenca", x: 36, y: 78 },
  { name: "Machala", x: 28, y: 84 },
  { name: "Manta", x: 30, y: 52 },
  { name: "Portoviejo", x: 33, y: 50 },
  { name: "Santo Domingo", x: 40, y: 44 },
  { name: "Ambato", x: 47, y: 50 },
  { name: "Riobamba", x: 47, y: 54 },
  { name: "Babahoyo", x: 38, y: 64 },
  { name: "Quevedo", x: 36, y: 56 },
  { name: "Esmeraldas", x: 38, y: 28 },
  { name: "Loja", x: 42, y: 92 },
  { name: "Salinas", x: 22, y: 60 },
];

export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    q: "¿Cuánto cuesta una mudanza?",
    a: "Depende del tamaño (cantidad de cosas), la distancia y los servicios extra (embalaje, desmonte). Una mudanza de departamento estándar en Guayaquil arranca desde $XX. Cotiza por WhatsApp en 5 minutos y te doy el precio exacto.",
  },
  {
    q: "¿Hacen mudanzas los domingos y feriados?",
    a: "Sí, atendemos emergencias 24/7. Cobro un recargo del 20% por fuera de horario, pero si es urgente, estamos ahí.",
  },
  {
    q: "¿Tienen seguro por si se rompe algo?",
    a: "Sí, todos los traslados incluyen responsabilidad civil. Para objetos de alto valor (arte, electrónica cara, joyas) ofrezco seguro adicional — consúltame.",
  },
  {
    q: "¿Necesito empacar yo antes?",
    a: "No es obligatorio. Tengo servicio de embalaje profesional con cajas reforzadas, plástico burbuja y protección de muebles. Si prefieres empacar tú, solo dime y te llevo las cajas gratis.",
  },
  {
    q: "¿Hacen mudanzas a otras ciudades?",
    a: "Sí, cubro todo Ecuador. Las mudanzas interurbanas tienen un costo adicional por peajes y kilometraje, pero te lo incluyo en la cotización desde el inicio, sin sorpresas.",
  },
  {
    q: "¿Qué tamaño de vehículo necesito?",
    a: "Depende de la cantidad de cosas. Tengo camionetas, camiones de 1.5 toneladas y de 3 toneladas. En la visita técnica (o por video de WhatsApp) te digo cuál encaja.",
  },
  {
    q: "¿Aceptan tarjetas o transferencias?",
    a: "Sí: efectivo, transferencia bancaria, Debitin y tarjetas de crédito/débito con recargo del 5% (comisión del banco).",
  },
  {
    q: "¿Cuánto tiempo tarda una mudanza?",
    a: "Una mudanza de departamento estándar: 3-5 horas. Una casa grande: 6-8 horas. Una oficina comercial: depende del tamaño, lo vemos en la visita técnica.",
  },
];

export type ValueItem = {
  icon: "Shield" | "Clock" | "Package" | "Users";
  title: string;
  text: string;
};

export const VALUES: ValueItem[] = [
  {
    icon: "Shield",
    title: "Confianza",
    text: "Personal uniformado y verificable, jamás terceros.",
  },
  {
    icon: "Clock",
    title: "Puntualidad",
    text: "Llegamos a la hora acordada, sin excepciones.",
  },
  {
    icon: "Package",
    title: "Cuidado",
    text: "Tus cosas se tratan como si fueran nuestras.",
  },
  {
    icon: "Users",
    title: "Cercanía",
    text: "Trato directo conmigo, no con un call center.",
  },
];

// Contenido del .vcf generado dinámicamente al pulsar "Guardar mi contacto".
export const VCF_CONTENT = `BEGIN:VCARD
VERSION:3.0
FN:Edison Guevara
ORG:Mudanzas Guevara
TEL;TYPE=CELL:+593978939281
EMAIL:info@mudanzasguevara.com
ADR;TYPE=WORK:;;Calle 1 de Mayo 1006 y Tulcán;Guayaquil;;Ecuador
URL:https://mudanzasguevara.com
NOTE:Dueño de Mudanzas Guevara — mudanzas residenciales y comerciales en Guayaquil y todo Ecuador
END:VCARD`;

export const CHECKLIST_PDF_PATH = "/checklist-5-errores-mudanza.pdf";
