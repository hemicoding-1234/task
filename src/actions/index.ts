import { eachTask } from "../components/AddTodo";
import { actionTypesNames } from "../enums";

interface AddTodoInterface {
  type: actionTypesNames.ADD_TODO,
  payload: eachTask
}

interface UpdateTodoInterface {
  type: actionTypesNames.UPDATE_TODO,
  task: string,
  id: string,
  date: string,
  time: string,
  status: string
}

interface DeleteTodoInterface {
  type: actionTypesNames.DELETE_TODO
  id: string
}

interface OnDopInterface {
  type: actionTypesNames.ON_DROP,
  task: string
  id: string,
  date: string
}

export type ActionTypes = AddTodoInterface | UpdateTodoInterface | DeleteTodoInterface | OnDopInterface;

export const addTodo = (payload: eachTask): AddTodoInterface => ({
  type: actionTypesNames.ADD_TODO,
  payload,
});

export const deleteTodo = (id: string): DeleteTodoInterface => ({
  type: actionTypesNames.DELETE_TODO,
  id,
});

export const updateTodo = ({ task, id, date, time, status }: eachTask) => ({
  type: actionTypesNames.UPDATE_TODO,
  task,
  id,
  date,
  time,
  status
});

export const onDrop = (id: string) => ({
  type: actionTypesNames.ON_DROP,
  id,
})