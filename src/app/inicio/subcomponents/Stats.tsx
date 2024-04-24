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
import Baires4Logo from "@/images/Logos/Baires4LogoGray.png";
import PulpLogo from "@/images/Logos/PulpLogoGray.png";
import NatirutsLogo from "@/images/Logos/NatirutsLogoGray.png";
import LitKillahLogo from "@/images/Logos/LitKillahLogoGray.png";
import LagerHausLogo from "@/images/Logos/LagerHausLogoGray.png";
import NaftaLogo from "@/images/Logos/NaftaLogoGray.png";

const logos = [
  { id: 1, src: YsyALogo, alt: "YsyA" },
  { id: 2, src: Grafa70Logo, alt: "Wos" },
  { id: 3, src: DellacasadcLogo, alt: "Wos" },
  { id: 4, src: AcruLogo, alt: "Wos" },
  { id: 5, src: Baires4Logo, alt: "Wos" },
  { id: 6, src: PulpLogo, alt: "Wos" },
  { id: 7, src: NatirutsLogo, alt: "Wos" },
  { id: 8, src: LitKillahLogo, alt: "LitKillahLogo" },
  { id: 9, src: LagerHausLogo, alt: "LagerHaus" },
  { id: 10, src: NaftaLogo, alt: "Nafta" },
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
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <div className="block md:hidden max-w-7xl py-16 px-6 lg:px-8 shadow-sm">
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
                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 hover:scale-105 duration-300 hover:opacity-80"
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
                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 hover:scale-105 duration-300 hover:opacity-80"
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
