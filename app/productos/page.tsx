"use client";

// React & Next
import React, { useEffect, useState } from "react";
import { Divider } from "@nextui-org/react";

// Components
import ProductList from "@/components/ProductList";
import Sidebar from "@/components/sidebar";
import Filters from "@/components/filter";

// API
import bikesApi from "@/services/bikes";

// Utils
import { Bike } from "@/types/bikes";
import { useFilters } from "@/hooks/useFilter";

export default function Page() {
  const [bikes, setBikes] = useState<Bike[]>([]);
  const { filterBike } = useFilters();

  useEffect(() => {
    bikesApi.getBikes().then((bikes) => {
      setBikes(bikes.data);
    });
  }, []);

  return (
    <div className="mt-0 md:mt-9">
      <section className="flex items-center justify-between">
        <div className="">
          <h3 className="text-[#26BCC6] font-semibold text-[35px]">
            Bicicletas
          </h3>
          <strong className="text-[25px]">
            {filterBike(bikes).length} Resultados
          </strong>
        </div>

        <Filters />
      </section>

      <Divider className="mt-2" />

      <div className="flex flex-col md:flex-row">
        <Sidebar />
        <ProductList products={filterBike(bikes)} />
      </div>
    </div>
  );
}
