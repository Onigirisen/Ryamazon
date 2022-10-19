import React from "react";
import { Route, Switch } from "react-router-dom";
import CategoryNav from "./components/CategoryNav";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";
import ProductShow from "./components/ProductShow/ProductShow";
import SignupForm from "./components/SignupForm";
import Splash from "./components/Splash";

function App() {
  return (
    <div className="app">
      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/login">
          <LoginForm />
        </Route>
        <Route exact path="/signup">
          <SignupForm />
        </Route>

        <Route exact path="/products/:productId">
          <Navbar />
          <CategoryNav />
          <ProductShow />
        </Route>

        <Route exact path="/:category">
          <Navbar />
          <CategoryNav />
          <Splash />
        </Route>

        <Route path="/checkout">
          <Navbar />
        </Route>

        <Route exact path="/">
          <Navbar />
          <CategoryNav />
          <Splash />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
