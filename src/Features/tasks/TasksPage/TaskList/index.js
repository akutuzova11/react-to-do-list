import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { List, Item, Content, Button, LinkStyled } from "./styled.js";
import {
  toggleTaskCompleted,
  selectHideCompleted,
  removeTask,
  selectTasksByQuery,
} from "../../TasksSlice.js";
import searchQueryParamName from "../../searchQueryParamName.js";

const TaskList = () => {
  const location = useLocation();
  const query =
    new URLSearchParams(location.search).get(searchQueryParamName) || "";

  const tasks = useSelector((state) => selectTasksByQuery(state, query)) || [];
  const hideCompletedTasks = useSelector(selectHideCompleted);
  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.completed && hideCompletedTasks}>
          <Button onClick={() => dispatch(toggleTaskCompleted(task.id))}>
            {task.completed ? "✔" : ""}
          </Button>
          <Content completed={task.completed}>
            <LinkStyled to={`/zadania/${task.id}`}>{task.content}</LinkStyled>
          </Content>
          <Button $isDeleted onClick={() => dispatch(removeTask(task.id))}>
            🗑
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default TaskList;
