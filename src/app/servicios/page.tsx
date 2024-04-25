"use client";
import React from "react";
import { motion } from "framer-motion";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import HeroSection from "./subcomponents/HeroSection";
import Strategy from "./subcomponents/Strategy";
import Features from "./subcomponents/Features";

function page() {
  return (
    <div>
      <NavBar />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.2, duration: 0.8, ease: "easeOut" },
        }}
      >
        <HeroSection />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.4, duration: 0.8, ease: "easeOut" },
        }}
      >
        <Features />
      </motion.div>
      <Footer />
    </div>
  );
}

export default page;
