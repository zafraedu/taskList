import TaskCard from "./TaskCard";
import { TaskContext } from "../context/TaskContex";
import { useContext } from "react";

const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return (
      <>
        <h2 className="noTaskH2">No tasks</h2>
        <p className="noTaskP">You have not tasks assigned yet (try add one)</p>
      </>
    );
  }

  return (
    <div className="cardContainer">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};
export default TaskList;
