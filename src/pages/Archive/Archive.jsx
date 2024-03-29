import "./Archive.css";
import "../../styles/App.css";
import { NotesCard, Sidebar } from "../../components";
import { useNote } from "../../contexts";
import { useLocation } from "react-router-dom";

export const Archive = () => {
  const { notesState } = useNote();
  const { pathname } = useLocation();
  return (
    <div className="main">
      <Sidebar />
      {notesState.archivedList.length > 0 ? (
        <div className="flex-row flex-wrap">
          {notesState.archivedList?.map((a) => {
            return <NotesCard Note={a} pathname={pathname} key={a._id} />;
          })}
        </div>
      ) : (
        <div className="archive flex-col justify-center align-center gp-2xl text-center">
          <i className="fas fa-file-archive fa-6x text-span-2"></i>
          <p className="text-xl text-span-1">Your archived notes appear here</p>
        </div>
      )}
    </div>
  );
};
