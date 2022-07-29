import axios from "axios";

const updateNote = async (note, notesDispatch) => {
  try {
    const response = await axios.post(
      `/api/notes/${note._id}`,
      { note },
      { headers: { authorization: localStorage.getItem("token") } }
    );
    const { status, data } = response;
    if (status === 201) {
      notesDispatch({ type: "UPDATE_NOTE", payload: data.notes });
    }
  } catch (error) {
    console.error(error);
  }
};

export { updateNote };
