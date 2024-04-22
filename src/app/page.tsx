import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Herosection from "./inicio/subcomponents/Herosection";
import Stats from "./inicio/subcomponents/Stats";
import Features from "./inicio/subcomponents/Features";
import ContactCta from "./inicio/subcomponents/ContactCta";
import HeroHeroSection from "./inicio/subcomponents/HeroHeroSection";

export default function Home() {
  return (
    <main>
      <div className="mb-20">
        {/* <NavBar /> */}
      </div>
      <div>
        <HeroHeroSection />
        {/* <Herosection /> */}
        <Stats />
        <Features />
        <ContactCta />
      </div>
      <Footer />
    </main>
  );
}
