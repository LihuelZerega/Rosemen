import React from "react";
import NavBar from "@/components/NavBar";
import HeroHeroSection from "./inicio/subcomponents/HeroHeroSection";
import Stats from "./inicio/subcomponents/Stats";
import Strategy from "./servicios/subcomponents/Strategy";
import Benefits from "./inicio/subcomponents/Benefits";
import Features from "./inicio/subcomponents/Features";
import ContactCta from "./inicio/subcomponents/ContactCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <div>
        <NavBar />
        <HeroHeroSection />
        <Stats />
        {/* <Benefits /> */}
        <Strategy />
        {/* <Features /> */}
        <ContactCta />
      </div>
      <Footer />
    </main>
  );
}
