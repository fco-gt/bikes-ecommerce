import { createContext, useState } from "react";

export const FiltersContext = createContext();

export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    name: "all",
    category: "all",
    age: "all",
    isFilterAscending: false,
    minPrice: 15000,
    maxPrice: 350000,
    stock: true,
  });

  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
