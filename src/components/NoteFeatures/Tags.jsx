import { v4 as uuid } from "uuid";
import { useNote } from "../../contexts/note-context";

export const Tags = () => {
  const { note, setNote } = useNote();
  const tagsList = [
    { id: uuid(), value: "Todo" },
    { id: uuid(), value: "Work" },
    { id: uuid(), value: "Chore" },
    { id: uuid(), value: "Shopping" },
  ];

  return (
    <div className="flex-row align-center gp-s br-full tags">
      <label htmlFor="select-menu">
        <i className="fas fa-tags fa-lg"></i>
      </label>
      <div>
        <select
          id="select-menu"
          className="select-menu text-s br-full"
          value={note.label}
          onChange={(e) => setNote({ ...note, label: e.target.value })}
        >
          <option>Select</option>
          {tagsList.map((tag) => (
            <option key={tag.id}>{tag.value}</option>
          ))}
        </select>
      </div>
    </div>
  );
};
