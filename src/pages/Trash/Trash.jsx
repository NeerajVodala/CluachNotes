import { NotesCard, Sidebar } from "../../components";
import "./Trash.css";
import "../../styles/App.css";
import { useNote } from "../../contexts";

export const Trash = () => {
  const { notesState } = useNote();
  return (
    <div className="main">
      <Sidebar />

      {notesState.trashedList.length > 0 ? (
        notesState.trashedList?.map((t) => {
          return <NotesCard Note={t} key={t._id} />;
        })
      ) : (
        <div className="trash flex-col justify-center align-center gp-2xl text-center">
          <i className="fas fa-trash fa-6x text-span-2"></i>
          <p className="text-xl text-span-1">No notes in trash</p>
        </div>
      )}
    </div>
  );
};
