import { createContext, useReducer, useState } from "react";
import { cartReducer, cartInitialState } from "@/reducers/cart";

function useCartReducer() {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const addToCart = (product) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });

  const removeFromCart = (id) =>
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { id },
    });

  const clearCart = () =>
    dispatch({
      type: "CLEAR_CART",
    });

  return {
    state,
    addToCart,
    removeFromCart,
    clearCart,
  };
}

export const CartContext = createContext();
export function CartProvider({ children }) {
  const { state, addToCart, removeFromCart, clearCart } = useCartReducer();

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        clearCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
