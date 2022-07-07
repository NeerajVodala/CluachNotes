import { Link } from "react-router-dom";
import "./Auth.css";

export const Login = () => {
  return (
    <main className="auth-page flex-row align-center justify-center">
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
          <div className="flex-row align-center justify-center gp-2xl">
            <div className="flex-row align-center gp-s">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me" className="label text-s">
                {" "}
                Remember me
              </label>
            </div>
            <div className="text-m csr-pointer">
              Guest Credentials
            </div>
          </div>
          <button className="btn btn-m solid br-s">Login</button>
          <div className="text-center text-m text-underline">
            <Link to="/signup">Create New Account</Link>
          </div>
        </div>
      </div>
    </main>
  );
};
