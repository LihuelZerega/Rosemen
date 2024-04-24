"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Dialog } from "@headlessui/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/modal";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import { MdWhatsapp, MdOutlineEmail } from "react-icons/md";
import RosemenLogoMobile from "@/images/Logos/R-negra.png";
import RosemenLogoWhiteMobile from "@/images/Logos/R-Blanca.png";
import RosemenLogoDesktop from "@/images/Logos/rosemen-512-Negro-sin-fondo.png";
import RosemenLogoWhiteDesktop from "@/images/Logos/rosemen-512-Blanco-sin-fondo.png";
import ModalContactForm from "@/app/contacto/subcomponents/ModalContactForm";

function NavBar() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const logoMobile = isHomePage ? RosemenLogoMobile : RosemenLogoWhiteMobile;
  const logoDesktop = isHomePage ? RosemenLogoDesktop : RosemenLogoWhiteDesktop;

  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/servicios" },
    { name: "Sobre Nosotros", href: "/sobrenosotros" },
    { name: "Contacto", href: "/contacto" },
  ];

  return (
    <div className="bg-transparent">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Rosemen</span>
              <Image
                className="h-8 w-auto block lg:hidden"
                src={logoMobile}
                alt={
                  isHomePage ? "RosemenLogoMobile" : "RosemenLogoWhiteMobile"
                }
              />
              <Image
                className="h-8 w-auto hidden lg:block"
                src={logoDesktop}
                alt={
                  isHomePage ? "RosemenLogoDesktop" : "RosemenLogoWhiteDesktop"
                }
              />
            </a>
          </div>

          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-semibold leading-6 ${
                  isHomePage
                    ? "text-gray-800 hover:text-gray-900"
                    : "text-gray-100 hover:text-gray-200"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex flex-row-reverse space-x-3 lg:space-x-0 lg:flex-row lg:flex-1 lg:justify-end">
            <button
              type="button"
              className="lg:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <HiMenu
                className={`h-6 w-6 ${
                  isHomePage
                    ? "text-gray-800 hover:text-gray-900"
                    : "text-gray-100 hover:text-gray-200"
                }`}
                aria-hidden="true"
              />
            </button>
            <div className="flex">
              <button
                className="bg-red-800 hover:bg-red-900 rounded-md py-1 px-2 mr-4 lg:mr-0 lg:py-2 lg:px-3 text-sm font-semibold leading-6 text-white"
                onClick={onOpen}
              >
                Contactanos
              </button>
              <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="center"
                className="max-w-sm md:max-w-lg py-3 mx-3"
              >
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalHeader className="flex flex-col items-center gap-1">
                        <div className="h-12 w-12">
                          <Image
                            src={RosemenLogoMobile}
                            width={50}
                            height={50}
                            alt="RosemenLogoMobile"
                          />
                        </div>
                        <h1 className="text-sm md:text-base text-center mt-1">
                          Completá el siguiente formulario para <br /> que
                          podamos contactarte!
                        </h1>
                      </ModalHeader>
                      <ModalBody>
                        <ModalContactForm />
                      </ModalBody>
                    </>
                  )}
                </ModalContent>
              </Modal>
            </div>
          </div>
        </nav>

        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Rosemen</span>
                <Image className="h-8 w-auto" src={RosemenLogoMobile} alt="" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <HiOutlineX className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
}

export default NavBar;
