export const cartInitialState =
  typeof window !== "undefined"
    ? JSON.parse(window.localStorage.getItem("cart")) || []
    : [];

const ACTION_CART_TYPES = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  CLEAR_CART: "CLEAR_CART",
};

export const updateLocalStorage = (state) => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem("cart", JSON.stringify(state));
  }
};

export const cartReducer = (state, action) => {
  const {
    type: actionType,
    payload: actionPayload,
    bikesTotal: actionBikesTotal,
  } = action;

  switch (actionType) {
    case ACTION_CART_TYPES.ADD_TO_CART: {
      const { id } = actionPayload;
      const productIndex = state.findIndex((item) => item.id === id);

      if (productIndex >= 0) {
        const newCart = structuredClone(state);
        newCart[productIndex].quantity += actionBikesTotal;
        return newCart;
      }

      const newState = [
        ...state,
        {
          ...actionPayload,
          quantity: actionBikesTotal,
        },
      ];

      updateLocalStorage(newState);

      return newState;
    }

    case ACTION_CART_TYPES.REMOVE_FROM_CART: {
      const { id } = actionPayload;
      const productIndex = state.findIndex((item) => item.id === id);

      console.log(productIndex, state);

      if (productIndex >= 0) {
        const newCart = structuredClone(state);
        if (newCart[productIndex].quantity > 1) {
          newCart[productIndex].quantity -= 1;
        } else {
          newCart.splice(productIndex, 1);
        }
        updateLocalStorage(newCart);
        return newCart;
      }

      return state;
    }

    case ACTION_CART_TYPES.CLEAR_CART: {
      updateLocalStorage([]);
      return [];
    }
  }

  return state;
};
