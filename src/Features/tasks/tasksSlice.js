import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: getTasksFromLocalStorage(),
    hideCompleted: false,
    tasksAreLoading: false,
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
    toggleTasksAreLoading: (state) => {
      state.tasksAreLoading = !state.tasksAreLoading;
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
  toggleTasksAreLoading,
} = tasksSlice.actions;

const selectTasksState = (state) => state.tasks;

export const selectTasks = (state) => selectTasksState(state).tasks;
export const selectHideCompleted = (state) =>
  selectTasksState(state).hideCompleted;
export const selectTasksAreLoading = (state) =>
  selectTasksState(state).tasksAreLoading;
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
