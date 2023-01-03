import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider({ children }) {
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
    <TaskContext.Provider value={{ tasks, deleteTask, createTask }}>
      {children}
    </TaskContext.Provider>
  );
}
