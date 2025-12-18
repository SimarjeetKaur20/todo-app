import React, { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList() {
  const [todos] = useState([
    "Learn React basics",
    "Build Todo App",
    "Push project to GitHub",
    "Improve UI and features"
  ]);

  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem key={index} text={todo} />
      ))}
    </div>
  );
}

export default TodoList;
