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
    default:
      return { ...prevState };
  }
};

export { initialState, notesReducer };
