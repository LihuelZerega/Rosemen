import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import HeroSection from "./subcomponents/HeroSection";
import Strategy from "./subcomponents/Strategy";
import Features from "./subcomponents/Features";

function page() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <div className="mt-36 sm:mt-12 lg:mt-28 xl:mt-44 2xl:" />
      {/* <Strategy /> */}
      <Features />
      <Footer />
    </div>
  );
}

export default page;
