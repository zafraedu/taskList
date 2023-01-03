import { FaSave } from "react-icons/fa";
import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContex";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(title);
    setTitle("");
  };
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="input"
        placeholder="Create your task"
        onChange={handleChange}
        value={title}
        autoFocus
      />
      <button className="saveButton" type="submit">
        <FaSave />
      </button>
    </form>
  );
};
export default TaskForm;
