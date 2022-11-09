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

const todos = (state: TaskArray = initialState, action: ActionTypes) => {
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
      const getSelectedDate = state.data.filter((todo: eachTask) => todo.id === action.id);
      console.log('selected date is: ', getSelectedDate)
      return {
        ...state,
        data: [
          ...state.data.filter((todo: eachTask) => todo.id !== action.id),
          { task: action.task, id: action.id, date: action.date, status: action.status },
        ],
      };
    case "ON_DROP":
      // const getSelectedDateIndex = state.data.filter((todo: eachTask) => todo.id === action.id);
      const getSelectedDateIndex = state.data.findIndex((todo: eachTask) => todo.id === action.id);
      state.data[getSelectedDateIndex].status = 'completed';
      // console.log('selected date is: ', getSelectedDate)
      // return {
      //   ...state,
      //   data: [
      //     ...state.data.filter((todo: eachTask) => todo.id !== action.id),
      //     { task: action.task, id: action.id, date: action.date, status: 'completed' },
      //   ],
      // }
      return {
        ...state,
        data: [
          ...state.data,
        ],
      }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  todos,
});

export default rootReducer;