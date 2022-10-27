import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
// import { eachTask } from "./AddTodo";
// 
// interface taskItemsInterface {
//   task: string
//   id: string
//   date: string
// }

// interface taskobjInterface {
//   todos: data[]
// }

const TodoList = () => {
  const taskobj = useSelector((state: any) => state.todos.data);
  console.log(taskobj)
  const taskItems = taskobj.map((task: any) => {
    return <TodoItem key={task.id} task={task} />;
  });

  return <div>{taskItems}</div>;
};

export default TodoList;