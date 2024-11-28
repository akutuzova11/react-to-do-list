import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Selectors } from "./styled.js";
import {
  selectTasks,
  toggleHideCompleted,
  selectHideCompleted,
  setAllCompleted,
} from "../tasksSlice.js";

const Buttons = () => {
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();
  const hideCompletedTasks = useSelector(selectHideCompleted);

  return (
    <Container>
      {tasks.length > 0 && (
        <>
          <Selectors onClick={() => dispatch(toggleHideCompleted())}>
            {hideCompletedTasks ? "Pokaż" : "Ukryj"} ukończone
          </Selectors>
          <Selectors
            onClick={() => dispatch(setAllCompleted())}
            disabled={tasks.every(({ completed }) => completed)}
          >
            Ukończ wszystkie
          </Selectors>
        </>
      )}
    </Container>
  );
};

export default Buttons;
