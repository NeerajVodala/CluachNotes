import { useNote } from "../../contexts";
import "./NotesCard.css";
import { useEffect, useState } from "react";
import {
  archiveNote,
  deleteArchivedNote,
  trashNote,
  unArchiveNote,
  unTrashNote,
  updateNote,
} from "../../utils";

export const NotesCard = ({ Note, pathname }) => {
  const { setNote, notesDispatch } = useNote();
  const [pinNote, setPinNote] = useState({});
  const editNote = () => {
    setNote({
      ...Note,
      isEdited: (Note.isEdited = true),
      timeStamp: new Date().toLocaleString(),
    });
  };

  const pinHandler = () => {
    setPinNote({ ...Note, isPinned: !Note.isPinned });
  };

  useEffect(() => {
    updateNote(pinNote, notesDispatch);
  }, [pinNote, notesDispatch]);

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
          <span onClick={pinHandler}>
            <i
              className="fas fa-thumbtack"
              style={Note.isPinned ? { color: "#E53E3E" } : {}}
            ></i>
          </span>
        )}
      </div>

      <p className="note-card-description text-m">{Note.description}</p>
      <div>
        {Note.priority && (
          <span className="text-s text-bold br-full note-card-chip">
            Priority: {Note.priority}
          </span>
        )}
        {Note.label && Note.label !== "Labels" && (
          <span className="text-s text-bold br-full note-card-chip">
            Label: {Note.label}
          </span>
        )}
      </div>

      <div className="note-card-footer flex-row justify-between align-center">
        <p className="text-s text-semibold">{Note.timeStamp}</p>
        {pathname === "/" && (
          <div className="flex-row justify-between gp-2xl">
            <span onClick={editNote}>
              <i className="fas fa-edit"></i>
            </span>

            <span onClick={() => archiveNote(Note, notesDispatch)}>
              <i className="fas fa-file-archive"></i>
            </span>

            <span onClick={() => trashNote(Note, notesDispatch)}>
              <i className="fas fa-trash"></i>
            </span>
          </div>
        )}
        {pathname === "/archive" && (
          <div className="flex-row justify-between gp-2xl">
            <span onClick={() => unArchiveNote(Note, notesDispatch)}>
              <i className="far fa-file-archive"></i>
            </span>
            <span onClick={() => deleteArchivedNote(Note, notesDispatch)}>
              <i className="fas fa-trash"></i>
            </span>
          </div>
        )}
        {pathname === "/trash" && (
          <div className="flex-row justify-between gp-2xl">
            <span onClick={() => unTrashNote(Note, notesDispatch)}>
              <i className="fas fa-trash-restore"></i>
            </span>
            <span
              onClick={() =>
                notesDispatch({ type: "DELETE_NOTE", payload: Note })
              }
            >
              <i className="fas fa-trash"></i>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
