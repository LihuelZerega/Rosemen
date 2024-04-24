"use client";
import React from "react";
import Image from "next/image";
import HeroSectionBackground2 from "@/images/Backgrounds/HeroSectionBackground2.png";
import HeroSectionBackgroundMobile2 from "@/images/Backgrounds/HeroSectionBackgroundMobile2.png";

export default function HeroHeroSection() {
  return (
    <div className="relative bg-translate overflow-hidden">
      
      <div className="block sm:hidden absolute inset-0">
        <Image
          className="object-cover w-full h-full opacity-100 2xl:mt-12"
          src={HeroSectionBackgroundMobile2}
          alt="HeroSectionBackgroundMobile2"
        />
      </div>

      <div className="hidden lg:block absolute inset-0">
        <Image
          className="object-cover w-full h-full opacity-100"
          src={HeroSectionBackground2}
          alt="HeroSectionBackground2"
        />
      </div>


      <section className="relative">
        <div className="w-full lg:w-1/2 lg:mx-16">
          <div className="mx-auto xl:mx-left lg:max-w-2xl xl:w-full px-6 xl:px-0 py-32 sm:py-48 lg:py-32">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center lg:justify-start"></div>
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-6xl lg:text-5xl xl:text-5xl font-bold tracking-tight text-neutral-900">
                Potenciá tu marca con nuestra experiencia y creatividad
              </h1>
              <p className="mt-6 text-lg leading-8 text-neutral-800">
                Contamos con más de 20 años en el mercado publicitario.

              </p>
              <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
                <a
                  href="/servicios"
                  className="rounded-md bg-red-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Potenciá tu marca
                </a>
                <a
                  href="/sobrenosotros"
                  className="text-sm font-semibold leading-6 text-neutral-800"
                >
                  Conocenos <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full xl:w-1/2"></div>
      </section>
    </div>
  );
}
