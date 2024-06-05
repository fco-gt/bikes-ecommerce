import { createContext, useState } from "react";

export const CartComponentContext = createContext();

export function CartComponentProvider({ children }) {
  const [cartIsOpen, setCartIsOpen] = useState({
    isOpen: false,
  });

  return (
    <CartComponentContext.Provider
      value={{
        cartIsOpen,
        setCartIsOpen,
      }}
    >
      {children}
    </CartComponentContext.Provider>
  );
}
