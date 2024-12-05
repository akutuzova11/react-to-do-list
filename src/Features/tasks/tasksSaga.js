import {
  debounce,
  call,
  put,
  delay,
  select,
  takeLatest,
  takeEvery
} from "redux-saga/effects";
import {
  fetchExampleTasks,
  setTasks,
  selectTasks,
  toggleTasksAreLoading,
} from "./TasksSlice.js";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
  try {
    yield put(toggleTasksAreLoading());
    yield delay(1000);
    const exampleTasks = yield call(getExampleTasks);
    yield put(setTasks(exampleTasks.tasks));
    yield put(toggleTasksAreLoading());
  } catch (error) {
    yield call(alert, "Coś poszło nie tak");
  }
}

function* saveTasksInLocalStorageHandler() {
  const tasks = yield select(selectTasks);
  yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
  yield takeEvery("*", saveTasksInLocalStorageHandler);
}
