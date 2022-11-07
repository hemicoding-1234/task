import { combineReducers } from "redux";
import { ActionTypes } from "../actions";
import { eachTask } from "../components/AddTodo";

const initialState = {
  data: [],
  date: '',
  status: 'incomplete'
};

export interface TaskArray {
  data: eachTask[],
  date: string,
  status: string
}

const todos = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        data: [...state.data, action.payload],
        date: action.payload.date,
        status: 'incomplete'
      };
    case "DELETE_TODO":
      return {
        ...state,
        data: [...state.data.filter((todo: eachTask) => todo.id !== action.id)],
      };
    case "UPDATE_TODO":
      return {
        ...state,
        data: [
          ...state.data.filter((todo: eachTask) => todo.id !== action.id),
          { task: action.task, id: action.id, date: action.date },
        ],
      };
    case "ON_DROP":
      const getSelectedDate = state.data.filter((todo: eachTask) => todo.id === action.id);
      return {
        getSelectedDate
      }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  todos,
});

export default rootReducer;