"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

export default function App() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <section className="max-w-6xl mx-auto px-6 sm:px-6 lg:px-8 mt-6">
      <div className="mt-12">
        <h1 className="text-[#720D1C] text-2xl lg:text-3xl text-center font-bold">
          Preguntas Frecuentes
        </h1>
        <p className="text-center text-base mt-3">
          ¿No encontras la respuesta que buscas? Comunicate <br /> con nuestro
          equipo de{" "}
          <span className="text-[#720D1C] hover:font-medium cursor-pointer">
            atención al cliente
          </span>
          .
        </p>
      </div>
      
      <div className="mx-auto max-w-3xl mt-6">
        <Accordion>
          <AccordionItem key="1" aria-label="Pregunta 1" title="Pregunta 1">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="2" aria-label="Pregunta 2" title="Pregunta 2">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="3" aria-label="Pregunta 3" title="Pregunta 3">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="4" aria-label="Pregunta 4" title="Pregunta 4">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="5" aria-label="Pregunta 5" title="Pregunta 5">
            {defaultContent}
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
