"use client";

import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  User,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { useSession, signOut } from "next-auth/react";

import { Logo } from "./icons/Logo.jsx";
import DropDownMenu from "./DropDownMenu";
import { Cart } from "@/components/Cart";

const menuItems = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Productos",
    href: "/productos",
  },
  {
    label: "Arriendos",
    href: "/arriendos",
  },
  {
    label: "Mantencion",
    href: "/mantencion",
  },
];

export default function HeaderNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = useSession();

  const handleMenuOpenClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignOutClick = async () => {
    await signOut({ callbackUrl: "/" });
  };

  return (
    <Navbar shouldHideOnScroll isMenuOpen={isMenuOpen}>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
        onClick={handleMenuOpenClick}
      />

      <NavbarContent className="flex gap-4" justify="end">
        <NavbarBrand className="hidden sm:flex">
          <Logo />
          <a className="text-[29px] font-biker" href="/">
            Master Bikes
          </a>
        </NavbarBrand>
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
          {session?.user ? (
            <Dropdown>
              <DropdownTrigger>
                <div>
                  <User
                    as="button"
                    avatarProps={{
                      isBordered: true,
                      src: session.user?.image ?? "",
                    }}
                    className="hidden md:flex transition-transform"
                    description={session.user?.email ?? ""}
                    name={session.user?.name ?? ""}
                  />
                  <Avatar
                    isBordered
                    color="primary"
                    src={session.user?.image ?? ""}
                    className="flex md:hidden"
                  />
                </div>
              </DropdownTrigger>
              <DropdownMenu aria-label="User Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-bold">Bienvenido</p>
                  <p className="font-bold">{session.user.name}</p>
                </DropdownItem>
                <DropdownItem key="settings">My Settings</DropdownItem>
                <DropdownItem key="team_settings">Team Settings</DropdownItem>
                <DropdownItem key="analytics">Analytics</DropdownItem>
                <DropdownItem key="system">System</DropdownItem>
                <DropdownItem key="configurations">Configurations</DropdownItem>
                <DropdownItem key="help_and_feedback">
                  Help & Feedback
                </DropdownItem>
                <DropdownItem
                  key="logout"
                  color="danger"
                  onClick={handleSignOutClick}
                >
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : (
            <DropDownMenu />
          )}
        </NavbarItem>

        <NavbarItem>
          <Cart />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={"foreground"}
              href={item.href}
              size="lg"
              onClick={handleMenuOpenClick}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
