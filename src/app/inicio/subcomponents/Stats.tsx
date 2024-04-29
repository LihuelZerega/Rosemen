"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import YsyALogo from "@/images/Logos/YsyALogoGray.png";
import Grafa70Logo from "@/images/Logos/Grafa70LogoGray.png";
import DellacasadcLogo from "@/images/Logos/DellacasadcLogoGray.png";
import AcruLogo from "@/images/Logos/AcruLogoGray.png";
import PulpLogo from "@/images/Logos/PulpLogoGray.png";
import NatirutsLogo from "@/images/Logos/NatirutsLogoGray.png";
import LitKillahLogo from "@/images/Logos/LitKillahLogoGray.png";
import LagerHausLogo from "@/images/Logos/LagerHausLogoGray.png";
import NaftaLogo from "@/images/Logos/NaftaLogoGray.png";
import MapelmanLogo from "@/images/Logos/MeapelmanLogoGray.png";
import WosLogo from "@/images/Logos/WosLogoGray.png";
import MotivarteLogo from "@/images/Logos/MotivarteLogoGray.png";
import InfomediaLogo from "@/images/Logos/InfomediaLogoGray.png";
import InteresGeneralLogo from "@/images/Logos/InteresGeneralLogoGray.png";
import ExpoholisticaLogo from "@/images/Logos/ExpoHolisticaLogoGray.png";
import VillegasRestoLogo from "@/images/Logos/VillegasLogoGray.png";
import WinonasLogo from "@/images/Logos/WannaLogoGray.png";
import Expografica from "@/images/Logos/ExpograficaLogoGray.png";

const logos = [
  { id: 1, src: YsyALogo, alt: "YsyA" },
  { id: 2, src: Grafa70Logo, alt: "Grafa70" },
  { id: 3, src: DellacasadcLogo, alt: "Dellacasadc" },
  { id: 4, src: AcruLogo, alt: "Acru" },
  { id: 5, src: WosLogo, alt: "WosLogo" },
  { id: 6, src: PulpLogo, alt: "Pulp" },
  { id: 7, src: NatirutsLogo, alt: "Natiruts" },
  { id: 8, src: LitKillahLogo, alt: "LitKillahLogo" },
  { id: 9, src: LagerHausLogo, alt: "LagerHaus" },
  { id: 10, src: NaftaLogo, alt: "Nafta" },
  { id: 11, src: MotivarteLogo, alt: "Motivarte" },
  { id: 12, src: MapelmanLogo, alt: "Mapelman" },
  { id: 13, src: InfomediaLogo, alt: "Infomedia" },
  { id: 14, src: InteresGeneralLogo, alt: "InteresGeneral" },
  { id: 15, src: ExpoholisticaLogo, alt: "Expoholistica" },
  { id: 16, src: VillegasRestoLogo, alt: "VillegasResto" },
  { id: 17, src: WinonasLogo, alt: "Winonas" },
  { id: 18, src: Expografica, alt: "Expografica" },
];

export default function Stats() {
  const settingsMobile = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const settingsDesktop = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1300,
  };

  return (
    <>
      <h1 className="pt-16 pb-8 sm:mt-0 text-2xl md:text-3xl text-center font-semibold tracking-tight text-neutral-900 opacity-90">
        Clientes con los que <br className="block md:hidden" />{" "}
        <span className="text">trabajamos</span>
      </h1>

      <div className="block md:hidden max-w-7xl py-16 md:my-20 px-6 lg:px-8 shadow-sm">
        <div className="relative w-full max-w-lg mx-auto overflow-hidden">
          <Slider {...settingsMobile}>
            {logos.map((image) => (
              <div key={image.id}>
                <div className="flex gap-x-8 items-center justify-center">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className="col-span-2 max-h-14 w-full object-contain lg:col-span-1 hover:scale-105 duration-300 hover:opacity-80"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="hidden md:block py-16 px-6 lg:px-8 shadow-sm">
        <div className="relative w-full mx-auto overflow-hidden">
          <Slider {...settingsDesktop}>
            {logos.map((image) => (
              <div key={image.id}>
                <div className="">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className="col-span-2 max-h-16 w-full object-contain lg:col-span-1 hover:scale-105 duration-300 hover:opacity-80"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
