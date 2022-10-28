import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import SelectedDate from "./components/SelectedDate";
import { useState } from "react";


const App: React.FC = () => {
  const [check, setCheck] = useState(false);

  const showAllTask = () => {
    setCheck(!check);
  }
  return (
    <div className='App'>
      <h1>Task List</h1>
      <AddTodo />
      <br></br>
      <button className="ui button" onClick={showAllTask}>Show all Task</button>
      {check ? <TodoList /> : <br></br>}
      <br></br>
      <SelectedDate />
    </div>
  );
}

export default App;