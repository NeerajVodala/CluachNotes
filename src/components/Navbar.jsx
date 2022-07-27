import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../contexts";

export const Navbar = () => {
  const {
    authState: { isLoggedIn },
    setAuthState,
  } = useAuth();
  const { pathname } = useLocation();

  const [lightMode, setLightMode] = useState(
    localStorage.getItem("lightmode") === "enabled" ? false : true
  );

  const modeToggle = () => {
    setLightMode((prev) => !prev);
  };

  useEffect(() => {
    console.log("render");
    if (lightMode) {
      localStorage.setItem("lightmode", null);
      document.body.classList.remove("light-mode");
    } else {
      localStorage.setItem("lightmode", "enabled");
      document.body.classList.add("light-mode");
    }
  }, [lightMode]);

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setAuthState({ isLoggedIn: false, token: null, user: null });
  };

  return (
    <header className="header">
      <div className="header-logo-section">
        <div className="menu-icon">
          <i className="fas fa-bars fa-lg"></i>
        </div>
        <Link to="/">
          <div className="header-logo">
            <i className="fas fa-cogs fa-2x"></i>
            <h2>cluachNotes</h2>
          </div>
        </Link>
      </div>

      <div className="header-nav">
        <div id="mode-switch" onClick={modeToggle}>
          {lightMode ? (
            <i className="fas fa-sun fa-lg"></i>
          ) : (
            <i className="fas fa-moon fa-lg"></i>
          )}
        </div>

        {isLoggedIn ? (
          <Link
            to="/login"
            className="btn outline btn-m br-full"
            onClick={logoutHandler}
          >
            Logout
          </Link>
        ) : pathname === "/login" ? (
          <Link to="/signup" className="btn outline btn-m br-full">
            Signup
          </Link>
        ) : (
          <Link to="/login" className="btn outline btn-m br-full">
            Login
          </Link>
        )}
      </div>
    </header>
  );
};
