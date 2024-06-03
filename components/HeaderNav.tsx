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
import { Cart } from "@/components/Cart";

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
          <Cart />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
