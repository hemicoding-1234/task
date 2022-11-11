import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import "./TodoList.css"

// interface TaskobjInterface {
//   todos: {
//     data: {}
//   }
// }

const TodoList = () => {
  const taskobj = useSelector((state: any) => state.todos.data);
  console.log(taskobj)
  const taskItems = taskobj.map((task: any) => {
    return (
      <div id="allTask">
        <TodoItem key={task.id} task={task} />
      </div>
    )
  });

  return (
    <div id="allTaskList">
      {taskItems}
    </div>
  )
};

export default TodoList;