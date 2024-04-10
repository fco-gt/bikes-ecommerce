"use client";

import React, { useEffect, useState } from "react";
import { Input } from "@nextui-org/input";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  Divider,
} from "@nextui-org/react";
import Link from "next/link";

import Sidebar from "@/components/sidebar";
import ProductList from "@/components/ProductList";

import { CiSearch } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";

export default function Page() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="mt-0 md:mt-9">
      <section className="flex items-center justify-between">
        <div className="">
          <h3 className="text-[#26BCC6] font-semibold text-[35px]">
            Bicicletas
          </h3>
          <strong className="text-[25px]">99999 Resultados</strong>
        </div>

        <div>
          <Input
            isClearable
            radius="lg"
            placeholder="Buscar"
            startContent={<CiSearch size={25} />}
            className="hidden md:flex"
          />
        </div>

        <div>
          <Dropdown
            showArrow
            radius="sm"
            classNames={{
              base: "before:bg-default-200",
              content: "p-0 border-small border-divider bg-background",
            }}
          >
            <DropdownTrigger>
              <Button
                variant="ghost"
                disableRipple
                endContent={<MdOutlineKeyboardArrowDown size={25} />}
              >
                Ordenar por
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Custom item styles"
              className="p-3"
              itemClasses={{
                base: [
                  "rounded-md",
                  "text-default-500",
                  "transition-opacity",
                  "data-[hover=true]:text-foreground",
                  "data-[hover=true]:bg-default-100",
                  "dark:data-[hover=true]:bg-default-50",
                  "data-[selectable=true]:focus:bg-default-50",
                  "data-[pressed=true]:opacity-70",
                  "data-[focus-visible=true]:ring-default-500",
                ],
              }}
              disallowEmptySelection
            >
              <DropdownSection aria-label="Iniciar Sessión">
                <DropdownItem key="session">
                  <p>Precio ascendente</p>
                </DropdownItem>
                <DropdownItem key="support">
                  <p>Precio descendente</p>
                </DropdownItem>
              </DropdownSection>
            </DropdownMenu>
          </Dropdown>
        </div>
      </section>

      <Divider className="mt-2" />

      <div className="flex flex-col md:flex-row">
        <Sidebar />
        <ProductList />
      </div>

      {isVisible ? (
        <button
          onClick={scrollToTop}
          type="button"
          className="fixed z-[9999999] bottom-5 right-5 p-2 bg-[#26bcc6] border-zinc-700 border-2 text-[#252525] rounded-full focus:outline-none transition duration-500 ease-in-out transform opacity-100 scale-100 px-9"
        >
          <FaArrowUp size={15} />
        </button>
      ) : (
        <button
          type="button"
          className="fixed z-[9999999] bottom-5 right-5 p-2 bg-[#26bcc6] text-white rounded-full focus:outline-none transition duration-500 ease-in-out transform opacity-0 scale-50"
        >
          <FaArrowUp size={15} />
        </button>
      )}
    </div>
  );
}
