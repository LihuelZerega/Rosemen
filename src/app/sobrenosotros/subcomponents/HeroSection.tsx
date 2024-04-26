"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { RxDoubleArrowDown } from "react-icons/rx";
import HeroSectionBackground11 from "@/images/Backgrounds/HeroSectionBackground11.png";

export default function HeroSection() {
  return (
    <div className="relative bg-black overflow-hidden">
      <div className="absolute inset-0">
        <Image
          className="object-cover w-full h-full opacity-55"
          src={HeroSectionBackground11}
          alt="HeroSectionBackground11"
          layout="fill"
        />
      </div>

      <section className="relative">
        <div className="w-full flex flex-col mt-16">
          <div className="mx-auto xl:mx-left lg:max-w-4xl xl:w-full px-6 xl:px-0 py-32 sm:py-48 lg:py-32">
            <div className="text-center">
              <h1 className="text-4xl sm:text-6xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-neutral-100">
                Quienes somos
              </h1>
              {/* <p className="mt-6 text-lg leading-8 text-neutral-200">
                Más de 20 años generando resultados tangibles para nuestros
                clientes.
              </p> */}
              <div className="mt-6 flex items-center justify-center gap-x-6">
                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  <RxDoubleArrowDown
                    className="text-3xl text-white"
                    aria-hidden="true"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
