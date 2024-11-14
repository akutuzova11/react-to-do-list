import React, { useState, useRef } from "react";
import { Template, Button, NewItem } from "./styled.js";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const onFormSubmit = (event) => {
    event.preventDefault();
    const trimmedContent = newTaskContent.trim();
    if (!trimmedContent) return;
    addNewTask(trimmedContent);
    setNewTaskContent("");
    inputRef.current.focus();
  };

  return (
    <Template onSubmit={onFormSubmit}>
      <NewItem
        ref={inputRef}
        value={newTaskContent}
        type="text"
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <Button type="submit">Dodaj zadanie</Button>
    </Template>
  );
};

export default Form;
