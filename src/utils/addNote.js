import axios from "axios";

const addNote = async (note, notesDispatch) => {
  try {
    const response = await axios.post(
      "/api/notes",
      { note },
      { headers: { authorization: localStorage.getItem("token") } }
    );
    const { status, data } = response;
    if (status === 201) {
      notesDispatch({ type: "ADD_NOTE", payload: data.notes });
    }
  } catch (error) {
    console.error(error);
  }
};

export { addNote };
