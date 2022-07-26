import { NotesCard, TextEditor, Sidebar } from "../../components";
import "./Home.css";
import "../../styles/App.css";
import { useNote } from "../../contexts";

export const Home = () => {
  const { notes } = useNote();
  return (
    <div className="main">
      <Sidebar />
      <div className="home">
        <TextEditor />
        <div>
          <p className="text-span-1 text-s text-semibold">PINNED</p>
          <div className="flex-row flex-wrap">
            {notes.map((n) =>
              n.isPinned ? <NotesCard Note={n} key={n.timeStamp} /> : <></>
            )}
          </div>
        </div>
        <div>
          <p className="text-span-1 text-s text-semibold">OTHERS</p>
          <div className="flex-row flex-wrap">
            {notes.map((n) =>
              !n.isPinned ? <NotesCard Note={n} key={n.timeStamp} /> : <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
