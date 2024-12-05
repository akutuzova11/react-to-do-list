import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Template, Button } from "./styled.js";
import { addTask } from "../../TasksSlice.js";
import { nanoid } from "@reduxjs/toolkit";
import Input from "../../Input/index.js";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    const trimmedContent = newTaskContent.trim();
    if (!trimmedContent) return;

    dispatch(
      addTask({
        content: trimmedContent,
        completed: false,
        id: nanoid(),
      })
    );

    setNewTaskContent("");
    inputRef.current.focus();
  };

  return (
    <Template onSubmit={onFormSubmit}>
      <Input
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
