import React from "react";
import Image from "next/image";
import NaftaBackground from "@/images/Backgrounds/Nafta.png";

function ContactCta() {
  return (
    <div className="relative py-12 mt-24 2xl:py-16 px-6 sm:px-0 bg-black">
      <div className="absolute inset-0">
        <Image
          className="object-cover w-full h-full opacity-60"
          src={NaftaBackground}
          alt="NaftaBackground"
        />
      </div>

      <div className="absolute inset-0 bg-transparent bg-opacity-40"></div>

      <div className="flex flex-col items-center justify-center relative px-4 mx-auto sm:px-6 lg:px-8 max-w-5xl">
        <h1 className="text-center text-4xl lg:text-5xl 2xl:text-6xl font-bold text-white">
          ¿Listo para llevar tu marca al <br /> siguiente nivel?
        </h1>
        <p className="text-center text-base mt-6 sm:text-lg text-white">
          ¡Contáctanos hoy mismo!
        </p>
        <button className="py-2 px-4 rounded-md mt-8 text-lg font-semibold text-white bg-[#720D1C]">
          ¡Contáctanos ahora!
        </button>
      </div>
    </div>
  );
}

export default ContactCta;
