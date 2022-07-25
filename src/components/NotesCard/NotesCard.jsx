import "./NotesCard.css";

export const NotesCard = ({ Note }) => {
  return (
    <div
      className="note-card flex-col gp-m br-s"
      style={
        Note.color !== "var(--bg-secondary)"
          ? {
              backgroundColor: Note.color,
              color: "var(--bg-primary)",
            }
          : {}
      }
    >
      <div className="flex-row justify-between align-center gp-s">
        <h4 className="note-card-title">{Note.title}</h4>
        <i
          className="fas fa-thumbtack"
          style={Note.isPinned ? { color: "#E53E3E" } : {}}
        ></i>
      </div>

      <p className="note-card-description text-m">{Note.description}</p>
      <div>
        {Note.priority && (
          <span className="text-s text-bold br-full note-card-chip">
            Priority: {Note.priority}
          </span>
        )}
        {Note.label && Note.label !== "Select" && (
          <span className="text-s text-bold br-full note-card-chip">
            Label: {Note.label}
          </span>
        )}
      </div>

      <div className="note-card-footer flex-row justify-between align-center">
        <p className="text-s text-semibold">{Note.timeStamp}</p>
        <div className="flex-row justify-between gp-2xl">
          <i className="fas fa-edit"></i>
          <i className="fas fa-file-archive"></i>
          <i className="fas fa-trash"></i>
        </div>
      </div>
    </div>
  );
};
