import React from "react";
import NavBar from "@/components/NavBar";
import Herosection from "./inicio/subcomponents/Herosection";
import HeroHeroSection from "./inicio/subcomponents/HeroHeroSection";
import Stats from "./inicio/subcomponents/Stats";
import Benefits from "./inicio/subcomponents/Benefits";
import Features from "./inicio/subcomponents/Features";
import ContactCta from "./inicio/subcomponents/ContactCta";
import Testimonials from "./inicio/subcomponents/Testimonials";
import Faq from "./inicio/subcomponents/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <div>
        <NavBar />
        <HeroHeroSection />
        <Stats />
        <Benefits />
        <Features />
        <ContactCta />
        <Testimonials />
        <Faq />
      </div>
      <Footer />
    </main>
  );
}
