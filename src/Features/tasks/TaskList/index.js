import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { List, Item, Content, Button } from "./styled.js";
import {
  selectTasks,
  toggleTaskCompleted,
  selectHideCompleted,
  removeTask,
} from "../TasksSlice.js";

const TaskList = () => {
  const tasks = useSelector(selectTasks);
  const hideCompletedTasks = useSelector(selectHideCompleted);
  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.completed && hideCompletedTasks}>
          <Button onClick={() => dispatch(toggleTaskCompleted(task.id))}>
            {task.completed ? "✔" : ""}
          </Button>
          <Content completed={task.completed}>{task.content}</Content>
          <Button deleted onClick={() => dispatch(removeTask(task.id))}>
            🗑
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default TaskList;
