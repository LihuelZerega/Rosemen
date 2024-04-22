import React from "react";
import Image from "next/image";
import NaftaBackground from "@/images/Backgrounds/Nafta.png";

function ContactCta() {
  return (
    <>
      {/* <div className="relative py-12 mt-24 2xl:py-16 px-6 sm:px-0 bg-black">
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
      </div> */}

      <div className="bg-transparent">
        <div className="mx-auto py-24 sm:py-32">
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
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Ac euismod vel sit maecenas id pellentesque eu sed consectetur.{" "}
                <br />
                Malesuada adipiscing sagittis vel nulla.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-[#720D1C] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  ¡Contáctanos ahora!
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  Mas informacion <span aria-hidden="true"> →</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactCta;
