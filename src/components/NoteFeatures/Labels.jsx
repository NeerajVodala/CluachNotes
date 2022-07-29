import { useNote } from "../../contexts";

export const Labels = () => {
  const { note, setNote, labels } = useNote();

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
          <option>Labels</option>
          {labels.map((l) => (
            <option key={l}>{l}</option>
          ))}
        </select>
      </div>
    </div>
  );
};
