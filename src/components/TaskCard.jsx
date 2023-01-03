import { FaTrashAlt } from "react-icons/fa";
import { TaskContext } from "../context/TaskContex";
import { useContext } from "react";

const TaskCard = ({ task }) => {
  const { deleteTask } = useContext(TaskContext);

  const handleClick = () => {
    deleteTask(task.id);
  };

  return (
    <div className="card">
      {task.title + " "}
      <button className="deleteButton" onClick={handleClick}>
        <FaTrashAlt />
      </button>
    </div>
  );
};
export default TaskCard;
