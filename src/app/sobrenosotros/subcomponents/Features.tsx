"use client";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Sn1 from "@/images/Features/Sn1.png";
import Sn2 from "@/images/Features/Sn2.png";
import Sn3 from "@/images/Features/Sn3.png";

function Features() {
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
    <motion.div
      ref={ref1}
      animate={controls1}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4 }}
      className="py-12"
    >
      <div className="max-w-6xl mx-auto p-6 sm:px-6 lg:px-8 pb-12">
        <div className="flex flex-col lg:flex-row text-left">
          <div className="w-full lg:w-2/3 mr-12">
            <h1 className="text-2xl lg:text-3xl text-center md:text-left font-bold text-gray-800 mb-4">
              Hace mas de 20 años que trabajamos en el mercado publicitario.
            </h1>
            <p className="text-lg lg:text-xl font-medium mt-3 text-neutral-600 lg:leading-8">
              Somos una agencia boutique que pauta gran parte del
              entretenimiento y del espectáculo que se genera en nuestro país.
            </p>
            <p className="text-lg lg:text-xl font-medium mt-3 text-neutral-600 lg:leading-8">
              Estas acciones nos han permitido establecer contactos fluidos con
              los diferentes proveedores de medios, cuyo resultado nos
              posibilita traccionar fuertemente sobre los costos.
            </p>
            <p className="text-lg lg:text-xl font-medium mt-3 text-neutral-600 lg:leading-8">
              Podríamos haber explicitado en esta presentación, frases como
              «servicio personalizado», «estrategias que garanticen crecimiento
              y visibilidad » o «calidad y talento humano», pero son sólo
              expresiones de deseo, que se repiten en forma continua en todas
              las aperturas de página.{" "}
            </p>
            <p className="text-lg lg:text-xl font-medium mt-3 text-neutral-600 lg:leading-8">
              Por lo tanto, sobre nosotros, únicamente vamos a manifestar que en
              un mercado publicitario muy competitivo, somos competitivos.
            </p>
          </div>
          <div className="flex flex-col w-full lg:w-1/3 items-center justify-center mt-6 lg:mt-0">
            <div>
              <Image src={Sn1} alt="" className="w-full lg:w-full rounded-md shadow-2xl" />
            </div>
            <div>
              <Image src={Sn2} alt="" className="w-full lg:w-full rounded-md shadow-2xl my-6 md:my-16" />
            </div>
            {/* <div>
              <Image src={Sn3} alt="" className="rounded-md shadow-2xl" />
            </div> */}
          </div>
        </div>
        {/* <div className="flex flex-col md:flex-row items-start">
          <div className="w-full md:w-1/2 px-0 md:px-4 mb-4 md:mb-0">
            <h1 className="text-center md:text-left text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900">
              Quiénes Somos
            </h1>
            <p className="text-lg lg:text-xl font-medium mt-3 text-neutral-600 lg:leading-8">
              Hace más de 20 años que trabajamos en el mercado publicitario.
              Somos una agencia boutique especializada en pautar gran parte del
              entretenimiento y espectáculo generados en nuestro país.
            </p>
          </div>
          <div className="w-full md:w-1/2 h-full px-0 md:px-4 flex items-center justify-center">
            <Image src={Sn1} alt="Sn1" className="rounded-md shadow-2xl" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-start my-12 md:my-28">
          <div className="w-full md:w-1/2 px-0 md:px-4 mb-4 md:mb-0 ">
            <h1 className="text-center md:text-left text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900">
              Nuestra Experiencia
            </h1>
            <p className="text-lg lg:text-xl font-medium mt-3 text-neutral-600 lg:leading-8">
              Durante estas dos décadas, hemos establecido sólidos contactos con
              diversos proveedores de medios, lo que nos permite tener una
              influencia significativa en los costos de nuestras campañas
              publicitarias.
            </p>
          </div>
          <div className="w-full md:w-1/2 h-full px-0 md:px-4 flex items-center justify-center">
            <Image src={Sn2} alt="Sn2" className="rounded-md shadow-2xl" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start">
          <div className="w-full md:w-1/2 px-0 md:px-4 mb-4 md:mb-0 ">
            <h1 className="text-center md:text-left text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900">
              Enfoque Competitivo
            </h1>
            <p className="text-lg lg:text-xl font-medium mt-3 text-neutral-600 lg:leading-8">
              Reconocemos que el mercado publicitario es altamente competitivo.
              Por ello, nos destacamos por nuestra capacidad para ofrecer
              soluciones efectivas y rentables a nuestros clientes.
            </p>
          </div>
          <div className="w-full md:w-1/2 h-full px-0 md:px-4 flex items-center justify-center">
            <Image src={Sn3} alt="Sn3" className="rounded-md shadow-2xl" />
          </div>
        </div> */}
      </div>
    </motion.div>
  );
}

export default Features;
