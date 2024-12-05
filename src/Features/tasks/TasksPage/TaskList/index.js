import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { List, Item, Content, Button } from "./styled.js";
import {
  toggleTaskCompleted,
  selectHideCompleted,
  removeTask,
  selectTasksByQuery,
} from "../../tasksSlice.js";
import { Link, useLocation } from "react-router-dom";
import searchQueryParamName from "../searchQueryParamName.js";

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
            <Link to={`/zadania/${task.id}`}>{task.content}</Link>
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
