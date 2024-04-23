import React from 'react'
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import HeroSection from './subcomponents/HeroSection';


function page() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Footer /> 
    </div>
  )
}

export default page