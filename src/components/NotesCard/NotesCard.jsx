import "./NotesCard.css";

export const NotesCard = ({ note }) => {
  return (
    <div className="note-card flex-col gp-m br-s">
      <div className="flex-row justify-between align-center gp-s">
        <h4 className="note-card-title">{note.noteTitle}</h4>
        <i className="fas fa-thumbtack"></i>
      </div>

      <p className="note-card-description text-m">{note.noteDescription}</p>

      <div className="note-card-footer flex-row justify-between align-center">
        <p className="text-span-1 text-s text-semibold">11/06/2022, 13:38:54</p>
        <div className="flex-row justify-between gp-2xl">
          <i className="fas fa-edit"></i>
          <i className="fas fa-file-archive"></i>
          <i className="fas fa-trash"></i>
        </div>
      </div>
    </div>
  );
};
