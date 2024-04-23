import React from 'react'
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import HeroSection from './subcomponents/HeroSection';
import ContactForm from './subcomponents/ContactForm';

function page() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <ContactForm />
      <Footer /> 
    </div>
  )
}

export default page