import React from "react";
import EmblaCarousel from "@/components/EmblaCarousel";

import "@/styles/embla.css";

import Products from "@/sections/main/products";

export default function Home() {
  return (
    <>
      <EmblaCarousel />
      <Products />
    </>
  );
}
