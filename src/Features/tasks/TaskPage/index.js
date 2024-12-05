import Section from "../../../Common/Section/index.js";
import Header from "../../../Common/Header/index.js";
import { Container } from "../../../Common/Container/index.js";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskByID } from "../TasksSlice.js";

function TaskPage() {
  const { id } = useParams();
  const task = useSelector((state) => getTaskByID(state, id));
  return (
    <Container>
      <Header title="Szczegóły zadania" />
      <Section
        title={task ? task.content : "Nie znaleziono zadania 😿"}
        body={
          <>
            <strong>Ukończono: </strong>
            {task.completed ? "Tak" : "Nie"}
          </>
        }
      />
    </Container>
  );
}

export default TaskPage;
