import { v4 as uuid } from "uuid";

export const Priority = () => {
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
            <div className="priority text-s br-full csr-pointer">
              {priority.value}
            </div>
          );
        })}
      </div>
    </div>
  );
};
