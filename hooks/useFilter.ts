import { useContext } from "react";

import { FiltersContext } from "@/context/filters";
import { Bike } from "@/types/bikes";

export function useFilters() {
  const { filters, setFilters } = useContext(FiltersContext);

  const filterBike = (bikes: Bike[]) => {
    return bikes.filter((bike) => {
      console.log(bike.price, filters.price, filters.category, filters.age);

      return (
        bike.price >= filters.minPrice &&
        bike.price <= filters.maxPrice &&
        (filters.category === "all" || bike.category === filters.category) &&
        (filters.age === "all" || bike.age === filters.age) &&
        filters.stock === bike.stock > 0
      );
    });
  };

  return { filterBike, filters, setFilters };
}
