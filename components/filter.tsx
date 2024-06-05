import React, { useState, ChangeEvent } from "react";
import { Input, Select, SelectItem } from "@nextui-org/react";
import { CiSearch } from "react-icons/ci";

import { useFilters } from "@/hooks/useFilter";
import { Filters } from "@/types/filters";

export default function Filter() {
  const { setFilters } = useFilters();
  const [isAscending, setIsAscending] = useState("asce");
  const [name, setName] = useState("all");

  const handleTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (!e.target.value) {
      setIsAscending("asce");
      setFilters((prevState: Filters) => ({
        ...prevState,
        isFilterAscending: true,
      }));
      return;
    }

    setIsAscending(e.target.value);
    setFilters((prevState: Filters) => ({
      ...prevState,
      isFilterAscending: e.target.value === "asce",
    }));
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setName("all");
      setFilters((prevState: Filters) => ({
        ...prevState,
        name: "all",
      }));
      return;
    }

    setName(e.target.value);
    setFilters((prevState: Filters) => ({
      ...prevState,
      name: e.target.value,
    }));
  };

  return (
    <>
      <div>
        <Input
          variant="bordered"
          radius="lg"
          placeholder="Buscar"
          startContent={<CiSearch size={25} />}
          className="hidden md:flex"
          onChange={handleNameChange}
        />
      </div>

      <div className="w-52">
        <Select
          label="Ordenar por precio"
          variant="bordered"
          placeholder="Ordenar por precio descendente o ascendente"
          selectedKeys={[isAscending]}
          className="max-w-xs"
          onChange={handleTypeChange}
          id={isAscending}
        >
          <SelectItem key="asce" value="ascendente">
            Ascendente
          </SelectItem>
          <SelectItem key="desc" value="descendente">
            Descendente
          </SelectItem>
        </Select>
      </div>
    </>
  );
}
