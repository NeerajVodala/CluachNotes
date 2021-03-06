import "./Archive.css";
import "../../styles/App.css";
import { Sidebar } from "../../components";

export const Archive = () => {
  return (
    <div className="main">
      <Sidebar />
      <div className="archive flex-col justify-center align-center gp-2xl text-center">
        <i className="fas fa-file-archive fa-6x text-span-2"></i>
        <p className="text-xl text-span-1">Your archived notes appear here</p>
      </div>
    </div>
  );
};
