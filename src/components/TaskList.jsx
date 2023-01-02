import TaskCard from "./TaskCard";

const TaskList = ({ tasks, deleteTask }) => {
  if (tasks.length === 0) {
    return <h2>No hay tareas</h2>;
  }

  return (
    <>
      {tasks.map((task) => (
        <TaskCard key={task.id} deleteTask={deleteTask} task={task} />
      ))}
    </>
  );
};
export default TaskList;
