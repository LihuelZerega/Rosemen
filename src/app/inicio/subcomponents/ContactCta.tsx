import React from "react";
import Image from "next/image";
import NaftaBackground from "@/images/Backgrounds/Nafta.png";

function ContactCta() {
  return (
    <>
      <div className="bg-transparent">
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
      </div>
    </>
  );
}

export default ContactCta;
