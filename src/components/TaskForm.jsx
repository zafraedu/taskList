import { useState } from "react";

const TaskForm = ({ createTask }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(title);
    setTitle("");
  };
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Escribe tu tarea"
        onChange={handleChange}
        value={title}
        autoFocus
      />
      <button type="submit">Guardar</button>
    </form>
  );
};
export default TaskForm;
