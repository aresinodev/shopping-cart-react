import React, { createContext, useState } from "react";
import { products as info } from "../data/products";

export const ProductsContext = createContext();

export const ProductsContextProvider = ({ children }) => {
  const [products] = useState(info);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};
