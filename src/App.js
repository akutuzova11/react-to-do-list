import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import {Container} from "./Container";
import { useTasks } from "./useTasks.js";

function App() {
  const {
    tasks,
    hideCompletedTasks,
    toggleHideCompleted,
    removeTask,
    toggleTaskCompleted,
    setAllCompleted,
    addNewTask,
  } = useTasks();

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />
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
            setAllCompleted={setAllCompleted}
          />
        }
      />
    </Container>
  );
}

export default App;
