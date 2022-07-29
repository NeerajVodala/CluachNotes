import { useNote } from "../../contexts";
import axios from "axios";
import "./NotesCard.css";

export const NotesCard = ({ Note, pathname }) => {
  const { setNote, notesDispatch } = useNote();
  const editNote = () => {
    setNote({
      ...Note,
      isEdited: (Note.isEdited = true),
      timeStamp: new Date().toLocaleString(),
    });
  };

  const archiveNote = async () => {
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
  };

  const unArchiveNote = async () => {
    try {
      const { status, data } = await axios.post(
        `/api/archives/restore/${Note._id}`,
        {},
        {
          headers: { authorization: localStorage.getItem("token") },
        }
      );
      if (status === 200) {
        notesDispatch({ type: "ARCHIVE_NOTE", payload: data });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteArchivedNote = async () => {
    try {
      const { status, data } = await axios.delete(
        `/api/archives/delete/${Note._id}`,
        {
          headers: { authorization: localStorage.getItem("token") },
        }
      );
      if (status === 200) {
        notesDispatch({ type: "DELETE_ARCHIVE", payload: data.archives });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const trashNote = async () => {
    try {
      const { status, data } = await axios.delete(`/api/notes/${Note._id}`, {
        headers: { authorization: localStorage.getItem("token") },
      });
      if (status === 200) {
        notesDispatch({ type: "TRASH_NOTE", payload: { data, Note } });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const unTrashNote = async () => {
    try {
      const response = await axios.post(
        "/api/notes",
        { note: Note },
        {
          headers: { authorization: localStorage.getItem("token") },
        }
      );
      const { status, data } = response;
      if (status === 201) {
        notesDispatch({ type: "ADD_NOTE", payload: data.notes });
        notesDispatch({ type: "DELETE_NOTE", payload: Note });
      }
    } catch (error) {
      console.error(error);
    }
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
        {pathname === "/" && (
          <i
            className="fas fa-thumbtack"
            style={Note.isPinned ? { color: "#E53E3E" } : {}}
          ></i>
        )}
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
          {pathname === "/" && (
            <span onClick={editNote}>
              <i className="fas fa-edit"></i>
            </span>
          )}
          {pathname === "/" && (
            <span onClick={archiveNote}>
              <i className="fas fa-file-archive"></i>
            </span>
          )}
          {pathname === "/" && (
            <span onClick={trashNote}>
              <i className="fas fa-trash"></i>
            </span>
          )}
          {pathname === "/archive" && (
            <span onClick={unArchiveNote}>
              <i className="far fa-file-archive"></i>
            </span>
          )}
          {pathname === "/archive" && (
            <span onClick={deleteArchivedNote}>
              <i className="fas fa-trash"></i>
            </span>
          )}
          {pathname === "/trash" && (
            <span onClick={unTrashNote}>
              <i className="fas fa-trash-restore"></i>
            </span>
          )}
          {pathname === "/trash" && (
            <span
              onClick={() =>
                notesDispatch({ type: "DELETE_NOTE", payload: Note })
              }
            >
              <i className="fas fa-trash"></i>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
