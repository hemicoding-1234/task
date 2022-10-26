import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import cuid from "cuid";

interface Task {
  id: string;
  isEdit: boolean;
  text: string;
  date: string;
}

interface TasksSliceState {
  tasks: Task[];
  selectedDate: string | null;
}

const initialState: TasksSliceState = {
  tasks: [],
  selectedDate: null,
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<{ text: string; date: string }>) => {
      state.tasks = [
        ...state.tasks,
        {
          id: cuid(),
          text: action.payload.text,
          isEdit: false,
          date: action.payload.date,
        },
      ];
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter(
        ({ id }) => id !== action.payload.toString()
      );
    },

    editTask: (
      state,
      action: PayloadAction<{ id: string; text: string; index: number }>
    ) => {
      state.tasks[action.payload.index] = {
        ...state.tasks[action.payload.index],
        text: action.payload.text,
      };
    },

    showOnDate: (state, action: PayloadAction<string>) => {
      state.selectedDate = action.payload;
    },
  },
});

export const { addTask, deleteTask, editTask, showOnDate } =
  tasksSlice.actions;

export const selectCount = (state: RootState) => state.tasks;

export default tasksSlice.reducer;