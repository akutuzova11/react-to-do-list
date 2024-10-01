import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideCompletedTasks }) => (
  <div className="todoSection__buttonsContainer">
    {tasks.length > 0 && (
      <>
        <button className="todoSection__buttons">
          {hideCompletedTasks ? "Pokaż" : "Ukryj"} ukończone
        </button>

        <button
          className="todoSection__buttons"
          disabled={tasks.every(({ completed }) => completed)}
        >
          Ukończ wszystkie
        </button>
      </>
    )}
  </div>
);

export default Buttons;
