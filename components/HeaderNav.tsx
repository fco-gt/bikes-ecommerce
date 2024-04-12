"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Badge,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Accordion,
  AccordionItem,
  Avatar,
} from "@nextui-org/react";

import { Logo } from "./icons/Logo.jsx";
import DropDownMenu from "./DropDownMenu";
import { CiShoppingCart } from "react-icons/ci";
import Image from "next/image.js";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function HeaderNav() {
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <Logo />
        <a className="hidden sm:flex text-[29px] font-biker" href="/">
          Master Bikes
        </a>
      </NavbarBrand>
      <NavbarContent className="flex gap-4" justify="end">
        <NavbarItem className="hidden sm:flex">
          <Link color="foreground" href="/" className="link-hover">
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <Link color="foreground" href="/productos" className="link-hover">
            Productos
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <Link color="foreground" href="/arriendos" className="link-hover">
            Arriendos
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <Link color="foreground" href="/mantencion" className="link-hover">
            Mantencion
          </Link>
        </NavbarItem>

        <NavbarItem className="ml-5 mr-5">
          <DropDownMenu />
        </NavbarItem>

        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button
                isIconOnly
                variant="light"
                size="lg"
                radius="sm"
                className="flex items-center justify-center"
              >
                <Badge color="danger" content={5}>
                  <CiShoppingCart size={35} />
                </Badge>
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions" closeOnSelect={false}>
              <DropdownItem key="acordion">
                <Accordion>
                  <AccordionItem
                    key="1"
                    aria-label="Accordion 1"
                    title="Cruiser Classic 2000"
                    startContent={
                      <Avatar radius="sm" src="/imgs/catalog/1.png" size="lg" />
                    }
                  >
                    <p className="flex flex-row items-center mr-5">
                      <Button isIconOnly variant="light" className="mr-2">
                        <FaMinus />
                      </Button>
                      {1}
                      <Button isIconOnly variant="light" className="ml-2">
                        <FaPlus />
                      </Button>
                    </p>
                  </AccordionItem>
                  <AccordionItem
                    key="2"
                    aria-label="Accordion 2"
                    title="Montaña Mistress 5000"
                    startContent={
                      <Avatar radius="sm" src="/imgs/catalog/2.png" size="lg" />
                    }
                  >
                    <p className="flex flex-row items-center mr-5">
                      <Button isIconOnly variant="light" className="mr-2">
                        <FaMinus />
                      </Button>
                      {2}
                      <Button isIconOnly variant="light" className="ml-2">
                        <FaPlus />
                      </Button>
                    </p>
                  </AccordionItem>
                  <AccordionItem
                    key="3"
                    aria-label="Accordion 3"
                    title="Cruiser Classic 2000"
                    startContent={
                      <Avatar radius="sm" src="/imgs/catalog/3.png" size="lg" />
                    }
                  >
                    <p className="flex flex-row items-center mr-5">
                      <Button isIconOnly variant="light" className="mr-2">
                        <FaMinus />
                      </Button>
                      {2}
                      <Button isIconOnly variant="light" className="ml-2">
                        <FaPlus />
                      </Button>
                    </p>
                  </AccordionItem>
                </Accordion>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
