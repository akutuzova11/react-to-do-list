import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [
      { id: 1, content: "Spacer w parku", completed: false },
      { id: 2, content: "Yoga o 19:30", completed: true },
    ],
    hideCompleted: false,
  },
  reducers: {
    addTask: ({ tasks }, { payload }) => {
      tasks.push(payload);
    },
    removeTask: (state, { payload }) => {
      state.tasks = state.tasks.filter(({ id }) => id !== payload);
    },
    toggleHideCompleted: (state) => {
      state.hideCompleted = !state.hideCompleted;
    },
    toggleTaskCompleted: ({ tasks }, { payload }) => {
      const index = tasks.findIndex(({ id }) => id === payload);
      tasks[index].completed = !tasks[index].completed;
    },
    setAllCompleted: (state) => {
      state.tasks = state.tasks.map((task) => ({
        ...task,
        completed: true,
      }));
    },
  },
});

export const {
  addTask,
  removeTask,
  toggleHideCompleted,
  toggleTaskCompleted,
  setAllCompleted,
} = tasksSlice.actions;

export const selectTasks = (state) => state.tasks.tasks;
export const selectHideCompleted = ({ tasks }) => tasks.hideCompleted;
export default tasksSlice.reducer;
