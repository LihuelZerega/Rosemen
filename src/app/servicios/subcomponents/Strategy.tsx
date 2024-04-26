"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PlanificacionIcon from "@/images/Logos/Planificacion.png";
import SegmentacionIcon from "@/images/Logos/Segmentacion.png";
import DisenoGraficoIcon from "@/images/Logos/DisenoGrafico.png";

function Strategy() {
  const [ref1, inView1] = useInView({ threshold: 0.2 });

  const controls1 = useAnimation();

  useEffect(() => {
    if (inView1) {
      controls1.start({ opacity: 1, y: 0 });
    } else {
      controls1.start({ opacity: 0, y: 20 });
    }
  }, [controls1, inView1]);

  return (
    <>
      <section className="pb-10 bg-white">
        <hr className="border-transparent mt-12 mx-24 sm:mx-56 lg:mx-72 xl:mx-96" />

        <motion.div
          ref={ref1}
          animate={controls1}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
          className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"
        >
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
                  estratégica de campañas.
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
        </motion.div>
      </section>
    </>
  );
}

export default Strategy;
