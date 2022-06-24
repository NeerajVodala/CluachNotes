import { NotesCard, TextEditor, Sidebar } from "../../components";
import "./Home.css";
import "../../styles/App.css";

export const Home = () => {
  return (
    <div className="main">
      <Sidebar />
      <div className="home">
        <TextEditor />
        <div>
          <p className="text-span-1 text-s text-semibold">PINNED</p>
          <div className="flex-row flex-wrap">
            <NotesCard />
            <NotesCard />
          </div>
        </div>
        <div>
          <p className="text-span-1 text-s text-semibold">OTHERS</p>
          <div className="flex-row flex-wrap">
            <NotesCard />
            <NotesCard />
            <NotesCard />
            <NotesCard />
          </div>
        </div>
      </div>
    </div>
  );
};
