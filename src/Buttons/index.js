import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideCompletedTasks }) => (
  <div className="todoSectionContainer">
    {tasks.length > 0 && (
      <>
        <button className="todoSectionContainer__buttons">
          {hideCompletedTasks ? "Pokaż" : "Ukryj"} ukończone
        </button>
        <button
          className="todoSectionContainer__buttons"
          disabled={tasks.every(({ completed }) => completed)}
        >
          Ukończ wszystkie
        </button>
      </>
    )}
  </div>
);

export default Buttons;
