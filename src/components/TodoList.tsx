import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
  const taskobj = useSelector((state: any) => state.todos.data);
  console.log(taskobj)
  const taskItems = taskobj.map((task: any) => {
    return <TodoItem key={task.id} task={task} />;
  });

  return <div>{taskItems}</div>;
};

export default TodoList;