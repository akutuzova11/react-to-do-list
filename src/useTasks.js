import React, { useState, useEffect } from "react";

export const useTasks = () => {
  const defaultTasks = [
    { id: 1, content: "Spacer w parku", completed: false },
    { id: 2, content: "Yoga o 19:30", completed: true },
  ];

  const [hideCompletedTasks, setHideCompletedTasks] = useState(false);

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : defaultTasks;
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const toggleHideCompleted = () => {
    setHideCompletedTasks((hideCompletedTasks) => !hideCompletedTasks);
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

  const setAllCompleted = () => {
    setTasks((tasks) => tasks.map((task) => ({ ...task, completed: true })));
  };

  const addNewTask = (newTaskContent) => {
    setTasks((tasks) => [
      ...tasks,
      {
        content: newTaskContent,
        completed: false,
        id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
      },
    ]);
  };
  return {
    tasks,
    hideCompletedTasks,
    toggleHideCompleted,
    removeTask,
    toggleTaskCompleted,
    setAllCompleted,
    addNewTask,
  };
};