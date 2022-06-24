import { Sidebar } from "../../components";
import "./Trash.css";
import "../../styles/App.css";

export const Trash = () => {
  return (
    <div className="main">
      <Sidebar />
      <div className="trash flex-col justify-center align-center gp-2xl text-center">
        <i className="fas fa-trash fa-6x text-span-2"></i>
        <p className="text-xl text-span-1">No notes in trash</p>
      </div>
    </div>
  );
};
