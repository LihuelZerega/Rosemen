"use client";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { FaPhone } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    phonenumber: "",
    mensaje: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, lastname, phonenumber, mensaje } = formData;

    const emailSubject = encodeURIComponent(
      "Consulta desde el formulario de contacto"
    );
    const emailBody = encodeURIComponent(
      `Nombre: ${name}\nApellido: ${lastname}\nNúmero Telefónico: ${phonenumber}\nMensaje: ${mensaje}`
    );
    const mailtoUrl = `mailto:info@rosemen.com.ar?subject=${emailSubject}&body=${emailBody}`;

    window.location.href = mailtoUrl;
  };

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
      className="flex flex-col md:flex-row-reverse md:items-start md:justify-around w-full py-12 md:max-w-6xl md:mx-auto p-6 sm:px-6 lg:px-8"
    >
      <div className="flex flex-col w-full md:max-w-md">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row w-full sm:gap-2 pt-4">
            <div className="w-full">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-5 text-gray-900"
              >
                Nombre
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-red-800 focus:ring-red-700 sm:text-sm sm:leading-5"
                placeholder="Ingresá tu Nombre"
              />
            </div>
            <div className="w-full mt-4 md:mt-0">
              <label
                htmlFor="lastname"
                className="block text-sm font-medium leading-5 text-gray-900"
              >
                Apellido
              </label>
              <input
                id="lastname"
                name="lastname"
                type="text"
                value={formData.lastname}
                onChange={handleChange}
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-red-800 focus:ring-red-700 sm:text-sm sm:leading-5"
                placeholder="Ingresá tu Apellido"
              />
            </div>
          </div>

          <div className="w-full mt-4">
            <label
              htmlFor="phonenumber"
              className="block text-sm font-medium leading-5 text-gray-900"
            >
              Número Telefónico
            </label>
            <input
              id="phonenumber"
              name="phonenumber"
              type="tel"
              value={formData.phonenumber}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-red-800 focus:ring-red-700 sm:text-sm sm:leading-5"
              placeholder="Ingresá tu Número de Teléfono"
            />
          </div>

          <div className="w-full mt-4">
            <label
              htmlFor="mensaje"
              className="block text-sm font-medium leading-5 text-gray-900"
            >
              Mensaje
            </label>
            <input
              id="mensaje"
              name="mensaje"
              type="text"
              value={formData.mensaje}
              onChange={handleChange}
              className="w-full mt-1 px-3 pt-4 pb-20 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-red-800 focus:ring-red-700 sm:text-sm sm:leading-5"
              placeholder="Ingresá tu mensaje"
            />
          </div>

          <div className="w-full mt-6">
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-800 hover:bg-red-900 focus:outline-none focus:border-red-900 focus:ring-red-500 transition duration-150 ease-in-out"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>

      <h1 className="block md:hidden text-xl font-bold text-center my-8 pt-8 border-t-1 md:border-t-0 md:border-r-1 border-gray-200">
        Datos de Contacto
      </h1>
      <div className="relative grid grid-cols-1 text-center gap-y-8 justify-center gap-x-12 mt-6 md:mt-0">
        <div className="col-span-1">
          <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow mb-4">
            <span className="text-xl font-semibold text-[#720D1C]">
              <FaPhone />
            </span>
          </div>
          <a
            href="tel:+5491160161083"
            title=""
            className="mt-6 text-base text-center font-semibold leading-tight text-gray-900 md:mt-10"
          >
            {" "}
            +54 9 11-6016-1083{" "}
          </a>
        </div>
        <div className="col-span-1">
          <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow mb-4">
            <span className="text-xl font-semibold text-[#720D1C]">
              <FaPhone />
            </span>
          </div>
          <a
            href="tel:+5491128244070"
            title=""
            className="mt-6 text-base text-center font-semibold leading-tight text-gray-900 md:mt-10"
          >
            {" "}
            +54 9 11-2824-4070{" "}
          </a>
        </div>
        <div className="col-span-1">
          <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow mb-4">
            <span className="text-xl font-semibold text-[#720D1C]">
              <MdOutlineEmail />
            </span>
          </div>
          <a
            href="mailto:info@rosemen.com.ar"
            title=""
            className="mt-6 text-base text-center font-semibold leading-tight text-gray-900 md:mt-10"
          >
            {" "}
            info@rosemen.com.ar{" "}
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default ContactForm;
