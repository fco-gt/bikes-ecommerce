"use client";

import PriceSlider from "@/components/PriceSlider";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  Checkbox,
} from "@nextui-org/react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function Sidebar() {
  return (
    <aside className="text-white w-auto md:w-[35%] mt-5 flex flex-col mx-auto ">
      <PriceSlider />

      <div className="mt-9">
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
              Tipo de bicicleta
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
              <DropdownItem key="Tricicle">
                <p>Triciclo</p>
              </DropdownItem>
              <DropdownItem key="Mountain">
                <p>Bicicleta de montaña</p>
              </DropdownItem>
              <DropdownItem key="Travel">
                <p>Bicleta de paseo</p>
              </DropdownItem>
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
      </div>

      <div className="mt-5">
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
              Talla de bicicleta
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
              <DropdownItem key="Adult">
                <p>Adulto</p>
              </DropdownItem>
              <DropdownItem key="Children">
                <p>Niño</p>
              </DropdownItem>
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
      </div>

      <Checkbox defaultSelected className="mt-5">
        Stock disponible
      </Checkbox>
    </aside>
  );
}
