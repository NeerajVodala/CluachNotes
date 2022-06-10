import { NotesCard, TextEditor } from "../../components";
import "./Home.css";

export const Home = () => {
  return (
    <div className="">
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
  );
};
