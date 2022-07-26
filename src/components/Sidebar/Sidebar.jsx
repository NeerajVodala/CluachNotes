import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNote } from "../../contexts";
import "./Sidebar.css";

export const Sidebar = () => {
  const { labels, setLabels } = useNote();
  const [labelText, setLabelText] = useState("");
  const labelsHandler = (e) => {
    e.preventDefault();
    setLabels([...labels, labelText]);
    setLabelText("");
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
            {labels.map((l) => {
              return (
                <li className="nav-link labels br-full" key={l}>
                  <div className="br-full flex-row align-center gp-m">
                    <i className="fas fa-tag"></i>
                    <span>{l}</span>
                  </div>
                </li>
              );
            })}
          </ul>

          <form
            className="labels-add flex-row align-center text-center br-s"
            onSubmit={(e) => labelsHandler(e)}
          >
            <input
              type="text"
              placeholder="Add label"
              className="labels-add-input br-s"
              value={labelText}
              onChange={(e) => setLabelText(e.target.value)}
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
