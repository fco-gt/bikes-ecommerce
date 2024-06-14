import React from "react";
import { Button, Badge } from "@nextui-org/react";
import { CiShoppingCart } from "react-icons/ci";

import { useCart } from "@/hooks/useCart";
import { useCartComponent } from "@/hooks/useCartComponent";

interface CartItemProps {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

export function Cart() {
  const { cart } = useCart();
  const { cartIsOpen, openCart, closeCart } = useCartComponent();

  // Cart total items
  const totalItems = cart.reduce(
    (acc: number, product: CartItemProps) => acc + product.quantity,
    0
  );

  const handleButtonClick = () => {
    if (cartIsOpen) {
      closeCart();
    } else {
      openCart();
    }
  };

  return (
    <>
      <Badge
        isInvisible={totalItems === 0}
        content={totalItems}
        shape="circle"
        color="danger"
      >
        <Button
          isIconOnly
          variant="light"
          onClick={handleButtonClick}
          aria-label="Open cart"
        >
          <CiShoppingCart size={35} />
        </Button>
      </Badge>
    </>
  );
}
