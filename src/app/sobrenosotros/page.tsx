import React from 'react'
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import HeroSection from './subcomponents/HeroSection';
import Features from './subcomponents/Features';

function page() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Features />
      <Footer /> 
    </div>
  )
}

export default page