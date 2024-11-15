import { configureStore } from "@reduxjs/toolkit";

import tasksReducer from "./Features/tasks/TasksSlice";

export default configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});
