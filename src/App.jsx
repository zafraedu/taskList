import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="container">
      <TaskForm />
      <TaskList />
      <Footer />
    </div>
  );
};
export default App;
