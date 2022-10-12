import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

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
    dispatch(
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

      {errors.length > 0 && (
        <div className="errors-container">
          <div style={{ flex: "10%", width: "63px" }}>
            <div
              className="svgcontainer"
              style={{ marginLeft: "10px", width: "35px", marginTop: "5px" }}
            >
              <WarningAmberIcon fontSize="large" />
            </div>
          </div>
          <div className="errors-message-box">
            <div className="svgcontainer" style={{ display: "flex" }}>
              <h4 style={{ color: "#c40000" }}>There was a problem</h4>
            </div>
            <div className="error-messages">
              <ul>
                {errors.map((error) => (
                  <li key={error}>{error}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
      <div className="login-form">
        <h1>Sign in</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Email
            <input
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
