import { eachTask } from "../components/AddTodo";

interface AddTodoInterface {
  type: "ADD_TODO",
  payload: eachTask
}

interface UpdateTodoInterface {
  type: "UPDATE_TODO",
  task: string,
  id: string,
  date: string
}

interface DeleteTodoInterface {
  type: "DELETE_TODO"
  id: string
}

export type ActionTypes = AddTodoInterface | UpdateTodoInterface | DeleteTodoInterface;

export const addTodo = (payload: eachTask): AddTodoInterface => ({
  type: "ADD_TODO",
  payload,
});

export const deleteTodo = (id: string): DeleteTodoInterface => ({
  type: "DELETE_TODO",
  id,
});

export const updateTodo = ({ task, id, date }: eachTask) => ({
  type: "UPDATE_TODO",
  task,
  id,
  date
});