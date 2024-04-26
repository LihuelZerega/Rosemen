import React from "react";
import Image from "next/image";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoMapOutline } from "react-icons/io5";
import { PiHandshakeLight } from "react-icons/pi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BiLineChart } from "react-icons/bi";
import PlanificacionIcon from "@/images/Logos/Planificacion.png";
import SegmentacionIcon from "@/images/Logos/Segmentacion.png";
import DisenoGraficoIcon from "@/images/Logos/DisenoGrafico.png";

function Strategy() {
  return (
    <>
      <section className="pb-10 bg-white">
        <hr className="mt-12 mx-24 sm:mx-56 lg:mx-72 xl:mx-96" />

        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h1 className="pt-16 pb-8 lg:pb-0 sm:mt-0 text-2xl md:text-3xl text-center font-semibold tracking-tight text-neutral-900 opacity-90">
            Estrategias{" "}
          </h1>
          <div className="relative py-12 lg:py-20">
            <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 justify-center gap-x-12">
              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto">
                  {/* <span className="text-xl font-semibold text-[#720D1C]">
                    <HiMagnifyingGlass />
                  </span> */}
                  <Image
                    src={PlanificacionIcon}
                    alt="Planificacion"
                    className="w-16 h-w-16"
                  />
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-[#720D1C] md:mt-8">
                  Planificación
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  estratégica de campanas.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-20 h-w-20 mx-auto">
                  {/* <span className="text-xl font-semibold text-[#720D1C]">
                    <IoMapOutline />
                  </span> */}
                  <Image
                    src={SegmentacionIcon}
                    alt="Segmentacion"
                    className="w-20 h-20"
                  />
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-[#720D1C] md:mt-4">
                  Segmentación
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  de audiencia de campañas.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-14 h-14 mx-auto">
                  <Image
                    src={DisenoGraficoIcon}
                    alt="Diseno Grafico"
                    className="w-14 h-14"
                  />
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-[#720D1C] md:mt-10">
                  Diseño
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  y creatividad de piezas publicitarias.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Strategy;
