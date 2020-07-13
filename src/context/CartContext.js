import React, { createContext, useReducer } from "react";
import { cartReducer, sumItems } from "../cart/cartReducer";
import { types } from "../types/types";

export const CartContext = createContext();

const cartStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];
const initialState = {
  cartItems: cartStorage,
  ...sumItems(cartStorage),
};

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const increase = (payload) => {
    dispatch({
      type: types.increase,
      payload,
    });
  };

  const decrease = (payload) => {
    dispatch({ type: types.decrease, payload });
  };

  const addProduct = (payload) => {
    dispatch({ type: types.add, payload });
  };

  const removeProduct = (payload) => {
    dispatch({ type: types.remove, payload });
  };

  const clearCart = () => {
    dispatch({ type: types.clear });
  };

  const contextValues = {
    increase,
    decrease,
    addProduct,
    removeProduct,
    clearCart,
    ...state,
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};
