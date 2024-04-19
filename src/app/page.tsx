import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Herosection from "./inicio/subcomponents/Herosection";
import Stats from "./inicio/subcomponents/Stats";
import Features from "./inicio/subcomponents/Features";

export default function Home() {
  return (
    <main>
      <div className="mb-20">
        <NavBar />
      </div>
      <div>
        <Herosection />
        <Stats />
        <Features />
      </div>
      <Footer />
    </main>
  );
}
