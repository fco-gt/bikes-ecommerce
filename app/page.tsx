"use client";

import React, { useState, useEffect } from "react";
import EmblaCarousel from "@/components/EmblaCarousel";

import "@/styles/embla.css";

import Products from "@/sections/main/products";

import { FaArrowUp } from "react-icons/fa";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

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
    <>
      <EmblaCarousel />
      <Products />
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
    </>
  );
}
