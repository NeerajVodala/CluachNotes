import axios from "axios";

const trashNote = async (Note, notesDispatch) => {
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

const unTrashNote = async (Note, notesDispatch) => {
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

export { trashNote, unTrashNote };
