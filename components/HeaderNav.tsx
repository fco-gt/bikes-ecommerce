"use client";

import React from "react";
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
} from "@nextui-org/react";
import { useSession, signOut } from "next-auth/react";

import { Logo } from "./icons/Logo.jsx";
import DropDownMenu from "./DropDownMenu";
import { Cart } from "@/components/Cart";

export default function HeaderNav() {
  const { data: session } = useSession();

  const handleSignOutClick = async () => {
    await signOut({ callbackUrl: "/" });
  };

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
          {session?.user ? (
            <Dropdown>
              <DropdownTrigger>
                <User
                  as="button"
                  avatarProps={{
                    isBordered: true,
                    src: session.user?.image ?? "",
                  }}
                  className="transition-transform"
                  description={session.user?.email ?? ""}
                  name={session.user?.name ?? ""}
                />
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
    </Navbar>
  );
}
