import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { MainCTA } from "@/components/sections/MainCTA";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { Coverage } from "@/components/sections/Coverage";
import { AboutGuevara } from "@/components/sections/AboutGuevara";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0A0F0A] text-white">
      <main className="flex-1">
        <Hero />
        <StatsBar />
        <MainCTA />
        <Services />
        <Testimonials />
        <Coverage />
        <AboutGuevara />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
