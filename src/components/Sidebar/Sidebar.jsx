import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export const Sidebar = () => {
  const labelsHandler = (e) => {
    e.preventDefault();
    console.log("Yesss");
  };
  return (
    <aside className="sidebar">
      <nav>
        <div>
          <p className="text-span-1 text-s text-semibold nav-heading">
            QUICK LINKS
          </p>
          <ul>
            <li>
              <NavLink to="/" className="nav-link br-full">
                <div className="flex-row align-center gp-m">
                  <i className="fas fa-home"></i> <span>Home</span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/archive" className="nav-link br-full">
                <div className="flex-row align-center gp-m">
                  <i className="fas fa-file-archive"></i> <span>Archive</span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/trash" className="nav-link br-full">
                <div className="flex-row align-center gp-m">
                  <i className="fas fa-trash"></i> <span>Trash</span>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-span-1 text-s text-semibold nav-heading">LABELS</p>
          <ul>
            <li className="nav-link labels br-full">
              <div className="br-full flex-row align-center gp-m">
                <i className="fas fa-tag"></i>
                <span>Todo</span>
              </div>
            </li>
            <li className="nav-link labels br-full">
              <div className="br-full flex-row align-center gp-m">
                <i className="fas fa-tag"></i>
                <span>Work</span>
              </div>
            </li>
            <li className="nav-link labels br-full">
              <div className="br-full flex-row align-center gp-m">
                <i className="fas fa-tag"></i>
                <span>Chore</span>
              </div>
            </li>
            <li className="nav-link labels br-full">
              <div className="br-full flex-row align-center gp-m">
                <i className="fas fa-tag"></i>
                <span>Shopping</span>
              </div>
            </li>
          </ul>

          <form
            className="labels-add flex-row align-center text-center br-s"
            onSubmit={(e) => labelsHandler(e)}
          >
            <input
              type="text"
              placeholder="Add label"
              className="labels-add-input br-s"
              required
            />
            <button type="submit" className="br-s labels-add-btn">
              <div style={{ fontSize: "1rem" }}>
                <i className="fas fa-plus-square fa-2x br-s labels-add-icon"></i>
              </div>
            </button>
          </form>
        </div>
      </nav>
    </aside>
  );
};
