"use client";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollButton() {
  const [isVisible, setIsVisible] = useState(false);

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
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
