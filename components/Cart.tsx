import React from "react";
import { Button } from "@nextui-org/react";
import { CiShoppingCart } from "react-icons/ci";

import { useCartComponent } from "@/hooks/useCartComponent";

export function Cart() {
  const { cartIsOpen, openCart, closeCart } = useCartComponent();

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

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
