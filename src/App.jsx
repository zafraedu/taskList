import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

const App = () => {
  return (
    <div className="container">
      <TaskForm />
      <TaskList />
    </div>
  );
};
export default App;
