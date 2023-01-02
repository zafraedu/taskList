import { useState, useEffect } from "react";
import { tasks as data } from "./data/tasks";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  const createTask = (taskTitle) => {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        title: taskTitle,
      },
    ]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((element) => element.id !== taskId));
  };

  return (
    <>
      <TaskForm createTask={createTask} />
      <TaskList deleteTask={deleteTask} tasks={tasks} />
    </>
  );
};
export default App;
