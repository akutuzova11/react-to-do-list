import { createSlice, createSelector } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: getTasksFromLocalStorage(),
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
    fetchExampleTasks: () => {},
    setTasks: (state, { payload: tasks }) => {
      state.tasks = tasks;
    },
  },
});

export const {
  addTask,
  removeTask,
  toggleHideCompleted,
  toggleTaskCompleted,
  setAllCompleted,
  fetchExampleTasks,
  setTasks,
} = tasksSlice.actions;

export const selectTasks = (state) => state.tasks?.tasks || [];
export const selectHideCompleted = ({ tasks }) => tasks.hideCompleted;

export const getTaskByID = (state, taskId) =>
  selectTasks(state).find(({ id }) => id === taskId);

export const selectTasksByQuery = (state, query) => {
  const tasks = selectTasks(state);
  if (!query || query.trim() === "") {
    return tasks;
  }
  return tasks.filter(({ content }) =>
    content.toUpperCase().includes(query.trim().toUpperCase())
  );
};

export default tasksSlice.reducer;

