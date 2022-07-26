import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./Auth.css";
import { useAuth } from "../../contexts";

export const Login = () => {
  const navigate = useNavigate();
  const { authState, setAuthState } = useAuth();
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const formHandler = (key, value) => {
    setLoginData({ ...loginData, [key]: value });
  };

  const loginHandler = (e) => {
    e.preventDefault();
    (async () => {
      try {
        const response = await axios.post(`/api/auth/login`, { ...loginData });
        const {
          data: { foundUser, encodedToken },
          status,
        } = response;

        if (status === 200) {
          localStorage.setItem("token", encodedToken);
          localStorage.setItem("user", JSON.stringify(foundUser));
          setAuthState({
            ...authState,
            isLoggedIn: true,
            token: encodedToken,
            user: foundUser,
          });
        }
        navigate("/");
      } catch (error) {
        if (error.response.status === 401) alert("Incorrect password");
        else if (error.response.status === 404) alert("Invalid credentials");
        else console.error(error.response);
      }
    })();
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
            <div
              className="text-m text-underline csr-pointer"
              onClick={() =>
                setLoginData({
                  email: "user@credentials.test",
                  password: "testpass123",
                })
              }
            >
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
