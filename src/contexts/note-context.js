import { createContext, useContext, useReducer, useState } from "react";
import { initialState, notesReducer } from "../reducers/noteReducer";

const NoteContext = createContext();
const useNote = () => useContext(NoteContext);
const NoteProvider = ({ children }) => {
  const initialNote = {
    title: "",
    description: "",
    color: "var(--bg-secondary)",
    priority: "",
    label: "",
    isPinned: false,
    isEdited: false,
    timeStamp: new Date().toLocaleString(),
  };
  const [note, setNote] = useState(initialNote);
  const [notesState, notesDispatch] = useReducer(notesReducer, initialState);
  const [labels, setLabels] = useState(["Todo", "Work", "Chore", "Shopping"]);
  const [sideBar, setSideBar] = useState(false);

  return (
    <NoteContext.Provider
      value={{
        note,
        setNote,
        initialNote,
        labels,
        setLabels,
        notesState,
        notesDispatch,
        sideBar,
        setSideBar,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export { useNote, NoteProvider };
