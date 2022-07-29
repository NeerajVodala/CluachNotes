import { NotesCard, TextEditor, Sidebar } from "../../components";
import "./Home.css";
import "../../styles/App.css";
import { useNote } from "../../contexts";
import { useLocation } from "react-router-dom";

export const Home = () => {
  const { notesState } = useNote();
  const { pathname } = useLocation();

  return (
    <div className="main">
      <Sidebar />
      <div className="home">
        <TextEditor />
        <div>
          <p className="text-span-1 text-s text-semibold">PINNED</p>
          <div className="flex-row flex-wrap">
            {notesState.noteList?.map((n) =>
              n.isPinned ? (
                <NotesCard Note={n} pathname={pathname} key={n._id} />
              ) : (
                <></>
              )
            )}
          </div>
        </div>
        <div>
          <p className="text-span-1 text-s text-semibold">OTHERS</p>
          <div className="flex-row flex-wrap">
            {notesState.noteList?.map((n) =>
              !n.isPinned ? (
                <NotesCard Note={n} pathname={pathname} key={n._id} />
              ) : (
                <></>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
