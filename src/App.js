import React, { useState } from "react";
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

function App() {
  const [hideCompletedTasks, setHideCompleted] = useState(false);

  const toggleHideCompleted = () => {
    setHideCompleted((hideCompletedTasks => !hideCompletedTasks));
  };
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" body={<Form />} />
      <Section
        title="Lista zadań"
        body={<Tasks tasks={tasks} hideCompletedTasks={hideCompletedTasks} />}
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideCompletedTasks={hideCompletedTasks}
            toggleHideCompleted={toggleHideCompleted}
          />
        }
      />
    </Container>
  );
}

export default App;
