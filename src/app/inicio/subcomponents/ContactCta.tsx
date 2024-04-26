"use client";
import React from "react";
import Image from "next/image";
import { Carousel } from "keep-react";
import autoPlay from "embla-carousel-autoplay";
import NaftaBackground from "@/images/Backgrounds/Nafta.png";

const ContactCtaBackground = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dszjgdktf/image/upload/v1714077690/Cta4_uam9mc.png",
    alt: "Nafta",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dszjgdktf/image/upload/v1714077690/Cta3_go15et.png",
    alt: "Pulp",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dszjgdktf/image/upload/v1714077689/Cta2_vb2owp.png",
    alt: "Grafa70",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dszjgdktf/image/upload/v1714077692/Cta1_ayy5zk.png",
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
                      className="ml-auto rounded-md"
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
            {/* <p className="mt-4 text-base text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              molestiae eos vitae ut beatae maiores quisquam ad aperiam, saepe
              voluptas voluptatibus labore hic necessitatibus repellendus
              possimus numquam tempore rerum nulla!
            </p> */}

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

      {/* <div className="bg-transparent">
        <div className="mx-auto pb-12 sm:pb-16">
          <div className="relative isolate overflow-hidden bg-black pt-16 md:pt-24 lg:flex lg:pt-0">
            <div className="absolute inset-0">
              <Image
                className="object-cover w-full h-full opacity-60"
                src={NaftaBackground}
                alt="NaftaBackground"
              />
            </div>

            <div className="relative mx-auto text-center lg:mx-0 lg:flex-auto py-32">
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                ¿Listo para llevar tu marca <br />
                al siguiente nivel?
              </h2>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/contacto"
                  className="rounded-md bg-[#720D1C] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  ¡Contáctanos ahora!
                </a>
                <a
                  href="/servicios"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  Mas informacion <span aria-hidden="true"> →</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default ContactCta;
