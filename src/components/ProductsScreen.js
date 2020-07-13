import React, { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { ProductsContext } from "../context/ProductsContext";

export const ProductsScreen = () => {
  const { addProduct } = useContext(CartContext);
  const { products } = useContext(ProductsContext);

  useEffect(() => {
    console.log("Productos", products);
  }, [products]);
  return (
    <div>
      <button type="button" onClick={() => addProduct(products[0])}>
        Add product
      </button>
    </div>
  );
};
