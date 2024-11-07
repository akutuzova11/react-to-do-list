import React from "react";
import { Container, Selectors } from "./styled.js";

const Buttons = ({
  tasks,
  hideCompletedTasks,
  toggleHideCompleted,
  setAllCompleted,
}) => (
  <Container>
    {tasks.length > 0 && (
      <>
        <Selectors onClick={toggleHideCompleted}>
          {hideCompletedTasks ? "Pokaż" : "Ukryj"} ukończone
        </Selectors>
        <Selectors
          onClick={setAllCompleted}
          disabled={tasks.every(({ completed }) => completed)}
        >
          Ukończ wszystkie
        </Selectors>
      </>
    )}
  </Container>
);

export default Buttons;
