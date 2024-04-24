import React from "react";

function Features() {
  return (
    <div className="max-w-6xl mx-auto p-6 sm:px-6 lg:px-8 pt-12 md:mt-16">
      <div className="flex flex-col md:flex-row items-start">
        <div className="w-full md:w-1/2 px-0 md:px-4">
          <h1 className="text-center md:text-left text-2xl md:text-3xl font-semibold text-gray-900">
            Quiénes Somos
          </h1>
          <p className="text-lg font-medium mt-3 text-neutral-600">
            Hace más de 20 años que trabajamos en el mercado publicitario. Somos
            una agencia boutique especializada en pautar gran parte del
            entretenimiento y espectáculo generados en nuestro país.
          </p>
        </div>
        <div className="w-full md:w-1/2 h-full px-0 md:px-4 flex items-center justify-center">Imagen de Referencia</div>
      </div>
      <div className="flex flex-col md:flex-row-reverse items-start my-12 md:my-16">
        <div className="w-full md:w-1/2 px-0 md:px-4">
          <h1 className="text-center md:text-left text-2xl md:text-3xl font-semibold text-gray-900">
            Nuestra Experiencia
          </h1>
          <p className="text-lg font-medium mt-3 text-neutral-600">
            Durante estas dos décadas, hemos establecido sólidos contactos con
            diversos proveedores de medios, lo que nos permite tener una
            influencia significativa en los costos de nuestras campañas
            publicitarias.
          </p>
        </div>
        <div className="w-full md:w-1/2 h-full px-0 md:px-4 flex items-center justify-center">Imagen de Referencia</div>
      </div>
      <div className="flex flex-col md:flex-row items-start">
        <div className="w-full md:w-1/2 px-0 md:px-4">
          <h1 className="text-center md:text-left text-2xl md:text-3xl font-semibold text-gray-900">
            Enfoque Competitivo
          </h1>
          <p className="text-lg font-medium mt-3 text-neutral-600">
            Reconocemos que el mercado publicitario es altamente competitivo.
            Por ello, nos destacamos por nuestra capacidad para ofrecer
            soluciones efectivas y rentables a nuestros clientes.
          </p>
        </div>
        <div className="w-full md:w-1/2 h-full px-0 md:px-4 flex items-center justify-center">Imagen de Referencia</div>
      </div>
    </div>
  );
}

export default Features;
