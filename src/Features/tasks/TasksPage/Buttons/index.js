import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Selectors } from "./styled.js";
import {
  selectTasks,
  toggleHideCompleted,
  selectHideCompleted,
  setAllCompleted,
  fetchExampleTasks,
} from "../../TasksSlice.js";

const Buttons = () => {
  const tasksData = useSelector(selectTasks);
  const dispatch = useDispatch();
  const hideCompletedTasks = useSelector(selectHideCompleted);

const tasks = Array.isArray(tasksData) ? tasksData : tasksData?.tasks || [];

const allCompleted = tasks.length > 0 && tasks.every(({completed})=>completed);

  return (
    <Container>
      <Selectors onClick={() => dispatch(fetchExampleTasks())}>
        Pobierz przykładowe zadania
      </Selectors>
      {tasks.length > 0 && (
        <>
          <Selectors onClick={() => dispatch(toggleHideCompleted())}>
            {hideCompletedTasks ? "Pokaż" : "Ukryj"} ukończone
          </Selectors>
          <Selectors
            onClick={() => dispatch(setAllCompleted())}
            disabled={allCompleted}
          >
            Ukończ wszystkie
          </Selectors>
        </>
      )}
    </Container>
  );
};

export default Buttons;
