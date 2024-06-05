import React, { useId, useState } from "react";
import { Button } from "@nextui-org/react";
import { CiShoppingCart } from "react-icons/ci";

import { useCartComponent } from "@/hooks/useCartComponent";

export function Cart() {
  const { cartIsOpen, openCart, closeCart } = useCartComponent();

  console.log(cartIsOpen);

  const handleButtonClick = () => {
    if (cartIsOpen) {
      closeCart();
    } else {
      openCart();
    }
  };

  return (
    <>
      <Button
        isIconOnly
        variant="light"
        onClick={handleButtonClick}
        aria-label="Open cart"
      >
        <CiShoppingCart size={35} />
      </Button>
    </>
  );
}