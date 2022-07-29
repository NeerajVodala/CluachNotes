const initialState = {
  notesList: [],
  pinnedList: [],
  archivedList: [],
  trashedList: [],
};

const notesReducer = (prevState, { type, payload }) => {
  switch (type) {
    case "ADD_NOTE":
      return { ...prevState, notesList: payload };
    case "UPDATE_NOTE":
      return { ...prevState, notesList: payload };
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
        notesList: payload.data.notes,
        trashedList: [...prevState.trashedList, payload.Note],
      };
    case "DELETE_NOTE":
      return {
        ...prevState,
        trashedList: prevState.trashedList.filter((n) => n._id !== payload._id),
      };
    case "PIN_NOTE":
      return {
        ...prevState,
        pinnedList: [
          ...prevState.pinnedList,
          { ...payload, isPinned: !payload.isPinned },
        ],
      };
    case "UNPIN_NOTE":
      return {
        ...prevState,
        pinnedList: prevState.pinnedList.filter((p) => p._id !== payload._id),
      };
    default:
      return { ...prevState };
  }
};

export { initialState, notesReducer };
