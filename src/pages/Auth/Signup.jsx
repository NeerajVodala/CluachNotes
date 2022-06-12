import { Link } from "react-router-dom";
import "./Auth.css";

export const Signup = () => {
  return (
    <main className="auth-page flex-row align-center justify-center">
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
            />
          </div>
          <div className="input-container">
            <label htmlFor="password" className="label">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="input"
              id="password"
            />
          </div>
          <div>
            <input type="checkbox" id="terms" />
            <label htmlFor="terms" className="label">
              {" "}
              I accept all Terms & Conditions
            </label>
          </div>
          <button className="btn btn-m solid br-s">Create New Account</button>
          <div className="text-center">
            <Link to="/login">Already have an account</Link>
          </div>
        </div>
      </div>
    </main>
  );
};
