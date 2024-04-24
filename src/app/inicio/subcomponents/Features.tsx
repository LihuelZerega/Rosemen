"use client";
import React from "react";
import Image from "next/image";
import { Carousel } from "keep-react";
import autoPlay from "embla-carousel-autoplay";
import Servicios1 from "@/images/Features/Servicios1.png";
import Servicios2 from "@/images/Features/Servicios2.png";
import Servicios3 from "@/images/Features/Servicios3.png";
import Servicios4 from "@/images/Features/Servicios4.png";
import Servicios5 from "@/images/Features/Servicios5.png";

const images = [
  { id: 1, src: Servicios1, alt: "Servicios1" },
  { id: 2, src: Servicios2, alt: "Servicios2" },
  { id: 3, src: Servicios3, alt: "Servicios3" },
  { id: 4, src: Servicios4, alt: "Servicios4" },
  { id: 5, src: Servicios5, alt: "Servicios5" },
];

function Features() {
  return (
    <div className="bg-neutral-50 pb-24 lg:pb-32">
      <div className="max-w-6xl mx-auto p-6 sm:px-6 lg:px-8">
        <section className="flex flex-col-reverse md:flex-row items-start justify-start mt-12 lg:mt-24">
          <div className="w-full md:w-1/2 mt-6 md:mt-0">
            <Carousel options={{ loop: true }} plugins={[autoPlay()]}>
              <Carousel.Slides>
                {images.map((image) => (
                  <Carousel.Item key={image.id}>
                    <div className="flex items-center justify-center">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={400}
                        height={300}
                      />
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel.Slides>
            </Carousel>
          </div>
          <div className="flex flex-col w-full md:w-1/2 lg:max-w-md md:pl-4 lg:p-4">
            <h1 className="text-lg text-center sm:text-left font-semibold text-[#720D1C]">
              Servicios
            </h1>
            <h1 className="text-2xl lg:text-3xl text-center sm:text-left font-bold text-gray-900 my-4">
              Potenciamos tu marca en la vía pública, radio y televisión
            </h1>
            <p className="text-center sm:text-left">
              Investigamos, planificamos, e implementamos estrategias para
              obtener resultados. <br className="hidden md:block" />
              <span className="text-[#720D1C] font-medium hover:font-semibold hover:text-red-900 mt-4 cursor-pointer">
                Ver mas →
              </span>
            </p>
          </div>
        </section>

        <section className="flex flex-col-reverse md:flex-row-reverse items-start justify-start mt-12 lg:mt-24">
          <div className="w-full md:w-1/2 mt-6 md:mt-0">
            <Carousel options={{ loop: true }} plugins={[autoPlay()]}>
              <Carousel.Slides>
                {images.map((image) => (
                  <Carousel.Item key={image.id}>
                    <div className="flex items-center justify-center">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={400}
                        height={300}
                      />
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel.Slides>
            </Carousel>
          </div>
          <div className="flex flex-col w-full md:w-1/2 lg:max-w-md md:pl-4 lg:p-4">
            <h1 className="text-lg text-center sm:text-left font-semibold text-[#720D1C]">
              Clientes
            </h1>
            <h1 className="text-2xl lg:text-3xl text-center sm:text-left font-bold text-gray-900 my-4">
              Conocé a algunas de las marcas con las que hemos tenido el placer
              de trabajar
            </h1>
            <p className="text-center sm:text-left">
              Descubrí las historias de éxito detrás de nuestras colaboraciones
              con marcas líderes. <br className="hidden md:block" />
              <span className="text-[#720D1C] font-medium hover:font-semibold hover:text-red-900 mt-4 cursor-pointer">
                Ver mas →
              </span>
            </p>
          </div>
        </section>

        <section className="flex flex-col-reverse md:flex-row items-start justify-start mt-12 lg:mt-24">
          <div className="w-full md:w-1/2 mt-6 md:mt-0">
            <Carousel options={{ loop: true }} plugins={[autoPlay()]}>
              <Carousel.Slides>
                {images.map((image) => (
                  <Carousel.Item key={image.id}>
                    <div className="flex items-center justify-center">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={400}
                        height={300}
                      />
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel.Slides>
            </Carousel>
          </div>
          <div className="flex flex-col w-full md:w-1/2 lg:max-w-md md:pl-4 lg:p-4">
            <h1 className="text-lg  text-center sm:text-left font-semibold text-[#720D1C]">
              Sobre Nosotros
            </h1>
            <h1 className="text-2xl lg:text-3xl text-center sm:text-left font-bold text-gray-900 my-4">
              Descubrí nuestra historia y lo que nos hace únicos en el mercado
              publicitario.
            </h1>
            <p className="text-center sm:text-left">
              ¡Conocé quienes somos, nuestra experiencia y enfoque! <br className="hidden md:block" />
              <span className="text-[#720D1C] font-medium hover:font-semibold hover:text-red-900 mt-4 cursor-pointer">
                Ver mas →
              </span>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Features;
