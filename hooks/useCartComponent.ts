import { useContext } from "react";

import { CartComponentContext } from "@/context/cartComponent";

export function useCartComponent() {
  const { cartIsOpen, setCartIsOpen } = useContext(CartComponentContext);

  const openCart = () => {
    setCartIsOpen(true);
  };

  const closeCart = () => {
    setCartIsOpen(false);
  };

  return { cartIsOpen, openCart, closeCart };
}
