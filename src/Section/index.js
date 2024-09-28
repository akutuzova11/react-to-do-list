import React from "react";
import "./style.css";

const Section = ({ title, body, extraHeaderContent }) => (
  <section className="todoSection">
    <header className="todoSection__header">
      <h2 className="todoSection__title">{title}</h2>
      {extraHeaderContent}
    </header>
    <div className="todoSection__container">{body}</div>
  </section>
);

export default Section;
