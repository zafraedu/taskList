import { FaTrashAlt } from "react-icons/fa";

const TaskCard = ({ task, deleteTask }) => {
  const handleClick = () => {
    deleteTask(task.id);
  };

  return (
    <div>
      {task.title + " "}
      <button onClick={handleClick}>
        <FaTrashAlt />
      </button>
    </div>
  );
};
export default TaskCard;
