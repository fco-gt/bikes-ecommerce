export const cartInitialState =
  typeof window !== 'undefined' ? JSON.parse(window.localStorage.getItem("cart")) || [] : [];

const ACTION_CART_TYPES = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  CLEAR_CART: "CLEAR_CART",
};

export const updateLocalStorage = (state) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem("cart", JSON.stringify(state));
  }
};

export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action;

  switch (actionType) {
    case ACTION_CART_TYPES.ADD_TO_CART: {
      const { id } = actionPayload;
      const productIndex = state.findIndex((item) => item.id === id);

      if (productIndex >= 0) {
        const newCart = structuredClone(state);
        newCart[productIndex].quantity += 1;
        return newCart;
      }

      const newState = [
        ...state,
        {
          ...actionPayload,
          quantity: 1,
        },
      ];

      updateLocalStorage(newState);

      return newState;
    }

    case ACTION_CART_TYPES.REMOVE_FROM_CART: {
      const { id } = actionPayload;
      const newState = state.filter((item) => item.id !== id);

      updateLocalStorage(newState);

      return newState;
    }

    case ACTION_CART_TYPES.CLEAR_CART: {
      updateLocalStorage([])
      return [];
    }
  }

  return state;
};
