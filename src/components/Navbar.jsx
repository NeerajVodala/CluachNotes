import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../contexts";

export const Navbar = () => {
  const {
    authState: { isLoggedIn },
    setAuthState,
  } = useAuth();

  const { pathname } = useLocation();

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
        <div id="mode-switch">
          <i className="fas fa-sun fa-lg"></i>
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
