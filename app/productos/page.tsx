"use client";

// React & Next
import React, { useContext, useEffect, useState } from "react";
import { Divider } from "@nextui-org/react";

// Components
import ProductList from "@/components/ProductList";
import Sidebar from "@/components/sidebar";
import Filters from "@/components/filter";

// API
import bikesApi from "@/services/bikes";

// Icons
import { FaArrowUp } from "react-icons/fa";
import { Bike } from "@/types/bikes";
import { useFilters } from "@/hooks/useFilter";

export default function Page() {
  const [bikes, setBikes] = useState<Bike[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const { filterBike } = useFilters();

  // Fetch bikes
  useEffect(() => {
    bikesApi.getBikes().then((bikes) => {
      setBikes(bikes.data);
    });
  }, []);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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

      {isVisible ? (
        <button
          onClick={scrollToTop}
          type="button"
          className="fixed z-[9999999] bottom-5 right-5 p-2 bg-[#26bcc6] border-zinc-700 border-2 text-[#252525] rounded-full focus:outline-none transition duration-500 ease-in-out transform opacity-100 scale-100 px-9"
        >
          <FaArrowUp size={15} />
        </button>
      ) : (
        <button
          type="button"
          className="fixed z-[9999999] bottom-5 right-5 p-2 bg-[#26bcc6] text-white rounded-full focus:outline-none transition duration-500 ease-in-out transform opacity-0 scale-50"
        >
          <FaArrowUp size={15} />
        </button>
      )}
    </div>
  );
}
