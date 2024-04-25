"use client";
import React, { useState } from "react";
import Image from "next/image";
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
import Gafa70Player from "./Gafa70Player";
import MotivartePlayer from "./MotivartePlayer";
import AfadhyaPlayer from "./AfadhyaPlayer";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

const images = [
  { id: 1, src: Servicios1, alt: "Servicios1" },
  { id: 2, src: Servicios2, alt: "Servicios2" },
  { id: 3, src: Servicios3, alt: "Servicios3" },
  { id: 4, src: Servicios4, alt: "Servicios4" },
  { id: 5, src: Servicios5, alt: "Servicios5" },
];

function Features() {
  return (
    <div className="py-12">
      {/* <div className="max-w-2xl mx-auto text-center pt-16 md:pt-28">
        <h1 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
          Servicios
        </h1>
        <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis.
        </p>
      </div> */}

      <section className="flex flex-col pb-12 max-w-6xl mx-auto p-6 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-start justify-start">
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
          <div className="flex flex-col w-full md:w-1/2 lg:max-w-md md:pl-4">
            <h1
              id="viapublica"
              className="text-2xl lg:text-3xl text-center md:text-left font-bold text-[#720D1C] mb-4"
            >
              Vía Pública
            </h1>
            <p className="text-left font-medium">
              Por su presencia en las calles, la vía pública es inevitable.
              Escogiendo ubicaciones estratégicas de acuerdo a la demanda del
              producto y trabajando con los dispositivos específicos para esa
              marca establecida, la campaña tiene que lograr un alto impacto.
              Estamos convencidos que la cartelería en la calle es un medio que
              posee una eficacia única.
            </p>
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
      </section>

      <div className="bg-neutral-50">
        <section className="flex flex-col md:flex-row items-center py-24 lg-mt-24 max-w-6xl mx-auto p-6 sm:px-6 lg:px-8">
          <div className="flex-col w-full md:w-1/2 lg:max-w-md md:pl-4">
            <h1
              id="radio"
              className="text-2xl lg:text-3xl text-center md:text-left font-bold text-[#720D1C] mb-4"
            >
              Radio
            </h1>
            <p className="text-left font-medium">
              Cuando comparamos los diferentes medios con la radio, podemos
              comprender que las emisoras segmentan por su target etario y
              socioeconómico, pero lo fundamental en cuanto a su diferencia,
              radica en la afinidad, que cada usuario define en la elección del
              dial. Su poder se afianza en la repetición continua del mensaje,
              lo que genera la incorporación del mismo.
            </p>
          </div>
          <div className="w-full md:w-1/2 mt-12 sm:mt-6 md:mt-0">
            <Tabs aria-label="Options" className="w-full" variant="underlined">
              <Tab key="spot" title="Spot">
                <Card>
                  <CardBody className="flex flex-col items-center justify-center gap-y-4">
                    <Gafa70Player />
                    <MotivartePlayer />
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="pnt" title="PNT">
                <Card>
                  <CardBody className="rounded-md">
                    <AfadhyaPlayer src="https://res.cloudinary.com/dszjgdktf/video/upload/v1713895236/LAM_-_Afadhya_s7bsuh.mp4"/>
                  </CardBody>
                </Card>
              </Tab>
            </Tabs>
          </div>
        </section>
      </div>

      <section className="flex flex-col md:flex-row-reverse items-center justify-between mt-12 lg:mt-24 max-w-6xl mx-auto p-6 sm:px-6 lg:px-8">
        <div className="flex-col w-full md:w-1/2 lg:max-w-md">
          <h1
            id="television"
            className="text-2xl lg:text-3xl text-center md:text-left font-bold text-[#720D1C] mb-4"
          >
            Televisión
          </h1>
          <p className="text-left font-medium">
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
      </section>
    </div>
  );
}

export default Features;
