import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, ButtonStyled } from "./styled.js";
import {
  selectTasks,
  toggleHideCompleted,
  selectHideCompleted,
  setAllCompleted,
} from "../../TasksSlice.js";

const Buttons = () => {
  const tasksData = useSelector(selectTasks);
  const dispatch = useDispatch();
  const hideCompletedTasks = useSelector(selectHideCompleted);

  const tasks = Array.isArray(tasksData) ? tasksData : tasksData?.tasks || [];

  const allCompleted =
    tasks.length > 0 && tasks.every(({ completed }) => completed);

  return (
    <Container>
      {tasks.length > 0 && (
        <>
          <ButtonStyled onClick={() => dispatch(toggleHideCompleted())}>
            {hideCompletedTasks ? "Pokaż" : "Ukryj"} ukończone
          </ButtonStyled>
          <ButtonStyled
            onClick={() => dispatch(setAllCompleted())}
            disabled={allCompleted}
          >
            Ukończ wszystkie
          </ButtonStyled>
        </>
      )}
    </Container>
  );
};

export default Buttons;
