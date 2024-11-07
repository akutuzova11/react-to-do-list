import React from "react";
import { List, Item, Content, Button } from "./styled.js";

const Tasks = ({
  tasks,
  hideCompletedTasks,
  removeTask,
  toggleTaskCompleted,
}) => (
  <List>
    {tasks.map((task) => (
      <Item key={task.id} hidden={task.completed && hideCompletedTasks}>
        <Button onClick={() => toggleTaskCompleted(task.id)}>
          {task.completed ? "✔" : ""}
        </Button>
        <Content completed={task.completed}>{task.content}</Content>
        <Button deleted onClick={() => removeTask(task.id)}>
          🗑
        </Button>
      </Item>
    ))}
  </List>
);

export default Tasks;
