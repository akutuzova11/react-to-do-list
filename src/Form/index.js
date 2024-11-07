import React, { useState } from "react";
import {Template, Button, NewItem} from "./styled.js"

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    const trimmedContent = newTaskContent.trim();
    if (!trimmedContent) return;
    addNewTask(trimmedContent);
    setNewTaskContent("");
  };

  return (
    <Template onSubmit={onFormSubmit}>
      <NewItem
        value={newTaskContent}
        type="text"
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
        autoFocus
      />
      <Button>Dodaj zadanie</Button>
    </Template>
  );
};

export default Form;
