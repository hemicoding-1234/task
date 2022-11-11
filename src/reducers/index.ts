import { combineReducers } from "redux";
import { ActionTypes } from "../actions";
import { eachTask } from "../components/AddTodo";
import { actionTypesNames } from "../enums";

const initialState = {
  data: [],
  date: '',
  time: '',
  status: 'incomplete',
};

export interface TaskArray {
  data: eachTask[],
  date: string,
  time: string,
  status: string
}

const todos = (state: TaskArray = initialState, action: ActionTypes) => {
  switch (action.type) {
    case actionTypesNames.ADD_TODO:
      return {
        ...state,
        data: [...state.data, action.payload],
        date: action.payload.date,
        time: action.payload.time,
        status: 'incomplete'
      };
    case actionTypesNames.DELETE_TODO:
      return {
        ...state,
        data: [...state.data.filter((todo: eachTask) => todo.id !== action.id)],
      };
    case actionTypesNames.UPDATE_TODO:
      const getSelectedDate = state.data.filter((todo: eachTask) => todo.id === action.id);
      console.log('selected date is: ', getSelectedDate)
      return {
        ...state,
        data: [
          ...state.data.filter((todo: eachTask) => todo.id !== action.id),
          { task: action.task, id: action.id, date: action.date, status: action.status },
        ],
      };
    case actionTypesNames.ON_DROP:
      const getSelectedDateIndex = state.data.findIndex((todo: eachTask) => todo.id === action.id);
      state.data[getSelectedDateIndex].status = 'completed';
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