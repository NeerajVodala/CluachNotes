import "./TextEditor.css";
import { useNote } from "../../contexts/note-context";
import { ColorPalette, Priority, Tags } from "../NoteFeatures";

export const TextEditor = () => {
  const { notes, setNotes, note, setNote, initialNote } = useNote();

  const clearHandler = (e) => {
    e.preventDefault();
    setNote(initialNote);
  };

  const saveHandler = (e) => {
    e.preventDefault();
    setNotes([...notes, note]);
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
          <Tags />
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
