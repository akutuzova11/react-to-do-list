import React from "react";
import "./style.css";

const Tasks = ({ tasks, hideCompletedTasks, removeTask }) => (
  <ul className="todoTasks">
    {tasks.map((task) => (
      <li
        key={task.id}
        className={`todoTasks__item ${
          task.completed && hideCompletedTasks ? "todoTasks__items--hidden" : ""
        }`}
      >
        <button className="todoTasks__button">
          {task.completed ? "✔" : ""}
        </button>
        <span
          className={`${
            task.completed ? "todoTasks__item--toggleCompleted" : ""
          }`}
        >
          {task.content}
        </span>
        <button className="todoTasks__button todoTasks__button--deleted"
        onClick={()=>removeTask(task.id)}
        >
          🗑
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;
