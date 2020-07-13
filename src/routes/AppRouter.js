import React, { useReducer, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Navbar } from "../components/Navbar";
import { ProductsScreen } from "../components/ProductsScreen";
import { ProductScreen } from "../components/ProductScreen";

import "../styles/styles.scss";
import { CartScreen } from "../components/CartScreen";
import { cartReducer } from "../cart/cartReducer";
import { CartContext } from "../cart/CartContext";

const init = () => {
  return JSON.parse(localStorage.getItem("cart") || "[]");
};

export const AppRouter = () => {
  const [cart, dispatch] = useReducer(cartReducer, [], init);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      <Router>
        <div className="app__content">
          <Navbar />

          <Switch>
            <Route exact path="/" component={ProductsScreen} />
            <Route exact path="/product/:id" component={ProductScreen} />
            <Route exact path="/cart" component={CartScreen} />

            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </CartContext.Provider>
  );
};
