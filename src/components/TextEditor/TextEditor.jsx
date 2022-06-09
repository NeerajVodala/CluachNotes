import "./TextEditor.css";

export const TextEditor = () => {
  return (
    <form className="note-editor flex-col gp-m br-s">
      <div className="flex-row justify-between align-center gp-s">
        <input className="note-title text-l" type="text" placeholder="Title" />
        <i className="fas fa-thumbtack"></i>
      </div>

      <textarea
        className="note-description text-m"
        type="text"
        rows="3"
        placeholder="Take a note..."
      />

      <div className="flex-row justify-between align-center">
        <div className="note-features flex-row justify-between">
          <i className="fas fa-palette"></i>
          <i className="fas fa-tags"></i>
          <i className="fas fa-exclamation-circle"></i>
        </div>
        <div className="note-confirm text-right">
          <button className="btn ghost btn-s br-full">Close</button>
          <button className="btn outline btn-s br-full">Save</button>
        </div>
      </div>
    </form>
  );
};
