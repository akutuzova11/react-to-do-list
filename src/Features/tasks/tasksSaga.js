import {
  debounce,
  call,
  put,
  delay,
  select,
  takeEvery,
} from "redux-saga/effects";
import { fetchExampleTasks, setTasks, selectTasks } from "./TasksSlice.js";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
  console.log("Zaczynam pracę");
  try {
    const tasks = yield select(selectTasks);
    console.log(tasks);
    yield delay(1000);
    const exampleTasks = yield call(getExampleTasks);
    yield put(setTasks(exampleTasks.tasks));
  } catch (error) {
    yield call(alert, "Coś poszło nie tak");
  }
}

function* saveTasksInLocalStorageHandler() {
  const tasks = yield select(selectTasks);
  yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
  yield debounce(2000, fetchExampleTasks.type, fetchExampleTasksHandler);
  yield takeEvery("*", saveTasksInLocalStorageHandler);
}
