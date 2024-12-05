import { useDispatch, useSelector } from "react-redux";
import {selectTasksAreLoading, fetchExampleTasks} from "../../TasksSlice"
import { ButtonStyled, Container } from "../Buttons/styled";

const FetchButton = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectTasksAreLoading);

  return (
    <Container>
      <ButtonStyled
        disabled={isLoading}
        onClick={() => dispatch(fetchExampleTasks())}
      >
        {isLoading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
      </ButtonStyled>
    </Container>
  );
};

export default FetchButton;
