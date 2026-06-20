import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ServiceWorkerRegister } from "@/components/ServiceWorkerRegister";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://mudanzas-guevara-card.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mudanzas Guevara — Mudanzas sin estrés en Guayaquil y todo Ecuador",
    template: "%s · Mudanzas Guevara",
  },
  description:
    "Mudanzas residenciales y comerciales en Guayaquil y todo Ecuador. Embalaje profesional, vehículos propios, personal confiable. Cotiza por WhatsApp en 5 minutos.",
  keywords: [
    "mudanzas Guayaquil",
    "mudanzas Ecuador",
    "fletes Guayaquil",
    "embalaje profesional",
    "mudanza residencial",
    "mudanza comercial",
    "Mudanzas Guevara",
  ],
  authors: [{ name: "Mudanzas Guevara" }],
  creator: "Mudanzas Guevara",
  publisher: "Mudanzas Guevara",
  applicationName: "Mudanzas Guevara",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icon-192.png", sizes: "192x192", type: "image/png" }],
  },
  openGraph: {
    title: "Mudanzas Guevara — Mudanzas sin estrés en Guayaquil y todo Ecuador",
    description:
      "Mudanzas residenciales y comerciales en Guayaquil y todo Ecuador. Embalaje profesional, vehículos propios, personal confiable. Cotiza por WhatsApp en 5 minutos.",
    url: siteUrl,
    siteName: "Mudanzas Guevara",
    locale: "es_EC",
    type: "website",
    images: [
      {
        url: "/edison-guevara.png",
        width: 1024,
        height: 1024,
        alt: "Edison Guevara — Mudanzas Guevara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mudanzas Guevara — Mudanzas sin estrés en Guayaquil y todo Ecuador",
    description:
      "Mudanzas residenciales y comerciales en Guayaquil y todo Ecuador. Cotiza por WhatsApp en 5 minutos.",
    images: ["/edison-guevara.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  themeColor: "#10B981",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Guevara" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
