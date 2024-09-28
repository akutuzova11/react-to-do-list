import React from 'react';
import "./style.css";

const Form = () => (
  <form className="todoForm">
    <input
      className="todoForm__newItem"
      type="text"
      placeholder="Co jest do zrobienia?"
      autoFocus
    />
    <button className="todoForm__button">Dodaj zadanie</button>
  </form>
);

export default Form;
