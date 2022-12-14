import React from "react";
import { Route, Switch } from "react-router-dom";
import Cart from "./components/Cart";
import CategoryNav from "./components/CategoryNav";
import CheckOutPage from "./components/CheckOutPage";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";
import ProductShow from "./components/ProductShow/ProductShow";
import SignupForm from "./components/SignupForm";
import ProductIndex from "./components/ProductIndex";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/login">
          <LoginForm />
        </Route>
        <Route exact path="/signup">
          <SignupForm />
        </Route>
        <Route exact path="/cart">
          <Navbar />
          <CategoryNav />
          <Cart />
        </Route>
        <Route exact path="/cart/checkout">
          <Navbar />
          <CategoryNav />
          <CheckOutPage />
        </Route>
        <Route exact path="/products">
          <Navbar />
          <CategoryNav />
          <ProductIndex />
        </Route>
        <Route exact path="/products/:productId">
          <Navbar />
          <CategoryNav />
          <ProductShow />
        </Route>

        <Route exact path="/:category">
          <Navbar />
          <CategoryNav />
          <ProductIndex />
        </Route>

        <Route exact path="/">
          <Navbar />
          <CategoryNav />
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
