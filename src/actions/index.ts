import { eachTask } from "../components/AddTodo";
// import {enum } from "./enums"
import { actionTypesNames } from "../enums";

// interface AddTodoInterface {
//   type: "ADD_TODO",
//   payload: eachTask
// }

interface AddTodoInterface {
  type: actionTypesNames.ADD_TODO,
  payload: eachTask
}

// interface UpdateTodoInterface {
//   type: "UPDATE_TODO",
//   task: string,
//   id: string,
//   date: string,
//   status: string
// }

interface UpdateTodoInterface {
  type: actionTypesNames.UPDATE_TODO,
  task: string,
  id: string,
  date: string,
  status: string
}

// interface DeleteTodoInterface {
//   type: "DELETE_TODO"
//   id: string
// }

interface DeleteTodoInterface {
  type: actionTypesNames.DELETE_TODO
  id: string
}

// interface OnDopInterface {
//   type: "ON_DROP",
//   task: string
//   id: string,
//   date: string
// }

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

export const updateTodo = ({ task, id, date, status }: eachTask) => ({
  type: actionTypesNames.UPDATE_TODO,
  task,
  id,
  date,
  status
});

// export const onDrop = ({ task, id, date }: eachTask) => ({
//   type: "ON_DROP",
//   task,
//   id,
//   date
// })

export const onDrop = (id: string) => ({
  type: actionTypesNames.ON_DROP,
  id,
})

// export const onDrop = ({ task, id, date, status }: eachTask) => ({
//   type: "ON_DROP",
//   task,
//   id,
//   date,
//   status
// })