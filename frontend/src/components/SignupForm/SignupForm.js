import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import * as sessionActions from "../../store/session";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

function SignupForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [nameErrors, setNameErrors] = useState(false);
  const [nameErrorsMessage, setNameErrorsMessage] = useState("");
  const [passwordErrors, setPasswordErrors] = useState(false);
  const [passwordErrorsMessage, setPasswordErrorsMessage] = useState("");
  const [emailErrors, setEmailErrors] = useState(false);
  const [emailErrorsMessage, setEmailErrorsMessage] = useState("");
  const [confirmPasswordErrors, setConfirmPasswordErrors] = useState(false);
  const [confirmPasswordErrorsMessage, setConfirmPasswordErrorsMessage] =
    useState("");
  const validInput = "valid-input-field";

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length < 1) {
      setNameErrors(true);
      setNameErrorsMessage("Enter your name");
    }
    console.log(nameErrorsMessage);
    if (email.length < 1) {
      setEmailErrors(true);
      setEmailErrorsMessage("Enter your email");
    } else if (!email.includes("@") && email.length > 0) {
      setEmailErrors(true);
      setEmailErrorsMessage("Wrong or Invalid email address");
    }
    if (password.length < 6) {
      setPasswordErrors(true);
      setPasswordErrorsMessage("Minimum 6 characters required");
    }
    if (password !== confirmPassword) {
      setPasswordErrors(true);
      setConfirmPasswordErrors(true);
      setConfirmPasswordErrorsMessage("Passwords must match");
    } else {
      setConfirmPasswordErrors(true);
      setConfirmPasswordErrorsMessage("Type your password again");
    }

    if (password === confirmPassword) {
      // setErrors([]);
      return dispatch(sessionActions.signup({ email, name, password })).catch(
        async (res) => {
          let data;
          try {
            // .clone() essentially allows you to read the response body twice
            data = await res.clone().json();
          } catch {
            data = await res.text(); // Will hit this case if, e.g., server is down
          }
          if (data?.errors) {
            setErrors(data.errors);
          } else if (data) {
            setErrors([data]);
          } else {
            setErrors([res.statusText]);
          }
        }
      );
    }

    // return setErrors([
    //   "Confirm Password field must be the same as the Password field",
    // ]);
  };

  const handleOnChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
      setNameErrors(false);
    }
    if (e.target.name === "email") {
      setEmail(e.target.value);
      setEmailErrors(false);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
      setPasswordErrors(false);
    }
    if (e.target.name === "confirmPassword") {
      setConfirmPassword(e.target.value);
      setConfirmPasswordErrors(false);
    }
  };

  return (
    <div className="signup-container">
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
              style={{ marginLeft: "auto", width: "35px", marginTop: "5px" }}
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
      <div className="signup-form">
        <h1>Create account</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Your Name
            {nameErrors && (
              <input
                autoFocus
                type="text"
                name="name"
                placeholder="First and last name"
                value={name}
                onChange={handleOnChange}
              />
            )}
            {nameErrors && (
              <div className="input-field-error-message-container">
                <span className="input-field-error-message">
                  {nameErrorsMessage}
                </span>
              </div>
            )}
            {!nameErrors && (
              <input
                className={validInput}
                autoFocus
                type="text"
                name="name"
                placeholder="First and last name"
                value={name}
                onChange={handleOnChange}
              />
            )}
          </label>
          <label>
            Email
            {emailErrors && (
              <input
                autoFocus
                type="text"
                name="email"
                value={email}
                onChange={handleOnChange}
              />
            )}
            {emailErrors && (
              <div className="input-field-error-message-container">
                <span className="input-field-error-message">
                  {emailErrorsMessage}
                </span>
              </div>
            )}
            {!emailErrors && (
              <input
                className="valid-input-field"
                type="text"
                name="email"
                value={email}
                onChange={handleOnChange}
              />
            )}
          </label>
          <label>
            Password
            {passwordErrors && (
              <input
                autoFocus
                type="password"
                name="password"
                placeholder="At least 6 characters"
                value={password}
                onChange={handleOnChange}
              />
            )}
            {passwordErrors && (
              <div className="input-field-error-message-container">
                <span className="input-field-error-message">
                  {passwordErrorsMessage}
                </span>
              </div>
            )}
            {!passwordErrors && (
              <input
                className="valid-input-field"
                type="password"
                name="password"
                placeholder="At least 6 characters"
                value={password}
                onChange={handleOnChange}
              />
            )}
            {!passwordErrors && (
              <div className="input-field-require-message-container">
                <span className="password-requirement">
                  Passwords must be at least 6 characters
                </span>
              </div>
            )}
          </label>
          <label>
            Re-enter Password
            {confirmPasswordErrors && (
              <input
                autoFocus
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleOnChange}
              />
            )}
            {confirmPasswordErrors && (
              <div className="input-field-error-message-container">
                <span className="input-field-error-message">
                  {confirmPasswordErrorsMessage}
                </span>
              </div>
            )}
            {!confirmPasswordErrors && (
              <input
                className="valid-input-field"
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleOnChange}
              />
            )}
          </label>
          <button className="signup-button" type="submit">
            Continue
          </button>
        </form>
        <p>
          By creating an account, you agree to Ryamazon's{" "}
          <a style={{ textDecoration: "none", color: "#0066c0" }} href="">
            Conditions of Use
          </a>{" "}
          and{" "}
          <a style={{ textDecoration: "none", color: "#0066c0" }} href="">
            Privacy Notice
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default SignupForm;
