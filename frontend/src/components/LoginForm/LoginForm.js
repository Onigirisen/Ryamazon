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
          // .clone() essentially allows you to read the response body twice
          data = await res.clone().json();
        } catch {
          data = await res.text(); // Will hit this case if, e.g., server is down
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      }
    );
  };
  const handleClick = (e) => {
    const demoCred = { name: "Demo User", email: "demo@user.io" };
    const demoPass = "password";
    return dispatch(sessionActions.login({ demoCred, demoPass }));
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
        <h1>Sign In</h1>
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
          <button type="submit" className="demo-button" onClick={handleClick}>
            Demo User
          </button>
        </form>
        <p>
          By continuing, you agree to Ryamazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button type="submit" className="signup-button">
          Create Your Ryamazon Account
        </button>
      </div>
    </div>
  );
}

export default LoginForm;
