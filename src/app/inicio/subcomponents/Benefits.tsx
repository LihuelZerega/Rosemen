"use client";
import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { IoPeople } from "react-icons/io5";
import { HiOutlineSparkles } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";

function Benefits() {
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
      <motion.div
        ref={ref1}
        animate={controls1}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.4 }}
        className="mx-auto max-w-7xl py-24 px-9 lg:px-12"
      >
        {/* <div className="flex flex-col items-center justify-centertext-center">
          <h1 className="text-lg text-center sm:text-left font-semibold text-[#720D1C]">
            Beneficios
          </h1>
          <h1 className="text-2xl lg:text-3xl text-center sm:text-left font-bold text-gray-900 mt-4 mb-2">
            ¿Por las que los clientes eligen nuestra agencia?
          </h1>
        </div> */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-4">
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center bg-gray-100 rounded-full p-6 mb-3">
              <IoPeople className="text-[#720D1C] text-4xl" />
            </div>
            <h1 className="font-bold">+200 Clientes satisfechos</h1>
            <p className="text-center max-w-sm">
              Contamos con un gran historial <br className="hidden lg:block" />{" "}
              de clientes
            </p>
          </div>

          <div className="flex flex-col items-center justify-center my-12 sm:my-0">
            <div className="flex items-center justify-center bg-gray-100 rounded-full p-6 mb-3">
              <HiOutlineSparkles className="text-[#720D1C] text-4xl" />
            </div>
            <h1 className="font-bold">Experiencia</h1>
            <p className="text-center max-w-sm">
              Mas de 20 años en el <br className="hidden lg:block" /> mercado
              publicitario
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center bg-gray-100 rounded-full p-6 mb-3">
              <FaPhoneAlt className="text-[#720D1C] text-4xl" />
            </div>
            <h1 className="font-bold">Soporte personalizado</h1>
            <p className="text-center max-w-sm">
              Cambiar descripcion
            </p>
          </div>
        </section>
      </motion.div>
    </>
  );
}

export default Benefits;
