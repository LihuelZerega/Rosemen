import Image from "next/image";
import React from "react";

function Features() {
  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-6 lg:px-8">
      <section className="flex flex-col-reverse lg:flex-row mt-12 lg:mt-24">
        <div className="w-full lg:w-1/2 bg-gray-200 p-4">
          <Image src={""} alt="" />g
        </div>
        <div className="flex flex-col w-full lg:w-1/2 lg:max-w-md p-4">
          <h1 className="text-lg text-center sm:text-left font-semibold text-[#720D1C]">
            Servicios
          </h1>
          <h1 className="text-2xl lg:text-3xl text-center sm:text-left font-bold text-gray-900 my-4">
            Descubrí cómo potenciamos tu marca en la vía pública, radio y
            televisión
          </h1>
          <p>
            ¡Hacé que tu marca brille en cada esquina, en cada onda y en cada
            pantalla!
          </p>
        </div>
      </section>

      <section className="flex flex-col-reverse lg:flex-row-reverse lg:justify-between mt-12 lg:mt-24">
        <div className="w-full lg:w-1/2 bg-gray-200 p-4">
          <Image src={""} alt="" />
        </div>
        <div className="flex flex-col w-full lg:w-1/2 lg:max-w-md p-4">
          <h1 className="text-lg text-center sm:text-left font-semibold text-[#720D1C]">
            Clientes
          </h1>
          <h1 className="text-2xl lg:text-3xl text-center sm:text-left font-bold text-gray-900 my-4">
            Conocé a algunas de las marcas con las que hemos tenido el placer de
            trabajar
          </h1>
          <p>
            Descubrí las historias de éxito detrás de nuestras colaboraciones
            con marcas líderes.
          </p>
        </div>
      </section>

      <section className="flex flex-col-reverse lg:flex-row mt-12 lg:mt-24">
        <div className="w-full lg:w-1/2 bg-gray-200 p-4">
          <Image src={""} alt="" />
        </div>
        <div className="flex flex-col w-full lg:w-1/2 lg:max-w-md p-4">
          <h1 className="text-lg  text-center sm:text-left font-semibold text-[#720D1C]">
            Sobre Nosotros
          </h1>
          <h1 className="text-2xl lg:text-3xl text-center sm:text-left font-bold text-gray-900 my-4">
            Descubrí nuestra historia y lo que nos hace únicos en el mercado
            publicitario.
          </h1>
          <p>
            ¡Conocé el equipo detrás de las campañas más exitosas del mercado
            publicitario!
          </p>
        </div>
      </section>
    </div>
  );
}

export default Features;
