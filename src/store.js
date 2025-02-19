import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import tasksReducer from "./Features/tasks/TasksSlice.js";
import rootSaga from "./Features/tasks/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
