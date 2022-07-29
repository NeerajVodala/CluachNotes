const initialState = {
  notesList: [],
  pinnedList: [],
  archivedList: [],
  trashedList: [],
};

const notesReducer = (prevState, { type, payload }) => {
  switch (type) {
    case "ADD_NOTE":
      return { ...prevState, noteList: payload };
    case "UPDATE_NOTE":
      return { ...prevState, noteList: payload };
    case "ARCHIVE_NOTE":
      return {
        ...prevState,
        notesList: payload.notes,
        archivedList: payload.archives,
      };
    case "DELETE_ARCHIVE":
      return { ...prevState, archivedList: payload };
    case "TRASH_NOTE":
      return {
        ...prevState,
        noteList: payload.data.notes,
        trashedList: [...prevState.trashedList, payload.Note],
      };
    case "DELETE_NOTE":
      return {
        ...prevState,
        trashedList: prevState.trashedList.filter((n) => n._id !== payload._id),
      };
    default:
      return { ...prevState };
  }
};

export { initialState, notesReducer };
