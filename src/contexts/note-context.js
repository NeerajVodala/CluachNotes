import { createContext, useContext, useState } from "react";

const NoteContext = createContext();
const useNote = () => useContext(NoteContext);
const NoteProvider = ({ children }) => {
  const initialNote = {
    title: "",
    description: "",
    color: "var(--bg-secondary)",
    priority: "",
    isPinned: false,
    timeStamp: new Date().toLocaleString(),
    label: "",
  };
  const [note, setNote] = useState(initialNote);
  const [notes, setNotes] = useState([]);

  const [labels, setLabels] = useState(["Todo", "Work", "Chore", "Shopping"]);

  return (
    <NoteContext.Provider
      value={{
        notes,
        setNotes,
        note,
        setNote,
        initialNote,
        labels,
        setLabels,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export { useNote, NoteProvider };
