import { eachTask } from "../components/AddTodo";

interface addTodoInterface {
  type: "ADD_TODO",
  payload: eachTask
}

interface updateTodoInterface {
  type: "UPDATE_TODO",
  task: string,
  id: string,
  date: string
}

interface deleteTodoInterface {
  type: "DELETE_TODO"
  id: string
}

export type ActionTypes = addTodoInterface | updateTodoInterface | deleteTodoInterface;

export const addTodo = (payload: eachTask): addTodoInterface => ({
  type: "ADD_TODO",
  payload,
});

export const deleteTodo = (id: string): deleteTodoInterface => ({
  type: "DELETE_TODO",
  id,
});

export const updateTodo = ({ task, id, date }: eachTask) => ({
  type: "UPDATE_TODO",
  task,
  id,
  date
});