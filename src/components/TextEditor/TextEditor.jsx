import "./TextEditor.css";
import { useNote } from "../../contexts/note-context";

export const TextEditor = () => {
  const {
    noteTitle,
    setNoteTitle,
    noteDescription,
    setNoteDescription,
    notes,
    setNotes,
  } = useNote();

  const clearHandler = (e) => {
    e.preventDefault();
    setNoteTitle("");
    setNoteDescription("");
  };

  const saveHandler = (e) => {
    e.preventDefault();
    setNotes([...notes, { noteTitle, noteDescription }]);
    setNoteTitle("");
    setNoteDescription("");
  };

  return (
    <form className="note-editor flex-col gp-m br-s">
      <div className="flex-row justify-between align-center gp-s">
        <input
          className="note-title text-l"
          type="text"
          placeholder="Title"
          value={noteTitle}
          onChange={(e) => setNoteTitle(e.target.value)}
        />
        <i className="fas fa-thumbtack"></i>
      </div>

      <textarea
        className="note-description text-m"
        type="text"
        rows="3"
        placeholder="Take a note..."
        value={noteDescription}
        onChange={(e) => setNoteDescription(e.target.value)}
      />

      <div className="flex-row justify-between align-center">
        <div className="note-features flex-row justify-between">
          <i className="fas fa-palette"></i>
          <i className="fas fa-tags"></i>
          <i className="fas fa-exclamation-circle"></i>
        </div>
        <div className="note-confirm text-right">
          <button
            className="btn ghost btn-s br-full"
            onClick={(e) => clearHandler(e)}
          >
            Clear
          </button>
          <button
            className="btn outline btn-s br-full"
            onClick={(e) => saveHandler(e)}
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};
