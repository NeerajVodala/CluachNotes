import axios from "axios";

const archiveNote = async (Note, notesDispatch) => {
  try {
    const { status, data } = await axios.post(
      `/api/notes/archives/${Note._id}`,
      {
        Note,
      },
      { headers: { authorization: localStorage.getItem("token") } }
    );
    if (status === 201) {
      notesDispatch({ type: "ARCHIVE_NOTE", payload: data });
    }
  } catch (error) {
    console.error(error);
  }
};

const unArchiveNote = async (Note, notesDispatch) => {
  try {
    const { status, data } = await axios.post(
      `/api/archives/restore/${Note._id}`,
      {},
      {
        headers: { authorization: localStorage.getItem("token") },
      }
    );
    if (status === 200) {
      notesDispatch({ type: "ARCHIVE_NOTE", payload: data });
    }
  } catch (error) {
    console.error(error);
  }
};

const deleteArchivedNote = async (Note, notesDispatch) => {
  try {
    const { status, data } = await axios.delete(
      `/api/archives/delete/${Note._id}`,
      {
        headers: { authorization: localStorage.getItem("token") },
      }
    );
    if (status === 200) {
      notesDispatch({ type: "DELETE_ARCHIVE", payload: data.archives });
    }
  } catch (error) {
    console.error(error);
  }
};

export { archiveNote, unArchiveNote, deleteArchivedNote };
