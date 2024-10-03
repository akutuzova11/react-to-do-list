import React, { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

function App() {
  const [hideCompletedTasks, setHideCompleted] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, content: "Przejść na Reakta", completed: false },
    { id: 2, content: "Zjeść obiad", completed: true },
  ]);

  const toggleHideCompleted = () => {
    setHideCompleted((hideCompletedTasks) => !hideCompletedTasks);
  };

  const removeTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const toggleTaskCompleted = (id) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" body={<Form />} />
      <Section
        title="Lista zadań"
        body={
          <Tasks
            tasks={tasks}
            hideCompletedTasks={hideCompletedTasks}
            removeTask={removeTask}
            toggleTaskCompleted={toggleTaskCompleted}
          />
        }
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
