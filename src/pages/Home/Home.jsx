import { NotesCard, TextEditor, Sidebar } from "../../components";
import "./Home.css";
import "../../styles/App.css";
import { useNote } from "../../contexts";
import { useLocation } from "react-router-dom";

export const Home = () => {
  const { notesState } = useNote();
  const { pathname } = useLocation();

  const pinnedNotes = notesState.notesList?.filter((note) => note.isPinned);
  const otherNotes = notesState.notesList?.filter((note) => !note.isPinned);

  return (
    <div className="main">
      <Sidebar />
      <div className="home">
        <TextEditor />
        {pinnedNotes.length > 0 && (
          <div>
            <p className="text-span-1 text-s text-semibold">PINNED</p>
            <div className="flex-row flex-wrap">
              {pinnedNotes.map((n) => (
                <NotesCard Note={n} pathname={pathname} key={n._id} />
              ))}
            </div>
          </div>
        )}
        {otherNotes.length > 0 && (
          <div>
            <p className="text-span-1 text-s text-semibold">ALL NOTES</p>
            <div className="flex-row flex-wrap">
              {otherNotes.map((n) => (
                <NotesCard Note={n} pathname={pathname} key={n._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
