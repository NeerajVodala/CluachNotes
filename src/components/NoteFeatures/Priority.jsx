import { v4 as uuid } from "uuid";
import { useNote } from "../../contexts/note-context";

export const Priority = () => {
  const { note, setNote } = useNote();
  const priorities = [
    { id: uuid(), value: "Low" },
    { id: uuid(), value: "Medium" },
    { id: uuid(), value: "High" },
  ];
  return (
    <div className="flex-row align-center gp-s br-full priorities">
      <i className="fas fa-exclamation-circle fa-lg"></i>
      <div className="flex-row align-center gp-s">
        {priorities.map((priority) => {
          return (
            <div
              key={priority.id}
              className="priority text-s br-full csr-pointer flex-row justify-center align-center gp-s"
              onClick={() => setNote({ ...note, priority: priority.value })}
            >
              {note.priority === priority.value ? (
                <i className="fas fa-check fa-xs"></i>
              ) : (
                " "
              )}
              <span>{priority.value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
