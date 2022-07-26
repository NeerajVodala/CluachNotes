import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Auth.css";

export const Signup = () => {
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const formHandler = (key, value) => {
    setSignupData({ ...signupData, [key]: value });
  };

  const signupHandler = (e) => {
    e.preventDefault();
    (async () => {
      try {
        const response = await axios.post(`/api/auth/signup`, {
          ...signupData,
        });
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    })();
  };

  return (
    <form
      className="auth-page flex-row align-center justify-center"
      onSubmit={(e) => signupHandler(e)}
    >
      <div className="auth-container flex-row align-center justify-center shadow-1 br-s">
        <div className="input-section">
          <h3>Signup</h3>
          <div className="flex-row align-center justify-center gp-s">
            <div className="input-container">
              <label htmlFor="first-name" className="label">
                First Name
              </label>
              <input
                type="text"
                placeholder="Enter first name"
                className="input"
                id="first-name"
                value={signupData.firstName}
                onChange={(e) => formHandler("firstName", e.target.value)}
                required
              />
            </div>
            <div className="input-container">
              <label htmlFor="last-name" className="label">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Enter last name"
                className="input"
                id="last-name"
                value={signupData.lastName}
                onChange={(e) => formHandler("lastName", e.target.value)}
                required
              />
            </div>
          </div>
          <div className="input-container">
            <label htmlFor="email" className="label">
              Email address
            </label>
            <input
              type="email"
              placeholder="email@example.com"
              className="input"
              id="email"
              value={signupData.value}
              onChange={(e) => formHandler("email", e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="input"
              id="password"
              value={signupData.password}
              onChange={(e) => formHandler("password", e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="confirm-password" className="label">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="input"
              id="confirm-password"
              value={signupData.confirmPassword}
              onChange={(e) => formHandler("confirmPassword", e.target.value)}
              required
            />
          </div>
          <div className="flex-row align-center gp-s">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms" className="label">
              {" "}
              I accept all Terms & Conditions
            </label>
          </div>
          <button className="btn btn-m solid br-s" type="submit">
            Create New Account
          </button>
          <div className="text-center text-m text-span-1 text-underline text-semibold">
            <Link to="/login">Already have an account</Link>
          </div>
        </div>
      </div>
    </form>
  );
};
