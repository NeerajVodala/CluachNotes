import { v4 as uuid } from "uuid";
import { useNote } from "../../contexts";

export const ColorPalette = () => {
  const { note, setNote } = useNote();
  const colors = [
    { id: uuid(), value: `var(--bg-secondary)` },
    { id: uuid(), value: `var(--success-color)` },
    { id: uuid(), value: `var(--error-color)` },
    { id: uuid(), value: `var(--warning-color)` },
    { id: uuid(), value: `var(--info-color)` },
    { id: uuid(), value: `var(--badge-yellow)` },
  ];

  const paletteHandler = () => {
    console.log("yes");
  };

  return (
    <div className="flex-row align-center gp-s br-full palette">
      <i className="fas fa-palette fa-lg" onClick={paletteHandler}></i>
      <div className="flex-row align-center gp-s">
        {colors.map((color) => {
          return (
            <div
              key={color.id}
              className="flex-row justify-center align-center"
              style={{
                height: "1.5rem",
                width: "1.5rem",
                backgroundColor: color.value,
                borderRadius: "999px",
                cursor: "pointer",
              }}
              onClick={() => setNote({ ...note, color: color.value })}
            >
              {note.color === color.value ? (
                <i
                  className="fas fa-check fa-xs"
                  style={
                    color.value !== "var(--bg-secondary)"
                      ? {
                          color: "var(--bg-primary)",
                        }
                      : {}
                  }
                ></i>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
