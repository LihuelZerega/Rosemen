"use client";
import React, { useState } from "react";
import { FaPhone } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

function ModalContactForm() {
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

  return (
    <div>
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
    </div>
  );
}

export default ModalContactForm;
