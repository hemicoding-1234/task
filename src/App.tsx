import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import SelectedDate from "./components/SelectedDate";
import { useState } from "react";
import "./App.css"

const App: React.FC = () => {
  const [check, setCheck] = useState(false);

  const showAllTask = () => {
    setCheck(!check);
  }
  return (
    <div className='App'>
      <h1 id="appHeading">Task List</h1>
      <div id="AddTodoDiv">
        <AddTodo />
      </div>
      <br></br>
      <div id="ShowAllTaskContainer">
        <button className="ui button" onClick={showAllTask}>Show all Task</button>
        <br></br>
        {check ? <TodoList /> : <br></br>}
        <br></br>
      </div>
      <br></br>
      <div id="ShowSelectedTaskContainer">
        <SelectedDate />
      </div>
    </div>
  );
}

export default App;