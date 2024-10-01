import React from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  { id: 1, content: "Przejść na Reakta", completed: false },
  { id: 2, content: "Zjeść obiad", completed: true },
];

const hideCompletedTasks = false;

function App() {
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" body={<Form />} />
      <Section
        title="Lista zadań"
        body={<Tasks tasks={tasks} hideCompletedTasks={hideCompletedTasks} />}
        extraHeaderContent={
          <Buttons tasks={tasks} hideCompletedTasks={hideCompletedTasks} />
        }
      />
    </Container>
  );
}

export default App;
