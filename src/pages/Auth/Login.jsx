import { Link } from "react-router-dom";
import { useState } from "react";
import "./Auth.css";

export const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const formHandler = (key, value) => {
    setLoginData({ ...loginData, [key]: value });
  };

  const loginHandler = (e) => {
    e.preventDefault();
    console.log(loginData);
  };

  return (
    <form
      className="auth-page flex-row align-center justify-center"
      onSubmit={(e) => loginHandler(e)}
    >
      <div className="auth-container flex-row align-center justify-center shadow-1 br-s">
        <div className="input-section">
          <h3>Login</h3>
          <div className="input-container">
            <label htmlFor="email" className="label">
              Email address
            </label>
            <input
              type="email"
              placeholder="email@example.com"
              className="input"
              id="email"
              name="email"
              value={loginData.email}
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
              name="password"
              value={loginData.password}
              onChange={(e) => formHandler("password", e.target.value)}
              required
            />
          </div>
          <div className="flex-row align-center justify-center gp-2xl">
            <div className="flex-row align-center gp-s">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me" className="label text-s">
                {" "}
                Remember me
              </label>
            </div>
            <div className="text-m text-underline csr-pointer">
              Use Test Credentials
            </div>
          </div>
          <button className="btn btn-m solid br-s" type="submit">
            Login
          </button>
          <div className="text-center text-m text-span-1 text-semibold">
            <Link to="/signup">Create New Account </Link>
          </div>
        </div>
      </div>
    </form>
  );
};
