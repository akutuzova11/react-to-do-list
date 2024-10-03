import React, { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    addNewTask(newTaskContent.trim());
    setNewTaskContent("");
  };

  return (
    <form className="todoForm" onSubmit={onFormSubmit}>
      <input
        value={newTaskContent}
        className="todoForm__newItem"
        type="text"
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
        autoFocus
      />
      <button className="todoForm__button">Dodaj zadanie</button>
    </form>
  );
};

export default Form;
