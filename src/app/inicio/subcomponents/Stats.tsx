"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import YsyALogo from "@/images/Logos/YsyALogoGray.png";
import WosLogo from "@/images/Logos/WosLogoGray.png";
import LitKillahLogo from "@/images/Logos/LitKillahLogoGray.png";
import BhaviLogo from "@/images/Logos/BhaviLogoGray.png";
import NaftaLogo from "@/images/Logos/NaftaLogoGray.png";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

export default function Stats() {
  const [ref1, inView1] = useInView({ threshold: 0.2 });
  const [ref2, inView2] = useInView({ threshold: 0.2 });
  const [ref3, inView3] = useInView({ threshold: 0.2 });
  const [ref4, inView4] = useInView({ threshold: 0.2 });
  const [ref5, inView5] = useInView({ threshold: 0.2 });

  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const controls5 = useAnimation();

  useEffect(() => {
    if (inView1) {
      controls1.start({ opacity: 1, y: 0 });
    } else {
      controls1.start({ opacity: 0, y: 20 });
    }
  }, [controls1, inView1]);

  useEffect(() => {
    if (inView2) {
      controls2.start({ opacity: 1, y: 0 });
    } else {
      controls2.start({ opacity: 0, y: 20 });
    }
  }, [controls2, inView2]);

  useEffect(() => {
    if (inView3) {
      controls3.start({ opacity: 1, y: 0 });
    } else {
      controls3.start({ opacity: 0, y: 20 });
    }
  }, [controls3, inView3]);

  useEffect(() => {
    if (inView4) {
      controls4.start({ opacity: 1, y: 0 });
    } else {
      controls4.start({ opacity: 0, y: 20 });
    }
  }, [controls4, inView4]);

  useEffect(() => {
    if (inView5) {
      controls5.start({ opacity: 1, y: 0 });
    } else {
      controls5.start({ opacity: 0, y: 20 });
    }
  }, [controls5, inView5]);

  return (
    <div className="bg-white pb-24 sm:pb-32 shadow-sm">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Con la <span className="text-[#720D1C]">confianza</span> de los{" "}
          <span className="text-[#720D1C]">artistas</span> mas influyentes de
          nuestro <span className="text-[#720D1C]">país</span>
        </h2>
        <motion.div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <motion.div
            ref={ref1}
            animate={controls1}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 hover:scale-105 transition-all duration-300 hover:opacity-80"
          >
            <Image
              src={YsyALogo}
              alt="YsyA"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 hover:scale-105 transition-all duration-300 hover:opacity-80"
            />
          </motion.div>
          <motion.div
            ref={ref2}
            animate={controls2}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 hover:scale-105 transition-all duration-300 hover:opacity-80"
          >
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 hover:scale-105 transition-all duration-300 hover:opacity-80"
              src={WosLogo}
              alt="Wos"
              width={158}
              height={48}
            />
          </motion.div>
          <motion.div
            ref={ref3}
            animate={controls3}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 hover:scale-105 transition-all duration-300 hover:opacity-80"
          >
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 hover:scale-105 transition-all duration-300 hover:opacity-80"
              src={LitKillahLogo}
              alt="LitKillahLogo"
              width={158}
              height={48}
            />
          </motion.div>
          <motion.div
            ref={ref4}
            animate={controls4}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 1 }}
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1 hover:scale-105 transition-all duration-300 hover:opacity-80"
          >
            <Image
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1 hover:scale-105 transition-all duration-300 hover:opacity-80"
              src={BhaviLogo}
              alt="Bhavi"
              width={158}
              height={48}
            />
          </motion.div>
          <motion.div
            ref={ref5}
            animate={controls5}
            initial={{ opacity: 0, y: 60 }}
            transition={{ duration: 1.2 }}
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1 hover:scale-105 transition-all duration-300 hover:opacity-80"
          >
            <Image
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1 hover:scale-105 transition-all duration-300 hover:opacity-80"
              src={NaftaLogo}
              alt="Nafta"
              width={158}
              height={48}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
