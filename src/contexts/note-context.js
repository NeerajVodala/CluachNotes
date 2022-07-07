import { createContext, useContext, useState } from "react";

const NoteContext = createContext();
const useNote = () => useContext(NoteContext);
const NoteProvider = ({ children }) => {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteDescription, setNoteDescription] = useState("");
  const [notes, setNotes] = useState([]);
  return (
    <NoteContext.Provider
      value={{
        noteTitle,
        setNoteTitle,
        noteDescription,
        setNoteDescription,
        notes,
        setNotes,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export { useNote, NoteProvider };
