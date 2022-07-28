import { useNote } from "../../contexts";
import axios from "axios";
import "./NotesCard.css";

export const NotesCard = ({ Note }) => {
  const { setNote, notesDispatch } = useNote();
  const editNote = () => {
    setNote({
      ...Note,
      isEdited: (Note.isEdited = true),
      timeStamp: new Date().toLocaleString(),
    });
  };

  const archiveNote = () => {
    (async () => {
      try {
        const { status, data } = await axios.post(
          `/api/notes/archives/${Note._id}`,
          {
            Note,
          },
          { headers: { authorization: localStorage.getItem("token") } }
        );
        if (status === 201) {
          notesDispatch({ type: "ARCHIVE_NOTE", payload: data });
        }
      } catch (error) {
        console.error(error);
      }
    })();
  };
  const trashNote = () => {
    console.log("trashed");
  };

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
          <span onClick={editNote}>
            <i className="fas fa-edit"></i>
          </span>
          <span onClick={archiveNote}>
            <i className="fas fa-file-archive"></i>
          </span>
          <span onClick={trashNote}>
            <i className="fas fa-trash"></i>
          </span>
        </div>
      </div>
    </div>
  );
};
