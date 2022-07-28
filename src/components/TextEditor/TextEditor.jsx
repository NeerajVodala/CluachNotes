import "./TextEditor.css";
import { useNote } from "../../contexts";
import { ColorPalette, Priority, Labels } from "../NoteFeatures";
import axios from "axios";

export const TextEditor = () => {
  const { note, setNote, initialNote, notesDispatch } = useNote();

  const clearHandler = (e) => {
    e.preventDefault();
    setNote(initialNote);
  };

  const addNote = async () => {
    try {
      const response = await axios.post(
        "/api/notes",
        { note },
        { headers: { authorization: localStorage.getItem("token") } }
      );
      const { status, data } = response;
      if (status === 201) {
        notesDispatch({ type: "ADD_NOTE", payload: data.notes });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const updateNote = async () => {
    try {
      const response = await axios.post(
        `/api/notes/${note._id}`,
        { note },
        { headers: { authorization: localStorage.getItem("token") } }
      );
      const { status, data } = response;
      if (status === 201) {
        notesDispatch({ type: "UPDATE_NOTE", payload: data.notes });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const saveHandler = (e) => {
    e.preventDefault();
    note.isEdited ? updateNote() : addNote();
    setNote(initialNote);
  };

  const pinHandler = () => {
    setNote({ ...note, isPinned: !note.isPinned });
  };

  return (
    <form
      className="note-editor flex-col gp-m br-s"
      onSubmit={(e) => saveHandler(e)}
    >
      <div className="flex-row justify-between align-center gp-s">
        <input
          className="note-title text-l"
          type="text"
          placeholder="Title"
          value={note.title}
          onChange={(e) => setNote({ ...note, title: e.target.value })}
          required={true}
        />
        <span onClick={pinHandler}>
          <i
            className="fas fa-thumbtack"
            style={note.isPinned ? { color: "#E53E3E" } : {}}
          ></i>
        </span>
      </div>
      <textarea
        className="note-description text-m"
        type="text"
        rows="3"
        placeholder="Take a note..."
        value={note.description}
        onChange={(e) => setNote({ ...note, description: e.target.value })}
        required={true}
      />
      <div className="flex-row justify-between align-center">
        <div className="note-features flex-row justify-between align-center gp-m">
          <ColorPalette />
          <Priority />
          <Labels />
        </div>
        <div className="note-confirm text-right">
          <button
            className="btn ghost btn-s br-full"
            type="button"
            onClick={(e) => clearHandler(e)}
          >
            Clear
          </button>
          <button className="btn outline btn-s br-full" type="submit">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};
