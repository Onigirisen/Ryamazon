import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";

function LoginForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        let data;
        try {
          data = await res.clone().json();
        } catch {
          data = await res.text();
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      }
    );
  };
  const handleClick = (e) => {
    e.preventDefault();
    setCredential("demo@user.io");
    setPassword("password");
    return dispatch(
      sessionActions.login({ credential: "demo@user.io", password: "password" })
    );
  };

  return (
    <div className="login-container">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="login-logo"
          className="login-logo"
        />
      </Link>
      <div className="login-form">
        <h1>Sign in</h1>
        <form onSubmit={handleSubmit}>
          <ul>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
          <label>
            Email
            <input
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit" className="signin-button">
            Continue
          </button>
        </form>
        <button className="demo-button" onClick={handleClick}>
          Demo User
        </button>
        <p>
          By continuing, you agree to Ryamazon's{" "}
          <a style={{ textDecoration: "none", color: "#0066c0" }} href="#">
            Conditions of Use
          </a>{" "}
          and{" "}
          <a style={{ textDecoration: "none", color: "#0066c0" }} href="#">
            Privacy Notice
          </a>
          .
        </p>
        <Link to="/signup">
          <button type="submit" className="create-account-button">
            Create Your Ryamazon Account
          </button>
        </Link>
      </div>
    </div>
  );
}

export default LoginForm;
