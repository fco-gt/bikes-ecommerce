import { useContext } from "react";

import { FiltersContext } from "@/context/filters";
import { Bike } from "@/types/bikes";

export function useFilters() {
  const { filters, setFilters } = useContext(FiltersContext);

  const filterBike = (bikes: Bike[]) => {
    return bikes
      .filter((bike) => {
        return (
          bike.price >= filters.minPrice &&
          bike.price <= filters.maxPrice &&
          (filters.name === "all" || bike.name.includes(filters.name)) &&
          (filters.category === "all" || bike.category === filters.category) &&
          (filters.age === "all" || bike.age === filters.age) &&
          filters.stock === bike.stock > 0
        );
      })
      .sort((a, b) => {
        if (filters.isFilterAscending === true) {
          return a.price - b.price;
        }
        return b.price - a.price;
      });
  };

  return { filterBike, filters, setFilters };
}
