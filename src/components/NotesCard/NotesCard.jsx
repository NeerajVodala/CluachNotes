import "./NotesCard.css";

export const NotesCard = () => {
  return (
    <div className="note-card flex-col gp-m br-s">
      <div className="flex-row justify-between align-center gp-s">
        <h4 className="note-card-title">This is heading</h4>
        <i className="fas fa-thumbtack"></i>
      </div>

      <p className="note-description text-m">
        This is notes description This is notes description This is notes
        description notes description This is notes description{" "}
      </p>

      <div className="note-options flex-row justify-between">
        <i className="fas fa-palette"></i>
        <i className="fas fa-tags"></i>
        <i className="fas fa-exclamation-circle"></i>
        <i class="fas fa-edit"></i>
        <i className="fas fa-file-archive"></i>
        <i className="fas fa-trash"></i>
      </div>
    </div>
  );
};
