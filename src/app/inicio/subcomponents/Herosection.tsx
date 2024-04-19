import React from "react";
import Image from "next/image";
import WosBackground from "@/images/Backgrounds/Wos1.jpeg";

function Herosection() {
  return (
    <div className="relative py-44 2xl:py-64 px-6 sm:px-0 bg-black">
      <div className="absolute inset-0">
        <Image
          className="object-cover w-full h-full opacity-60"
          src={WosBackground}
          alt="WosBackground"
        />
      </div>

      <div className="absolute inset-0 bg-rtansparent bg-opacity-40"></div>

      <div className="relative px-4 mx-left sm:px-6 lg:px-8 2xl:pl-36 max-w-5xl">
        <div className="w-full sm:max-w-2xl lg:max-w-3xl">
          <h1 className="text-center sm:text-left text-5xl sm:text-5xl 2xl:text-6xl font-bold text-white">
            Potenciá tu marca con nuestra experiencia y creatividad
          </h1>
        </div>
        <div className="max-w-lg">
          <p className="text-center sm:text-left text-base mt-6 sm:text-lg text-white">
            Contamos con más de 20 años liderando el mercado publicitario,
            conectando con marcas y audiencias de manera impactante.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row mx-auto sm:space-x-2">
          <button className="py-2 px-4 rounded-md mt-8 text-lg font-semibold text-white bg-[#720D1C]">
            Descubrí nuestros servicios
          </button>
          <button className="py-2 px-4 rounded-md mt-4 sm:mt-8 text-lg font-semibold text-white border-2 border-[#720D1C]">
            Conocenos
          </button>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
