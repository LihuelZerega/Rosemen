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
import WosMockup from "@/images/Features/WosMockup.png";
import ClientesMockup from "@/images/Features/ClientesMockup.png";

const images = [
  { id: 1, src: Servicios1, alt: "Servicios1" },
  { id: 2, src: Servicios2, alt: "Servicios2" },
  { id: 3, src: Servicios3, alt: "Servicios3" },
  { id: 4, src: Servicios4, alt: "Servicios4" },
  { id: 5, src: Servicios5, alt: "Servicios5" },
];

const imagescarrusel1 = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dszjgdktf/image/upload/v1714071597/home1_yg3khq.png",
    alt: "",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dszjgdktf/image/upload/v1714076873/home12_nhycay.png",
    alt: "",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dszjgdktf/image/upload/v1714076876/home11_krdg7q.png",
    alt: "",
  },
];

const imagescarrusel2 = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dszjgdktf/image/upload/v1714071599/home2_fgzsfh.png",
    alt: "",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dszjgdktf/image/upload/v1714076912/home23_qo5wed.png",
    alt: "",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dszjgdktf/image/upload/v1714076912/home24_bibcdy.png",
    alt: "",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dszjgdktf/image/upload/v1714076913/home25_cmqcl0.png",
    alt: "",
  },
];

const serviciosimages = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dszjgdktf/image/upload/v1714071597/home3_dna9un.png",
    alt: "",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dszjgdktf/image/upload/v1714076954/home31_rs0cbu.png",
    alt: "",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dszjgdktf/image/upload/v1714076955/home32_pjzkmx.png",
    alt: "",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dszjgdktf/image/upload/v1714076956/home33_jp85hv.png",
    alt: "",
  },
];

function Features() {
  return (
    <div className="bg-neutral-50 pb-24 lg:pb-32">
      <div className="max-w-6xl mx-auto p-6 sm:px-6 lg:px-8">
        {/* <section className="flex flex-col-reverse md:flex-row items-start justify-start mt-12 lg:mt-24">
          <div className="w-full md:w-1/2 mt-6 rounded-md md:mt-0">

          </div>
          <div className="flex flex-col w-full md:w-1/2 lg:max-w-md md:pl-4 lg:p-4">
            <h1 className="text-lg text-center sm:text-left font-semibold text-[#720D1C]">
              Servicios
            </h1>
            <h1 className="text-2xl lg:text-3xl text-center sm:text-left font-bold text-gray-900 my-4">
              Potenciamos tu marca en la vía pública, radio y televisión
            </h1>
            <p className="text-center sm:text-left">
              <a
                href="/servicios"
                className="text-[#720D1C] font-medium hover:font-semibold hover:text-red-900 mt-4 cursor-pointer"
              >
                Ver mas →
              </a>
            </p>
          </div>
        </section> */}

        <section className="py-10 sm:py-16 lg:py-24">
          <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flex flex-col-reverse md:grid items-center md:grid-cols-2 gap-y-10 md:gap-x-20">
              <div className="pr-12 sm:pr-0">
                <div className="relative max-w-xs mb-12">
                  <div className="object-bottom">
                    <Carousel options={{ loop: true }} plugins={[autoPlay()]}>
                      <Carousel.Slides>
                        {imagescarrusel1.map((image) => (
                          <Carousel.Item key={image.id}>
                            <Image
                              src={image.src}
                              alt={image.alt}
                              width={732}
                              height={938}
                              className="ml-auto rounded-md"
                            />
                          </Carousel.Item>
                        ))}
                      </Carousel.Slides>
                    </Carousel>
                  </div>

                  <div className="absolute origin-bottom-right scale-75 -bottom-12 -right-12">
                    <Carousel options={{ loop: true }} plugins={[autoPlay()]}>
                      <Carousel.Slides>
                        {imagescarrusel2.map((image) => (
                          <Carousel.Item key={image.id}>
                            <Image
                              src={image.src}
                              alt={image.alt}
                              width={461}
                              height={590}
                              className="rounded-md ml-auto"
                            />
                          </Carousel.Item>
                        ))}
                      </Carousel.Slides>
                    </Carousel>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                  Nosotros
                </h2>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
                <p className="mt-4 text-base leading-relaxed text-gray-600 hover:font-semibold hover:text-[#720D1C]">
                  <a href="/sobrenosotros">Ver mas →</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
          <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-20">
              <div className="">
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                  Servicios
                </h2>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
                <p className="mt-4 text-base leading-relaxed text-gray-600 hover:font-semibold hover:text-[#720D1C]">
                  <a href="/servicios">Ver mas →</a>
                </p>
              </div>

              <div className="relative pr-6 sm:pl-6 md:px-0">
                <div className="relative w-full max-w-xs mt-4 mb-10 ml-auto">
                  <Carousel options={{ loop: true }} plugins={[autoPlay()]}>
                    <Carousel.Slides>
                      {serviciosimages.map((image) => (
                        <Carousel.Item key={image.id}>
                          <div className="flex items-center justify-center">
                            <Image
                              src={image.src}
                              alt={image.alt}
                              width={732}
                              height={938}
                              className="ml-auto rounded-md"
                            />
                          </div>
                        </Carousel.Item>
                      ))}
                    </Carousel.Slides>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-stretch gap-y-10 md:grid-cols-2 md:gap-x-20">
              <div className="relative grid grid-cols-2 gap-6 mt-10 md:mt-0">
                <div className="overflow-hidden aspect-w-3 aspect-h-4">
                  <img
                    className="object-cover object-top origin-top scale-150"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/features/2/team-work.jpg"
                    alt=""
                  />
                </div>

                <div className="relative">
                  <div className="h-full overflow-hidden aspect-w-3 aspect-h-4">
                    <img
                      className="object-cover scale-150 lg:origin-bottom-right"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/features/2/woman-working-on-laptop.jpg"
                      alt=""
                    />
                  </div>

                  <div className="absolute inset-0 grid w-full h-full place-items-center">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center w-12 h-12 text-blue-600 bg-white rounded-full shadow-md lg:w-20 lg:h-20"
                    >
                      <svg
                        className="w-6 h-6 lg:w-8 lg:h-8"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start xl:px-16">
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                  Contactanos ahora
                </h2>

                <a
                  href="#"
                  title=""
                  className="inline-flex items-center justify-center px-5 py-4 mt-8 text-base font-semibold text-white transition-all duration-200 rounded-md hover:opacity-90 focus:opacity-90 lg:mt-auto bg-gradient-to-r from-fuchsia-600 to-blue-600"
                  role="button"
                >
                  Get started now
                  <svg
                    className="w-5 h-5 ml-8 -mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section> */}

        {/* <section className="flex flex-col-reverse md:flex-row-reverse items-start justify-start mt-12 lg:mt-24">
          <div className="w-full md:w-1/2 mt-6 md:mt-0">
            <Image src={ClientesMockup} alt="Servicios5" width={400} height={300} />
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
              Descubrí las historias detrás de nuestras colaboraciones
              con marcas líderes. <br className="hidden md:block" />
              <a href="/clientes" className="text-[#720D1C] font-medium hover:font-semibold hover:text-red-900 mt-4 cursor-pointer">
                Ver mas →
              </a>
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
              <a href="/sobrenosotros" className="text-[#720D1C] font-medium hover:font-semibold hover:text-red-900 mt-4 cursor-pointer">
                Ver mas →
              </a>
            </p>
          </div>
        </section> */}
      </div>
    </div>
  );
}

export default Features;
