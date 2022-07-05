import { Link } from "react-router-dom";

export const Navbar = () => {
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
        <Link to="/login" className="btn outline btn-m br-full">
          Login
        </Link>
      </div>
    </header>
  );
};
