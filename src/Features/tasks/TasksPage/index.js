import Form from "../TasksPage/Form/index.js";
import TaskList from "../TasksPage/TaskList/index.js";
import Buttons from "../TasksPage/Buttons/index.js";
import Section from "../../../Common/Section/index.js";
import Header from "../../../Common/Header/index.js";
import { Container } from "../../../Common/Container/index.js";
import { useLocation } from "react-router-dom";
import {Search} from "./Search"

function TasksPage() {
  const location = useLocation();

  return (
    <Container>
      {location.hash}

      <Header title="Lista zadań" />

      <Section title="Dodaj nowe zadanie" body={<Form />} />

      <Section title="Wyszukiwarka" body={<Search />} />

      <Section
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default TasksPage;
