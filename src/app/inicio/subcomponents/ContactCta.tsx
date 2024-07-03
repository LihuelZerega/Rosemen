"use client";
import React from "react";
import Image from "next/image";
import { Carousel } from "keep-react";
import autoPlay from "embla-carousel-autoplay";
import NaftaBackground from "@/images/Backgrounds/Nafta.png";

const ContactCtaBackground = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dys0jotat/image/upload/v1720018443/Cta4_pfsbu3.png",
    alt: "Nafta",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dys0jotat/image/upload/v1720018443/Cta3_jdkbiu.png",
    alt: "Pulp",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dys0jotat/image/upload/v1720018448/Cta2_hoiimy.png",
    alt: "Grafa70",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dys0jotat/image/upload/v1720018443/Cta1_xfmsut.png",
    alt: "WosRacing",
  },
];

function ContactCta() {
  return (
    <>
      <section className="relative py-10 overflow-hidden bg-black sm:py-16 lg:py-24 xl:py-32 shadow-2xl">
        <div className="absolute inset-0">
          <div className="object-cover w-full h-full md:object-left md:scale-150 md:origin-top-left">
            <Carousel options={{ loop: true }} plugins={[autoPlay()]}>
              <Carousel.Slides>
                {ContactCtaBackground.map((image) => (
                  <Carousel.Item key={image.id}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="ml-auto rounded-md object-cover w-full h-full"
                    />
                  </Carousel.Item>
                ))}
              </Carousel.Slides>
            </Carousel>
          </div>
        </div>

        <div className="absolute inset-0 hidden bg-gradient-to-r md:block from-black to-transparent"></div>

        <div className="absolute inset-0 block bg-black/60 md:hidden"></div>

        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center md:w-2/3 lg:w-1/2 xl:w-1/3 md:text-left">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Contacto
            </h2>

            <div className="mt-10 flex flex-col md:flex-row items-center justify-start gap-4 md:gap-6">
              <a
                href="/contacto"
                className="rounded-md bg-[#720D1C] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-red-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                ¡Contáctanos ahora!
              </a>
              <a
                href="/servicios"
                className="text-sm font-semibold leading-6 text-white hover:underline"
              >
                Más información <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactCta;
