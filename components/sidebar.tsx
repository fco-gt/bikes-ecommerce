"use client";

import React, { useState, useId, ChangeEvent } from "react";
import PriceSlider from "@/components/PriceSlider";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  Checkbox,
  Select,
  SelectItem,
} from "@nextui-org/react";

import { useFilters } from "@/hooks/useFilter";
import { Filters } from "@/types/filters";

export default function Sidebar() {
  const { setFilters } = useFilters();
  const [type, setType] = useState("all");
  const [size, setSize] = useState("all");
  const [isStock, setStock] = useState(true);
  const categoryId = useId();
  const sizeId = useId();

  const handleTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (!e.target.value) {
      setType("all");
      setFilters((prevState: Filters) => ({
        ...prevState,
        category: "all",
      }));
      return;
    }

    setType(e.target.value);
    setFilters((prevState: Filters) => ({
      ...prevState,
      category: e.target.value,
    }));
  };

  const handleSizeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (!e.target.value) {
      setSize("all");
      setFilters((prevState: Filters) => ({
        ...prevState,
        age: "all",
      }));
      return;
    }

    setSize(e.target.value);
    setFilters((prevState: Filters) => ({
      ...prevState,
      age: e.target.value,
    }));
  };

  const handleStockChange = (checked: boolean) => {
    setStock(checked);
    setFilters((prevState: Filters) => ({
      ...prevState,
      stock: checked,
    }));
  };

  return (
    <aside className="text-white w-auto md:w-[35%] mt-5 flex flex-col mx-auto ">
      <PriceSlider />

      <div className="mt-9">
        <Select
          label="Tipo de bicicleta"
          variant="bordered"
          placeholder="Selecciona el tipo de bicicleta"
          selectedKeys={[type]}
          className="max-w-xs"
          onChange={handleTypeChange}
          id={categoryId}
        >
          <SelectItem key="mountain" value="mountain">
            Montaña
          </SelectItem>
          <SelectItem key="road" value="road">
            Paseo
          </SelectItem>
          <SelectItem key="urban" value="urban">
            Urbana
          </SelectItem>
          <SelectItem key="electric" value="electric">
            Eléctrica
          </SelectItem>
          <SelectItem key="tricicle" value="tricicle">
            Triciclo
          </SelectItem>
        </Select>
      </div>

      <div className="mt-5">
        <Select
          label="Tamaño"
          variant="bordered"
          placeholder="Selecciona el tamaño"
          selectedKeys={[size]}
          className="max-w-xs"
          onChange={handleSizeChange}
          id={sizeId}
        >
          <SelectItem key="adulto">Adulto</SelectItem>
          <SelectItem key="niño">Niño</SelectItem>
        </Select>
      </div>

      <Checkbox
        isSelected={isStock}
        onValueChange={handleStockChange}
        className="mt-5"
      >
        Stock disponible
      </Checkbox>
    </aside>
  );
}
