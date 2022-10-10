import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";
import SignupForm from "./components/SignupForm";

function App() {
  return (
    <div className="app">
      {/* <Navbar /> */}
      <Switch>
        <Route path="/login">
          <LoginForm />
        </Route>

        <Route path="/signup">
          <SignupForm />
        </Route>

        <Route path="/checkout">
          <Navbar />
        </Route>

        <Route exact path="/">
          <Navbar />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
