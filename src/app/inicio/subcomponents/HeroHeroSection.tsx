"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import RosemenLogoMobile from "@/images/Logos/R-negra.png";
import RosemenLogoWhiteMobile from "@/images/Logos/R-Blanca.png";
import RosemenLogoDesktop from "@/images/Logos/rosemen-512-Negro-sin-fondo.png";
import RosemenLogoWhiteDesktop from "@/images/Logos/rosemen-512-Blanco-sin-fondo.png";
import HeroSectionBackground from "@/images/Backgrounds/HeroSectionBackground.png";
import { RxDoubleArrowDown } from "react-icons/rx";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "/servicios" },
  { name: "Clientes", href: "/clientes" },
  { name: "Sobre Nosotros", href: "/sobrenosotros" },
  { name: "Contacto", href: "/contacto" },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-transparent">
      <div className="absolute inset-0">
        {/* <Image
          className="object-cover w-full h-full pb-16 sm:pb-24 lg:pb-96 xl:pb-12 xl:h-4xl 2xl:pb-32 opacity-100"
          src={HeroSectionBackground}
          alt="HeroSectionBackground"
        /> */}
      </div>

      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Rosemen</span>
              <Image
                className="h-8 w-auto block lg:hidden"
                src={RosemenLogoWhiteMobile}
                alt="RosemenLogoWhiteMobile"
              />
              <Image
                className="h-8 w-auto hidden lg:block"
                src={RosemenLogoWhiteDesktop}
                alt="RosemenLogoWhiteDesktop"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <HiMenu className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-200 hover:text-gray-300"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href=""
              className="bg-red-800 hover:bg-red-900 rounded-md py-2 px-3 text-sm font-semibold leading-6 text-white"
            >
              <button>Contactanos</button>
            </a>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Rosemen</span>
                <Image className="h-8 w-auto" src={RosemenLogoMobile} alt="" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <HiOutlineX className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <section className="relative">
        <div className="w-full xl:w-1/2 xl:mx-16">
          <div className="mx-auto xl:mx-left lg:max-w-2xl xl:w-full px-6 xl:px-0 py-32 sm:py-48 lg:py-32">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center xl:justify-start">
              {/* <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Announcing our next round of funding.{" "}
                <a
                  href="#"
                  className="font-semibold text-red-800 hover:text-red-900"
                >
                  <span className="absolute inset-0" aria-hidden="true" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div> */}
            </div>
            <div className="text-center xl:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl xl:text-5xl">
                Potenciá tu marca con nuestra experiencia y creatividad
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-200">
                Contamos con más de 20 años liderando el mercado publicitario,
                conectando con marcas y audiencias de manera impactante.
              </p>
              <div className="mt-10 flex items-center justify-center xl:justify-start gap-x-6">
                <a
                  href="/servicios"
                  className="rounded-md bg-red-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Descubrí nuestros servicios
                </a>
                <a
                  href="/sobrenosotos"
                  className="text-sm font-semibold leading-6 text-gray-200"
                >
                  Conocenos <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            {/* <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <RxDoubleArrowDown
                className="text-3xl text-gray-800"
                aria-hidden="true"
              />
            </motion.div> */}
          </div>
        </div>

        <div className="w-full xl:w-1/2"></div>
      </section>
    </div>
  );
}
