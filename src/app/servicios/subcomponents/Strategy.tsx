import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoMapOutline } from "react-icons/io5";
import { PiHandshakeLight } from "react-icons/pi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BiLineChart } from "react-icons/bi";

function Strategy() {
  return (
    <>
      <section className="pb-10 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Estrategias
            </h1>
            <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis.
            </p>
          </div>

          <div className="relative mt-12 lg:mt-20">
            <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 justify-center gap-x-12">
              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-[#720D1C]">
                    <HiMagnifyingGlass />
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-[#720D1C] md:mt-10">
                  Investigación
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-[#720D1C]">
                    <IoMapOutline />
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-[#720D1C] md:mt-10">
                  Planificación
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-[#720D1C]">
                    <PiHandshakeLight />
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-[#720D1C] md:mt-10">
                  Negociación
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-[#720D1C]">
                    <AiOutlineClockCircle />
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-[#720D1C] md:mt-10">
                  Implementación
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-[#720D1C]">
                    <BiLineChart />
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-[#720D1C] md:mt-10">
                  Resultados
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <hr className="mt-12 mx-24 sm:mx-56 lg:mx-72 xl:mx-96" /> */}
    </>
  );
}

export default Strategy;
