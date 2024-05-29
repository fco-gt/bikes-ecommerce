import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  Input,
} from "@nextui-org/react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function Filter() {
  return (
    <>
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
    </>
  );
}
