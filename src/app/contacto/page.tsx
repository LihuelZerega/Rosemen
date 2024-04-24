"use client";
import React from "react";
import { motion } from "framer-motion";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import HeroSection from "./subcomponents/HeroSection";
import ContactForm from "./subcomponents/ContactForm";

function page() {
  return (
    <>
      <NavBar />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
      >
        <HeroSection />
        <ContactForm />
        <Footer />
      </motion.div>
    </>
  );
}

export default page;
