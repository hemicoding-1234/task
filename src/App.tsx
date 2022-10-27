import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  return (
    <div className='App'>
      <h1>Task List</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;