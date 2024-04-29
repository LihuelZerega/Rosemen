"use client";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel } from "keep-react";
import autoPlay from "embla-carousel-autoplay";
import CarapantallaMunicipalIcon from "@/images/Logos/CarapantallaMunicipalIcon.png";
import CuatroXCuatroIcon from "@/images/Logos/CuatroXCuatroIcon.png";
import FrontlightIcon from "@/images/Logos/FrontlightIcon.png";
import TotemIcon from "@/images/Logos/TotemIcon.png";
import SextupleIcon from "@/images/Logos/SextupleIcon.png";
import PPLIcon from "@/images/Logos/PPLIcon.png";
import HipervallasIcon from "@/images/Logos/HipervallasIcon.png";
import Servicios1 from "@/images/Features/Servicios1.png";
import Servicios2 from "@/images/Features/Servicios2.png";
import Servicios3 from "@/images/Features/Servicios3.png";
import Servicios4 from "@/images/Features/Servicios4.png";
import Servicios5 from "@/images/Features/Servicios5.png";
import Gafa70Player from "./Audios/Gafa70Player";
import MotivartePlayer from "./Audios/MotivartePlayer";
import AfadhyaPlayer from "./AfadhyaPlayer";
import AfadhyaAudioPlayer from "./Audios/AfadhyaAudioPlayer";
import BtrConsulting from "./Audios/BtrConsulting";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import ViaPublica1 from "@/images/Features/ViaPublica1.png";
import ViaPublica2 from "@/images/Features/ViaPublica2.png";
import ViaPublica3 from "@/images/Features/ViaPublica3.png";
import ViaPublica4 from "@/images/Features/ViaPublica4.png";
import ViaPublica5 from "@/images/Features/ViaPublica5.png";
import ViaPublica6 from "@/images/Features/ViaPublica6.png";
import ViaPublica7 from "@/images/Features/ViaPublica7.png";
import ViaPublica8 from "@/images/Features/ViaPublica8.png";
import ViaPublica9 from "@/images/Features/ViaPublica9.png";
import ViaPublica10 from "@/images/Features/ViaPublica10.png";
import ViaPublica11 from "@/images/Features/ViaPublica11.png";
import ViaPublica12 from "@/images/Features/ViaPublica12.png";
import ViaPublica13 from "@/images/Features/ViaPublica13.png";
import Baires4 from "@/images/Features/Baires4.png";
import DigitalImage from "@/images/Features/DigitalMockup.png";

const imagesMobile = [
  { id: 1, src: ViaPublica1, alt: "ViaPublica1" },
  { id: 2, src: ViaPublica2, alt: "ViaPublica2" },
  { id: 3, src: ViaPublica3, alt: "ViaPublica3" },
  { id: 4, src: ViaPublica5, alt: "ViaPublica5" },
  { id: 5, src: ViaPublica6, alt: "ViaPublica6" },
  { id: 6, src: ViaPublica7, alt: "ViaPublica7" },
  { id: 7, src: ViaPublica8, alt: "ViaPublica8" },
  { id: 8, src: ViaPublica9, alt: "ViaPublica9" },
  { id: 9, src: ViaPublica10, alt: "ViaPublica10" },
  { id: 10, src: ViaPublica11, alt: "ViaPublica11" },
  { id: 11, src: ViaPublica12, alt: "ViaPublica12" },
  { id: 12, src: ViaPublica13, alt: "ViaPublica13" },
  { id: 13, src: Baires4, alt: "Baires4" },
];

const imagesDesktop = [
  { id: 1, src: ViaPublica1, alt: "ViaPublica1" },
  { id: 2, src: ViaPublica2, alt: "ViaPublica2" },
  { id: 3, src: ViaPublica3, alt: "ViaPublica3" },
  { id: 4, src: ViaPublica5, alt: "ViaPublica5" },
  { id: 5, src: ViaPublica6, alt: "ViaPublica6" },
  { id: 6, src: ViaPublica7, alt: "ViaPublica7" },
  { id: 7, src: ViaPublica8, alt: "ViaPublica8" },
  { id: 8, src: ViaPublica9, alt: "ViaPublica9" },
  { id: 9, src: ViaPublica10, alt: "ViaPublica10" },
  { id: 10, src: ViaPublica11, alt: "ViaPublica11" },
  { id: 11, src: ViaPublica12, alt: "ViaPublica12" },
  { id: 12, src: ViaPublica13, alt: "ViaPublica13" },
  { id: 13, src: Baires4, alt: "Baires4" },
];

const ImagesMobile = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
};

const ImagesDesktop = {
  dots: false,
  infinite: true,
  speed: 200,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1300,
};

function Features() {
  return (
    <motion.div className="py-12">
      {/* <div className="max-w-2xl mx-auto text-center pt-16 md:pt-28">
        <h1 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
          Servicios
        </h1>
        <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis.
        </p>
      </div> */}

      <div className="flex flex-col pb-12 max-w-6xl mx-auto p-6 sm:px-6 lg:px-8">
        <div className="flex flex-col">
          <div className="flex flex-col items-start justify-start w-full">
            <h1
              id="viapublica"
              className="text-2xl lg:text-3xl text-center md:text-left font-bold text-[#720D1C] mb-4"
            >
              Vía Pública
            </h1>
            <p className="text-lg lg:text-xl font-medium mt-3 text-neutral-600 lg:leading-8">
              Por su presencia en las calles, la vía pública es inevitable.
              Escogiendo ubicaciones estratégicas de acuerdo a la demanda del
              producto y trabajando con los dispositivos específicos para esa
              marca establecida, la campaña tiene que lograr un alto impacto.
              Estamos convencidos que la cartelería en la calle es un medio que
              posee una eficacia única.
            </p>
          </div>
          <div>
            <div className="block md:hidden max-w-7xl py-16 md:my-20 px-6 lg:px-0">
              <div className="relative w-full max-w-lg mx-auto overflow-hidden">
                <Slider {...ImagesMobile}>
                  {imagesMobile.map((image) => (
                    <div key={image.id}>
                      <div className="flex gap-x-8 items-center justify-center rounded-md">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={400}
                          height={300}
                          className="col-span-2 max-h-80 w-full object-contain lg:col-span-1 rounded-md"
                        />
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>

            <div className="hidden md:block py-16 px-0 lg:px-0">
              <div className="relative w-full mx-auto overflow-hidden rounded-md">
                <Slider {...ImagesDesktop}>
                  {imagesDesktop.map((image) => (
                    <div key={image.id}>
                      <div className="rounded-md">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={400}
                          height={300}
                          className="col-span-2 max-h-72 w-full object-contain lg:col-span-1 rounded-md"
                        />
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>

        {/* <hr className="mx-96 mt-12"/> */}

        {/* <div className="flex flex-col mt-6">
          <h1 className="font-bold text-xl text-center">Formatos</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-y-8 gap-x-4 mx-3 mt-6">
            <div className="flex flex-col items-center justify-start hover:scale-105 duration-300 hover:opacity-80">
              <Image
                src={CarapantallaMunicipalIcon}
                width={32}
                height={32}
                alt="CarapantallaMunicipalIcon"
              />
              <div className="text-center font-medium mt-2">
                <h1>Carapantallas</h1>
                <h1>municipales</h1>
              </div>
            </div>

            <div className="flex flex-col items-center justify-start hover:scale-105 duration-300 hover:opacity-80">
              <Image
                src={CuatroXCuatroIcon}
                width={40}
                height={40}
                alt="CuatroXCuatroIcon"
              />
              <div className="text-xl font-medium mt-3">
                <h1>4x4</h1>
              </div>
            </div>

            <div className="flex flex-col items-center justify-start hover:scale-105 duration-300 hover:opacity-80">
              <Image
                src={FrontlightIcon}
                width={55}
                height={55}
                alt="FrontlightIcon"
              />
              <div className="text-xl font-medium mt-3">
                <h1>Frontlight</h1>
              </div>
            </div>

            <div className="flex flex-col items-center justify-start hover:scale-105 duration-300 hover:opacity-80">
              <Image src={TotemIcon} width={50} height={50} alt="TotemIcon" />
              <div className="text-xl font-medium mt-1">
                <h1>Totem</h1>
              </div>
            </div>

            <div className="flex flex-col items-center justify-start hover:scale-105 duration-300 hover:opacity-80">
              <Image
                src={SextupleIcon}
                width={80}
                height={80}
                alt="SextupleIcon"
              />
              <div className="text-xl font-medium mt-3.5">
                <h1>Sextuple</h1>
              </div>
            </div>

            <div className="flex flex-col items-center justify-start hover:scale-105 duration-300 hover:opacity-80">
              <Image src={PPLIcon} width={30} height={30} alt="PPLIcon" />
              <div className="text-xl font-medium mt-3">
                <h1>PPL</h1>
              </div>
            </div>

            <div className="flex flex-col items-center justify-start hover:scale-105 duration-300 hover:opacity-80">
              <Image
                src={HipervallasIcon}
                width={150}
                height={150}
                alt="HipervallasIcon"
              />
              <div className="text-xl font-medium mt-3">
                <h1>Hipervallas</h1>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      <div className="bg-neutral-50">
        <section className="flex flex-col md:flex-row items-center py-12 lg:py-24 max-w-6xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="flex flex-col w-full md:w-1/2 lg:max-w-md md:pr-4">
            <h1 className="text-3xl lg:text-4xl text-center md:text-left font-bold text-[#720D1C] mb-4">
              Radio
            </h1>
            <p className="text-lg lg:text-xl font-medium mt-3 text-neutral-600 lg:leading-8">
              Cuando comparamos los diferentes medios con la radio, podemos
              comprender que las emisoras segmentan por su target etario y
              socioeconómico, pero lo fundamental en cuanto a su diferencia,
              radica en la afinidad que cada usuario define en la elección del
              dial. Su poder se afianza en la repetición contínua del mensaje,
              lo que genera la incorporación del mismo.
            </p>
          </div>
          <div className="w-full md:w-1/2 mt-12 sm:mt-6 md:mt-0">
            <Tabs
              aria-label="Options"
              className="w-full pl-4 lg:pl-20 xl:pl-24"
              variant="underlined"
              disabledKeys={["pnt"]}
            >
              <Tab
                key="spot"
                title="SPOT"
                className="flex items-center justify-center"
              >
                <Card className="lg:w-2/3">
                  <CardBody className="flex flex-col items-center justify-center gap-y-4">
                    <Gafa70Player />
                    <MotivartePlayer />
                    <AfadhyaAudioPlayer />
                    <BtrConsulting />
                  </CardBody>
                </Card>
              </Tab>
              <Tab
                key="pnt"
                title="PNT"
                className="flex items-center justify-center"
              >
                <Card>
                  <CardBody className="rounded-md">
                    <AfadhyaPlayer src="https://res.cloudinary.com/dszjgdktf/video/upload/v1713895236/LAM_-_Afadhya_s7bsuh.mp4" />
                  </CardBody>
                </Card>
              </Tab>
            </Tabs>
          </div>
        </section>
      </div>

      <div className="flex flex-col md:flex-row-reverse items-center justify-between mt-12 lg:mt-24 max-w-6xl mx-auto p-6 sm:px-6 lg:px-8">
        <div className="flex-col w-full md:w-1/2 lg:max-w-md">
          <h1
            id="television"
            className="text-2xl lg:text-3xl text-center md:text-left font-bold text-[#720D1C] mb-4"
          >
            Televisión
          </h1>
          <p className="text-lg lg:text-xl font-medium mt-3 text-neutral-600 lg:leading-8">
            El avance exponencial de la tecnología, generando nuevas plataformas
            visuales y auditivas, ha creado una amplia diversidad, que compite
            directamente con la TV. A pesar de estas nuevas estructuras y a
            pesar de haber caído en su nivel de encendido, la TV sigue teniendo
            un potencial significativo en cuanto a su llegada y a su impacto,
            alcanzando a una gran cantidad de espectadores.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center mt-6 md:mt-0 ">
          <AfadhyaPlayer src="https://res.cloudinary.com/dszjgdktf/video/upload/v1713895236/LAM_-_Afadhya_s7bsuh.mp4" />
        </div>
      </div>

      <section className="flex flex-col md:flex-row items-center py-12 lg:py-24 max-w-6xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex flex-col w-full md:w-1/2">
          <h1
            id="digital"
            className="text-3xl lg:text-4xl text-center md:text-left font-bold text-[#720D1C] mb-4"
          >
            Digital
          </h1>
          <p className="text-lg lg:text-xl font-medium mt-3 text-neutral-600 lg:leading-8">
            Los medios publicitarios digitales son canales y plataformas en
            línea. Estos soportes permiten llegar a audiencias específicas tanto
            en su target socioeconómico como en su target etario y lo hace de
            manera eficaz, a través de diversos formatos publicitarios.
          </p>
        </div>
        <div className="w-full md:w-1/2 mt-12 sm:mt-6 md:mt-0 lg:pl-12">
          <Image src={DigitalImage} alt="Digital" />
        </div>
      </section>
    </motion.div>
  );
}

export default Features;
