import React from "react";
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
import { CartContextProvider } from "../context/CartContext";
import { ProductsContextProvider } from "../context/ProductsContext";

export const AppRouter = () => {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
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
      </CartContextProvider>
    </ProductsContextProvider>
  );
};
