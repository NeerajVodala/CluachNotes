import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Auth.css";

export const Signup = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

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

        if (response.status === 201) {
          navigate("/login");
        }
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
            <span className="password-container">
              <input
                type={showPass ? "text" : "password"}
                placeholder="••••••••"
                className="input password-input"
                id="password"
                value={signupData.password}
                onChange={(e) => formHandler("password", e.target.value)}
                required
              />
              <span onClick={() => setShowPass((prev) => !prev)}>
                {showPass ? (
                  <i className="far fa-eye-slash fa-xs eye-icon"></i>
                ) : (
                  <i className="far fa-eye fa-xs eye-icon"></i>
                )}
              </span>
            </span>
          </div>
          <div className="input-container">
            <label htmlFor="confirm-password" className="label">
              Confirm Password
            </label>
            <span className="password-container">
              <input
                type={showConfirmPass ? "text" : "password"}
                placeholder="••••••••"
                className="input password-input"
                id="confirm-password"
                value={signupData.confirmPassword}
                onChange={(e) => formHandler("confirmPassword", e.target.value)}
                required
              />
              <span onClick={() => setShowConfirmPass((prev) => !prev)}>
                {showConfirmPass ? (
                  <i className="far fa-eye-slash fa-xs eye-icon"></i>
                ) : (
                  <i className="far fa-eye fa-xs eye-icon"></i>
                )}
              </span>
            </span>
          </div>
          {signupData.password !== signupData.confirmPassword && (
            <p className="text-s text-span-1">
              Password and Confirm password fields need to be same
            </p>
          )}
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
