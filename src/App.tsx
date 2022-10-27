import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import SelectedDate from "./components/SelectedDate";

const App: React.FC = () => {
  return (
    <div className='App'>
      <h1>Task List</h1>
      <AddTodo />
      <br></br>
      <TodoList />
      <br></br>
      <SelectedDate />
    </div>
  );
}

export default App;