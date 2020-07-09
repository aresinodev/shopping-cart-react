import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route, Redirect,
} from "react-router-dom";

import {Navbar} from "../components/Navbar";
import {ProductsScreen} from "../components/ProductsScreen";
import {ProductScreen} from "../components/ProductScreen";

import "../styles/styles.scss";
import {CartScreen} from "../components/CartScreen";

export const AppRouter = () => {
    return (
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
    )
}
