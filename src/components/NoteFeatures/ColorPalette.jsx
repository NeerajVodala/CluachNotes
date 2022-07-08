import { v4 as uuid } from "uuid";

export const ColorPalette = () => {
  const colors = [
    { id: uuid(), value: `var(--bg-secondary)` },
    { id: uuid(), value: `var(--success-color)` },
    { id: uuid(), value: `var(--error-color)` },
    { id: uuid(), value: `var(--warning-color)` },
    { id: uuid(), value: `var(--info-color)` },
    { id: uuid(), value: `var(--badge-yellow)` },
  ];
  return (
    <div className="flex-row align-center gp-s br-full palette">
      <i className="fas fa-palette fa-lg"></i>
      <div className="flex-row align-center gp-s">
        {colors.map((color) => {
          return (
            <div
              style={{
                height: "1.5rem",
                width: "1.5rem",
                backgroundColor: color.value,
                borderRadius: "999px",
                cursor: "pointer",
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};
