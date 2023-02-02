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
import Footer from "./components/Footer";

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
          <Footer />
        </Route>
        <Route exact path="/cart/checkout">
          <Navbar />
          <CategoryNav />
          <CheckOutPage />
          <Footer />
        </Route>
        <Route exact path="/products">
          <Navbar />
          <CategoryNav />
          <ProductIndex />
          <Footer />
        </Route>
        <Route exact path="/products/:productId">
          <Navbar />
          <CategoryNav />
          <ProductShow />
          <Footer />
        </Route>
        <Route exact path="/products/:productId/review/new">
          <Navbar />
          <CategoryNav />

          <Footer />
        </Route>
        <Route exact path="/:category">
          <Navbar />
          <CategoryNav />
          <ProductIndex />
          <Footer />
        </Route>

        <Route exact path="/">
          <Navbar />
          <CategoryNav />
          <HomePage />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
