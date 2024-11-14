import Form from "./Form/index.js";
import TaskList from "./TaskList/index.js";
import Buttons from "./Buttons/index.js";
import Section from "../../Common/Section";
import Header from "../../Common/Header";
import {Container} from "../../Common/Container";
import { useTasks } from "../../useTasks.js";

function Tasks() {
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
          <TaskList
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

export default Tasks;
